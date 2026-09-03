import { MemberFeedbackForm } from "../../components/member/MemberFeedbackForm";

export function SubmitTestimonial() {
  return (
    <MemberFeedbackForm
      title="Submit a Testimonial"
      description="Tell us about your experience with Blue Sky Incentives — we may feature it on our site."
      messageLabel="Your testimonial"
      messagePlaceholder="Share how incentives have helped your business…"
      messagePrefix="[Testimonial]"
      submitLabel="Submit Testimonial"
      successTitle="Thank you!"
      successText="Your testimonial has been submitted. We appreciate you taking the time to share it."
    />
  );
}
