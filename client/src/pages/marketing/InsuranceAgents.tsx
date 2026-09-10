import { useState } from "react";
import { Link } from "react-router-dom";
import { ImageHero } from "../../components/marketing/ImageHero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { CheckIcon } from "../../components/marketing/CheckIcon";
import { PricingPlans } from "../../components/marketing/PricingPlans";
import { PlanInclusions } from "../../components/marketing/PlanInclusions";
import { MoneyBackGuarantee } from "../../components/marketing/MoneyBackGuarantee";
import { Button } from "../../components/ui/Button";
import heroInsuranceImage from "../../assets/hero-insurance.jpg";
import sharedLeadImage from "../../assets/shared-lead-problem.jpg";
import fourWaysImage from "../../assets/4-ways-to-use.jpg";
import clientLifetimeValueImage from "../../assets/client-lifetime-value.jpg";
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
    description: "Shoppers compare premiums before they understand your coverage or service.",
  },
  {
    mark: "03",
    title: "You quoted them — then they disappeared",
    description: "Time spent collecting information and preparing a quote does not guarantee a policy.",
  },
  {
    mark: "04",
    title: "You can't control the carrier's rate",
    description: "When quotes look similar, you need another way to stand out.",
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
    description: "Attach it to a meaningful action — a quote request, coverage review, or client appreciation.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "We supply the incentives, manage redemption, and give you tools to distribute them by email, SMS, QR code, landing page and more.",
  },
  {
    mark: "04",
    title: "Give the shopper another reason to respond",
    description: "Your expertise and service remain the core value — the incentive just strengthens the offer.",
  },
];

const RETENTION_WAYS = [
  {
    mark: "1",
    title: "Annual Coverage Reviews",
    description: "Create another reason to proactively review coverage and client needs.",
  },
  {
    mark: "2",
    title: "Renewal Appreciation",
    description: "Use client appreciation to reinforce the agency relationship.",
  },
  {
    mark: "3",
    title: "Cross-Sell / Household Reviews",
    description: "Identify appropriate additional coverage opportunities without forcing unnecessary products.",
  },
  {
    mark: "4",
    title: "Client Anniversaries",
    description: "Stay in front of clients between policy transactions.",
  },
  {
    mark: "5",
    title: "Reactivation",
    description: "Reconnect with former or inactive clients when appropriate.",
  },
];

const DISTRIBUTION_ITEMS = [
  "Email incentives to quote leads and follow-up sequences from your own business address",
  "SMS/text delivery for fast follow-up after a quote request",
  "Branded landing page links for quote forms and coverage-review sign-ups",
  "QR codes for mailers, community events, office signage and renewal packets",
  "Printable PDF certificates to hand out in the office or include with policy documents",
  "Website banners, sticky bars and pop-ups on your quote pages",
  "Zapier and API connections to your agency CRM and lead sources",
];

const CAMPAIGN_SUPPORT_ITEMS = [
  {
    label: "AI Marketing Consultant",
    description: "quote campaigns, annual-review outreach, renewal and reactivation ideas",
  },
  {
    label: "AI Social Content Creator",
    description: "local agency content with your incentive offers already integrated",
  },
  {
    label: "Ask AI",
    description: "built-in guidance and recommendations inside your dashboard",
  },
];

const FAQS: { question: string; answer: string | null }[] = [
  {
    question: "Can I use an incentive with a free insurance quote?",
    answer:
      "Yes — many agencies attach a $100 Dining Certificate to a completed quote request, no purchase necessary. Rules vary by state and carrier, so confirm your campaign with compliance and legal first.",
  },
  {
    question: "Can I use Blue Sky Incentives with purchased or shared insurance leads?",
    answer: null,
  },
  {
    question: "Can I use incentives for annual coverage reviews?",
    answer: null,
  },
  {
    question: "Can I use Blue Sky Incentives for renewal and client-appreciation campaigns?",
    answer: null,
  },
  {
    question: "Can I use incentives for cross-sell campaigns?",
    answer: null,
  },
  {
    question: "Can I use incentives for referrals?",
    answer: null,
  },
  {
    question: "Do I pay for every incentive I distribute?",
    answer: null,
  },
  {
    question: "Who handles incentive redemption and fulfillment?",
    answer: null,
  },
  {
    question: "Can I automate quote or follow-up campaigns?",
    answer: null,
  },
  {
    question: "Are insurance incentive rules different by state?",
    answer:
      "Yes. Rules vary by state and carrier — review your campaign with compliance, legal and your carrier before launch.",
  },
];

export function InsuranceAgents() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <ImageHero
        image={heroInsuranceImage}
        imageAlt="Insurance agents meeting with a client in an office"
        eyebrow="For Insurance Agents & Agencies"
        title="Give More Insurance Shoppers a Reason to Request Your Quote."
        subtitle="High-value incentives that strengthen your quote campaigns and win more new clients, renewals and referrals."
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
        <div className="insurance-stats__panel">
        <div className="insurance-stats__grid">
          {STATS.map((s) => (
            <div key={s.label} className="insurance-stats__item">
              <div className="insurance-stats__value">{s.value}</div>
              <div className="insurance-stats__label">{s.label}</div>
            </div>
          ))}
        </div>
        </div>
        <p className="insurance-stats__note">
          An established incentive provider with more than two decades fulfilling promotional
          incentives for businesses.
        </p>
      </Section>

      <Section
        tone="subtle"
        eyebrow="The Real Problem"
        title="You're Not the Only Agent Calling That Lead."
        subtitle="Shoppers compare quotes, carriers and agents all at once. A lead only matters if you turn it into a real conversation."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <p className="insurance-problem__closing">
          The problem isn't generating more leads. It's getting the shopper to choose you — and
          stay.
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
        id="insurance-agent-video"
        tone="subtle"
        eyebrow="Insurance Agent Video"
        title="See How Insurance Agents Can Use Blue Sky Incentives"
        subtitle="See how agencies use incentives for quote generation, coverage reviews, retention and referrals."
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
            Every agency can say &ldquo;Get a Free Quote.&rdquo; An incentive makes that offer
            harder to ignore.
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
        subtitle="One quote request can reach multiple agencies. If everyone sounds the same, you need a reason to stand out."
      >
        <div className="insurance-media">
          <img
            src={sharedLeadImage}
            alt="One insurance quote request reaching multiple competing agents, and how a Blue Sky Incentives offer helps an agency stand out"
            className="insurance-media__image"
          />
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Insurance Conversation"
        subtitle="Different campaigns call for different incentive types and values. We supply and fulfill them all."
      >
        <div className="insurance-incentives__gallery">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="insurance-incentives__item">
              Image coming soon
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <a href="#insurance-agent-video">
            <Button variant="secondary">Watch the Insurance Agent Video</Button>
          </a>
        </div>
      </Section>

      <Section
        eyebrow="4 Ways to Use Blue Sky Incentives"
        title="Use Incentives Across Every Stage of the Client Relationship."
        subtitle="Use incentives for quote leads, new-client experiences, retention and referrals — not just lead generation."
      >
        <div className="insurance-media">
          <img
            src={fourWaysImage}
            alt="Four ways insurance agencies can use Blue Sky Incentives: quote leads, new clients, retention and referrals"
            className="insurance-media__image"
          />
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Client Lifetime Value"
        title="Don't Stop at One Policy. Grow the Relationship."
        subtitle="The first policy can grow into a full household relationship through proactive reviews and long-term service."
      >
        <div className="insurance-media">
          <img
            src={clientLifetimeValueImage}
            alt="Growing a client relationship from a single auto policy into a broader household relationship with annual reviews and renewals"
            className="insurance-media__image"
          />
        </div>
      </Section>

      <Section
        title="Winning the Client Once Doesn't Mean You Keep Them."
        subtitle="Every renewal is back in play. Give clients reasons to stay connected before it becomes the only conversation."
      >
        <div className="feature-grid">
          {RETENTION_WAYS.map((r) => (
            <FeatureCard key={r.title} {...r} />
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Blue Sky Incentives Tools for Your Agency"
        title="Promote and Deliver Incentives Through the Marketing Your Agency Already Uses"
        subtitle="Your membership includes everything you need to put an incentive in front of the right person at the right moment."
      >
        <div className="insurance-tools__grid">
          <div className="insurance-tools__column">
            <h3 className="insurance-tools__heading">Distribution Built In</h3>
            <ul className="insurance-tools__list">
              {DISTRIBUTION_ITEMS.map((item) => (
                <li key={item} className="insurance-tools__list-item">
                  <span className="insurance-tools__check">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="insurance-tools__column">
            <h3 className="insurance-tools__heading">Campaign Support</h3>
            <ul className="insurance-tools__list">
              {CAMPAIGN_SUPPORT_ITEMS.map((item) => (
                <li key={item.label} className="insurance-tools__list-item">
                  <span className="insurance-tools__check">
                    <CheckIcon />
                  </span>
                  <span>
                    <strong>{item.label}</strong> — {item.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="insurance-tools__note">
              You control the messaging. The tools just make it faster to produce and distribute.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 40 }}>
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
        eyebrow="Social Proof"
        title="Hear It From Blue Sky Incentives Members"
        subtitle="Real Blue Sky Incentives clients describing how incentives changed their marketing results."
      >
        <div className="insurance-video">
          <div className="insurance-video__play" aria-hidden="true" />
          <span className="insurance-video__caption">Video coming soon</span>
        </div>
      </Section>

      <PricingPlans />

      <Section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/contact">
            <Button>Start Risk-Free — $799 Today</Button>
          </Link>
        </div>
        <p className="insurance-pricing__guarantee">Protected by our 14-day money-back guarantee.</p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
          <Link to="/demo">
            <Button variant="secondary">Watch the Instant Demo</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Speak With an Incentive Strategist</Button>
          </Link>
        </div>
      </Section>

      <PlanInclusions />

      <Section tone="subtle">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/pricing">
            <Button variant="secondary">See Everything Included</Button>
          </Link>
        </div>
      </Section>

      <MoneyBackGuarantee />

      <Section
        tone="subtle"
        eyebrow="Common Questions"
        title="Questions Insurance Agents Ask"
        subtitle="Still have a question about how incentives fit your quote and retention marketing?"
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <Link to="/contact">
            <Button variant="secondary">Speak With an Incentive Strategist</Button>
          </Link>
        </div>

        <div className="insurance-faq__list">
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={faq.question} className="insurance-faq__item">
                <button
                  className="insurance-faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`insurance-faq__chevron ${isOpen ? "insurance-faq__chevron--open" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="insurance-faq__answer">
                    <p>{faq.answer ?? "Answer coming soon."}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        tone="subtle"
        title="Give Insurance Shoppers Another Reason to Request Your Quote."
        subtitle="Strengthen your quote marketing with high-value incentives — without losing the trust at the center of the relationship."
      >
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Speak With an Incentive Strategist</Button>
          </Link>
        </div>
        <p className="insurance-pricing__guarantee">Risk-Free 14-Day Money-Back Guarantee</p>
      </Section>
    </>
  );
}
