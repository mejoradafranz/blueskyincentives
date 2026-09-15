import { Link } from "react-router-dom";
import { ImageHero } from "../../components/marketing/ImageHero";
import { Section } from "../../components/marketing/Section";
import { FeatureCard } from "../../components/marketing/FeatureCard";
import { PricingPlans } from "../../components/marketing/PricingPlans";
import { PlanInclusions } from "../../components/marketing/PlanInclusions";
import { MoneyBackGuarantee } from "../../components/marketing/MoneyBackGuarantee";
import {
  StatsGrid,
  ClosingNote,
  GuaranteeNote,
  VideoPlaceholder,
  ImagePlaceholder,
  MediaFrame,
  Gallery,
  StackedPoints,
  ChecklistTwoColumn,
  FaqAccordion,
} from "../../components/marketing/IndustryPageKit";
import { CheckIcon } from "../../components/marketing/CheckIcon";
import { Button } from "../../components/ui/Button";
import heroMarketingAgenciesImage from "../../assets/hero-marketing-agencies.jpg";
import pitchOfferImage from "../../assets/ma-pitch-offer.jpg";
import secondStageImage from "../../assets/ma-second-stage.jpg";
import integrationsDiagramImage from "../../assets/ma-integrations-diagram.jpg";
import smartDeviceImage from "../../assets/incentives/smart-device-vouchers.jpg";
import diningImage from "../../assets/incentives/dining-certificates.jpg";
import airfareHotelImage from "../../assets/incentives/airfare-hotel-stays.jpg";
import resortImage from "../../assets/incentives/resort-stays.jpg";
import hotelSavingsImage from "../../assets/incentives/hotel-savings.jpg";
import cruiseImage from "../../assets/incentives/cruise-certificates.jpg";

const INCENTIVE_GALLERY = [
  { src: smartDeviceImage, alt: "Smart-Device Vouchers" },
  { src: diningImage, alt: "Dining Certificates" },
  { src: airfareHotelImage, alt: "Airfare + Hotel Stays" },
  { src: resortImage, alt: "Resort Stays" },
  { src: hotelSavingsImage, alt: "Hotel Savings" },
  { src: cruiseImage, alt: "Cruise Certificates" },
];
import "./MarketingAgencies.css";

const INTEGRATION_OPTIONS = [
  {
    eyebrow: "Native App",
    title: "GoHighLevel Native App",
    description:
      "Agencies using GoHighLevel can integrate Blue Sky Incentives into the client workflows and campaign infrastructure they already operate.",
    items: [
      "Trigger incentives from workflows",
      "Automate distribution",
      "Integrate incentives into funnels and campaigns",
      "Use within client sub-account marketing processes",
      "Reduce manual fulfillment steps",
    ],
  },
  {
    eyebrow: "No-Code Automation",
    title: "Zapier App",
    description:
      "Connect Blue Sky Incentives distribution with the rest of your agency and client software stack — no development work required.",
    items: [
      "Lead captured",
      "Form submitted",
      "Appointment booked",
      "Purchase completed",
      "Referral received",
      "Other workflow triggers",
    ],
  },
  {
    eyebrow: "For Developers",
    title: "Blue Sky Open API",
    description:
      "For agencies with developers or proprietary systems, build custom incentive-distribution workflows directly into your own software.",
    items: ["CRMs", "Client portals", "Internal software", "Proprietary applications", "Marketing automation systems"],
  },
];

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
    title: "Your clients expect more",
    description:
      "Can we generate more leads? Can we improve conversion? Can we get more appointments? Can we get better results? The questions never stop.",
  },
  {
    title: "More ad spend isn't always the answer",
    description: "Increasing budget does not automatically make the underlying offer more compelling to the person seeing the ad.",
  },
  {
    title: "Sometimes the offer is the lever",
    description: "Instead of only changing media spend, creative, audiences and targeting, give prospects an additional reason to take action.",
  },
  {
    title: "Better traffic helps. Better creative helps.",
    description: "But sometimes the fastest way to strengthen a campaign is to make the offer more valuable.",
  },
];

const HOW_IT_WORKS = [
  {
    mark: "01",
    title: "Run your existing agency marketing",
    description:
      "Website contact forms, LinkedIn and social outreach, email campaigns, referral partners and pitch presentations.",
  },
  {
    mark: "02",
    title: "Add a high-value incentive",
    description: "Attach it to a meaningful action such as booking a discovery call, completing an audit, or signing a contract.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "We supply the incentives, manage redemption, and give you tools to distribute them by email, SMS, QR code, landing page and more.",
  },
  {
    mark: "04",
    title: "Give prospects another reason to respond",
    description: "Your strategy and results remain the core value — the incentive just strengthens the offer.",
  },
];

const RETENTION_WAYS = [
  {
    mark: "1",
    title: "Onboarding Gifts",
    description: "Use a high-value incentive as a memorable welcome gift new clients actually redeem.",
  },
  {
    mark: "2",
    title: "Referral Rewards",
    description: "Turn client referrals into a rewarded, trackable behavior.",
  },
  {
    mark: "3",
    title: "Campaign Milestone Follow-Up",
    description: "Give clients a reason to celebrate wins with you and stay engaged.",
  },
  {
    mark: "4",
    title: "Contract Anniversaries",
    description: "Stay in front of clients between renewal conversations.",
  },
  {
    mark: "5",
    title: "Reactivation",
    description: "Reconnect with former or inactive clients when appropriate.",
  },
];

const FAQS: { question: string; answer: string | null }[] = [
  {
    question: "Can I use an incentive with a free discovery call or audit?",
    answer:
      "Yes — many agencies attach a $100 Dining Certificate to a completed discovery call or audit, no purchase necessary. Confirm your campaign with compliance and legal first.",
  },
  { question: "Can I use Blue Sky Incentives with purchased or shared leads?", answer: null },
  { question: "Can I use incentives for RFP responses?", answer: null },
  { question: "Can I use Blue Sky Incentives for client onboarding?", answer: null },
  { question: "Can I use incentives for referral campaigns?", answer: null },
  { question: "Can I use incentives for client appreciation?", answer: null },
  { question: "Do I pay for every incentive I distribute?", answer: null },
  { question: "Who handles incentive redemption and fulfillment?", answer: null },
  { question: "Can I automate outreach or follow-up campaigns?", answer: null },
  {
    question: "Are marketing incentive rules different by industry or client contract?",
    answer:
      "Yes. Rules can vary by industry and by individual client contracts — review your campaign with compliance and legal before launch.",
  },
];

export function MarketingAgencies() {
  return (
    <>
      <ImageHero
        image={heroMarketingAgenciesImage}
        imageAlt="A consultant presenting a proposal to prospective clients in a conference room"
        eyebrow="For Marketing Agencies & Consultants"
        title="Give Prospective Clients Another Reason to Choose Your Agency."
        subtitle="High-value incentives that make your new-business pitches stand out and win more client retention and referrals."
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
        tone="subtle"
        eyebrow="Trusted Track Record"
        title="Two Decades of Incentive Fulfillment Behind Every Offer You Present"
        subtitle="You present the offer while Blue Sky Incentives supplies and fulfills the incentive."
      >
        <StatsGrid stats={STATS} />
        <ClosingNote>
          An established incentive provider with more than two decades fulfilling promotional
          incentives for businesses.
        </ClosingNote>
      </Section>

      <Section eyebrow="The Real Problem">
        <StackedPoints items={PROBLEM_POINTS} />
        <ClosingNote>
          The problem isn't generating more leads. It's getting the prospect to choose your
          agency — and stay.
        </ClosingNote>
      </Section>

      <Section
        tone="subtle"
        eyebrow="How Blue Sky Incentives Works"
        title="One Pitch Campaign. One Added-Value Incentive. A Stronger Reason to Respond."
      >
        <div className="feature-grid">
          {HOW_IT_WORKS.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section
        id="marketing-agency-video"
        eyebrow="Marketing Agency Video"
        title="See How Marketing Agencies Can Use Blue Sky Incentives"
        subtitle="See how agencies use incentives for discovery calls, new client wins and referrals."
      >
        <VideoPlaceholder />
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
        eyebrow="Why the Pitch Offer Matters"
        title="Same Strategy. A Stronger Reason to Sign With You."
        subtitle={
          <>
            Every agency can say &ldquo;We&rsquo;ll grow your business.&rdquo; An incentive makes
            that pitch harder to ignore.
          </>
        }
      >
        <MediaFrame
          src={pitchOfferImage}
          alt="Before and after: a generic free-quote form versus one offering a $100 dining certificate, for more leads without more ad spend"
        />
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="The Second Conversion Stage"
        title="Generate the Lead. Then Help Close the Sale."
        subtitle="Incentives are not only a lead-generation tool. A higher-value incentive can also be used at the proposal stage to give a prospect a stronger reason to move forward."
      >
        <MediaFrame
          src={secondStageImage}
          alt="Before and after: a client's basic quote-request ad versus one offering a vacation certificate, for a stronger offer that improves campaign results"
        />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Integrations & Automation"
        title="Built for Agencies. Built to Automate. Built to Scale."
        subtitle="Blue Sky Incentives can plug into the systems your agency and clients already use, so incentive distribution can become part of existing workflows instead of another manual task."
      >
        <div className="integration-cards">
          {INTEGRATION_OPTIONS.map((option) => (
            <div key={option.title} className="integration-card">
              <div className="integration-card__eyebrow">{option.eyebrow}</div>
              <h3 className="integration-card__title">{option.title}</h3>
              <p className="integration-card__description">{option.description}</p>
              <ul className="integration-card__list">
                {option.items.map((item) => (
                  <li key={item}>
                    <span className="integration-card__check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <MediaFrame
          src={integrationsDiagramImage}
          alt="Diagram showing how triggers like form submissions and purchases flow through GoHighLevel, Zapier or the Blue Sky Incentives Open API to automatically deliver certificates"
        />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Agency Conversation"
        subtitle="Different campaigns call for different incentive types and values. We supply and fulfill them all."
      >
        <Gallery items={INCENTIVE_GALLERY} />
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <a href="#marketing-agency-video">
            <Button variant="secondary">Watch the Marketing Agency Video</Button>
          </a>
        </div>
      </Section>

      <Section
        eyebrow="4 Ways to Use Blue Sky Incentives"
        title="Use Incentives Across Every Stage of the Client Relationship."
        subtitle="Use incentives to win pitches, strengthen onboarding, improve retention and create referrals — not just close the deal."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Client Lifetime Value"
        title="Don't Stop at One Campaign. Grow the Relationship."
        subtitle="The first project can grow into a long-term retainer relationship built on results and trust."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        title="Winning the Account Once Doesn't Mean They Renew."
        subtitle="It's easy to be forgotten once results are delivered. Give clients reasons to stay connected before the next renewal."
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
        title="Promote and Deliver Incentives Through the Marketing You Already Use"
        subtitle="Your membership includes everything you need to put an incentive in front of the right person at the right moment."
      >
        <ChecklistTwoColumn
          columns={[
            {
              heading: "Distribution Built In",
              items: [
                "Email incentives to prospect and client lists from your own business address",
                "SMS/text delivery for fast follow-up after a discovery call",
                "Branded landing page links for audit requests and consultation sign-ups",
                "QR codes for pitch decks, conference booths and printed proposals",
                "Printable PDF certificates to include with proposals or onboarding packets",
                "Website banners, sticky bars and pop-ups on your contact pages",
                "Zapier and API connections to your agency CRM and lead sources",
              ],
            },
            {
              heading: "Campaign Support",
              items: [
                {
                  label: "AI Marketing Consultant",
                  description: "pitch campaigns, onboarding outreach, and reactivation ideas",
                },
                {
                  label: "AI Social Content Creator",
                  description: "agency content with your incentive offers already integrated",
                },
                { label: "Ask AI", description: "built-in guidance and recommendations inside your dashboard" },
              ],
              note: "You control the messaging. The tools just make it faster to produce and distribute.",
            },
          ]}
        />
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
        eyebrow="Social Proof"
        title="Hear It From Blue Sky Incentives Members"
        subtitle="Real Blue Sky Incentives clients describing how incentives changed their marketing results."
      >
        <VideoPlaceholder />
      </Section>

      <PricingPlans />

      <Section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/contact">
            <Button>Start Risk-Free — $799 Today</Button>
          </Link>
        </div>
        <GuaranteeNote>Protected by our 14-day money-back guarantee.</GuaranteeNote>
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
        title="Questions Marketing Agencies Ask"
        subtitle="Still have a question about how incentives fit your new-business and retention marketing?"
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <Link to="/contact">
            <Button variant="secondary">Speak With an Incentive Strategist</Button>
          </Link>
        </div>
        <FaqAccordion faqs={FAQS} />
      </Section>

      <Section
        tone="subtle"
        title="Give Prospective Clients Another Reason to Choose Your Agency."
        subtitle="Strengthen your new-business and retention marketing with high-value incentives — without losing the trust at the center of the relationship."
      >
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Speak With an Incentive Strategist</Button>
          </Link>
        </div>
        <GuaranteeNote>Risk-Free 14-Day Money-Back Guarantee</GuaranteeNote>
      </Section>
    </>
  );
}
