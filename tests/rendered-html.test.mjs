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

test("placeholder news is excluded from indexing and the sitemap", async () => {
  const news = await render("/news");
  assert.match(await news.text(), /<meta name="robots" content="noindex, follow"/i);
  const sitemap = await render("/sitemap.xml");
  assert.doesNotMatch(await sitemap.text(), /<loc>https:\/\/horalix\.com\/news<\/loc>/);
});

test("legacy solution and demo URLs redirect", async () => {
  const solution = await render("/solutions/pathology-ai");
  assert.equal(solution.status, 308);
  assert.equal(solution.headers.get("location"), "/platform");
  const demo = await render("/demo/horalix-demo.html");
  assert.equal(demo.status, 308);
  assert.equal(demo.headers.get("location"), "/product-tour");
});
