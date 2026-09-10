import { DiamondIcon } from "./DiamondIcon";
import { BoxIcon } from "./BoxIcon";
import { TrendUpIcon } from "./TrendUpIcon";
import "./TrustHighlights.css";

const ITEMS = [
  {
    icon: <DiamondIcon />,
    title: "High-Value Rewards",
    description: "From $100 to $2,000",
  },
  {
    icon: <BoxIcon />,
    title: "No Inventory",
    description: "We handle everything",
  },
  {
    icon: <TrendUpIcon />,
    title: "Real Results",
    description: "More leads. More sales. More repeat business.",
  },
];

export function TrustHighlights() {
  return (
    <section className="trust-highlights">
      <div className="container trust-highlights__row">
        {ITEMS.map((item) => (
          <div key={item.title} className="trust-highlights__item">
            <div className="trust-highlights__icon" aria-hidden="true">
              {item.icon}
            </div>
            <h3 className="trust-highlights__title">{item.title}</h3>
            <p className="trust-highlights__description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
