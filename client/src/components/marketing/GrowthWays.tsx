import { useState } from "react";
import { Section } from "./Section";
import { Modal } from "../ui/Modal";
import growLeadsImage from "../../assets/incentives/grow-leads.png";
import growSalesImage from "../../assets/incentives/grow-sales.png";
import "./GrowthWays.css";

interface GrowthFeature {
  key: string;
  title: string;
  tagline: string;
  useCaseIntro: string;
  quote: string;
  useCaseResult: string;
  tryThis: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  modalTitle: string;
}

const FEATURES: GrowthFeature[] = [
  {
    key: "leads",
    title: "More Leads",
    tagline: "Get more people to respond to the marketing you already have.",
    useCaseIntro:
      "Keep your existing ad, landing page or call to action, and add one incentive-driven line that makes the offer more appealing.",
    quote: "Get a free quote and receive a $100 Dining Certificate—no purchase necessary.",
    useCaseResult:
      "The incentive gives prospects an additional reason to click, call or submit their information instead of passing by the offer.",
    tryThis:
      "Add an incentive to one of your existing lead-generation campaigns. You do not need to rebuild the campaign or increase your advertising budget—simply give people a stronger reason to respond.",
    image: growLeadsImage,
    imageAlt: "Add one incentive, attract more leads — lead-generation strategy infographic",
    ctaLabel: "See the Lead-Generation Strategy",
    modalTitle: "Lead-Generation Strategy",
  },
  {
    key: "sales",
    title: "More Sales",
    tagline: "Give interested prospects one more reason to purchase today.",
    useCaseIntro:
      "Strengthen your existing offer by adding a high-perceived-value incentive instead of immediately lowering your price.",
    quote: "Purchase today and receive an Airfare Plus Hotel for Two Certificate.",
    useCaseResult:
      "The incentive increases the overall value of the offer and can make the decision easier for a prospect who is interested but still hesitant.",
    tryThis:
      "Add the incentive to your sales calls, proposals, checkout pages or limited-time promotions. Present it as an added benefit included with the purchase—not as a discount on your product or service.",
    image: growSalesImage,
    imageAlt: "Add one incentive, convert more prospects — sales strategy infographic",
    ctaLabel: "See how Blue Sky Incentives",
    modalTitle: "Sales Strategy",
  },
];

export function GrowthWays() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const activeFeature = FEATURES.find((f) => f.key === openModal);

  return (
    <Section
      eyebrow="Grow Your Business"
      title="Four Ways Blue Sky Incentives Helps Your Business Grow"
      subtitle="Use high-value incentives throughout the customer journey to attract more leads, convert more prospects, bring previous customers back and generate referrals."
    >
      {FEATURES.map((f) => (
        <div key={f.key} className="growth-ways__feature">
          <div className="growth-ways__feature-text">
            <h3 className="growth-ways__feature-title">{f.title}</h3>
            <p className="growth-ways__feature-tagline">{f.tagline}</p>

            <div className="growth-ways__block">
              <div className="growth-ways__label">Use Case</div>
              <p>{f.useCaseIntro}</p>
              <blockquote className="growth-ways__quote">&ldquo;{f.quote}&rdquo;</blockquote>
              <p>{f.useCaseResult}</p>
            </div>

            <div className="growth-ways__block">
              <div className="growth-ways__label">Try This</div>
              <p>{f.tryThis}</p>
            </div>
          </div>

          <div className="growth-ways__feature-media">
            <img src={f.image} alt={f.imageAlt} className="growth-ways__feature-image" />
          </div>
        </div>
      ))}

      <div className="growth-ways__cta">
        {FEATURES.map((f) => (
          <button
            key={f.key}
            className="growth-ways__link"
            onClick={() => setOpenModal(f.key)}
          >
            {f.ctaLabel}
          </button>
        ))}
      </div>

      {activeFeature && (
        <Modal
          title={activeFeature.modalTitle}
          onClose={() => setOpenModal(null)}
          maxWidth={900}
        >
          <img
            src={activeFeature.image}
            alt={activeFeature.imageAlt}
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-md)" }}
          />
        </Modal>
      )}
    </Section>
  );
}
