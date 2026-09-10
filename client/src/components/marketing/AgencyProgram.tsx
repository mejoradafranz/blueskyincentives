import { Link } from "react-router-dom";
import { Section } from "./Section";
import { FeatureCard } from "./FeatureCard";
import { Button } from "../ui/Button";
import { TrendingUpIcon, ShieldIcon, CoinsIcon } from "./AgencyIcons";
import "./AgencyProgram.css";

const BENEFITS = [
  {
    mark: <TrendingUpIcon />,
    title: "Improve Client Results",
    description:
      "Add high-value incentives to the advertising, offers and campaigns you already manage.",
  },
  {
    mark: <ShieldIcon />,
    title: "Strengthen Client Retention",
    description:
      "A branded benefit that adds value and makes your agency harder to replace.",
  },
  {
    mark: <CoinsIcon />,
    title: "Create a New Revenue Opportunity",
    description:
      "Include it in existing packages, sell it as an add-on, or resell it under your own brand.",
  },
];

export function AgencyProgram() {
  return (
    <Section
      eyebrow="For Agencies, Consultants & Resellers"
      title="Add More Value to Every Client Account"
      subtitle="Give clients access to your branded incentive-marketing platform—or resell it as new recurring revenue."
    >
      <div className="feature-grid">
        {BENEFITS.map((benefit) => (
          <FeatureCard key={benefit.title} {...benefit} />
        ))}
      </div>

      <div className="agency-program__cta">
        <Link to="/contact">
          <Button variant="secondary">Explore the White Label Program</Button>
        </Link>
        <Link to="/contact">
          <Button>Book a White Label Program</Button>
        </Link>
      </div>
    </Section>
  );
}
