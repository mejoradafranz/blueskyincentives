import { Section } from "./Section";
import "./MobileApp.css";

const CHECKLIST = [
  "Access Blue Sky Incentives from anywhere",
  "Manage your incentives on mobile",
  "Stay connected to your Blue Sky Incentives account",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.3 2.3L15.5 9.5" />
    </svg>
  );
}

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
