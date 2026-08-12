import { pool } from "../../db/pool.js";

export interface ContactSubmissionInput {
  name: string;
  email: string;
  company?: string | null;
  message: string;
}

export async function createContactSubmission(input: ContactSubmissionInput) {
  await pool.query(
    `INSERT INTO contact_submissions (name, email, company, message)
     VALUES ($1, $2, $3, $4)`,
    [input.name, input.email, input.company ?? null, input.message]
  );
}
