import { Link } from "react-router-dom";
import { HomeHero } from "../../components/marketing/HomeHero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { StepList } from "../../components/marketing/StepList";
import { Button } from "../../components/ui/Button";
import heroHomeImage from "../../assets/hero-home.jpg";

const FEATURES = [
  {
    mark: "$",
    title: "Points-based rewards",
    description:
      "Set your own points-to-dollar conversion and let employees earn toward a catalog of gift cards, merchandise, and experiences.",
  },
  {
    mark: "B",
    title: "Budget controls",
    description:
      "Set a program budget up front and track spend against it in real time — no surprises at the end of the quarter.",
  },
  {
    mark: "R",
    title: "Reward catalog",
    description:
      "Employees browse and redeem rewards themselves, with balances and redemption history always visible to them.",
  },
  {
    mark: "A",
    title: "Reporting & analytics",
    description:
      "See participation, points awarded, and redemptions at a glance so you can prove the program is working.",
  },
];

const STEPS = [
  {
    title: "Set up your program",
    description: "Define a budget, a points-per-dollar rate, and enroll your employees.",
  },
  {
    title: "Award points",
    description: "Recognize employees for milestones, performance, or peer nominations.",
  },
  {
    title: "Employees redeem rewards",
    description: "Employees browse the catalog and redeem points for rewards they actually want.",
  },
];

export function Home() {
  return (
    <>
      <HomeHero
        image={heroHomeImage}
        imageAlt="A hotel front desk associate helping guests check in"
      />

      <Section
        eyebrow="Platform"
        title="Everything you need to run an incentive program"
        subtitle="One platform for your admin team to configure and manage, and one portal your employees log into to redeem rewards."
      >
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Section>

      <Section tone="subtle" eyebrow="How it works" title="Up and running in three steps">
        <StepList steps={STEPS} />
      </Section>

      <Section title="Ready to build a program your team will actually use?">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/contact">
            <Button>Get in touch</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
