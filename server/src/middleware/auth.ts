import type { NextFunction, Request, Response } from "express";
import { HttpError } from "./errorHandler.js";
import { verifyAuthToken, type AuthTokenPayload, type UserRole } from "../utils/jwt.js";

export const AUTH_COOKIE_NAME = "bsi_token";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: AuthTokenPayload;
    }
  }
}

export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  const token = req.cookies?.[AUTH_COOKIE_NAME];
  if (!token) {
    throw new HttpError(401, "Not authenticated");
  }

  try {
    req.user = verifyAuthToken(token);
  } catch {
    throw new HttpError(401, "Invalid or expired session");
  }

  next();
}

export function requireRole(...roles: UserRole[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      throw new HttpError(403, "Forbidden");
    }
    next();
  };
}
