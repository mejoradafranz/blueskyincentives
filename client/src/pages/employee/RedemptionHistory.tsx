import { useEffect, useState } from "react";
import * as meApi from "../../api/me";
import type { Redemption } from "../../types";
import { PageHeader } from "../../components/ui/PageHeader";
import { LoadingScreen } from "../../components/ui/LoadingScreen";
import { formatDate } from "../../utils/format";
import "../../components/ui/Table.css";

export function RedemptionHistory() {
  const [redemptions, setRedemptions] = useState<Redemption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    meApi.listMyRedemptions().then(({ redemptions }) => {
      setRedemptions(redemptions);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div>
      <PageHeader title="My Redemptions" />

      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Reward</th>
              <th>Points spent</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {redemptions.map((r) => (
              <tr key={r.id}>
                <td>{formatDate(r.createdAt)}</td>
                <td>{r.reward.name}</td>
                <td>{r.pointsSpent.toLocaleString()}</td>
                <td>
                  <span
                    className={`badge ${
                      r.status === "completed" ? "badge--success" : "badge--muted"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {redemptions.length === 0 && (
          <div className="data-table__empty">No redemptions yet.</div>
        )}
      </div>
    </div>
  );
}
