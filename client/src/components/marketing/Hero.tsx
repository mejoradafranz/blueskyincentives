import type { ReactNode } from "react";
import "./Hero.css";

export function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        {eyebrow && <div className="hero__eyebrow">{eyebrow}</div>}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {actions && <div className="hero__actions">{actions}</div>}
      </div>
      <div className="hero__glow" aria-hidden="true" />
    </section>
  );
}
