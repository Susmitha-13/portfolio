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

export default function ScholarPlanetCase() {
  const next = nextCase("scholar-planet");
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      <CaseStudyHeader
        kicker="case 06 · scholar planet · edtech"
        title={
          <>
            scholar planet<span className="text-terra">.</span>
          </>
        }
        subtitle="A basic quiz app, rebuilt into a two-sided platform"
        intro={
          <>
            When I joined, Scholar Planet was a{" "}
            <b>basic quiz app with under 100 users</b>. Over 15 months I
            did the market and competitor research, redesigned the UI end
            to end, built both the teacher and student sides from
            scratch, and ideated the features that turned it into a real
            two-sided platform with 50 school pilots.
          </>
        }
        tags={[
          "0 → 1 PM",
          "Market + competitor research",
          "UI overhaul",
          "Two-sided platform",
          "Retention",
          "B2B pilots",
        ]}
        headline={[
          { value: "3×", label: "D30 retention", color: "#6FA69A" },
          { value: "2.5×", label: "DAU growth", color: "#D97757" },
          { value: "50", label: "school pilots (KV)", color: "#E8B84A" },
        ]}
      />

      {/* 01 */}
      <Section n="01" kicker="the problem" title={<>a quiz app with under 100 users, and no reason for the 101st.</>}>
        <p>
          Scholar Planet was a single-surface quiz app when I got there
          — students downloaded, answered a handful of MCQs, left. No
          teacher side. No community. No hook that pulled anyone back
          the next day. The founder&apos;s instinct was &ldquo;more
          quizzes.&rdquo; Mine was to step back and figure out what
          this product was even competing with.
        </p>
      </Section>

      {/* 02 */}
      <Section n="02" kicker="what I discovered" title={<>market + competitor research first, then the roadmap.</>}>
        <DiscoveryList
          items={[
            {
              channel: "Competitive teardowns",
              finding: "Doubtnut, Byju's, Unacademy, Vedantu. Plus the messy long tail of local school apps.",
              detail: "Read every review I could find. Mapped what a 'quiz app' was actually competing with — homework help, live classes, community.",
            },
            {
              channel: "Student interviews (10+)",
              finding: "Students opened the app when a friend did. Left when nobody else was there.",
              detail: "The retention loop was social, not curricular.",
            },
            {
              channel: "Teacher interviews (10+)",
              finding: "Teachers were the missing link — they had classes, we had content, we hadn't asked them.",
              detail: "The teacher wasn't a feature we'd need to build. She was the growth engine we'd been ignoring.",
            },
            {
              channel: "Parent conversations",
              finding: "Parents paid when the teacher assigned the app; they lapsed when nobody used it.",
              detail: "Distribution ran through the teacher, monetisation ran through the parent.",
            },
            {
              channel: "Cohort curve reading",
              finding: "Students who ever joined a group or hit a leaderboard stayed. Solo users left.",
              detail: "The D30 gap wasn't content. It was loneliness.",
            },
          ]}
        />
      </Section>

      {/* 03 */}
      <Section n="03" kicker="how I framed the problem" title={<>the product isn&apos;t the quiz. it&apos;s the class around it.</>}>
        <Framing
          user="Two personas — students in classes 6–12, and their teachers. Parents show up at monetisation time."
          job="Give the teacher a way to assign meaningful practice, and give the student a reason to come back tomorrow."
          pain="Solo, silent quizzes. No teacher hooks. No social loop. No reason for D2."
          constraints="Freemium reality of Indian edtech · school Wi-Fi variability · plan-gated content for teachers · low complexity per screen."
          success="Weekly Active Learners (North Star) · D30 retention · session length · teacher activation · schools onboarded."
        />
      </Section>

      {/* 04 */}
      <Section n="04" kicker="product architecture" title={<>two surfaces, one loop.</>}>
        <ArchDiagram
          title="two-sided platform loop"
          layers={[
            { kind: "row", nodes: [{ label: "teacher signs up" }] },
            {
              kind: "row",
              nodes: [
                { label: "teacher · authors + assigns", color: "#4A5FC1", detail: "MCQs · video · groups" },
              ],
            },
            {
              kind: "row",
              nodes: [
                { label: "students · learn + compete + ask", color: "#D97757", detail: "leaderboards · peer Q&A" },
              ],
            },
            { kind: "row", nodes: [{ label: "community loop", color: "#6FA69A", detail: "D30 lift" }] },
            {
              kind: "row",
              nodes: [
                { label: "parent · plan upgrade", color: "#E8B84A" },
              ],
            },
            {
              kind: "row",
              nodes: [
                { label: "school pilots · KV admin dashboards", color: "#B85C3E", detail: "hierarchical · state → KV → student" },
              ],
            },
          ]}
        />
      </Section>

      {/* 05 */}
      <Section n="05" kicker="the artifacts" title={<>the rebuild, in surfaces.</>}>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ArtifactGroup title="product artifacts">
            <ArtifactCard kind="North Star" title="WAL + full KPI tree" summary="one page, one team, one artifact" redacted>
              Weekly Active Learners as the anchor. Every branch fed into it — activation, retention, session length, teacher activation.
            </ArtifactCard>
            <ArtifactCard kind="UI overhaul" title="End-to-end redesign · Figma" summary="new IA · new onboarding · design system">
              Rewrote every surface. Home, course, assignment, community. New IA, a real onboarding, a design system so future modules didn't drift.
            </ArtifactCard>
            <ArtifactCard kind="Two-sided PRDs" title="Teacher authoring · student surface" summary="two products, one platform">
              PRDs for the teacher's authoring surface (upload MCQs · video · assign to groups) and the student surface (learn · compete · ask). Plan-gated content visibility on both.
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="growth artifacts">
            <ArtifactCard kind="Onboarding redesign" title="10+ user interviews → 2.5× DAU" summary="rewrote the first-open flow" redacted>
              Rewrote the first 90 seconds to hit an aha moment fast. Ran 5 A/B tests on the redesign — winning combo lifted session time 150%.
            </ArtifactCard>
            <ArtifactCard kind="A/B tests" title="5 experiments on the learning surface" summary="hypothesis · variant · result">
              Hypothesis → variant → cohort readout for each. Session time +150%.
            </ArtifactCard>
            <ArtifactCard kind="Engagement ops" title="Inter-school quizzes · competitions" summary="active-not-passive users">
              Ideated + shipped engagement ops that turned passive users into active ones. Also gave us leverage for the KV pitch.
            </ArtifactCard>
          </ArtifactGroup>

          <ArtifactGroup title="B2B + monetisation artifacts">
            <ArtifactCard kind="Pricing" title="Freemium + 4-tier" summary="co-planned with CEO · data-shipped">
              Tested trial lengths and price points; shipped the version that won on conversion data. Freemium so teachers could adopt without a purchase order.
            </ArtifactCard>
            <ArtifactCard kind="B2B GTM" title="Kendriya Vidyalayas · 50 pilots" summary="requirements → admin dashboards → pitch → rollout">
              Co-led GTM with the CEO. Gathered KV requirements. Shaped hierarchical admin dashboards (state → KV → student) around them. Pitched to school leadership. Won 50 pilots.
            </ArtifactCard>
            <ArtifactCard kind="Pilot delivery" title="On-site rollout at each school" summary="100+ students · 10+ teachers per school">
              Onboarded via online + on-site sessions, engaging 100+ students and 10+ teachers per pilot school.
            </ArtifactCard>
          </ArtifactGroup>
        </div>
      </Section>

      {/* 06 */}
      <Section n="06" kicker="what didn't work" title={<>versions of scholar planet.</>}>
        <Evolution
          steps={[
            {
              label: "v0 (before me)",
              what: "Single-surface quiz app · under 100 users.",
              problem: "No teacher side · no community · no reason for D2.",
              insight: "The team's instinct was 'more quizzes.' The right call was 'step back and rebuild.'",
              change: "Did full market + competitor research before touching the app.",
            },
            {
              label: "v1",
              what: "New UI + community features.",
              problem: "Great retention lift, but growth stalled — no distribution loop.",
              insight: "Distribution runs through the teacher, not the student.",
              change: "Built the teacher-authoring side. Plan-gated content visibility.",
              result: "3× D30 · 2.5× DAU",
            },
            {
              label: "v2",
              what: "Two-sided platform + engagement ops.",
              problem: "Consumer growth was working; B2B was unopened.",
              insight: "Schools bought in blocks — 50 in one go was possible with the right pitch.",
              change: "Built hierarchical KV admin dashboards + on-site rollout playbook.",
              result: "50 KV pilots won",
            },
          ]}
        />
      </Section>

      {/* 07 */}
      <Section n="07" kicker="metrics" title={<>a 15-month rebuild, quantified.</>}>
        <MetricGrid
          metrics={[
            { value: "3×", label: "D30 retention", color: "#6FA69A" },
            { value: "2.5×", label: "DAU growth", color: "#D97757" },
            { value: "150%", label: "session time (5 A/B tests)", color: "#E8B84A" },
            { value: "50", label: "school pilots (KV)", color: "#4A5FC1" },
            { value: "100+ / 10+", label: "students / teachers per pilot school", color: "#B85C3E" },
            { value: "95%", label: "sprint delivery over a year", color: "#E8A5A5" },
          ]}
        />
      </Section>

      {/* 08 */}
      <Section n="08" kicker="product decisions I made" title={<>the four decisions that shaped the platform.</>} tone="accent">
        <DecisionList
          items={[
            {
              question: "Community features, or more content?",
              chose: "Community — groups, leaderboards, peer Q&A.",
              why: "Cohort math said solo users left; social users stayed. The D30 gap was loneliness, not content.",
              defended: "Content-heavy investors pushed back. Made the case with the curves.",
            },
            {
              question: "Two-sided platform, or student-only?",
              chose: "Two-sided — teacher authoring + student surface with plan-gated visibility.",
              why: "Teachers were the distribution channel. Their invite loop was the growth engine.",
              defended: "2× surface area. Justified with acquisition math.",
            },
            {
              question: "Maker-checker AI moderation, or full autonomy?",
              chose: "SME review-gated release — nothing AI-generated ships without a teacher approval.",
              why: "Slower than pure AI, but the only way SMEs stayed on the platform. Trust was load-bearing.",
            },
            {
              question: "Freemium + 4-tier, or flat plan?",
              chose: "Freemium + 4-tier, shipped on conversion data.",
              why: "Flat priced out individuals; pay-only killed top-of-funnel. Freemium let teachers adopt without paperwork.",
            },
          ]}
        />
      </Section>

      {/* 09 */}
      <Section n="09" kicker="what I learned" title={<>in edtech, the flywheel isn&apos;t lessons — it&apos;s the person next to the learner.</>} tone="dark">
        <div className="grid md:grid-cols-3 gap-5">
          <p>Diagnose retention with cohorts before adding features. What looked like a content gap was a social gap; without cohort math we&apos;d have shipped the wrong quarter.</p>
          <p>Teachers-as-distribution changes the whole PM job. You design for two users at once and price so the loop keeps turning — otherwise your growth channel evaporates.</p>
          <p>Ship the sequence, not the feature list. Which data your product unlocks first determines which insight you can act on next. Order matters.</p>
        </div>
      </Section>

      <CrossLink
        eyebrow="back to case one"
        title={next.title}
        detail={next.outcome[0]}
        href={`/work/${next.slug}`}
      />
    </div>
  );
}
