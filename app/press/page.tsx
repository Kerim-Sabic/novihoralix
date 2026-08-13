import Link from "next/link";
import { Arrow, PageIntro } from "../_components/SiteChrome";
import { pageMetadata } from "../_data/metadata";

export const metadata = pageMetadata({ title: "Horalix Press Information", description: "Verified Horalix company information, product description, press enquiries, and approved media resources.", path: "/press" });

export default function Press() {
  return <><PageIntro eyebrow="Press" title="Clear company information, without inflated claims." copy="Use the approved company description below or contact Horalix for current product, leadership, program, and pilot information." actions={<a className="button button-light" href="mailto:press@horalix.com">Contact press team <Arrow /></a>} />
    <section className="section shell"><div className="grid-2"><div><p className="eyebrow">Approved boilerplate</p><h2>About Horalix</h2></div><div><p className="lede">Horalix is developing a pilot-stage, AI-assisted echocardiography workflow that turns DICOM studies into structured measurements and report-ready outputs for clinician review. Horalix is pre-clearance; outputs require clinician review and are not an independent diagnosis.</p><p className="microcopy">Approved 13 August 2026 · Review by 13 November 2026</p></div></div></section>
    <section className="section-tight shell"><div className="metricless-grid"><div className="metricless-card"><b>Product name</b><p>Horalix</p></div><div className="metricless-card"><b>Category</b><p>AI-assisted echocardiography workflow</p></div><div className="metricless-card"><b>Status</b><p>Pilot-stage · Pre-clearance</p></div></div></section>
    <section className="section section-dark"><div className="shell grid-2"><div><p className="eyebrow">Media assets</p><h2>Logos, screenshots, and biographies remain approval-gated.</h2></div><div><p className="lede">Request the current press kit to avoid outdated screenshots, unapproved partner logos, or superseded product language.</p><div className="button-row"><a className="button button-light" href="mailto:press@horalix.com?subject=Horalix%20press%20kit%20request">Request press kit <Arrow /></a><Link className="button button-ghost" href="/evidence">Review evidence</Link></div></div></div></section></>;
}
