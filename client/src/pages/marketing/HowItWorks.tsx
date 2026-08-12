import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { StepList } from "../../components/marketing/StepList";

const ADMIN_STEPS = [
  {
    title: "Create your program",
    description: "Set a budget, a points-per-dollar conversion rate, and a start date.",
  },
  {
    title: "Enroll your employees",
    description: "Add employees individually or in bulk. Each one gets their own login to the employee portal.",
  },
  {
    title: "Award points",
    description: "Award points for recognition, milestones, or performance, with an optional note explaining why.",
  },
  {
    title: "Track budget and activity",
    description: "See budget used vs. remaining, participation, and redemption activity from your reports dashboard.",
  },
];

const EMPLOYEE_STEPS = [
  {
    title: "Log in to the employee portal",
    description: "Employees get their own account, separate from the admin portal.",
  },
  {
    title: "Check your points balance",
    description: "See your current balance and a full history of points awarded.",
  },
  {
    title: "Browse the rewards catalog",
    description: "Gift cards, merchandise, experiences, and more — filtered by what your points can cover.",
  },
  {
    title: "Redeem",
    description: "Redeem instantly. Your balance updates immediately and the redemption shows up in your history.",
  },
];

export function HowItWorks() {
  return (
    <>
      <Hero
        eyebrow="How It Works"
        title="Two portals, one program."
        subtitle="Client admins configure and manage the program. Employees redeem from it. Here's what each side actually looks like."
      />

      <Section eyebrow="For client admins" title="Setting up and running a program">
        <StepList steps={ADMIN_STEPS} />
      </Section>

      <Section tone="subtle" eyebrow="For employees" title="Earning and redeeming points">
        <StepList steps={EMPLOYEE_STEPS} />
      </Section>
    </>
  );
}
