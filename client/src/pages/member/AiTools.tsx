import { PageHeader } from "../../components/ui/PageHeader";
import { Button } from "../../components/ui/Button";
import "./member.css";

const TOOLS = [
  {
    title: "AI Marketing Consultant",
    description: "Get campaign ideas for quote generation, appreciation, renewal and reactivation outreach.",
  },
  {
    title: "AI Social Content Creator",
    description: "Generate local, on-brand social content with your incentive offers already integrated.",
  },
  {
    title: "Ask AI",
    description: "Built-in guidance and recommendations right inside your dashboard.",
  },
];

export function MemberAiTools() {
  return (
    <div>
      <PageHeader title="AI Tools" description="AI-powered tools to help you plan and produce incentive campaigns." />

      <div className="member-grid">
        {TOOLS.map((tool) => (
          <div key={tool.title} className="member-card">
            <div className="member-card__row" style={{ marginBottom: 10 }}>
              <h3 className="member-card__title" style={{ margin: 0 }}>
                {tool.title}
              </h3>
              <span className="member-badge member-badge--soon">Coming Soon</span>
            </div>
            <p className="member-card__meta" style={{ marginBottom: 16 }}>
              {tool.description}
            </p>
            <Button variant="secondary" style={{ width: "100%" }} disabled>
              Coming Soon
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
