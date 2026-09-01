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
    title: "You offered the new-patient special — then they booked elsewhere",
    description: "Competing new-patient offers make it easy for prospects to shop around before they call.",
  },
  {
    mark: "02",
    title: "They want the lowest cost before the relationship",
    description: "Insurance and price-shopping can start the conversation before your care and experience ever come up.",
  },
  {
    mark: "03",
    title: "You completed the exam — then they didn't schedule treatment",
    description: "A consultation doesn't guarantee an accepted treatment plan.",
  },
  {
    mark: "04",
    title: "You can't control insurance coverage or reimbursement rates",
    description: "When coverage looks similar everywhere, you need another way to stand out.",
  },
  {
    mark: "05",
    title: "You treated the patient — then they skipped their next recall visit",
    description: "One completed treatment doesn't guarantee the next cleaning or checkup.",
  },
];

const HOW_IT_WORKS = [
  {
    mark: "01",
    title: "Run your existing practice marketing",
    description: "Website contact forms, Google and social ads, CRM email and SMS, community events and referral campaigns.",
  },
  {
    mark: "02",
    title: "Add a high-value incentive",
    description: "Attach it to a meaningful action such as booking a new-patient exam, accepting a treatment plan, or completing a recall visit.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "Blue Sky Incentives supplies the incentives and manages the redemption process, and gives you the tools to create and distribute them by email, SMS, landing page links, QR codes, PDFs, banners and pop-ups.",
  },
  {
    mark: "04",
    title: "Give patients another reason to respond",
    description: "Your care, expertise and trust remain the core value. The incentive strengthens the offer around the next action.",
  },
];

const RETENTION_WAYS = [
  {
    mark: "1",
    title: "New-Patient Welcome Gifts",
    description: "Use a high-value incentive as a memorable welcome gift new patients actually redeem.",
  },
  {
    mark: "2",
    title: "Referral Rewards",
    description: "Turn patient referrals into a rewarded, trackable behavior.",
  },
  {
    mark: "3",
    title: "Recall Appointment Follow-Up",
    description: "Give patients a reason to book their next cleaning or checkup.",
  },
  {
    mark: "4",
    title: "Treatment Plan Acceptance",
    description: "Encourage patients to move forward with recommended care.",
  },
  {
    mark: "5",
    title: "Reactivation",
    description: "Reconnect with former or inactive patients when appropriate.",
  },
];

const FAQS: { question: string; answer: string | null }[] = [
  {
    question: "Can I use an incentive with a free new-patient exam?",
    answer:
      "Many practices attach a high-value incentive such as a $100 Dining Certificate to completing a new-patient exam, with no purchase necessary. Review your exact campaign with your compliance, legal and professional licensing requirements before launch.",
  },
  { question: "Can I use Blue Sky Incentives with purchased or shared leads?", answer: null },
  { question: "Can I use incentives for treatment plan acceptance?", answer: null },
  { question: "Can I use Blue Sky Incentives for patient appreciation?", answer: null },
  { question: "Can I use incentives for referral campaigns?", answer: null },
  { question: "Can I use incentives for recall appointments?", answer: null },
  { question: "Do I pay for every incentive I distribute?", answer: null },
  { question: "Who handles incentive redemption and fulfillment?", answer: null },
  { question: "Can I automate new-patient or recall follow-up campaigns?", answer: null },
  {
    question: "Are incentive rules different by state or dental board?",
    answer:
      "Incentive and marketing rules can vary by state and by professional licensing board requirements. Review your campaign with your compliance and legal requirements before launch.",
  },
];

export function Dentistry() {
  return (
    <>
      <Section
        eyebrow="For Dental Practices"
        title="Give Patients Another Reason to Choose Your Practice."
        subtitle="Use high-value incentives to strengthen your new-patient marketing, stand out from other practices, and create more opportunities for treatment acceptance and referrals."
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
        title="Patients Compare Practices Before They Ever Call."
        subtitle="Online reviews, insurance networks and competing practices make it easy for patients to shop around before they book. Winning new patients — and keeping them — takes more than a good location."
      >
        <div className="feature-grid">
          {PROBLEM_POINTS.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <ClosingNote>
          The problem isn't simply generating more new-patient leads. It's getting the patient to
          choose your practice, accept treatment, and keep coming back.
        </ClosingNote>
      </Section>

      <Section
        tone="subtle"
        eyebrow="How Blue Sky Incentives Works"
        title="One New-Patient Campaign. One Added-Value Incentive. A Stronger Reason to Respond."
      >
        <div className="feature-grid">
          {HOW_IT_WORKS.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section
        id="dental-practice-video"
        eyebrow="Dental Practice Video"
        title="See How Dental Practices Can Use Blue Sky Incentives"
        subtitle="See how practices can use incentives around new-patient exams, treatment acceptance, recall visits and referrals."
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
        eyebrow="Why the New-Patient Offer Matters"
        title="Same Exam. A Stronger Reason to Choose Your Practice."
        subtitle={
          <>
            Every practice can say &ldquo;We&rsquo;ll take great care of you.&rdquo; Blue Sky
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
        eyebrow="The Multiple-Practice Problem"
        title="When Every Practice Is Competing for the Same Patient, Your Offer Matters."
        subtitle="One online search can put your practice in competition with several others in the same network or neighborhood. If every practice sounds the same, you need another way to stand out."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Patient Conversation"
        subtitle="Different new-patient, treatment, appreciation and referral campaigns can use different incentive types and values. Blue Sky Incentives supplies and fulfills the incentives."
      >
        <GalleryPlaceholder count={6} />
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <a href="#dental-practice-video">
            <Button variant="secondary">Watch the Dental Practice Video</Button>
          </a>
        </div>
      </Section>

      <Section
        eyebrow="4 Ways to Use Blue Sky Incentives"
        title="Use Incentives Across Every Stage of the Patient Relationship."
        subtitle="Blue Sky Incentives isn't only a new-patient tool. Practices can use incentives to generate leads, increase treatment acceptance, improve recall rates and create more referral opportunities."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Patient Lifetime Value"
        title="Don't Stop at One Visit. Grow the Relationship."
        subtitle="The first appointment can be the beginning of a long-term relationship built around regular checkups, accepted treatment and referrals."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        title="Winning the New Patient Once Doesn't Mean They Return for Their Next Cleaning."
        subtitle="Every visit is a chance to be forgotten once the appointment ends. Give patients more reasons to stay connected with your practice before their next recall — or their next referral."
      >
        <div className="feature-grid">
          {RETENTION_WAYS.map((r) => (
            <FeatureCard key={r.title} {...r} />
          ))}
        </div>
      </Section>

      <Section
        tone="subtle"
        eyebrow="Blue Sky Incentives Tools for Your Practice"
        title="Promote and Deliver Incentives Through the Marketing You Already Use"
        subtitle="Your membership includes the delivery methods and campaign support to put an incentive in front of the right person at the right moment — new-patient outreach, recall reminders, appreciation and referral campaigns."
      >
        <ChecklistTwoColumn
          columns={[
            {
              heading: "Distribution Built In",
              items: [
                "Email incentives to prospective and current patient lists from your own business address",
                "SMS/text delivery for fast follow-up after a new-patient inquiry",
                "Branded landing page links for new-patient forms and appointment sign-ups",
                "QR codes for office signage, welcome packets and community events",
                "Printable PDF certificates to hand out at check-in or include with treatment plans",
                "Website banners, sticky bars and pop-ups on your appointment pages",
                "Zapier and API connections to your practice management system and lead sources",
              ],
            },
            {
              heading: "Campaign Support",
              items: [
                {
                  label: "AI Marketing Consultant",
                  description: "new-patient campaigns, recall reminders, and reactivation ideas",
                },
                {
                  label: "AI Social Content Creator",
                  description: "local practice content with your incentive offers already integrated",
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
        title="Questions Dental Practices Ask"
        subtitle="Still have a question about how incentives fit your new-patient and referral marketing?"
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
        title="Give Patients Another Reason to Choose Your Practice."
        subtitle="Strengthen your new-patient and referral marketing with high-value incentives while keeping care, service and trust at the center of the relationship."
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
