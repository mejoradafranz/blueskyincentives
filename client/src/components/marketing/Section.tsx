import type { ReactNode } from "react";
import "./Section.css";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  tone?: "default" | "subtle" | "dark";
}) {
  return (
    <section id={id} className={`section section--${tone}`}>
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
