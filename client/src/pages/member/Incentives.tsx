import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../../components/ui/PageHeader";
import { Button } from "../../components/ui/Button";
import { Modal } from "../../components/ui/Modal";
import "./member.css";

const CATEGORIES = [
  "Travel & Vacation",
  "Cruise",
  "Dining",
  "Products",
  "Hotel Savings Cards",
  "Travel & Dining Passes",
  "Savings",
];

const DISTRIBUTION_OPTIONS = ["Email", "SMS", "Landing Page Link", "QR Code", "PDF Certificate"];

export function MemberIncentives() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div>
      <PageHeader
        title="Distribute Incentives"
        description="Choose a category to get distribution links, QR codes and PDF certificates."
      />

      <div className="member-grid">
        {CATEGORIES.map((category) => (
          <div key={category} className="member-card">
            <h3 className="member-card__title">{category}</h3>
            <p className="member-card__meta" style={{ marginBottom: 16 }}>
              0 distributed so far
            </p>
            <Button variant="secondary" style={{ width: "100%" }} onClick={() => setActiveCategory(category)}>
              Get Distribution Options
            </Button>
          </div>
        ))}
      </div>

      {activeCategory && (
        <Modal title={activeCategory} onClose={() => setActiveCategory(null)}>
          <ul className="member-modal__options">
            {DISTRIBUTION_OPTIONS.map((option) => (
              <li key={option} className="member-modal__option">
                <span>{option}</span>
                <span className="member-badge member-badge--soon">Coming Soon</span>
              </li>
            ))}
          </ul>
          <p className="member-modal__note">
            Live distribution tools for your account are being finalized. In the meantime, contact
            your Incentive Strategist to get this category set up for your business.
          </p>
          <Link to="/contact">
            <Button style={{ width: "100%" }} onClick={() => setActiveCategory(null)}>
              Contact Your Incentive Strategist
            </Button>
          </Link>
        </Modal>
      )}
    </div>
  );
}
