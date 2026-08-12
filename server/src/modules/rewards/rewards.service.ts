import { pool } from "../../db/pool.js";

export interface RewardRow {
  id: string;
  client_company_id: string | null;
  name: string;
  description: string | null;
  category: "gift_card" | "merchandise" | "experience" | "other";
  points_cost: number;
  is_active: boolean;
}

export async function listRewardsForCompany(companyId: string): Promise<RewardRow[]> {
  const { rows } = await pool.query<RewardRow>(
    `SELECT * FROM rewards_catalog
     WHERE is_active = true AND (client_company_id IS NULL OR client_company_id = $1)
     ORDER BY points_cost ASC`,
    [companyId]
  );
  return rows;
}

export async function getRewardForCompany(
  rewardId: string,
  companyId: string
): Promise<RewardRow | null> {
  const { rows } = await pool.query<RewardRow>(
    `SELECT * FROM rewards_catalog
     WHERE id = $1 AND is_active = true AND (client_company_id IS NULL OR client_company_id = $2)`,
    [rewardId, companyId]
  );
  return rows[0] ?? null;
}

export function toPublicReward(r: RewardRow) {
  return {
    id: r.id,
    name: r.name,
    description: r.description,
    category: r.category,
    pointsCost: r.points_cost,
    isActive: r.is_active,
  };
}
