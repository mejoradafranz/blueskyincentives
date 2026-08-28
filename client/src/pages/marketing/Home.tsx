import { Link } from "react-router-dom";
import { ImageHero } from "../../components/marketing/ImageHero";
import { StatsBar } from "../../components/marketing/StatsBar";
import { Section } from "../../components/marketing/Section";
import { IncentiveLibrary } from "../../components/marketing/IncentiveLibrary";
import { GrowthWays } from "../../components/marketing/GrowthWays";
import { GetStarted } from "../../components/marketing/GetStarted";
import { IndustryPlaybooks } from "../../components/marketing/IndustryPlaybooks";
import { WhyHotelsParticipate } from "../../components/marketing/WhyHotelsParticipate";
import { TrustedRelationships } from "../../components/marketing/TrustedRelationships";
import { DistributionTools } from "../../components/marketing/DistributionTools";
import { AICampaignTools } from "../../components/marketing/AICampaignTools";
import { CustomerStories } from "../../components/marketing/CustomerStories";
import { MobileApp } from "../../components/marketing/MobileApp";
import { TalkToStrategist } from "../../components/marketing/TalkToStrategist";
import { PricingPlans } from "../../components/marketing/PricingPlans";
import { PlanInclusions } from "../../components/marketing/PlanInclusions";
import { AgencyProgram } from "../../components/marketing/AgencyProgram";
import { MoneyBackGuarantee } from "../../components/marketing/MoneyBackGuarantee";
import { HelpOptions } from "../../components/marketing/HelpOptions";
import { Button } from "../../components/ui/Button";
import heroHomeImage from "../../assets/hero-home.jpg";

export function Home() {
  return (
    <>
      <ImageHero
        image={heroHomeImage}
        imageAlt="A hotel front desk associate helping guests check in"
        eyebrow="The Future of Incentive Marketing Is Here"
        title={
          <>
            Generate More Leads,
            <br />
            Close More Sales &amp;
            <br />
            Bring Customers Back
          </>
        }
        subtitle="Add high-perceived-value incentives to your existing marketing and offers—without discounting your product or personally fulfilling the rewards yourself."
      />

      <StatsBar />

      <Section
        eyebrow="On-Demand Demo"
        title="See Exactly How Blue Sky Incentives Works"
        subtitle="Watch the complete on-demand demonstration and see how businesses use high-value incentives to generate more leads, close more sales, increase repeat business and attract referrals."
      >
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/demo">
            <Button>Watch the Instant Demo</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Speak with an Incentive Agent</Button>
          </Link>
        </div>
      </Section>

      <IncentiveLibrary />

      <GrowthWays />

      <GetStarted />

      <IndustryPlaybooks />

      <WhyHotelsParticipate />

      <TrustedRelationships />

      <DistributionTools />

      <AICampaignTools />

      <CustomerStories />

      <MobileApp />

      <TalkToStrategist />

      <PricingPlans />

      <PlanInclusions />

      <AgencyProgram />

      <MoneyBackGuarantee />

      <Section
        title="Ready to Put Blue Sky Incentives to Work?"
        subtitle="Watch the instant demo or start your Blue Sky Incentives membership today."
      >
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/demo">
            <Button>Watch the Instant Demo</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Start Risk-Free</Button>
          </Link>
        </div>
      </Section>

      <HelpOptions />
    </>
  );
}
