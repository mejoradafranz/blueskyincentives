import { Router } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { requireAuth, requireRole } from "../../middleware/auth.js";
import { pool } from "../../db/pool.js";
import { HttpError } from "../../middleware/errorHandler.js";

export const companiesRoutes = Router();

companiesRoutes.get(
  "/me",
  requireAuth,
  requireRole("client_admin"),
  asyncHandler(async (req, res) => {
    const { rows } = await pool.query(
      "SELECT id, name, status, created_at FROM client_companies WHERE id = $1",
      [req.user!.companyId]
    );
    if (!rows[0]) {
      throw new HttpError(404, "Company not found");
    }
    res.json({ company: rows[0] });
  })
);
