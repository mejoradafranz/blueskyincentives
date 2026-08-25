import { Section } from "./Section";
import { CheckIcon } from "./CheckIcon";
import "./MobileApp.css";

const CHECKLIST = [
  "Access Blue Sky Incentives from anywhere",
  "Manage your incentives on mobile",
  "Stay connected to your Blue Sky Incentives account",
];

export function MobileApp() {
  return (
    <Section>
      <div className="mobile-app__feature">
        <div className="mobile-app__text">
          <div className="mobile-app__eyebrow">Blue Sky Incentives Mobile App</div>
          <h2 className="mobile-app__title">Manage Your Incentive Marketing From Anywhere</h2>
          <p className="mobile-app__subtitle">
            Access Blue Sky Incentives from your phone and stay connected to your incentives,
            certificates and account wherever business takes you.
          </p>

          <ul className="mobile-app__checklist">
            {CHECKLIST.map((item) => (
              <li key={item} className="mobile-app__check-item">
                <span className="mobile-app__check-icon">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-app__media">
          <div className="mobile-app__phone">
            <span className="mobile-app__phone-text">App preview coming soon</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
