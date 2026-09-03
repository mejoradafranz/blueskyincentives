import type { ReactNode } from "react";

function base(children: ReactNode) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export function SparkleIcon() {
  return base(<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />);
}

export function ChecklistIcon() {
  return base(
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12l1.5 1.5L12 11M8 16h5" />
    </>
  );
}

export function BookIcon() {
  return base(
    <>
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 014 18.5v-13z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 001.5-1.5v-13z" />
    </>
  );
}

export function BriefcaseIcon() {
  return base(
    <>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8 7.5V6a2 2 0 012-2h4a2 2 0 012 2v1.5M3 12.5h18" />
    </>
  );
}

export function MegaphoneIcon() {
  return base(
    <>
      <path d="M4 10v4a1 1 0 001 1h2l5 4V5L7 9H5a1 1 0 00-1 1z" />
      <path d="M14 8.5a4 4 0 010 7M17.5 6a8 8 0 010 12" />
    </>
  );
}

export function CertificateIcon() {
  return base(
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5l-1.5 6.5 4.5-2.5 4.5 2.5-1.5-6.5" />
    </>
  );
}

export function UsersIcon() {
  return base(
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="7" r="2.3" />
      <path d="M15.5 14.2c2.6.5 4.5 2.6 4.5 5.8" />
    </>
  );
}

export function ContactCardIcon() {
  return base(
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="M6 16c0-1.7 1.3-3 3-3s3 1.3 3 3M14 9.5h5M14 13h5" />
    </>
  );
}

export function LinkIcon() {
  return base(
    <>
      <path d="M9.5 14.5l5-5" />
      <path d="M11 6.5l1-1a3.5 3.5 0 015 5l-1 1M13 17.5l-1 1a3.5 3.5 0 01-5-5l1-1" />
    </>
  );
}

export function StarIcon() {
  return base(<path d="M12 4l2.4 5.1 5.6.6-4.2 3.8 1.2 5.5L12 16.3l-5 2.7 1.2-5.5-4.2-3.8 5.6-.6L12 4z" />);
}

export function BugIcon() {
  return base(
    <>
      <rect x="8" y="8" width="8" height="10" rx="4" />
      <path d="M12 8V6M9 5l1.5 1.5M15 5l-1.5 1.5M4 12h4M16 12h4M5 17l3-1.5M19 17l-3-1.5M5 8l2.5 1.5M19 8l-2.5 1.5" />
    </>
  );
}

export function BulbIcon() {
  return base(
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 00-3.4 10.9c.5.4.9 1 1 1.6l.1.5h4.6l.1-.5c.1-.6.5-1.2 1-1.6A6 6 0 0012 3z" />
    </>
  );
}

export function HomeIcon() {
  return base(
    <>
      <path d="M4 11.5L12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 001 1h4v-6h2v6h4a1 1 0 001-1v-9" />
    </>
  );
}
