import "./Charts.css";

const WIDTH = 420;
const HEIGHT = 140;
const PAD_LEFT = 12;
const PAD_RIGHT = 90;
const BAR_HEIGHT = 24;
const GAP = 28;

export function PointsComparisonBars({
  awarded,
  redeemed,
}: {
  awarded: number;
  redeemed: number;
}) {
  const maxValue = Math.max(awarded, redeemed, 1);
  const plotWidth = WIDTH - PAD_LEFT - PAD_RIGHT;

  const rows = [
    { label: "Awarded", value: awarded, color: "var(--chart-series-1)" },
    { label: "Redeemed", value: redeemed, color: "var(--chart-series-2)" },
  ];

  return (
    <div>
      <div className="chart-legend">
        {rows.map((r) => (
          <span key={r.label} className="chart-legend__item">
            <span className="chart-legend__swatch" style={{ background: r.color }} />
            {r.label}
          </span>
        ))}
      </div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="chart-svg"
        role="img"
        aria-label="Points awarded compared to points redeemed"
      >
        {rows.map((r, i) => {
          const barWidth = (r.value / maxValue) * plotWidth;
          const y = i * (BAR_HEIGHT + GAP) + 12;
          return (
            <g key={r.label}>
              <rect
                x={PAD_LEFT}
                y={y}
                width={Math.max(barWidth, 2)}
                height={BAR_HEIGHT}
                rx={4}
                style={{ fill: r.color }}
              />
              <text
                x={PAD_LEFT + barWidth + 10}
                y={y + BAR_HEIGHT / 2 + 4}
                className="chart-value-label"
              >
                {r.value.toLocaleString()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
