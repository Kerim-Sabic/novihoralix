"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

declare global { interface Window { turnstile?: { render: (element: HTMLElement, options: Record<string, unknown>) => string } } }

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function LeadForm({ intent }: { intent: "hospital_demo" | "investor_access" }) {
  const [opened, setOpened] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const widget = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (opened) formRef.current?.focus();
  }, [opened]);

  useEffect(() => {
    if (!opened || !siteKey || !widget.current) return;
    const render = () => widget.current && window.turnstile?.render(widget.current, { sitekey: siteKey, theme: "light" });
    if (window.turnstile) { render(); return; }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = render;
    document.head.appendChild(script);
  }, [opened]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("sending"); setError("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, intent, consentVersion: "2026-08-13", sourcePath: window.location.pathname, turnstileToken: payload["cf-turnstile-response"] || "" }) });
    if (!response.ok) { const data = await response.json().catch(() => ({})); setError(data.error || "We could not send your request. Please try again or email hello@horalix.com."); setState("error"); requestAnimationFrame(() => errorRef.current?.focus()); return; }
    window.dispatchEvent(new CustomEvent("horalix:track", { detail: { event: intent === "hospital_demo" ? "demo_submission" : "investor_submission" } }));
    window.location.assign(intent === "hospital_demo" ? "/thank-you/hospital" : "/thank-you/investor");
  }

  if (!opened) return <button type="button" className="button button-dark" data-track={intent === "hospital_demo" ? "demo_start" : "investor_start"} onClick={() => setOpened(true)}>Start secure request <span>→</span></button>;

  return (
    <form ref={formRef} tabIndex={-1} aria-label={intent === "hospital_demo" ? "Hospital demo request" : "Investor materials request"} className="lead-form" onSubmit={submit}>
      <div className="form-grid"><label>Full name<input required name="name" autoComplete="name" maxLength={80} /></label><label>Work email<input required name="workEmail" type="email" autoComplete="email" maxLength={120} /></label></div>
      <div className="form-grid"><label>Organization<input required name="organization" autoComplete="organization" maxLength={120} /></label><label>Role<input required name="role" autoComplete="organization-title" maxLength={80} /></label></div>
      <label>Country<input required name="country" autoComplete="country-name" maxLength={80} /></label>
      <label>What would make this conversation useful? <span className="optional">Optional</span><textarea name="message" rows={4} maxLength={800} /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <p className="form-warning"><b>Please do not submit patient information or clinical data.</b> This form is for business enquiries only.</p>
      {siteKey ? <div ref={widget} className="turnstile" /> : <p className="form-config">Secure verification will be activated before production launch.</p>}
      <div className="consent-row"><label className="consent"><input required type="checkbox" name="consent" value="yes" /> <span>I agree that Horalix may use these details to respond to my request.</span></label><p>Read the <a href="/privacy">privacy notice</a>.</p></div>
      <p ref={errorRef} tabIndex={-1} className="form-error" id={`${intent}-error`} role="alert">{error}</p>
      <button aria-describedby={`${intent}-error`} className="button button-dark" disabled={state === "sending"} type="submit">{state === "sending" ? "Sending…" : intent === "hospital_demo" ? "Request hospital demo" : "Request investor materials"} <span>→</span></button>
    </form>
  );
}
