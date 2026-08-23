import { Link, Navigate, useParams } from "react-router-dom";
import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { Button } from "../../components/ui/Button";
import { getIndustryBySlug } from "../../data/industries";

export function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <>
      <Hero
        eyebrow={industry.eyebrow}
        title={industry.title}
        subtitle={industry.subtitle}
      />

      <Section>
        <div className="feature-grid">
          {industry.useCases.map((u) => (
            <FeatureCard key={u.title} {...u} />
          ))}
        </div>
      </Section>

      <Section tone="subtle" title={`Ready to build a program for your ${industry.navLabel.toLowerCase()} team?`}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/contact">
            <Button>Talk to us</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
