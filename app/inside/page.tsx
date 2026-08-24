import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArtifactCard } from "@/components/case/ArtifactCard";

const sections = [
  {
    kicker: "01",
    title: "PRDs",
    lead: "Real examples of how I translate ambiguity into requirements.",
    color: "#4A5FC1",
    items: [
      {
        kind: "PRD",
        title: "Research Agent v2",
        summary: "9 pages · user stories, acceptance criteria, guardrails, eval plan",
        redacted: true,
        body: "The PRD that took Research Agent from single-shot LLM to specialised agent suite. Full redacted PDF available on request.",
      },
      {
        kind: "PRD",
        title: "MCA underwriting agent",
        summary: "domain-fine-tuned decisions · US + EU rollout gates",
        redacted: true,
        body: "PRD with per-jurisdictional guardrails and market-by-market rollout criteria. Redacted PDF on request.",
      },
      {
        kind: "PRD header",
        title: "FundOS shared PRD header",
        summary: "one page every module PRD starts from",
        body: "Personas · job · success metric shape · guardrails block. The coherence layer for a multi-module OS.",
      },
      {
        kind: "PRD",
        title: "AI Regression Agent (internal tooling)",
        summary: "internal QA agent I proposed and shipped",
        body: "Reliability KPIs (false-positive rate, flow-completion rate, time-to-detect), agent task-schema, rollout to team-default.",
      },
    ],
  },
  {
    kicker: "02",
    title: "AI Systems",
    lead: "How I think about agents, evaluation, reliability and latency.",
    color: "#6FA69A",
    items: [
      {
        kind: "Prompt diff",
        title: "Extractor v1 → v4 (illustrative)",
        summary: "single-shot → schema-forced, sectioned, few-shot",
        body: "The prompt evolution behind extraction accuracy going from 78% to 98%. Includes source-quote fields, sectioned retrieval, and amendment-override few-shot.",
      },
      {
        kind: "Eval framework",
        title: "Rubric scoring · ~150 golden-set cases",
        summary: "5 dimensions · faithfulness = veto",
        body: "The shared eval harness across FundOS modules. Live latency, regression, and token tracking so a bad prompt can't reach prod.",
      },
      {
        kind: "Agent orchestration",
        title: "Task-graph patterns",
        summary: "retries · fallbacks · eval gates · MCP",
        body: "Reusable orchestration patterns codified so agent PMs stopped reinventing them.",
      },
      {
        kind: "Guardrails",
        title: "Standard PII / refusal / fallback block",
        summary: "drop-in for any PRD",
        body: "Every module inherits the guardrails by default. Cut incident risk sharply.",
      },
    ],
  },
  {
    kicker: "03",
    title: "Product Experiments",
    lead: "Hypothesis → experiment → result.",
    color: "#E8B84A",
    items: [
      {
        kind: "A/B test",
        title: "Onboarding redesign · Scholar Planet",
        summary: "5 tests · +150% session time · 2.5× DAU",
        body: "Rewrote the first-open flow after 10+ user interviews. Ran the hypothesis → variant → cohort readout for each of five variants.",
      },
      {
        kind: "Cohort read",
        title: "D30 diagnosis · community vs. content",
        summary: "solo users left · social users stayed",
        body: "Cohort curves cut by behavior showed the D30 drop was social, not curricular. Reshaped the roadmap.",
      },
      {
        kind: "Pricing test",
        title: "Freemium + 4-tier · shipped on conversion",
        summary: "trial length + price points tested",
        body: "Tested trial lengths and price points at Scholar Planet with the CEO. Shipped the version that won on conversion data.",
      },
      {
        kind: "Latency vs. capability",
        title: "Held Research Agent roadmap for a quarter",
        summary: "20 → 5 min · killed two new-agent asks to get there",
        body: "The bet: a fast product with fewer capabilities beats a slow one with more. Was right.",
      },
    ],
  },
  {
    kicker: "04",
    title: "Customer Discovery",
    lead: "How conversations changed product decisions.",
    color: "#D97757",
    items: [
      {
        kind: "Interview notes",
        title: "10+ Scholar Planet student + teacher interviews",
        summary: "the teacher-as-distribution insight",
        redacted: true,
        body: "Themed notes that produced the two-sided platform decision. Redacted for interviewee privacy.",
      },
      {
        kind: "On-site fieldwork",
        title: "3-day embedded sprint at a Tier-1 fund",
        summary: "pipeline names · memo voice · compliance surface",
        redacted: true,
        body: "Discovery that compressed TTV from 3 weeks to 3 days. On-site debrief and success plan available.",
      },
      {
        kind: "Underwriter shadow",
        title: "MCA underwriter workflow observation",
        summary: "US · UK · NL",
        body: "The observation that 40% of an underwriter's day is copy-paste between statements and a spreadsheet — the AI opportunity.",
      },
    ],
  },
  {
    kicker: "05",
    title: "Product Teardowns",
    lead: "My analysis of products I use.",
    color: "#B85C3E",
    items: [
      {
        kind: "Teardown",
        title: "Hebbia · AlphaSense · retrieval UX",
        summary: "why citation-first UX wins in enterprise",
        body: "What competing enterprise-AI research tools get right, and where trust surface still isn't a first-class citizen.",
      },
      {
        kind: "Teardown",
        title: "Doubtnut · Byju's · Unacademy · Vedantu",
        summary: "the market map behind the Scholar Planet rebuild",
        body: "Detailed reads on each. Shaped the two-sided platform bet: quizzes are a loop element inside a bigger product.",
      },
      {
        kind: "Teardown",
        title: "Cursor · v0 · Claude Code · agentic dev tools",
        summary: "what productised agentic UX looks like",
        body: "Analysis of how agentic dev tools handle the UX of a probabilistic collaborator — with notes for FundOS.",
      },
    ],
  },
  {
    kicker: "06",
    title: "Technical Notes",
    lead: "APIs, architecture, data flows, AI systems.",
    color: "#E8A5A5",
    items: [
      {
        kind: "Architecture",
        title: "Hybrid retrieval design",
        summary: "semantic + graph + BM25 · section-level tracing",
        body: "The retrieval architecture behind Research Agent — why hybrid beats vector-only for long enterprise contracts.",
      },
      {
        kind: "MCP",
        title: "Task-graph + MCP tool patterns",
        summary: "when to reach for an MCP tool call vs. inline logic",
        body: "Written for internal PMs — how to decide between a tool call, an eval gate, or a deterministic script.",
      },
      {
        kind: "Data flow",
        title: "Field-to-research feedback loop",
        summary: "reviewer edits → tagged cases → next prompt/eval",
        body: "The mechanic that turns production usage into a labeled dataset. Weekly cadence.",
      },
    ],
  },
];

export default function InsidePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      {/* header */}
      <section className="pt-8 md:pt-14">
        <Reveal>
          <div className="chip mb-6">inside my work</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-5xl md:text-7xl text-espresso leading-[0.95]">
            the evidence layer
            <span className="text-terra">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-espresso/75 text-lg leading-relaxed">
            The case studies show <em>what</em> shipped. This page shows{" "}
            <em>how I think</em> — PRD excerpts, prompt diffs, eval
            frameworks, discovery notes, product teardowns, technical
            notes. Redacted where I have to be. Direct otherwise.
          </p>
        </Reveal>
      </section>

      {/* six buckets */}
      <div className="mt-16 space-y-16">
        {sections.map((s, i) => (
          <section key={i} id={s.title.toLowerCase().replace(/\s+/g, "-")}>
            <Reveal>
              <div className="flex items-baseline gap-3 mb-2">
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: s.color }}
                >
                  {s.kicker}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-espresso">
                  {s.title}
                </h2>
              </div>
              <p className="text-espresso/70 max-w-2xl mb-6">{s.lead}</p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-3">
              {s.items.map((it, j) => (
                <Reveal key={j} delay={j * 0.04}>
                  <ArtifactCard
                    kind={it.kind}
                    title={it.title}
                    summary={it.summary}
                    redacted={it.redacted}
                  >
                    <p>{it.body}</p>
                  </ArtifactCard>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA back to work */}
      <section className="mt-20">
        <Reveal>
          <div className="rounded-2xl border-2 border-espresso bg-parchment paper p-6 md:p-8 shadow-chunk">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50 mb-2">
                  see how these pieces come together
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-espresso">
                  head to the case studies
                </h3>
              </div>
              <Link href="/" className="btn-chunk shrink-0">
                selected work <span>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
