import "./Meter.css";

export function Meter({
  label,
  valueLabel,
  fraction,
}: {
  label: string;
  valueLabel: string;
  fraction: number;
}) {
  const pct = Math.max(0, Math.min(1, fraction)) * 100;
  const overBudget = fraction > 1;

  return (
    <div className="meter">
      <div className="meter__header">
        <span className="meter__label">{label}</span>
        <span className="meter__value">{valueLabel}</span>
      </div>
      <div className="meter__track">
        <div
          className={`meter__fill ${overBudget ? "meter__fill--danger" : ""}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
