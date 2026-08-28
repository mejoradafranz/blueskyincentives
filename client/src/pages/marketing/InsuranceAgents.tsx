import { Link } from "react-router-dom";
import { ImageHero } from "../../components/marketing/ImageHero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { CheckIcon } from "../../components/marketing/CheckIcon";
import { PricingPlans } from "../../components/marketing/PricingPlans";
import { PlanInclusions } from "../../components/marketing/PlanInclusions";
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
        id="insurance-agent-video"
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

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Insurance Conversation"
        subtitle="Different quote, review, appreciation, renewal and referral campaigns can use different incentive types and values. Blue Sky Incentives supplies and fulfills the incentives."
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
        subtitle="Blue Sky Incentives isn't only a quote-generation tool. Insurance agencies can use incentives to generate quote leads, create stronger new-client experiences, improve retention and create more referral opportunities."
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
        subtitle="The first policy can be the beginning of a broader household relationship built around appropriate coverage, proactive reviews and long-term service."
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
        subtitle="Rate increases, changing needs and competing quotes can put every renewal back in play. Give clients more reasons to stay connected with your agency before renewal becomes the only conversation."
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
        subtitle="Your membership includes the delivery methods and campaign support to put an incentive in front of the right person at the right moment — quote generation, lead follow-up, annual reviews, renewal, client appreciation, reactivation and referral campaigns."
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
              You decide the messaging and the campaign. The tools simply make it faster to
              produce and distribute.
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
    </>
  );
}
