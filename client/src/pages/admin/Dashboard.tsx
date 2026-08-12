import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import { useAdminPrograms } from "./useAdminPrograms";
import * as reportsApi from "../../api/reports";
import type { ProgramOverview } from "../../types";
import { PageHeader } from "../../components/ui/PageHeader";
import { StatTile } from "../../components/ui/StatTile";
import { ProgramSelect } from "../../components/admin/ProgramSelect";
import { Button } from "../../components/ui/Button";
import { LoadingScreen } from "../../components/ui/LoadingScreen";
import { formatCents } from "../../utils/format";

export function AdminDashboard() {
  const { user } = useAuth();
  const { programs, selectedProgram, selectedId, setSelectedId, isLoading } = useAdminPrograms();
  const [overview, setOverview] = useState<ProgramOverview | null>(null);

  useEffect(() => {
    if (!selectedProgram) {
      setOverview(null);
      return;
    }
    reportsApi.getOverview(selectedProgram.id).then(setOverview);
  }, [selectedProgram]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!programs.length) {
    return (
      <div>
        <PageHeader title={`Welcome, ${user?.firstName}`} description="You don't have any programs yet." />
        <Link to="/admin/programs">
          <Button>Create your first program</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={`Welcome, ${user?.firstName}`}
        description={selectedProgram?.name}
        actions={
          <ProgramSelect programs={programs} selectedId={selectedId} onChange={setSelectedId} />
        }
      />

      {overview && (
        <div className="stat-grid">
          <StatTile label="Active participants" value={String(overview.activeParticipants)} />
          <StatTile label="Points awarded" value={overview.totalPointsAwarded.toLocaleString()} />
          <StatTile label="Points redeemed" value={overview.totalPointsRedeemed.toLocaleString()} />
          <StatTile
            label="Budget used"
            value={formatCents(overview.budgetUsedCents)}
            sublabel={`of ${formatCents(overview.budgetCents)}`}
          />
        </div>
      )}
    </div>
  );
}
