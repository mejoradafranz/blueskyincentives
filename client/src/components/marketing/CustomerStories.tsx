import { Section } from "./Section";
import "./CustomerStories.css";

const STORY_SLOTS = 3;

export function CustomerStories() {
  return (
    <Section
      eyebrow="Customer Stories"
      title="Real Businesses. Real Blue Sky Incentives Experiences."
      subtitle="Real customers on how high-value incentives grow their business."
    >
      <div className="customer-stories__grid">
        {Array.from({ length: STORY_SLOTS }).map((_, i) => (
          <div key={i} className="customer-stories__video">
            <div className="customer-stories__play" aria-hidden="true" />
            <span className="customer-stories__caption">Customer story coming soon</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
