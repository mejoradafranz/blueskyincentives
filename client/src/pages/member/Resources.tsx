import { PageHeader } from "../../components/ui/PageHeader";
import "./member.css";

const RESOURCES = [
  { title: "Incentive Certificate Guide", description: "How each incentive category works and what to expect." },
  { title: "Marketing Best Practices", description: "Ideas for weaving incentives into your existing campaigns." },
  { title: "Compliance Guidelines", description: "What to review before launching an incentive campaign." },
  { title: "Video Tutorials", description: "Short walkthroughs of the dashboard and distribution tools." },
];

export function Resources() {
  return (
    <div>
      <PageHeader title="Resources" description="Guides and materials to help you get the most out of your membership." />

      <div className="member-grid">
        {RESOURCES.map((resource) => (
          <div key={resource.title} className="member-card">
            <div className="member-card__row" style={{ marginBottom: 10 }}>
              <h3 className="member-card__title" style={{ margin: 0 }}>
                {resource.title}
              </h3>
              <span className="member-badge member-badge--gold">Coming Soon</span>
            </div>
            <p className="member-card__meta">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
