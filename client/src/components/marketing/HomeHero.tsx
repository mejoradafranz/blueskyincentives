import "./HomeHero.css";

export function HomeHero({ image, imageAlt }: { image: string; imageAlt?: string }) {
  return (
    <section className="home-hero">
      <div className="home-hero__media">
        <img src={image} alt={imageAlt ?? ""} className="home-hero__image" />
        <div className="home-hero__scrim" aria-hidden="true" />

        <div className="home-hero__panel">
          <div className="home-hero__eyebrow">The Future of Incentive Marketing Is Here</div>
          <h1 className="home-hero__title">
            Generate More Leads,
            <br />
            Close More Sales &amp;
            <br />
            Bring Customers Back
          </h1>
          <p className="home-hero__subtitle">
            Add high-perceived-value incentives to your existing marketing and offers—without
            discounting your product or personally fulfilling the rewards yourself.
          </p>
        </div>
      </div>
    </section>
  );
}
