import { useState } from "react";
import { PageHeader } from "../../components/ui/PageHeader";
import "./member.css";

const STORAGE_KEY = "bsi-quick-launch-checklist";

const STEPS = [
  {
    id: "profile",
    title: "Complete your account profile",
    description: "Confirm your business name and contact details are correct.",
  },
  {
    id: "category",
    title: "Choose your first incentive category",
    description: "Browse the 7 incentive categories and pick one to start with.",
  },
  {
    id: "distribute",
    title: "Distribute your first certificate",
    description: "Generate a link, QR code or PDF from Distribute Certificates.",
  },
  {
    id: "branding",
    title: "Set up your white-label branding",
    description: "Add your logo and colors under White Label / Sub-User Management.",
  },
  {
    id: "team",
    title: "Invite your team",
    description: "Add sub-users so your team can help distribute incentives.",
  },
  {
    id: "ai",
    title: "Explore the AI tools",
    description: "See how the AI Marketing Consultant and Social Content Creator can help.",
  },
];

function loadCompleted(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function QuickLaunch() {
  const [completed, setCompleted] = useState<Record<string, boolean>>(loadCompleted);

  function toggle(id: string) {
    setCompleted((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }

  const doneCount = STEPS.filter((s) => completed[s.id]).length;
  const progress = Math.round((doneCount / STEPS.length) * 100);

  return (
    <div>
      <PageHeader title="Quick Launch Checklist" description="Get your account set up and your first incentive out the door." />

      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: "0.88rem", color: "var(--color-text-muted)" }}>
          <span>
            {doneCount} of {STEPS.length} complete
          </span>
          <span>{progress}%</span>
        </div>
        <div className="member-progress">
          <div className="member-progress__fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="member-checklist">
        {STEPS.map((step) => {
          const done = Boolean(completed[step.id]);
          return (
            <div
              key={step.id}
              className={`member-checklist__item ${done ? "member-checklist__item--done" : ""}`}
              onClick={() => toggle(step.id)}
            >
              <span className="member-checklist__check">{done ? "✓" : ""}</span>
              <div>
                <h3 className="member-checklist__title">{step.title}</h3>
                <p className="member-checklist__description">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
