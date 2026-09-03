import { PageHeader } from "../../components/ui/PageHeader";
import "./member.css";

export function Briefcase() {
  return (
    <div>
      <PageHeader title="Briefcase" description="Your saved certificates, marketing assets and documents in one place." />

      <div className="member-empty">
        <h3 className="member-empty__title">Your briefcase is empty</h3>
        <p className="member-empty__text">
          Certificates, assets and documents you save from your dashboard will appear here for
          quick access.
        </p>
      </div>
    </div>
  );
}
