import { PageHeader } from "../../components/ui/PageHeader";
import { Button } from "../../components/ui/Button";
import "./member.css";

export function WhiteLabel() {
  return (
    <div>
      <PageHeader
        title="White Label / Sub-User Management"
        description="Manage your branding and add team members to your account."
      />

      <div className="member-card" style={{ marginBottom: 24 }}>
        <div className="member-card__row">
          <div>
            <h3 className="member-card__title">Branding</h3>
            <p className="member-card__meta">Add your logo and brand colors to certificates and pages.</p>
          </div>
          <span className="member-badge member-badge--gold">Coming Soon</span>
        </div>
      </div>

      <div className="member-card">
        <div className="member-card__row" style={{ marginBottom: 16 }}>
          <h3 className="member-card__title" style={{ margin: 0 }}>
            Sub-Users
          </h3>
          <Button variant="secondary" disabled>
            Add Sub-User
          </Button>
        </div>
        <div className="member-empty">
          <h3 className="member-empty__title">No sub-users yet</h3>
          <p className="member-empty__text">
            Team members you add will be able to help distribute incentives under your account.
          </p>
        </div>
      </div>
    </div>
  );
}
