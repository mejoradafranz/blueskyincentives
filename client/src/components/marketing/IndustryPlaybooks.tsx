import { useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "./Section";
import { FeatureCard } from "./FeatureCard";
import { Button } from "../ui/Button";
import { INDUSTRIES } from "../../data/industries";
import "./IndustryPlaybooks.css";

export function IndustryPlaybooks() {
  const [activeSlug, setActiveSlug] = useState(INDUSTRIES[0].slug);
  const active = INDUSTRIES.find((i) => i.slug === activeSlug) ?? INDUSTRIES[0];

  return (
    <Section
      tone="dark"
      eyebrow="Industry Playbooks"
      title="See How Blue Sky Incentives Can Work in Your Industry"
      subtitle="Watch short, industry-specific examples showing how businesses use high-value incentives to generate leads, close more sales, bring customers back and earn referrals."
    >
      <div className="industry-playbooks__tabs">
        {INDUSTRIES.map((industry) => (
          <button
            key={industry.slug}
            className={`industry-playbooks__tab ${
              industry.slug === activeSlug ? "industry-playbooks__tab--active" : ""
            }`}
            onClick={() => setActiveSlug(industry.slug)}
          >
            {industry.navLabel}
          </button>
        ))}
      </div>

      <div className="industry-playbooks__panel" key={active.slug}>
        <h3 className="industry-playbooks__panel-title">{active.title}</h3>
        <p className="industry-playbooks__panel-subtitle">{active.subtitle}</p>

        <div className="feature-grid">
          {active.useCases.map((u) => (
            <FeatureCard key={u.title} {...u} />
          ))}
        </div>

        <div className="industry-playbooks__panel-cta">
          <Link to={`/industries/${active.slug}`} className="industry-playbooks__link">
            View the full {active.navLabel} playbook →
          </Link>
        </div>
      </div>

      <div className="industry-playbooks__fallback">
        <h3 className="industry-playbooks__fallback-title">Don't See Your Exact Industry?</h3>
        <p className="industry-playbooks__fallback-text">
          Blue Sky Incentives can be adapted to almost any business that wants more leads,
          sales, repeat customers or referrals. Speak with an Incentive Strategist about how
          incentives could fit your current marketing.
        </p>
        <div className="industry-playbooks__fallback-actions">
          <a href="tel:+15551234567">
            <Button>Call an Incentive Strategist</Button>
          </a>
          <Link to="/contact">
            <Button variant="secondary">Book a One-on-One Call</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
