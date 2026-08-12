import { pool } from "../../db/pool.js";

export interface UserRow {
  id: string;
  email: string;
  password_hash: string;
  role: "client_admin" | "employee" | "superadmin";
  client_company_id: string | null;
  first_name: string;
  last_name: string;
  status: "active" | "invited" | "disabled";
}

export async function findUserByEmail(email: string): Promise<UserRow | null> {
  const { rows } = await pool.query<UserRow>(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return rows[0] ?? null;
}

export async function findUserById(id: string): Promise<UserRow | null> {
  const { rows } = await pool.query<UserRow>(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );
  return rows[0] ?? null;
}

export function toPublicUser(user: UserRow) {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    companyId: user.client_company_id,
    firstName: user.first_name,
    lastName: user.last_name,
  };
}
