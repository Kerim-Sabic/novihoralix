import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

function render(path = "/") {
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the Horalix homepage as useful HTML", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Horalix — AI-assisted echocardiography workflow<\/title>/i);
  assert.match(html, /<h1[^>]*>Make every echo[\s\S]*ready for review\.[\s\S]*<\/h1>/i);
  assert.match(html, /Pilot-stage/);
  assert.match(html, /Clinician sign-off/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|PathologyAI|RadiologyAI/i);
  assert.doesNotMatch(html, /LVID 48\.2|Length 82\.4|Septal thickness/i);
});

test("priority routes render without a client-side loading gate", async () => {
  for (const path of ["/platform", "/for-hospitals", "/for-clinicians", "/evidence", "/security", "/investors", "/product-tour", "/resources", "/about", "/press", "/contact", "/privacy", "/terms"]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /<h1/i, path);
  }
});

test("priority pages expose route-specific discovery metadata", async () => {
  const cases = [
    ["/platform", "AI Echocardiography Workflow Platform", "https://horalix.com/platform"],
    ["/for-hospitals", "AI Echocardiography for Hospitals", "https://horalix.com/for-hospitals"],
    ["/evidence", "Clinical AI Evidence &amp; Transparency", "https://horalix.com/evidence"],
  ];
  for (const [path, title, canonical] of cases) {
    const response = await render(path);
    const html = await response.text();
    assert.match(html, new RegExp(`<meta property="og:title" content="${title}"`, "i"), path);
    assert.match(html, new RegExp(`<link rel="canonical" href="${canonical}"`, "i"), path);
  }
});

test("platform answers are visible and represented in structured data", async () => {
  const response = await render("/platform");
  const html = await response.text();
  assert.match(html, /What is Horalix\?/);
  assert.match(html, /Does Horalix diagnose without clinician review\?/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /"@type":"SoftwareApplication"/);
});

test("evidence and resource hubs expose visible answer-oriented structure", async () => {
  const evidence = await render("/evidence");
  const evidenceHtml = await evidence.text();
  assert.match(evidenceHtml, /What has Horalix not yet demonstrated\?/);
  assert.match(evidenceHtml, /"@type":"FAQPage"/);
  const resources = await render("/resources");
  const resourcesHtml = await resources.text();
  assert.match(resourcesHtml, /"@type":"CollectionPage"/);
  assert.match(resourcesHtml, /"@type":"ItemList"/);
});

test("research articles name their author and company reviewer", async () => {
  const response = await render("/resources/human-oversight-in-echo-ai");
  const html = await response.text();
  assert.match(html, /By[\s\S]*Kerim Sabic[\s\S]*Company review by[\s\S]*Neuman Alkhalil/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /"reviewedBy":\{"@id":"https:\/\/horalix\.com\/about#neuman-alkhalil"\}/);
});

test("the team page renders all four verified portraits and Person records", async () => {
  const response = await render("/about");
  const html = await response.text();
  for (const [name, image] of [
    ["Kerim Sabic", "/team/kerim-sabic.webp"],
    ["Amr Husain", "/team/amr-husain.png"],
    ["Affan Kapidzic", "/team/affan-kapidzic.png"],
    ["Neuman Alkhalil", "/team/neuman-alkhalil.png"],
  ]) {
    assert.match(html, new RegExp(name));
    assert.match(html, new RegExp(image.replaceAll("/", "\\/")));
  }
  assert.equal((html.match(/"@type":"Person"/g) || []).length, 4);
});

test("verified news is indexable, in the sitemap, and individual updates render", async () => {
  const news = await render("/news");
  const newsHtml = await news.text();
  assert.equal(news.status, 200);
  assert.match(newsHtml, /Progress, with the status attached/);
  assert.doesNotMatch(newsHtml, /noindex/i);
  const sitemap = await render("/sitemap.xml");
  const sitemapXml = await sitemap.text();
  assert.match(sitemapXml, /<loc>https:\/\/horalix\.com\/news<\/loc>/);
  assert.match(sitemapXml, /horalix-nvidia-inception/);
  const article = await render("/news/horalix-nvidia-inception");
  assert.equal(article.status, 200);
  assert.match(await article.text(), /"@type":"NewsArticle"/);
});

test("navigation is server-resilient and brand film has no user controls or captions", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /<a[^>]+href="\/platform"[^>]*>Platform<\/a>/);
  assert.match(html, /<video[^>]+autoplay[^>]+loop[^>]+muted[^>]+playsinline/i);
  assert.doesNotMatch(html, /<track|controls=""|controls="true"/i);
});

test("legacy solution and demo URLs redirect", async () => {
  const solution = await render("/solutions/pathology-ai");
  assert.equal(solution.status, 308);
  assert.equal(solution.headers.get("location"), "/platform");
  const demo = await render("/demo/horalix-demo.html");
  assert.equal(demo.status, 308);
  assert.equal(demo.headers.get("location"), "/product-tour");
});
