import type { RewardCatalogItem } from "../../types";
import { Button } from "../ui/Button";
import "./RewardCard.css";

const CATEGORY_LABELS: Record<string, string> = {
  gift_card: "Gift card",
  merchandise: "Merchandise",
  experience: "Experience",
  other: "Other",
};

export function RewardCard({
  reward,
  canAfford,
  onRedeem,
}: {
  reward: RewardCatalogItem;
  canAfford: boolean;
  onRedeem: () => void;
}) {
  return (
    <div className="reward-card">
      <div className="reward-card__category">{CATEGORY_LABELS[reward.category] ?? reward.category}</div>
      <h3 className="reward-card__name">{reward.name}</h3>
      {reward.description && <p className="reward-card__description">{reward.description}</p>}
      <div className="reward-card__footer">
        <span className="reward-card__cost">{reward.pointsCost.toLocaleString()} pts</span>
        <Button variant={canAfford ? "primary" : "secondary"} disabled={!canAfford} onClick={onRedeem}>
          {canAfford ? "Redeem" : "Not enough points"}
        </Button>
      </div>
    </div>
  );
}
