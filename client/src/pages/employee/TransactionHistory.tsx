import { useEffect, useState } from "react";
import { useMyParticipant } from "./useMyParticipant";
import * as meApi from "../../api/me";
import type { PointsTransaction } from "../../types";
import { PageHeader } from "../../components/ui/PageHeader";
import { LoadingScreen } from "../../components/ui/LoadingScreen";
import { formatDate } from "../../utils/format";
import "../../components/ui/Table.css";

export function TransactionHistory() {
  const { participant, isLoading: participantLoading } = useMyParticipant();
  const [transactions, setTransactions] = useState<PointsTransaction[]>([]);

  useEffect(() => {
    if (!participant) return;
    meApi.listMyTransactions(participant.id).then(({ transactions }) => setTransactions(transactions));
  }, [participant]);

  if (participantLoading) return <LoadingScreen />;

  if (!participant) {
    return <PageHeader title="Points History" description="You're not enrolled in a program yet." />;
  }

  return (
    <div>
      <PageHeader title="Points History" description={participant.programName} />

      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Note</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{formatDate(t.created_at)}</td>
                <td style={{ textTransform: "capitalize" }}>{t.type}</td>
                <td>{t.note ?? "—"}</td>
                <td style={{ color: t.points >= 0 ? "var(--color-success)" : "var(--color-danger)" }}>
                  {t.points >= 0 ? "+" : ""}
                  {t.points.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {transactions.length === 0 && <div className="data-table__empty">No points activity yet.</div>}
      </div>
    </div>
  );
}
