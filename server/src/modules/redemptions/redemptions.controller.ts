import type { Request, Response } from "express";
import { z } from "zod";
import { HttpError } from "../../middleware/errorHandler.js";
import { redeemReward } from "./redemptions.service.js";

const redeemSchema = z.object({
  participantId: z.string().uuid(),
  rewardId: z.string().uuid(),
});

export async function redeem(req: Request, res: Response) {
  const parsed = redeemSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new HttpError(400, "A participant and reward are required.");
  }

  const redemption = await redeemReward(req.user!.sub, parsed.data);
  res.status(201).json({ redemption });
}
