import { Link } from "react-router-dom";
import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { Button } from "../../components/ui/Button";
import { INDUSTRIES } from "../../data/industries";

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
