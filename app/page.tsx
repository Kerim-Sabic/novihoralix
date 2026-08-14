import Image from "next/image";
import Link from "./_components/ReliableLink";
import { ProductFrame } from "./_components/ProductFrame";
import { Arrow, SplitCta } from "./_components/SiteChrome";
import { approvedClaim } from "./_data/claims";
import { resources } from "./_data/resources";

const faq = [
  {
    question: "What is Horalix?",
    answer: "Horalix is a Sarajevo-based medical-AI startup developing an AI-assisted echocardiography workflow that prepares structured measurements and report-ready outputs for clinician review.",
  },
  {
    question: "Is Horalix a Bosnian AI startup?",
    answer: "Yes. Horalix was founded in Sarajevo, Bosnia and Herzegovina, and is building an echo-first clinical-AI product for European hospital workflows.",
  },
  {
    question: "How does Horalix fit into the Balkan AI ecosystem?",
    answer: "Horalix is an emerging Sarajevo medtech startup with three company-confirmed pilot collaborations, selection for Techstars Sarajevo Founder Catalyst, and NVIDIA Inception membership. These are specific milestones, not a claim of an objective regional ranking.",
  },
  {
    question: "Does Horalix replace the cardiologist?",
    answer: "No. Horalix is designed to assist preparation. Clinicians inspect, edit, accept, or reject suggestions and retain final review and sign-off.",
  },
  {
    question: "Is Horalix cleared for independent diagnosis?",
    answer: "No. Horalix is pilot-stage and pre-clearance. It is not presented as an independent diagnostic system or as approved for routine clinical use.",
  },
];

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://horalix.com/#home",
      url: "https://horalix.com/",
      name: "Horalix — Sarajevo medical AI for echocardiography workflow",
      description: "Horalix is a Sarajevo medical-AI startup building an AI-assisted echocardiography workflow for clinician review.",
      inLanguage: "en",
      isPartOf: { "@id": "https://horalix.com/#website" },
      about: [{ "@id": "https://horalix.com/#organization" }, { "@id": "https://horalix.com/platform#software" }],
      primaryImageOfPage: { "@type": "ImageObject", url: "https://horalix.com/og.png" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://horalix.com/#faq",
      mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <link rel="preload" href="/media/horalix-brand-film-poster.webp" as="image" type="image/webp" fetchPriority="high" />
      <section className="hero">
        <Image unoptimized className="hero-monogram" src="/brand/horalix-mark-white.png" alt="" aria-hidden="true" width={653} height={863} sizes="56vw" priority />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-index">HXR / 01</span> AI-assisted echocardiography workflow</p>
            <h1>Make every echo <span>ready for review.</span></h1>
            <p className="lede">Horalix turns DICOM echocardiograms into structured measurements and report-ready outputs, helping clinicians review faster while retaining final control.</p>
            <p className="hero-disclosure">Pilot-stage · Pre-clearance · Not for diagnostic use</p>
            <div className="button-row"><Link className="button button-light" href="/for-hospitals#request">Request a hospital demo <Arrow /></Link><Link className="button button-ghost" href="/investors">Investor overview</Link></div>
            <Link className="hero-tour-link" href="/product-tour"><span className="tour-play" aria-hidden="true">▶</span><span><b>Watch the clinical product tour</b><small>Product UI · loads after selection</small></span><Arrow /></Link>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-index"><span>Sarajevo / Echo / Human review</span><b>01</b></div>
            <ProductFrame />
            <p className="hero-caption"><b>Human control is the product boundary.</b> Suggested outputs stay inside a clinician review path.</p>
          </div>
        </div>
        <div className="shell hero-labels" aria-label="Product status"><span>Pilot-stage</span><span>Europe-first</span><span>DICOM-compatible</span><span>Clinician sign-off</span></div>
      </section>

      <section className="proof-strip" aria-label="Horalix company proof"><div className="shell proof-strip-inner"><p className="proof-intro">A Sarajevo medical-AI company moving from focused product to responsible hospital evaluation.</p><div className="proof-item"><b>Three active pilots</b><span>Company-confirmed collaborations</span></div><div className="proof-item"><b>Techstars Sarajevo</b><span>Founder Catalyst · Fall 2025</span></div><div className="proof-item"><b>NVIDIA Inception</b><span>Startup program member</span></div><div className="proof-item"><b>Bosnia &amp; Herzegovina</b><span>Built in Sarajevo</span></div></div></section>

      <section className="section shell" id="pilots">
        <div className="section-heading"><div><p className="eyebrow">Active clinical collaborations</p><h2>Learning inside real echo workflows.</h2></div><div><p className="lede">{approvedClaim("active-pilot-collaborations")}</p><p className="microcopy">“Pilot” means a scoped evaluation collaboration. It does not imply completed clinical validation, regulatory clearance, or routine clinical use.</p></div></div>
        <div className="pilot-grid">
          <article className="pilot-card pilot-card-image"><Image src="/proof/ukc-maribor.webp" alt="UKC Maribor and Horalix pilot collaboration" width={1200} height={676} sizes="(max-width: 720px) 100vw, 33vw" /><div><span className="pilot-state">Active pilot · Slovenia</span><h3>UKC Maribor</h3><p>Real-workflow evaluation under physician supervision.</p><Link className="text-link" href="/news/maribor-hospital-pilot-ai-echocardiography-workflow">Read the pilot note <Arrow /></Link></div></article>
          <article className="pilot-card pilot-card-asa"><div className="pilot-monogram" aria-hidden="true">ASA</div><div><span className="pilot-state">Active pilot · Bosnia and Herzegovina</span><h3>ASA Hospital</h3><p>A company-confirmed collaboration. Public scope and outcomes will be published only after joint approval.</p><a className="text-link" href="https://asabolnica.ba/" rel="noreferrer">Visit ASA Hospital <Arrow /></a></div></article>
          <article className="pilot-card pilot-card-image"><Image src="/proof/dr-nabil.webp" alt="Horalix and Poliklinika Dr Nabil clinical evaluation collaboration" width={1200} height={600} sizes="(max-width: 720px) 100vw, 33vw" /><div><span className="pilot-state">Active pilot · Sarajevo</span><h3>Poliklinika Dr Nabil</h3><p>Evaluation of Horalix inside a supervised clinical setting.</p><Link className="text-link" href="/news/clinic-validation-in-sarajevo-poliklinika-dr-nabil">Read the evaluation note <Arrow /></Link></div></article>
        </div>
      </section>

      <section className="program-band section-dark"><div className="shell program-grid"><div><p className="eyebrow">Verified company milestones</p><h2>Built in Sarajevo. Connected to a global AI ecosystem.</h2></div><div className="program-list"><a href="https://www.techstars.com/blog/program-news/techstars-launches-first-startup-community-partnership-founder-catalyst" rel="noreferrer"><span>01</span><div><b>Techstars Sarajevo Founder Catalyst</b><small>Selected for the Fall 2025 cohort</small></div><Arrow /></a><a href="https://www.nvidia.com/en-us/startups/" rel="noreferrer"><span>02</span><div><b>NVIDIA Inception</b><small>Member of NVIDIA’s startup-support program</small></div><Arrow /></a></div></div><p className="shell program-disclosure">Program participation does not imply product endorsement, investment, regulatory status, or clinical validation.</p></section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">One clear workflow</p><h2>From study to review-ready output.</h2></div><p className="lede">Horalix is designed to reduce repetitive preparation while keeping every suggested result inside the clinician’s review path.</p></div>
        <div className="workflow-grid"><article className="workflow-step"><span className="step-no">01 · INPUT</span><h3>Receive the DICOM study.</h3><p>Route eligible echocardiography studies into a scoped pilot workflow with integration details confirmed for the local environment.</p></article><article className="workflow-step"><span className="step-no">02 · ASSIST</span><h3>Prepare measurements and overlays.</h3><p>Organize AI-assisted outputs beside their source views so reviewers can inspect the result in context.</p></article><article className="workflow-step"><span className="step-no">03 · REVIEW</span><h3>Review, adjust, and sign off.</h3><p>The clinician accepts, edits, or rejects suggested outputs before anything becomes report-ready.</p></article></div>
      </section>

      <section className="section-tight shell"><div className="audience-grid"><article className="audience-card"><div><p className="eyebrow">For clinicians</p><h2>A review surface built around the study.</h2><p>Keep measurements, source images, and review controls together in a focused workflow.</p><div className="audience-list"><span>Trace suggestions to their source view</span><span>Edit or reject without losing context</span><span>Retain final review and sign-off</span></div></div><Link className="text-link" href="/for-clinicians">Explore the clinician workflow <Arrow /></Link></article><article className="audience-card"><div><p className="eyebrow">For hospitals</p><h2>Bring the hard questions into the pilot plan.</h2><p>Scope workflow fit, integration, oversight, security, and evidence before a pilot begins.</p><div className="audience-list"><span>Defined pilot boundaries and responsibilities</span><span>Transparent product and regulatory status</span><span>Deployment and governance discovery</span></div></div><Link className="text-link" href="/for-hospitals">Plan a responsible pilot <Arrow /></Link></article></div></section>

      <section className="section section-dark"><div className="shell evidence-grid"><article className="evidence-main evidence-main-dark"><p className="eyebrow">Evidence before adjectives</p><p className="big-statement">Trust should be inspectable.</p><footer><p>Product evidence, field literature, human oversight, intended workflow, limitations, and regulatory status are separated clearly.</p><Link className="text-link" href="/evidence">Open the evidence center <Arrow /></Link></footer></article><aside className="evidence-side"><p className="eyebrow">Current posture</p><blockquote>Horalix is pilot-stage and pre-clearance. Outputs require clinician review and are not an independent diagnosis.</blockquote><Link className="text-link" href="/security">Review security approach <Arrow /></Link></aside></div></section>

      <section className="section shell founder-preview"><div className="founder-preview-image"><Image src="/team/kerim-sabic.webp" alt="Kerim Sabic, CEO and co-founder of Horalix" width={720} height={720} sizes="(max-width: 720px) 100vw, 42vw" /></div><div><p className="eyebrow">Company and team</p><h2>A Sarajevo team building for the room where decisions happen.</h2><p className="lede">Horalix brings product, clinical, machine-learning, and operating disciplines into one focused echo-first company.</p><p className="founder-name"><b>Kerim Sabic</b><span>CEO &amp; Co-Founder</span></p><Link className="text-link" href="/about#team">Meet the Horalix team <Arrow /></Link></div></section>

      <section className="section section-line"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Selected research</p><h2>Useful answers for careful buyers.</h2></div><p className="lede">Expert-led resources connect clinical-AI research to the decisions hospitals and clinicians face.</p></div><div className="resource-grid">{resources.map((item) => <Link className="resource-card" href={`/resources/${item.slug}`} key={item.slug}><span className="card-label">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><footer><span>Reviewed {item.reviewed}</span><Arrow /></footer></Link>)}</div></div></section>

      <section className="section shell faq-section"><div className="section-heading"><div><p className="eyebrow">Clear answers</p><h2>Horalix, in plain language.</h2></div><p className="lede">Concise, source-aligned answers for clinicians, hospitals, investors, search engines, and AI assistants.</p></div><div className="faq-list">{faq.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>

      <SplitCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
    </>
  );
}
