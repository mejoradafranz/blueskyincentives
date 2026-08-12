import { useEffect, useState } from "react";
import { useAdminPrograms } from "./useAdminPrograms";
import * as reportsApi from "../../api/reports";
import type { ProgramOverview } from "../../types";
import type { RedemptionActivityPoint } from "../../api/reports";
import { PageHeader } from "../../components/ui/PageHeader";
import { StatTile } from "../../components/ui/StatTile";
import { Card } from "../../components/ui/Card";
import { Meter } from "../../components/ui/Meter";
import { LoadingScreen } from "../../components/ui/LoadingScreen";
import { ProgramSelect } from "../../components/admin/ProgramSelect";
import { PointsComparisonBars } from "../../components/admin/PointsComparisonBars";
import { RedemptionActivityChart } from "../../components/admin/RedemptionActivityChart";
import { formatCents } from "../../utils/format";

export function Reports() {
  const { programs, selectedProgram, selectedId, setSelectedId, isLoading: programsLoading } =
    useAdminPrograms();
  const [overview, setOverview] = useState<ProgramOverview | null>(null);
  const [activity, setActivity] = useState<RedemptionActivityPoint[]>([]);

  useEffect(() => {
    if (!selectedProgram) return;
    reportsApi.getOverview(selectedProgram.id).then(setOverview);
    reportsApi.getRedemptionActivity(selectedProgram.id).then((r) => setActivity(r.activity));
  }, [selectedProgram]);

  if (programsLoading) return <LoadingScreen />;

  if (!programs.length) {
    return <PageHeader title="Reports" description="Create a program first to see reports." />;
  }

  return (
    <div>
      <PageHeader
        title="Reports"
        description={selectedProgram?.name}
        actions={
          <ProgramSelect programs={programs} selectedId={selectedId} onChange={setSelectedId} />
        }
      />

      {overview && (
        <>
          <div className="stat-grid">
            <StatTile label="Active participants" value={String(overview.activeParticipants)} />
            <StatTile label="Points awarded" value={overview.totalPointsAwarded.toLocaleString()} />
            <StatTile label="Points redeemed" value={overview.totalPointsRedeemed.toLocaleString()} />
            <StatTile
              label="Budget remaining"
              value={formatCents(overview.budgetRemainingCents)}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <Card>
              <h3 style={{ marginTop: 0 }}>Budget usage</h3>
              <Meter
                label="Spent"
                valueLabel={`${formatCents(overview.budgetUsedCents)} / ${formatCents(overview.budgetCents)}`}
                fraction={overview.budgetCents > 0 ? overview.budgetUsedCents / overview.budgetCents : 0}
              />
            </Card>

            <Card>
              <h3 style={{ marginTop: 0 }}>Points awarded vs. redeemed</h3>
              <PointsComparisonBars
                awarded={overview.totalPointsAwarded}
                redeemed={overview.totalPointsRedeemed}
              />
            </Card>
          </div>

          <Card>
            <h3 style={{ marginTop: 0 }}>Redemption activity</h3>
            <RedemptionActivityChart data={activity} />
          </Card>
        </>
      )}
    </div>
  );
}
