import { Link } from "react-router-dom";
import { Section } from "./Section";
import { Button } from "../ui/Button";
import { CheckIcon } from "./CheckIcon";
import "./PricingPlans.css";

interface BreakdownRow {
  label: string;
  value: string;
  variant?: "strike" | "success" | "total";
}

interface Plan {
  key: string;
  badges: string[];
  name: string;
  breakdown: BreakdownRow[];
  priceMain: string;
  priceLabel: string;
  priceSub: string;
  explainer: string;
  features: string[];
  highlighted?: boolean;
}

const PLANS: Plan[] = [
  {
    key: "monthly",
    badges: ["LIMITED-TIME OFFER · SAVE $199 ON SETUP"],
    name: "Monthly Membership",
    breakdown: [
      { label: "Regular amount due today", value: "$298", variant: "strike" },
      { label: "Limited-time savings – no setup fee", value: "−$199", variant: "success" },
      { label: "Due today", value: "$99", variant: "total" },
    ],
    priceMain: "$99",
    priceLabel: "Due Today",
    priceSub: "Then $99/month",
    explainer:
      "Normally $199 setup + $99 first month = $298 to start. Limited time: start for $99.",
    features: [
      "$99 due today",
      "$99/month thereafter",
      "$199 setup fee waived",
      "Flexible monthly billing",
      "Cancel future billing according to the membership terms",
      "14-day money-back guarantee",
    ],
  },
  {
    key: "annual",
    badges: ["BEST ANNUAL VALUE", "SAVE $588 FIRST YEAR"],
    name: "Annual Membership",
    breakdown: [
      { label: "Regular first-year price", value: "$1,387", variant: "strike" },
      { label: "Annual price today", value: "$799" },
      { label: "Save $588 first year", value: "$588", variant: "success" },
      { label: "Equivalent to", value: "$66.58/month" },
      { label: "Setup fee", value: "$199 waived", variant: "success" },
    ],
    priceMain: "$799",
    priceLabel: "for One Full Year",
    priceSub: "$799 due today",
    explainer:
      "Pay $799 for one full year of Blue Sky Incentives membership. The $199 setup fee is waived.",
    features: [
      "$799 due today",
      "One full year of membership",
      "$199 setup fee waived",
      "Best annual value",
      "14-day money-back guarantee",
    ],
    highlighted: true,
  },
];

export function PricingPlans() {
  return (
    <Section
      title="Choose Your Plan"
      subtitle="Choose flexible monthly billing or save with one annual payment and no setup fee."
    >
      <div className="pricing-plans__grid">
        {PLANS.map((plan) => (
          <div
            key={plan.key}
            className={`pricing-plans__card ${
              plan.highlighted ? "pricing-plans__card--highlighted" : ""
            }`}
          >
            <div className="pricing-plans__badges">
              {plan.badges.map((badge) => (
                <span key={badge} className="pricing-plans__badge">
                  {badge}
                </span>
              ))}
            </div>

            <h3 className="pricing-plans__name">{plan.name}</h3>

            <div className="pricing-plans__breakdown">
              {plan.breakdown.map((row) => (
                <div
                  key={row.label}
                  className={`pricing-plans__row pricing-plans__row--${row.variant ?? "default"}`}
                >
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>

            <div className="pricing-plans__price">
              <span className="pricing-plans__price-main">{plan.priceMain}</span>
              <span className="pricing-plans__price-label">{plan.priceLabel}</span>
            </div>
            <div className="pricing-plans__price-sub">{plan.priceSub}</div>

            <p className="pricing-plans__explainer">{plan.explainer}</p>

            <ul className="pricing-plans__features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="pricing-plans__check">
                    <CheckIcon />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="pricing-plans__cta">
              <Button variant={plan.highlighted ? "primary" : "secondary"} style={{ width: "100%" }}>
                Start Risk-Free
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
