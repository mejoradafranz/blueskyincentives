import { useState } from "react";
import { Section } from "./Section";
import { FeatureCard } from "./FeatureCard";
import { Modal } from "../ui/Modal";
import "./MoneyBackGuarantee.css";

const STEPS = [
  {
    mark: "1",
    title: "Activate Your Membership",
    description: "Choose your plan and start using the platform.",
  },
  {
    mark: "2",
    title: "Explore Blue Sky Incentives for 14 Days",
    description:
      "Review the incentives and tools included with your membership.",
  },
  {
    mark: "3",
    title: "Cancel and Request a Refund",
    description:
      "Not the right fit? Cancel and request your refund within the 14-day guarantee period.",
  },
];

export function MoneyBackGuarantee() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <Section title="Risk-Free 14-Day Money-Back Guarantee">
      <div className="money-back__intro">
        <p>
          Blue Sky Incentives is a paid membership, not a free trial. The 14-day guarantee
          gives you time to try the platform risk-free.
        </p>
        <p>
          Not right for you? Cancel and request a refund within the 14-day guarantee period.
        </p>
      </div>

      <div className="feature-grid">
        {STEPS.map((step) => (
          <FeatureCard key={step.title} {...step} />
        ))}
      </div>

      <div className="money-back__cta">
        <button className="money-back__terms-link" onClick={() => setShowTerms(true)}>
          View Guarantee Terms
        </button>
      </div>

      {showTerms && (
        <Modal title="14-Day Money-Back Guarantee" onClose={() => setShowTerms(false)}>
          <p>
            Blue Sky Incentives is a paid membership, not a free trial. The 14-day guarantee
            gives you time to try the platform risk-free.
          </p>
          <p>
            Not right for you? Cancel and request a refund within the 14-day guarantee period.
          </p>
          <p style={{ color: "var(--color-text-faint)", fontSize: "0.85rem" }}>
            For the complete terms and conditions of this guarantee, contact our team.
          </p>
        </Modal>
      )}
    </Section>
  );
}
