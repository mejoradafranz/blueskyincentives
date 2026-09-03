import { PageHeader } from "../../components/ui/PageHeader";
import "./member.css";

const TOOLS = [
  { title: "Email Templates", description: "Pre-built emails for quote follow-up, appreciation and renewals." },
  { title: "SMS Templates", description: "Short, ready-to-send text messages for fast follow-up." },
  { title: "Landing Page Builder", description: "Branded pages to capture leads and deliver incentives." },
  { title: "QR Code Generator", description: "Generate scannable QR codes for print and in-person campaigns." },
  { title: "Web Banners & Pop-Ups", description: "Drop-in banners and pop-ups for your existing website." },
  { title: "Social Media Assets", description: "Ready-to-post graphics featuring your incentive offers." },
];

export function MarketingTools() {
  return (
    <div>
      <PageHeader title="Marketing Tools" description="Everything you need to promote your incentive offers." />

      <div className="member-grid">
        {TOOLS.map((tool) => (
          <div key={tool.title} className="member-card">
            <div className="member-card__row" style={{ marginBottom: 10 }}>
              <h3 className="member-card__title" style={{ margin: 0 }}>
                {tool.title}
              </h3>
              <span className="member-badge member-badge--gold">Coming Soon</span>
            </div>
            <p className="member-card__meta">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
