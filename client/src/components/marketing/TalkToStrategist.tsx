import { Link } from "react-router-dom";
import { Section } from "./Section";
import { Button } from "../ui/Button";
import { CheckIcon } from "./CheckIcon";
import "./TalkToStrategist.css";

const CHECKLIST = [
  "Choose the right incentives for your business",
  "Structure a campaign for leads, sales, retention or referrals",
  "Understand implementation, pricing and membership options",
];

const PHONE_NUMBER = "+16198154181";
const PHONE_DISPLAY = "1-619-815-4181";

export function TalkToStrategist() {
  return (
    <Section>
      <div className="talk-strategist__feature">
        <div className="talk-strategist__text">
          <div className="talk-strategist__eyebrow">Need Help Choosing?</div>
          <h2 className="talk-strategist__title">Talk With an Incentive Strategist</h2>
          <p className="talk-strategist__subtitle">
            Get personalized guidance on the right incentives, campaign structure,
            implementation and membership option for your business.
          </p>

          <ul className="talk-strategist__checklist">
            {CHECKLIST.map((item) => (
              <li key={item} className="talk-strategist__check-item">
                <span className="talk-strategist__check-icon">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="talk-strategist__card">
          <h3 className="talk-strategist__card-title">Speak With a Strategist</h3>
          <a href={`tel:${PHONE_NUMBER}`} className="talk-strategist__phone">
            {PHONE_DISPLAY}
          </a>
          <p className="talk-strategist__hours">Monday&ndash;Friday, 8am&ndash;5pm PST</p>

          <div className="talk-strategist__actions">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button style={{ width: "100%" }}>Call Now</Button>
            </a>
            <Link to="/contact">
              <Button variant="secondary" style={{ width: "100%" }}>
                Book One-on-One Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
