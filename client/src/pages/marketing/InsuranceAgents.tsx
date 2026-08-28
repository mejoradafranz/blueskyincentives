import { Link } from "react-router-dom";
import { ImageHero } from "../../components/marketing/ImageHero";
import { Section } from "../../components/marketing/Section";
import { Button } from "../../components/ui/Button";
import heroInsuranceImage from "../../assets/hero-insurance.jpg";
import "./InsuranceAgents.css";

const STATS = [
  { value: "20+", label: "Years In Business" },
  { value: "18k", label: "Clients Enrolled" },
  { value: "13M+", label: "Certificates Distributed" },
  { value: "1M+", label: "Incentives Redeemed" },
  { value: "29M+", label: "In Savings For Redeemers" },
  { value: "Thousands", label: "Of Satisfied Clients" },
];

export function InsuranceAgents() {
  return (
    <>
      <ImageHero
        image={heroInsuranceImage}
        imageAlt="Insurance agents meeting with a client in an office"
        eyebrow="For Insurance Agents & Agencies"
        title="Give More Insurance Shoppers a Reason to Request Your Quote."
        subtitle="Use high-value incentives to strengthen your quote campaigns, give prospects another reason to respond, and create more opportunities for new clients, renewals, cross-sell and referrals."
        actions={
          <>
            <Link to="/contact">
              <Button>Start Risk-Free</Button>
            </Link>
            <Link to="/demo">
              <Button variant="secondary">Watch Instant Demo</Button>
            </Link>
          </>
        }
      />

      <Section
        eyebrow="Trusted Track Record"
        title="Two Decades of Incentive Fulfillment Behind Every Offer Your Agency Presents"
        subtitle="Your agency presents the offer while Blue Sky Incentives supplies and fulfills the incentive."
      >
        <div className="insurance-stats__grid">
          {STATS.map((s) => (
            <div key={s.label} className="insurance-stats__item">
              <div className="insurance-stats__value">{s.value}</div>
              <div className="insurance-stats__label">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="insurance-stats__note">
          An established incentive provider with more than two decades supplying and fulfilling
          promotional incentives for businesses.
        </p>
      </Section>
    </>
  );
}
