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

export default function AICRMCase() {
  const next = nextCase("ai-crm");
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      <CaseStudyHeader
        kicker="case 03 · vantedge ai (yc w22) · forward-deployed"
        title={
          <>
            ai crm + forward deployment<span className="text-terra">.</span>
          </>
        }
        subtitle="Embedded delivery for enterprise fund clients"
        intro={
          <>
            Enterprise fund clients don&apos;t want &ldquo;a CRM.&rdquo; They
            want the AI to fit their pipeline stages, their memo language,
            their compliance line. I ran the forward-deployed motion —
            technical discovery on-site, integration built in-flight, and
            client TTV compressed from{" "}
            <b>3 weeks → 3 days</b> at a Tier-1 fund.
          </>
        }
        tags={[
          "Forward-deployed PM",
          "Embedded delivery",
          "Enterprise integration",
          "Time-to-value",
          "Onboarding UX",
          "Incident response",
        ]}
        headline={[
          { value: "3w → 3d", label: "client TTV", color: "#6FA69A" },
          { value: "HF · PE · VC · PC", label: "verticals shipped to", color: "#4A5FC1" },
          { value: "field-to-research", label: "loop I owned", color: "#E8B84A" },
        ]}
      />

      {/* 01 */}
      <Section n="01" kicker="the problem" title={<>the demo lands. the integration doesn&apos;t.</>}>
        <p>
          A Tier-1 fund saw the demo, said yes, and asked how fast we
          could integrate. The default answer had been &ldquo;three
          weeks.&rdquo; That answer was killing conversion — clients who
          waited three weeks came back cold. I was asked to run the
          motion from &ldquo;yes&rdquo; to first-value in-flight.
        </p>
        <p className="mt-3">
          Not a support ticket. Not a customer success handoff. A PM
          embedded with the client&apos;s deal team, watching them use
          the product on real deals, iterating the workflow while the
          engineers watched from Slack.
        </p>
      </Section>

      {/* 02 */}
      <Section n="02" kicker="what I discovered" title={<>the drag wasn&apos;t code. it was <span className="hl-sage">cognitive fit.</span></>}>
        <DiscoveryList
          items={[
            {
              channel: "On-site with the deal team",
              finding: "Their pipeline stages didn't match ours by two names and one order.",
              detail: "A two-hour whiteboard fixed something that would have taken weeks in tickets.",
            },
            {
              channel: "Live shadow sessions",
              finding: "The AI's memo language sounded wrong in their voice.",
              detail: "Not a model issue — a style-transfer issue. Fixable in prompt scaffolding, not eng.",
            },
            {
              channel: "Compliance conversation on day 2",
              finding: "PII redaction had to happen at ingest, not at output.",
              detail: "Different from our default — but non-negotiable for them.",
            },
            {
              channel: "Slack thread with the CTO",
              finding: "The client's own eng wanted a light integration, not a heavy SDK.",
              detail: "We shipped a smaller surface — one webhook, one auth flow, one config file.",
            },
            {
              channel: "End-of-day debrief with the deal head",
              finding: "The success metric wasn't 'AI accuracy.' It was 'analyst didn't hate the tool by Friday.'",
              detail: "Set the goalpost visibly. Everyone on the client side aligned.",
            },
          ]}
        />
      </Section>

      {/* 03 */}
      <Section n="03" kicker="how I framed the problem" title={<>onboarding is a product, not a plan.</>}>
        <Framing
          user="The deal-team lead at the client, plus their analysts, plus their CTO."
          job="Get real value on real deals inside the client's actual pipeline, without changing the way the client already works."
          pain="Default 3-week integration killed the excitement between yes and value."
          constraints="Client's pipeline stages · their memo voice · their PII rules · their preferred integration shape · their team's Friday."
          success="Time-to-value (target: 3 days) · analyst self-serve rate · # of edits per AI output · client NPS after week 1."
        />
      </Section>

      {/* 04 */}
      <Section n="04" kicker="product architecture" title={<>the FDE stack, as I ran it.</>}>
        <ArchDiagram
          title="forward-deployed integration cycle"
          layers={[
            { kind: "row", nodes: [{ label: "yes from client" }] },
            {
              kind: "row",
              nodes: [
                { label: "day 1 · on-site scoping", color: "#4A5FC1" },
                { label: "day 1 · whiteboard fit", color: "#4A5FC1" },
              ],
            },
            {
              kind: "row",
              nodes: [
                { label: "day 2 · config + PII + auth", color: "#6FA69A" },
                { label: "day 2 · voice tuning", color: "#6FA69A" },
              ],
            },
            {
              kind: "row",
              nodes: [
                { label: "day 3 · shadow with real deals", color: "#D97757" },
                { label: "day 3 · edit-loop tuning", color: "#D97757" },
              ],
            },
            { kind: "row", nodes: [{ label: "go-live", color: "#E8B84A", detail: "with tagged edge cases" }] },
            {
              kind: "row",
              nodes: [
                { label: "weekly field-to-research loop", color: "#B85C3E", detail: "into next release" },
              ],
            },
          ]}
        />
        <div className="mt-5 rounded-2xl border border-espresso/25 p-4 md:p-5 bg-parchment/70">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60 mb-1">
            why on-site, not remote
          </div>
          <p className="text-espresso/85 text-sm leading-relaxed">
            The information you get from watching a deal-team lead click
            through the product for 30 minutes on their machine, with
            their PDFs open, is not in Amplitude. It&apos;s not in a
            Slack thread. It&apos;s barely in a call. On-site was the
            unlock; it doesn&apos;t scale forever, but it earned the
            initial trust.
          </p>
        </div>
      </Section>

      {/* 05 */}
      <Section n="05" kicker="the artifacts" title={<>the paper trail.</>}>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ArtifactGroup title="product artifacts">
            <ArtifactCard kind="Scoping doc" title="Day-1 on-site scope" summary="pipeline map + integration surface" redacted>
              Whiteboarded stages, mapped ours-to-theirs, flagged three deltas that needed config, not code.
            </ArtifactCard>
            <ArtifactCard kind="Success plan" title="Week-1 success metrics agreed with client" summary="TTV · edit rate · analyst NPS">
              Metrics were agreed with the deal head in writing. Not our metrics — <em>their</em> metrics we could serve.
            </ArtifactCard>
            <ArtifactCard kind="Roadmap patch" title="Client-driven patches folded into GA" summary="6 items promoted to platform features">
              What was a one-off for this client became a reusable surface for the next four.
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="AI artifacts">
            <ArtifactCard kind="Voice tuning" title="Prompt scaffolding to match client memo voice" summary="tone · format · covenant vocabulary" redacted>
              Not a full fine-tune — a per-client prompt scaffold layered over the shared base. Reversible when the client changes house style.
            </ArtifactCard>
            <ArtifactCard kind="PII guardrail" title="Ingest-time redaction pipeline" summary="required by their compliance">
              Rerouted redaction from output to ingest, which meant the model never saw raw identifiers. Non-obvious but non-negotiable.
            </ArtifactCard>
            <ArtifactCard kind="Eval" title="Client-specific golden set" summary="20 real deals, 3 outcomes each">
              Client-provided anonymised deals became the eval set for this account. Their &ldquo;correct&rdquo; became our regression floor.
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="execution artifacts">
            <ArtifactCard kind="Integration" title="Lightweight webhook + SSO config" summary="one file, one auth, no SDK">
              Delivered smaller surface than default; kept the client&apos;s eng happy and shortened the review cycle.
            </ArtifactCard>
            <ArtifactCard kind="Incident drill" title="Week-2 escalation exercise" summary="what happens if the AI misfires on a live deal">
              Ran a paper drill on-site. Nothing broke — but the drill built the trust that let the deal-team lean in.
            </ArtifactCard>
            <ArtifactCard kind="Handoff" title="Week-3 handoff to CS + Support" summary="runbook + weekly loop with field">
              I owned the field-to-research loop weekly; support owned the operational surface. Clean seams.
            </ArtifactCard>
          </ArtifactGroup>
        </div>
      </Section>

      {/* 06 */}
      <Section n="06" kicker="what didn't work" title={<>version zero was a support ticket.</>}>
        <Evolution
          steps={[
            {
              label: "v0",
              what: "Remote onboarding, ticket-based integration.",
              problem: "3 weeks average, half the momentum lost.",
              insight: "The bottleneck was not code but cognitive fit — visible only on-site.",
              change: "Moved to embedded PM motion, on-site day 1.",
              result: "TTV target set at 3 days",
            },
            {
              label: "v1",
              what: "Embedded PM · full 3-day sprint on-site.",
              problem: "Client-specific patches were becoming bespoke code — great for the client, terrible for the platform.",
              insight: "Every client-specific request had to have a platform-shape or it wasn't worth building.",
              change: "Added a promotion rule — if the same request came from two clients, it went into the shared roadmap.",
            },
            {
              label: "v2",
              what: "Embedded PM + platform-promotion loop.",
              problem: "Nothing structural — this is the current state.",
              insight: "The FDE motion earns the right to shape the platform. Kept the loop weekly.",
              result: "Repeated across HF, PE, VC, private credit clients",
            },
          ]}
        />
      </Section>

      {/* 07 */}
      <Section n="07" kicker="metrics" title={<>results that made the model scalable.</>}>
        <MetricGrid
          metrics={[
            { value: "3w → 3d", label: "client TTV", color: "#6FA69A" },
            { value: "4 verticals", label: "HF · PE · VC · PC", color: "#4A5FC1" },
            { value: "6", label: "platform features promoted from client patches", color: "#E8B84A" },
            { value: "0", label: "client escalations post go-live in period", color: "#B85C3E" },
            { value: "weekly", label: "field-to-research loop cadence", color: "#D97757" },
            { value: "1 PM", label: "who ran the whole cycle", color: "#E8A5A5" },
          ]}
        />
      </Section>

      {/* 08 */}
      <Section n="08" kicker="product decisions I made" title={<>the FDE calls that mattered.</>} tone="accent">
        <DecisionList
          items={[
            {
              question: "On-site day 1, or remote first?",
              chose: "On-site day 1 for enterprise-tier clients.",
              why: "Doesn't scale forever, but the information density on-site — pipeline names, memo voice, compliance quirks — pays for the flight in one afternoon.",
            },
            {
              question: "Client-specific patch, or platform feature?",
              chose: "Promotion rule: if two clients ask, it goes in the platform.",
              why: "Kept the platform coherent. Killed the drift into custom-per-client codebases.",
              defended: "Said no to a client-specific feature I could have shipped in two days — the right call.",
            },
            {
              question: "Onboarding SDK, or a webhook + config?",
              chose: "Smallest possible integration surface — a webhook, an auth flow, a config file.",
              why: "Enterprise eng teams are allergic to SDKs. The smaller the surface, the faster the security review.",
            },
            {
              question: "Own the field loop myself, or hand it to CS?",
              chose: "Kept the loop as PM-owned even after handoff.",
              why: "The signal from the field is the roadmap. CS handled ops; the roadmap-shaping signal came back to me weekly.",
            },
          ]}
        />
      </Section>

      {/* 09 */}
      <Section n="09" kicker="what I learned" title={<>forward-deployed is a PM stance, not a title.</>} tone="dark">
        <div className="grid md:grid-cols-3 gap-5">
          <p>The information you get from an afternoon on-site is not in any dashboard. If you&apos;re shipping enterprise AI and never leave your desk, you&apos;re shipping demos.</p>
          <p>The FDE motion earns you the right to shape the platform — but only if you enforce a promotion rule so per-client patches don&apos;t fragment the codebase.</p>
          <p>Handoff cleanly, but keep the roadmap-shaping loop. The field-to-research signal is the highest-quality product input in a young company.</p>
        </div>
      </Section>

      <CrossLink title={next.title} detail={next.outcome[0]} href={`/work/${next.slug}`} />
    </div>
  );
}
