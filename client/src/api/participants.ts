import { api } from "./client";
import type { Participant, PointsTransaction } from "../types";

export function listParticipants(programId: string) {
  return api.get<{ participants: Participant[] }>(
    `/participants?programId=${encodeURIComponent(programId)}`
  );
}

export interface AddParticipantInput {
  programId: string;
  email: string;
  firstName: string;
  lastName: string;
}

export function addParticipant(input: AddParticipantInput) {
  return api.post<{ participant: Participant; tempPassword: string | null }>(
    "/participants",
    input
  );
}

export function removeParticipant(id: string) {
  return api.delete<void>(`/participants/${id}`);
}

export function awardPoints(id: string, points: number, note?: string) {
  return api.post<{ participant: Participant }>(`/participants/${id}/award`, { points, note });
}

export function listTransactions(id: string) {
  return api.get<{ transactions: PointsTransaction[] }>(`/participants/${id}/transactions`);
}
