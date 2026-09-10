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
  MediaFrame,
  PriceComparison,
  ChecklistTwoColumn,
  FaqAccordion,
} from "../../components/marketing/IndustryPageKit";
import { Button } from "../../components/ui/Button";
import heroTravelImage from "../../assets/hero-travel-agencies.jpg";
import bogoOfferImage from "../../assets/ta-bogo-offer.jpg";
import incentivesBannerImage from "../../assets/ta-incentives-banner.jpg";
import dashboardPreviewImage from "../../assets/ta-dashboard-preview.jpg";

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
    title: "You quoted the trip — then they booked it online",
    description: "Price comparison sites make it easy for travelers to shop your itinerary elsewhere.",
  },
  {
    mark: "02",
    title: "They want the lowest price before the relationship",
    description: "Rate-shopping can start the conversation before your expertise ever comes up.",
  },
  {
    mark: "03",
    title: "You planned the itinerary — then they went quiet",
    description: "Time spent researching and quoting doesn't guarantee a booked trip.",
  },
  {
    mark: "04",
    title: "You can't control airfare or resort pricing",
    description: "When rates look similar everywhere, you need another way to stand out.",
  },
  {
    mark: "05",
    title: "You booked their trip — then they used an app next time",
    description: "Winning one booking doesn't guarantee the next vacation or referral.",
  },
];

const HOW_IT_WORKS = [
  {
    mark: "01",
    title: "Run your existing travel marketing",
    description: "Website quote forms, Google and social ads, CRM email and SMS, community events and referral campaigns.",
  },
  {
    mark: "02",
    title: "Add a high-value incentive",
    description: "Attach it to a meaningful action such as requesting a quote, booking a trip, or paying a deposit.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "We supply the incentives, manage redemption, and give you tools to distribute them by email, SMS, QR code, landing page and more.",
  },
  {
    mark: "04",
    title: "Give travelers another reason to book with you",
    description: "Your expertise and destination knowledge remain the core value — the incentive just strengthens the offer.",
  },
];

const FOUR_WAYS = [
  {
    mark: "1",
    title: "Close More Travel Bookings",
    description: "Give undecided prospects another reason to complete their booking with you.",
  },
  {
    mark: "2",
    title: "Recover Unsold Quotes",
    description: "Follow up with prospects using an additional incentive rather than simply reducing your price.",
  },
  {
    mark: "3",
    title: "Generate Referrals",
    description: "Reward customers who introduce friends, family or colleagues.",
  },
  {
    mark: "4",
    title: "Drive Repeat Bookings",
    description: "Give existing travelers a reason to come back to you for their next vacation.",
  },
  {
    mark: "5",
    title: "Promote Groups & Cruises",
    description: "Build compelling promotional offers around cruises, groups and packaged travel.",
  },
];

const FAQS: { question: string; answer: string | null }[] = [
  {
    question: "Can I use an incentive with a free travel quote?",
    answer:
      "Yes — many agencies attach a $100 Dining Certificate to a completed quote request, no purchase necessary. Rules vary by state and supplier, so confirm your campaign with compliance and legal first.",
  },
  { question: "Can I use Blue Sky Incentives with purchased or shared leads?", answer: null },
  { question: "Can I use incentives for group or destination trips?", answer: null },
  { question: "Can I use Blue Sky Incentives for client-appreciation campaigns?", answer: null },
  { question: "Can I use incentives for referral campaigns?", answer: null },
  { question: "Can I use incentives for off-season promotions?", answer: null },
  { question: "Do I pay for every incentive I distribute?", answer: null },
  { question: "Who handles incentive redemption and fulfillment?", answer: null },
  { question: "Can I automate quote or follow-up campaigns?", answer: null },
  {
    question: "Are travel incentive rules different by state or supplier?",
    answer:
      "Yes. Rules vary by state and supplier — review your campaign with compliance and legal before launch.",
  },
];

export function TravelAgencies() {
  return (
    <>
      <ImageHero
        image={heroTravelImage}
        imageAlt="Blue Sky Incentives team helping travelers with hotel booking confirmations at the front desk"
        eyebrow="For Travel Agencies & Advisors"
        title="Give Travelers Another Reason to Book With You."
        subtitle="High-value incentives that make your booking campaigns stand out from online travel sites and win more repeat bookings."
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
        title="Travelers Can Book Anywhere in Two Clicks."
        subtitle="Online travel sites, direct bookings and other agencies are all one search away. Winning the booking takes more than being available."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <ClosingNote>
          The problem isn't generating more leads. It's getting the traveler to choose you — and
          book with you again.
        </ClosingNote>
      </Section>

      <Section
        tone="subtle"
        eyebrow="How Blue Sky Incentives Works"
        title="One Booking Campaign. One Added-Value Incentive. A Stronger Reason to Respond."
      >
        <div className="feature-grid">
          {HOW_IT_WORKS.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section
        id="travel-agent-video"
        eyebrow="Travel Agent Video"
        title="See How Travel Agencies Can Use Blue Sky Incentives"
        subtitle="See how agencies use incentives for quote requests, bookings and referrals."
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
        eyebrow="Why the Booking Offer Matters"
        title="Same Trip. A Stronger Reason to Book With You."
        subtitle={
          <>
            Every agency can say &ldquo;I&rsquo;ll find you the best trip.&rdquo; An incentive
            makes that offer harder to ignore.
          </>
        }
      >
        <MediaFrame
          src={bogoOfferImage}
          alt="How the BOGO-style offer works: client books a paid trip, you deliver a bonus vacation certificate, they feel they got more value, and you win more bookings and referrals"
        />
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="The Price-Shopping Problem"
        title="When Travelers Are Comparing Every Option, Your Offer Matters."
        subtitle="One trip inquiry can put you in competition with online sites and other agencies. If price is the only differentiator, you need another way to stand out."
      >
        <PriceComparison
          before={{
            badge: "Traditional Approach",
            value: "$5,000 Vacation",
            points: [
              "Customer asks for a better deal",
              "Agent discounts the package",
              "Margin and value are reduced",
            ],
            closing: "The trip is worth less to you — and looks the same to them.",
          }}
          after={{
            badge: "Blue Sky Incentives Approach",
            value: "$5,000 Vacation",
            bonus: "Complimentary Vacation Certificate",
            description:
              "The customer receives additional perceived value while you protect the original travel sale — and Blue Sky Incentives fulfills the complimentary vacation.",
            closing: "Full price preserved. A better reason to book with you.",
          }}
        />
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <Link to="/demo">
            <Button variant="secondary">Watch the Instant Demo</Button>
          </Link>
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Travel Conversation"
        subtitle="Different campaigns call for different incentive types and values. We supply and fulfill them all."
      >
        <MediaFrame
          src={incentivesBannerImage}
          alt="Five travel incentive categories: airfare plus hotel getaway, resort getaway, cruise getaway, hotel savings, and travel and dining experiences"
        />
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <a href="#travel-agent-video">
            <Button variant="secondary">Watch the Travel Agent Video</Button>
          </a>
        </div>
      </Section>

      <Section
        eyebrow="4 Ways to Use Blue Sky Incentives"
        title="Use Incentives Across Every Stage of the Client Relationship."
        subtitle="Use incentives to generate leads, win bookings, drive repeat trips and create referrals — not just close the first sale."
      >
        <div className="feature-grid">
          {FOUR_WAYS.map((w) => (
            <FeatureCard key={w.title} {...w} />
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Blue Sky Incentives Tools for Your Agency"
        title="Promote and Deliver Incentives Through the Marketing You Already Use"
        subtitle="Your membership includes everything you need to put an incentive in front of the right person at the right moment."
      >
        <MediaFrame src={dashboardPreviewImage} alt="The Blue Sky Incentives member dashboard AI Tools page" />
        <div style={{ height: 40 }} />
        <ChecklistTwoColumn
          columns={[
            {
              heading: "Distribution Built In",
              items: [
                "Email incentives to quote leads and follow-up sequences from your own business address",
                "SMS/text delivery for fast follow-up after a quote request",
                "Branded landing page links for quote forms and booking sign-ups",
                "QR codes for brochures, travel fairs, storefront signage and welcome packets",
                "Printable PDF certificates to hand out in the office or include with travel documents",
                "Website banners, sticky bars and pop-ups on your quote pages",
                "Zapier and API connections to your agency CRM and lead sources",
              ],
            },
            {
              heading: "Campaign Support",
              items: [
                {
                  label: "AI Marketing Consultant",
                  description: "quote campaigns, off-season outreach, and reactivation ideas",
                },
                {
                  label: "AI Social Content Creator",
                  description: "destination content with your incentive offers already integrated",
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
        title="Questions Travel Agencies Ask"
        subtitle="Still have a question about how incentives fit your booking and referral marketing?"
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
        title="Give Travelers Another Reason to Book With You."
        subtitle="Strengthen your booking marketing with high-value incentives — without losing the trust at the center of the relationship."
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
