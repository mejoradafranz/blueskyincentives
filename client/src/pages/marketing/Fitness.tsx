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
      "Blue Sky Incentives supplies the incentives and manages the redemption process, and gives you the tools to create and distribute them by email, SMS, landing page links, QR codes, PDFs, banners and pop-ups.",
  },
  {
    mark: "04",
    title: "Give prospects and members another reason to respond",
    description: "Your coaching, community and results remain the core value. The incentive strengthens the offer around the next action.",
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
      "Many studios attach a high-value incentive such as a $100 Dining Certificate to completing a trial class or studio tour, with no purchase necessary. Review your exact campaign with your compliance and legal requirements before launch.",
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
      "Incentive and marketing rules can vary by state and by membership or contract terms. Review your campaign with your compliance and legal requirements before launch.",
  },
];

export function Fitness() {
  return (
    <>
      <Section
        eyebrow="For Fitness Studios & Gyms"
        title="Give Members Another Reason to Join Your Studio."
        subtitle="Use high-value incentives to strengthen your membership marketing, stand out from other studios, and create more opportunities for class attendance and referrals."
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
        title="Prospective Members Compare Studios Before They Ever Walk In."
        subtitle="Big-box gyms, boutique studios and home workout apps all make it easy for prospects to shop around before they ever sign up. Winning new members — and keeping them — takes more than a free trial."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <ClosingNote>
          The problem isn't simply generating more sign-up leads. It's getting the prospect to
          choose your studio, show up consistently, and stay a member.
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
        subtitle="See how studios can use incentives around sign-ups, class attendance, member appreciation and referrals."
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
            Every studio can say &ldquo;Try us for free.&rdquo; Blue Sky Incentives gives you
            another way to make that offer more noticeable and more compelling.
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
        subtitle="One online search can put your studio in competition with several others in the same neighborhood. If every studio offers the same free trial, you need another way to stand out."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Member Conversation"
        subtitle="Different sign-up, attendance, appreciation and referral campaigns can use different incentive types and values. Blue Sky Incentives supplies and fulfills the incentives."
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
        subtitle="Blue Sky Incentives isn't only a sign-up tool. Studios can use incentives to generate leads, win new members, improve attendance and create more referral opportunities."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Member Lifetime Value"
        title="Don't Stop at One Sign-Up. Grow the Relationship."
        subtitle="The first membership can be the beginning of a long-term relationship built around consistent attendance, upgrades and referrals."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        title="Signing the Member Once Doesn't Mean They Keep Showing Up."
        subtitle="Every sign-up is a chance to be forgotten once the excitement fades. Give members more reasons to stay connected with your studio before their next cancellation risk — or their next referral."
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
        subtitle="Your membership includes the delivery methods and campaign support to put an incentive in front of the right person at the right moment — sign-up outreach, attendance reminders, appreciation and referral campaigns."
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
        subtitle="Strengthen your sign-up and referral marketing with high-value incentives while keeping coaching, community and trust at the center of the relationship."
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
