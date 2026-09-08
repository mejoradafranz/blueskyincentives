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
import cruiseCert from "../../assets/cruise-cert.jpg";
import dining1 from "../../assets/dining-1.jpg";
import dining2 from "../../assets/dining-2.jpg";
import dining3 from "../../assets/dining-3.jpg";
import dining4 from "../../assets/dining-4.jpg";
import product1 from "../../assets/product-1.jpg";
import product2 from "../../assets/product-2.jpg";
import product3 from "../../assets/product-3.jpg";
import product4 from "../../assets/product-4.jpg";
import product5 from "../../assets/product-5.jpg";
import product6 from "../../assets/product-6.jpg";
import product7 from "../../assets/product-7.jpg";
import product8 from "../../assets/product-8.jpg";
import product9 from "../../assets/product-9.jpg";
import product10 from "../../assets/product-10.jpg";
import product11 from "../../assets/product-11.jpg";
import product12 from "../../assets/product-12.jpg";
import hotel1 from "../../assets/hotel-1.jpg";
import hotel2 from "../../assets/hotel-2.jpg";
import hotel3 from "../../assets/hotel-3.jpg";
import hotel4 from "../../assets/hotel-4.jpg";
import hotel5 from "../../assets/hotel-5.jpg";
import savingsWine from "../../assets/savings-wine.jpg";
import savingsPrescription from "../../assets/savings-prescription.jpg";
import "./Programs.css";

interface CertificateImage {
  src: string;
  alt: string;
  title: string;
  spec?: string;
  valueLabel?: string;
  value: string;
  note?: string;
  badges?: string[];
  tall?: boolean;
}

interface LandscapeCertificate {
  src: string;
  alt: string;
  badges: string[];
  title: string;
  value: string;
  meta: string;
  inventoryNote: string;
  destinationsNote: string;
}

interface ValuePass {
  value: string;
  title: string;
  badge: string;
  gradient: string;
}

interface IncentiveCategory {
  key: string;
  title: string;
  description: string;
  features: string[];
  imageCount: number;
  landscape?: boolean;
  landscapeImage?: { src: string; alt: string };
  landscapeCertificate?: LandscapeCertificate;
  certificates?: CertificateImage[];
  valuePasses?: ValuePass[];
}

const TRAVEL_DINING_PASSES: ValuePass[] = [
  {
    value: "$200",
    title: "$200 Travel & Dining Pass",
    badge: "U.S. Residents Only",
    gradient: "linear-gradient(155deg, #0e4f6e 0%, #1a7fa3 100%)",
  },
  {
    value: "$400",
    title: "$400 Travel & Dining Pass",
    badge: "U.S. Residents Only",
    gradient: "linear-gradient(155deg, #10214f 0%, #2b4fa8 100%)",
  },
  {
    value: "$600",
    title: "$600 Travel & Dining Pass",
    badge: "U.S. Residents Only",
    gradient: "linear-gradient(155deg, #7a5510 0%, #c99a34 100%)",
  },
  {
    value: "$800",
    title: "$800 Travel & Dining Pass",
    badge: "U.S. Residents Only",
    gradient: "linear-gradient(155deg, #0f5c46 0%, #1f9c74 100%)",
  },
  {
    value: "$1,000",
    title: "$1,000 Travel & Dining Pass",
    badge: "U.S. Residents Only",
    gradient: "linear-gradient(155deg, #591c37 0%, #1b1338 100%)",
  },
];

const DINING_CERTIFICATES: CertificateImage[] = [
  {
    src: dining1,
    alt: "Formal dining room with a crystal chandelier and a table set with wine and seafood",
    badges: ["U.S. Residents Only"],
    title: "$100 Dining Certificate",
    value: "$100",
    note: "Premium steakhouse dining room",
  },
  {
    src: dining2,
    alt: "Fine dining table set beside floor-to-ceiling windows overlooking a city skyline at dusk",
    badges: ["U.S. Residents Only"],
    title: "$200 Dining Certificate",
    value: "$200",
    note: "Waterfront terrace dining at sunset",
  },
  {
    src: dining3,
    alt: "Wood-paneled dining room with a roast dinner spread beside a fireplace",
    badges: ["U.S. Residents Only"],
    title: "$300 Dining Certificate",
    value: "$300",
    note: "Chef-driven tasting plate on a dark counter",
  },
  {
    src: dining4,
    alt: "Outdoor terrace dining table with mezze, seafood paella and wine at sunset",
    badges: ["U.S. Residents Only"],
    title: "$400 Dining Certificate",
    value: "$400",
    note: "Private celebratory dining room with champagne toast",
  },
];

const PRODUCT_BADGES = ["Blue Sky Product Voucher", "U.S. Residents Only"];

const PRODUCT_CERTIFICATES_BASE: CertificateImage[] = [
  {
    src: product1,
    alt: "Touch screen MP4 player on a wooden desk",
    badges: PRODUCT_BADGES,
    title: "Touch Screen MP4 Player Voucher",
    spec: "Touch Screen • Expandable Memory",
    valueLabel: "Retail Value",
    value: "$129",
  },
  {
    src: product2,
    alt: "Wireless earbuds with charging case",
    badges: PRODUCT_BADGES,
    title: "Bluetooth Wireless Earbuds Voucher",
    spec: "Bluetooth 5.0 • Charging Case",
    valueLabel: "Retail Value",
    value: "$129",
  },
  {
    src: product3,
    alt: "Smart fitness watch on a wrist",
    badges: PRODUCT_BADGES,
    title: "Smart Fitness Watch Voucher",
    spec: "Sport Modes • Activity Tracking",
    valueLabel: "Retail Value",
    value: "$129",
  },
  {
    src: product4,
    alt: "Portable Bluetooth speaker beside a pool",
    badges: PRODUCT_BADGES,
    title: "Portable Bluetooth Speaker Voucher",
    spec: "Bluetooth 5.0 • Waterproof Design",
    valueLabel: "Retail Value",
    value: "$129",
  },
  {
    src: product5,
    alt: "Smartphone UV sanitizer case",
    badges: PRODUCT_BADGES,
    title: "Smartphone UV Sanitizer Voucher",
    spec: "Dual UV Lights • 8-Minute Cycle",
    valueLabel: "Retail Value",
    value: "$129",
  },
  {
    src: product6,
    alt: "Smart teeth whitening system kit",
    badges: PRODUCT_BADGES,
    title: "Smart Teeth Whitening System Voucher",
    spec: "LED Mouthpiece • Multi-Treatment Kit",
    valueLabel: "Retail Value",
    value: "$129",
  },
  {
    src: product7,
    alt: "Mini wireless vehicle vacuum cleaning a car seat",
    badges: PRODUCT_BADGES,
    title: "Mini Wireless Vehicle Vacuum Voucher",
    spec: "Wireless • Washable Filter",
    valueLabel: "Retail Value",
    value: "$149",
  },
  {
    src: product8,
    alt: "Over-ear Bluetooth headphones on a side table",
    badges: PRODUCT_BADGES,
    title: "Bluetooth Headphones Voucher",
    spec: "Bluetooth 5.0 • Hands-Free Calling",
    valueLabel: "Retail Value",
    value: "$149",
  },
  {
    src: product9,
    alt: "Bluetooth vehicle audio transmitter plugged into a car dashboard",
    badges: PRODUCT_BADGES,
    title: "Bluetooth 5.0 Vehicle Transmitter Voucher",
    spec: "Bluetooth 5.0 • Dual USB",
    valueLabel: "Retail Value",
    value: "$149",
  },
  {
    src: product10,
    alt: "Compact GPS tracking device attached to a set of keys",
    badges: PRODUCT_BADGES,
    title: "GPS Tracking Device Voucher",
    spec: "Compact Tracker • Mobile App",
    valueLabel: "Retail Value",
    value: "$149",
  },
  {
    src: product11,
    alt: "Professional vintage hair trimmers held in a barbershop",
    badges: PRODUCT_BADGES,
    title: "Professional Vintage Hair Trimmers Voucher",
    spec: "Titanium Blade • Metal Body",
    valueLabel: "Retail Value",
    value: "$149",
  },
  {
    src: product12,
    alt: "Wireless portable mini blender with fruit",
    badges: PRODUCT_BADGES,
    title: "Wireless Portable Mini Blender Voucher",
    spec: "USB Rechargeable • Stainless-Steel Blade",
    valueLabel: "Retail Value",
    value: "$149",
  },
];

const PRODUCT_CERTIFICATES: CertificateImage[] = PRODUCT_CERTIFICATES_BASE.map((cert) => ({
  ...cert,
  tall: true,
}));

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

const HOTEL_SAVINGS_CERTIFICATES: CertificateImage[] = [
  {
    src: hotel1,
    alt: "Overwater bungalows along a beach at sunset with loungers on the sand",
    badges: ["Global"],
    title: "$100 Hotel Savings Certificate",
    valueLabel: "Savings Value",
    value: "$100",
    note: "Beachfront resort with palms and turquoise water",
  },
  {
    src: hotel2,
    alt: "Beachfront cabanas and lounge chairs with a waiter serving guests beside a sailboat",
    badges: ["Global"],
    title: "$200 Hotel Savings Certificate",
    valueLabel: "Savings Value",
    value: "$200",
    note: "Luxury boutique hotel suite interior",
  },
  {
    src: hotel3,
    alt: "Cliffside infinity pool overlooking a bay with yachts anchored offshore",
    badges: ["Global"],
    title: "$300 Hotel Savings Certificate",
    valueLabel: "Savings Value",
    value: "$300",
    note: "Mountain destination resort lodge at golden hour",
  },
  {
    src: hotel4,
    alt: "Thatched-roof overwater bungalows beneath a green mountain peak",
    badges: ["Global"],
    title: "$400 Hotel Savings Certificate",
    valueLabel: "Savings Value",
    value: "$400",
    note: "Tropical luxury resort infinity pool at sunset",
  },
  {
    src: hotel5,
    alt: "Beachfront promenade with loungers, umbrellas and a city skyline in the distance",
    badges: ["Global"],
    title: "$500 Hotel Savings Certificate",
    valueLabel: "Savings Value",
    value: "$500",
  },
];

const SAVINGS_CERTIFICATES: CertificateImage[] = [
  {
    src: savingsWine,
    alt: "Wine bottle and a poured glass on a restaurant table set for dinner",
    badges: ["U.S. Residents Only"],
    title: "$100 Wine Savings Card",
    value: "$100",
    note: "Pharmacist handing a prescription to a customer",
  },
  {
    src: savingsPrescription,
    alt: "Pharmacist handing a prescription discount card to a patient at the pharmacy counter",
    badges: ["U.S. Pharmacies"],
    title: "Prescription Discount Card",
    valueLabel: "Savings Value",
    value: "Up to 75%",
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
    landscapeCertificate: {
      src: cruiseCert,
      alt: "Cruise ship sailing at sunset with the sky lit in orange and pink",
      badges: ["Flagship Incentive", "Global"],
      title: "4 Night Cruise Certificate",
      value: "Up to $899",
      meta: "4 Nights / 5 Days • Two Adults",
      inventoryNote: "Selected Carnival, Royal Caribbean, Norwegian or Princess Inventory",
      destinationsNote: "Cozumel • Nassau, Bahamas • Ensenada, Mexico",
    },
  },
  {
    key: "dining",
    title: "Dining",
    description:
      "Flexible dining rewards with broad consumer appeal and thousands of participating dining opportunities.",
    features: ["True cash value savings", "Thousands of participating restaurants", "Easy online platform"],
    imageCount: 4,
    certificates: DINING_CERTIFICATES,
  },
  {
    key: "products",
    title: "Products",
    description:
      "A broad collection of smart devices, wellness products, grooming tools, automotive accessories and lifestyle products that give businesses tangible promotional options.",
    features: ["$129–$149 retail value", "Customers cover shipping & handling", "Delivered directly to their door"],
    imageCount: 12,
    certificates: PRODUCT_CERTIFICATES,
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
    certificates: HOTEL_SAVINGS_CERTIFICATES,
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
    imageCount: 5,
    valuePasses: TRAVEL_DINING_PASSES,
  },
  {
    key: "savings",
    title: "Savings",
    description: "Wine and prescription savings that add practical everyday value to any promotion.",
    features: ["True cash value savings", "Everyday wine and prescription savings"],
    imageCount: 2,
    certificates: SAVINGS_CERTIFICATES,
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

          {category.valuePasses ? (
            <div className="incentive-category__gallery incentive-category__gallery--certs">
              {category.valuePasses.map((pass) => (
                <div key={pass.title} className="pass-card" style={{ background: pass.gradient }}>
                  <div className="pass-card__watermark" aria-hidden="true">
                    {pass.value}
                  </div>
                  <span className="pass-card__badge">{pass.badge}</span>
                  <h3 className="pass-card__title">{pass.title}</h3>
                  <div className="pass-card__footer">
                    <div className="pass-card__value-label">Pass Value</div>
                    <div className="pass-card__value">{pass.value}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : category.certificates ? (
            <div className="incentive-category__gallery incentive-category__gallery--certs">
              {category.certificates.map((cert) => (
                <div key={cert.title} className={`cert-card ${cert.tall ? "cert-card--tall" : ""}`}>
                  <img src={cert.src} alt={cert.alt} className="cert-card__image" />
                  <div className="cert-card__caption">
                    {cert.badges && (
                      <div className="cert-card__badges">
                        {cert.badges.map((badge) => (
                          <span key={badge} className="cert-card__badge">
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="cert-card__title">{cert.title}</h3>
                    {cert.spec && <div className="cert-card__meta">{cert.spec}</div>}
                    <div className="cert-card__value-label">{cert.valueLabel ?? "Certificate Value"}</div>
                    <div className="cert-card__value">{cert.value}</div>
                    {cert.note && (
                      <div className="cert-card__note">
                        <span className="cert-card__bullet" aria-hidden="true" />
                        {cert.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : category.landscape ? (
            <div className="incentive-category__gallery incentive-category__gallery--landscape">
              {category.landscapeCertificate ? (
                <div className="cert-card cert-card--landscape">
                  <img
                    src={category.landscapeCertificate.src}
                    alt={category.landscapeCertificate.alt}
                    className="cert-card__image"
                  />
                  <div className="cert-card__caption">
                    <div className="cert-card__badges">
                      {category.landscapeCertificate.badges.map((badge) => (
                        <span key={badge} className="cert-card__badge">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <h3 className="cert-card__title">{category.landscapeCertificate.title}</h3>
                    <div className="cert-card__value-label">Certificate Value</div>
                    <div className="cert-card__value">{category.landscapeCertificate.value}</div>
                    <div className="cert-card__meta">{category.landscapeCertificate.meta}</div>
                    <div className="cert-card__meta cert-card__meta--muted">
                      {category.landscapeCertificate.inventoryNote}
                    </div>
                    <div className="cert-card__note">
                      <span className="cert-card__bullet" aria-hidden="true" />
                      {category.landscapeCertificate.destinationsNote}
                    </div>
                  </div>
                </div>
              ) : category.landscapeImage ? (
                <img
                  src={category.landscapeImage.src}
                  alt={category.landscapeImage.alt}
                  className="incentive-category__landscape-image"
                />
              ) : (
                <div className="incentive-category__gallery-item">Image coming soon</div>
              )}
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
