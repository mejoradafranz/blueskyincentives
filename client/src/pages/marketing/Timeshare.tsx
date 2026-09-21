import { Link } from "react-router-dom";
import { ImageHero } from "../../components/marketing/ImageHero";
import { Section } from "../../components/marketing/Section";
import { CheckIcon } from "../../components/marketing/CheckIcon";
import { UserIcon, CalendarIcon, PresentationIcon } from "../../components/marketing/JourneyIcons";
import { DiamondIcon } from "../../components/marketing/DiamondIcon";
import { TrendUpIcon } from "../../components/marketing/TrendUpIcon";
import { MegaphoneIcon } from "../../components/marketing/CampaignToolIcons";
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
  MediaFrame,
  StackedPoints,
  ChecklistTwoColumn,
  FaqAccordion,
} from "../../components/marketing/IndustryPageKit";
import { Button } from "../../components/ui/Button";
import heroTimeshareImage from "../../assets/hero-timeshare.jpg";
import manifestNameImage from "../../assets/timeshare-manifest-name.jpg";
import householdChairImage from "../../assets/timeshare-household-chair.jpg";

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

const JOURNEY_STAGES = [
  {
    title: "Qualified Prospect",
    description: "Household responds to the promotion.",
    icon: UserIcon,
  },
  {
    title: "Scheduled Tour",
    description: "A date and time is on the board.",
    icon: CalendarIcon,
  },
  {
    title: "Attended Presentation",
    description: "The household is in the chair.",
    badge: "Revenue Moment",
    icon: PresentationIcon,
  },
  {
    title: "New Owner",
    description: "The ownership decision is made.",
    icon: DiamondIcon,
  },
  {
    title: "Upgrade / Referral",
    description: "The owner base produces again.",
    icon: TrendUpIcon,
  },
];

const INCENTIVE_TOUCHPOINTS = [
  "Incentive on response — a reason to raise a hand and book a date.",
  "Incentive on attendance — a reason to keep the appointment.",
  "Incentive on the ownership offer — added value instead of an automatic price cut.",
  "Incentive on the owner base — appreciation, upgrades and referrals.",
];

const FOUR_WAYS_OPERATORS = [
  {
    mark: "1",
    title: "Generate More Qualified Tour Prospects",
    description: "Give interested households another reason to respond and schedule the tour.",
    detail:
      "Add an incentive line to the marketing already running — mini-vac offers, OPC desks, digital response campaigns and outbound scheduling calls.",
    icon: MegaphoneIcon,
  },
  {
    mark: "2",
    title: "Increase Presentation Show Rates",
    description: "Attach a meaningful incentive to completing the presentation.",
    detail:
      "Confirmation calls, reminder texts and pre-arrival emails carry something the household wants to collect at the end of the presentation.",
    icon: CalendarIcon,
  },
  {
    mark: "3",
    title: "Convert More Attendees Into Owners",
    description:
      "Use higher-perceived-value added value to strengthen the ownership offer without automatically discounting the core product.",
    detail: "The closer gains a value lever that is not a price concession, keeping the conversation on the ownership product itself.",
    icon: DiamondIcon,
  },
  {
    mark: "4",
    title: "Drive Owner Upgrades & Referrals",
    description: "Use owner appreciation, upgrade, reactivation and referral campaigns.",
    detail: "Owner events, points promotions, additional-product offers and referral programs get a reward the owner actually values.",
    icon: TrendUpIcon,
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
        eyebrow="Where the Revenue Leaks"
        title="More Leads Don't Matter If the Tour Never Happens."
        subtitle="Marketing is measured in names. The business is paid on completed presentations and closed ownership. Between those two numbers sit four separate places where money quietly disappears every single day."
      >
        <StackedPoints items={PROBLEM_POINTS} />
        <ClosingNote>
          The problem isn't simply generating more tours. It's getting the prospect to sit through
          the presentation, buy today, and stay an engaged owner.
        </ClosingNote>
      </Section>

      <Section
        eyebrow="The Vacation Ownership Journey"
        title="Optimize the Journey From Lead → Show → Sale."
        subtitle="The economics of this business are not one conversion. They are five. An incentive can be introduced at any point where a household needs one more reason to take the next step."
      >
        <div
          style={{
            background: "linear-gradient(160deg, #0a1230 0%, #16306e 100%)",
            borderRadius: "var(--radius-lg)",
            padding: "48px 32px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
            }}
          >
            {JOURNEY_STAGES.map((stage, i) => (
              <div
                key={stage.title}
                style={{
                  position: "relative",
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.22)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px 20px",
                  textAlign: "center",
                  boxShadow: "0 24px 48px rgba(0, 0, 0, 0.35)",
                  transform: i % 2 === 1 ? "translateY(-12px)" : "none",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "rgba(232, 200, 116, 0.14)",
                    color: "#e8c874",
                    marginBottom: 16,
                  }}
                >
                  <stage.icon />
                </div>
                {stage.badge && (
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#0a1230",
                      background: "#e8c874",
                      borderRadius: 999,
                      padding: "4px 10px",
                      marginBottom: 12,
                    }}
                  >
                    {stage.badge}
                  </div>
                )}
                <h3 style={{ margin: "0 0 8px", fontSize: "1.05rem", color: "#ffffff" }}>{stage.title}</h3>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: 1.5 }}>
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          <ul
            style={{
              listStyle: "none",
              margin: "48px 0 0",
              padding: 0,
              display: "grid",
              gap: 14,
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {INCENTIVE_TOUCHPOINTS.map((point) => (
              <li
                key={point}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.14)",
                    color: "#e8c874",
                    marginTop: 1,
                  }}
                >
                  <CheckIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 40 }}>
            <Link to="/contact">
              <Button>Start Risk-Free</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary">Speak With an Incentive Strategist</Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="The Show-Rate Problem"
        title="Your Sales Team Can't Close an Empty Chair."
        subtitle="A booked tour and an attended presentation are not the same asset. One is a line on a manifest. The other is the only version of the appointment your closers can actually work."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
          }}
        >
          <div>
            <MediaFrame
              src={manifestNameImage}
              alt="An empty executive office chair at a desk — the appointment on the manifest with no one in it"
            />
            <h3 style={{ margin: "20px 0 8px", fontSize: "1.1rem", textAlign: "center" }}>
              A Name on the Manifest
            </h3>
            <p
              style={{
                margin: 0,
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              The media spend is gone, the gift desk is staffed and a presenter is blocked out.
              The household simply had nothing at stake in keeping the appointment.
            </p>
          </div>
          <div>
            <MediaFrame
              src={householdChairImage}
              alt="A presenter walking a household through the presentation at their table"
            />
            <h3 style={{ margin: "20px 0 8px", fontSize: "1.1rem", textAlign: "center" }}>
              A Household in the Chair
            </h3>
            <p
              style={{
                margin: 0,
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              Now the presentation can do its job. Giving the scheduled household something
              meaningful tied to completing the presentation gives them a concrete reason to arrive.
            </p>
          </div>
        </div>
        <ClosingNote>
          You are not buying a better lead. You are protecting the tour you already paid for —
          by giving the scheduled household a second reason to walk through the door.
        </ClosingNote>
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
        eyebrow="Four Ways Operators Use CMI"
        title="Four Places an Incentive Changes the Number."
      >
        <div
          style={{
            background: "linear-gradient(160deg, #0a1230 0%, #16306e 100%)",
            borderRadius: "var(--radius-lg)",
            padding: "48px 32px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {FOUR_WAYS_OPERATORS.map((w, i) => (
              <div
                key={w.title}
                style={{
                  position: "relative",
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.22)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 24px",
                  boxShadow: "0 24px 48px rgba(0, 0, 0, 0.35)",
                  transform: i % 2 === 1 ? "translateY(-12px)" : "none",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "rgba(232, 200, 116, 0.14)",
                    color: "#e8c874",
                    marginBottom: 16,
                  }}
                >
                  <w.icon />
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#e8c874",
                    marginBottom: 8,
                  }}
                >
                  {w.mark}
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: "1.1rem", color: "#ffffff" }}>{w.title}</h3>
                <p style={{ margin: "0 0 14px", fontSize: "0.92rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.55 }}>
                  {w.description}
                </p>
                <p style={{ margin: 0, fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.55 }}>
                  {w.detail}
                </p>
              </div>
            ))}
          </div>
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
