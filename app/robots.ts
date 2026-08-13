import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }, { userAgent: "Googlebot", allow: "/" }, { userAgent: "Bingbot", allow: "/" }, { userAgent: "OAI-SearchBot", allow: "/" }, { userAgent: "GPTBot", disallow: "/" }], sitemap: "https://horalix.com/sitemap.xml", host: "https://horalix.com" };
}
