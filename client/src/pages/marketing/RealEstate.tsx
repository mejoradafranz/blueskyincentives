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
  Gallery,
  MediaFrame,
  ChecklistTwoColumn,
  FaqAccordion,
} from "../../components/marketing/IndustryPageKit";
import { Button } from "../../components/ui/Button";
import heroRealEstateImage from "../../assets/hero-real-estate.jpg";
import listingOfferImage from "../../assets/re-listing-offer.jpg";
import buyerJourneyImage from "../../assets/re-buyer-journey.jpg";
import fourWaysImage from "../../assets/re-4-ways.jpg";
import clientLifetimeValueImage from "../../assets/re-client-lifetime-value.jpg";
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
    description: "Attach it to a meaningful action — an open house, a home valuation, a signed listing, or a closing.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "We supply the incentives, manage redemption, and give you tools to distribute them by email, SMS, QR code, landing page and more.",
  },
  {
    mark: "04",
    title: "Give buyers and sellers another reason to respond",
    description: "Your expertise and local knowledge remain the core value — the incentive just strengthens the offer.",
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
      "Yes — many agents attach a $100 Dining Certificate to a home valuation or listing appointment, no purchase necessary. Rules vary by state and brokerage, so confirm your campaign with your broker and compliance first.",
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
      "Yes. Rules vary by state and brokerage — review your campaign with your broker and compliance before launch.",
  },
];

export function RealEstate() {
  return (
    <>
      <ImageHero
        image={heroRealEstateImage}
        imageAlt="Blue Sky Incentives team welcoming clients at the front desk"
        eyebrow="For Real Estate Agents & Teams"
        title="Give Home Buyers and Sellers Another Reason to Choose You."
        subtitle="High-value incentives that make your listing and buyer campaigns stand out — and win more referrals and repeat business."
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

      <Section
        eyebrow="The Real Problem"
        title="Every Listing Has Competition Before You Even Walk In."
        subtitle="Buyers and sellers compare agents, brokerages and online estimators before they ever call. Winning the listing takes more than being available."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <ClosingNote>
          The problem isn't generating more leads. It's getting the buyer or seller to choose
          you — and come back.
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
        subtitle="See how agents and teams use incentives for open houses, listings, closings and referrals."
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
            Every agent can say &ldquo;I&rsquo;ll sell your home.&rdquo; An incentive makes that
            pitch harder to ignore.
          </>
        }
      >
        <MediaFrame
          src={listingOfferImage}
          alt="Before and after comparison of a generic buyer offer versus a stronger open house offer with a $100 hotel savings card"
        />
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="The Multiple-Agent Problem"
        title="When Every Agent Is Chasing the Same Listing, Your Offer Matters."
        subtitle="One listing inquiry can reach several agents. If everyone pitches the same script, you need a reason to stand out."
      >
        <MediaFrame
          src={buyerJourneyImage}
          alt="Five-step buyer journey from buyer promotion through offer accepted and closing, each strengthened by an incentive"
        />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Real Estate Conversation"
        subtitle="Different campaigns call for different incentive types and values. We supply and fulfill them all."
      >
        <Gallery items={INCENTIVE_GALLERY} />
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
        subtitle="Use incentives to generate leads, win listings, close deals and create referrals — not just find buyers."
      >
        <MediaFrame
          src={fourWaysImage}
          alt="Four ways to use incentives: generate more buyer leads, win more buyer clients, increase repeat business, and generate more referrals"
        />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Client Lifetime Value"
        title="Don't Stop at One Closing. Grow the Relationship."
        subtitle="The first transaction can grow into a long-term relationship built on repeat business and referrals."
      >
        <MediaFrame
          src={clientLifetimeValueImage}
          alt="Before and after comparison of a standard open house versus one offering a $100 hotel savings card, turning more open-house traffic into buyer opportunities"
        />
      </Section>

      <Section
        title="Winning the Client Once Doesn't Mean They Call You Next Time."
        subtitle="It's easy to be forgotten once the keys change hands. Give clients reasons to stay connected before their next move."
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
        subtitle="Your membership includes everything you need to put an incentive in front of the right person at the right moment."
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
        subtitle="Strengthen your listing and buyer marketing with high-value incentives — without losing the trust at the center of the relationship."
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
