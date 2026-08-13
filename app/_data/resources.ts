export type Resource = {
  slug: string;
  label: string;
  title: string;
  description: string;
  reviewed: string;
  readTime: string;
  answer: string;
  sections: { title: string; body: string[] }[];
  sources: { title: string; href: string }[];
  related: { title: string; href: string }[];
};

export const resources: Resource[] = [
  {
    slug: "evaluating-pilot-stage-clinical-ai",
    label: "Buyer guide",
    title: "How to evaluate pilot-stage clinical AI",
    description: "A practical framework for separating a compelling demo from a responsible, testable clinical workflow.",
    reviewed: "13 August 2026",
    readTime: "7 min",
    answer: "A strong pilot should define the intended workflow, the clinician’s decision rights, the validation boundary, failure handling, data governance, integration assumptions, and measurable success criteria before deployment begins.",
    sections: [
      {
        title: "Start with the decision, not the model",
        body: [
          "Document exactly where the software enters the echo workflow, what it produces, who reviews it, and what happens when the output is incomplete or implausible.",
          "This keeps a pilot focused on clinical utility and operational fit instead of a single headline metric.",
        ],
      },
      {
        title: "Demand a bounded evidence statement",
        body: [
          "Every result should identify the dataset, sample size, inclusion and exclusion criteria, reference standard, product version, environment, limitations, and review date.",
          "External literature can explain the field, but it cannot substitute for validation of a specific product version in its intended setting.",
        ],
      },
      {
        title: "Protect clinician agency",
        body: [
          "Reviewers need to see, adjust, accept, or reject outputs without being pushed toward automation bias. Clear uncertainty and traceability are workflow features, not decorative explainability.",
        ],
      },
    ],
    sources: [
      { title: "FUTURE-AI international consensus guideline", href: "https://www.bmj.com/content/388/bmj-2024-081554" },
      { title: "Clinician trust in healthcare AI — systematic review", href: "https://pubmed.ncbi.nlm.nih.gov/40772775/" },
    ],
    related: [
      { title: "Review the Horalix evidence boundary", href: "/evidence" },
      { title: "Plan a hospital evaluation", href: "/for-hospitals" },
    ],
  },
  {
    slug: "human-oversight-in-echo-ai",
    label: "Clinical workflow",
    title: "Human oversight in AI-assisted echocardiography",
    description: "What meaningful clinician control should look like before, during, and after an AI-assisted review.",
    reviewed: "13 August 2026",
    readTime: "6 min",
    answer: "Meaningful oversight means the clinician can understand the source view, inspect the measurement or overlay, edit or reject the result, and retain final responsibility for the signed report.",
    sections: [
      {
        title: "Oversight must be actionable",
        body: [
          "A confidence badge alone is not enough. The interface should connect every output to the relevant image or loop and make correction straightforward.",
        ],
      },
      {
        title: "Design for disagreement",
        body: [
          "Safe systems make it easy to disagree with automation. Teams should be able to record corrections, identify recurring failure modes, and review them without turning ordinary workflow into a research project.",
        ],
      },
      {
        title: "Communicate limitations at the moment they matter",
        body: [
          "Limitations are most useful beside the relevant output and in pilot documentation. They should state what the software has not established, not merely repeat a general disclaimer.",
        ],
      },
    ],
    sources: [
      { title: "Explainable AI and trust in medical AI — systematic review", href: "https://pubmed.ncbi.nlm.nih.gov/39476365/" },
      { title: "FUTURE-AI international consensus guideline", href: "https://www.bmj.com/content/388/bmj-2024-081554" },
    ],
    related: [
      { title: "See the clinician review workflow", href: "/for-clinicians" },
      { title: "Explore the Horalix platform", href: "/platform" },
    ],
  },
  {
    slug: "dicom-echo-integration-checklist",
    label: "Integration guide",
    title: "DICOM echo workflow integration checklist",
    description: "The technical and operational questions to resolve before an echo-lab AI pilot begins.",
    reviewed: "13 August 2026",
    readTime: "8 min",
    answer: "A credible integration plan covers study routing, supported objects, metadata handling, failure recovery, review ownership, export destinations, access control, auditability, and a rollback path.",
    sections: [
      {
        title: "Map the full study path",
        body: [
          "Trace the study from acquisition through PACS or VNA, routing, processing, review, and export. Name the owner and expected behavior at every handoff.",
        ],
      },
      {
        title: "Define compatibility precisely",
        body: [
          "DICOM-compatible should never mean universally compatible. Confirm modalities, transfer syntaxes, study structures, network rules, supported views, and the exact pilot environment.",
        ],
      },
      {
        title: "Plan for failure before go-live",
        body: [
          "The team should know how delayed, incomplete, duplicated, or unsupported studies are surfaced and how ordinary clinical work proceeds when the AI service is unavailable.",
        ],
      },
    ],
    sources: [
      { title: "DICOM standard", href: "https://www.dicomstandard.org/current" },
      { title: "FUTURE-AI international consensus guideline", href: "https://www.bmj.com/content/388/bmj-2024-081554" },
    ],
    related: [
      { title: "Review security and deployment", href: "/security" },
      { title: "Explore the Horalix platform", href: "/platform" },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
