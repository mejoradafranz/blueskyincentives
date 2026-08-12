import { Router } from "express";
import rateLimit from "express-rate-limit";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { submitContact } from "./contact.controller.js";

export const contactRoutes = Router();

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

contactRoutes.post("/", contactLimiter, asyncHandler(submitContact));
