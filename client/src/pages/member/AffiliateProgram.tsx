import { PageHeader } from "../../components/ui/PageHeader";
import "./member.css";

export function AffiliateProgram() {
  return (
    <div>
      <PageHeader title="Affiliate Program" description="Earn rewards for referring other businesses to Blue Sky Incentives." />

      <div className="member-card">
        <div className="member-card__row" style={{ marginBottom: 10 }}>
          <h3 className="member-card__title" style={{ margin: 0 }}>
            Your Referral Link
          </h3>
          <span className="member-badge member-badge--gold">Coming Soon</span>
        </div>
        <p className="member-card__meta">
          Your personal referral link and commission details will appear here once the affiliate
          program is live for your account.
        </p>
      </div>
    </div>
  );
}
