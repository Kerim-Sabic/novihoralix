import Image from "next/image";
import Link from "../_components/ReliableLink";
import { Arrow, PageIntro, SplitCta } from "../_components/SiteChrome";
import { pageMetadata } from "../_data/metadata";

export const metadata = pageMetadata({ title: "About Horalix — Sarajevo medical AI team", description: "Meet the Sarajevo-based Horalix team building an echo-first clinical-AI workflow around transparency, clinician control, and responsible hospital evaluation.", path: "/about" });

const people = [
  { name: "Kerim Sabic", role: "CEO & Co-Founder", focus: "Clinical workflow, product direction, and hospital partnerships", image: "/team/kerim-sabic.webp", initials: "KS" },
  { name: "Amr Husain", role: "CFO & Co-Founder", focus: "Finance, operations, and company development", initials: "AH" },
  { name: "Affan Kapidzic", role: "CTO", focus: "Platform architecture and software engineering", initials: "AK" },
  { name: "Neuman Alkhalil", role: "CSO", focus: "Machine learning and model evaluation", initials: "NA" },
];

const teamSchema = {
  "@context": "https://schema.org",
  "@graph": people.map((person) => ({
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    worksFor: { "@id": "https://horalix.com/#organization" },
    image: person.image ? `https://horalix.com${person.image}` : undefined,
  })),
};

export default function About() {
  return <>
    <PageIntro eyebrow="About Horalix" title="Clinical AI should earn trust through the way it is built." copy="Horalix is a Sarajevo-based medical-AI company developing an echo-first workflow around clinician agency, transparent evidence, and the operational realities of hospital deployment." actions={<Link className="button button-light" href="/contact">Talk with Horalix <Arrow /></Link>} />
    <section className="section shell"><div className="grid-2"><div><p className="eyebrow">Our mission</p><h2>Give echo teams a clearer path from study to review.</h2></div><div><p className="lede">We believe the best role for AI in echocardiography is to prepare structured, inspectable work while preserving the expertise and final authority of the clinician.</p><div className="location-line"><span>Sarajevo</span><span>Bosnia &amp; Herzegovina</span><span>Europe-first</span></div></div></div></section>

    <section className="section section-dark" id="team"><div className="shell"><div className="section-heading"><div><p className="eyebrow">The team</p><h2>Four disciplines. One clinical workflow.</h2></div><p className="lede">Horalix connects clinical workflow and product direction with company operations, platform engineering, and machine-learning evaluation around one echo-first focus.</p></div><div className="team-grid">{people.map((person, index) => <article className={`team-card${index === 0 ? " team-card-featured" : ""}`} key={person.name}>{person.image ? <Image src={person.image} alt={`${person.name}, ${person.role} at Horalix`} width={720} height={720} sizes="(max-width: 720px) 100vw, 50vw" /> : <div className="team-monogram" aria-hidden="true"><span>{person.initials}</span><i /></div>}<div className="team-card-copy"><span className="team-index">0{index + 1}</span><h3>{person.name}</h3><b>{person.role}</b><p>{person.focus}</p></div></article>)}</div></div></section>

    <section className="section shell"><div className="section-heading"><div><p className="eyebrow">External milestones</p><h2>Specific programs, stated precisely.</h2></div><p className="lede">Horalix was selected for the Techstars Sarajevo Founder Catalyst Fall 2025 cohort and is a member of NVIDIA Inception.</p></div><div className="milestone-grid"><a href="https://www.techstars.com/blog/program-news/techstars-launches-first-startup-community-partnership-founder-catalyst" rel="noreferrer"><span>Founder development</span><h3>Techstars Sarajevo Founder Catalyst</h3><p>Selected for the first Sarajevo Startup Community Partnership Founder Catalyst cohort.</p><small>Participation does not imply investment or product validation. ↗</small></a><a href="https://www.nvidia.com/en-us/startups/" rel="noreferrer"><span>Technology ecosystem</span><h3>NVIDIA Inception</h3><p>Member of NVIDIA’s startup-support program for companies building with AI.</p><small>Membership does not imply investment, certification, endorsement, or clinical validation. ↗</small></a></div></section>

    <section className="section shell"><div className="section-heading"><div><p className="eyebrow">Operating principles</p><h2>How we want to build.</h2></div></div><div className="workflow-grid"><article className="workflow-step"><span className="step-no">01 · FOCUS</span><h3>Stay close to the workflow.</h3><p>Build from the real work of echo teams, not a generic story about AI.</p></article><article className="workflow-step"><span className="step-no">02 · SHOW</span><h3>Make evidence traceable.</h3><p>Publish sources, methods, versions, limitations, and review dates together.</p></article><article className="workflow-step"><span className="step-no">03 · RESPECT</span><h3>Preserve clinical agency.</h3><p>Design for inspection, correction, rejection, and final sign-off.</p></article></div></section>
    <SplitCta />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
  </>;
}
