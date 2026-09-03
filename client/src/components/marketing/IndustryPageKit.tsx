import { useState } from "react";
import type { ReactNode } from "react";
import { CheckIcon } from "./CheckIcon";
import "./IndustryPageKit.css";

export function StatsGrid({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="industry-stats__panel">
      <div className="industry-stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="industry-stats__item">
            <div className="industry-stats__value">{s.value}</div>
            <div className="industry-stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClosingNote({ children }: { children: ReactNode }) {
  return <p className="industry-closing-note">{children}</p>;
}

export function GuaranteeNote({ children }: { children: ReactNode }) {
  return <p className="industry-guarantee-note">{children}</p>;
}

export function VideoPlaceholder({ caption = "Video coming soon" }: { caption?: string }) {
  return (
    <div className="industry-video">
      <div className="industry-video__play" aria-hidden="true" />
      <span className="industry-video__caption">{caption}</span>
    </div>
  );
}

export function ImagePlaceholder({
  landscape,
  caption = "Image coming soon",
}: {
  landscape?: boolean;
  caption?: string;
}) {
  return (
    <div className={`industry-image-placeholder ${landscape ? "industry-image-placeholder--landscape" : ""}`}>
      <span>{caption}</span>
    </div>
  );
}

export function MediaFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="industry-media">
      <img src={src} alt={alt} className="industry-media__image" />
    </div>
  );
}

export function GalleryPlaceholder({ count, caption = "Image coming soon" }: { count: number; caption?: string }) {
  return (
    <div className="industry-gallery">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="industry-gallery__item">
          {caption}
        </div>
      ))}
    </div>
  );
}

interface ChecklistColumn {
  heading: string;
  items: (string | { label: string; description: string })[];
  note?: string;
}

export function ChecklistTwoColumn({ columns }: { columns: [ChecklistColumn, ChecklistColumn] }) {
  return (
    <div className="industry-tools__grid">
      {columns.map((col) => (
        <div key={col.heading} className="industry-tools__column">
          <h3 className="industry-tools__heading">{col.heading}</h3>
          <ul className="industry-tools__list">
            {col.items.map((item) => {
              const key = typeof item === "string" ? item : item.label;
              return (
                <li key={key} className="industry-tools__list-item">
                  <span className="industry-tools__check">
                    <CheckIcon />
                  </span>
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <span>
                      <strong>{item.label}</strong> — {item.description}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          {col.note && <p className="industry-tools__note">{col.note}</p>}
        </div>
      ))}
    </div>
  );
}

export function FaqAccordion({ faqs }: { faqs: { question: string; answer: string | null }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="industry-faq__list">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question} className="industry-faq__item">
            <button
              className="industry-faq__question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{faq.question}</span>
              <span
                className={`industry-faq__chevron ${isOpen ? "industry-faq__chevron--open" : ""}`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="industry-faq__answer">
                <p>{faq.answer ?? "Answer coming soon."}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
