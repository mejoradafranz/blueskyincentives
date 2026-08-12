import { Router } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { requireAuth, requireRole } from "../../middleware/auth.js";
import {
  createProgramHandler,
  getProgramHandler,
  listPrograms,
  updateProgramHandler,
} from "./programs.controller.js";

export const programsRoutes = Router();

programsRoutes.use(requireAuth, requireRole("client_admin"));

programsRoutes.get("/", asyncHandler(listPrograms));
programsRoutes.post("/", asyncHandler(createProgramHandler));
programsRoutes.get("/:id", asyncHandler(getProgramHandler));
programsRoutes.patch("/:id", asyncHandler(updateProgramHandler));
