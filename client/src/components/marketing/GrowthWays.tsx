import { useState } from "react";
import { Section } from "./Section";
import { Modal } from "../ui/Modal";
import growLeadsImage from "../../assets/incentives/grow-leads.png";
import "./GrowthWays.css";

export function GrowthWays() {
  const [showStrategy, setShowStrategy] = useState(false);

  return (
    <Section
      eyebrow="Grow Your Business"
      title="Four Ways Blue Sky Incentives Helps Your Business Grow"
      subtitle="Use high-value incentives throughout the customer journey to attract more leads, convert more prospects, bring previous customers back and generate referrals."
    >
      <div className="growth-ways__feature">
        <div className="growth-ways__feature-text">
          <h3 className="growth-ways__feature-title">More Leads</h3>
          <p className="growth-ways__feature-tagline">
            Get more people to respond to the marketing you already have.
          </p>

          <div className="growth-ways__block">
            <div className="growth-ways__label">Use Case</div>
            <p>
              Keep your existing ad, landing page or call to action, and add one
              incentive-driven line that makes the offer more appealing.
            </p>
            <blockquote className="growth-ways__quote">
              &ldquo;Get a free quote and receive a $100 Dining Certificate&mdash;no purchase
              necessary.&rdquo;
            </blockquote>
            <p>
              The incentive gives prospects an additional reason to click, call or submit
              their information instead of passing by the offer.
            </p>
          </div>

          <div className="growth-ways__block">
            <div className="growth-ways__label">Try This</div>
            <p>
              Add an incentive to one of your existing lead-generation campaigns. You do
              not need to rebuild the campaign or increase your advertising budget&mdash;simply
              give people a stronger reason to respond.
            </p>
          </div>
        </div>

        <div className="growth-ways__feature-media">
          <img
            src={growLeadsImage}
            alt="Add one incentive, attract more leads — lead-generation strategy infographic"
            className="growth-ways__feature-image"
          />
        </div>
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
