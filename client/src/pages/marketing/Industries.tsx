import { Link } from "react-router-dom";
import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { Button } from "../../components/ui/Button";

const INDUSTRIES = [
  {
    mark: "R",
    title: "Retail & hospitality",
    description: "Reward frontline and shift-based teams for attendance, performance, and customer service wins.",
  },
  {
    mark: "S",
    title: "Sales organizations",
    description: "Tie points directly to quota attainment and team targets for a program reps are actually motivated by.",
  },
  {
    mark: "H",
    title: "Healthcare",
    description: "Recognize clinical and support staff for milestones, safety goals, and peer nominations.",
  },
  {
    mark: "M",
    title: "Manufacturing & field ops",
    description: "Run safety and productivity incentive programs for distributed, non-desk teams.",
  },
  {
    mark: "P",
    title: "Professional services",
    description: "Recognize project milestones, client wins, and tenure across consulting and agency teams.",
  },
  {
    mark: "T",
    title: "Tech & startups",
    description: "Lightweight peer recognition and spot bonuses that scale as headcount grows.",
  },
];

export function Industries() {
  return (
    <>
      <Hero
        eyebrow="Industries"
        title="Built to fit how your team actually works."
        subtitle="The same points, budget, and redemption engine adapts to how different industries recognize and reward their people."
      />

      <Section>
        <div className="feature-grid">
          {INDUSTRIES.map((i) => (
            <FeatureCard key={i.title} {...i} />
          ))}
        </div>
      </Section>

      <Section tone="subtle" title="Don't see your industry?">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/contact">
            <Button>Talk to us about your team</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
