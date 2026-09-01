import { Link } from "react-router-dom";
import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { Button } from "../../components/ui/Button";
import { INDUSTRIES } from "../../data/industries";

const HOW_IT_WORKS = [
  {
    mark: "01",
    title: "Run your existing marketing",
    description:
      "Website forms, ads, email and SMS campaigns, community events and referral programs — whatever you already do to reach your audience.",
  },
  {
    mark: "02",
    title: "Add a high-value incentive",
    description: "Attach it to a meaningful action such as a lead form, an appointment, a completed sale, or a referral.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "Blue Sky Incentives supplies the incentives and manages the redemption process, and gives you the tools to create and distribute them by email, SMS, landing page links, QR codes, PDFs, banners and pop-ups.",
  },
  {
    mark: "04",
    title: "Give your audience another reason to respond",
    description: "Your expertise, service and trust remain the core value. The incentive strengthens the offer around the next action.",
  },
];

export function Industries() {
  return (
    <>
      <Hero
        eyebrow="Industries & Use Cases"
        title="Built to fit how your team actually works."
        subtitle="The same points, budget, and redemption engine adapts to how different industries recognize and reward their people."
      />

      <Section>
        <div className="feature-grid">
          {INDUSTRIES.map((i) => (
            <Link key={i.slug} to={`/industries/${i.slug}`} className="feature-card-link">
              <FeatureCard
                mark={i.mark}
                title={i.navLabel}
                description={i.subtitle}
              />
            </Link>
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="How It Works"
        title="One Campaign. One Added-Value Incentive. A Stronger Reason to Respond."
        subtitle="However your team generates leads, wins new business or keeps customers coming back, Blue Sky Incentives adds one simple layer on top of it."
      >
        <div className="feature-grid">
          {HOW_IT_WORKS.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 40 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Speak With an Incentive Strategist</Button>
          </Link>
        </div>
      </Section>

      <Section title="Don't see your industry?">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/contact">
            <Button>Talk to us about your team</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
