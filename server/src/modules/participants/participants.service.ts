import crypto from "node:crypto";
import { pool } from "../../db/pool.js";
import { hashPassword } from "../../utils/password.js";
import { HttpError } from "../../middleware/errorHandler.js";

export interface ParticipantWithUser {
  id: string;
  program_id: string;
  points_balance: number;
  enrolled_at: string;
  status: "active" | "removed";
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
}

export async function listParticipantsForProgram(
  programId: string,
  companyId: string
): Promise<ParticipantWithUser[]> {
  const { rows } = await pool.query<ParticipantWithUser>(
    `SELECT p.id, p.program_id, p.points_balance, p.enrolled_at, p.status,
            u.id as user_id, u.email, u.first_name, u.last_name
     FROM participants p
     JOIN users u ON u.id = p.user_id
     JOIN programs pr ON pr.id = p.program_id
     WHERE p.program_id = $1 AND pr.client_company_id = $2
     ORDER BY p.enrolled_at DESC`,
    [programId, companyId]
  );
  return rows;
}

export async function getParticipantForCompany(
  participantId: string,
  companyId: string
): Promise<ParticipantWithUser | null> {
  const { rows } = await pool.query<ParticipantWithUser>(
    `SELECT p.id, p.program_id, p.points_balance, p.enrolled_at, p.status,
            u.id as user_id, u.email, u.first_name, u.last_name
     FROM participants p
     JOIN users u ON u.id = p.user_id
     JOIN programs pr ON pr.id = p.program_id
     WHERE p.id = $1 AND pr.client_company_id = $2`,
    [participantId, companyId]
  );
  return rows[0] ?? null;
}

async function verifyProgramBelongsToCompany(programId: string, companyId: string) {
  const { rows } = await pool.query(
    "SELECT id FROM programs WHERE id = $1 AND client_company_id = $2",
    [programId, companyId]
  );
  if (!rows[0]) {
    throw new HttpError(404, "Program not found");
  }
}

export interface AddParticipantInput {
  programId: string;
  email: string;
  firstName: string;
  lastName: string;
}

export async function addParticipant(
  companyId: string,
  input: AddParticipantInput
): Promise<{ participant: ParticipantWithUser; tempPassword: string | null }> {
  await verifyProgramBelongsToCompany(input.programId, companyId);

  const { rows: existingRows } = await pool.query<{
    id: string;
    role: string;
    client_company_id: string | null;
  }>("SELECT id, role, client_company_id FROM users WHERE email = $1", [input.email]);
  const existingUser = existingRows[0];

  let userId: string;
  let tempPassword: string | null = null;

  if (existingUser) {
    if (existingUser.role !== "employee" || existingUser.client_company_id !== companyId) {
      throw new HttpError(409, "This email is already in use by a different account.");
    }
    userId = existingUser.id;
  } else {
    tempPassword = crypto.randomBytes(9).toString("base64url");
    const passwordHash = await hashPassword(tempPassword);
    const { rows } = await pool.query<{ id: string }>(
      `INSERT INTO users (email, password_hash, role, client_company_id, first_name, last_name)
       VALUES ($1, $2, 'employee', $3, $4, $5) RETURNING id`,
      [input.email, passwordHash, companyId, input.firstName, input.lastName]
    );
    userId = rows[0].id;
  }

  const { rows: participantRows } = await pool.query<{ id: string }>(
    `INSERT INTO participants (program_id, user_id)
     VALUES ($1, $2)
     ON CONFLICT (program_id, user_id) DO UPDATE SET status = 'active'
     RETURNING id`,
    [input.programId, userId]
  );

  const participant = await getParticipantForCompany(participantRows[0].id, companyId);
  return { participant: participant!, tempPassword };
}

export async function removeParticipant(participantId: string, companyId: string) {
  const { rows } = await pool.query(
    `UPDATE participants p SET status = 'removed'
     FROM programs pr
     WHERE p.id = $1 AND p.program_id = pr.id AND pr.client_company_id = $2
     RETURNING p.id`,
    [participantId, companyId]
  );
  if (!rows[0]) {
    throw new HttpError(404, "Participant not found");
  }
}

export interface AwardPointsInput {
  points: number;
  note?: string | null;
}

export async function awardPoints(
  participantId: string,
  companyId: string,
  input: AwardPointsInput,
  awardedByUserId: string
): Promise<ParticipantWithUser> {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const { rows: participantRows } = await client.query<{ id: string }>(
      `SELECT p.id FROM participants p
       JOIN programs pr ON pr.id = p.program_id
       WHERE p.id = $1 AND pr.client_company_id = $2
       FOR UPDATE OF p`,
      [participantId, companyId]
    );
    if (!participantRows[0]) {
      throw new HttpError(404, "Participant not found");
    }

    await client.query(
      `INSERT INTO points_transactions (participant_id, type, points, note, created_by_user_id)
       VALUES ($1, 'award', $2, $3, $4)`,
      [participantId, input.points, input.note ?? null, awardedByUserId]
    );

    await client.query(
      "UPDATE participants SET points_balance = points_balance + $2 WHERE id = $1",
      [participantId, input.points]
    );

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }

  const participant = await getParticipantForCompany(participantId, companyId);
  return participant!;
}

export interface TransactionRow {
  id: string;
  type: "award" | "adjustment" | "redemption";
  points: number;
  note: string | null;
  created_at: string;
}

export async function listTransactionsForParticipant(
  participantId: string,
  companyId: string
): Promise<TransactionRow[]> {
  const participant = await getParticipantForCompany(participantId, companyId);
  if (!participant) {
    throw new HttpError(404, "Participant not found");
  }

  const { rows } = await pool.query<TransactionRow>(
    `SELECT id, type, points, note, created_at FROM points_transactions
     WHERE participant_id = $1 ORDER BY created_at DESC`,
    [participantId]
  );
  return rows;
}

export function toPublicParticipant(p: ParticipantWithUser) {
  return {
    id: p.id,
    programId: p.program_id,
    pointsBalance: p.points_balance,
    enrolledAt: p.enrolled_at,
    status: p.status,
    user: {
      id: p.user_id,
      email: p.email,
      firstName: p.first_name,
      lastName: p.last_name,
    },
  };
}
