export const revenueServices = {
  "medical-billing": {
    eyebrow: "REVENUE OPERATIONS / 01",
    title: "Medical billing that stays on the details.",
    intro: "A reliable billing process needs clear information, timely work, and steady follow-through. Meddot helps practices keep the administrative side of care moving.",
    overview: "Billing is more than sending a claim. It involves preparing information, tracking submissions, responding to rejections, and keeping the practice informed about what needs attention.",
    items: [
      ["Claim preparation", "Organize the information needed for accurate claim creation and submission."],
      ["Submission and tracking", "Follow claim status and identify issues that need a response."],
      ["Payment follow-up", "Keep outstanding claims visible so next actions are easier to manage."],
      ["Practice communication", "Give your team a clearer view of billing work and open questions."],
    ],
    question: "Could your billing workflow be easier to follow?",
  },
  "revenue-cycle-management": {
    eyebrow: "REVENUE OPERATIONS / 02",
    title: "A clearer view of the revenue cycle.",
    intro: "Revenue cycle management connects the steps around a patient visit, from information gathering through payment follow-up.",
    overview: "A practice needs each handoff to work: patient and payer information, coding, claims, denials, and reporting. Meddot brings an operational view to these connected tasks.",
    items: [
      ["Connected workflows", "Identify how front-office information, coding, and billing depend on one another."],
      ["Claim visibility", "Track work that is pending, rejected, denied, or awaiting payment."],
      ["Denial attention", "Surface recurring issues so the practice can discuss causes and next steps."],
      ["Useful reporting", "Focus conversations on the measures and open work that matter to your team."],
    ],
    question: "Want to understand where revenue work gets stuck?",
  },
  "medical-coding": {
    eyebrow: "REVENUE OPERATIONS / 03",
    title: "Medical coding with care for the source.",
    intro: "Coding turns documented services into information used in claims. Accuracy starts with the clinical record and a clear path for questions.",
    overview: "Meddot's coding service is designed to support consistent review of documentation and the codes used for billing. Final scope depends on your specialty and workflow.",
    items: [
      ["Documentation review", "Work from the information recorded for the patient encounter."],
      ["Code selection", "Apply the coding requirements relevant to the agreed work."],
      ["Clarification", "Identify gaps or questions that need input from the practice."],
      ["Quality focus", "Build review into the process rather than treating coding as a handoff without context."],
    ],
    question: "Need a coding partner who understands your workflow?",
  },
  credentialing: {
    eyebrow: "REVENUE OPERATIONS / 04",
    title: "Credentialing with a clear path forward.",
    intro: "Provider credentialing and enrollment involve detailed information, payer requirements, and patient follow-up.",
    overview: "Meddot can help organize the information and tasks involved in provider enrollment. Timing and requirements vary by payer, so each engagement begins with a defined scope.",
    items: [
      ["Information gathering", "Identify provider and practice details needed for the enrollment work."],
      ["Application support", "Prepare and coordinate agreed payer enrollment tasks."],
      ["Status follow-up", "Keep pending requests and responses visible to the practice."],
      ["Change management", "Discuss updates when provider or practice information changes."],
    ],
    question: "Preparing to enroll a provider or grow your practice?",
  },
} as const;

export type RevenueSlug = keyof typeof revenueServices;
