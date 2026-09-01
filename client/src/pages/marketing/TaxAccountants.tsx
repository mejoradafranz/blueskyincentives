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
    title: "You quoted the engagement — then they went with DIY software",
    description: "Low-cost online tax tools make it easy for prospects to skip hiring a preparer altogether.",
  },
  {
    mark: "02",
    title: "They want the lowest fee before the relationship",
    description: "Fee-shopping can start the conversation before your expertise ever comes up.",
  },
  {
    mark: "03",
    title: "You handled the consultation — then they went quiet",
    description: "A free consultation doesn't guarantee a signed engagement letter.",
  },
  {
    mark: "04",
    title: "You can't control the complexity of the tax code",
    description: "When every firm files the same forms, you need another way to stand out.",
  },
  {
    mark: "05",
    title: "You filed their return — then they went elsewhere next year",
    description: "Filing one return doesn't guarantee next year's engagement or a referral.",
  },
];

const HOW_IT_WORKS = [
  {
    mark: "01",
    title: "Run your existing firm marketing",
    description: "Website contact forms, Google and social ads, CRM email and SMS, community events and referral campaigns.",
  },
  {
    mark: "02",
    title: "Add a high-value incentive",
    description: "Attach it to a meaningful action such as scheduling a consultation, completing a return, or signing an engagement letter.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "Blue Sky Incentives supplies the incentives and manages the redemption process, and gives you the tools to create and distribute them by email, SMS, landing page links, QR codes, PDFs, banners and pop-ups.",
  },
  {
    mark: "04",
    title: "Give clients another reason to respond",
    description: "Your expertise, accuracy and trust remain the core value. The incentive strengthens the offer around the next action.",
  },
];

const RETENTION_WAYS = [
  {
    mark: "1",
    title: "Filing-Day Thank-You Gifts",
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
    description: "Give clients a reason to stay engaged with planning and advisory services year-round.",
  },
  {
    mark: "4",
    title: "Client Anniversaries",
    description: "Stay in front of clients between tax seasons.",
  },
  {
    mark: "5",
    title: "Reactivation",
    description: "Reconnect with former or inactive clients when appropriate.",
  },
];

const FAQS: { question: string; answer: string | null }[] = [
  {
    question: "Can I use an incentive with a free consultation?",
    answer:
      "Many firms attach a high-value incentive such as a $100 Dining Certificate to completing a consultation or document drop-off, with no purchase necessary. Review your exact campaign with your compliance and licensing requirements before launch.",
  },
  { question: "Can I use Blue Sky Incentives with purchased or shared leads?", answer: null },
  { question: "Can I use incentives during busy season?", answer: null },
  { question: "Can I use Blue Sky Incentives for client appreciation?", answer: null },
  { question: "Can I use incentives for referral campaigns?", answer: null },
  { question: "Can I use incentives for off-season advisory outreach?", answer: null },
  { question: "Do I pay for every incentive I distribute?", answer: null },
  { question: "Who handles incentive redemption and fulfillment?", answer: null },
  { question: "Can I automate consultation or follow-up campaigns?", answer: null },
  {
    question: "Are incentive rules different by state or licensing board?",
    answer:
      "Incentive and marketing rules can vary by state and by professional licensing requirements. Review your campaign with your compliance and legal requirements before launch.",
  },
];

export function TaxAccountants() {
  return (
    <>
      <Section
        eyebrow="For Tax & Accounting Firms"
        title="Give Clients Another Reason to File With You."
        subtitle="Use high-value incentives to strengthen your tax season marketing, stand out from other firms, and create more opportunities for referrals and year-round client retention."
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
        title="Clients Compare Firms Before Tax Season Even Starts."
        subtitle="DIY software, online tax services and competing firms all make it easy for clients to shop around before they ever call you. Winning new clients — and keeping them — takes more than being available during busy season."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <ClosingNote>
          The problem isn't simply generating more leads. It's getting the client to choose your
          firm, trust your team, and come back next season.
        </ClosingNote>
      </Section>

      <Section
        tone="subtle"
        eyebrow="How Blue Sky Incentives Works"
        title="One Tax Season Campaign. One Added-Value Incentive. A Stronger Reason to Respond."
      >
        <div className="feature-grid">
          {HOW_IT_WORKS.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section
        id="tax-accounting-video"
        eyebrow="Tax & Accounting Video"
        title="See How Tax & Accounting Firms Can Use Blue Sky Incentives"
        subtitle="See how firms can use incentives around consultations, busy season, client appreciation and referrals."
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
        eyebrow="Why the Engagement Offer Matters"
        title="Same Return. A Stronger Reason to File With You."
        subtitle={
          <>
            Every firm can say &ldquo;We&rsquo;ll maximize your refund.&rdquo; Blue Sky Incentives
            gives you another way to make that offer more noticeable and more compelling.
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
        eyebrow="The Multiple-Firm Problem"
        title="When Every Firm Is Competing for the Same Client, Your Offer Matters."
        subtitle="One inquiry can put you in competition with other firms, national chains and DIY software. If price is the only differentiator, you need another way to stand out."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Client Conversation"
        subtitle="Different consultation, filing, appreciation and referral campaigns can use different incentive types and values. Blue Sky Incentives supplies and fulfills the incentives."
      >
        <GalleryPlaceholder count={6} />
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <a href="#tax-accounting-video">
            <Button variant="secondary">Watch the Tax & Accounting Video</Button>
          </a>
        </div>
      </Section>

      <Section
        eyebrow="4 Ways to Use Blue Sky Incentives"
        title="Use Incentives Across Every Stage of the Client Relationship."
        subtitle="Blue Sky Incentives isn't only a busy-season tool. Firms can use incentives to generate leads, win new clients, improve retention and create more referral opportunities."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Client Lifetime Value"
        title="Don't Stop at One Return. Grow the Relationship."
        subtitle="The first filing can be the beginning of a long-term relationship built around year-round advisory work, referrals and staying top of mind."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        title="Winning the Client Once Doesn't Mean They Return Next Season."
        subtitle="Every filing is a chance to be forgotten once the deadline passes. Give clients more reasons to stay connected with your firm before next tax season — or their next referral."
      >
        <div className="feature-grid">
          {RETENTION_WAYS.map((r) => (
            <FeatureCard key={r.title} {...r} />
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Blue Sky Incentives Tools for Your Firm"
        title="Promote and Deliver Incentives Through the Marketing You Already Use"
        subtitle="Your membership includes the delivery methods and campaign support to put an incentive in front of the right person at the right moment — consultation requests, busy season follow-up, appreciation and referral campaigns."
      >
        <ChecklistTwoColumn
          columns={[
            {
              heading: "Distribution Built In",
              items: [
                "Email incentives to prospective and current client lists from your own business address",
                "SMS/text delivery for fast follow-up after a consultation request",
                "Branded landing page links for consultation and document-drop-off sign-ups",
                "QR codes for office signage, mailers and community events",
                "Printable PDF certificates to hand out in the office or include with completed returns",
                "Website banners, sticky bars and pop-ups on your contact pages",
                "Zapier and API connections to your firm's CRM and lead sources",
              ],
            },
            {
              heading: "Campaign Support",
              items: [
                {
                  label: "AI Marketing Consultant",
                  description: "busy season campaigns, off-season outreach, and reactivation ideas",
                },
                {
                  label: "AI Social Content Creator",
                  description: "local firm content with your incentive offers already integrated",
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
        title="Questions Tax & Accounting Firms Ask"
        subtitle="Still have a question about how incentives fit your busy season and referral marketing?"
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
        title="Give Clients Another Reason to File With You."
        subtitle="Strengthen your busy season and referral marketing with high-value incentives while keeping accuracy, service and trust at the center of the relationship."
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
