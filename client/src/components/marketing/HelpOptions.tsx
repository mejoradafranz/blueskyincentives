import { Section } from "./Section";
import "./HelpOptions.css";

const STRATEGIST_PHONE = "+16198154181";
const STRATEGIST_PHONE_DISPLAY = "1-619-815-4181";

const SUPPORT_PHONE = "+15551234567";
const SUPPORT_PHONE_DISPLAY = "(555) 123-4567";
const SUPPORT_EMAIL = "support@blueskyincentives.us";

export function HelpOptions() {
  return (
    <Section title="How Can We Help?" subtitle="Choose the option that best matches what you need.">
      <div className="help-options__grid">
        <div className="help-options__card">
          <h3 className="help-options__title">Speak With an Incentive Strategist</h3>
          <p className="help-options__text">
            Not yet a Blue Sky Incentives customer? Get answers about incentives, pricing,
            implementation and how Blue Sky Incentives could work for your business.
          </p>
          <a href={`tel:${STRATEGIST_PHONE}`} className="help-options__phone">
            {STRATEGIST_PHONE_DISPLAY}
          </a>
          <p className="help-options__hours">Monday&ndash;Friday, 8am&ndash;5pm PST</p>
        </div>

        <div className="help-options__card">
          <h3 className="help-options__title">Client Support</h3>
          <p className="help-options__text">
            Already a Blue Sky Incentives member or previous customer? Get help with your
            account, certificates, platform access or membership.
          </p>
          <a href={`tel:${SUPPORT_PHONE}`} className="help-options__phone">
            {SUPPORT_PHONE_DISPLAY}
          </a>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="help-options__email">
            {SUPPORT_EMAIL}
          </a>
        </div>

        <div className="help-options__card">
          <h3 className="help-options__title">Blue Sky Incentives</h3>
          <p className="help-options__address">Address coming soon</p>

          <p className="help-options__hours-label">Business Hours</p>
          <p className="help-options__hours">Monday&ndash;Friday, 8am&ndash;5pm PST</p>
          <p className="help-options__hours">Saturday, Sunday and holidays: Closed</p>

          <p className="help-options__note">
            Messages received after hours will be answered on the next business day.
          </p>
        </div>
      </div>
    </Section>
  );
}
