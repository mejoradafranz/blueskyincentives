import { PortalShell } from "../components/ui/PortalShell";
import {
  SparkleIcon,
  ChecklistIcon,
  BookIcon,
  BriefcaseIcon,
  MegaphoneIcon,
  CertificateIcon,
  UsersIcon,
  ContactCardIcon,
  LinkIcon,
  StarIcon,
  BugIcon,
  BulbIcon,
} from "../components/ui/PortalIcons";

const NAV_ITEMS = [
  { to: "/dashboard/ai-tools", label: "AI Tools", icon: <SparkleIcon /> },
  { to: "/dashboard/quick-launch", label: "Quick Launch Checklist", icon: <ChecklistIcon /> },
  { to: "/dashboard/resources", label: "Resources", icon: <BookIcon /> },
  { to: "/dashboard/briefcase", label: "Briefcase", icon: <BriefcaseIcon /> },
  { to: "/dashboard/marketing-tools", label: "Marketing Tools", icon: <MegaphoneIcon /> },
  { to: "/dashboard/certificates", label: "Distribute Certificates", icon: <CertificateIcon /> },
  { to: "/dashboard/white-label", label: "White Label / Sub-User Management", icon: <UsersIcon /> },
  { to: "/dashboard/contacts", label: "Contact Manager", icon: <ContactCardIcon /> },
  { to: "/dashboard/affiliate", label: "Affiliate Program", icon: <LinkIcon /> },
  { to: "/dashboard/testimonial", label: "Submit Testimonial", icon: <StarIcon /> },
  { to: "/dashboard/report-bug", label: "Report Bug", icon: <BugIcon /> },
  { to: "/dashboard/request-feature", label: "Request a Feature", icon: <BulbIcon /> },
];

export function MemberPortalLayout() {
  return <PortalShell title="Member Dashboard" navItems={NAV_ITEMS} />;
}
