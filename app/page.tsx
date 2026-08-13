import Link from "next/link";
import Image from "next/image";
import { ProductFrame } from "./_components/ProductFrame";
import { Arrow, SplitCta } from "./_components/SiteChrome";
import { resources } from "./_data/resources";

export default function Home() {
  return (
    <>
      <link rel="preload" href="/media/echo-contour-poster.webp" as="image" type="image/webp" fetchPriority="high" />
      <section className="hero">
        <Image unoptimized className="hero-monogram" src="/brand/horalix-mark-white.png" alt="" aria-hidden="true" width={653} height={863} sizes="56vw" priority />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-index">HXR / 01</span> AI-assisted echocardiography workflow</p>
            <h1>Make every echo <span>ready for review.</span></h1>
            <p className="lede">Horalix turns DICOM echocardiograms into structured measurements and report-ready outputs, helping clinicians review faster while retaining final control.</p>
            <p className="hero-disclosure">Pilot-stage · Pre-clearance · Not for diagnostic use</p>
            <div className="button-row"><Link className="button button-light" href="/for-hospitals#request">Request a hospital demo <Arrow /></Link><Link className="button button-ghost" href="/investors">Investor overview</Link></div>
            <Link className="hero-tour-link" href="/product-tour"><span className="tour-play" aria-hidden="true">▶</span><span><b>Watch the product tour</b><small>2:16 · loads after selection</small></span><Arrow /></Link>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-index"><span>Echo / Review surface</span><b>01</b></div>
            <ProductFrame />
            <p className="hero-caption"><b>Human control is the product boundary.</b> Suggested outputs stay inside a clinician review path.</p>
          </div>
        </div>
        <div className="shell hero-labels" aria-label="Product status"><span>Pilot-stage</span><span>Europe-first</span><span>DICOM-compatible</span><span>Clinician sign-off</span></div>
      </section>

      <section className="proof-strip" aria-label="Horalix principles"><div className="shell proof-strip-inner"><p className="proof-intro">Built for a responsible path from pilot to clinical workflow.</p><div className="proof-item"><b>Echo-first</b><span>Focused product scope</span></div><div className="proof-item"><b>Review-led</b><span>Clinician control by design</span></div><div className="proof-item"><b>Evidence-gated</b><span>No unapproved claims</span></div><div className="proof-item"><b>Integration-aware</b><span>DICOM workflow input</span></div></div></section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">One clear workflow</p><h2>From study to review-ready output.</h2></div><p className="lede">Horalix is designed to reduce repetitive preparation while keeping every suggested result inside the clinician’s review path.</p></div>
        <div className="workflow-grid">
          <article className="workflow-step"><span className="step-no">01 · INPUT</span><h3>Receive the DICOM study.</h3><p>Route eligible echocardiography studies into a scoped pilot workflow with integration details confirmed for the local environment.</p></article>
          <article className="workflow-step"><span className="step-no">02 · ASSIST</span><h3>Prepare measurements and overlays.</h3><p>Organize AI-assisted outputs alongside their source views so reviewers can inspect the result in context.</p></article>
          <article className="workflow-step"><span className="step-no">03 · REVIEW</span><h3>Review, adjust, and sign off.</h3><p>The clinician accepts, edits, or rejects suggested outputs before anything becomes report-ready.</p></article>
        </div>
      </section>

      <section className="section-tight shell">
        <div className="section-heading"><div><p className="eyebrow">How oversight works</p><h2>Every suggested output passes through a human decision.</h2></div><p className="lede">The product assists preparation. It does not autonomously report, provide patient-facing output, or bypass clinician review.</p></div>
        <div className="timeline"><div className="timeline-row"><b>Ingest</b><p>An eligible DICOM echo study enters the agreed pilot workflow.</p></div><div className="timeline-row"><b>Prepare</b><p>Horalix suggests structured measurements and view-linked overlays.</p></div><div className="timeline-row"><b>Review</b><p>The clinician inspects, edits, accepts, or rejects each relevant suggestion.</p></div><div className="timeline-row"><b>Sign off</b><p>The clinician retains responsibility for the final reviewed output; review events support workflow traceability.</p></div></div>
      </section>

      <section className="section-tight shell">
        <div className="audience-grid">
          <article className="audience-card"><div><p className="eyebrow">For clinicians</p><h2>A review surface built around the study.</h2><p>Keep measurements, source images, and review controls together in a focused workflow.</p><div className="audience-list"><span>Trace each suggestion to its source view</span><span>Edit or reject without losing context</span><span>Retain final review and sign-off</span></div></div><Link className="text-link" href="/for-clinicians">Explore the clinician workflow <Arrow /></Link></article>
          <article className="audience-card"><div><p className="eyebrow">For hospitals</p><h2>Bring the hard questions into the pilot plan.</h2><p>Scope workflow fit, integration, oversight, security, and evidence before a pilot begins.</p><div className="audience-list"><span>Defined pilot boundaries and responsibilities</span><span>Transparent product and regulatory status</span><span>Deployment and governance discovery</span></div></div><Link className="text-link" href="/for-hospitals">Plan a responsible pilot <Arrow /></Link></article>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Evidence before adjectives</p><h2>Trust should be inspectable.</h2></div><p className="lede">Public evidence is separated from field literature, and unapproved numeric claims automatically fall back to non-numeric wording.</p></div>
        <div className="evidence-grid"><article className="evidence-main"><p className="eyebrow">Current evidence posture</p><p className="big-statement">Horalix is pilot-stage and pre-clearance. Outputs require clinician review and are not an independent diagnosis.</p><footer><p>Product performance figures will appear only after the protocol, sample, environment, product version, limitations, and internal approval are published together.</p><Link className="text-link" href="/evidence">Open the evidence center <Arrow /></Link></footer></article><aside className="evidence-side"><blockquote>“A credible clinical-AI website should make the boundary between product evidence and field evidence impossible to miss.”</blockquote><cite>Horalix evidence publishing principle</cite></aside></div>
      </section>

      <section className="section section-dark">
        <div className="shell grid-2"><div><p className="eyebrow">Deployment and trust</p><h2>Designed for the workflow around the model.</h2><p className="lede">Integration, privacy, access, failure handling, and clinician agency belong in the product conversation from day one.</p><div className="button-row"><Link className="button button-light" href="/security">Review security approach <Arrow /></Link><Link className="button button-ghost" href="/platform">Explore the platform</Link></div></div><div className="trust-list"><div className="trust-row"><span>Integration</span><p>DICOM routing and export requirements are confirmed during pilot scoping; compatibility is never treated as universal.</p></div><div className="trust-row"><span>Privacy</span><p>Business lead forms reject clinical data, avoid raw IP storage, and keep personal data out of analytics.</p></div><div className="trust-row"><span>Control</span><p>Suggested outputs remain visible, editable, and subject to clinician sign-off.</p></div><div className="trust-row"><span>Resilience</span><p>Pilot planning defines unavailable-service, unsupported-study, and recovery paths before go-live.</p></div></div></div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Company approach</p><h2>Clinical focus, technical discipline.</h2></div><div><p className="lede">Horalix is building an echo-first company around transparent development, responsible evaluation, and useful workflow design.</p><Link className="text-link" href="/about">How Horalix works <Arrow /></Link></div></div>
        <div className="metricless-grid"><div className="metricless-card"><b>01 · Product</b><p>A deliberately narrow echo-first scope for a clearer validation path.</p></div><div className="metricless-card"><b>02 · Clinical</b><p>Human review is built into the operating workflow.</p></div><div className="metricless-card"><b>03 · Company</b><p>Partner, program, and pilot proof is published only after verification.</p></div></div>
      </section>

      <section className="section section-line"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Selected research</p><h2>Useful answers for careful buyers.</h2></div><p className="lede">Expert-led resources connect clinical-AI research to the practical decisions hospitals and clinicians face.</p></div><div className="resource-grid">{resources.map((item) => <Link className="resource-card" href={`/resources/${item.slug}`} key={item.slug}><span className="card-label">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><footer><span>Reviewed {item.reviewed}</span><Arrow /></footer></Link>)}</div></div></section>
      <SplitCta />
    </>
  );
}
