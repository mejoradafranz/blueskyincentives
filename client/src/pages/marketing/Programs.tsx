import { Link } from "react-router-dom";
import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { Button } from "../../components/ui/Button";

const PROGRAM_TYPES = [
  {
    mark: "R",
    title: "Recognition & rewards",
    description: "Ongoing peer or manager recognition, backed by points employees can redeem any time.",
  },
  {
    mark: "M",
    title: "Milestones & anniversaries",
    description: "Automatic point awards for work anniversaries, tenure milestones, and other one-off occasions.",
  },
  {
    mark: "S",
    title: "Sales & performance incentives",
    description: "Tie point awards to targets and performance goals for teams that are motivated by competition.",
  },
  {
    mark: "W",
    title: "Wellness & engagement",
    description: "Reward participation in wellness challenges, training completion, or engagement initiatives.",
  },
];

export function Programs() {
  return (
    <>
      <Hero
        eyebrow="Programs"
        title="One platform, several ways to reward your team."
        subtitle="Every program runs on the same points, budget, and redemption infrastructure — you decide what earns points and how much they're worth."
      />

      <Section>
        <div className="feature-grid">
          {PROGRAM_TYPES.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="How it fits together"
        title="Configured by your admin team, used by your employees"
        subtitle="Your client-admin sets the budget, the points-per-dollar rate, and who's enrolled. Employees see a simple dashboard with their balance and a rewards catalog to redeem from."
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/contact">
            <Button>Discuss a program</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
