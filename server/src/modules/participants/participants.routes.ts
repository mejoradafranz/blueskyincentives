import { Router } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { requireAuth, requireRole } from "../../middleware/auth.js";
import {
  addParticipantHandler,
  awardPointsHandler,
  listParticipants,
  listTransactionsHandler,
  removeParticipantHandler,
} from "./participants.controller.js";

export const participantsRoutes = Router();

participantsRoutes.use(requireAuth, requireRole("client_admin"));

participantsRoutes.get("/", asyncHandler(listParticipants));
participantsRoutes.post("/", asyncHandler(addParticipantHandler));
participantsRoutes.delete("/:id", asyncHandler(removeParticipantHandler));
participantsRoutes.post("/:id/award", asyncHandler(awardPointsHandler));
participantsRoutes.get("/:id/transactions", asyncHandler(listTransactionsHandler));
