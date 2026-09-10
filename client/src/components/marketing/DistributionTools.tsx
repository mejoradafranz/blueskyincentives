import { Section } from "./Section";
import { FeatureCard } from "./FeatureCard";
import {
  MailIcon,
  DocumentIcon,
  ChatIcon,
  QrCodeIcon,
  LinkIcon,
  PopUpIcon,
  BannerIcon,
  StickyBarIcon,
  AppGridIcon,
  ZapIcon,
  CodeIcon,
} from "./DistributionIcons";
import "./DistributionTools.css";

const DIRECT_DELIVERY = [
  {
    mark: <MailIcon />,
    title: "Send by Email",
    description:
      "Send branded certificates through your own email and existing campaigns.",
  },
  {
    mark: <DocumentIcon />,
    title: "Printable PDF Certificates",
    description: "Branded certificates for printing, direct mail and offline promotions.",
  },
  {
    mark: <ChatIcon />,
    title: "Send by SMS",
    description:
      "Send personalized incentives by text for instant delivery.",
  },
  {
    mark: <QrCodeIcon />,
    title: "QR Code Certificates",
    description:
      "QR codes customers can scan from print or digital promotions.",
  },
];

const WEBSITE_LEAD_CAPTURE = [
  {
    mark: <LinkIcon />,
    title: "Landing Page Links",
    description:
      "Capture the lead and automatically deliver the incentive through one branded link.",
  },
  {
    mark: <PopUpIcon />,
    title: "Website Pop-Ups",
    description: "Capture attention and deliver incentives through targeted pop-ups.",
  },
  {
    mark: <BannerIcon />,
    title: "Web Banners",
    description:
      "Add incentive-driven banners to websites and landing pages.",
  },
  {
    mark: <StickyBarIcon />,
    title: "Website Sticky Bars",
    description: "Place a persistent incentive offer across the top or bottom of a website.",
  },
];

const AUTOMATION = [
  {
    mark: <AppGridIcon />,
    title: "Native GoHighLevel App",
    description:
      "Generate personalized claim links directly from GoHighLevel workflows. Includes nine ready-to-use workflows for agencies and sub-accounts.",
    note: "Standard Blue Sky Incentives only. Premium Certificates are not included.",
  },
  {
    mark: <ZapIcon />,
    title: "Zapier Integration",
    description:
      "Connect distribution actions to your workflows through Zapier.",
  },
  {
    mark: <CodeIcon />,
    title: "API Integration",
    description: "Connect certificate delivery to your own systems.",
  },
];

const SUPER_AGENT_TAGS = [
  "PDF Certificates",
  "QR Codes",
  "Email",
  "SMS",
  "Shareable Links",
  "Web Banners",
  "Sticky Bars",
  "Pop-Ups",
];

export function DistributionTools() {
  return (
    <Section
      tone="dark"
      title="Distribute Value-Packed Incentives Branded With Your Logo"
      subtitle="All distribution tools are included with your Blue Sky Incentives membership."
    >
      <div className="distribution__group">
        <h3 className="distribution__group-title">Direct Delivery</h3>
        <div className="feature-grid">
          {DIRECT_DELIVERY.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div className="distribution__group">
        <h3 className="distribution__group-title">Website &amp; Lead Capture</h3>
        <div className="feature-grid">
          {WEBSITE_LEAD_CAPTURE.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div className="distribution__group">
        <h3 className="distribution__group-title">Automation &amp; Integrations</h3>
        <div className="feature-grid">
          {AUTOMATION.map((item) => (
            <div key={item.title} className="distribution__automation-item">
              <FeatureCard mark={item.mark} title={item.title} description={item.description} />
              {item.note && <p className="distribution__note">{item.note}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="distribution__super-agent-wrap">
        <div className="distribution__super-agent">
          <span className="distribution__badge">Coming Soon!</span>
          <h3 className="distribution__super-agent-title">Blue Sky Incentives AI Super Agent</h3>
          <p className="distribution__super-agent-text">
            Describe what you want to create in plain English—PDFs, QR codes, emails, SMS,
            links, banners and pop-ups.
          </p>
          <p className="distribution__super-agent-text">
            The Super Agent handles the setup for you.
          </p>
          <div className="distribution__tags">
            {SUPER_AGENT_TAGS.map((tag) => (
              <span key={tag} className="distribution__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
