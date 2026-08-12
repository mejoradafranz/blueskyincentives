import { api } from "./client";
import type { PointsTransaction, Redemption } from "../types";

export interface OwnParticipant {
  id: string;
  programId: string;
  programName: string;
  pointsBalance: number;
  enrolledAt: string;
}

export function listMyParticipants() {
  return api.get<{ participants: OwnParticipant[] }>("/me/participants");
}

export function listMyTransactions(participantId: string) {
  return api.get<{ transactions: PointsTransaction[] }>(
    `/me/transactions?participantId=${encodeURIComponent(participantId)}`
  );
}

export function listMyRedemptions() {
  return api.get<{ redemptions: Redemption[] }>("/me/redemptions");
}
