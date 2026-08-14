import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "../../_components/ReliableLink";
import { Arrow, Breadcrumbs, SplitCta } from "../../_components/SiteChrome";
import { getNewsItem, newsItems } from "../../_data/news";

export function generateStaticParams() { return newsItems.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const item = getNewsItem((await params).slug);
  if (!item) return {};
  return { title: item.title, description: item.summary, alternates: { canonical: `/news/${item.slug}` }, openGraph: { type: "article", title: item.title, description: item.summary, url: `https://horalix.com/news/${item.slug}`, images: item.image ? [item.image] : ["/og.png"] } };
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const item = getNewsItem((await params).slug);
  if (!item) notFound();
  const schema = { "@context": "https://schema.org", "@type": "NewsArticle", "@id": `https://horalix.com/news/${item.slug}#article`, headline: item.title, description: item.summary, datePublished: item.published, dateModified: "2026-08-14", image: item.image ? `https://horalix.com${item.image}` : "https://horalix.com/og.png", author: { "@id": "https://horalix.com/#organization" }, publisher: { "@id": "https://horalix.com/#organization" }, mainEntityOfPage: `https://horalix.com/news/${item.slug}` };
  return <><article><header className="article-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }, { label: item.label }]} /><p className="eyebrow">{item.label}</p><h1>{item.title}</h1><div className="article-meta"><span>{item.displayDate}</span><span>{item.status}</span></div></div></header>{item.image && <div className="article-image shell"><Image src={item.image} alt={item.imageAlt ?? ""} width={1200} height={676} priority sizes="(max-width: 720px) 100vw, 1200px" /></div>}<div className="article-body narrow"><p className="article-standfirst">{item.summary}</p>{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<aside className="article-disclosure"><b>Status and limitation</b><p>{item.disclosure}</p></aside><h2>Sources</h2><ul className="article-sources">{item.sources.map((source) => <li key={source.href}><a href={source.href} rel="noreferrer">{source.label} ↗</a></li>)}</ul><p className="article-return"><Link className="text-link" href="/news">All Horalix news <Arrow reverse /></Link></p></div></article><SplitCta /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
