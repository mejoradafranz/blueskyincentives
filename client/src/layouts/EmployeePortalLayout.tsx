import { PortalShell } from "../components/ui/PortalShell";

const NAV_ITEMS = [
  { to: "/portal/dashboard", label: "Dashboard" },
  { to: "/portal/rewards", label: "Rewards Catalog" },
  { to: "/portal/history", label: "Points History" },
  { to: "/portal/redemptions", label: "My Redemptions" },
];

export function EmployeePortalLayout() {
  return <PortalShell title="Employee Portal" navItems={NAV_ITEMS} />;
}
