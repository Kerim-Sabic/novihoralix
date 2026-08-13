import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "./_components/Analytics";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://horalix.com"),
  title: { default: "Horalix — AI-assisted echocardiography workflow", template: "%s | Horalix" },
  description: "Horalix turns DICOM echocardiograms into structured measurements and report-ready outputs for clinician review.",
  applicationName: "Horalix",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { type: "website", siteName: "Horalix", title: "Make every echo ready for review.", description: "AI-assisted echocardiography workflow, built around clinician review.", url: "https://horalix.com", images: [{ url: "/og.png", width: 1731, height: 909, alt: "Horalix — Make every echo ready for review" }] },
  twitter: { card: "summary_large_image", title: "Make every echo ready for review.", description: "AI-assisted echocardiography workflow, built around clinician review.", images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://horalix.com/#organization", name: "Horalix", url: "https://horalix.com", logo: { "@type": "ImageObject", url: "https://horalix.com/favicon.svg" }, description: "AI-assisted echocardiography workflow built around clinician review.", email: "hello@horalix.com" },
    { "@type": "WebSite", "@id": "https://horalix.com/#website", url: "https://horalix.com", name: "Horalix", publisher: { "@id": "https://horalix.com/#organization" }, inLanguage: "en" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /><Analytics /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationGraph) }} /></body></html>
  );
}
