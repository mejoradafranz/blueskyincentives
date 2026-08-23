import type { ReactNode } from "react";
import "./FeatureCard.css";

export function FeatureCard({
  title,
  description,
  mark,
}: {
  title: string;
  description: string;
  mark?: ReactNode;
}) {
  return (
    <div className="feature-card">
      <div className="feature-card__mark" aria-hidden="true">
        {mark}
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
}
