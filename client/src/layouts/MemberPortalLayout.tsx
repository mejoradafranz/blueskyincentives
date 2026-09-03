import { PortalShell } from "../components/ui/PortalShell";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Overview", end: true },
  { to: "/dashboard/incentives", label: "Distribute Incentives" },
  { to: "/dashboard/redemptions", label: "Redemptions" },
  { to: "/dashboard/ai-tools", label: "AI Tools" },
];

export function MemberPortalLayout() {
  return <PortalShell title="Member Dashboard" navItems={NAV_ITEMS} />;
}
