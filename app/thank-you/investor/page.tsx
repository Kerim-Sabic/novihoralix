import Link from "next/link";
import type { Metadata } from "next";
import { Arrow, PageIntro } from "../../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Investor request received",
  robots: { index: false, follow: false },
};

export default function InvestorThanks() { return <><PageIntro eyebrow="Request received" title="Thank you. We’ll follow up with the right investor context." copy="Your request has been recorded. The Horalix team will respond using the work email you provided." actions={<><a className="button button-light" data-track="scheduling_click" href={process.env.NEXT_PUBLIC_INVESTOR_SCHEDULING_URL || "mailto:hello@horalix.com?subject=Horalix%20investor%20conversation"}>Choose a meeting time <Arrow /></a><Link className="button button-ghost" href="/platform">Review the product</Link></>} /></>; }
