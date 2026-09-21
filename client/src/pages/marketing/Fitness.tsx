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
  DisclaimerNote,
  VideoPlaceholder,
  Gallery,
  StackedPoints,
  MediaFrame,
  ChecklistTwoColumn,
  FaqAccordion,
} from "../../components/marketing/IndustryPageKit";
import { Button } from "../../components/ui/Button";
import heroFitnessImage from "../../assets/hero-fitness.jpg";
import fitnessFreeTrialOfferImage from "../../assets/fitness-free-trial-offer.jpg";
import fitnessMultipleStudioProblemImage from "../../assets/fitness-multiple-studio-problem.jpg";
import fitnessMemberLifecycleImage from "../../assets/fitness-member-lifecycle.jpg";
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

const FOUR_WAYS = [
  {
    mark: "1",
    title: "Generate More First Visits",
    description:
      "Move more inquiries and claimed offers into actual completed visits by attaching the incentive to attendance.",
    action: "Complete Your Free PT Session",
    incentive: "Receive a $100 Dining Certificate",
    outcome: "More Completed First Visits",
    gradient: "linear-gradient(160deg, #0a1230 0%, #16306e 100%)",
  },
  {
    mark: "2",
    title: "Win More Members & Training Clients",
    description:
      "Strengthen the perceived value around the larger paid commitment instead of cutting dues or package pricing.",
    action: "Purchase a 1-Year Membership",
    incentive: "Receive a 7-Night Resort Stay Certificate",
    outcome: "A Stronger Paid-Commitment Offer",
    gradient: "linear-gradient(160deg, #062a1f 0%, #0f5c3c 100%)",
  },
  {
    mark: "3",
    title: "Increase Repeat Business & Retention",
    description:
      "Attach incentives to meaningful moments — milestones, anniversaries, renewals, package renewals, reactivation, challenges and appreciation.",
    action: "Renew Your Membership or Package",
    incentive: "Member Appreciation Incentive",
    outcome: "More Active, Engaged Members",
    gradient: "linear-gradient(160deg, #1f0a33 0%, #4c1d6e 100%)",
  },
  {
    mark: "4",
    title: "Generate More Referrals",
    description: "Make it easy and memorable for members who are getting results to introduce the next client.",
    action: "Know Someone Ready to Get in Shape?",
    incentive: "Referral Thank-You",
    outcome: "More Member Introductions",
    gradient: "linear-gradient(160deg, #05202b 0%, #0b5266 100%)",
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
      <ImageHero
        image={heroFitnessImage}
        imageAlt="A personal trainer coaching a client through a workout in a fitness studio"
        eyebrow="For Gyms, Fitness Studios & Personal Trainers"
        title="Get More Fitness Prospects Through the Door — Then Give Them a Reason to Stay."
        subtitle="Use high-value incentives to give prospects a stronger reason to complete their first workout or consultation, commit to a membership or training program, stay engaged, and refer more people."
        actions={
          <>
            <Link to="/contact">
              <Button>Start Risk-Free</Button>
            </Link>
            <Link to="/demo">
              <Button variant="secondary">Watch the Instant Demo</Button>
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
        title="Prospective Members Compare Studios Before They Ever Walk In."
        subtitle="Big-box gyms, boutique studios and home workout apps make it easy for prospects to shop around. Winning new members — and keeping them — takes more than a free trial."
      >
        <StackedPoints items={PROBLEM_POINTS} />
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
        <MediaFrame
          src={fitnessFreeTrialOfferImage}
          alt="A fitness studio's free-trial offer made more compelling with an added incentive"
        />
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
        <MediaFrame
          src={fitnessMultipleStudioProblemImage}
          alt="A prospect comparing several nearby fitness studios that all offer the same free trial"
        />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Member Conversation"
        subtitle="Different campaigns call for different incentive types and values. We supply and fulfill them all."
      >
        <Gallery items={INCENTIVE_GALLERY} />
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
        <div className="feature-grid">
          {FOUR_WAYS.map((w) => (
            <div key={w.title} className="feature-card">
              <div className="feature-card__mark" aria-hidden="true">
                {w.mark}
              </div>
              <h3 className="feature-card__title">{w.title}</h3>
              <p className="feature-card__description">{w.description}</p>
              <div
                style={{
                  marginTop: 20,
                  padding: 18,
                  borderRadius: "var(--radius-md)",
                  background: w.gradient,
                  border: "1px solid transparent",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#e8c874",
                    marginBottom: 8,
                  }}
                >
                  Example
                </div>
                <p style={{ margin: 0, fontWeight: 600, color: "#ffffff" }}>{w.action}</p>
                <p style={{ margin: "4px 0 0", fontWeight: 600, color: "#e8c874" }}>+ {w.incentive}</p>
                <p style={{ margin: "12px 0 0", fontWeight: 700, color: "#ffffff" }}>{w.outcome}</p>
              </div>
            </div>
          ))}
        </div>
        <DisclaimerNote>
          Not selling annual memberships? Swap Stage 2 for your training or coaching package paired with an
          appropriate higher-value incentive.
        </DisclaimerNote>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Member Lifetime Value"
        title="Don't Stop at One Sign-Up. Grow the Relationship."
        subtitle="The first membership can grow into a long-term relationship built on consistent attendance and referrals."
      >
        <MediaFrame
          src={fitnessMemberLifecycleImage}
          alt="From first visit to long-term member, then to referral: first visit or free session, membership or training package, active member or client engagement, milestones and retention, renewal and reactivation, and referral or bring-a-friend"
        />
      </Section>

      <Section
        title="Signing the Member Once Doesn't Mean They Keep Showing Up."
        subtitle="It's easy to be forgotten once the excitement fades. Give members reasons to stay connected before they think about canceling."
      >
        <StackedPoints items={RETENTION_WAYS} />
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
