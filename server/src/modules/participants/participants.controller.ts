import type { Request, Response } from "express";
import { z } from "zod";
import { HttpError } from "../../middleware/errorHandler.js";
import {
  addParticipant,
  awardPoints,
  listParticipantsForProgram,
  listTransactionsForParticipant,
  removeParticipant,
  toPublicParticipant,
} from "./participants.service.js";

const addSchema = z.object({
  programId: z.string().uuid(),
  email: z.string().trim().email(),
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
});

const awardSchema = z.object({
  points: z.number().int().refine((n) => n !== 0, "Points must not be zero"),
  note: z.string().trim().max(500).optional(),
});

export async function listParticipants(req: Request, res: Response) {
  const programId = req.query.programId;
  if (typeof programId !== "string") {
    throw new HttpError(400, "programId query parameter is required");
  }
  const participants = await listParticipantsForProgram(programId, req.user!.companyId!);
  res.json({ participants: participants.map(toPublicParticipant) });
}

export async function addParticipantHandler(req: Request, res: Response) {
  const parsed = addSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new HttpError(400, "Please check the participant details and try again.");
  }
  const { participant, tempPassword } = await addParticipant(req.user!.companyId!, parsed.data);
  res.status(201).json({ participant: toPublicParticipant(participant), tempPassword });
}

export async function removeParticipantHandler(req: Request, res: Response) {
  await removeParticipant(req.params.id, req.user!.companyId!);
  res.status(204).send();
}

export async function awardPointsHandler(req: Request, res: Response) {
  const parsed = awardSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new HttpError(400, "Please enter a valid, non-zero number of points.");
  }
  const participant = await awardPoints(
    req.params.id,
    req.user!.companyId!,
    parsed.data,
    req.user!.sub
  );
  res.json({ participant: toPublicParticipant(participant) });
}

export async function listTransactionsHandler(req: Request, res: Response) {
  const transactions = await listTransactionsForParticipant(req.params.id, req.user!.companyId!);
  res.json({ transactions });
}
