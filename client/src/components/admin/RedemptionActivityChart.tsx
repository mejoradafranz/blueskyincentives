import { useState } from "react";
import type { RedemptionActivityPoint } from "../../api/reports";
import { formatDate } from "../../utils/format";
import "./Charts.css";

const WIDTH = 640;
const HEIGHT = 220;
const PAD_LEFT = 40;
const PAD_BOTTOM = 28;
const PAD_TOP = 16;

export function RedemptionActivityChart({ data }: { data: RedemptionActivityPoint[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  if (data.length === 0) {
    return (
      <div className="chart-empty">
        No redemption activity yet — this fills in once employees start redeeming rewards.
      </div>
    );
  }

  const maxValue = Math.max(...data.map((d) => d.pointsSpent), 1);
  const niceMax = Math.ceil(maxValue / 100) * 100 || 100;
  const plotWidth = WIDTH - PAD_LEFT - 12;
  const plotHeight = HEIGHT - PAD_TOP - PAD_BOTTOM;
  const bandWidth = plotWidth / data.length;
  const barWidth = Math.min(24, bandWidth - 4);

  const yTicks = [0, niceMax * 0.5, niceMax];

  return (
    <div className="chart-wrap">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="chart-svg" role="img" aria-label="Points redeemed per day">
        {yTicks.map((t) => {
          const y = PAD_TOP + plotHeight - (t / niceMax) * plotHeight;
          return (
            <g key={t}>
              <line
                x1={PAD_LEFT}
                x2={WIDTH - 8}
                y1={y}
                y2={y}
                className="chart-gridline"
              />
              <text x={PAD_LEFT - 8} y={y + 4} textAnchor="end" className="chart-axis-label">
                {Math.round(t).toLocaleString()}
              </text>
            </g>
          );
        })}

        {data.map((d, i) => {
          const x = PAD_LEFT + i * bandWidth + (bandWidth - barWidth) / 2;
          const barHeight = (d.pointsSpent / niceMax) * plotHeight;
          const y = PAD_TOP + plotHeight - barHeight;
          const isHovered = hovered === i;

          return (
            <g
              key={d.date}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <rect x={x} y={PAD_TOP} width={barWidth} height={plotHeight} fill="transparent" />
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={Math.max(barHeight, 1)}
                rx={4}
                className={`chart-bar ${isHovered ? "chart-bar--hovered" : ""}`}
              />
              {data.length <= 14 && (
                <text
                  x={x + barWidth / 2}
                  y={HEIGHT - 8}
                  textAnchor="middle"
                  className="chart-axis-label"
                >
                  {new Date(d.date).getDate()}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {hovered !== null && (
        <div className="chart-tooltip">
          <strong>{formatDate(data[hovered].date)}</strong>
          <div>{data[hovered].pointsSpent.toLocaleString()} points redeemed</div>
          <div>{data[hovered].count} redemption{data[hovered].count === 1 ? "" : "s"}</div>
        </div>
      )}
    </div>
  );
}
