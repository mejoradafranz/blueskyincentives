import { Link } from "react-router-dom";
import { HomeHero } from "../../components/marketing/HomeHero";
import { StatsBar } from "../../components/marketing/StatsBar";
import { Section } from "../../components/marketing/Section";
import { IncentiveLibrary } from "../../components/marketing/IncentiveLibrary";
import { GrowthWays } from "../../components/marketing/GrowthWays";
import { GetStarted } from "../../components/marketing/GetStarted";
import { IndustryPlaybooks } from "../../components/marketing/IndustryPlaybooks";
import { StepList } from "../../components/marketing/StepList";
import { Button } from "../../components/ui/Button";
import heroHomeImage from "../../assets/hero-home.jpg";

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

      <StatsBar />

      <Section
        eyebrow="On-Demand Demo"
        title="See Exactly How Blue Sky Incentives Works"
        subtitle="Watch the complete on-demand demonstration and see how businesses use high-value incentives to generate more leads, close more sales, increase repeat business and attract referrals."
      >
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/demo">
            <Button>Watch the Instant Demo</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Speak with an Incentive Agent</Button>
          </Link>
        </div>
      </Section>

      <IncentiveLibrary />

      <GrowthWays />

      <GetStarted />

      <IndustryPlaybooks />

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
