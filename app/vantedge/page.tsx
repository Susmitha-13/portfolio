import { KpiCounter } from "@/components/KpiCounter";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import Link from "next/link";

type Kpi = {
  value: number;
  suffix: string;
  label: string;
  detail: string;
  color: string;
  prefix?: string;
};

const kpis: Kpi[] = [
  {
    value: 90,
    suffix: "%+",
    label: "extraction accuracy",
    detail: "across hundreds of documents per chat — each hundreds of pages long (prompts v1→v4)",
    color: "#4A5FC1",
  },
  {
    value: 58,
    suffix: "%",
    label: "underwriting time cut",
    detail: "MCA underwriting workflow (US & Europe) with a fine-tuned domain LLM",
    color: "#D97757",
  },
  {
    value: 3,
    suffix: "d",
    prefix: "3w → ",
    label: "client TTV",
    detail: "at a Tier-1 fund client via embedded FDE-style delivery",
    color: "#6FA69A",
  },
  {
    value: 11,
    suffix: "+",
    label: "FundOS modules",
    detail: "Deal CRM · LP CRM · ODD/VDR · Investor Portal · CFO Center · DSRI Risk · Pricer · HF Ops",
    color: "#E8B84A",
  },
  {
    value: 10,
    suffix: "+",
    label: "domain agents",
    detail: "Research · AI Analyst · Valuation · Portfolio Monitoring · SEC · BondBot",
    color: "#B85C3E",
  },
  {
    value: 150,
    suffix: "",
    label: "eval golden-set cases",
    detail: "gating every model release across accuracy, faithfulness, citation, format",
    color: "#E8A5A5",
  },
];

const decisions = [
  {
    title: "Knowledge graph + hybrid retrieval, not vector-only RAG",
    body: "When a single analyst chat pulls from hundreds of documents — each hundreds of pages — generic chunk-based retrieval flattens everything. I pushed for a custom knowledge graph with hybrid retrieval (semantic + graph traversal + BM25) so the model retrieves at the section level — Main Agreement, Schedule, Amendment — with amendment overrides applied correctly across the whole corpus.",
    defended: "Cost + complexity vs. vector-only. Won on citation correctness.",
  },
  {
    title: "Section-level citations gating every output",
    body: "The insight: users don't need a smarter model — they need to verify the claim in seconds. Every extracted field ships with a source quote and a click-through to the exact clause. If a citation fails, the extraction score drops to zero in evals.",
    defended: "'Verifiability > accuracy' — the metric changed the roadmap.",
  },
  {
    title: "Embedded, forward-deployed delivery over support tickets",
    body: "For early enterprise clients — hedge funds, PE, private credit, VC — I ran technical discovery + scoping in-person, then embedded to ship the production integration. Cut client TTV at a Tier-1 fund from 3 weeks → 3 days.",
    defended: "Doesn't scale forever — but shortened the trust curve when it mattered most.",
  },
  {
    title: "Per-module SKUs + usage credits, not one flat price",
    body: "Vantedge sells across 11+ modules. A flat price would have punished small-fund adoption. I built the billing model — Stripe self-serve, seat-based, per-module SKUs, usage-based credit metering, 3-stage automated dunning — so clients only pay for the surfaces they actually use.",
    defended: "More engineering complexity, better trial-to-paid. Cut involuntary churn and DSO.",
  },
];

const implementation = [
  {
    kicker: "my process",
    title: "Users → problem → prototype → team ideation → PRD",
    body: "I don't start with a spec. I start with the user — direct conversations if the client is open to them, otherwise deep problem-statement and requirements analysis. Then I sketch prototypes / low-fi designs. Then the team ideates at the product level. Only then does the PRD get written. This has run across every module in FundOS and every agent in the suite.",
  },
  {
    kicker: "PRD craft",
    title: "Guardrails in the spec, not the retro",
    body: "Every PRD ships with user stories, acceptance criteria, and an AI guardrails section — PII handling, refusal logic, fallback behaviors. Product + safety in the same doc so no launch relearns the same lessons.",
  },
  {
    kicker: "prompting",
    title: "Prompts v1 → v4 on massive multi-doc chats",
    body: "Iterated production prompts on chats that pull hundreds of documents at once — each hundreds of pages long. Structured JSON schemas with source-quote fields, sectioned retrieval (Main / Schedules / Amendments), few-shot examples for amendment-override edge cases. v1 was 61% accurate; v4 crossed 90%.",
  },
  {
    kicker: "domain fine-tuning",
    title: "QLoRA-fine-tuned model for MCA underwriting",
    body: "Contributed to the AI underwriting workflow for MCA applications (US & Europe). A QLoRA/PEFT-fine-tuned domain LLM handled high-accuracy underwriting decisions; I owned the evaluation criteria, HITL integration, and citation-backed output design.",
  },
  {
    kicker: "eval harness",
    title: "Rubric-scored golden set, live regression",
    body: "The framework that gates every model release. Rubric-based scoring across accuracy, faithfulness, citation correctness, completeness, and format adherence. Golden set of ~150 cases spanning document types. Live latency, regression, and token tracking so a bad prompt can't reach prod.",
  },
  {
    kicker: "HITL system",
    title: "Reviewer dashboards that become labeled data",
    body: "Designed the thumbs / edits UI, an error-tagging schema, and reviewer dashboards. Every production interaction becomes a labeled example that feeds the next prompt / schema / eval iteration.",
  },
  {
    kicker: "monetization",
    title: "The whole Stripe stack",
    body: "Self-serve Stripe, seat-based + per-module SKUs, usage-based credit metering, a 3-stage automated dunning ladder that cut involuntary churn and DSO. Contributed to pricing decisions through funnel and cohort analysis.",
  },
];

export default function VantedgePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      {/* Header */}
      <section className="pt-8 md:pt-14">
        <Reveal>
          <div className="chip mb-6">
            case study · fintech · vantedge ai (yc w22)
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-5xl md:text-7xl text-espresso leading-[0.95]">
            trust is the{" "}
            <span className="hl-terra">product</span>
            <span className="text-terra">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-espresso/75 text-lg leading-relaxed">
            I contribute to product & UI design across FundOS — Vantedge's
            AI-native OS for hedge funds, PE, private credit, and VC. My work
            isn't PRD-first. It's{" "}
            <span className="hl-sage">users first</span> — direct conversations
            when I can get them, deep problem-statement analysis when I can't
            — then prototypes, then team ideation, then the PRD. That process
            has run across every module in FundOS and every agent in the
            suite.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "PRDs",
              "AI Guardrails",
              "Embedded Delivery",
              "Eval Harness",
              "HITL Design",
              "Pricing & Billing",
              "0 → 1 GTM",
            ].map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* KPIs */}
      <section className="mt-14 md:mt-16">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {kpis.map((k, i) => (
              <TiltCard key={i} maxTilt={7} className="h-full">
                <div
                  className="rounded-2xl border-2 border-espresso h-full p-5 shadow-chunk relative overflow-hidden"
                  style={{ background: `${k.color}18` }}
                >
                  <div
                    className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-30"
                    style={{ background: k.color }}
                  />
                  <div className="relative">
                    <div className="font-serif text-4xl md:text-5xl text-espresso leading-none tabular-nums">
                      {k.prefix ?? ""}
                      <KpiCounter value={k.value} suffix={k.suffix} decimals={0} />
                    </div>
                    <div className="mt-3 font-mono text-xs uppercase tracking-widest text-espresso font-semibold">
                      {k.label}
                    </div>
                    <div className="mt-1 text-xs text-espresso/70 leading-snug">
                      {k.detail}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </Reveal>
      </section>

      {/* THE PROBLEM — YC pivots */}
      <section className="mt-20">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50 mb-3">
            01 · the problem I was solving
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
            enterprise funds want AI. they don&apos;t want to trust it. also, the
            product kept changing shape.
          </h2>
          <p className="text-espresso/80 leading-relaxed max-w-3xl">
            A hedge fund analyst spends up to two days pulling numbers,
            clauses, and covenants out of a data room to write a single memo.
            They&apos;d love AI to speed that up — but a hallucinated covenant
            term or a wrong price on a term sheet is a career risk, not a UX
            bug.
          </p>
          <p className="mt-4 text-espresso/80 leading-relaxed max-w-3xl">
            On top of that, being YC we pivoted fast: we went from{" "}
            <span className="hl">agents-only</span> to{" "}
            <span className="hl-terra">MCA underwriting</span> to{" "}
            <span className="hl-sage">FundOS + agent suite</span> in months, not
            quarters. My job was to keep the product coherent through those
            pivots — carrying user insight, prototype patterns, and evaluation
            discipline across every reshape.
          </p>

          {/* mini pivot timeline */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                phase: "pivot 01",
                t: "agents-only",
                d: "Individual domain agents (Research, AI Analyst, Valuation) shipped as standalone LLM tools.",
                c: "#E8B84A",
              },
              {
                phase: "pivot 02",
                t: "MCA underwriting",
                d: "Focused vertical: an AI underwriting workflow for US & Europe MCA applicants, with a QLoRA-fine-tuned domain model.",
                c: "#D97757",
              },
              {
                phase: "now",
                t: "FundOS + agent suite",
                d: "The current product — 11+ integrated modules with the 10+ agent suite embedded across them.",
                c: "#6FA69A",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-espresso bg-parchment p-4 shadow-chunk"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ background: p.c }}
                  />
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50">
                    {p.phase}
                  </div>
                </div>
                <div className="mt-1 font-serif text-lg text-espresso">
                  {p.t}
                </div>
                <div className="mt-1 text-xs text-espresso/70 leading-snug">
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* THE REAL FRICTION */}
      <section className="mt-16">
        <Reveal>
          <div className="rounded-3xl border-2 border-espresso bg-espresso text-cream p-6 md:p-10 shadow-chunklg">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mustard mb-3">
              02 · how I found the real friction
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-cream leading-tight">
              accuracy wasn't the bottleneck.{" "}
              <span className="text-mustard">verifiability</span> was.
            </h2>
            <p className="mt-6 text-cream/85 leading-relaxed max-w-3xl">
              The v1 extraction was already 88% accurate. Analysts still
              re-read every line — because they had no way to see{" "}
              <em>where</em> a number came from. When I timed them, the
              bottleneck wasn't the model reading the doc — it was them
              re-reading the doc to check the model.
            </p>
            <p className="mt-4 text-cream/85 leading-relaxed max-w-3xl">
              That rewrote the roadmap. The next release wasn't about
              squeezing 2 more accuracy points — it was about designing a UX
              where <span className="text-mustard font-semibold">every
              extracted field opens the source clause in one click</span>. Trust
              stopped being a nice-to-have and became the product surface.
            </p>
          </div>
        </Reveal>
      </section>

      {/* DECISIONS DEFENDED */}
      <section className="mt-20">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50 mb-3">
            03 · the decisions I had to defend
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-8">
            four calls that were louder than they look
          </h2>
        </Reveal>

        <div className="space-y-5">
          {decisions.map((d, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="rounded-2xl border-2 border-espresso bg-parchment p-6 md:p-7 shadow-chunk">
                <div className="flex items-baseline gap-3">
                  <div className="font-serif text-4xl text-terra/60">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif text-2xl text-espresso leading-tight">
                    {d.title}
                  </h3>
                </div>
                <p className="mt-3 text-espresso/80 leading-relaxed">{d.body}</p>
                <div className="mt-3 pt-3 border-t border-dashed border-espresso/25 font-mono text-xs text-espresso/60">
                  <span className="uppercase tracking-widest text-espresso/40">
                    defended:{" "}
                  </span>
                  {d.defended}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="mt-20">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50 mb-3">
            04 · implementation
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-6">
            what actually got shipped
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {implementation.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl border-2 border-espresso bg-parchment p-6 shadow-chunk h-full">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60">
                  {p.kicker}
                </div>
                <h3 className="mt-2 font-serif text-xl text-espresso leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-espresso/80 leading-relaxed text-sm">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT I LEARNED */}
      <section className="mt-20">
        <Reveal>
          <div className="rounded-2xl border-2 border-espresso bg-terra/20 p-6 md:p-10 shadow-chunklg">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60 mb-3">
              05 · what I learned
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-tight">
              at enterprise scale, the eval harness{" "}
              <span className="hl">is the product roadmap</span>.
            </h2>
            <div className="mt-5 grid md:grid-cols-3 gap-4 text-espresso/85 leading-relaxed">
              <p>
                Trust is unlockable, but only through UX design. Confidence
                scores, inline citations, and one-click source-jumps moved the
                verification-time metric more than any model change.
              </p>
              <p>
                Every model release ships with an eval, or it doesn't ship.
                Rubric-based golden sets aren't overhead — they're how you sleep
                at night when a real fund is trading against your outputs.
              </p>
              <p>
                Forward-deployed early. Support tickets late. The information
                you get from sitting next to a user for two days is not in
                Amplitude.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Cross-link to edtech case study */}
      <section className="mt-14">
        <Reveal>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-espresso/40 p-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50">
                next case study
              </div>
              <div className="mt-1 font-serif text-2xl text-espresso">
                edtech · scholar planet
              </div>
              <p className="text-espresso/70 text-sm mt-1">
                A different world — students & teachers instead of hedge funds — same
                obsession with the metric.
              </p>
            </div>
            <Link href="/scholar-planet" className="btn-chunk shrink-0">
              read edtech <span>→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
