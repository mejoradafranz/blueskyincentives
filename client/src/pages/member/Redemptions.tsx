import { PageHeader } from "../../components/ui/PageHeader";
import { StatTile } from "../../components/ui/StatTile";
import "./member.css";

export function MemberRedemptions() {
  return (
    <div>
      <PageHeader
        title="Redemptions"
        description="Track how your distributed incentives are being redeemed."
      />

      <div className="stat-grid">
        <StatTile label="Total distributed" value="0" />
        <StatTile label="Total redeemed" value="0" />
        <StatTile label="Redemption rate" value="—" />
        <StatTile label="Savings delivered" value="$0" />
      </div>

      <div className="member-empty">
        <h3 className="member-empty__title">No redemption activity yet</h3>
        <p className="member-empty__text">
          Redemption activity will appear here once you start distributing incentives to your
          customers.
        </p>
      </div>
    </div>
  );
}
