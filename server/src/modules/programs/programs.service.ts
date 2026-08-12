import { pool } from "../../db/pool.js";

export interface ProgramRow {
  id: string;
  client_company_id: string;
  name: string;
  description: string | null;
  status: "active" | "paused" | "archived";
  budget_cents: string;
  points_per_dollar: number;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
}

export async function listProgramsByCompany(companyId: string): Promise<ProgramRow[]> {
  const { rows } = await pool.query<ProgramRow>(
    "SELECT * FROM programs WHERE client_company_id = $1 ORDER BY created_at DESC",
    [companyId]
  );
  return rows;
}

export async function getProgramForCompany(
  programId: string,
  companyId: string
): Promise<ProgramRow | null> {
  const { rows } = await pool.query<ProgramRow>(
    "SELECT * FROM programs WHERE id = $1 AND client_company_id = $2",
    [programId, companyId]
  );
  return rows[0] ?? null;
}

export interface CreateProgramInput {
  name: string;
  description?: string | null;
  budgetCents: number;
  pointsPerDollar: number;
  startDate?: string | null;
  endDate?: string | null;
}

export async function createProgram(
  companyId: string,
  input: CreateProgramInput
): Promise<ProgramRow> {
  const { rows } = await pool.query<ProgramRow>(
    `INSERT INTO programs (client_company_id, name, description, budget_cents, points_per_dollar, start_date, end_date)
     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [
      companyId,
      input.name,
      input.description ?? null,
      input.budgetCents,
      input.pointsPerDollar,
      input.startDate ?? null,
      input.endDate ?? null,
    ]
  );
  return rows[0];
}

export interface UpdateProgramInput {
  name?: string;
  description?: string | null;
  status?: "active" | "paused" | "archived";
  budgetCents?: number;
  pointsPerDollar?: number;
  startDate?: string | null;
  endDate?: string | null;
}

export async function updateProgram(
  programId: string,
  companyId: string,
  input: UpdateProgramInput
): Promise<ProgramRow | null> {
  const { rows } = await pool.query<ProgramRow>(
    `UPDATE programs SET
       name = COALESCE($3, name),
       description = COALESCE($4, description),
       status = COALESCE($5, status),
       budget_cents = COALESCE($6, budget_cents),
       points_per_dollar = COALESCE($7, points_per_dollar),
       start_date = COALESCE($8, start_date),
       end_date = COALESCE($9, end_date)
     WHERE id = $1 AND client_company_id = $2
     RETURNING *`,
    [
      programId,
      companyId,
      input.name ?? null,
      input.description ?? null,
      input.status ?? null,
      input.budgetCents ?? null,
      input.pointsPerDollar ?? null,
      input.startDate ?? null,
      input.endDate ?? null,
    ]
  );
  return rows[0] ?? null;
}

export function toPublicProgram(program: ProgramRow) {
  return {
    id: program.id,
    name: program.name,
    description: program.description,
    status: program.status,
    budgetCents: Number(program.budget_cents),
    pointsPerDollar: program.points_per_dollar,
    startDate: program.start_date,
    endDate: program.end_date,
    createdAt: program.created_at,
  };
}
