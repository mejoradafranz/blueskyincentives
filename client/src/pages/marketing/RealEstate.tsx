import { Link } from "react-router-dom";
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
  GalleryPlaceholder,
  ChecklistTwoColumn,
  FaqAccordion,
} from "../../components/marketing/IndustryPageKit";
import { Button } from "../../components/ui/Button";

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
    title: "You're pitching against a dozen other agents",
    description: "Sellers often interview multiple agents before choosing who lists their home.",
  },
  {
    mark: "02",
    title: "They want the commission split before the relationship",
    description: "Fee-shopping can start the conversation before your value ever comes up.",
  },
  {
    mark: "03",
    title: "You hosted the open house — then they went quiet",
    description: "Foot traffic doesn't guarantee a follow-up call, let alone an offer.",
  },
  {
    mark: "04",
    title: "You can't control the market or the rate environment",
    description: "When conditions are the same for every agent, you need another way to stand out.",
  },
  {
    mark: "05",
    title: "You closed the deal — then they used someone else next time",
    description: "Winning one transaction doesn't guarantee the next referral or repeat sale.",
  },
];

const HOW_IT_WORKS = [
  {
    mark: "01",
    title: "Run your existing real estate marketing",
    description:
      "Zillow and Realtor.com listings, open houses, Google and social ads, CRM email and SMS, community and referral campaigns.",
  },
  {
    mark: "02",
    title: "Add a high-value incentive",
    description:
      "Attach it to a meaningful action such as attending an open house, requesting a home valuation, signing a listing agreement, or closing.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "Blue Sky Incentives supplies the incentives and manages the redemption process, and gives you the tools to create and distribute them by email, SMS, landing page links, QR codes, PDFs, banners and pop-ups.",
  },
  {
    mark: "04",
    title: "Give buyers and sellers another reason to respond",
    description:
      "Your expertise, service and local market knowledge remain the core value. The incentive strengthens the offer around the next action.",
  },
];

const RETENTION_WAYS = [
  {
    mark: "1",
    title: "Closing Gifts",
    description: "Use a high-value incentive as a memorable closing gift clients actually redeem.",
  },
  {
    mark: "2",
    title: "Referral Rewards",
    description: "Turn client referrals into a rewarded, trackable behavior.",
  },
  {
    mark: "3",
    title: "Open-House Follow-Up",
    description: "Give visitors a reason to respond after they walk through the door.",
  },
  {
    mark: "4",
    title: "Client Anniversaries",
    description: "Stay in front of past clients between transactions.",
  },
  {
    mark: "5",
    title: "Reactivation",
    description: "Reconnect with former or inactive leads when appropriate.",
  },
];

const FAQS: { question: string; answer: string | null }[] = [
  {
    question: "Can I use an incentive with a free home valuation or listing appointment?",
    answer:
      "Many agents attach a high-value incentive such as a $100 Dining Certificate to completing a home valuation request or listing appointment, with no purchase necessary. Real estate marketing and inducement rules can vary by state and brokerage, so review your exact campaign with your broker, compliance and legal requirements before launch.",
  },
  { question: "Can I use Blue Sky Incentives with purchased or shared leads?", answer: null },
  { question: "Can I use incentives for open houses?", answer: null },
  { question: "Can I use Blue Sky Incentives for closing gifts?", answer: null },
  { question: "Can I use incentives for referral campaigns?", answer: null },
  { question: "Can I use incentives for past-client appreciation?", answer: null },
  { question: "Do I pay for every incentive I distribute?", answer: null },
  { question: "Who handles incentive redemption and fulfillment?", answer: null },
  { question: "Can I automate listing or follow-up campaigns?", answer: null },
  {
    question: "Are real estate incentive rules different by state or brokerage?",
    answer:
      "Real estate incentive, inducement and referral rules can vary by state and brokerage. Review your campaign with your broker, compliance and legal requirements before launch.",
  },
];

export function RealEstate() {
  return (
    <>
      <Section
        eyebrow="For Real Estate Agents & Teams"
        title="Give Home Buyers and Sellers Another Reason to Choose You."
        subtitle="Use high-value incentives to strengthen your listing and buyer campaigns, stand out at the open house, and create more opportunities for referrals and repeat business."
      >
        <ImagePlaceholder landscape />
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <Link to="/demo">
            <Button variant="secondary">Watch Instant Demo</Button>
          </Link>
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Trusted Track Record"
        title="Two Decades of Incentive Fulfillment Behind Every Offer You Present"
        subtitle="You present the offer while Blue Sky Incentives supplies and fulfills the incentive."
      >
        <StatsGrid stats={STATS} />
        <ClosingNote>
          An established incentive provider with more than two decades supplying and fulfilling
          promotional incentives for businesses.
        </ClosingNote>
      </Section>

      <Section
        eyebrow="The Real Problem"
        title="Every Listing Has Competition Before You Even Walk In."
        subtitle="Home buyers and sellers compare agents, teams, discount brokerages and online estimators before they ever pick up the phone. Winning the listing — or the buyer — takes more than being available."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <ClosingNote>
          The problem isn't simply generating more leads. It's getting the buyer or seller to
          choose you, remember you, and come back to you.
        </ClosingNote>
      </Section>

      <Section
        tone="subtle"
        eyebrow="How Blue Sky Incentives Works"
        title="One Listing Campaign. One Added-Value Incentive. A Stronger Reason to Respond."
      >
        <div className="feature-grid">
          {HOW_IT_WORKS.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section
        id="real-estate-agent-video"
        eyebrow="Real Estate Agent Video"
        title="See How Real Estate Agents Can Use Blue Sky Incentives"
        subtitle="See how agents and teams can use incentives around open houses, listing appointments, closings, client appreciation and referrals."
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
        eyebrow="Why the Listing Offer Matters"
        title="Same Home. A Stronger Reason to List With You."
        subtitle={
          <>
            Every agent can say &ldquo;I&rsquo;ll sell your home.&rdquo; Blue Sky Incentives gives
            you another way to make that listing pitch more noticeable and more compelling.
          </>
        }
      >
        <ImagePlaceholder landscape />
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="The Multiple-Agent Problem"
        title="When Every Agent Is Chasing the Same Listing, Your Offer Matters."
        subtitle="One listing inquiry can put the same seller in front of several agents and teams. If everyone is pitching with the same script, you need another reason to stand out."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Real Estate Conversation"
        subtitle="Different listing, buyer, closing, appreciation and referral campaigns can use different incentive types and values. Blue Sky Incentives supplies and fulfills the incentives."
      >
        <GalleryPlaceholder count={6} />
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <a href="#real-estate-agent-video">
            <Button variant="secondary">Watch the Real Estate Agent Video</Button>
          </a>
        </div>
      </Section>

      <Section
        eyebrow="4 Ways to Use Blue Sky Incentives"
        title="Use Incentives Across Every Stage of the Client Relationship."
        subtitle="Blue Sky Incentives isn't only a listing-generation tool. Agents can use incentives to generate leads, win listings, close more deals and create more referral opportunities."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Client Lifetime Value"
        title="Don't Stop at One Closing. Grow the Relationship."
        subtitle="The first transaction can be the beginning of a long-term relationship built around repeat business, referrals and staying top of mind."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        title="Winning the Client Once Doesn't Mean They Call You Next Time."
        subtitle="Every closing is a chance to be forgotten once the keys change hands. Give clients more reasons to stay connected with you before their next move — or their next referral."
      >
        <div className="feature-grid">
          {RETENTION_WAYS.map((r) => (
            <FeatureCard key={r.title} {...r} />
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Blue Sky Incentives Tools for Your Business"
        title="Promote and Deliver Incentives Through the Marketing You Already Use"
        subtitle="Your membership includes the delivery methods and campaign support to put an incentive in front of the right person at the right moment — listing generation, buyer follow-up, open houses, closings, client appreciation and referral campaigns."
      >
        <ChecklistTwoColumn
          columns={[
            {
              heading: "Distribution Built In",
              items: [
                "Email incentives to buyer and seller leads and follow-up sequences from your own business address",
                "SMS/text delivery for fast follow-up after an open house or inquiry",
                "Branded landing page links for home-valuation forms and listing sign-ups",
                "QR codes for yard signs, open-house flyers, mailers and closing packets",
                "Printable PDF certificates to hand out at the open house or include with closing documents",
                "Website banners, sticky bars and pop-ups on your listing pages",
                "Zapier and API connections to your CRM and lead sources",
              ],
            },
            {
              heading: "Campaign Support",
              items: [
                {
                  label: "AI Marketing Consultant",
                  description: "listing campaigns, open-house follow-up, closing and reactivation ideas",
                },
                {
                  label: "AI Social Content Creator",
                  description: "local market content with your incentive offers already integrated",
                },
                { label: "Ask AI", description: "built-in guidance and recommendations inside your dashboard" },
              ],
              note: "You decide the messaging and the campaign. The tools simply make it faster to produce and distribute.",
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
        title="Questions Real Estate Agents Ask"
        subtitle="Still have a question about how incentives fit your listing and referral marketing?"
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
        title="Give Buyers and Sellers Another Reason to Choose You."
        subtitle="Strengthen your listing and buyer marketing with high-value incentives while keeping local expertise, service and trust at the center of the relationship."
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
