export type CaseIndex = {
  slug: string;
  title: string;
  subtitle: string;
  proves: string;
  outcome: [string, string]; // two-line outcome shown on the landing card
  color: string;
  org: "Vantedge AI" | "Scholar Planet";
};

export const cases: CaseIndex[] = [
  {
    slug: "ai-copilot",
    title: "AI Copilot",
    subtitle: "Context-aware agentic interface to a financial workspace",
    proves: "Agentic systems + product architecture + financial workflows",
    outcome: [
      "Turned the current page + workspace into part of the prompt itself.",
      "Users stop learning where info lives — they just ask in context.",
    ],
    color: "#4A5FC1",
    org: "Vantedge AI",
  },
  {
    slug: "research-agent",
    title: "Research Agent",
    subtitle: "AI research for financial analysts",
    proves: "AI evaluation + orchestration + accuracy / latency",
    outcome: [
      "Cut analyst research time from 20 → 5 min per report.",
      "Broke a single-workflow LLM into a specialised-agent orchestration.",
    ],
    color: "#6FA69A",
    org: "Vantedge AI",
  },
  {
    slug: "mca-agent",
    title: "MCA Underwriting Agent",
    subtitle: "Domain-fine-tuned decisions for US & Europe MCA",
    proves: "Unstructured data extraction + domain reasoning",
    outcome: [
      "Cut underwriting time by 58% with a QLoRA-fine-tuned domain LLM.",
      "Designed HITL loop + citation-backed outputs analysts actually trust.",
    ],
    color: "#D97757",
    org: "Vantedge AI",
  },
  {
    slug: "ai-crm",
    title: "AI CRM · Forward Deployment",
    subtitle: "Embedded delivery for enterprise fund clients",
    proves: "Customer-facing implementation + shipping",
    outcome: [
      "Cut client TTV from 3 weeks → 3 days at a Tier-1 fund.",
      "Ran the field-to-research loop that fed every next release.",
    ],
    color: "#B85C3E",
    org: "Vantedge AI",
  },
  {
    slug: "fundos",
    title: "FundOS",
    subtitle: "The AI-native OS for hedge funds, PE, private credit & VC",
    proves: "Financial product depth",
    outcome: [
      "Contributed to product & UI across 11+ integrated modules.",
      "Held coherence across the platform (agents · evals · guardrails · billing).",
    ],
    color: "#E8B84A",
    org: "Vantedge AI",
  },
  {
    slug: "scholar-planet",
    title: "Scholar Planet",
    subtitle: "Edtech · a basic quiz app rebuilt into a two-sided platform",
    proves: "0 → 1 PM + growth + customer discovery",
    outcome: [
      "Grew from <100 users to a live two-sided platform with 50 school pilots.",
      "3× D30 retention, 2.5× DAU, +150% session time — all with rebuild, not tricks.",
    ],
    color: "#E8A5A5",
    org: "Scholar Planet",
  },
];

/** Return the case that comes after `slug` in the list, wrapping to the first. */
export function nextCase(slug: string): CaseIndex {
  const i = cases.findIndex((c) => c.slug === slug);
  return cases[(i + 1) % cases.length];
}
