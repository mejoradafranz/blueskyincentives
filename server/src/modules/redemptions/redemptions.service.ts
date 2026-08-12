import { pool } from "../../db/pool.js";
import { HttpError } from "../../middleware/errorHandler.js";

export interface RedeemInput {
  participantId: string;
  rewardId: string;
}

export async function redeemReward(userId: string, input: RedeemInput) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const { rows: participantRows } = await client.query<{
      id: string;
      points_balance: number;
      client_company_id: string;
    }>(
      `SELECT p.id, p.points_balance, pr.client_company_id
       FROM participants p
       JOIN programs pr ON pr.id = p.program_id
       WHERE p.id = $1 AND p.user_id = $2 AND p.status = 'active'
       FOR UPDATE OF p`,
      [input.participantId, userId]
    );
    const participant = participantRows[0];
    if (!participant) {
      throw new HttpError(404, "Participant not found");
    }

    const { rows: rewardRows } = await client.query<{
      id: string;
      name: string;
      points_cost: number;
      is_active: boolean;
    }>(
      `SELECT id, name, points_cost, is_active FROM rewards_catalog
       WHERE id = $1 AND is_active = true AND (client_company_id IS NULL OR client_company_id = $2)`,
      [input.rewardId, participant.client_company_id]
    );
    const reward = rewardRows[0];
    if (!reward) {
      throw new HttpError(404, "Reward not found or no longer available");
    }

    if (participant.points_balance < reward.points_cost) {
      throw new HttpError(400, "Not enough points to redeem this reward");
    }

    const { rows: txnRows } = await client.query<{ id: string }>(
      `INSERT INTO points_transactions (participant_id, type, points, note)
       VALUES ($1, 'redemption', $2, $3) RETURNING id`,
      [participant.id, -reward.points_cost, `Redeemed: ${reward.name}`]
    );

    await client.query(
      "UPDATE participants SET points_balance = points_balance - $2 WHERE id = $1",
      [participant.id, reward.points_cost]
    );

    const { rows: redemptionRows } = await client.query<{
      id: string;
      points_spent: number;
      status: string;
      created_at: string;
    }>(
      `INSERT INTO redemptions (participant_id, reward_id, points_spent, transaction_id)
       VALUES ($1, $2, $3, $4)
       RETURNING id, points_spent, status, created_at`,
      [participant.id, reward.id, reward.points_cost, txnRows[0].id]
    );

    await client.query("COMMIT");
    return redemptionRows[0];
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}
