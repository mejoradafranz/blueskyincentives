import { useState } from "react";
import { Section } from "./Section";
import { Modal } from "../ui/Modal";
import growLeadsImage from "../../assets/incentives/grow-leads.png";
import growSalesImage from "../../assets/incentives/grow-sales.png";
import growRetentionImage from "../../assets/incentives/grow-retention.png";
import growReferralsImage from "../../assets/incentives/grow-referrals.png";
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
      "Add one incentive-driven line to your existing ad or landing page.",
    quote: "Get a free quote and receive a $100 Dining Certificate—no purchase necessary.",
    useCaseResult:
      "It gives prospects one more reason to respond instead of passing by.",
    tryThis:
      "Add an incentive to an existing lead-generation campaign—no rebuild or bigger budget needed.",
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
      "Add a high-value incentive instead of lowering your price.",
    quote: "Purchase today and receive an Airfare Plus Hotel for Two Certificate.",
    useCaseResult:
      "It raises the offer's value and makes the decision easier for hesitant prospects.",
    tryThis:
      "Add it to sales calls, proposals or checkout pages as a bonus—not a discount.",
    image: growSalesImage,
    imageAlt: "Add one incentive, convert more prospects — sales strategy infographic",
    ctaLabel: "See how Blue Sky Incentives",
    modalTitle: "Sales Strategy",
  },
  {
    key: "retention",
    title: "More Repeat Business",
    tagline: "Give previous customers a new reason to return and purchase again.",
    useCaseIntro:
      "Follow up when the timing makes sense—30 days later, a service renewal, or reactivating past customers.",
    quote: "Come back this month and receive a $100 Dining Certificate with your next purchase.",
    useCaseResult:
      "A fresh incentive gives the customer a fresh reason to come back.",
    tryThis:
      "Send it by email or SMS, using a different incentive than the original offer.",
    image: growRetentionImage,
    imageAlt: "Turn one-time buyers into loyal customers — customer-retention strategy infographic",
    ctaLabel: "See the Customer-Retention Strategy",
    modalTitle: "Customer-Retention Strategy",
  },
  {
    key: "referrals",
    title: "More Referrals",
    tagline: "Turn satisfied customers into a source of new business.",
    useCaseIntro:
      "Give happy customers a reason to introduce your business to others.",
    quote: "Refer a friend who becomes a customer and receive a $300 Dining Certificate.",
    useCaseResult:
      "The customer gets a reward; you get a referral you can trust.",
    tryThis:
      "Offer it after a great experience, with a simple link customers can share.",
    image: growReferralsImage,
    imageAlt: "Turn happy customers into brand advocates — referral strategy infographic",
    ctaLabel: "See the Referral Strategy",
    modalTitle: "Referral Strategy",
  },
];

export function GrowthWays() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const activeFeature = FEATURES.find((f) => f.key === openModal);

  return (
    <Section
      eyebrow="Grow Your Business"
      title="Four Ways Blue Sky Incentives Helps Your Business Grow"
      subtitle="One incentive, applied at four stages of the customer journey."
    >
      {FEATURES.map((f) => (
        <div key={f.key} className="growth-ways__feature-block">
          <div className="growth-ways__feature">
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

          <div className="growth-ways__cta">
            <button className="growth-ways__link" onClick={() => setOpenModal(f.key)}>
              {f.ctaLabel}
            </button>
          </div>
        </div>
      ))}

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
