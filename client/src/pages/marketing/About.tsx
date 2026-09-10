import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";

const VALUES = [
  {
    mark: "S",
    title: "Simplicity",
    description: "Program setup and employee redemption should both take minutes, not a training session.",
  },
  {
    mark: "T",
    title: "Transparency",
    description: "Budgets, balances, and redemption history are visible to the people who need them — no black boxes.",
  },
  {
    mark: "E",
    title: "Employee-first",
    description: "A rewards program only works if employees actually want to use it. We design for that.",
  },
  {
    mark: "R",
    title: "Reliability",
    description: "Points and budgets are financial data. We treat every transaction like one that has to be right.",
  },
];

export function About() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title="We build the incentive programs behind the scenes."
        subtitle="An employee recognition and rewards platform: a management portal for admins, and a redemption experience employees actually enjoy."
      />

      <Section
        eyebrow="Our approach"
        title="Built for the people running the program, and the people redeeming rewards"
        subtitle="Admins get budget control, participant management, and reporting. Employees get a simple portal to check balances and redeem rewards."
      />

      <Section tone="subtle" eyebrow="What we value" title="How we build">
        <div className="feature-grid">
          {VALUES.map((v) => (
            <FeatureCard key={v.title} {...v} />
          ))}
        </div>
      </Section>
    </>
  );
}
