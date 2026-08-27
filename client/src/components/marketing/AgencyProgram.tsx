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
      "Deliver an additional branded benefit that increases the value of your service and can make your agency harder to replace.",
  },
  {
    mark: <CoinsIcon />,
    title: "Create a New Revenue Opportunity",
    description:
      "Include accounts in existing packages, offer them as a paid add-on or resell the platform under your own brand.",
  },
];

export function AgencyProgram() {
  return (
    <Section
      eyebrow="For Agencies, Consultants & Resellers"
      title="Add More Value to Every Client Account"
      subtitle="Give clients access to your branded incentive-marketing platform as part of your existing service. Use incentive-powered campaigns to help improve response, conversions, retention and referrals—or resell client accounts as an additional recurring-revenue offer."
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
