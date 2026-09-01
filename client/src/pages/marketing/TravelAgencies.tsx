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
  GalleryPlaceholder,
  ChecklistTwoColumn,
  FaqAccordion,
} from "../../components/marketing/IndustryPageKit";
import { Button } from "../../components/ui/Button";
import heroTravelImage from "../../assets/hero-travel-agencies.jpg";

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
      "Blue Sky Incentives supplies the incentives and manages the redemption process, and gives you the tools to create and distribute them by email, SMS, landing page links, QR codes, PDFs, banners and pop-ups.",
  },
  {
    mark: "04",
    title: "Give travelers another reason to book with you",
    description:
      "Your expertise, service and destination knowledge remain the core value. The incentive strengthens the offer around the next action.",
  },
];

const RETENTION_WAYS = [
  {
    mark: "1",
    title: "Post-Trip Thank-You Gifts",
    description: "Use a high-value incentive as a memorable thank-you clients actually redeem.",
  },
  {
    mark: "2",
    title: "Referral Rewards",
    description: "Turn client referrals into a rewarded, trackable behavior.",
  },
  {
    mark: "3",
    title: "Off-Season Follow-Up",
    description: "Give past travelers a reason to start planning their next trip early.",
  },
  {
    mark: "4",
    title: "Client Anniversaries",
    description: "Stay in front of past clients between trips.",
  },
  {
    mark: "5",
    title: "Reactivation",
    description: "Reconnect with former or inactive clients when appropriate.",
  },
];

const FAQS: { question: string; answer: string | null }[] = [
  {
    question: "Can I use an incentive with a free travel quote?",
    answer:
      "Many agencies attach a high-value incentive such as a $100 Dining Certificate to completing a quote request, with no purchase necessary. Travel marketing rules can vary by state and supplier, so review your exact campaign with your compliance, legal and supplier requirements before launch.",
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
      "Travel incentive and marketing rules can vary by state and supplier. Review your campaign with your compliance, legal and supplier requirements before launch.",
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
        subtitle="Use high-value incentives to strengthen your booking campaigns, stand out from online travel sites, and create more opportunities for repeat bookings and referrals."
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
          An established incentive provider with more than two decades supplying and fulfilling
          promotional incentives for businesses.
        </ClosingNote>
      </Section>

      <Section
        eyebrow="The Real Problem"
        title="Travelers Can Book Anywhere in Two Clicks."
        subtitle="Online travel sites, direct airline and cruise bookings, and other agencies are all one search away. Winning the booking takes more than being available."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <ClosingNote>
          The problem isn't simply generating more leads. It's getting the traveler to choose you,
          remember you, and book with you again.
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
        subtitle="See how agencies can use incentives around quote requests, bookings, client appreciation and referrals."
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
            Every agency can say &ldquo;I&rsquo;ll find you the best trip.&rdquo; Blue Sky
            Incentives gives you another way to make that booking offer more noticeable and more
            compelling.
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
        eyebrow="The Price-Shopping Problem"
        title="When Travelers Are Comparing Every Option, Your Offer Matters."
        subtitle="One trip inquiry can put you in competition with online travel sites, other agencies and direct bookings. If price is the only differentiator, you need another way to stand out."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Travel Conversation"
        subtitle="Different quote, booking, appreciation and referral campaigns can use different incentive types and values. Blue Sky Incentives supplies and fulfills the incentives."
      >
        <GalleryPlaceholder count={6} />
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
        subtitle="Blue Sky Incentives isn't only a booking-generation tool. Agencies can use incentives to generate leads, win bookings, increase repeat trips and create more referral opportunities."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Client Lifetime Value"
        title="Don't Stop at One Trip. Grow the Relationship."
        subtitle="The first booking can be the beginning of a long-term relationship built around repeat travel, referrals and staying top of mind."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        title="Winning the Booking Once Doesn't Mean They Call You for the Next Trip."
        subtitle="Every trip is a chance to be forgotten once the vacation ends. Give clients more reasons to stay connected with you before their next getaway — or their next referral."
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
        subtitle="Your membership includes the delivery methods and campaign support to put an incentive in front of the right person at the right moment — quote generation, booking follow-up, client appreciation and referral campaigns."
      >
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
        subtitle="Strengthen your booking and quote marketing with high-value incentives while keeping destination expertise, service and trust at the center of the relationship."
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
