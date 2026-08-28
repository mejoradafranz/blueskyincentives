import { Link } from "react-router-dom";
import { ImageHero } from "../../components/marketing/ImageHero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { Button } from "../../components/ui/Button";
import heroInsuranceImage from "../../assets/hero-insurance.jpg";
import sharedLeadImage from "../../assets/shared-lead-problem.jpg";
import "./InsuranceAgents.css";

const STATS = [
  { value: "20+", label: "Years In Business" },
  { value: "18k", label: "Clients Enrolled" },
  { value: "13M+", label: "Certificates Distributed" },
  { value: "1M+", label: "Incentives Redeemed" },
  { value: "29M+", label: "In Savings For Redeemers" },
  { value: "Thousands", label: "Of Satisfied Clients" },
];

const PROBLEM_POINTS = [
  {
    mark: "01",
    title: "You paid for the lead — so did someone else",
    description: "Shared insurance leads may be worked by multiple agents at the same time.",
  },
  {
    mark: "02",
    title: "They want the price before the conversation",
    description:
      "Quote shoppers often compare premiums before they understand coverage, service or the value of the agency relationship.",
  },
  {
    mark: "03",
    title: "You quoted them — then they disappeared",
    description: "Time spent collecting information and preparing a quote does not guarantee a policy.",
  },
  {
    mark: "04",
    title: "You can't control the carrier's rate",
    description: "When several quotes look similar, your agency needs another way to create differentiation.",
  },
  {
    mark: "05",
    title: "You won the client — then they shopped again at renewal",
    description: "Winning the first policy does not automatically create retention.",
  },
];

const HOW_IT_WORKS = [
  {
    mark: "01",
    title: "Run your existing insurance marketing",
    description:
      "Google, Facebook and Instagram, website quote forms, purchased leads, CRM, email, SMS, community campaigns and referral campaigns.",
  },
  {
    mark: "02",
    title: "Add a high-value incentive",
    description:
      "Attach it to an appropriate meaningful action such as completing a quote request, attending a coverage review, participating in an approved agency campaign, or client appreciation.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "Blue Sky Incentives supplies the incentives and manages the redemption process, and gives you the tools to create and distribute them by email, SMS, landing page links, QR codes, PDFs, banners and pop-ups.",
  },
  {
    mark: "04",
    title: "Give the shopper another reason to respond",
    description:
      "Coverage expertise, service and trust remain the core value. The incentive strengthens the offer around the next action.",
  },
];

export function InsuranceAgents() {
  return (
    <>
      <ImageHero
        image={heroInsuranceImage}
        imageAlt="Insurance agents meeting with a client in an office"
        eyebrow="For Insurance Agents & Agencies"
        title="Give More Insurance Shoppers a Reason to Request Your Quote."
        subtitle="Use high-value incentives to strengthen your quote campaigns, give prospects another reason to respond, and create more opportunities for new clients, renewals, cross-sell and referrals."
        actions={
          <>
            <Link to="/contact">
              <Button>Start Risk-Free</Button>
            </Link>
            <Link to="/demo">
              <Button variant="secondary">Watch Instant Demo</Button>
            </Link>
          </>
        }
      />

      <Section
        eyebrow="Trusted Track Record"
        title="Two Decades of Incentive Fulfillment Behind Every Offer Your Agency Presents"
        subtitle="Your agency presents the offer while Blue Sky Incentives supplies and fulfills the incentive."
      >
        <div className="insurance-stats__grid">
          {STATS.map((s) => (
            <div key={s.label} className="insurance-stats__item">
              <div className="insurance-stats__value">{s.value}</div>
              <div className="insurance-stats__label">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="insurance-stats__note">
          An established incentive provider with more than two decades supplying and fulfilling
          promotional incentives for businesses.
        </p>
      </Section>

      <Section
        tone="subtle"
        eyebrow="The Real Problem"
        title="You're Not the Only Agent Calling That Lead."
        subtitle="Insurance shoppers are comparing multiple quotes, direct carriers, online options and often several agents at the same time. A lead only matters if you can turn it into a real conversation."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <p className="insurance-problem__closing">
          The problem isn't simply generating more insurance leads. It's getting the shopper to
          choose your conversation, your agency and eventually stay with you.
        </p>
      </Section>

      <Section
        eyebrow="How Blue Sky Incentives Works"
        title="One Quote Campaign. One Added-Value Incentive. A Stronger Reason to Respond."
      >
        <div className="feature-grid">
          {HOW_IT_WORKS.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Insurance Agent Video"
        title="See How Insurance Agents Can Use Blue Sky Incentives"
        subtitle="See how insurance agencies can use incentives around quote generation, coverage reviews, client appreciation, retention, cross-sell and referrals."
      >
        <div className="insurance-video">
          <div className="insurance-video__play" aria-hidden="true" />
          <span className="insurance-video__caption">Video coming soon</span>
        </div>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Speak With an Incentive Strategist</Button>
          </Link>
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Why the Quote Offer Matters"
        title="Same Insurance Quote. A Stronger Reason to Request It."
        subtitle={
          <>
            Every agency can say &ldquo;Get a Free Quote.&rdquo; Blue Sky Incentives gives you
            another way to make that quote offer more noticeable and more compelling.
          </>
        }
      >
        <div className="insurance-image-placeholder">
          <span>Image coming soon</span>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="The Shared-Lead Problem"
        title="When Multiple Agents Are Calling the Same Prospect, Your Offer Matters."
        subtitle="One quote request can put the same insurance shopper in front of multiple agencies. If everybody is calling with the same message, the agency needs another reason to stand out."
      >
        <div className="insurance-media">
          <img
            src={sharedLeadImage}
            alt="One insurance quote request reaching multiple competing agents, and how a Blue Sky Incentives offer helps an agency stand out"
            className="insurance-media__image"
          />
        </div>
      </Section>
    </>
  );
}
