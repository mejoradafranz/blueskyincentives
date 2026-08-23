import "./StatsBar.css";

const STATS = [
  { value: "20+", label: "Years in Business" },
  { value: "18K", label: "Clients Enrolled" },
  { value: "13M+", label: "Certificates Distributed" },
  { value: "1M+", label: "Incentives Redeemed" },
  { value: "$29M+", label: "In Savings for Redeemers" },
  { value: "Thousands+", label: "Satisfied Clients" },
];

export function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container stats-bar__row">
        {STATS.map((s) => (
          <div key={s.label} className="stats-bar__item">
            <div className="stats-bar__value">{s.value}</div>
            <div className="stats-bar__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
