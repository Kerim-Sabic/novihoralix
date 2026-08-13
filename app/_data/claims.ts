export type ClaimStatus = "approved" | "pending" | "blocked";

export type Claim = {
  id: string;
  claim: string;
  fallback: string;
  classification: "company" | "internal-benchmark" | "external-evidence" | "regulatory";
  status: ClaimStatus;
  source: string;
  productVersion: string;
  conditions: string;
  owner: string;
  approvedOn: string | null;
  reviewBy: string;
  allowedPages: string[];
  disclosure: string;
};

export const claims: Claim[] = [
  {
    id: "status-pilot-stage",
    claim: "Horalix is a pilot-stage, pre-clearance clinical AI product.",
    fallback: "Horalix is being developed and evaluated for pilot workflows.",
    classification: "regulatory",
    status: "approved",
    source: "Company product and regulatory status",
    productVersion: "Current pilot build",
    conditions: "Use with the pre-clearance disclosure and never imply routine clinical use.",
    owner: "Regulatory",
    approvedOn: "2026-08-13",
    reviewBy: "2026-11-13",
    allowedPages: ["all"],
    disclosure: "Pilot-stage. Pre-clearance. Not for independent diagnosis.",
  },
  {
    id: "workflow-dicom",
    claim: "Horalix accepts DICOM echocardiography studies and organizes AI-assisted measurements for clinician review.",
    fallback: "Horalix is designed around DICOM echocardiography workflows.",
    classification: "company",
    status: "approved",
    source: "Product workflow specification",
    productVersion: "Current pilot build",
    conditions: "Compatibility remains dependent on source-system configuration and pilot scope.",
    owner: "Product",
    approvedOn: "2026-08-13",
    reviewBy: "2026-11-13",
    allowedPages: ["/", "/platform", "/for-hospitals", "/for-clinicians"],
    disclosure: "Integration details are confirmed during pilot scoping.",
  },
  {
    id: "workflow-clinician-control",
    claim: "Clinicians retain final review and sign-off.",
    fallback: "Horalix is designed to support, not replace, clinician review.",
    classification: "regulatory",
    status: "approved",
    source: "Intended workflow specification",
    productVersion: "Current pilot build",
    conditions: "Always pair with human-oversight language.",
    owner: "Clinical",
    approvedOn: "2026-08-13",
    reviewBy: "2026-11-13",
    allowedPages: ["all"],
    disclosure: "Outputs require clinician review and are not an independent diagnosis.",
  },
  {
    id: "performance-processing-time",
    claim: "Processing time is approximately 10 seconds.",
    fallback: "Designed to reduce manual measurement and reporting steps; timing varies by study and environment.",
    classification: "internal-benchmark",
    status: "blocked",
    source: "Conflicting legacy website statements: approximately 10 seconds vs. under one minute",
    productVersion: "Unconfirmed",
    conditions: "Do not publish a number until protocol, sample, environment, and product version are approved.",
    owner: "Clinical validation",
    approvedOn: null,
    reviewBy: "2026-09-13",
    allowedPages: [],
    disclosure: "Internal benchmark only; not a clinical performance claim.",
  },
  {
    id: "output-count",
    claim: "Horalix produces 50+ measurements and approximately 80 outputs.",
    fallback: "Horalix organizes structured measurements and report-ready outputs for review.",
    classification: "internal-benchmark",
    status: "pending",
    source: "Legacy product copy; taxonomy and version need confirmation",
    productVersion: "Unconfirmed",
    conditions: "Do not publish counts until the output taxonomy and version are approved.",
    owner: "Product",
    approvedOn: null,
    reviewBy: "2026-09-13",
    allowedPages: [],
    disclosure: "Available outputs vary by view, study quality, and product version.",
  },
  {
    id: "program-logos",
    claim: "Horalix participates in named accelerator and technology programs.",
    fallback: "Program and partnership details are available during diligence.",
    classification: "company",
    status: "pending",
    source: "Company documentation and brand-use permissions required",
    productVersion: "Not applicable",
    conditions: "Publish names and logos only after current participation and logo rights are verified.",
    owner: "Company",
    approvedOn: null,
    reviewBy: "2026-09-13",
    allowedPages: [],
    disclosure: "Participation does not imply endorsement or product validation.",
  },
];

export function approvedClaim(id: string) {
  const item = claims.find((claim) => claim.id === id);
  if (!item) throw new Error(`Unknown claim: ${id}`);
  return item.status === "approved" ? item.claim : item.fallback;
}
