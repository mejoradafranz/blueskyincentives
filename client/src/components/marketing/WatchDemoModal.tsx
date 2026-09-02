import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { INDUSTRIES } from "../../data/industries";
import "./WatchDemoModal.css";

function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export function WatchDemoModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [industry, setIndustry] = useState("");
  const [securityCode, setSecurityCode] = useState(generateCode);
  const [securityInput, setSecurityInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (securityInput.trim().toUpperCase() !== securityCode) {
      setError("That security code doesn't match. Please try again.");
      setSecurityCode(generateCode());
      setSecurityInput("");
      return;
    }

    setError(null);
    onClose();
    navigate("/demo");
  }

  return (
    <Modal title="Enter Your Details to Watch the Instant Replay" onClose={onClose}>
      <p className="watch-demo-modal__subtitle">Get instant access to the replay.</p>

      <form onSubmit={handleSubmit}>
        <div className="watch-demo-modal__row">
          <div className="form-field">
            <label htmlFor="watch-demo-first-name">First Name</label>
            <input
              id="watch-demo-first-name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="watch-demo-last-name">Last Name</label>
            <input
              id="watch-demo-last-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="watch-demo-email">Email</label>
          <input
            id="watch-demo-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="watch-demo-phone">Phone</label>
          <input
            id="watch-demo-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="watch-demo-business">Business</label>
          <input
            id="watch-demo-business"
            required
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="watch-demo-industry">Industry</label>
          <select
            id="watch-demo-industry"
            required
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="" disabled>
              Select your industry
            </option>
            {INDUSTRIES.map((i) => (
              <option key={i.slug} value={i.navLabel}>
                {i.navLabel}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="watch-demo-security-input">Security Code</label>
          <div className="watch-demo-modal__code" aria-hidden="true">
            {securityCode}
          </div>
          <input
            id="watch-demo-security-input"
            required
            placeholder="Enter the code above"
            value={securityInput}
            onChange={(e) => setSecurityInput(e.target.value)}
          />
        </div>

        {error && <div className="form-error">{error}</div>}

        <Button type="submit" style={{ width: "100%" }}>
          Watch the Instant Replay
        </Button>
      </form>
    </Modal>
  );
}
