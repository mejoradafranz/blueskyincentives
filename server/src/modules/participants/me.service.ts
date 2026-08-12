import { pool } from "../../db/pool.js";

export interface OwnParticipantRow {
  id: string;
  program_id: string;
  program_name: string;
  points_balance: number;
  enrolled_at: string;
  status: "active" | "removed";
}

export async function listParticipantsForUser(userId: string): Promise<OwnParticipantRow[]> {
  const { rows } = await pool.query<OwnParticipantRow>(
    `SELECT p.id, p.program_id, pr.name as program_name, p.points_balance, p.enrolled_at, p.status
     FROM participants p
     JOIN programs pr ON pr.id = p.program_id
     WHERE p.user_id = $1 AND p.status = 'active'
     ORDER BY p.enrolled_at ASC`,
    [userId]
  );
  return rows;
}

export async function getOwnParticipant(
  participantId: string,
  userId: string
): Promise<OwnParticipantRow | null> {
  const { rows } = await pool.query<OwnParticipantRow>(
    `SELECT p.id, p.program_id, pr.name as program_name, p.points_balance, p.enrolled_at, p.status
     FROM participants p
     JOIN programs pr ON pr.id = p.program_id
     WHERE p.id = $1 AND p.user_id = $2`,
    [participantId, userId]
  );
  return rows[0] ?? null;
}

export interface OwnTransactionRow {
  id: string;
  type: "award" | "adjustment" | "redemption";
  points: number;
  note: string | null;
  created_at: string;
}

export async function listTransactionsForOwnParticipant(
  participantId: string,
  userId: string
): Promise<OwnTransactionRow[]> {
  const participant = await getOwnParticipant(participantId, userId);
  if (!participant) return [];

  const { rows } = await pool.query<OwnTransactionRow>(
    `SELECT id, type, points, note, created_at FROM points_transactions
     WHERE participant_id = $1 ORDER BY created_at DESC`,
    [participantId]
  );
  return rows;
}

export interface OwnRedemptionRow {
  id: string;
  points_spent: number;
  status: "completed" | "pending" | "cancelled";
  created_at: string;
  reward_id: string;
  reward_name: string;
  reward_category: string;
}

export async function listRedemptionsForUser(userId: string): Promise<OwnRedemptionRow[]> {
  const { rows } = await pool.query<OwnRedemptionRow>(
    `SELECT r.id, r.points_spent, r.status, r.created_at,
            rc.id as reward_id, rc.name as reward_name, rc.category as reward_category
     FROM redemptions r
     JOIN participants p ON p.id = r.participant_id
     JOIN rewards_catalog rc ON rc.id = r.reward_id
     WHERE p.user_id = $1
     ORDER BY r.created_at DESC`,
    [userId]
  );
  return rows;
}
