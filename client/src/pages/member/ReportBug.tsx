import { MemberFeedbackForm } from "../../components/member/MemberFeedbackForm";

export function ReportBug() {
  return (
    <MemberFeedbackForm
      title="Report a Bug"
      description="Something not working right? Let us know and we'll take a look."
      messageLabel="What happened?"
      messagePlaceholder="Describe what you were doing and what went wrong…"
      messagePrefix="[Bug Report]"
      submitLabel="Report Bug"
      successTitle="Thanks for the report"
      successText="We've received your bug report and will look into it."
    />
  );
}
