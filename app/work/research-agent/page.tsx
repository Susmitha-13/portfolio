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

export default function ResearchAgentCase() {
  const next = nextCase("research-agent");
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      <CaseStudyHeader
        kicker="case 01 · vantedge ai (yc w22) · fintech"
        title={
          <>
            research agent<span className="text-terra">.</span>
          </>
        }
        subtitle="AI research for financial analysts"
        intro={
          <>
            Analysts at hedge funds and PE shops were spending significant time
            researching across dozens of documents to write a single memo. A
            first-pass research report took roughly <b>~20 minutes</b>. My
            job wasn&apos;t to add another button — it was to figure out{" "}
            <em>where those 20 minutes were actually going</em>, and design
            what should be there instead.
          </>
        }
        tags={[
          "AI product",
          "Agentic architecture",
          "Evals",
          "Prompt design",
          "Latency",
          "Trust UX",
        ]}
        headline={[
          { value: "20 → 5 min", label: "research latency", color: "#4A5FC1" },
          { value: "78 → 98%", label: "extraction accuracy", color: "#6FA69A" },
          { value: "4 → 100+", label: "enterprise clients", color: "#E8B84A" },
        ]}
      />

      {/* 01 — the problem */}
      <Section n="01" kicker="the problem" title={<>what was broken.</>}>
        <p>
          A single research report — say, &ldquo;summarise the covenant
          package and risk profile of this borrower across their filings
          and last four amendment letters&rdquo; — took an analyst ~20
          minutes with the v1 workflow. The v1 was a single long-running
          LLM call: dump everything in, hope the model figures it out.
        </p>
        <p className="mt-3">
          It shipped. Accuracy hovered around 78%. Analysts still opened
          the source PDFs to check every number. Nobody said the product
          was bad — but nobody used it twice in the same day either.
        </p>
      </Section>

      {/* 02 — what I discovered */}
      <Section
        n="02"
        kicker="what I discovered"
        title={<>the friction wasn&apos;t the model. it was <span className="hl-sage">everything around it.</span></>}
      >
        <p>
          I ran discovery in three parallel tracks — talking to users,
          watching their workflow live, and doing the technical read on
          why v1 was slow.
        </p>
        <DiscoveryList
          items={[
            {
              channel: "Client interviews",
              finding: "Analysts didn't want faster AI. They wanted verifiable AI.",
              detail:
                "5 clients. Every one of them said the same thing: 'if I have to open the PDF anyway, this saves me nothing.'",
            },
            {
              channel: "Workflow observation",
              finding: "The 20 minutes was mostly re-reading, not model latency.",
              detail:
                "Watched 3 analysts side-by-side. Model returned in ~90s. The other 18 minutes were them verifying.",
            },
            {
              channel: "Pain points",
              finding: "Different tasks inside one prompt = model confusion.",
              detail:
                "Summarise + extract + compare + reason — the v1 prompt asked the model to do all four in one shot.",
            },
            {
              channel: "Existing workflow",
              finding: "Bloomberg + PDFs + Excel + Slack = 4 tab-switches per fact.",
              detail:
                "The existing product had to compete with mental context-switch cost, not just other tools.",
            },
            {
              channel: "Competitive research",
              finding: "Every competitor optimises the model. Nobody optimises the trust surface.",
              detail:
                "Wrote up 6 competing tools — Hebbia, AlphaSense, etc. None showed citations at the sub-section level.",
            },
            {
              channel: "Technical research",
              finding: "One big prompt was untestable, unshippable, and slow.",
              detail:
                "Long-tail requests hit context ceilings; no way to eval individual reasoning steps.",
            },
          ]}
        />
      </Section>

      {/* 03 — how I framed it */}
      <Section
        n="03"
        kicker="how I framed the problem"
        title={<>from insight to a shipping-quality frame.</>}
      >
        <p>
          Discovery is only useful if it collapses into a decision-making
          artefact. I wrote the framing block below on day 7 and it stayed
          intact through every ideation session.
        </p>
        <div className="mt-6">
          <Framing
            user="Credit / research analyst at a hedge fund, PE, or private-credit shop."
            job="Generate a reliable research memo from a large, messy document set — filings, term sheets, amendments — that a portfolio manager will act on."
            pain="Slow (20 min baseline), inconsistent (accuracy ~78%), and impossible to validate without opening every source."
            constraints="Enterprise trust: citations, guardrails, PII. Latency budget: sub-6 min per report. Cost budget: bounded per query."
            success="Extraction accuracy · time-to-verified-answer · agent success rate · analyst edit rate. Trust is the load-bearing metric."
          />
        </div>
      </Section>

      {/* 04 — architecture */}
      <Section
        n="04"
        kicker="product architecture"
        title={<>one big prompt → an <span className="hl-terra">orchestrated agent suite</span>.</>}
      >
        <p>
          The single call model couldn&apos;t be evaluated, couldn&apos;t
          be parallelised, and couldn&apos;t be selectively improved. So
          we broke it into specialist agents on a task graph, each with
          its own prompt, tools, and eval rubric.
        </p>
        <div className="mt-6">
          <ArchDiagram
            title="the research agent, at a layer level"
            layers={[
              { kind: "row", nodes: [{ label: "documents", color: "#F7ECD8" }] },
              {
                kind: "row",
                nodes: [
                  { label: "OCR + extraction", color: "#F5DFC6" },
                  { label: "chunking + section tagging", color: "#F5DFC6" },
                ],
              },
              {
                kind: "row",
                nodes: [
                  { label: "hybrid retriever", color: "#6FA69A", detail: "semantic + graph + BM25" },
                ],
              },
              {
                kind: "fanout",
                label: "orchestrator",
                color: "#2A1F1A",
                children: [
                  { label: "summariser agent", color: "#4A5FC1" },
                  { label: "extractor agent", color: "#D97757" },
                  { label: "comparator agent", color: "#6FA69A" },
                  { label: "reasoning agent", color: "#E8B84A" },
                ],
              },
              {
                kind: "row",
                nodes: [
                  { label: "eval gate", color: "#B85C3E", detail: "rubric + citation check" },
                ],
              },
              {
                kind: "row",
                nodes: [
                  { label: "final research output", color: "#E8B84A", detail: "citations + edit surface" },
                ],
              },
            ]}
          />
        </div>
        <div className="mt-5 rounded-2xl border border-espresso/25 p-4 md:p-5 bg-parchment/70">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60 mb-1">
            why agents, not one giant prompt
          </div>
          <ul className="text-espresso/85 leading-relaxed list-disc pl-5 space-y-1 text-sm">
            <li>
              Each reasoning step gets its own eval — a bad summariser can be
              improved without breaking the extractor.
            </li>
            <li>Parallel execution collapses latency where tasks are independent.</li>
            <li>Failures degrade gracefully — one agent falls back, the rest continue.</li>
            <li>
              Citations get emitted at the step boundary, not stitched onto a
              monolithic answer.
            </li>
          </ul>
        </div>
      </Section>

      {/* 05 — artifacts */}
      <Section
        n="05"
        kicker="the artifacts"
        title={<>show, don&apos;t tell.</>}
      >
        <p>
          A selection of the actual work behind the case study. Some are
          redacted for client confidentiality; the shape is the same in
          real docs.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ArtifactGroup title="product artifacts">
            <ArtifactCard
              kind="PRD"
              title="Research Agent v2 PRD"
              summary="9 pages · user stories, acceptance criteria, guardrails"
              redacted
            >
              <p>
                Sections: <b>problem statement</b>, <b>users &amp;
                jobs</b>, <b>user stories</b> with acceptance criteria,{" "}
                <b>guardrails</b> (PII, refusal, fallback), <b>success
                metrics</b> (latency, extraction accuracy, agent success
                rate), <b>eval plan</b>, <b>rollout &amp; monitoring</b>.
              </p>
              <p className="mt-2">
                Full redacted PDF available on request via <a
                  href="/contact"
                  className="underline hover:text-terra"
                >
                  contact
                </a>
                .
              </p>
            </ArtifactCard>

            <ArtifactCard
              kind="User flow"
              title="Analyst → agent → report → edit loop"
              summary="4-frame flow with error and fallback states"
            >
              <pre className="bg-espresso text-cream font-mono text-xs p-3 rounded overflow-x-auto">
{`analyst asks question
  → orchestrator plans task graph
  → agents run in parallel (max 4)
  → eval gate: citations valid?
      ├─ yes → deliver with source-jump UI
      └─ no  → retry failed step
           → still bad → deliver w/ "low-confidence" tag`}
              </pre>
            </ArtifactCard>

            <ArtifactCard
              kind="Prioritization"
              title="RICE table — v2 backlog"
              summary="47 items scored; top 8 picked for v2"
              redacted
            >
              <p>
                RICE across 6 workstreams (retrieval quality, latency,
                trust UX, eval, guardrails, error tags). Kept a public
                &ldquo;deprioritized&rdquo; column so nothing died
                silently.
              </p>
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="AI artifacts">
            <ArtifactCard
              kind="Prompt diff"
              title="Extractor: v1 → v4"
              summary="From 78% to 98% on the golden set"
              redacted
            >
              <div className="grid gap-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                    v1 (single-shot)
                  </div>
                  <pre className="bg-parchment border border-espresso/30 p-2 rounded text-xs overflow-x-auto">
{`Extract all key facts from the following documents and
summarise them into a research memo. Include sources.`}
                  </pre>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                    v4 (schema-forced, sectioned, few-shot)
                  </div>
                  <pre className="bg-parchment border border-espresso/30 p-2 rounded text-xs overflow-x-auto">
{`Role: contract-extraction specialist.
For each field in <schema/>, output {value, source_quote,
doc_id, section}. Prefer the amendment when a covenant
term appears in both the main agreement and an amendment
(see few-shot). If uncertain, return null + reason.
<schema>...</schema>
<few-shot>...</few-shot>`}
                  </pre>
                </div>
              </div>
            </ArtifactCard>

            <ArtifactCard
              kind="Eval framework"
              title="Rubric scoring on the golden set"
              summary="~150 cases · 5 dimensions · faithfulness = veto"
            >
              <p>
                Every model release scored on:{" "}
                <b>accuracy</b>, <b>faithfulness</b> (any hallucinated
                citation vetoes the whole extraction to 0),{" "}
                <b>citation correctness</b>, <b>completeness</b>,{" "}
                <b>format adherence</b>. Live tracking on latency,
                regressions, token cost per run.
              </p>
            </ArtifactCard>

            <ArtifactCard
              kind="Agent orchestration"
              title="Task-graph definition (illustrative)"
              summary="orchestrator config for the research task"
            >
              <pre className="bg-espresso text-cream font-mono text-xs p-3 rounded overflow-x-auto">
{`task_graph:
  nodes:
    - summariser:  {tools: [retriever], eval: rubric.summary}
    - extractor:   {tools: [retriever], eval: rubric.extract, retries: 2}
    - comparator:  {depends_on: [extractor], eval: rubric.compare}
    - reasoning:   {depends_on: [summariser, extractor, comparator]}
  edges:
    on_fail: {extractor: fallback.extractor_v3}
    parallel: [summariser, extractor]
  eval_gate:
    require: [citations_valid, faithfulness>=0.9]`}
              </pre>
            </ArtifactCard>

            <ArtifactCard
              kind="Failure log"
              title="Ten cases the v1 model got wrong"
              summary="each with root cause, prompt fix, eval before/after"
              redacted
            >
              <p>
                Amendment-override cases (5), OCR-degraded scans (2),
                multilingual clauses (2), tables misread as prose (1).
                Each row linked to the prompt / retriever / schema fix
                that shipped.
              </p>
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="execution artifacts">
            <ArtifactCard
              kind="Tickets"
              title="Jira-style backlog (24 items)"
              summary="acceptance-criteria first, one owner each"
              redacted
            >
              <p>
                Written to acceptance-criteria first, with an eval hook
                on every AI ticket. No ticket entered &ldquo;done&rdquo;
                without passing its rubric.
              </p>
            </ArtifactCard>

            <ArtifactCard
              kind="Launch plan"
              title="Staged rollout: 3 pilot clients → GA"
              summary="pilot → cohort → GA · what unlocks each stage"
            >
              <pre className="bg-parchment border border-espresso/30 p-2 rounded text-xs overflow-x-auto">
{`stage 0 · internal shadow (1 week)
stage 1 · 3 pilot clients · daily eval review
stage 2 · cohort expansion · weekly review
stage 3 · GA · monitoring only`}
              </pre>
            </ArtifactCard>

            <ArtifactCard
              kind="Post-launch"
              title="Feedback → next iteration"
              summary="how the field-to-research loop closed weekly"
            >
              <p>
                Every reviewer edit and thumbs-down became a tagged case.
                Cases &gt;5 per week per bucket became prompt / schema /
                eval changes in the next release.
              </p>
            </ArtifactCard>
          </ArtifactGroup>
        </div>
      </Section>

      {/* 06 — what didn't work */}
      <Section
        n="06"
        kicker="what didn't work"
        title={<>the versions that shipped, and the ones that didn&apos;t.</>}
      >
        <Evolution
          steps={[
            {
              label: "v1",
              what: "Single long-running LLM call with everything in the prompt.",
              problem:
                "~20 min end-to-end, 78% extraction accuracy, hallucinated citations, impossible to eval a single reasoning step.",
              insight:
                "Different research sub-tasks need different reasoning shapes; one prompt can't be all of them.",
              change:
                "Broke the task into specialist agents, added an orchestrator + eval gate.",
              result: "~11 min, 88%",
            },
            {
              label: "v2",
              what: "Agent suite + orchestrator, prompts still handwritten from v1.",
              problem:
                "Better structure, but each agent's prompt was still a v1-style monolith. Accuracy plateaued at 88%.",
              insight:
                "Sectioned document retrieval (Main / Schedule / Amendment) was doing more work than any prompt change.",
              change:
                "Rewrote each agent's prompt with structured JSON output, source-quote fields, few-shot for amendment overrides.",
              result: "~7 min, 94%",
            },
            {
              label: "v3",
              what: "Better prompts + retries on failed steps.",
              problem:
                "Retries improved reliability but blew up p95 latency on complex asks.",
              insight:
                "Retry budget needs to be per-agent, not per-request; some agents were retrying on evals that were fine.",
              change:
                "Per-agent retry budgets, tighter eval-gate thresholds, parallelised summariser + extractor.",
              result: "~5 min, 96%",
            },
            {
              label: "v4",
              what: "Current production — citation-first UX in the output layer.",
              problem:
                "Model was fine; users still opened source PDFs to verify.",
              insight:
                "The trust bottleneck was in the UI, not the model. Show the source, don't hide it.",
              change:
                "One-click source-jump on every extracted field. Inline confidence chips. Analysts stopped opening the PDF.",
              result: "~5 min, 98%",
            },
          ]}
        />
      </Section>

      {/* 07 — metrics */}
      <Section n="07" kicker="metrics" title={<>the numbers that mattered.</>}>
        <MetricGrid
          metrics={[
            { value: "20 → 5 min", label: "research latency", color: "#4A5FC1" },
            { value: "78 → 98%", label: "extraction accuracy", color: "#6FA69A" },
            { value: "4 → 100+", label: "enterprise clients", color: "#E8B84A" },
            { value: "25+", label: "production releases", color: "#B85C3E" },
            { value: "14+", label: "client workshops", color: "#D97757" },
            { value: "~150", label: "golden-set cases", color: "#E8A5A5" },
          ]}
        />
        <div className="mt-6 rounded-2xl border-2 border-espresso bg-parchment p-5 shadow-chunk">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60 mb-1">
            metrics I invented for this product
          </div>
          <ul className="text-espresso/85 space-y-1 text-sm leading-relaxed">
            <li>
              · <b>Time-to-verification</b> — how long from AI answer → analyst
              confirms with source. Fell 4×.
            </li>
            <li>
              · <b>Citation click-through</b> — % of extracted fields where an
              analyst opened the source. Baseline of trust.
            </li>
            <li>
              · <b>Edit rate per extraction</b> — how often analysts overrode a
              field. Regression signal.
            </li>
          </ul>
        </div>
      </Section>

      {/* 08 — decisions */}
      <Section
        n="08"
        kicker="product decisions I made"
        title={<>why X, not Y.</>}
        tone="accent"
      >
        <DecisionList
          items={[
            {
              question: "Agents, not one LLM workflow?",
              chose: "A task graph of specialist agents with an eval gate.",
              why: "Independent eval per step, parallel execution where possible, failures degrade gracefully. One prompt can't be all four reasoning shapes and stay debuggable.",
              defended:
                "Higher engineering complexity and more moving parts. Justified by eval regression rate, latency budget, and shipping cadence.",
            },
            {
              question: "Latency first, not another capability?",
              chose: "Held the roadmap on new agent types for a quarter and drove latency 20 → 5 min instead.",
              why: "Feedback said accuracy was fine — the workflow died on ~11-min waits. New capabilities on top of a slow product wouldn't be used.",
              defended:
                "Turned down two client-requested new capabilities that would have added latency.",
            },
            {
              question: "Citation-first UX, not confidence scores alone?",
              chose: "One-click source-jump on every field + inline confidence chip as secondary.",
              why: "Users trust the source, not the score. Confidence numbers on their own become theatre; a click into the exact clause is verifiable.",
              defended:
                "Extra design complexity in the output component. Paid back in edit-rate drop.",
            },
            {
              question: "Build the eval harness or integrate a vendor?",
              chose: "Build — a lightweight golden-set + rubric-scorer with live latency / token tracking.",
              why: "The rubric is where the taste lives. Vendors couldn't score faithfulness against our specific document types; the harness had to live next to the data.",
              defended:
                "Sunk 3 sprints of dev-time. Every future release paid it back with faster eval.",
            },
            {
              question: "Ship v2 to all pilots or stage the rollout?",
              chose: "Staged: internal shadow → 3 pilot clients → cohort → GA.",
              why: "Enterprise trust is asymmetric — one bad month with a fund is worse than a slower rollout. Each stage had a specific unlock condition, not a calendar date.",
            },
          ]}
        />
      </Section>

      {/* 09 — what I learned */}
      <Section
        n="09"
        kicker="what I learned"
        title={<>trust is the roadmap, not a feature.</>}
        tone="dark"
      >
        <div className="grid md:grid-cols-3 gap-5">
          <p>
            At enterprise scale, the model is rarely the bottleneck. The
            trust surface — citations, edit UX, confidence signals — is.
            Every quarter I&apos;ve worked on this, the biggest metric
            moves came from trust, not accuracy.
          </p>
          <p>
            Agentic architectures aren&apos;t a fashion. They&apos;re a
            debuggability decision. If you can&apos;t run an eval on a
            reasoning step, you can&apos;t improve it. If you can&apos;t
            improve it, you shipped a demo.
          </p>
          <p>
            Discovery is the product manager&apos;s deepest edge in AI.
            Nobody else on the team is watching the analyst refresh the
            PDF for the fourth time — and that&apos;s where the 4× came
            from.
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
