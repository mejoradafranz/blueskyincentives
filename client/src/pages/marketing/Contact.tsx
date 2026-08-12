import { useState, type FormEvent } from "react";
import { Hero } from "../../components/marketing/Hero";
import { Section } from "../../components/marketing/Section";
import { Button } from "../../components/ui/Button";
import { ApiError } from "../../api/client";
import * as contactApi from "../../api/contact";
import "./Contact.css";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      await contactApi.submitContact({ name, email, company: company || undefined, message });
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's talk about your incentive program."
        subtitle="Tell us a bit about your team and what you're looking for, and we'll follow up."
      />

      <Section>
        <div className="contact-form-wrap">
          {status === "success" ? (
            <div className="contact-success">
              <h3>Thanks — message received.</h3>
              <p>We'll get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="company">Company (optional)</label>
                <input id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {status === "error" && <div className="contact-form__error">{error}</div>}

              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
