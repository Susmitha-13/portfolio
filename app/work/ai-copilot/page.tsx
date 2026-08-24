import { CaseStudyHeader } from "@/components/case/CaseStudyHeader";
import { Section } from "@/components/case/Section";
import { DiscoveryList } from "@/components/case/DiscoveryList";
import { Framing } from "@/components/case/Framing";
import { ArchDiagram } from "@/components/case/ArchDiagram";
import { ArtifactCard, ArtifactGroup } from "@/components/case/ArtifactCard";
import { Evolution } from "@/components/case/Evolution";
import { MetricGrid } from "@/components/case/MetricGrid";
import { DecisionList } from "@/components/case/Decisions";
import { CrossLink } from "@/components/case/CrossLink";
import { nextCase } from "@/lib/cases";

export default function AICopilotCase() {
  const next = nextCase("ai-copilot");
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      <CaseStudyHeader
        kicker="case 01 · vantedge ai (yc w22) · flagship"
        title={
          <>
            ai copilot<span className="text-terra">.</span>
          </>
        }
        subtitle="Context-aware agentic interface to a financial workspace"
        intro={
          <>
            This isn&apos;t a chatbot. It&apos;s a{" "}
            <span className="hl-terra">
              context-aware agentic interface
            </span>{" "}
            to a financial platform. Users shouldn&apos;t have to know
            <em> where </em>information lives in a complex workspace to ask
            a question — the Copilot understands the question, the screen
            they&apos;re on, and the workspace they&apos;re in, then
            decomposes intent, plans the query, retrieves and verifies the
            underlying data, and returns an answer with source citations.
          </>
        }
        tags={[
          "Context-aware agentic UX",
          "Intent decomposition",
          "Query planning",
          "Tool / API retrieval",
          "Grounded verification",
          "Financial workflows",
        ]}
        headline={[
          { value: "page = prompt", label: "the load-bearing product decision", color: "#4A5FC1" },
          { value: "3 lanes", label: "Financial Q&A · Guidance · Automation", color: "#6FA69A" },
          { value: "solo PM + AI eng", label: "single ownership across product & build", color: "#E8B84A" },
        ]}
      />

      {/* Ownership tag */}
      <section className="mt-8">
        <div className="rounded-2xl border-2 border-espresso bg-parchment p-5 md:p-6 shadow-chunk">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50">
            ownership
          </div>
          <div className="mt-1 font-serif text-xl text-espresso">
            Solo Product Manager &amp; AI Engineer.
          </div>
          <p className="mt-1 text-espresso/80 leading-relaxed max-w-3xl">
            Owned product discovery, architecture, interaction design,
            agent orchestration, API / data retrieval strategy,
            acceptance criteria, evaluation, testing, and implementation.
          </p>
        </div>
      </section>

      {/* 01 */}
      <Section n="01" kicker="the problem" title={<>users shouldn&apos;t have to know <em>where</em> info lives.</>}>
        <p>
          A hedge-fund analyst wants to know a specific fund&apos;s NAV
          on a specific date. To find it in a full financial workspace,
          they navigate to Reporting → open the fund view → filter by
          date → cross-check a capital-account report. Three screens,
          two tables, a lookup. The information is right there — the
          product just made them earn it.
        </p>
        <p className="mt-3">
          The real product problem isn&apos;t &ldquo;we need AI.&rdquo;
          It&apos;s that a complex financial workspace forces users to
          be system engineers. The Copilot exists to invert that — the
          user asks in natural language, in context, and the system
          figures out the rest.
        </p>
      </Section>

      {/* 02 */}
      <Section
        n="02"
        kicker="what I discovered"
        title={<>the page is <span className="hl-sage">already the context</span>. we were ignoring it.</>}
      >
        <DiscoveryList
          items={[
            {
              channel: "Analyst / GP / CFO interviews",
              finding: "The same complaint: 'why do I have to know where this lives?'",
              detail:
                "Every persona said navigation cost outweighed analysis cost. The AI was expected to close that gap.",
            },
            {
              channel: "Live workflow observation",
              finding: "Users had already navigated to the relevant screen — then re-typed the whole context to a chatbot.",
              detail:
                "The context is already on the user's screen. Asking them to re-specify was a UX failure, not a model failure.",
            },
            {
              channel: "Competitive research on enterprise copilots",
              finding: "Most enterprise copilots are stateless. They fail on ambiguous questions in a workspace.",
              detail:
                "Nobody was treating the current page + workspace ID as first-class context.",
            },
            {
              channel: "Question-taxonomy analysis (60+ real questions)",
              finding: "Users' asks clustered into three lanes, not one.",
              detail:
                "Financial Q&A · Product Guidance · Automation. Each needed different tools and different guardrails.",
            },
            {
              channel: "Failure-mode audit of a stateless prototype",
              finding: "Without intent decomposition, ambiguous questions produced confident-wrong answers.",
              detail:
                "The bottleneck wasn't retrieval — it was planning.",
            },
            {
              channel: "Data-source inventory",
              finding: "Answers live across 40+ reports, tables, and APIs. Nobody knew all of them by heart.",
              detail:
                "A source identifier had to be a first-class step, not a retrieval side-effect.",
            },
          ]}
        />
      </Section>

      {/* 03 */}
      <Section n="03" kicker="how I framed the problem" title={<>a system, not a chatbox.</>}>
        <Framing
          user="Any FundOS user on any screen — analysts, GPs, LPs, CFO teams. Cross-persona, cross-module."
          job="Ask a question in natural language and get a verified answer without navigating manually across reports, tables, and APIs."
          pain="Navigation cost > analysis cost. Ambiguous questions in stateless chatbots produce confident-wrong answers. No trust without a source."
          constraints="Grounded outputs with citations · sub-6-second latency budget · guardrails (PII, refusals, fallbacks) · works across FundOS modules · degrades gracefully on unknown data."
          success="Time-to-answer · citation correctness · task completion (cross-module) · answer-preferred-over-search rate · user trust index."
        />
      </Section>

      {/* 04 */}
      <Section n="04" kicker="product architecture" title={<>the copilot pipeline.</>}>
        <ArchDiagram
          title="input · plan · retrieve · verify · answer"
          layers={[
            {
              kind: "row",
              nodes: [
                { label: "user question", color: "#F7ECD8" },
                { label: "current page · UI context", color: "#F5DFC6" },
                { label: "workspace id", color: "#F5DFC6" },
              ],
            },
            {
              kind: "row",
              nodes: [
                { label: "intent + context decomposition", color: "#4A5FC1" },
              ],
            },
            {
              kind: "row",
              nodes: [{ label: "query planning", color: "#6FA69A" }],
            },
            {
              kind: "row",
              nodes: [
                { label: "identify relevant report / table / API", color: "#E8B84A" },
              ],
            },
            {
              kind: "row",
              nodes: [{ label: "data retrieval", color: "#D97757" }],
            },
            {
              kind: "row",
              nodes: [
                { label: "verification", color: "#B85C3E", detail: "grounded · citation-backed" },
              ],
            },
            {
              kind: "row",
              nodes: [
                { label: "answer + citations", color: "#E8A5A5" },
              ],
            },
          ]}
        />

        <div className="mt-8">
          <ArchDiagram
            title="capability layer · three lanes"
            layers={[
              { kind: "row", nodes: [{ label: "AI COPILOT", color: "#2A1F1A" }] },
              {
                kind: "fanout",
                label: "router",
                color: "#F5DFC6",
                children: [
                  { label: "Financial Q&A", color: "#4A5FC1" },
                  { label: "Product Guidance", color: "#6FA69A" },
                  { label: "Automation", color: "#E8B84A" },
                ],
              },
            ]}
          />

          <div className="mt-4 grid md:grid-cols-3 gap-3">
            <div className="rounded-2xl border-2 border-espresso bg-parchment p-4 shadow-chunk">
              <div className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                lane · financial Q&amp;A
              </div>
              <ul className="mt-1 text-sm text-espresso/85 leading-relaxed list-disc pl-4 space-y-0.5">
                <li>NAV, capital accounts, management fees</li>
                <li>Report data — filings, statements, waterfalls</li>
                <li>Cross-report calculations</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-espresso bg-parchment p-4 shadow-chunk">
              <div className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                lane · product guidance
              </div>
              <ul className="mt-1 text-sm text-espresso/85 leading-relaxed list-disc pl-4 space-y-0.5">
                <li>&ldquo;How do I…?&rdquo; in-workspace help</li>
                <li>Navigation shortcuts to the right module</li>
                <li>Workflow assistance across modules</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-espresso bg-parchment p-4 shadow-chunk">
              <div className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                lane · automation
              </div>
              <ul className="mt-1 text-sm text-espresso/85 leading-relaxed list-disc pl-4 space-y-0.5">
                <li>Meeting notes · transcripts</li>
                <li>LP summaries</li>
                <li>Repeatable prep workflows</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-espresso/25 p-4 md:p-5 bg-parchment/70">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60 mb-1">
            the product decision worth remembering
          </div>
          <p className="text-espresso/85 text-sm leading-relaxed">
            <b>The page itself becomes part of the prompt.</b> The
            Copilot doesn&apos;t just read the question — it reads{" "}
            <em>question + current screen + workspace</em> together and
            infers likely intent. That&apos;s the difference between a
            stateless chatbot and a context-aware system.
          </p>
        </div>
      </Section>

      {/* 05 */}
      <Section n="05" kicker="the artifacts" title={<>the layer under the answer.</>}>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ArtifactGroup title="product artifacts">
            <ArtifactCard
              kind="PRD"
              title="AI Copilot v1 PRD"
              summary="scope, ownership, acceptance criteria, guardrails, eval plan"
              redacted
            >
              <p>
                Sections: <b>problem statement</b>, <b>users &amp;
                jobs</b> across four personas, <b>context-as-prompt
                principle</b>, per-lane acceptance criteria,{" "}
                <b>guardrails</b> (PII, refusal, fallback), <b>success
                metrics</b>, <b>eval plan</b>, <b>rollout &amp;
                monitoring</b>.
              </p>
              <p className="mt-2">
                Full redacted PDF available on request via{" "}
                <a href="/contact" className="underline hover:text-terra">
                  contact
                </a>
                .
              </p>
            </ArtifactCard>
            <ArtifactCard
              kind="Interaction design"
              title="Copilot surface across modules"
              summary="persistent panel · inline invocations · citation drawer"
            >
              Interaction pattern: the Copilot lives at the workspace
              shell, reads the current module and selection, and opens
              a citation drawer next to any numeric answer.
            </ArtifactCard>
            <ArtifactCard
              kind="Question taxonomy"
              title="60+ real user questions → 3 lanes"
              summary="analysis behind Financial Q&A · Guidance · Automation"
              redacted
            >
              Question clustering that produced the three-lane
              architecture. Each lane has its own tools, its own
              rubric, its own iteration cadence.
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="AI artifacts">
            <ArtifactCard
              kind="Intent decomposition"
              title="Prompt that parses question + page + workspace"
              summary="turns ambiguous input into a structured plan"
              redacted
            >
              <pre className="bg-parchment border border-espresso/30 p-2 rounded text-xs overflow-x-auto">
{`{
  "intent":      "financial_qa | guidance | automation",
  "entities":    [{type, value, source_hint}],
  "time_frame":  {start, end, resolution},
  "workspace":   {id, module, current_selection},
  "clarifications_needed": [...]
}`}
              </pre>
            </ArtifactCard>
            <ArtifactCard
              kind="Query planner"
              title="Plan → data-source resolution"
              summary="maps intent to reports · tables · APIs"
            >
              A structured planner that turns the decomposed intent
              into an ordered set of data-source calls. Handles
              cross-report dependencies (e.g. NAV needs positions,
              positions need prices).
            </ArtifactCard>
            <ArtifactCard
              kind="Verification"
              title="Grounded-output check before answering"
              summary="every numeric assertion must trace to a source row"
            >
              <p>
                No answer ships without every claim traceable to a
                report / table / API row. Faithfulness veto — if a
                citation can&apos;t be resolved back, the answer is
                withheld with an explanation.
              </p>
            </ArtifactCard>
            <ArtifactCard
              kind="Eval framework"
              title="Per-lane golden sets"
              summary="Financial Q&A · Guidance · Automation each score independently"
            >
              Three golden sets, one per lane. A Guidance regression
              can&apos;t block a Q&amp;A release. Eval gate blocks
              promotion if any lane&apos;s rubric drops.
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="execution artifacts">
            <ArtifactCard
              kind="Rollout"
              title="Staged: internal shadow → 3 pilots → cohort → GA"
              summary="per-lane rollout, not global"
            >
              Each lane rolled out on its own cadence. Financial Q&amp;A
              first (highest trust bar), Guidance second, Automation
              third.
            </ArtifactCard>
            <ArtifactCard
              kind="Feedback loop"
              title="Every 'wrong' answer becomes a labeled case"
              summary="tagged by lane, root cause, and fix"
              redacted
            >
              Reviewer edits + user thumbs feed a weekly tagging
              session; each tag becomes a prompt / plan / source-
              identifier fix in the next release.
            </ArtifactCard>
            <ArtifactCard
              kind="Ops"
              title="Cross-module incident drill"
              summary="what happens if the planner picks a wrong source"
            >
              End-to-end drill covering source misidentification,
              retrieval failure, and verification veto. The drill
              matters more than the doc.
            </ArtifactCard>
          </ArtifactGroup>
        </div>
      </Section>

      {/* 06 */}
      <Section n="06" kicker="what didn't work" title={<>versions that shipped, and versions that got scrapped.</>}>
        <Evolution
          steps={[
            {
              label: "v1",
              what: "Stateless chatbot on a global knowledge base.",
              problem: "Users had to re-specify the workspace and screen in every question. Ambiguity produced confident-wrong answers.",
              insight: "The context is already on the user's screen. Ignoring it wasn't a limitation — it was a UX bug.",
              change: "Pipe current page + workspace ID into the prompt itself.",
            },
            {
              label: "v2",
              what: "Context-aware prompt, but no intent decomposition.",
              problem: "Better on unambiguous asks, still confident-wrong on 'why is X different from Y?' style questions.",
              insight: "The bottleneck moved from context to planning. Ambiguous questions need a plan, not a bigger model.",
              change: "Added an explicit intent + entity + time-frame decomposition step before retrieval.",
            },
            {
              label: "v3",
              what: "Decomposition + retrieval, no verification gate.",
              problem: "Correct on structured questions, but nothing forced the model to prove its answer.",
              insight: "Users don't trust unverifiable answers even when they happen to be right.",
              change: "Added a verification step — every numeric claim must trace to a source row or the answer is withheld.",
            },
            {
              label: "v4 (current)",
              what: "Context + decomposition + planner + verification + citations · three-lane router.",
              problem: "No fundamental gap — refinements are per-lane eval and per-source planner tuning.",
              insight: "A copilot is a system, not a chatbox. Every stage in the pipeline earns its keep by an eval or a guardrail.",
              result: "Shipping to internal shadow · pilot cohort next",
            },
          ]}
        />
      </Section>

      {/* 07 */}
      <Section n="07" kicker="metrics" title={<>what we&apos;re holding the copilot to.</>}>
        <MetricGrid
          metrics={[
            { value: "time-to-answer", label: "reduce vs. manual navigation baseline", color: "#4A5FC1" },
            { value: "citation-correctness", label: "share of numeric claims traceable to source", color: "#6FA69A" },
            { value: "answer-preferred", label: "% users pick copilot over search", color: "#E8B84A" },
            { value: "cross-module task", label: "completion rate for questions spanning >1 module", color: "#D97757" },
            { value: "verification veto", label: "% of answers withheld for unresolvable citations", color: "#B85C3E" },
            { value: "clarify rate", label: "questions requiring a follow-up before answer", color: "#E8A5A5" },
          ]}
        />
        <div className="mt-6 rounded-2xl border-2 border-espresso bg-parchment p-5 shadow-chunk">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60 mb-1">
            metrics I invented for this product
          </div>
          <ul className="text-espresso/85 space-y-1 text-sm leading-relaxed">
            <li>
              · <b>Context-hit rate</b> — % of questions the Copilot could answer using the current page as primary context.
            </li>
            <li>
              · <b>Plan quality</b> — reviewer score on the decomposition step, independent of final answer.
            </li>
            <li>
              · <b>Verification veto rate</b> — a healthy floor, not a ceiling; if it hits zero, verification is theatre.
            </li>
          </ul>
        </div>
      </Section>

      {/* 08 */}
      <Section
        n="08"
        kicker="product decisions I made"
        title={<>the calls that shape the system.</>}
        tone="accent"
      >
        <DecisionList
          items={[
            {
              question: "Context-aware from day one, or start stateless and iterate?",
              chose: "Context-aware — the page + workspace go into the prompt as first-class input.",
              why: "The context is already on the user's screen. Building a stateless system first would have hard-coded the wrong mental model into the product.",
              defended: "More engineering work upfront (context extraction across modules). Paid back the first time a user asked 'what's the NAV?' without saying which fund.",
            },
            {
              question: "Decompose intent before retrieval, or one-shot?",
              chose: "Explicit intent + entities + time-frame decomposition step.",
              why: "Ambiguous financial questions don't have one right answer. Planning is what turns 'why is X different from Y' into a runnable query.",
            },
            {
              question: "Verify every answer, or trust the model?",
              chose: "Verification is a first-class stage. No numeric claim ships without a resolvable source citation.",
              why: "In finance, unverifiable answers destroy trust even when they're right. The veto is what lets analysts actually use the tool.",
            },
            {
              question: "One big surface, or three capability lanes?",
              chose: "Three lanes — Financial Q&A, Product Guidance, Automation — each with its own tools, evals, guardrails.",
              why: "Lanes have different trust bars. Financial Q&A can't be delayed by a Guidance regression; Automation can afford more experimentation than Financial Q&A.",
            },
            {
              question: "Build the pipeline in-house, or wire a framework?",
              chose: "Built the decomposition + planner + verification stages in-house on Vantedge's orchestration layer.",
              why: "Frameworks assumed a stateless chat pattern. Our load-bearing decision — page as prompt — didn't map cleanly. Also: we already had the platform layer (orchestration · evals · guardrails · billing) to sit on.",
            },
          ]}
        />
      </Section>

      {/* 09 */}
      <Section
        n="09"
        kicker="what I learned"
        title={<>a copilot is a system, not a chatbox.</>}
        tone="dark"
      >
        <div className="grid md:grid-cols-3 gap-5">
          <p>
            Context is a prompt input, not a prompt hint. Once you
            treat the current page + workspace as first-class context,
            half of the &ldquo;chatbot doesn&apos;t understand
            me&rdquo; complaints disappear.
          </p>
          <p>
            The bottleneck in enterprise AI copilots is planning, not
            retrieval. Ambiguous questions need a decomposition step.
            A larger model doesn&apos;t rescue you from a missing plan.
          </p>
          <p>
            Verification is UX. Users don&apos;t trust unverifiable
            answers even when they happen to be right — and the fastest
            way to build trust in an AI product is to let the answer
            withhold itself when it can&apos;t prove the source.
          </p>
        </div>
      </Section>

      <CrossLink
        title={next.title}
        detail={next.outcome[0]}
        href={`/work/${next.slug}`}
      />
    </div>
  );
}
