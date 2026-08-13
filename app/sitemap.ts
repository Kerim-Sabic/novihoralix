import type { MetadataRoute } from "next";
import { resources } from "./_data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://horalix.com"; const date = new Date("2026-08-13");
  const routes = ["", "/platform", "/for-hospitals", "/for-clinicians", "/evidence", "/security", "/investors", "/product-tour", "/resources", "/news", "/about", "/press", "/contact", "/privacy", "/terms"];
  return [...routes.map((route) => ({ url: `${base}${route}`, lastModified: date, changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : route === "/platform" || route === "/evidence" ? .9 : .7 })), ...resources.map((resource) => ({ url: `${base}/resources/${resource.slug}`, lastModified: date, changeFrequency: "monthly" as const, priority: .8 }))];
}
