import Link from "../_components/ReliableLink";
import Image from "next/image";
import { ProductFrame } from "../_components/ProductFrame";
import { Arrow, PageIntro, SplitCta } from "../_components/SiteChrome";
import { pageMetadata } from "../_data/metadata";

const description = "Explore Horalix: a DICOM echocardiography workflow for structured measurements, contextual overlays, and clinician-controlled review.";
export const metadata = pageMetadata({ title: "AI Echocardiography Workflow Platform", description, path: "/platform" });

const questions = [
  { question: "What is Horalix?", answer: "Horalix is a pilot-stage, AI-assisted echocardiography workflow designed to prepare structured measurements, contextual overlays, and report-ready outputs from DICOM studies for clinician review." },
  { question: "Does Horalix diagnose without clinician review?", answer: "No. Horalix is not presented as independently diagnostic. The intended workflow keeps the clinician responsible for inspecting, adjusting, accepting, or rejecting suggestions before sign-off." },
  { question: "How does Horalix connect to an echo workflow?", answer: "Pilot scoping maps DICOM study intake, eligible-study routing, review, export, access, and failure handling against the hospital’s actual environment before deployment." },
  { question: "What is Horalix’s current regulatory status?", answer: "Horalix is pilot-stage and pre-clearance. This website does not claim regulatory clearance or routine clinical use." },
];

const platformGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://horalix.com/platform#software",
      name: "Horalix",
      applicationCategory: "HealthApplication",
      applicationSubCategory: "Echocardiography workflow software",
      operatingSystem: "Web",
      inLanguage: "en",
      description: "Pilot-stage AI-assisted echocardiography workflow for clinician review.",
      audience: { "@type": "MedicalAudience", audienceType: "Clinicians and hospital decision-makers" },
      publisher: { "@id": "https://horalix.com/#organization" },
      url: "https://horalix.com/platform",
      offers: { "@type": "Offer", availability: "https://schema.org/LimitedAvailability" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://horalix.com/platform#questions",
      mainEntity: questions.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Platform() {
  return <>
    <PageIntro eyebrow="The Horalix platform" title="One workspace between the echo study and sign-off." copy="Horalix prepares structured measurements and overlays from DICOM echocardiography studies, then keeps the clinician in control of every review decision." actions={<><Link className="button button-light" href="/for-hospitals#request">Request hospital demo <Arrow /></Link><Link className="button button-ghost" href="/product-tour">Watch product tour</Link></>} />
    <section className="section shell"><ProductFrame /></section>
    <section className="section-tight shell"><div className="feature-stack">
      <article className="feature-block"><div className="feature-copy"><p className="eyebrow">01 · Study intake</p><h2>Meet the study where the workflow begins.</h2><p>Horalix is designed around DICOM echocardiography inputs, with routing and source-system compatibility confirmed during pilot scoping.</p><ul className="feature-list"><li>Scoped DICOM workflow</li><li>Eligible-study routing</li><li>Visible unsupported-study handling</li></ul></div><div className="feature-visual"><div className="metricless-card"><b>Study context</b><p>Source views, study metadata, and workflow status stay connected.</p></div></div></article>
      <article className="feature-block"><div className="feature-copy"><p className="eyebrow">02 · AI assistance</p><h2>Organize outputs around the image.</h2><p>Suggested measurements and overlays appear with the view that produced them, helping reviewers judge the output in context.</p><ul className="feature-list"><li>View-linked measurements</li><li>Visual overlays</li><li>Clear unavailable-result states</li></ul></div><div className="feature-visual feature-echo"><Image src="/media/echo-contour-poster.webp" alt="Synthetic apical four-chamber echocardiography visualization" width={1280} height={720} sizes="(max-width: 900px) 100vw, 55vw" /><span>Synthetic visualization · No patient data</span></div></article>
      <article className="feature-block"><div className="feature-copy"><p className="eyebrow">03 · Clinician review</p><h2>Make disagreement easy.</h2><p>The intended workflow lets clinicians inspect, adjust, accept, or reject suggestions before preparing report-ready outputs.</p><ul className="feature-list"><li>Explicit review status</li><li>Editable suggestions</li><li>Clinician sign-off retained</li></ul></div><div className="feature-visual"><div className="metricless-card"><b>Final control</b><p>AI assistance remains subordinate to clinical judgment throughout review.</p></div></div></article>
    </div></section>
    <section className="quote-band"><div className="shell"><blockquote>Designed to reduce repetitive preparation—not the clinician’s responsibility to interpret the study.</blockquote></div></section>
    <section className="section shell"><div className="section-heading"><div><p className="eyebrow">Product status</p><h2>Built for transparent evaluation.</h2></div><p className="lede">Horalix is pilot-stage and pre-clearance. It is not presented as independently diagnostic or cleared for routine clinical use.</p></div><div className="metricless-grid"><div className="metricless-card"><b>Scope</b><p>Echo-first product development keeps the workflow and evidence boundary clear.</p></div><div className="metricless-card"><b>Validation</b><p>Product claims are separated from field literature and tied to a version.</p></div><div className="metricless-card"><b>Oversight</b><p>Outputs require review and clinician sign-off.</p></div></div></section>
    <section className="section section-line shell"><div className="section-heading"><div><p className="eyebrow">Direct answers</p><h2>Questions clinical teams ask first.</h2></div><p className="lede">Clear answers for clinicians and hospital evaluators, using the same product boundaries on every page and in every conversation.</p></div><dl className="answer-grid">{questions.map(({ question, answer }) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}</dl></section>
    <SplitCta /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(platformGraph) }} />
  </>;
}
