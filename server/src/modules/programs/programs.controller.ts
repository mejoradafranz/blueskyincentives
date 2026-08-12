import type { Request, Response } from "express";
import { z } from "zod";
import { HttpError } from "../../middleware/errorHandler.js";
import {
  createProgram,
  getProgramForCompany,
  listProgramsByCompany,
  toPublicProgram,
  updateProgram,
} from "./programs.service.js";

const createSchema = z.object({
  name: z.string().trim().min(1).max(200),
  description: z.string().trim().max(2000).optional(),
  budgetDollars: z.number().nonnegative(),
  pointsPerDollar: z.number().int().positive(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

const updateSchema = z.object({
  name: z.string().trim().min(1).max(200).optional(),
  description: z.string().trim().max(2000).optional(),
  status: z.enum(["active", "paused", "archived"]).optional(),
  budgetDollars: z.number().nonnegative().optional(),
  pointsPerDollar: z.number().int().positive().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

export async function listPrograms(req: Request, res: Response) {
  const programs = await listProgramsByCompany(req.user!.companyId!);
  res.json({ programs: programs.map(toPublicProgram) });
}

export async function createProgramHandler(req: Request, res: Response) {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new HttpError(400, "Please check the program details and try again.");
  }
  const { budgetDollars, ...rest } = parsed.data;
  const program = await createProgram(req.user!.companyId!, {
    ...rest,
    budgetCents: Math.round(budgetDollars * 100),
  });
  res.status(201).json({ program: toPublicProgram(program) });
}

export async function getProgramHandler(req: Request, res: Response) {
  const program = await getProgramForCompany(req.params.id, req.user!.companyId!);
  if (!program) {
    throw new HttpError(404, "Program not found");
  }
  res.json({ program: toPublicProgram(program) });
}

export async function updateProgramHandler(req: Request, res: Response) {
  const parsed = updateSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new HttpError(400, "Please check the program details and try again.");
  }
  const { budgetDollars, ...rest } = parsed.data;
  const program = await updateProgram(req.params.id, req.user!.companyId!, {
    ...rest,
    budgetCents: budgetDollars !== undefined ? Math.round(budgetDollars * 100) : undefined,
  });
  if (!program) {
    throw new HttpError(404, "Program not found");
  }
  res.json({ program: toPublicProgram(program) });
}
