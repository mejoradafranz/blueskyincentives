import { Router } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { requireAuth, requireRole } from "../../middleware/auth.js";
import { redeem } from "./redemptions.controller.js";

export const redemptionsRoutes = Router();

redemptionsRoutes.post("/", requireAuth, requireRole("employee"), asyncHandler(redeem));
