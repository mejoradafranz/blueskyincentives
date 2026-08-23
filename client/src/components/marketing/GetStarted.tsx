import { Link } from "react-router-dom";
import { Section } from "./Section";
import { Button } from "../ui/Button";
import "./GetStarted.css";

interface GetStartedAction {
  label: string;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary";
}

interface GetStartedOption {
  title: string;
  description: string;
  actions: GetStartedAction[];
}

const OPTIONS: GetStartedOption[] = [
  {
    title: "Watch the Instant Demo",
    description:
      "See how Blue Sky Incentives works, explore the available incentives and learn how businesses use them to generate leads, sales, repeat business and referrals.",
    actions: [{ label: "Watch the Instant Demo", to: "/demo" }],
  },
  {
    title: "Speak With an Incentive Strategist",
    description:
      "Get personalized answers about incentive selection, campaign strategy, setup, implementation and pricing.",
    actions: [
      { label: "Call an Incentive Strategist", href: "tel:+15551234567" },
      { label: "Book a One-on-One Call", to: "/contact", variant: "secondary" },
    ],
  },
  {
    title: "Start Risk-Free",
    description:
      "Activate your Blue Sky Incentives membership online and begin using the platform immediately.",
    actions: [{ label: "Start Risk-Free", to: "/contact" }],
  },
];

export function GetStarted() {
  return (
    <Section title="Choose How You Want to Get Started">
      <div className="get-started__grid">
        {OPTIONS.map((option) => (
          <div key={option.title} className="get-started__card">
            <h3 className="get-started__title">{option.title}</h3>
            <p className="get-started__description">{option.description}</p>
            <div className="get-started__actions">
              {option.actions.map((action) =>
                action.to ? (
                  <Link key={action.label} to={action.to} className="get-started__action-link">
                    <Button variant={action.variant ?? "primary"} style={{ width: "100%" }}>
                      {action.label}
                    </Button>
                  </Link>
                ) : (
                  <a key={action.label} href={action.href} className="get-started__action-link">
                    <Button variant={action.variant ?? "primary"} style={{ width: "100%" }}>
                      {action.label}
                    </Button>
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
