import type { Request, Response } from "express";
import { z } from "zod";
import { HttpError } from "../../middleware/errorHandler.js";
import { createContactSubmission } from "./contact.service.js";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email(),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1).max(5000),
});

export async function submitContact(req: Request, res: Response) {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new HttpError(400, "Please fill in all required fields with valid values.");
  }

  await createContactSubmission(parsed.data);
  res.status(201).json({ ok: true });
}
