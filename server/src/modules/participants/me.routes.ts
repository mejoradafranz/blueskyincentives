import { Router } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { requireAuth, requireRole } from "../../middleware/auth.js";
import { HttpError } from "../../middleware/errorHandler.js";
import {
  listParticipantsForUser,
  listRedemptionsForUser,
  listTransactionsForOwnParticipant,
} from "./me.service.js";

export const meRoutes = Router();

meRoutes.use(requireAuth, requireRole("employee"));

meRoutes.get(
  "/participants",
  asyncHandler(async (req, res) => {
    const participants = await listParticipantsForUser(req.user!.sub);
    res.json({
      participants: participants.map((p) => ({
        id: p.id,
        programId: p.program_id,
        programName: p.program_name,
        pointsBalance: p.points_balance,
        enrolledAt: p.enrolled_at,
      })),
    });
  })
);

meRoutes.get(
  "/transactions",
  asyncHandler(async (req, res) => {
    const participantId = req.query.participantId;
    if (typeof participantId !== "string") {
      throw new HttpError(400, "participantId query parameter is required");
    }
    const transactions = await listTransactionsForOwnParticipant(participantId, req.user!.sub);
    res.json({ transactions });
  })
);

meRoutes.get(
  "/redemptions",
  asyncHandler(async (req, res) => {
    const redemptions = await listRedemptionsForUser(req.user!.sub);
    res.json({
      redemptions: redemptions.map((r) => ({
        id: r.id,
        pointsSpent: r.points_spent,
        status: r.status,
        createdAt: r.created_at,
        reward: { id: r.reward_id, name: r.reward_name, category: r.reward_category },
      })),
    });
  })
);
