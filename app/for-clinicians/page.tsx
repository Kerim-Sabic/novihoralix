import Link from "../_components/ReliableLink";
import { ProductFrame } from "../_components/ProductFrame";
import { Arrow, PageIntro, SplitCta } from "../_components/SiteChrome";
import { pageMetadata } from "../_data/metadata";

export const metadata = pageMetadata({ title: "AI-Assisted Echocardiography for Clinicians", description: "See how Horalix keeps source views, AI-assisted echo measurements, corrections, and clinician sign-off in one review-led workflow.", path: "/for-clinicians" });

export default function Clinicians() {
  return <>
    <PageIntro eyebrow="For clinicians" title="AI assistance that stays open to clinical judgment." copy="Review the source image, inspect the suggested measurement, correct what needs correction, and retain final sign-off." actions={<><Link className="button button-light" href="/product-tour">Watch product tour <Arrow /></Link><Link className="button button-ghost" href="/evidence">Read the evidence approach</Link></>} />
    <section className="section shell"><div className="grid-2"><div><p className="eyebrow">Review in context</p><h2>Keep the image beside the answer.</h2><p className="lede">Measurements without their source view invite over-trust. Horalix is designed so suggested outputs remain traceable to the relevant echo image or loop.</p><ul className="feature-list"><li>Source-linked measurements and overlays</li><li>Visible review status</li><li>Clear missing or unsupported output states</li></ul></div><ProductFrame compact /></div></section>
    <section className="section section-dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Human oversight</p><h2>Control means being able to disagree.</h2></div><p className="lede">Useful clinical AI should make correction straightforward and limitations visible at the moment of review.</p></div><div className="trust-list"><div className="trust-row"><span>Inspect</span><p>See the source view and suggested overlay together.</p></div><div className="trust-row"><span>Adjust</span><p>Correct a suggested result without leaving the review context.</p></div><div className="trust-row"><span>Reject</span><p>Remove an unsuitable suggestion instead of working around it.</p></div><div className="trust-row"><span>Sign off</span><p>Retain responsibility for the final reviewed output.</p></div></div></div></section>
    <section className="section shell"><div className="section-heading"><div><p className="eyebrow">Intended workflow</p><h2>Support for preparation, not an independent diagnosis.</h2></div><div><p className="lede">Horalix is pilot-stage and pre-clearance. Published materials do not imply clearance, routine clinical use, or independently validated performance.</p><div className="disclosure"><strong>Important:</strong> Outputs require clinician review. Suitability, compatibility, and pilot use are confirmed for each environment.</div></div></div></section>
    <SplitCta />
  </>;
}
