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
    <section className="section shell transcript"><details><summary>Written tour summary</summary><p>The tour follows an echocardiography study into a focused review workspace. It shows AI-assisted measurements and overlays beside their source views, then brings corrections, acceptance, rejection, and report-ready preparation into the clinician’s review path. The clinician retains final sign-off throughout.</p></details><details><summary>Accessibility</summary><p>The media player loads only after selection and includes standard YouTube keyboard and playback controls. The written summary above preserves the essential workflow without requiring audio.</p></details></section>
    <SplitCta />
  </>;
}
