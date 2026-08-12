import { PortalShell } from "../components/ui/PortalShell";

const NAV_ITEMS = [
  { to: "/admin/dashboard", label: "Dashboard" },
  { to: "/admin/participants", label: "Participants" },
  { to: "/admin/programs", label: "Program Config" },
  { to: "/admin/reports", label: "Reports" },
];

export function AdminPortalLayout() {
  return <PortalShell title="Client Admin" navItems={NAV_ITEMS} />;
}
