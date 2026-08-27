import { Section } from "./Section";
import { CheckIcon } from "./CheckIcon";
import "./PlanInclusions.css";

const INCLUSIONS = [
  "Unlimited incentive distribution",
  "Access to all six incentive categories",
  "AI Marketing Consultant",
  "Competitor Analysis",
  "Social campaign assets and promotional tools",
  "Landing Page Links and lead capture",
  "Native GoHighLevel App",
  "Blue Sky Incentives AI Super Agent",
  "Email and SMS certificate delivery",
  "QR Code Certificates",
  "Printable PDF Certificates",
  "Website banners, pop-ups and sticky bars",
  "Zapier and API integration",
  "Blue Sky Incentives mobile-app access",
  "Member support and onboarding resources",
];

export function PlanInclusions() {
  return (
    <Section title="Both Plans Include">
      <ul className="plan-inclusions__grid">
        {INCLUSIONS.map((item) => (
          <li key={item} className="plan-inclusions__item">
            <span className="plan-inclusions__check">
              <CheckIcon />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
