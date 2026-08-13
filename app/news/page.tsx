import { PageIntro } from "../_components/SiteChrome";
import { pageMetadata } from "../_data/metadata";

export const metadata = pageMetadata({ title: "Horalix News", description: "Verified Horalix company and product updates.", path: "/news", index: false });

export default function News() {
  return <><PageIntro eyebrow="News" title="Updates only when the facts are ready." copy="Company, product, program, pilot, and research announcements appear here after their names, dates, status, and publication rights are approved." />
    <section className="section shell"><div className="grid-2"><div><p className="eyebrow">Publication standard</p><h2>What makes an update ready to publish?</h2></div><div><p className="lede">A clear source, approved wording, a named owner, and a review date. Legacy URLs remain available during the migration, while older announcements return only after that check is complete.</p><div className="note-box">For current, attributable company information, contact <a href="mailto:press@horalix.com">press@horalix.com</a>.</div></div></div></section></>;
}
