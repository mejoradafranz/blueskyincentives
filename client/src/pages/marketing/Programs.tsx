import { useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/marketing/Section";
import { CheckIcon } from "../../components/marketing/CheckIcon";
import { Button } from "../../components/ui/Button";
import { Modal } from "../../components/ui/Modal";
import travelCert1 from "../../assets/travel-cert-1.jpg";
import travelCert2 from "../../assets/travel-cert-2.jpg";
import travelCert3 from "../../assets/travel-cert-3.jpg";
import travelCert4 from "../../assets/travel-cert-4.jpg";
import "./Programs.css";

interface CertificateImage {
  src: string;
  alt: string;
  title: string;
  value: string;
  note: string;
}

interface IncentiveCategory {
  key: string;
  title: string;
  description: string;
  features: string[];
  imageCount: number;
  landscape?: boolean;
  certificates?: CertificateImage[];
}

const TRAVEL_CERTIFICATES: CertificateImage[] = [
  {
    src: travelCert1,
    alt: "Oceanfront resort lit up at night with pools and cabanas along the beach",
    title: "Airfare Plus Hotel for Two Certificate",
    value: "Up to $999",
    note: "23 Exciting Destinations To Choose From",
  },
  {
    src: travelCert2,
    alt: "View from an airplane window above the clouds with the wing in frame",
    title: "7-Night Luxury Resort Getaway Certificate",
    value: "Up to $1,249",
    note: "Over 3,500 Locations Worldwide",
  },
  {
    src: travelCert3,
    alt: "Beachfront resort at sunset with palm trees and lounge chairs on the sand",
    title: "2-Night All-Inclusive Resort Getaway Certificate",
    value: "Up to $699",
    note: "Mexico & Dominican Republic",
  },
  {
    src: travelCert4,
    alt: "Blue Sky Incentives branded resort entrance lit up at night",
    title: "4-Night Mexico Getaway Certificate",
    value: "Up to $699",
    note: "Five Beach Resort City Destinations",
  },
];

const CATEGORIES: IncentiveCategory[] = [
  {
    key: "travel-vacation",
    title: "Travel & Vacation",
    description:
      "High-perceived-value travel incentives with thousands of destinations and travel opportunities across the Blue Sky Incentives portfolio.",
    features: [
      "Thousands of destinations worldwide",
      "Bookings completed by phone with a licensed travel agent",
      "Customers pay applicable taxes & fees",
    ],
    imageCount: 4,
    certificates: TRAVEL_CERTIFICATES,
  },
  {
    key: "cruise",
    title: "Cruise",
    description: "A flagship Blue Sky Incentives incentive with genuine stopping power in any promotion.",
    features: [
      "Top cruise lines",
      "Multiple destinations & departure ports",
      "Bookings completed by phone with a licensed travel agent",
      "Customers pay applicable port fees & taxes",
    ],
    imageCount: 1,
    landscape: true,
  },
  {
    key: "dining",
    title: "Dining",
    description:
      "Flexible dining rewards with broad consumer appeal and thousands of participating dining opportunities.",
    features: ["True cash value savings", "Thousands of participating restaurants", "Easy online platform"],
    imageCount: 4,
  },
  {
    key: "products",
    title: "Products",
    description:
      "A broad collection of smart devices, wellness products, grooming tools, automotive accessories and lifestyle products that give businesses tangible promotional options.",
    features: ["$129–$149 retail value", "Customers cover shipping & handling", "Delivered directly to their door"],
    imageCount: 12,
  },
  {
    key: "hotel-savings-cards",
    title: "Hotel Savings Cards",
    description:
      "Hotel savings across a wide range of destinations, from city stays to beach and mountain resorts.",
    features: [
      "True cash value savings",
      "More than 1,000,000 properties worldwide",
      "Easy online booking",
      "Savings up to 50% where available",
    ],
    imageCount: 5,
  },
  {
    key: "travel-dining-passes",
    title: "Travel & Dining Passes",
    description: "Travel and dining value in a flexible pass format.",
    features: [
      "True cash value savings",
      "More than 1,000,000 hotel properties worldwide",
      "Thousands of participating U.S. restaurants",
      "Online restaurant & travel booking",
    ],
    imageCount: 6,
  },
  {
    key: "savings",
    title: "Savings",
    description: "Wine and prescription savings that add practical everyday value to any promotion.",
    features: ["True cash value savings", "Everyday wine and prescription savings"],
    imageCount: 2,
  },
];

export function Programs() {
  const [showFees, setShowFees] = useState(false);

  return (
    <>
      <Section tone="dark" title="The Incentives" />

      {CATEGORIES.map((category, i) => (
        <Section
          key={category.key}
          tone={i % 2 === 1 ? "subtle" : "default"}
          title={category.title}
          subtitle={category.description}
        >
          <ul className="incentive-category__features">
            {category.features.map((feature) => (
              <li key={feature} className="incentive-category__feature">
                <span className="incentive-category__check">
                  <CheckIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {category.certificates ? (
            <div className="incentive-category__gallery incentive-category__gallery--certs">
              {category.certificates.map((cert) => (
                <div key={cert.title} className="cert-card">
                  <img src={cert.src} alt={cert.alt} className="cert-card__image" />
                  <div className="cert-card__caption">
                    <h3 className="cert-card__title">{cert.title}</h3>
                    <div className="cert-card__value-label">Certificate Value</div>
                    <div className="cert-card__value">{cert.value}</div>
                    <div className="cert-card__note">
                      <span className="cert-card__bullet" aria-hidden="true" />
                      {cert.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : category.landscape ? (
            <div className="incentive-category__gallery incentive-category__gallery--landscape">
              <div className="incentive-category__gallery-item">Image coming soon</div>
            </div>
          ) : (
            <div className="incentive-category__gallery">
              {Array.from({ length: category.imageCount }).map((_, idx) => (
                <div key={idx} className="incentive-category__gallery-item">
                  Image coming soon
                </div>
              ))}
            </div>
          )}
        </Section>
      ))}

      <Section
        title="Put Blue Sky Incentives to Work in Your Marketing"
        subtitle="Drive lead generation, sales conversion, repeat business, referrals and customer appreciation."
      >
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Speak With an Incentive Strategist</Button>
          </Link>
          <Button variant="secondary" onClick={() => setShowFees(true)}>
            View Certificate Details &amp; Fees
          </Button>
        </div>
      </Section>

      {showFees && (
        <Modal title="Certificate Details & Fees" onClose={() => setShowFees(false)}>
          <p>
            Most Blue Sky Incentives certificates carry no additional cost beyond redemption.
            A few categories involve costs paid directly by the redeeming customer:
          </p>
          <ul className="incentive-category__features" style={{ maxWidth: "none", textAlign: "left" }}>
            <li className="incentive-category__feature">
              <span className="incentive-category__check">
                <CheckIcon />
              </span>
              Travel &amp; Vacation — customers pay applicable taxes &amp; fees
            </li>
            <li className="incentive-category__feature">
              <span className="incentive-category__check">
                <CheckIcon />
              </span>
              Cruise — customers pay applicable port fees &amp; taxes
            </li>
            <li className="incentive-category__feature">
              <span className="incentive-category__check">
                <CheckIcon />
              </span>
              Products — $129–$149 retail value; customers cover shipping &amp; handling
            </li>
          </ul>
          <p style={{ color: "var(--color-text-faint)", fontSize: "0.85rem", marginTop: 16 }}>
            For the complete certificate terms and fee schedule, contact our team.
          </p>
        </Modal>
      )}
    </>
  );
}
