import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import { useMyParticipant } from "./useMyParticipant";
import * as meApi from "../../api/me";
import type { PointsTransaction } from "../../types";
import { PageHeader } from "../../components/ui/PageHeader";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { LoadingScreen } from "../../components/ui/LoadingScreen";
import { formatDate } from "../../utils/format";
import "../../components/ui/Table.css";

export function EmployeeDashboard() {
  const { user } = useAuth();
  const { participant, isLoading } = useMyParticipant();
  const [recent, setRecent] = useState<PointsTransaction[]>([]);

  useEffect(() => {
    if (!participant) return;
    meApi.listMyTransactions(participant.id).then(({ transactions }) => {
      setRecent(transactions.slice(0, 5));
    });
  }, [participant]);

  if (isLoading) return <LoadingScreen />;

  if (!participant) {
    return (
      <PageHeader
        title={`Welcome, ${user?.firstName}`}
        description="You're not currently enrolled in a rewards program."
      />
    );
  }

  return (
    <div>
      <PageHeader title={`Welcome, ${user?.firstName}`} description={participant.programName} />

      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20 }}>
        <Card>
          <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: 8 }}>
            Your points balance
          </div>
          <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 20 }}>
            {participant.pointsBalance.toLocaleString()}
          </div>
          <Link to="/portal/rewards">
            <Button style={{ width: "100%" }}>Browse rewards</Button>
          </Link>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}>Recent activity</h3>
          {recent.length === 0 ? (
            <p style={{ color: "var(--color-text-muted)" }}>No activity yet.</p>
          ) : (
            <div className="data-table-wrap" style={{ border: "none" }}>
              <table className="data-table">
                <tbody>
                  {recent.map((t) => (
                    <tr key={t.id}>
                      <td>{formatDate(t.created_at)}</td>
                      <td>{t.note ?? t.type}</td>
                      <td style={{ color: t.points >= 0 ? "var(--color-success)" : "var(--color-danger)" }}>
                        {t.points >= 0 ? "+" : ""}
                        {t.points.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
