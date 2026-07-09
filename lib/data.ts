export const profile = {
  name: "Susmitha Mukkamala",
  role: "AI Product Manager",
  location: "Hyderabad, India · currently in Mumbai",
  email: "susmitha.2003m@gmail.com",
  linkedin: "https://linkedin.com/in/susmitha-mukkamala-b3314b204",
  tagline:
    "I ship AI products that survive contact with real users — and obsess over the KPIs that prove it.",
};

export const kpis = [
  {
    value: 3,
    suffix: "×",
    label: "D30 retention lift",
    detail: "at Scholar Planet — diagnosed peer-connection gap in cohort curves, shipped community features",
    color: "sage",
  },
  {
    value: 2.5,
    suffix: "×",
    label: "DAU growth",
    decimals: 1,
    detail: "onboarding redesign informed by 10+ user interviews + 5 A/B tests",
    color: "rose",
  },
  {
    value: 50,
    suffix: "",
    label: "school B2B pilots won",
    detail: "co-led GTM at Kendriya Vidyalayas — requirements, dashboards, pitch, on-site rollout",
    color: "mustard",
  },
  {
    value: 3,
    suffix: "d",
    prefix: "3w → ",
    label: "client TTV",
    detail: "for a Tier-1 fund client via embedded FDE-style delivery",
    color: "ai",
  },
  {
    value: 150,
    suffix: "%",
    label: "session time",
    detail: "from 5 A/B tests on core learning surface at Scholar Planet",
    color: "clay",
  },
  {
    value: 95,
    suffix: "%",
    label: "sprint delivery",
    detail: "sustained across a year of Scholar Planet PM — velocity + quality both",
    color: "terra",
  },
];

export const agentSuite = [
  { name: "Research", desc: "market maps, competitor pulls, thesis prep" },
  { name: "AI Analyst", desc: "memo drafting from data rooms" },
  { name: "Valuation", desc: "comps + DCF + scenario runs" },
  { name: "Portfolio Monitoring", desc: "covenant + KPI drift" },
  { name: "SEC", desc: "filings triage & extraction" },
  { name: "BondBot", desc: "fixed-income spread & terms" },
  { name: "Capital-Call", desc: "automated notices + reconciliation" },
  { name: "Deal Pipeline", desc: "triage, dedup, next-step routing" },
];

export const fundosModules = [
  "Deal CRM",
  "LP CRM",
  "ODD + VDR",
  "Investor Portal",
  "CFO Center",
  "DSRI Risk",
  "Pricer",
  "HF Ops",
  "Fund Admin",
  "Reporting",
  "Compliance",
];

export const projects = [
  {
    slug: "regression-agent",
    title: "AI Regression Agent",
    subtitle: "Internal AI QA product I proposed & shipped",
    story:
      "Pitched, scoped, and delivered an autonomous browser QA tool: it reads human test plans, drives our product like a real user, and emails a nightly report before customers hit a broken flow. Wrote the PRD, defined the reliability KPIs (false-positive rate, flow-completion rate, time-to-detect), and iterated the agent's task schema until the nightly report was one engineers actually read.",
    stack: ["PRD authoring", "Reliability KPIs", "Task schema", "Rollout"],
    kpis: [
      { k: "cadence", v: "nightly" },
      { k: "customer UI bugs", v: "↓ down" },
      { k: "eng adoption", v: "default" },
    ],
    theme: "cursor",
    color: "terra",
  },
  {
    slug: "deploy-console",
    title: "Deploy Console",
    subtitle: "Internal tool with 100% eng adoption in 3 weeks",
    story:
      "Noticed our team was context-switching across five tabs to ship code. Wrote a quick PRD, prototyped, and iterated with users (the engineers next to me). One UI for deploy, rollback, env switch, build status. From proposal to team-default in three weeks.",
    stack: ["Internal PRD", "User research w/ eng", "Adoption metric", "Fast rollout"],
    kpis: [
      { k: "adoption", v: "100%" },
      { k: "rollout", v: "3 weeks" },
      { k: "clicks to deploy", v: "1" },
    ],
    theme: "console",
    color: "mustard",
  },
  {
    slug: "anxietysense",
    title: "AnxietySense",
    subtitle: "Product concept: privacy-first anxiety detection",
    story:
      "A capstone product concept — real-time social-anxiety detection from wearable signals. I owned the framing: what does a product mean here, what stays on-device, what a user sees, and what a clinician can actually act on. The underlying tech is federated ML; the interesting part is the product-privacy tradeoff — no raw data ever leaves the wrist.",
    stack: ["Product framing", "Privacy tradeoffs", "User story"],
    kpis: [
      { k: "data leaves device", v: "0 bytes" },
      { k: "modalities", v: "HR · temp · EDA" },
      { k: "principle", v: "privacy-first" },
    ],
    theme: "federated",
    color: "sage",
  },
  {
    slug: "truthlens",
    title: "TruthLens",
    subtitle: "Product exploration: multimodal misinformation",
    story:
      "A research-turned-product-thinking exercise on misinformation classification. I framed the user problem (moderators are drowning), scoped what a useful signal looks like on both text and image, and thought through where a model like this actually lives — as a co-pilot alongside a human reviewer, not a judge.",
    stack: ["Problem framing", "HITL positioning", "Multimodal UX"],
    kpis: [
      { k: "Fakeddit acc.", v: "89.1%" },
      { k: "positioning", v: "co-pilot" },
      { k: "reviewer time", v: "↓ target" },
    ],
    theme: "fusion",
    color: "ai",
  },
];

export const journey = [
  {
    year: "2021",
    place: "Vellore Institute of Technology",
    title: "Started B.Tech, started noticing product",
    body: "CSE with a blockchain specialisation. What surprised me wasn't the code — it was noticing which apps I opened again the next day, and asking why. That question hasn't gone away.",
    tone: "seed",
  },
  {
    year: "2023 · Feb",
    place: "Scholar Planet · Freelance",
    title: "Associate Product Manager — my first real ship",
    body: "Defined Weekly Active Learners as the North Star + full KPI tree. Diagnosed the D30 drop-off in cohort curves as a peer-connection gap; shipped community features that raised D30 3×. Ran 5 A/B tests (+150% session time), redesigned onboarding for 2.5× DAU, and built Mixpanel dashboards that replaced 8 hrs/week of manual reporting.",
    tone: "grow",
  },
  {
    year: "2023 · Sept",
    place: "Xlenz · AI Product Intern",
    title: "First AI product touchpoint",
    body: "Concurrent with Scholar Planet. Built the backend of a personal-finance AI application; got my first hands-on with prompt-based products, chained tools, and the honest weirdness of LLM outputs. That internship rewired how I thought about AI product surfaces.",
    tone: "spark",
  },
  {
    year: "2024",
    place: "50 Kendriya Vidyalayas · B2B pilot",
    title: "Learned how a product survives the last mile",
    body: "Co-led B2B GTM with the CEO. Gathered KV requirements, shaped hierarchical admin dashboards (state admin → KV admin → student view) around them, and pitched to school leadership to win pilots at 50 schools. Ran on-site delivery — 100+ students, 10+ teachers per pilot school. This is where I learned a good product is only real if it survives the messy last mile.",
    tone: "bloom",
  },
  {
    year: "Nov 2024 — now",
    place: "Vantedge AI (YC W22) · Mumbai",
    title: "AI Product Manager + Forward-Deployed",
    body: "I contribute to product and UI design across FundOS — Vantedge's AI-native OS for hedge funds, PE, private credit, and VC — spanning 11+ integrated modules and a 10+ domain-agent suite. I author PRDs with user stories, acceptance criteria, and AI guardrails (PII, refusals, fallbacks). I embed with enterprise clients end-to-end, ran the field-to-research feedback loop that turns production edge cases into the next prompt / schema / eval iteration, and built the billing infrastructure (Stripe self-serve, per-module SKUs, usage-based credit metering, dunning ladder) that quietly moves the trial-to-paid needle.",
    tone: "current",
  },
];

export const skills = {
  "Product Management": [
    "PRDs · User Stories · Acceptance Criteria",
    "North-Star & KPI Trees",
    "OKRs",
    "Roadmapping",
    "Prioritization (RICE, MoSCoW)",
    "Agile / Scrum",
    "Stakeholder Management",
    "Sprint Delivery",
  ],
  "Product Design & UX": [
    "Figma",
    "Prototyping",
    "Wireframing",
    "UI Design",
    "Interaction Design",
    "Usability Testing",
    "User Research",
  ],
  "AI Product Sense": [
    "Multi-step Agentic Workflows",
    "Tool-Use Chains",
    "Prompt-based Product Surfaces",
    "AI Guardrails · PII · Refusals · Fallbacks",
    "Human-in-the-Loop UX",
    "LLM Evaluation Design",
    "MCP",
  ],
  "Growth & Monetization": [
    "Pricing & Packaging",
    "SaaS Billing · Stripe",
    "Usage-Based Pricing",
    "Dunning · DSO",
    "Trial-to-Paid Conversion",
    "Funnel Analytics",
    "A/B Testing",
    "Cohort & Retention Analysis",
  ],
  "GTM & Delivery": [
    "Technical Discovery & Scoping",
    "Embedded Delivery",
    "0 → 1 Rollouts",
    "Incident Response Coordination",
    "B2B Pilot Delivery",
    "Live Debugging with Users",
  ],
  "Data, Research & Tools": [
    "Mixpanel · Amplitude · GA4",
    "Power BI",
    "BRD / FRD",
    "Process Mapping",
    "Jira · Notion",
    "SQL (working)",
  ],
  "Technical fluency (enabler, not identity)": [
    "Python (working)",
    "React / Streamlit",
    "REST APIs",
    "PyTorch (research)",
    "LangChain",
    "Claude & OpenAI APIs",
    "GitHub Actions",
  ],
};

export const nowSection = [
  "Writing PRDs for the next FundOS module rollout — user stories + acceptance criteria + AI guardrails.",
  "Watching cohort curves on the trial-to-paid funnel; hypothesising the next A/B.",
  "Running the field-to-research feedback loop that turns client edge cases into the next prompt/eval revision.",
  "Reading way too many pricing teardowns on my commute.",
];
