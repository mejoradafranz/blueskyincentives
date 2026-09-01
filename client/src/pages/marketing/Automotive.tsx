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
    title: "You quoted the deal — then they shopped it at another dealer",
    description: "Price comparison across dealers can start before a shopper ever sees your lot.",
  },
  {
    mark: "02",
    title: "They want the lowest price before the relationship",
    description: "Price-shopping can start the conversation before your service and value ever come up.",
  },
  {
    mark: "03",
    title: "You handled the test drive — then they went quiet",
    description: "A test drive doesn't guarantee a signed deal.",
  },
  {
    mark: "04",
    title: "You can't control manufacturer pricing or incentives",
    description: "When rates and rebates look similar everywhere, you need another way to stand out.",
  },
  {
    mark: "05",
    title: "You closed the sale — then they took their service business elsewhere",
    description: "Winning the sale doesn't guarantee the service department keeps the relationship.",
  },
];

const HOW_IT_WORKS = [
  {
    mark: "01",
    title: "Run your existing dealership marketing",
    description:
      "Website quote forms, Google and social ads, CRM email and SMS, service reminders and referral campaigns.",
  },
  {
    mark: "02",
    title: "Add a high-value incentive",
    description:
      "Attach it to a meaningful action such as a test drive, a signed deal, a service appointment, or a maintenance-plan renewal.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "Blue Sky Incentives supplies the incentives and manages the redemption process, and gives you the tools to create and distribute them by email, SMS, landing page links, QR codes, PDFs, banners and pop-ups.",
  },
  {
    mark: "04",
    title: "Give shoppers and service customers another reason to respond",
    description: "Your pricing, service and trust remain the core value. The incentive strengthens the offer around the next action.",
  },
];

const RETENTION_WAYS = [
  {
    mark: "1",
    title: "Delivery-Day Gifts",
    description: "Use a high-value incentive as a memorable gift at delivery that customers actually redeem.",
  },
  {
    mark: "2",
    title: "Referral Rewards",
    description: "Turn customer referrals into a rewarded, trackable behavior.",
  },
  {
    mark: "3",
    title: "Service Appointment Follow-Up",
    description: "Give customers a reason to book their next service visit.",
  },
  {
    mark: "4",
    title: "Maintenance-Plan Renewals",
    description: "Recognize customers who renew or extend their service plans.",
  },
  {
    mark: "5",
    title: "Reactivation",
    description: "Reconnect with former or inactive customers when appropriate.",
  },
];

const FAQS: { question: string; answer: string | null }[] = [
  {
    question: "Can I use an incentive with a free test drive or trade-in appraisal?",
    answer:
      "Many dealerships attach a high-value incentive such as a $100 Dining Certificate to completing a test drive or trade-in appraisal, with no purchase necessary. Automotive marketing rules can vary by state and manufacturer, so review your exact campaign with your compliance, legal and manufacturer requirements before launch.",
  },
  { question: "Can I use Blue Sky Incentives with purchased or shared leads?", answer: null },
  { question: "Can I use incentives for service appointments?", answer: null },
  { question: "Can I use Blue Sky Incentives for delivery-day gifts?", answer: null },
  { question: "Can I use incentives for referral campaigns?", answer: null },
  { question: "Can I use incentives for maintenance-plan renewals?", answer: null },
  { question: "Do I pay for every incentive I distribute?", answer: null },
  { question: "Who handles incentive redemption and fulfillment?", answer: null },
  { question: "Can I automate sales or service follow-up campaigns?", answer: null },
  {
    question: "Are automotive incentive rules different by state or manufacturer?",
    answer:
      "Automotive incentive and marketing rules can vary by state and manufacturer. Review your campaign with your compliance, legal and manufacturer requirements before launch.",
  },
];

export function Automotive() {
  return (
    <>
      <Section
        eyebrow="For Automotive Dealers & Service Teams"
        title="Give Car Shoppers Another Reason to Buy From You."
        subtitle="Use high-value incentives to strengthen your sales and service marketing, stand out from other dealers, and create more opportunities for repeat service visits and referrals."
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
        title="Car Shoppers Compare Every Dealer Before They Ever Walk In."
        subtitle="Online listings, price-comparison tools and competing dealers make it easy for buyers to shop around before they commit. Winning the sale — and the service business — takes more than a good price."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <ClosingNote>
          The problem isn't simply generating more leads. It's getting the shopper to choose your
          dealership, buy from you, and keep coming back for service.
        </ClosingNote>
      </Section>

      <Section
        tone="subtle"
        eyebrow="How Blue Sky Incentives Works"
        title="One Sales or Service Campaign. One Added-Value Incentive. A Stronger Reason to Respond."
      >
        <div className="feature-grid">
          {HOW_IT_WORKS.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section
        id="automotive-video"
        eyebrow="Automotive Video"
        title="See How Dealerships Can Use Blue Sky Incentives"
        subtitle="See how sales and service departments can use incentives around test drives, closings, service appointments and referrals."
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
        eyebrow="Why the Sales Offer Matters"
        title="Same Vehicle. A Stronger Reason to Buy From You."
        subtitle={
          <>
            Every dealer can say &ldquo;We&rsquo;ll give you the best price.&rdquo; Blue Sky
            Incentives gives you another way to make that offer more noticeable and more
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
        eyebrow="The Multiple-Dealer Problem"
        title="When Every Dealer Is Chasing the Same Buyer, Your Offer Matters."
        subtitle="One online inquiry can put the same shopper in front of several dealerships. If price is the only differentiator, you need another way to stand out."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Automotive Conversation"
        subtitle="Different sales, service, appreciation and referral campaigns can use different incentive types and values. Blue Sky Incentives supplies and fulfills the incentives."
      >
        <GalleryPlaceholder count={6} />
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <a href="#automotive-video">
            <Button variant="secondary">Watch the Automotive Video</Button>
          </a>
        </div>
      </Section>

      <Section
        eyebrow="4 Ways to Use Blue Sky Incentives"
        title="Use Incentives Across Every Stage of the Customer Relationship."
        subtitle="Blue Sky Incentives isn't only a sales-generation tool. Dealerships can use incentives to generate leads, close more sales, drive service revenue and create more referral opportunities."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Customer Lifetime Value"
        title="Don't Stop at One Sale. Grow the Relationship."
        subtitle="The first purchase can be the beginning of a long-term relationship built around service visits, upgrades and referrals."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        title="Winning the Sale Once Doesn't Mean They Come Back for Service."
        subtitle="Every sale is a chance to be forgotten once the customer drives off the lot. Give customers more reasons to stay connected with your dealership before their next service visit — or their next purchase."
      >
        <div className="feature-grid">
          {RETENTION_WAYS.map((r) => (
            <FeatureCard key={r.title} {...r} />
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Blue Sky Incentives Tools for Your Dealership"
        title="Promote and Deliver Incentives Through the Marketing You Already Use"
        subtitle="Your membership includes the delivery methods and campaign support to put an incentive in front of the right person at the right moment — sales leads, service reminders, appreciation and referral campaigns."
      >
        <ChecklistTwoColumn
          columns={[
            {
              heading: "Distribution Built In",
              items: [
                "Email incentives to sales and service leads and follow-up sequences from your own business address",
                "SMS/text delivery for fast follow-up after a test drive or service visit",
                "Branded landing page links for quote forms and service-appointment sign-ups",
                "QR codes for showroom signage, service-bay displays and mailers",
                "Printable PDF certificates to hand out at delivery or include with service paperwork",
                "Website banners, sticky bars and pop-ups on your sales and service pages",
                "Zapier and API connections to your dealership CRM and lead sources",
              ],
            },
            {
              heading: "Campaign Support",
              items: [
                {
                  label: "AI Marketing Consultant",
                  description: "sales campaigns, service reminders, and reactivation ideas",
                },
                {
                  label: "AI Social Content Creator",
                  description: "local dealership content with your incentive offers already integrated",
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
        title="Questions Dealerships Ask"
        subtitle="Still have a question about how incentives fit your sales and service marketing?"
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
        title="Give Car Shoppers Another Reason to Buy From You."
        subtitle="Strengthen your sales and service marketing with high-value incentives while keeping pricing, service and trust at the center of the relationship."
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
