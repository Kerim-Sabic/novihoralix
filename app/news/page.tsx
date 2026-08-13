import type { Metadata } from "next";
import { PageIntro } from "../_components/SiteChrome";

export const metadata: Metadata = { title: "News", description: "Verified Horalix company and product updates.", alternates: { canonical: "/news" } };

export default function News() {
  return <><PageIntro eyebrow="News" title="Verified updates from Horalix." copy="Company, product, program, pilot, and research announcements will appear here only after the underlying facts and publication rights are approved." />
    <section className="section shell"><div className="grid-2"><div><p className="eyebrow">Editorial status</p><h2>The archive is being re-verified.</h2></div><div><p className="lede">Legacy news URLs are preserved during migration, but older announcements will not be republished until names, dates, logos, program status, and wording pass the claim approval gate.</p><div className="note-box">For current, attributable company information, contact <a href="mailto:press@horalix.com">press@horalix.com</a>.</div></div></div></section></>;
}
