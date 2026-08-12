import { Router } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { requireAuth, requireRole } from "../../middleware/auth.js";
import { overview, redemptionActivity } from "./reports.controller.js";

export const reportsRoutes = Router();

reportsRoutes.use(requireAuth, requireRole("client_admin"));

reportsRoutes.get("/overview", asyncHandler(overview));
reportsRoutes.get("/redemptions", asyncHandler(redemptionActivity));
