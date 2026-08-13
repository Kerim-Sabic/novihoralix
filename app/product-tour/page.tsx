import type { Metadata } from "next";
import Link from "next/link";
import { VideoPlayer } from "../_components/VideoPlayer";
import { Arrow, PageIntro, SplitCta } from "../_components/SiteChrome";

export const metadata: Metadata = { title: "Product tour", description: "Watch the Horalix AI-assisted echocardiography workflow, from DICOM study preparation to clinician review and report-ready output.", alternates: { canonical: "/product-tour" } };

export default function ProductTour() {
  return <>
    <PageIntro eyebrow="Product tour" title="See the review-led echo workflow." copy="A short look at how Horalix brings the study, suggested measurements, contextual overlays, and clinician controls into one focused workspace." actions={<Link className="button button-light" href="/for-hospitals#request">Request a hospital demo <Arrow /></Link>} />
    <section className="section shell"><VideoPlayer /><p className="microcopy" style={{ marginTop: 18 }}>The video loads from YouTube’s privacy-enhanced domain only after you choose to play it. Interface details may reflect an earlier product version.</p></section>
    <section className="section-tight shell"><div className="section-heading"><div><p className="eyebrow">What to watch for</p><h2>Three moments that matter.</h2></div></div><div className="workflow-grid"><article className="workflow-step"><span className="step-no">01 · CONTEXT</span><h3>The study stays visible.</h3><p>Suggested outputs should remain connected to their source view.</p></article><article className="workflow-step"><span className="step-no">02 · CONTROL</span><h3>The reviewer can disagree.</h3><p>Inspect, adjust, accept, or reject rather than treating the output as final.</p></article><article className="workflow-step"><span className="step-no">03 · BOUNDARY</span><h3>Sign-off stays clinical.</h3><p>AI assistance supports preparation and does not become independent diagnosis.</p></article></div></section>
    <section className="section shell transcript"><details><summary>Product tour transcript</summary><p>Transcript publication is pending final review against the current 2:16 product video and current product terminology. The approved transcript will describe study intake, AI-assisted measurements and overlays, clinician review controls, corrections, and report-ready preparation without introducing unverified performance claims.</p></details><details><summary>Accessibility and captions</summary><p>The production video will include an approved caption file. This page provides a text transcript so the workflow remains available without audio.</p></details></section>
    <SplitCta />
  </>;
}
