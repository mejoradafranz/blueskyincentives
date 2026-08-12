import type { ReactNode } from "react";
import "./Section.css";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  tone = "default",
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  tone?: "default" | "subtle";
}) {
  return (
    <section className={`section section--${tone}`}>
      <div className="container">
        {(eyebrow || title || subtitle) && (
          <div className="section__header">
            {eyebrow && <div className="section__eyebrow">{eyebrow}</div>}
            {title && <h2 className="section__title">{title}</h2>}
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
