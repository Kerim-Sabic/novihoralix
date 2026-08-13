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
    answer: "A strong pilot should define the intended workflow, the clinician‚Äôs decision rights, the validation boundary, failure handling, data governance, integration assumptions, and measurable success criteria before deployment begins.",
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
          "External literature can explain the field, but it cannot6Ûç4∂âûÀk∫wµÁurce.title} ‚Üó</a>)}</div><div className="article-related"><p className="eyebrow">Related Horalix context</p>{resource.related.map((item) => <Link href={item.href} key={item.href}>{item.title} <span aria-hidden="true">‚Üí</span></Link>)}</div><div className="note-box" style={{ marginTop: 40 }}>This educational resource does not establish Horalix product performance or suitability for a particular clinical environment. <Link href="/evidence">Review the Horalix evidence boundary.</Link></div></div></article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /></>;
}
