import Link from "next/link";
import Image from "next/image";
import { MobileNavigation } from "./MobileNavigation";

const nav = [
  { href: "/platform", label: "Platform" },
  { href: "/for-hospitals", label: "Hospitals" },
  { href: "/for-clinicians", label: "Clinicians" },
  { href: "/evidence", label: "Evidence" },
  { href: "/security", label: "Security" },
  { href: "/investors", label: "Investors" },
];

export function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Image unoptimized src="/brand/horalix-mark-white.png" alt="" width={653} height={863} sizes="38px" />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Horalix home">
          <Mark />
          <span className="brand-word">HORALIX</span>
        </Link>
        <nav aria-label="Primary" className="desktop-nav">
          {nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="utility-link" href="https://app.horalix.com" rel="noreferrer">Product login</a>
          <Link className="button button-small button-light" href="/for-hospitals#request">Request demo</Link>
        </div>
        <MobileNavigation />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/"><Mark /><span className="brand-word">HORALIX</span></Link>
          <p>AI-assisted echocardiography workflow, built around clinician review.</p>
          <div className="status-note"><span /> Pilot-stage · Pre-clearance</div>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/platform">Platform</Link><Link href="/for-hospitals">For hospitals</Link>
          <Link href="/for-clinicians">For clinicians</Link><Link href="/product-tour">Product tour</Link>
        </div>
        <div>
          <p className="footer-label">Trust</p>
          <Link href="/evidence">Evidence</Link><Link href="/security">Security</Link>
          <Link href="/resources">Resources</Link><Link href="/press">Press</Link>
        </div>
        <div>
          <p className="footer-label">Company</p>
          <Link href="/about">About</Link><Link href="/investors">Investors</Link>
          <Link href="/contact">Contact</Link><a href="mailto:hello@horalix.com">hello@horalix.com</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Horalix. All rights reserved.</p>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
    </footer>
  );
}

export function Arrow({ reverse = false }: { reverse?: boolean }) {
  return <span aria-hidden="true" className={reverse ? "arrow reverse" : "arrow"}>→</span>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      {items.map((item, index) => (
        <span key={item.label}>{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}{index < items.length - 1 && <b>/</b>}</span>
      ))}
    </nav>
  );
}

export function PageIntro({ eyebrow, title, copy, actions }: { eyebrow: string; title: string; copy: string; actions?: React.ReactNode }) {
  return (
    <section className="page-intro"><div className="shell intro-grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div><div><p className="lede">{copy}</p>{actions && <div className="button-row">{actions}</div>}</div></div></section>
  );
}

export function SplitCta() {
  return (
    <section className="split-cta shell">
      <div className="split-cta-panel hospital-panel"><p className="eyebrow">For clinical teams</p><h2>See the workflow with your environment in mind.</h2><p>Bring your integration, governance, and review questions to a focused hospital demo.</p><Link className="text-link" href="/for-hospitals#request">Request a hospital demo <Arrow /></Link></div>
      <div className="split-cta-panel investor-panel"><p className="eyebrow">For investors</p><h2>Review the company behind the clinical workflow.</h2><p>Request a private overview of milestones, defensibility, and the path ahead.</p><Link className="text-link" href="/investors#access">Request investor materials <Arrow /></Link></div>
    </section>
  );
}
