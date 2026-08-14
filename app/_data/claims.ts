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
    id: "active-pilot-collaborations",
    claim: "Horalix has three company-confirmed active pilot collaborations: UKC Maribor, ASA Hospital, and Poliklinika Dr Nabil.",
    fallback: "Horalix is working with clinical partners in scoped evaluation settings.",
    classification: "company",
    status: "approved",
    source: "Company confirmation; Horalix public updates for UKC Maribor and Poliklinika Dr Nabil",
    productVersion: "Current pilot build",
    conditions: "Use company-confirmed language. Do not imply completed validation, routine clinical use, or results.",
    owner: "Company",
    approvedOn: "2026-08-14",
    reviewBy: "2026-11-14",
    allowedPages: ["/", "/about", "/investors", "/news", "/for-hospitals"],
    disclosure: "Pilot collaboration describes a scoped evaluation relationship; it is not completed clinical validation or regulatory clearance.",
  },
  {
    id: "program-techstars",
    claim: "Horalix was selected for the Techstars Sarajevo Founder Catalyst Fall 2025 cohort.",
    fallback: "Horalix participated in a Sarajevo founder-development program.",
    classification: "external-evidence",
    status: "approved",
    source: "Techstars program announcement, October 1, 2025",
    productVersion: "Not applicable",
    conditions: "Name the program precisely as Founder Catalyst; do not call it investment or clinical validation.",
    owner: "Company",
    approvedOn: "2026-08-14",
    reviewBy: "2027-08-14",
    allowedPages: ["/", "/about", "/investors", "/news", "/press"],
    disclosure: "Program participation does not imply product validation or regulatory endorsement.",
  },
  {
    id: "program-nvidia-inception",
    claim: "Horalix is a member of NVIDIA Inception.",
    fallback: "Horalix participates in a technology startup-support program.",
    classification: "external-evidence",
    status: "approved",
    source: "NVIDIA Inception program; Horalix announcement and Klix report, July 16, 2026",
    productVersion: "Not applicable",
    conditions: "Describe membership only; do not imply NVIDIA investment, certification, endorsement, or clinical validation.",
    owner: "Company",
    approvedOn: "2026-08-14",
    reviewBy: "2027-08-14",
    allowedPages: ["/", "/about", "/investors", "/news", "/press"],
    disclosure: "Membership is a startup-support relationship, not product or clinical validation.",
  },
];

export function approvedClaim(id: string) {
  const item = claims.find((claim) => claim.id === id);
  if (!item) throw new Error(`Unknown claim: ${id}`);
  return item.status === "approved" ? item.claim : item.fallback;
}
