import { Section } from "./Section";
import "./IncentiveLibrary.css";

export interface IncentiveCategory {
  title: string;
  image?: string;
}

const CATEGORIES: IncentiveCategory[] = [
  { title: "Smart-Device Vouchers" },
  { title: "Dining Certificates" },
  { title: "Airfare + Hotel Stays" },
  { title: "Resort Stays" },
  { title: "Hotel Savings" },
  { title: "Cruise Certificates" },
];

export function IncentiveLibrary() {
  return (
    <Section
      eyebrow="Your Incentive Library"
      title="Give Away Unlimited Incentives Across 6 High-Value Categories"
      subtitle="Choose from smart-device vouchers, dining certificates, airfare-plus-hotel stays, resort stays, hotel savings and cruise certificates—valued from $100 to $2,000."
    >
      <p className="incentive-library__note">
        Without purchasing, stocking or personally fulfilling any of the rewards yourself.
      </p>

      <div className="incentive-library__grid">
        {CATEGORIES.map((c) => (
          <div key={c.title} className="incentive-library__card">
            <div className="incentive-library__media">
              {c.image ? (
                <img src={c.image} alt={c.title} className="incentive-library__image" />
              ) : (
                <span className="incentive-library__placeholder-text">Image coming soon</span>
              )}
            </div>
            <div className="incentive-library__title">{c.title}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
