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

export function TrendingUpIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    </svg>
  );
}

export function CoinsIcon() {
  return (
    <svg {...ICON_PROPS}>
      <ellipse cx="9" cy="7" rx="6" ry="3.5" />
      <path d="M3 7v6c0 1.93 2.69 3.5 6 3.5s6-1.57 6-3.5V7" />
      <path d="M3 13v3.5C3 18.43 5.69 20 9 20s6-1.57 6-3.5" />
      <path d="M15 9.5c3 .3 5 1.6 5 3s-2 2.7-5 3" />
    </svg>
  );
}
