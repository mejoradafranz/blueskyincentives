import { useState } from "react";
import { Section } from "./Section";
import { Modal } from "../ui/Modal";
import growLeadsImage from "../../assets/incentives/grow-leads.png";
import "./GrowthWays.css";

export interface GrowthWay {
  title: string;
  image?: string;
}

const WAYS: GrowthWay[] = [
  { title: "Attract More Leads", image: growLeadsImage },
  { title: "Convert More Prospects" },
  { title: "Bring Previous Customers Back" },
  { title: "Generate More Referrals" },
];

export function GrowthWays() {
  const [showStrategy, setShowStrategy] = useState(false);

  return (
    <Section
      eyebrow="Grow Your Business"
      title="Four Ways Blue Sky Incentives Helps Your Business Grow"
      subtitle="Use high-value incentives throughout the customer journey to attract more leads, convert more prospects, bring previous customers back and generate referrals."
    >
      <div className="growth-ways__grid">
        {WAYS.map((w) => (
          <div key={w.title} className="growth-ways__card">
            <div className={`growth-ways__media ${!w.image ? "growth-ways__media--placeholder" : ""}`}>
              {w.image ? (
                <img src={w.image} alt={w.title} className="growth-ways__image" />
              ) : (
                <span className="growth-ways__placeholder-text">Image coming soon</span>
              )}
            </div>
            <div className="growth-ways__title">{w.title}</div>
          </div>
        ))}
      </div>

      <div className="growth-ways__cta">
        <button className="growth-ways__link" onClick={() => setShowStrategy(true)}>
          See the Lead-Generation Strategy
        </button>
      </div>

      {showStrategy && (
        <Modal
          title="Lead-Generation Strategy"
          onClose={() => setShowStrategy(false)}
          maxWidth={900}
        >
          <img
            src={growLeadsImage}
            alt="Add one incentive, attract more leads — lead-generation strategy infographic"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-md)" }}
          />
        </Modal>
      )}
    </Section>
  );
}
