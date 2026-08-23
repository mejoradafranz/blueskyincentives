import { Section } from "./Section";
import "./TrustedRelationships.css";

const CLIENT_LOGO_SLOTS = 6;
const PARTNER_LOGO_SLOTS = 6;

export function TrustedRelationships() {
  return (
    <Section
      eyebrow="Trusted Relationships"
      title="Trusted by Businesses. Supported by an Established Travel Network."
      subtitle="Blue Sky Incentives serves businesses across multiple industries and provides access to travel incentives through an established hospitality, resort and travel-service ecosystem."
    >
      <div className="trusted__block">
        <h3 className="trusted__block-title">Selected Blue Sky Incentives Clients</h3>
        <p className="trusted__block-text">
          Businesses across multiple industries use Blue Sky Incentives to support lead
          generation, sales, retention and referrals.
        </p>
        <div className="trusted__logo-row">
          {Array.from({ length: CLIENT_LOGO_SLOTS }).map((_, i) => (
            <div key={i} className="trusted__logo-slot">
              Client Logo
            </div>
          ))}
        </div>
      </div>

      <div className="trusted__block">
        <h3 className="trusted__block-title">The Network Behind Our Travel Incentives</h3>
        <p className="trusted__block-text">
          Our travel-incentive ecosystem includes established hospitality, resort and
          travel-service providers.
        </p>
        <div className="trusted__logo-row">
          {Array.from({ length: PARTNER_LOGO_SLOTS }).map((_, i) => (
            <div key={i} className="trusted__logo-slot">
              Partner Logo
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
