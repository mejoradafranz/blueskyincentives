import { MemberFeedbackForm } from "../../components/member/MemberFeedbackForm";

export function RequestFeature() {
  return (
    <MemberFeedbackForm
      title="Request a Feature"
      description="Have an idea that would make your dashboard more useful? We'd love to hear it."
      messageLabel="What would you like to see?"
      messagePlaceholder="Describe the feature and how it would help…"
      messagePrefix="[Feature Request]"
      submitLabel="Request Feature"
      successTitle="Thanks for the idea"
      successText="Your feature request has been submitted for our team to review."
    />
  );
}
