import { api } from "./client";
import type { RewardCatalogItem } from "../types";

export function listRewards() {
  return api.get<{ rewards: RewardCatalogItem[] }>("/rewards");
}
