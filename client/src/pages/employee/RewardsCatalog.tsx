import { useEffect, useState } from "react";
import { useMyParticipant } from "./useMyParticipant";
import * as rewardsApi from "../../api/rewards";
import * as redemptionsApi from "../../api/redemptions";
import type { RewardCatalogItem } from "../../types";
import { PageHeader } from "../../components/ui/PageHeader";
import { RewardCard } from "../../components/employee/RewardCard";
import { Modal } from "../../components/ui/Modal";
import { Button } from "../../components/ui/Button";
import { LoadingScreen } from "../../components/ui/LoadingScreen";
import { ApiError } from "../../api/client";

export function RewardsCatalog() {
  const { participant, isLoading: participantLoading, refresh: refreshParticipant } =
    useMyParticipant();
  const [rewards, setRewards] = useState<RewardCatalogItem[]>([]);
  const [confirming, setConfirming] = useState<RewardCatalogItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    rewardsApi.listRewards().then(({ rewards }) => setRewards(rewards));
  }, []);

  async function handleConfirm() {
    if (!confirming || !participant) return;
    setError(null);
    setIsRedeeming(true);
    try {
      await redemptionsApi.redeem(participant.id, confirming.id);
      setSuccess(`Redeemed ${confirming.name}.`);
      setConfirming(null);
      refreshParticipant();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong.");
    } finally {
      setIsRedeeming(false);
    }
  }

  if (participantLoading) return <LoadingScreen />;

  if (!participant) {
    return (
      <PageHeader
        title="Rewards Catalog"
        description="You're not currently enrolled in a rewards program."
      />
    );
  }

  return (
    <div>
      <PageHeader
        title="Rewards Catalog"
        description={`Your balance: ${participant.pointsBalance.toLocaleString()} points`}
      />

      {success && (
        <div className="form-success" style={{ marginBottom: 20 }}>
          {success}
        </div>
      )}

      <div className="reward-grid">
        {rewards.map((r) => (
          <RewardCard
            key={r.id}
            reward={r}
            canAfford={participant.pointsBalance >= r.pointsCost}
            onRedeem={() => {
              setSuccess(null);
              setConfirming(r);
            }}
          />
        ))}
      </div>

      {rewards.length === 0 && (
        <p style={{ color: "var(--color-text-muted)" }}>No rewards available right now.</p>
      )}

      {confirming && (
        <Modal title="Confirm redemption" onClose={() => setConfirming(null)}>
          {error && <div className="form-error">{error}</div>}
          <p>
            Redeem <strong>{confirming.name}</strong> for{" "}
            <strong>{confirming.pointsCost.toLocaleString()} points</strong>? This can't be
            undone.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <Button variant="secondary" onClick={() => setConfirming(null)} style={{ flex: 1 }}>
              Cancel
            </Button>
            <Button onClick={handleConfirm} disabled={isRedeeming} style={{ flex: 1 }}>
              {isRedeeming ? "Redeeming…" : "Confirm"}
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
