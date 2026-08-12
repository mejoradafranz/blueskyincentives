import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import "./PricingCard.css";

export function PricingCard({
  name,
  description,
  features,
  highlighted,
}: {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div className={`pricing-card ${highlighted ? "pricing-card--highlighted" : ""}`}>
      {highlighted && <div className="pricing-card__badge">Most popular</div>}
      <h3 className="pricing-card__name">{name}</h3>
      <p className="pricing-card__description">{description}</p>
      <ul className="pricing-card__features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <Link to="/contact">
        <Button variant={highlighted ? "primary" : "secondary"} style={{ width: "100%" }}>
          Contact sales
        </Button>
      </Link>
    </div>
  );
}
