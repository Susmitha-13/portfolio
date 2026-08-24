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

export default function FundOSCase() {
  const next = nextCase("fundos");
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      <CaseStudyHeader
        kicker="case 04 · vantedge ai (yc w22) · financial product"
        title={
          <>
            fundos<span className="text-terra">.</span>
          </>
        }
        subtitle="The AI-native OS for hedge funds, PE, private credit & VC"
        intro={
          <>
            FundOS isn&apos;t a single product — it&apos;s{" "}
            <b>11+ integrated modules</b> that a fund actually runs its
            day on. Deal CRM, LP CRM, ODD, VDR, Investor Portal, CFO
            Center, DSRI Risk, Pricer, HF Ops. I contribute to product
            &amp; UI design across it, own PRDs that ship with AI
            guardrails baked in, and hold coherence through fast YC
            pivots.
          </>
        }
        tags={[
          "Financial products",
          "Multi-module OS",
          "PRD authoring",
          "AI guardrails",
          "Cross-module coherence",
          "YC-pace pivots",
        ]}
        headline={[
          { value: "11+", label: "integrated FundOS modules", color: "#B85C3E" },
          { value: "10+", label: "domain agents in the suite", color: "#4A5FC1" },
          { value: "3 pivots", label: "agents → MCA → FundOS", color: "#E8B84A" },
        ]}
      />

      {/* 01 */}
      <Section n="01" kicker="the problem" title={<>a fund&apos;s day is 12 tabs. we set out to be one.</>}>
        <p>
          Hedge funds, PE shops, and VC firms live across Excel,
          Bloomberg, half a dozen niche CRMs, a data room, an LP
          portal, and a compliance folder. The pitch for FundOS was
          simple: one AI-native system that handles all of them without
          breaking any of them.
        </p>
        <p className="mt-3">
          The engineering challenge is real, but the product challenge
          was harder — how do you keep 11+ modules coherent when a
          YC-pace company pivots every quarter? That&apos;s the shape
          I&apos;ve worked in.
        </p>
      </Section>

      {/* 02 */}
      <Section n="02" kicker="what I discovered" title={<>funds don&apos;t buy modules. they buy <span className="hl-sage">the whole day.</span></>}>
        <DiscoveryList
          items={[
            {
              channel: "Client onboarding shadowing",
              finding: "Nobody adopts a single module. They adopt a workflow that touches four.",
              detail: "Deal CRM adoption dies without LP CRM handshake. LP CRM dies without Investor Portal.",
            },
            {
              channel: "GP + LP interviews",
              finding: "GPs care about deal velocity. LPs care about transparency. Different UX, one product.",
              detail: "Two personas, different jobs, one platform surface — a real product problem.",
            },
            {
              channel: "Portfolio-monitoring workflow observation",
              finding: "Monitoring is the surface where AI earns trust — because it's dull, repeated, and auditable.",
              detail: "The exciting agents (research, memo drafting) demoed better; monitoring shipped harder.",
            },
            {
              channel: "Pricing surface analysis",
              finding: "One flat price kills small-fund adoption; unlimited usage kills margin.",
              detail: "Landed on per-module SKUs + usage-based credit metering (see the AI Workspace case).",
            },
          ]}
        />
      </Section>

      {/* 03 */}
      <Section n="03" kicker="how I framed the problem" title={<>coherence over completeness.</>}>
        <Framing
          user="Fund GPs, deal analysts, LPs, and fund-admin/CFO teams — four personas, one platform."
          job="Run the whole fund day inside one system: source deals, diligence, monitor, report, distribute — with AI baked in where it earns trust."
          pain="Fragmentation across 8+ tools · integration cost · handoffs that lose context · AI features that don't hold up in production."
          constraints="YC-pace pivots · enterprise trust · per-module rollout · pricing that works for small + large funds."
          success="Module adoption · cross-module workflow completion rate · client TTV · trial-to-paid · agent success rate."
        />
      </Section>

      {/* 04 */}
      <Section n="04" kicker="product architecture" title={<>modules on top of a shared platform, agents woven through.</>}>
        <ArchDiagram
          title="FundOS · surface layer"
          layers={[
            { kind: "row", nodes: [{ label: "fund clients (GP / LP / CFO)" }] },
            {
              kind: "fanout",
              label: "FundOS shell",
              color: "#2A1F1A",
              children: [
                { label: "Deal CRM", color: "#4A5FC1" },
                { label: "LP CRM", color: "#4A5FC1" },
                { label: "ODD + VDR", color: "#6FA69A" },
                { label: "Investor Portal", color: "#6FA69A" },
                { label: "CFO Center", color: "#D97757" },
                { label: "DSRI Risk", color: "#D97757" },
                { label: "Pricer · HF Ops", color: "#E8B84A" },
              ],
            },
            {
              kind: "row",
              nodes: [
                { label: "domain agent suite", color: "#B85C3E", detail: "Research · Analyst · Valuation · SEC · BondBot · …" },
              ],
            },
            {
              kind: "row",
              nodes: [
                { label: "AI platform layer", color: "#F5DFC6", detail: "orchestration · evals · guardrails · billing" },
              ],
            },
          ]}
        />
        <div className="mt-5 rounded-2xl border border-espresso/25 p-4 md:p-5 bg-parchment/70">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60 mb-1">
            how I kept coherence through pivots
          </div>
          <ul className="text-espresso/85 leading-relaxed list-disc pl-5 space-y-1 text-sm">
            <li>Every module PRD shared a header — same personas, same success metric shape, same guardrail section.</li>
            <li>Cross-module workflows had their own PRD (&ldquo;deal → memo → LP notice&rdquo;) — not owned by any one module.</li>
            <li>Agents were the shared connective tissue — one Research agent, referenced by five modules.</li>
          </ul>
        </div>
      </Section>

      {/* 05 */}
      <Section n="05" kicker="the artifacts" title={<>coherence, shown.</>}>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ArtifactGroup title="product artifacts">
            <ArtifactCard kind="PRD template" title="Shared PRD header across modules" summary="personas · success · guardrails" redacted>
              The one-page header every FundOS PRD starts with — kept the modules speaking the same language.
            </ArtifactCard>
            <ArtifactCard kind="Cross-module workflow" title="Deal → memo → LP notice" summary="4 modules · 2 agents · 1 workflow">
              Redacted flow spec showing where responsibility lives at each hop.
            </ArtifactCard>
            <ArtifactCard kind="Roadmap" title="Post-pivot module priority matrix" summary="RICE + strategic weight">
              Rebuilt after the FundOS pivot; kept the team from re-litigating priority weekly.
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="AI artifacts">
            <ArtifactCard kind="Agent registry" title="10+ agents, referenced by 11+ modules" summary="which agent belongs to which surface">
              A single registry so no module invented a duplicate. Cross-module agent versioning discipline.
            </ArtifactCard>
            <ArtifactCard kind="Eval shape" title="Shared rubric header, per-module tail" summary="one eval language, module-specific criteria">
              Every eval spec used the same 5-dimension header. Module-specific criteria plugged in below.
            </ArtifactCard>
            <ArtifactCard kind="Guardrails" title="Standard AI guardrails block for every PRD" summary="PII · refusals · fallbacks">
              PRDs shipped with the guardrails already answered — nothing relearned per launch.
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="execution artifacts">
            <ArtifactCard kind="Rollout" title="Module-by-module release cadence" summary="internal → 3 pilots → cohort → GA">
              Same cadence for every module. Reduced surprise, sped up review.
            </ArtifactCard>
            <ArtifactCard kind="Field-to-research" title="Cross-module edge cases fed back weekly" summary="edge case → prompt / schema / eval change">
              Field-to-research loop worked across modules, not just one — the highest-signal PM input.
            </ArtifactCard>
            <ArtifactCard kind="Incident" title="Cross-module incident playbook" summary="'agent breaks in module A' → contain the blast radius">
              Because agents are shared, a bad agent breaks in 5 places. The playbook contained blast radius by module.
            </ArtifactCard>
          </ArtifactGroup>
        </div>
      </Section>

      {/* 06 */}
      <Section n="06" kicker="what didn't work" title={<>three shapes of the product.</>}>
        <Evolution
          steps={[
            {
              label: "pivot 01",
              what: "Agents-only. Individual domain agents shipped as standalone LLM tools.",
              problem: "Sold as demos, adopted rarely. No workflow home for the agent to live in.",
              insight: "Agents without a surface don't stick. Users don't 'open the Research agent' — they open the deal.",
              change: "Moved to a focused vertical to prove workflow adoption.",
            },
            {
              label: "pivot 02",
              what: "MCA underwriting — a single vertical with a fine-tuned model.",
              problem: "Real adoption in a small market. Ceiling low; ambition higher.",
              insight: "The workflow lesson learned in MCA generalised to fund ops if we built a platform layer.",
              change: "Repositioned as FundOS — modules + agent suite + platform.",
              result: "Current product",
            },
            {
              label: "now",
              what: "FundOS: 11+ modules, 10+ agents, one platform.",
              problem: "Coherence across pivots — the ongoing PM challenge.",
              insight: "Coherence lives in the PRD header, the eval shape, and the agent registry — not in slideware.",
              change: "Standardised those three surfaces across modules.",
            },
          ]}
        />
      </Section>

      {/* 07 */}
      <Section n="07" kicker="metrics" title={<>what we hold across the OS.</>}>
        <MetricGrid
          metrics={[
            { value: "11+", label: "modules integrated in FundOS", color: "#B85C3E" },
            { value: "10+", label: "domain agents in the suite", color: "#4A5FC1" },
            { value: "3 pivots", label: "shipped through", color: "#E8B84A" },
            { value: "1", label: "shared PRD header · agent registry · eval rubric", color: "#6FA69A" },
            { value: "weekly", label: "cross-module field-to-research", color: "#D97757" },
            { value: "GP + LP + CFO", label: "personas we serve", color: "#E8A5A5" },
          ]}
        />
      </Section>

      {/* 08 */}
      <Section n="08" kicker="product decisions I made" title={<>the calls that held the OS together.</>} tone="accent">
        <DecisionList
          items={[
            {
              question: "Standardise PRD headers, or let modules diverge?",
              chose: "Same PRD header for every module — personas, success, guardrails.",
              why: "Coherence at the doc level is coherence at the product level. Cheap to write, expensive to lose.",
            },
            {
              question: "One shared agent registry, or per-module?",
              chose: "One registry — every module references shared agents.",
              why: "Otherwise five teams reinvent the Research agent. Registry killed the drift.",
              defended: "Slower initial velocity per module. Paid back inside two releases.",
            },
            {
              question: "Cross-module workflows have their own PRD?",
              chose: "Yes — 'deal → memo → LP notice' has its own doc, its own owner.",
              why: "The highest-value workflows live across modules. Without a cross-module PRD, they belong to no one.",
            },
            {
              question: "Module-by-module rollout, or bundled GA?",
              chose: "Module-by-module with the same 4-stage cadence.",
              why: "Same shape lowered surprise for clients and for eng. Bundled launches make everything fragile at once.",
            },
          ]}
        />
      </Section>

      {/* 09 */}
      <Section n="09" kicker="what I learned" title={<>a multi-module OS is a coherence problem, not a features problem.</>} tone="dark">
        <div className="grid md:grid-cols-3 gap-5">
          <p>The temptation is to sell features. The reality is that a fund adopts a workflow that touches four modules — coherence is the actual product.</p>
          <p>YC-pace pivots are survivable when the coherence layer (PRD headers, agent registry, eval shape) is treated as first-class. Ship the layer, not just the modules.</p>
          <p>The right PM question in a multi-module OS is: &ldquo;what's the workflow, and which module owns each hop?&rdquo; If nobody owns a hop, users fall through.</p>
        </div>
      </Section>

      <CrossLink title={next.title} detail={next.outcome[0]} href={`/work/${next.slug}`} />
    </div>
  );
}
