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
  assert.match(html, /<h1[^>]*>Make every echo ready for review\.<\/h1>/i);
  assert.match(html, /Pilot-stage/);
  assert.match(html, /Clinician sign-off/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|PathologyAI|RadiologyAI/i);
});

test("priority routes render without a client-side loading gate", async () => {
  for (const path of ["/platform", "/for-hospitals", "/for-clinicians", "/evidence", "/security", "/investors", "/product-tour", "/resources", "/about", "/press", "/contact", "/privacy", "/terms"]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /<h1/i, path);
  }
});

test("legacy solution and demo URLs redirect", async () => {
  const solution = await render("/solutions/pathology-ai");
  assert.equal(solution.status, 308);
  assert.equal(solution.headers.get("location"), "/platform");
  const demo = await render("/demo/horalix-demo.html");
  assert.equal(demo.status, 308);
  assert.equal(demo.headers.get("location"), "/product-tour");
});
