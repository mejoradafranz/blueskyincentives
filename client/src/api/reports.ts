import { api } from "./client";
import type { ProgramOverview } from "../types";

export function getOverview(programId: string) {
  return api.get<ProgramOverview>(`/reports/overview?programId=${encodeURIComponent(programId)}`);
}

export interface RedemptionActivityPoint {
  date: string;
  count: number;
  pointsSpent: number;
}

export function getRedemptionActivity(programId: string) {
  return api.get<{ activity: RedemptionActivityPoint[] }>(
    `/reports/redemptions?programId=${encodeURIComponent(programId)}`
  );
}
