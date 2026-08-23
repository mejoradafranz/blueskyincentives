import { Link } from "react-router-dom";
import { Section } from "./Section";
import { FeatureCard } from "./FeatureCard";
import hotelOceanImage from "../../assets/incentives/hotel-ocean.jpg";
import "./WhyHotelsParticipate.css";

const BENEFITS = [
  {
    mark: "S",
    title: "Selected Unsold Inventory",
    description:
      "Hotels have fixed operating costs whether every room is occupied or not. Selected unused inventory can be made available for promotional stays.",
  },
  {
    mark: "A",
    title: "Additional Guest Revenue",
    description:
      "Promotional guests may spend money on dining, room service, entertainment, spas, upgrades and additional nights.",
  },
  {
    mark: "F",
    title: "Future Bookings and Referrals",
    description:
      "A positive guest experience can introduce the property to new travelers who may return as paying customers or recommend the property to others.",
  },
];

const FLOW_STEPS = [
  "Selected Hotel Inventory",
  "Promotional Guest Stay",
  "On-Property Spending",
  "Future Bookings and Referrals",
];

export function WhyHotelsParticipate() {
  return (
    <Section title="Why Hotels Participate">
      <div className="why-hotels__feature">
        <div className="why-hotels__text">
          <h3 className="why-hotels__heading">
            How Blue Sky Incentives Makes High-Value Travel Incentives Possible
          </h3>
          <p className="why-hotels__paragraph">
            Hotels and resorts can use selected unsold inventory to attract new guests,
            generate additional on-property revenue and build future booking relationships.
          </p>
        </div>

        <div className="why-hotels__media">
          <img
            src={hotelOceanImage}
            alt="An oceanfront resort pool at night"
            className="why-hotels__image"
          />
        </div>
      </div>

      <div className="feature-grid why-hotels__benefits">
        {BENEFITS.map((b) => (
          <FeatureCard key={b.title} {...b} />
        ))}
      </div>

      <div className="why-hotels__flow">
        {FLOW_STEPS.map((step, i) => (
          <div key={step} className="why-hotels__flow-item">
            <div className="why-hotels__flow-box">{step}</div>
            {i < FLOW_STEPS.length - 1 && (
              <div className="why-hotels__flow-arrow" aria-hidden="true">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="why-hotels__cta">
        <Link to="/demo" className="why-hotels__link">
          Watch How the Model Works →
        </Link>
      </div>
    </Section>
  );
}
