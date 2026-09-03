import { Link } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import { PageHeader } from "../../components/ui/PageHeader";
import { StatTile } from "../../components/ui/StatTile";
import { Button } from "../../components/ui/Button";
import "./member.css";

const QUICK_LINKS = [
  {
    to: "/dashboard/quick-launch",
    title: "Quick Launch Checklist",
    description: "Get your account set up and your first certificate out the door.",
  },
  {
    to: "/dashboard/certificates",
    title: "Distribute Certificates",
    description: "Get links, QR codes and PDF certificates for your incentive categories.",
  },
  {
    to: "/dashboard/ai-tools",
    title: "AI Tools",
    description: "AI-powered help for planning and producing campaigns.",
  },
];

export function MemberOverview() {
  const { user } = useAuth();

  return (
    <div>
      <PageHeader
        title={`Welcome, ${user?.firstName ?? "there"}`}
        description="Your Blue Sky Incentives membership at a glance."
      />

      <div className="member-card" style={{ marginBottom: 32 }}>
        <div className="member-card__row">
          <div>
            <h3 className="member-card__title">Annual Membership</h3>
            <p className="member-card__meta">Member since — · Renews —</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="member-badge member-badge--active">Active</span>
            <Link to="/contact">
              <Button variant="secondary">Manage Billing</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="stat-grid">
        <StatTile label="Incentives distributed" value="0" />
        <StatTile label="Incentives redeemed" value="0" />
        <StatTile label="Redemption rate" value="—" />
      </div>

      <div className="member-quick-links">
        {QUICK_LINKS.map((link) => (
          <Link key={link.to} to={link.to} className="member-quick-link">
            <h3 className="member-quick-link__title">{link.title}</h3>
            <p className="member-quick-link__description">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
