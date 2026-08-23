import { Link } from "react-router-dom";
import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { StepList } from "../../components/marketing/StepList";
import { Button } from "../../components/ui/Button";
import "./Demo.css";

const WALKTHROUGH = [
  {
    title: "Program setup",
    description: "See how a budget, points-per-dollar rate, and employee enrollment come together in minutes.",
  },
  {
    title: "Admin dashboard & reporting",
    description: "Award points, track budget usage, and see participation at a glance.",
  },
  {
    title: "The employee experience",
    description: "Walk through checking a balance, browsing the rewards catalog, and redeeming a reward.",
  },
];

export function Demo() {
  return (
    <>
      <Hero
        eyebrow="Watch Demo"
        title="See Blue Sky Incentives in action."
        subtitle="A quick walkthrough of setting up a program, awarding points, and redeeming a reward — from both sides of the platform."
      />

      <Section>
        <div className="demo-video">
          <div className="demo-video__play" aria-hidden="true" />
          <span className="demo-video__caption">Demo video coming soon</span>
        </div>
      </Section>

      <Section tone="subtle" eyebrow="What you'll see" title="A tour of both portals">
        <StepList steps={WALKTHROUGH} />
      </Section>

      <Section title="Prefer a live walkthrough?">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/contact">
            <Button>Book a live demo</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
