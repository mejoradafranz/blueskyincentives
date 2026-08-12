import { api } from "./client";

export function redeem(participantId: string, rewardId: string) {
  return api.post<{ redemption: { id: string; pointsSpent: number } }>("/redemptions", {
    participantId,
    rewardId,
  });
}
