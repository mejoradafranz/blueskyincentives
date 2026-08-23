export interface IndustryUseCase {
  mark: string;
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  mark: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  useCases: IndustryUseCase[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "insurance-agents",
    mark: "IA",
    navLabel: "Insurance Agents",
    eyebrow: "For Insurance Agents",
    title: "Keep agents motivated between renewals.",
    subtitle: "Reward new policy sales, retention wins, and referrals with a points program agents actually redeem.",
    useCases: [
      { mark: "I", title: "New policy bonuses", description: "Award points automatically tied to new policy sales and cross-sell goals." },
      { mark: "R", title: "Retention & renewals", description: "Recognize agents who keep renewal rates high, not just new business." },
      { mark: "F", title: "Referral rewards", description: "Turn client referrals into a rewarded, trackable behavior." },
    ],
  },
  {
    slug: "real-estate",
    mark: "RE",
    navLabel: "Real Estate",
    eyebrow: "For Real Estate Teams",
    title: "Recognition that keeps agents closing.",
    subtitle: "Reward listings, closings, and client satisfaction across your brokerage.",
    useCases: [
      { mark: "C", title: "Closing bonuses", description: "Award points the moment a deal closes, tied directly to commission tiers." },
      { mark: "L", title: "Listing milestones", description: "Recognize agents for new listings and time-on-market performance." },
      { mark: "R", title: "Client review rewards", description: "Reward agents who earn strong client reviews and referrals." },
    ],
  },
  {
    slug: "travel-agencies",
    mark: "TR",
    navLabel: "Travel Agencies",
    eyebrow: "For Travel Agencies",
    title: "Reward the agents booking your best trips.",
    subtitle: "Recognize top bookers, package upsells, and repeat client rebookings.",
    useCases: [
      { mark: "B", title: "Booking targets", description: "Set monthly or seasonal booking goals tied directly to points." },
      { mark: "U", title: "Package upsells", description: "Reward agents for upgrading clients into premium packages and add-ons." },
      { mark: "L", title: "Repeat client loyalty", description: "Recognize agents who turn one-time travelers into repeat clients." },
    ],
  },
  {
    slug: "automotive",
    mark: "AU",
    navLabel: "Automotive",
    eyebrow: "For Automotive Teams",
    title: "Motivate sales and service teams alike.",
    subtitle: "Run one program across sales, finance, and service departments.",
    useCases: [
      { mark: "S", title: "Sales targets", description: "Award points for unit sales, financing attach rates, and monthly goals." },
      { mark: "U", title: "Service upsells", description: "Recognize service advisors for maintenance plan and add-on sales." },
      { mark: "C", title: "Customer satisfaction", description: "Tie points to CSI scores so every department is rewarded for the same outcome." },
    ],
  },
  {
    slug: "marketing-agencies",
    mark: "MA",
    navLabel: "Marketing Agencies",
    eyebrow: "For Marketing Agencies",
    title: "Recognize the work that keeps clients happy.",
    subtitle: "Reward new business wins, campaign performance, and client retention.",
    useCases: [
      { mark: "N", title: "New client wins", description: "Award points when a pitch lands or a proposal closes." },
      { mark: "P", title: "Campaign performance", description: "Recognize teams that hit or beat client campaign targets." },
      { mark: "R", title: "Client retention", description: "Reward account teams for renewals and long-term client relationships." },
    ],
  },
  {
    slug: "tax-accountants",
    mark: "TX",
    navLabel: "Tax Accountants",
    eyebrow: "For Tax & Accounting Firms",
    title: "Recognition that survives busy season.",
    subtitle: "Reward accuracy, client retention, and the extra hours busy season demands.",
    useCases: [
      { mark: "B", title: "Busy season recognition", description: "Award points for returns completed and deadlines hit during peak season." },
      { mark: "R", title: "Client retention", description: "Recognize staff who keep clients coming back year after year." },
      { mark: "F", title: "Referral rewards", description: "Reward the referrals that bring in new clients." },
    ],
  },
  {
    slug: "dentistry",
    mark: "D",
    navLabel: "Dentistry",
    eyebrow: "For Dental Practices",
    title: "Recognize the team behind every patient visit.",
    subtitle: "Reward front-desk, hygiene, and clinical staff for patient satisfaction and practice growth.",
    useCases: [
      { mark: "P", title: "Patient satisfaction", description: "Tie points to patient review scores and satisfaction surveys." },
      { mark: "T", title: "Treatment plan acceptance", description: "Recognize staff who help patients say yes to recommended care." },
      { mark: "M", title: "Team milestones", description: "Celebrate tenure, certifications, and practice growth together." },
    ],
  },
  {
    slug: "fitness",
    mark: "F",
    navLabel: "Fitness",
    eyebrow: "For Fitness Studios & Gyms",
    title: "Keep your trainers and staff motivated.",
    subtitle: "Reward member retention, class attendance, and referrals.",
    useCases: [
      { mark: "R", title: "Member retention", description: "Award points to trainers and staff for keeping members engaged and renewing." },
      { mark: "C", title: "Class attendance goals", description: "Recognize instructors for hitting class fill-rate and attendance targets." },
      { mark: "F", title: "Referral rewards", description: "Reward staff and members alike for bringing in new sign-ups." },
    ],
  },
];

export function getIndustryBySlug(slug: string | undefined): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
