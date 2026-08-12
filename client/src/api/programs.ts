import { api } from "./client";
import type { Program } from "../types";

export function listPrograms() {
  return api.get<{ programs: Program[] }>("/programs");
}

export interface CreateProgramInput {
  name: string;
  description?: string;
  budgetDollars: number;
  pointsPerDollar: number;
  startDate?: string;
  endDate?: string;
}

export function createProgram(input: CreateProgramInput) {
  return api.post<{ program: Program }>("/programs", input);
}

export interface UpdateProgramInput {
  name?: string;
  description?: string;
  status?: Program["status"];
  budgetDollars?: number;
  pointsPerDollar?: number;
}

export function updateProgram(id: string, input: UpdateProgramInput) {
  return api.patch<{ program: Program }>(`/programs/${id}`, input);
}
