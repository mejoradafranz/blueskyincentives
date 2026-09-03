import { useState, type FormEvent } from "react";
import { useAuth } from "../../auth/useAuth";
import { PageHeader } from "../ui/PageHeader";
import { Button } from "../ui/Button";
import { ApiError } from "../../api/client";
import * as contactApi from "../../api/contact";
import "../../pages/member/member.css";

export function MemberFeedbackForm({
  title,
  description,
  messageLabel,
  messagePlaceholder,
  messagePrefix,
  submitLabel,
  successTitle,
  successText,
}: {
  title: string;
  description: string;
  messageLabel: string;
  messagePlaceholder?: string;
  messagePrefix: string;
  submitLabel: string;
  successTitle: string;
  successText: string;
}) {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      await contactApi.submitContact({
        name: `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim() || "Dashboard member",
        email: user?.email ?? "",
        message: `${messagePrefix}\n\n${message}`,
      });
      setStatus("success");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div>
      <PageHeader title={title} description={description} />

      <div className="member-card member-form-card">
        {status === "success" ? (
          <div>
            <h3 className="member-card__title">{successTitle}</h3>
            <p className="member-card__meta">{successText}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="member-field">
              <label htmlFor="member-feedback-message">{messageLabel}</label>
              <textarea
                id="member-feedback-message"
                required
                rows={6}
                placeholder={messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {status === "error" && <div className="form-error">{error}</div>}

            <Button type="submit" disabled={status === "submitting"} style={{ width: "100%" }}>
              {status === "submitting" ? "Sending…" : submitLabel}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
