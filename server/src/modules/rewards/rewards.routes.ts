import { Router } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { requireAuth } from "../../middleware/auth.js";
import { listRewardsForCompany, toPublicReward } from "./rewards.service.js";

export const rewardsRoutes = Router();

rewardsRoutes.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const rewards = await listRewardsForCompany(req.user!.companyId!);
    res.json({ rewards: rewards.map(toPublicReward) });
  })
);
