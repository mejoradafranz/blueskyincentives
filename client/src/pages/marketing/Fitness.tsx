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
    title: "You offered the free trial — then they joined another gym",
    description: "Competing trial offers make it easy for prospects to shop around before they commit.",
  },
  {
    mark: "02",
    title: "They want the lowest price before the relationship",
    description: "Membership-fee shopping can start the conversation before your coaching and community ever come up.",
  },
  {
    mark: "03",
    title: "You handled the tour — then they never signed up",
    description: "A studio tour doesn't guarantee a signed membership.",
  },
  {
    mark: "04",
    title: "You can't control cancellations from other commitments",
    description: "When every studio looks similar, you need another way to stand out.",
  },
  {
    mark: "05",
    title: "You signed the member — then they stopped showing up",
    description: "Signing a membership doesn't guarantee ongoing attendance or retention.",
  },
];

const HOW_IT_WORKS = [
  {
    mark: "01",
    title: "Run your existing studio marketing",
    description: "Website sign-up forms, Google and social ads, CRM email and SMS, community events and referral campaigns.",
  },
  {
    mark: "02",
    title: "Add a high-value incentive",
    description: "Attach it to a meaningful action such as booking a tour, signing a membership, or hitting a class-attendance milestone.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "We supply the incentives, manage redemption, and give you tools to distribute them by email, SMS, QR code, landing page and more.",
  },
  {
    mark: "04",
    title: "Give prospects and members another reason to respond",
    description: "Your coaching and community remain the core value — the incentive just strengthens the offer.",
  },
];

const RETENTION_WAYS = [
  {
    mark: "1",
    title: "Sign-Up Welcome Gifts",
    description: "Use a high-value incentive as a memorable welcome gift new members actually redeem.",
  },
  {
    mark: "2",
    title: "Referral Rewards",
    description: "Turn member referrals into a rewarded, trackable behavior.",
  },
  {
    mark: "3",
    title: "Class Attendance Milestones",
    description: "Give members a reason to keep showing up and hit attendance goals.",
  },
  {
    mark: "4",
    title: "Member Anniversaries",
    description: "Stay in front of members between renewal conversations.",
  },
  {
    mark: "5",
    title: "Reactivation",
    description: "Reconnect with former or inactive members when appropriate.",
  },
];

const FAQS: { question: string; answer: string | null }[] = [
  {
    question: "Can I use an incentive with a free trial class or tour?",
    answer:
      "Yes — many studios attach a $100 Dining Certificate to a completed trial class or tour, no purchase necessary. Confirm your campaign with compliance and legal first.",
  },
  { question: "Can I use Blue Sky Incentives with purchased or shared leads?", answer: null },
  { question: "Can I use incentives for class attendance goals?", answer: null },
  { question: "Can I use Blue Sky Incentives for member appreciation?", answer: null },
  { question: "Can I use incentives for referral campaigns?", answer: null },
  { question: "Can I use incentives for membership renewals?", answer: null },
  { question: "Do I pay for every incentive I distribute?", answer: null },
  { question: "Who handles incentive redemption and fulfillment?", answer: null },
  { question: "Can I automate sign-up or attendance follow-up campaigns?", answer: null },
  {
    question: "Are incentive rules different by state or membership type?",
    answer:
      "Yes. Rules can vary by state and membership terms — review your campaign with compliance and legal before launch.",
  },
];

export function Fitness() {
  return (
    <>
      <Section
        eyebrow="For Fitness Studios & Gyms"
        title="Give Members Another Reason to Join Your Studio."
        subtitle="High-value incentives that make your membership marketing stand out and win more class attendance and referrals."
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
          An established incentive provider with more than two decades fulfilling promotional
          incentives for businesses.
        </ClosingNote>
      </Section>

      <Section
        eyebrow="The Real Problem"
        title="Prospective Members Compare Studios Before They Ever Walk In."
        subtitle="Big-box gyms, boutique studios and home workout apps make it easy for prospects to shop around. Winning new members — and keeping them — takes more than a free trial."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <ClosingNote>
          The problem isn't generating more leads. It's getting the prospect to choose your
          studio — and stay a member.
        </ClosingNote>
      </Section>

      <Section
        tone="subtle"
        eyebrow="How Blue Sky Incentives Works"
        title="One Membership Campaign. One Added-Value Incentive. A Stronger Reason to Respond."
      >
        <div className="feature-grid">
          {HOW_IT_WORKS.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section
        id="fitness-studio-video"
        eyebrow="Fitness Studio Video"
        title="See How Fitness Studios Can Use Blue Sky Incentives"
        subtitle="See how studios use incentives for sign-ups, class attendance and referrals."
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
        eyebrow="Why the Membership Offer Matters"
        title="Same Studio. A Stronger Reason to Join Today."
        subtitle={
          <>
            Every studio can say &ldquo;Try us for free.&rdquo; An incentive makes that offer
            harder to ignore.
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
        eyebrow="The Multiple-Studio Problem"
        title="When Every Studio Is Competing for the Same Prospect, Your Offer Matters."
        subtitle="One online search can put your studio in competition with several others nearby. If every studio offers the same free trial, you need another way to stand out."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Member Conversation"
        subtitle="Different campaigns call for different incentive types and values. We supply and fulfill them all."
      >
        <GalleryPlaceholder count={6} />
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <a href="#fitness-studio-video">
            <Button variant="secondary">Watch the Fitness Studio Video</Button>
          </a>
        </div>
      </Section>

      <Section
        eyebrow="4 Ways to Use Blue Sky Incentives"
        title="Use Incentives Across Every Stage of the Member Relationship."
        subtitle="Use incentives to generate leads, win new members, improve attendance and create referrals — not just sign people up."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Member Lifetime Value"
        title="Don't Stop at One Sign-Up. Grow the Relationship."
        subtitle="The first membership can grow into a long-term relationship built on consistent attendance and referrals."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        title="Signing the Member Once Doesn't Mean They Keep Showing Up."
        subtitle="It's easy to be forgotten once the excitement fades. Give members reasons to stay connected before they think about canceling."
      >
        <div className="feature-grid">
          {RETENTION_WAYS.map((r) => (
            <FeatureCard key={r.title} {...r} />
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Blue Sky Incentives Tools for Your Studio"
        title="Promote and Deliver Incentives Through the Marketing You Already Use"
        subtitle="Your membership includes everything you need to put an incentive in front of the right person at the right moment."
      >
        <ChecklistTwoColumn
          columns={[
            {
              heading: "Distribution Built In",
              items: [
                "Email incentives to prospective and current member lists from your own business address",
                "SMS/text delivery for fast follow-up after a trial class or tour",
                "Branded landing page links for trial sign-ups and membership forms",
                "QR codes for studio signage, class schedules and community events",
                "Printable PDF certificates to hand out at check-in or include with welcome packets",
                "Website banners, sticky bars and pop-ups on your sign-up pages",
                "Zapier and API connections to your studio management system and lead sources",
              ],
            },
            {
              heading: "Campaign Support",
              items: [
                {
                  label: "AI Marketing Consultant",
                  description: "sign-up campaigns, attendance reminders, and reactivation ideas",
                },
                {
                  label: "AI Social Content Creator",
                  description: "local studio content with your incentive offers already integrated",
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
        title="Questions Fitness Studios Ask"
        subtitle="Still have a question about how incentives fit your sign-up and referral marketing?"
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
        title="Give Members Another Reason to Join Your Studio."
        subtitle="Strengthen your sign-up marketing with high-value incentives — without losing the trust at the center of the relationship."
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
