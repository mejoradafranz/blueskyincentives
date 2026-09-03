import { Router } from "express";
import rateLimit from "express-rate-limit";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { bootstrapOwner } from "./setup.controller.js";

export const setupRoutes = Router();

const bootstrapLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

setupRoutes.post("/bootstrap-owner", bootstrapLimiter, asyncHandler(bootstrapOwner));
