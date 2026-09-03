import { PageHeader } from "../../components/ui/PageHeader";
import { Button } from "../../components/ui/Button";
import "./member.css";

export function ContactManager() {
  return (
    <div>
      <PageHeader title="Contact Manager" description="Keep track of the customers you've sent incentives to." />

      <div className="member-card">
        <div className="member-card__row" style={{ marginBottom: 16 }}>
          <div />
          <Button variant="secondary" disabled>
            Add Contact
          </Button>
        </div>
        <div className="member-empty">
          <h3 className="member-empty__title">No contacts yet</h3>
          <p className="member-empty__text">
            Contacts will appear here as you distribute certificates to your customers.
          </p>
        </div>
      </div>
    </div>
  );
}
