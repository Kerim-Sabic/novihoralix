import Image from "next/image";
import Link from "../_components/ReliableLink";
import { Arrow, PageIntro } from "../_components/SiteChrome";
import { newsItems } from "../_data/news";
import { pageMetadata } from "../_data/metadata";

export const metadata = pageMetadata({ title: "Horalix News — pilots, Techstars and NVIDIA Inception", description: "Verified Horalix updates from Sarajevo, including hospital pilot collaborations, Techstars Sarajevo Founder Catalyst, and NVIDIA Inception membership.", path: "/news" });

export default function News() {
  return <><PageIntro eyebrow="News" title="Progress, with the status attached." copy="Verified Horalix updates on hospital collaborations, company programs, product development, and evidence—each published with its scope and limitations." />
    <section className="section shell"><div className="news-grid">{newsItems.map((item) => <article className="news-card" key={item.slug}>{item.image ? <Image src={item.image} alt={item.imageAlt ?? ""} width={1200} height={676} sizes="(max-width: 720px) 100vw, 50vw" /> : <div className="news-card-graphic" aria-hidden="true"><span>H</span><i /></div>}<div><span className="card-label">{item.label} · {item.displayDate}</span><h2>{item.title}</h2><p>{item.summary}</p><Link className="text-link" href={`/news/${item.slug}`}>Read the verified update <Arrow /></Link></div></article>)}</div></section>
    <section className="section-tight section-dark"><div className="shell grid-2"><div><p className="eyebrow">Publication standard</p><h2>No milestone without its boundary.</h2></div><p className="lede">Pilot, program, and partner announcements do not imply regulatory clearance, completed validation, investment, certification, or endorsement unless the source explicitly establishes it.</p></div></section></>;
}
