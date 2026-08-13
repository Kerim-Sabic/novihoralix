import Link from "next/link";
import { LeadForm } from "../_components/LeadForm";
import { Arrow, PageIntro } from "../_components/SiteChrome";
import { pageMetadata } from "../_data/metadata";

export const metadata = pageMetadata({ title: "Contact Horalix", description: "Contact Horalix for hospital demos, investor access, partnerships, press, and general company enquiries.", path: "/contact" });

export default function Contact() {
  return <><PageIntro eyebrow="Contact Horalix" title="Start with the conversation you need." copy="Choose the most direct route for hospital evaluation, investor access, press, or a general company enquiry." />
    <section className="section shell"><div className="audience-grid"><article className="audience-card"><div><p className="eyebrow">Hospitals and clinicians</p><h2>Evaluate the workflow.</h2><p>Discuss pilot scope, DICOM integration, evidence, security, and clinician review.</p></div><Link className="text-link" href="/for-hospitals#request">Request hospital demo <Arrow /></Link></article><article className="audience-card"><div><p className="eyebrow">Investors</p><h2>Review the company.</h2><p>Request current company materials and a focused conversation with the team.</p></div><Link className="text-link" href="/investors#access">Request investor materials <Arrow /></Link></article></div></section>
    <section className="section-tight shell"><div className="form-section"><div><p className="eyebrow">General enquiry</p><h2>Not sure where to start?</h2><p className="lede">Use the hospital form for a general business enquiry or email the relevant team directly.</p><div className="timeline"><div className="timeline-row"><b>General</b><p><a href="mailto:hello@horalix.com">hello@horalix.com</a></p></div><div className="timeline-row"><b>Press</b><p><a href="mailto:press@horalix.com">press@horalix.com</a></p></div><div className="timeline-row"><b>Privacy</b><p><a href="mailto:privacy@horalix.com">privacy@horalix.com</a></p></div></div></div><div className="form-card"><h3>Send a business enquiry</h3><p>Do not include patient information or clinical data.</p><LeadForm intent="hospital_demo" /></div></div></section></>;
}
