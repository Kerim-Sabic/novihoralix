import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
  index?: boolean;
};

export function pageMetadata({ title, description, path, index = true }: PageMetadataInput): Metadata {
  const url = `https://horalix.com${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: index ? undefined : { index: false, follow: true },
    openGraph: {
      type: "website",
      siteName: "Horalix",
      title,
      description,
      url,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: `${title} — Horalix` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
