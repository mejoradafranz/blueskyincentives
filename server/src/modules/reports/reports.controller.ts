import type { Request, Response } from "express";
import { HttpError } from "../../middleware/errorHandler.js";
import { getProgramOverview, getRedemptionActivity } from "./reports.service.js";

function requireProgramId(req: Request): string {
  const programId = req.query.programId;
  if (typeof programId !== "string") {
    throw new HttpError(400, "programId query parameter is required");
  }
  return programId;
}

export async function overview(req: Request, res: Response) {
  const programId = requireProgramId(req);
  const overview = await getProgramOverview(programId, req.user!.companyId!);
  res.json(overview);
}

export async function redemptionActivity(req: Request, res: Response) {
  const programId = requireProgramId(req);
  const from = typeof req.query.from === "string" ? req.query.from : undefined;
  const to = typeof req.query.to === "string" ? req.query.to : undefined;
  const activity = await getRedemptionActivity(programId, req.user!.companyId!, from, to);
  res.json({ activity });
}
