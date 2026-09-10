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
    description: "Website forms, ads, email, SMS, events and referral programs — whatever you already use.",
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
      "We supply the incentives, manage redemption, and give you tools to distribute them by email, SMS, QR code, landing page and more.",
  },
  {
    mark: "04",
    title: "Give your audience another reason to respond",
    description: "Your expertise and service remain the core value — the incentive just strengthens the offer.",
  },
];

export function Industries() {
  return (
    <>
      <Hero
        eyebrow="Industries & Use Cases"
        title="Built to fit how your team actually works."
        subtitle="The same points and redemption engine adapts to how each industry rewards its people."
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
        subtitle="One simple layer on top of however you already generate leads or keep customers coming back."
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
