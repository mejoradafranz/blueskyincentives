import { Section } from "./Section";
import { FeatureCard } from "./FeatureCard";
import {
  SparkleIcon,
  SearchIcon,
  MegaphoneIcon,
  BrowserIcon,
  CertificateIcon,
  PlayIcon,
} from "./CampaignToolIcons";
import aiCampaignImage from "../../assets/incentives/ai-campaign-tools.png";
import "./AICampaignTools.css";

const TOOLS = [
  {
    mark: <SparkleIcon />,
    title: "AI Marketing Consultant",
    description:
      "Get personalized incentive and campaign recommendations based on your business, industry and goals.",
  },
  {
    mark: <SearchIcon />,
    title: "Competitor Analysis",
    description:
      "Identify competitor gaps and receive recommendations for stronger incentive-driven offers.",
  },
  {
    mark: <MegaphoneIcon />,
    title: "Social Campaign Assets",
    description: "Generate branded graphics, campaign concepts and social media copy ready to promote.",
  },
  {
    mark: <BrowserIcon />,
    title: "Landing Pages & Lead Capture",
    description:
      "Create branded pages and links that capture customer details and deliver incentives automatically.",
  },
  {
    mark: <CertificateIcon />,
    title: "Branded Certificates & Print Assets",
    description: "Customize certificates, flyers, posters and brochures for online and offline campaigns.",
  },
  {
    mark: <PlayIcon />,
    title: "Promotional & Redemption Tools",
    description:
      "Support campaigns with promotional videos, secure redemption experiences and related marketing tools.",
  },
];

export function AICampaignTools() {
  return (
    <Section>
      <div className="ai-tools__header">
        <div className="ai-tools__header-text">
          <div className="ai-tools__eyebrow">AI-Powered Campaign Tools</div>
          <h2 className="ai-tools__title">
            Plan, Create and Promote Your Incentive Campaigns in One Place
          </h2>
          <p className="ai-tools__subtitle">
            Use Blue Sky Incentives&rsquo; AI tools to develop the strategy, choose the right
            incentive and create ready-to-launch campaign assets for social media, landing
            pages, email, websites, print and paid advertising.
          </p>
        </div>

        <div className="ai-tools__header-media">
          <img
            src={aiCampaignImage}
            alt="Everything you get to promote the incentives: social campaigns, landing pages, branded certificates, promo videos, a redemption portal, and AI recommendations"
            className="ai-tools__image"
          />
        </div>
      </div>

      <div className="feature-grid">
        {TOOLS.map((tool) => (
          <FeatureCard key={tool.title} {...tool} />
        ))}
      </div>
    </Section>
  );
}
