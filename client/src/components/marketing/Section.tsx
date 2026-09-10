import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section section--${tone} ${visible ? "section--visible" : ""}`}
    >
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
