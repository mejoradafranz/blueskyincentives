import type { ReactNode } from "react";
import "./Hero.css";

export function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        {eyebrow && <div className="hero__eyebrow">{eyebrow}</div>}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {actions && <div className="hero__actions">{actions}</div>}
      </div>

      {image && (
        <div className="hero__image-container">
          <img src={image} alt={imageAlt ?? ""} className="hero__image" />
        </div>
      )}

      <div className="hero__glow" aria-hidden="true" />
    </section>
  );
}
