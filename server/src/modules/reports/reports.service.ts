import { pool } from "../../db/pool.js";
import { HttpError } from "../../middleware/errorHandler.js";

async function verifyProgramBelongsToCompany(programId: string, companyId: string) {
  const { rows } = await pool.query<{
    id: string;
    budget_cents: string;
    points_per_dollar: number;
  }>(
    "SELECT id, budget_cents, points_per_dollar FROM programs WHERE id = $1 AND client_company_id = $2",
    [programId, companyId]
  );
  if (!rows[0]) {
    throw new HttpError(404, "Program not found");
  }
  return rows[0];
}

export async function getProgramOverview(programId: string, companyId: string) {
  const program = await verifyProgramBelongsToCompany(programId, companyId);

  const { rows: awardRows } = await pool.query<{ total: string | null }>(
    `SELECT SUM(pt.points) as total
     FROM points_transactions pt
     JOIN participants p ON p.id = pt.participant_id
     WHERE p.program_id = $1 AND pt.type = 'award'`,
    [programId]
  );
  const totalPointsAwarded = Number(awardRows[0].total ?? 0);

  const { rows: redemptionRows } = await pool.query<{ total: string | null }>(
    `SELECT SUM(pt.points) as total
     FROM points_transactions pt
     JOIN participants p ON p.id = pt.participant_id
     WHERE p.program_id = $1 AND pt.type = 'redemption'`,
    [programId]
  );
  const totalPointsRedeemed = Math.abs(Number(redemptionRows[0].total ?? 0));

  const { rows: participantRows } = await pool.query<{ count: string }>(
    `SELECT COUNT(*) as count FROM participants WHERE program_id = $1 AND status = 'active'`,
    [programId]
  );
  const activeParticipants = Number(participantRows[0].count);

  const budgetCents = Number(program.budget_cents);
  const pointsPerDollar = program.points_per_dollar;
  const budgetUsedCents =
    pointsPerDollar > 0 ? Math.round((totalPointsAwarded / pointsPerDollar) * 100) : 0;

  return {
    totalPointsAwarded,
    totalPointsRedeemed,
    activeParticipants,
    budgetCents,
    budgetUsedCents,
    budgetRemainingCents: budgetCents - budgetUsedCents,
  };
}

export async function getRedemptionActivity(
  programId: string,
  companyId: string,
  from?: string,
  to?: string
) {
  await verifyProgramBelongsToCompany(programId, companyId);

  const { rows } = await pool.query<{
    day: string;
    count: string;
    points_spent: string;
  }>(
    `SELECT date_trunc('day', r.created_at)::date as day,
            COUNT(*) as count,
            SUM(r.points_spent) as points_spent
     FROM redemptions r
     JOIN participants p ON p.id = r.participant_id
     WHERE p.program_id = $1
       AND ($2::date IS NULL OR r.created_at >= $2::date)
       AND ($3::date IS NULL OR r.created_at < ($3::date + interval '1 day'))
     GROUP BY day
     ORDER BY day ASC`,
    [programId, from ?? null, to ?? null]
  );

  return rows.map((r) => ({
    date: r.day,
    count: Number(r.count),
    pointsSpent: Number(r.points_spent),
  }));
}
