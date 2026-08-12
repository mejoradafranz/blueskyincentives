import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { PricingCard } from "../../components/marketing/PricingCard";

const TIERS = [
  {
    name: "Starter",
    description: "For a single team piloting a recognition program.",
    features: [
      "One active program",
      "Up to 50 enrolled employees",
      "Standard rewards catalog",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For companies running an ongoing incentive program company-wide.",
    features: [
      "Multiple concurrent programs",
      "Unlimited enrolled employees",
      "Custom rewards catalog",
      "Reporting & analytics dashboard",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For larger organizations with custom requirements.",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "Dedicated account manager",
      "Custom reporting",
    ],
  },
];

export function Pricing() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        title="Pricing that scales with your program."
        subtitle="Every plan includes the full platform — admin portal, employee portal, and rewards catalog. Reach out and we'll put together a quote based on your team size and program."
      />

      <Section>
        <div className="pricing-grid">
          {TIERS.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </Section>
    </>
  );
}
