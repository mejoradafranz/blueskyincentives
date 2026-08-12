import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export type UserRole = "client_admin" | "employee" | "superadmin";

export interface AuthTokenPayload {
  sub: string;
  role: UserRole;
  companyId: string | null;
}

const TOKEN_TTL = "7d";

export function signAuthToken(payload: AuthTokenPayload): string {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: TOKEN_TTL });
}

export function verifyAuthToken(token: string): AuthTokenPayload {
  return jwt.verify(token, env.jwtSecret) as AuthTokenPayload;
}
