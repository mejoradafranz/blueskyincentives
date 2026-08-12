import { api } from "./client";
import type { AuthUser } from "../types";

export function login(email: string, password: string) {
  return api.post<{ user: AuthUser }>("/auth/login", { email, password });
}

export function logout() {
  return api.post<void>("/auth/logout");
}

export function fetchMe() {
  return api.get<{ user: AuthUser }>("/auth/me");
}
