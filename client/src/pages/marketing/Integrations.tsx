import { Link } from "react-router-dom";
import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { Button } from "../../components/ui/Button";

const CATEGORIES = [
  {
    mark: "S",
    title: "Single sign-on (SSO)",
    description: "Let employees and admins log in with the identity provider your company already uses.",
  },
  {
    mark: "H",
    title: "HR & payroll sync",
    description: "Keep enrolled employees in sync with your HRIS so participant lists stay accurate automatically.",
  },
  {
    mark: "N",
    title: "Slack & Microsoft Teams",
    description: "Send points-awarded and redemption notifications directly into the tools your team already checks.",
  },
  {
    mark: "G",
    title: "Gift card & reward fulfillment",
    description: "Connect the rewards catalog to fulfillment providers so redemptions ship without manual work.",
  },
];

export function Integrations() {
  return (
    <>
      <Hero
        eyebrow="Integrations"
        title="Fits into the tools you already run your team on."
        subtitle="We build out integrations based on what our customers actually need — here's what we're actively working on."
      />

      <Section>
        <div className="feature-grid">
          {CATEGORIES.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        title="Need a specific integration?"
        subtitle="Tell us what you're running today and we'll let you know what's possible."
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/contact">
            <Button>Ask us about your stack</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
