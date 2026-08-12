import type { CookieOptions, Request, Response } from "express";
import { z } from "zod";
import { env } from "../../config/env.js";
import { AUTH_COOKIE_NAME } from "../../middleware/auth.js";
import { HttpError } from "../../middleware/errorHandler.js";
import { comparePassword } from "../../utils/password.js";
import { signAuthToken } from "../../utils/jwt.js";
import { findUserByEmail, findUserById, toPublicUser } from "./auth.service.js";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: env.isProduction,
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
};

export async function login(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new HttpError(400, "Email and password are required");
  }

  const { email, password } = parsed.data;
  const user = await findUserByEmail(email);
  if (!user || user.status !== "active") {
    throw new HttpError(401, "Invalid email or password");
  }

  const passwordMatches = await comparePassword(password, user.password_hash);
  if (!passwordMatches) {
    throw new HttpError(401, "Invalid email or password");
  }

  const token = signAuthToken({
    sub: user.id,
    role: user.role,
    companyId: user.client_company_id,
  });

  res.cookie(AUTH_COOKIE_NAME, token, cookieOptions);
  res.json({ user: toPublicUser(user) });
}

export async function logout(_req: Request, res: Response) {
  res.clearCookie(AUTH_COOKIE_NAME, { ...cookieOptions, maxAge: undefined });
  res.status(204).send();
}

export async function me(req: Request, res: Response) {
  if (!req.user) {
    throw new HttpError(401, "Not authenticated");
  }

  const user = await findUserById(req.user.sub);
  if (!user) {
    throw new HttpError(401, "Not authenticated");
  }

  res.json({ user: toPublicUser(user) });
}
