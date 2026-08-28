import type { ReactNode } from "react";
import "./ImageHero.css";

export function ImageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  image: string;
  imageAlt?: string;
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="image-hero">
      <div className="image-hero__media">
        <img src={image} alt={imageAlt ?? ""} className="image-hero__image" />
        <div className="image-hero__scrim" aria-hidden="true" />

        <div className="image-hero__panel">
          <div className="image-hero__eyebrow">{eyebrow}</div>
          <h1 className="image-hero__title">{title}</h1>
          <p className="image-hero__subtitle">{subtitle}</p>
          {actions && <div className="image-hero__actions">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
