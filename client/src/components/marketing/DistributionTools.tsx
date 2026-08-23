import { Section } from "./Section";
import { FeatureCard } from "./FeatureCard";
import "./DistributionTools.css";

const DIRECT_DELIVERY = [
  {
    mark: "1",
    title: "Send by Email",
    description:
      "Send branded digital certificates through your own business email and integrate them into existing campaigns.",
  },
  {
    mark: "2",
    title: "Printable PDF Certificates",
    description: "Create branded certificates for printing, direct mail and offline promotions.",
  },
  {
    mark: "3",
    title: "Send by SMS",
    description:
      "Send personalized incentives by text message for immediate, time-sensitive delivery.",
  },
  {
    mark: "4",
    title: "QR Code Certificates",
    description:
      "Create QR codes customers can scan from flyers, posters, displays, mail pieces or digital promotions.",
  },
];

const WEBSITE_LEAD_CAPTURE = [
  {
    mark: "1",
    title: "Landing Page Links",
    description:
      "Capture the lead and automatically deliver the selected incentive through one branded link.",
  },
  {
    mark: "2",
    title: "Website Pop-Ups",
    description: "Capture attention and deliver incentives through targeted website pop-ups.",
  },
  {
    mark: "3",
    title: "Web Banners",
    description:
      "Add incentive-driven banners to websites, thank-you pages and campaign landing pages.",
  },
  {
    mark: "4",
    title: "Website Sticky Bars",
    description: "Place a persistent incentive offer across the top or bottom of a website.",
  },
];

const AUTOMATION = [
  {
    mark: "1",
    title: "Native GoHighLevel App",
    description:
      "Automatically generate personalized Blue Sky Incentives claim links directly from GoHighLevel workflows. The public Marketplace app includes nine ready-to-use workflows for agencies and individual sub-accounts.",
    note: "Standard Blue Sky Incentives only. Premium Certificates are not included in Native GoHighLevel workflow automation.",
  },
  {
    mark: "2",
    title: "Zapier Integration",
    description:
      "Connect Blue Sky Incentives distribution actions to supported applications and automated workflows through Zapier.",
  },
  {
    mark: "3",
    title: "API Integration",
    description: "Connect Blue Sky Incentives certificate delivery to your own systems and applications.",
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
            Tell Blue Sky Incentives what you want to create or distribute in plain English. The
            Blue Sky Incentives AI Super Agent can help produce PDFs, QR codes, emails, SMS
            messages, shareable links, web banners, sticky bars and pop-ups.
          </p>
          <p className="distribution__super-agent-text">
            Simply describe what you need and the Super Agent guides the setup and completes the
            supported distribution task for you.
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
