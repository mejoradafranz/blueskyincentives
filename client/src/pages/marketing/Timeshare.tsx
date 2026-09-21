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
  StackedPoints,
  ChecklistTwoColumn,
  FaqAccordion,
} from "../../components/marketing/IndustryPageKit";
import { Button } from "../../components/ui/Button";
import heroTimeshareImage from "../../assets/hero-timeshare.jpg";

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
    title: "You offered the tour gift — then they no-showed",
    description: "Competing resorts and free-gift tours make it easy for prospects to book elsewhere or skip the appointment.",
  },
  {
    mark: "02",
    title: "They want the lowest price before the presentation",
    description: "Price and package comparisons can start before your presentation ever begins.",
  },
  {
    mark: "03",
    title: "You ran the full presentation — then they didn't buy",
    description: "A completed tour doesn't guarantee a closed sale.",
  },
  {
    mark: "04",
    title: "You can't control competing resorts and vacation-club pricing",
    description: "When every offer looks similar, you need another way to stand out.",
  },
  {
    mark: "05",
    title: "You closed the sale — then they never upgraded or referred",
    description: "Closing one sale doesn't guarantee the next upgrade or owner referral.",
  },
];

const HOW_IT_WORKS = [
  {
    mark: "01",
    title: "Run your existing tour and sales marketing",
    description: "Website leads, OTA and travel-partner promotions, call center outreach, on-site presentations and owner referral campaigns.",
  },
  {
    mark: "02",
    title: "Add a high-value incentive",
    description: "Attach it to a meaningful action such as completing the tour, closing the sale, upgrading a package, or referring a new owner.",
  },
  {
    mark: "03",
    title: "Blue Sky Incentives supplies and fulfills the incentive",
    description:
      "Blue Sky Incentives supplies the incentives and manages the redemption process, and gives you the tools to create and distribute them by email, SMS, landing page links, QR codes, PDFs, banners and pop-ups.",
  },
  {
    mark: "04",
    title: "Give prospects and owners another reason to respond",
    description: "Your resort, packages and experience remain the core value — the incentive just strengthens the offer.",
  },
];

const RETENTION_WAYS = [
  {
    mark: "1",
    title: "Purchase Welcome Gifts",
    description: "Use a high-value incentive as a memorable welcome gift new owners actually redeem.",
  },
  {
    mark: "2",
    title: "Referral Rewards",
    description: "Turn owner referrals into a rewarded, trackable behavior.",
  },
  {
    mark: "3",
    title: "Upgrade Milestones",
    description: "Give owners a reason to move into higher-tier packages.",
  },
  {
    mark: "4",
    title: "Owner Anniversaries",
    description: "Stay in front of owners between usage and renewal conversations.",
  },
  {
    mark: "5",
    title: "Reactivation",
    description: "Reconnect with inactive or unresponsive owners when appropriate.",
  },
];

const FAQS: { question: string; answer: string | null }[] = [
  {
    question: "Can I use an incentive with a tour or presentation?",
    answer:
      "Many resorts attach a high-value incentive such as a $100 Dining Certificate to completing a tour or presentation, with no purchase necessary. Review your exact campaign with your compliance and legal requirements before launch.",
  },
  { question: "Can I use Blue Sky Incentives with purchased or shared leads?", answer: null },
  { question: "Can I use incentives for closing bonuses?", answer: null },
  { question: "Can I use Blue Sky Incentives for upgrade offers?", answer: null },
  { question: "Can I use incentives for owner referral campaigns?", answer: null },
  { question: "Can I use incentives for maintenance-fee renewals?", answer: null },
  { question: "Do I pay for every incentive I distribute?", answer: null },
  { question: "Who handles incentive redemption and fulfillment?", answer: null },
  { question: "Can I automate tour or closing follow-up campaigns?", answer: null },
  {
    question: "Are incentive rules different by state or resort type?",
    answer:
      "Incentive and marketing rules can vary by state and by resort or contract terms. Review your campaign with your compliance and legal requirements before launch.",
  },
];

export function Timeshare() {
  return (
    <>
      <ImageHero
        image={heroTimeshareImage}
        imageAlt="A presenter walking prospective owners through a 3D virtual tour and floor plans in a resort sales office"
        eyebrow="For Timeshare & Vacation Ownership Operators"
        title="Turn More Prospects Into Tours. More Tours Into Owners."
        subtitle="Use high-perceived-value incentives to generate qualified interest, increase completed presentation attendance, strengthen the ownership offer, and activate your existing owner base. Blue Sky Incentives supplies and fulfills the incentive — your sales floor stays focused on the tour."
        actions={
          <>
            <Link to="/contact">
              <Button>Start Risk-Free</Button>
            </Link>
            <Link to="/demo">
              <Button variant="secondary">Watch Demo</Button>
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
        title="Prospects Compare Resorts Before They Ever Sit Down."
        subtitle="Competing resorts, vacation clubs and OTA deals all make it easy for prospects to shop around before they ever tour. Winning new owners — and keeping them — takes more than a free-gift tour."
      >
        <StackedPoints items={PROBLEM_POINTS} />
        <ClosingNote>
          The problem isn't simply generating more tours. It's getting the prospect to sit through
          the presentation, buy today, and stay an engaged owner.
        </ClosingNote>
      </Section>

      <Section
        tone="subtle"
        eyebrow="How Blue Sky Incentives Works"
        title="One Sales Campaign. One Added-Value Incentive. A Stronger Reason to Respond."
      >
        <div className="feature-grid">
          {HOW_IT_WORKS.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section
        id="timeshare-video"
        eyebrow="Timeshare Video"
        title="See How Timeshare & Vacation Ownership Teams Can Use Blue Sky Incentives"
        subtitle="See how sales teams use incentives around tour attendance, closings, upgrades and owner referrals."
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
        eyebrow="Why the Tour Offer Matters"
        title="Same Tour. A Stronger Reason to Show Up and Stay."
        subtitle={
          <>
            Every resort can offer a free gift for touring. An incentive makes that offer harder
            to ignore — and harder to no-show.
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
        eyebrow="The Multiple-Resort Problem"
        title="When Every Resort Is Competing for the Same Prospect, Your Offer Matters."
        subtitle="One inquiry can put your resort in competition with several others in the same market. If every resort offers a similar tour gift, you need another way to stand out."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Incentives"
        title="Use the Right Incentive for the Right Prospect Conversation"
        subtitle="Different tour, closing, upgrade and referral campaigns can use different incentive types and values. Blue Sky Incentives supplies and fulfills the incentives."
      >
        <GalleryPlaceholder count={6} />
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link to="/contact">
            <Button>Start Risk-Free</Button>
          </Link>
          <a href="#timeshare-video">
            <Button variant="secondary">Watch the Timeshare Video</Button>
          </a>
        </div>
      </Section>

      <Section
        eyebrow="4 Ways to Use Blue Sky Incentives"
        title="Use Incentives Across Every Stage of the Owner Relationship."
        subtitle="Blue Sky Incentives isn't only a tour-gift tool. Teams can use incentives to generate tours, close more sales, drive upgrades and create more referral opportunities."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Owner Lifetime Value"
        title="Don't Stop at One Sale. Grow the Relationship."
        subtitle="The first purchase can be the beginning of a long-term relationship built around upgrades, usage and referrals."
      >
        <ImagePlaceholder />
      </Section>

      <Section
        title="Closing the Sale Once Doesn't Mean the Relationship Is Done."
        subtitle="Every sale is a chance to be forgotten once the excitement fades. Give owners more reasons to stay connected with your resort before their next renewal decision — or their next referral."
      >
        <StackedPoints items={RETENTION_WAYS} />
      </Section>

      <Section
        tone="subtle"
        eyebrow="Blue Sky Incentives Tools for Your Resort"
        title="Promote and Deliver Incentives Through the Marketing You Already Use"
        subtitle="Your membership includes the delivery methods and campaign support to put an incentive in front of the right person at the right moment — tour outreach, closing follow-up, upgrade offers and referral campaigns."
      >
        <ChecklistTwoColumn
          columns={[
            {
              heading: "Distribution Built In",
              items: [
                "Email incentives to prospective and current owner lists from your own business address",
                "SMS/text delivery for fast follow-up after a tour or presentation",
                "Branded landing page links for tour bookings and sales forms",
                "QR codes for resort signage, welcome packets and on-site displays",
                "Printable PDF certificates to hand out at check-in or closing",
                "Website banners, sticky bars and pop-ups on your booking pages",
                "Zapier and API connections to your CRM and lead sources",
              ],
            },
            {
              heading: "Campaign Support",
              items: [
                {
                  label: "AI Marketing Consultant",
                  description: "tour, closing and referral campaign ideas",
                },
                {
                  label: "AI Social Content Creator",
                  description: "resort content with your incentive offers already integrated",
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
        title="Hear It From Blue Sky Incentives Clients"
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
        title="Questions Timeshare & Vacation Ownership Teams Ask"
        subtitle="Still have a question about how incentives fit your tour and sales marketing?"
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
        title="Get More Prospects Through the Presentation — Then Give Them a Reason to Buy."
        subtitle="Strengthen your tour and referral marketing with high-value incentives while keeping your resort experience and trust at the center of the relationship."
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
