import type { Request, Response } from "express";
import { z } from "zod";
import { pool } from "../../db/pool.js";
import { hashPassword } from "../../utils/password.js";
import { HttpError } from "../../middleware/errorHandler.js";

const bootstrapSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().optional().default(""),
  companyName: z.string().min(1),
});

export async function bootstrapOwner(req: Request, res: Response) {
  const { rows: countRows } = await pool.query<{ count: string }>("SELECT COUNT(*) FROM users");
  if (Number(countRows[0].count) > 0) {
    throw new HttpError(403, "Setup has already been completed.");
  }

  const parsed = bootstrapSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new HttpError(400, "Invalid setup payload.");
  }

  const { email, password, firstName, lastName, companyName } = parsed.data;
  const passwordHash = await hashPassword(password);

  const { rows: companyRows } = await pool.query<{ id: string }>(
    `INSERT INTO client_companies (name) VALUES ($1) RETURNING id`,
    [companyName]
  );
  const companyId = companyRows[0].id;

  await pool.query(
    `INSERT INTO users (email, password_hash, role, client_company_id, first_name, last_name)
     VALUES ($1, $2, 'client_admin', $3, $4, $5)`,
    [email, passwordHash, companyId, firstName, lastName]
  );

  res.status(201).json({ ok: true });
}
