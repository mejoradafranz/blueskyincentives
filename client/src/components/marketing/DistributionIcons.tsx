const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 20,
  height: 20,
};

export function MailIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function DocumentIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20l3-4" />
    </svg>
  );
}

export function QrCodeIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20v.01" />
    </svg>
  );
}

export function LinkIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="8" cy="8" r="4" />
      <circle cx="16" cy="16" r="4" />
      <path d="M10.5 10.5l3 3" />
    </svg>
  );
}

export function PopUpIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="7" y="7" width="14" height="11" rx="2" />
      <path d="M3 13V5a1 1 0 0 1 1-1h11" />
    </svg>
  );
}

export function BannerIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M5 3v18" />
      <path d="M5 4h13l-3 4 3 4H5" />
    </svg>
  );
}

export function StickyBarIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3" y="4" width="18" height="5" rx="1.5" />
      <path d="M7 13v6M12 13v6M17 13v6" />
    </svg>
  );
}

export function AppGridIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}

export function ZapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width="20" height="20">
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export function CodeIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M8 6L2 12l6 6M16 6l6 6-6 6" />
    </svg>
  );
}
