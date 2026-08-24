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

export default function MCAAgentCase() {
  const next = nextCase("mca-agent");
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      <CaseStudyHeader
        kicker="case 02 · vantedge ai (yc w22) · fintech"
        title={
          <>
            mca underwriting agent<span className="text-terra">.</span>
          </>
        }
        subtitle="Domain-fine-tuned decisions for US & Europe MCA"
        intro={
          <>
            Merchant Cash Advance underwriting is a niche vertical with its
            own vocabulary — factor rates, holdback percentages, buy rates,
            NSF counts. A generalist LLM gets it{" "}
            <em>approximately</em> right, which in credit is the same as
            wrong. I owned the product surface for a fine-tuned underwriting
            agent that turned this from a demo into a shippable workflow.
          </>
        }
        tags={[
          "Domain fine-tuning",
          "QLoRA · PEFT",
          "HITL",
          "Citation-backed outputs",
          "Structured extraction",
          "Credit UX",
        ]}
        headline={[
          { value: "58%", label: "underwriting time cut", color: "#D97757" },
          { value: "US · EU", label: "markets in production", color: "#4A5FC1" },
          { value: "HITL", label: "reviewer-in-the-loop by default", color: "#6FA69A" },
        ]}
      />

      {/* 01 */}
      <Section n="01" kicker="the problem" title={<>credit doesn&apos;t forgive &ldquo;approximately.&rdquo;</>}>
        <p>
          Underwriters processing MCA applications were reading through
          bank statements, merchant processing statements, and applicant
          disclosures — often 40+ pages per file. A generalist LLM could
          summarise it, but confused factor rate with buy rate one time in
          five, and there&apos;s no version of &ldquo;80% right&rdquo;
          that is safe in underwriting.
        </p>
        <p className="mt-3">
          The team had tried prompt-only. Accuracy plateaued below the
          bar that lets you approve credit decisions. My PRD proposed the
          smallest possible surface to unlock the domain — a fine-tune, a
          reviewer surface, and a citation trail an underwriter could
          audit.
        </p>
      </Section>

      {/* 02 */}
      <Section
        n="02"
        kicker="what I discovered"
        title={<>underwriters don&apos;t want automation. they want{" "}<span className="hl-sage">defensibility.</span></>}
      >
        <DiscoveryList
          items={[
            {
              channel: "Underwriter interviews (US · UK · NL)",
              finding: "Every 'no' has to be explained to sales the same day.",
              detail:
                "The unlock wasn't 'be right' — it was 'be right with a paper trail.'",
            },
            {
              channel: "Workflow observation",
              finding: "40% of an underwriter's day is copy-paste between statements and a spreadsheet.",
              detail: "The AI opportunity was in structured extraction, not in the credit call itself.",
            },
            {
              channel: "Domain vocabulary audit",
              finding: "MCA terms drift across brokers, geos, and even within one applicant's file.",
              detail:
                "Factor rate vs. buy rate vs. sell rate — a general LLM gets these wrong; a domain-fine-tune doesn't.",
            },
            {
              channel: "Comp / competitive scan",
              finding: "Existing tools automated the paperwork but not the reasoning.",
              detail:
                "Nobody in this vertical was shipping a fine-tuned reasoning layer — pure OCR + rules.",
            },
          ]}
        />
      </Section>

      {/* 03 */}
      <Section n="03" kicker="how I framed the problem" title={<>frame first, prototype next.</>}>
        <Framing
          user="MCA underwriter at a lender in the US or Western Europe."
          job="Turn a raw application (bank statements, MTD statements, disclosures) into an audit-ready credit decision."
          pain="Vocabulary drift + copy-paste between statements + no defensible paper trail for a 'no'."
          constraints="Domain accuracy (>95% on core fields), HITL by default, citation to source page + row on every field, jurisdictional disclosures."
          success="Underwriting time per file · field-level accuracy · reviewer edit rate · defensibility (a 'no' can always be explained)."
        />
      </Section>

      {/* 04 */}
      <Section n="04" kicker="product architecture" title={<>a fine-tune with a reviewer surface glued on.</>}>
        <ArchDiagram
          title="MCA agent · document → decision"
          layers={[
            { kind: "row", nodes: [{ label: "application bundle" }] },
            {
              kind: "row",
              nodes: [
                { label: "OCR + statement parser", color: "#F5DFC6" },
                { label: "row-level field tagger", color: "#F5DFC6" },
              ],
            },
            {
              kind: "row",
              nodes: [
                {
                  label: "fine-tuned MCA LLM",
                  color: "#D97757",
                  detail: "QLoRA / PEFT · domain corpus",
                },
              ],
            },
            {
              kind: "row",
              nodes: [
                { label: "structured extraction", color: "#4A5FC1", detail: "with source citations" },
                { label: "credit reasoning", color: "#6FA69A", detail: "with rationale" },
              ],
            },
            { kind: "row", nodes: [{ label: "eval gate", color: "#B85C3E", detail: "faithfulness + jurisdictional" }] },
            {
              kind: "row",
              nodes: [
                { label: "reviewer UI · HITL", color: "#E8B84A", detail: "thumbs + edits + reason tags" },
              ],
            },
          ]}
        />
        <div className="mt-5 rounded-2xl border border-espresso/25 p-4 md:p-5 bg-parchment/70">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60 mb-1">
            why a fine-tune, not just a better prompt
          </div>
          <ul className="text-espresso/85 leading-relaxed list-disc pl-5 space-y-1 text-sm">
            <li>MCA vocabulary drifts inside a single file — prompting can't stabilise this alone.</li>
            <li>Fine-tuning gave us a reproducible baseline the eval suite could catch drift against.</li>
            <li>Latency budget was tight; a smaller domain-fine-tune was cheaper per query than a large frontier call.</li>
          </ul>
        </div>
      </Section>

      {/* 05 */}
      <Section n="05" kicker="the artifacts" title={<>the underlying work.</>}>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ArtifactGroup title="product artifacts">
            <ArtifactCard
              kind="PRD"
              title="MCA underwriting agent v1"
              summary="scope · guardrails · rollout gates"
              redacted
            >
              User personas per jurisdiction, HITL requirements, disclosure requirements, and a per-market rollout gate. Full redacted PDF on request.
            </ArtifactCard>
            <ArtifactCard
              kind="User flow"
              title="Underwriter · file → decision · reviewer edits"
              summary="canonical workflow the UI wraps"
            >
              <pre className="bg-espresso text-cream font-mono text-xs p-3 rounded overflow-x-auto">
{`file drops → structured extraction (per row)
  → reasoning + rationale (per field)
  → reviewer surface with source-jump
  → reviewer thumbs/edits → eval bucket
  → decision approved / declined / escalated`}
              </pre>
            </ArtifactCard>
            <ArtifactCard
              kind="Wireframes"
              title="Reviewer surface"
              summary="citations always visible · reason-tagging on rejects"
            >
              Every extracted field renders alongside its source page/row. Every reviewer edit is one click and one reason-tag. Redacted screens available on request.
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="AI artifacts">
            <ArtifactCard
              kind="Fine-tune plan"
              title="QLoRA / PEFT training design"
              summary="data mix · adapter size · promotion criteria"
              redacted
            >
              Curated per-jurisdiction dataset, held-out golden set, adapter-size ablation, and the promotion criteria for staging → prod. Prevented catastrophic forgetting on numeric extractions.
            </ArtifactCard>
            <ArtifactCard
              kind="Prompt / schema"
              title="Structured output contract"
              summary="every field carries {value, source, page, confidence}"
            >
              <pre className="bg-parchment border border-espresso/30 p-2 rounded text-xs overflow-x-auto">
{`{
  "factor_rate":       {value, page, quote, confidence},
  "holdback_percent":  {value, page, quote, confidence},
  "avg_daily_balance": {value, page, quote, confidence},
  "nsf_count_90d":     {value, page, quote, confidence},
  "rationale": "..."
}`}
              </pre>
            </ArtifactCard>
            <ArtifactCard
              kind="Eval rubric"
              title="Golden set of underwriting cases"
              summary="field-level accuracy + faithfulness veto"
            >
              A hallucinated citation vetoes the whole row to 0. Non-negotiable — credit doesn&apos;t forgive.
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="execution artifacts">
            <ArtifactCard
              kind="Rollout"
              title="Per-market gates"
              summary="US shadow → UK pilot → NL pilot → GA"
            >
              Each market had its own disclosure + regulatory gate. No global launch button — market-by-market.
            </ArtifactCard>
            <ArtifactCard
              kind="Feedback loop"
              title="Reviewer edits → next training batch"
              summary="every reject / edit became a labeled example"
              redacted
            >
              Reason-tagged rejections were the highest-quality training signal we had — every one went into the next data batch.
            </ArtifactCard>
            <ArtifactCard
              kind="Ops"
              title="Incident drill · bad decision"
              summary="what happens if a 'no' is contested"
            >
              End-to-end incident drill covering audit trail retrieval, model version, retriever version, and reviewer identity. The drill mattered more than the docs.
            </ArtifactCard>
          </ArtifactGroup>
        </div>
      </Section>

      {/* 06 */}
      <Section n="06" kicker="what didn't work" title={<>three tries before it shipped.</>}>
        <Evolution
          steps={[
            {
              label: "v1",
              what: "Frontier LLM + heavy prompt.",
              problem: "Vocabulary drift caused 1-in-5 factor/buy-rate confusions. Latency high, cost high.",
              insight: "Prompting can't stabilise domain vocabulary at reliability grade.",
              change: "Prototyped QLoRA fine-tune on a curated MCA corpus.",
            },
            {
              label: "v2",
              what: "QLoRA fine-tune + old prompt scaffold.",
              problem: "Extraction improved; reasoning stalled — a 'no' had no defensible rationale.",
              insight: "The bottleneck moved from extraction to the reasoning trace.",
              change: "Redesigned the output contract to force a per-field rationale + citation.",
              result: "Extraction quality met the bar",
            },
            {
              label: "v3",
              what: "Structured output + HITL reviewer surface.",
              problem: "Underwriters were still wary — no view of the model's confidence.",
              insight: "Show the model's uncertainty, don't hide it. Underwriters actually love a low-confidence flag.",
              change: "Per-field confidence chip in the reviewer UI; low-confidence auto-escalates.",
              result: "Underwriting time cut by 58%",
            },
          ]}
        />
      </Section>

      {/* 07 */}
      <Section n="07" kicker="metrics" title={<>numbers that unlocked the go-live.</>}>
        <MetricGrid
          metrics={[
            { value: "58%", label: "underwriting time cut", color: "#D97757" },
            { value: "US · EU", label: "markets live", color: "#4A5FC1" },
            { value: "100%", label: "decisions with citation", color: "#6FA69A" },
            { value: "0", label: "hallucinated citations shipped", color: "#B85C3E" },
            { value: "3", label: "fine-tune iterations", color: "#E8B84A" },
            { value: "HITL", label: "always-on reviewer loop", color: "#E8A5A5" },
          ]}
        />
      </Section>

      {/* 08 */}
      <Section n="08" kicker="product decisions I made" title={<>the calls behind the ship.</>} tone="accent">
        <DecisionList
          items={[
            {
              question: "Fine-tune the model, or push prompting harder?",
              chose: "Fine-tune with QLoRA / PEFT on a curated MCA corpus.",
              why: "Vocabulary drift inside a single file caps prompt-only reliability. A fine-tune gives us a stable baseline the eval suite can regress against.",
              defended: "More infra + data work upfront. Paid back in per-query cost + defensibility.",
            },
            {
              question: "HITL by default, or opt-in?",
              chose: "HITL is on for every decision. Underwriter can override or escalate.",
              why: "In credit, defensibility beats throughput. Making HITL the default aligned incentives — nobody could 'skip the check.'",
            },
            {
              question: "Show confidence, or hide it?",
              chose: "Per-field confidence chip. Low-confidence auto-escalates.",
              why: "Underwriters actually trust the system more when it admits uncertainty. Hiding it was a cheap trick that killed trust.",
            },
            {
              question: "Ship market-by-market, or one global launch?",
              chose: "Per-market gates — US shadow → UK pilot → NL pilot → GA.",
              why: "Jurisdictional disclosures and MCA vocabulary vary. One bad launch in one market would poison the well in the others.",
            },
          ]}
        />
      </Section>

      {/* 09 */}
      <Section n="09" kicker="what I learned" title={<>domain-narrow beats horizon-wide when the cost of wrong is high.</>} tone="dark">
        <div className="grid md:grid-cols-3 gap-5">
          <p>A generalist model can look impressive in a demo and fail an audit. When the cost of a wrong answer is a credit decision, domain specialisation pays for itself in weeks.</p>
          <p>Reviewer surfaces are product. Underwriters didn&apos;t want a black box or an auto-approve — they wanted a good co-pilot that admits when it&apos;s guessing.</p>
          <p>The right AI PM question isn&apos;t &ldquo;can the model do this?&rdquo; It&apos;s &ldquo;can the model do this with a rationale my user can defend on a call?&rdquo;</p>
        </div>
      </Section>

      <CrossLink title={next.title} detail={next.outcome[0]} href={`/work/${next.slug}`} />
    </div>
  );
}
