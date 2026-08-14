import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Analytics } from "./_components/Analytics";
import { MotionLayer } from "./_components/MotionLayer";
import { CursorEcho } from "./_components/CursorEcho";
import { HashNavigation } from "./_components/HashNavigation";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://horalix.com"),
  title: { default: "Horalix — AI-assisted echocardiography workflow", template: "%s | Horalix" },
  description: "Horalix is a Sarajevo medical-AI startup building an AI-assisted echocardiography workflow for structured measurements, report-ready outputs, and clinician review.",
  applicationName: "Horalix",
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/brand/horalix-mark.png", type: "image/png", media: "(prefers-color-scheme: light)" }, { url: "/brand/horalix-mark-white.png", type: "image/png", media: "(prefers-color-scheme: dark)" }], apple: "/brand/horalix-mark.png" },
  openGraph: { type: "website", siteName: "Horalix", title: "Make every echo ready for review.", description: "AI-assisted echocardiography workflow, built around clinician review.", url: "https://horalix.com", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Horalix — Make every echo ready for review" }] },
  twitter: { card: "summary_large_image", title: "Make every echo ready for review.", description: "AI-assisted echocardiography workflow, built around clinician review.", images: ["/og.png"] },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://horalix.com/#organization", name: "Horalix", url: "https://horalix.com", foundingDate: "2024", foundingLocation: { "@type": "Place", name: "Sarajevo, Bosnia and Herzegovina" }, address: { "@type": "PostalAddress", addressLocality: "Sarajevo", addressCountry: "BA" }, logo: { "@type": "ImageObject", url: "https://horalix.com/brand/horalix-mark.png" }, description: "Sarajevo medical-AI startup developing an AI-assisted echocardiography workflow built around clinician review.", email: "hello@horalix.com", knowsAbout: ["Artificial intelligence in echocardiography", "DICOM echocardiography workflow", "Structured echocardiography reporting", "Clinical AI human oversight"], sameAs: ["https://www.linkedin.com/company/horalix/"], memberOf: [{ "@type": "Organization", name: "NVIDIA Inception", url: "https://www.nvidia.com/en-us/startups/" }] },
    { "@type": "WebSite", "@id": "https://horalix.com/#website", url: "https://horalix.com", name: "Horalix", publisher: { "@id": "https://horalix.com/#organization" }, inLanguage: "en" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cloudflareAnalyticsToken = process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN;
  return (
    <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /><Analytics /><MotionLayer /><CursorEcho /><HashNavigation /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationGraph) }} />{cloudflareAnalyticsToken && <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon={JSON.stringify({ token: cloudflareAnalyticsToken, spa: true })} />}</body></html>
  );
}
