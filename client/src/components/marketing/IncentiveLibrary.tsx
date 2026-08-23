import { Section } from "./Section";
import smartDeviceImage from "../../assets/incentives/smart-device-vouchers.jpg";
import diningImage from "../../assets/incentives/dining-certificates.jpg";
import airfareHotelImage from "../../assets/incentives/airfare-hotel-stays.jpg";
import resortImage from "../../assets/incentives/resort-stays.jpg";
import hotelSavingsImage from "../../assets/incentives/hotel-savings.jpg";
import cruiseImage from "../../assets/incentives/cruise-certificates.jpg";
import "./IncentiveLibrary.css";

export interface IncentiveCategory {
  title: string;
  image?: string;
}

const CATEGORIES: IncentiveCategory[] = [
  { title: "Smart-Device Vouchers", image: smartDeviceImage },
  { title: "Dining Certificates", image: diningImage },
  { title: "Airfare + Hotel Stays", image: airfareHotelImage },
  { title: "Resort Stays", image: resortImage },
  { title: "Hotel Savings", image: hotelSavingsImage },
  { title: "Cruise Certificates", image: cruiseImage },
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
