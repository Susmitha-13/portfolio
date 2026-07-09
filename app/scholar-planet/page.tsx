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
    value: 3,
    suffix: "×",
    label: "D30 retention lift",
    detail: "after community features shipped — from the cohort curve up",
    color: "#6FA69A",
  },
  {
    value: 2.5,
    suffix: "×",
    label: "DAU growth",
    detail: "onboarding redesign informed by 10+ user interviews",
    color: "#D97757",
  },
  {
    value: 150,
    suffix: "%",
    label: "session time",
    detail: "from 5 A/B tests on the core learning surface",
    color: "#E8B84A",
  },
  {
    value: 50,
    suffix: "",
    label: "school B2B pilots",
    detail: "Kendriya Vidyalayas — requirements, dashboards, pitch, on-site rollout",
    color: "#4A5FC1",
  },
  {
    value: 8,
    suffix: "h",
    label: "weekly reporting saved",
    detail: "Mixpanel dashboards replacing manual pulls",
    color: "#B85C3E",
  },
  {
    value: 95,
    suffix: "%",
    label: "sprint delivery",
    detail: "sustained across a year of PM ownership",
    color: "#E8A5A5",
  },
];

const decisions = [
  {
    title: "Community features over more content",
    body: "The D30 drop-off looked like a content problem — kids ran out of lessons. When I cut cohort curves by behavior, the story flipped: students who ever joined a group, hit a leaderboard, or posted a peer Q&A stayed. The ones who didn't, left. So the roadmap became social, not curricular.",
    defended: "We had content-heavy investors. I made the case with cohort math.",
  },
  {
    title: "The teacher is a distribution channel, not a feature",
    body: "Every teacher who authored a lesson brought their whole class. So I designed the platform two-sided from the start: a student learning surface AND a teacher content authoring surface, with plan-gated visibility (free vs. paid) so teachers had a reason to invite. The teacher wasn't a nice-to-have — she was the growth engine.",
    defended: "Two-sided is 2× the surface area. Justified by acquisition math.",
  },
  {
    title: "Maker-checker AI content, not full AI autonomy",
    body: "We used LLMs to generate quiz content, but nothing shipped without SME review. I designed the review-gated release workflow end-to-end — reviewer dashboards, error tagging, rejection audit trails. Kids saw better content faster; teachers saw content they trusted.",
    defended: "Slower than pure-AI, but the only way SMEs stayed on the platform.",
  },
  {
    title: "Freemium + 4-tier pricing over one flat plan",
    body: "Co-planned the freemium + 4-tier pricing model with the CEO. Tested trial lengths and price points, shipped the version that won on conversion data. A flat plan would have priced out individual students; a pay-only plan would have killed the top of funnel.",
    defended: "Data-shipped, not gut-shipped.",
  },
];

const implementation = [
  {
    kicker: "research first",
    title: "Market + competitor scan before a single feature",
    body: "Full teardowns of Doubtnut, Byju's, Unacademy, Vedantu, plus the long tail of local school apps. Sat with 10+ students and teachers to understand what a school day actually feels like. That research shaped every subsequent call.",
  },
  {
    kicker: "north star + kpi tree",
    title: "Weekly Active Learners as the anchor",
    body: "Defined WAL as the North Star, built the full KPI tree under it (activation, D7 & D30 retention, session length, content review throughput). Everything the team shipped had to plug into a leaf on that tree.",
  },
  {
    kicker: "UI overhaul",
    title: "Redesigned the app end to end",
    body: "The old UI was a quiz shell — flat lists, no rhythm, no hooks. I rewrote the whole surface: home + course + assignment + community modules, new information architecture, a real onboarding, and a design system so future modules didn't drift.",
  },
  {
    kicker: "two-sided platform",
    title: "Built the teacher side and student side from scratch",
    body: "Teachers upload MCQs and video lessons, assign to groups or individuals, with plan-gated content visibility (free vs. paid). Students learn, compete, ask peers. Two products in one, glued by the teacher-invite loop — neither existed before I got there.",
  },
  {
    kicker: "onboarding redesign",
    title: "10 interviews → 2.5× DAU",
    body: "Sat with 10+ students and teachers. Rewrote the first-open flow to hit an aha moment inside the first 90 seconds. Ran 5 A/B tests on the redesign and its variants — the winning combination lifted session time 150%.",
  },
  {
    kicker: "engagement ops",
    title: "Inter-school quizzes + competitions",
    body: "Ideated + shipped engagement ops that turned passive users into active ones — inter-school quizzes, class competitions, seasonal challenges. Spiked usage on demand and gave us leverage for the KV pitch.",
  },
  {
    kicker: "instrumentation",
    title: "Mixpanel dashboards, 8 hrs/wk reclaimed",
    body: "Built Mixpanel dashboards for cohort curves, funnel, feature adoption. Replaced 8 hours/week of manual reporting pulls with live views the whole team read.",
  },
  {
    kicker: "B2B GTM",
    title: "50 Kendriya Vidyalayas — end to end",
    body: "Co-led B2B GTM with the CEO. Gathered KV requirements, shaped hierarchical admin dashboards (state admin → KV admin → student view) around them, pitched to school leadership, and ran on-site pilot delivery — 100+ students, 10+ teachers per pilot school.",
  },
  {
    kicker: "marketing",
    title: "Owned social + digital across the funnel",
    body: "+35% CTR, +200% reach. Not because the ads got clever — because the ads finally reflected the product the teacher had used the day before.",
  },
  {
    kicker: "sprint discipline",
    title: "95% sprint delivery across a year",
    body: "Sustained velocity with quality — that was the target, and I hit it. PM isn't just picking the right thing; it's also making sure the team can actually ship it.",
  },
];

export default function ScholarPlanetPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      {/* Header */}
      <section className="pt-8 md:pt-14">
        <Reveal>
          <div className="chip mb-6">case study · edtech · scholar planet</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-5xl md:text-7xl text-espresso leading-[0.95]">
            took a basic quiz app{" "}
            <span className="hl-sage">and rebuilt it into a platform.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-espresso/75 text-lg leading-relaxed">
            Associate Product Manager (freelance), Feb 2023 – May 2024. When I
            joined, Scholar Planet was a basic quiz app with{" "}
            <span className="hl">fewer than 100 users</span>. Over the next 15
            months I did the market and competitor research, redesigned the UI
            end to end, built the teacher side and student side from scratch,
            and ideated the features that turned it into a real two-sided
            platform with 50 school pilots.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "North Star + KPI Tree",
              "Cohort Analysis",
              "A/B Testing",
              "Two-Sided Platform",
              "B2B GTM",
              "Onboarding UX",
              "Pricing",
              "Sprint Delivery",
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

      {/* THE PROBLEM */}
      <section className="mt-20">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50 mb-3">
            01 · the problem I was solving
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
            a quiz app with under 100 users, and no obvious reason for the 101st.
          </h2>
          <p className="text-espresso/80 leading-relaxed max-w-3xl">
            When I joined, Scholar Planet was a single-surface quiz app —
            students downloaded, answered a handful of MCQs, and left. No
            teacher side. No community. No hook that pulled anyone back the
            next day. The founder's instinct was &ldquo;more quizzes.&rdquo;
            Mine was: <em>step back and figure out what this product is even
            competing with.</em>
          </p>
        </Reveal>
      </section>

      {/* REAL FRICTION — was market + competitor research */}
      <section className="mt-16">
        <Reveal>
          <div className="rounded-3xl border-2 border-espresso bg-espresso text-cream p-6 md:p-10 shadow-chunklg">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mustard mb-3">
              02 · how I found the real friction
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-cream leading-tight">
              market + competitor research first.{" "}
              <span className="text-mustard">then the roadmap.</span>
            </h2>
            <p className="mt-6 text-cream/85 leading-relaxed max-w-3xl">
              I did the full market scan — Doubtnut, Byju&apos;s, Unacademy,
              Vedantu, plus the messy long tail of local school apps. Read
              every review I could find, sat with 10+ students and teachers,
              and mapped what a &ldquo;quiz app&rdquo; actually competed with.
            </p>
            <p className="mt-4 text-cream/85 leading-relaxed max-w-3xl">
              The insight was obvious in hindsight: quizzes aren&apos;t a
              product; they&apos;re a{" "}
              <span className="text-mustard font-semibold">
                loop element inside a bigger product
              </span>
              . The real product had to be the class, the teacher, the peer
              group — the social object around the quiz. Everything else on the
              roadmap fell out of that.
            </p>
          </div>
        </Reveal>
      </section>

      {/* DECISIONS */}
      <section className="mt-20">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50 mb-3">
            03 · the decisions I had to defend
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-8">
            four calls that reshaped the product
          </h2>
        </Reveal>

        <div className="space-y-5">
          {decisions.map((d, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="rounded-2xl border-2 border-espresso bg-parchment p-6 md:p-7 shadow-chunk">
                <div className="flex items-baseline gap-3">
                  <div className="font-serif text-4xl text-sage/70">
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
            <Reveal key={i} delay={i * 0.04}>
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
          <div className="rounded-2xl border-2 border-espresso bg-sage/25 p-6 md:p-10 shadow-chunklg">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60 mb-3">
              05 · what I learned
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-tight">
              in edtech, the flywheel isn't lessons —{" "}
              <span className="hl-sage">it's the person next to the learner</span>.
            </h2>
            <div className="mt-5 grid md:grid-cols-3 gap-4 text-espresso/85 leading-relaxed">
              <p>
                Diagnose retention with cohorts before adding features.
                The number that looked like a content gap was a social gap;
                without cohort math we'd have shipped the wrong quarter.
              </p>
              <p>
                Teachers as distribution changes the whole PM job. You design
                for two users at once and price so the loop keeps turning —
                otherwise your growth channel evaporates.
              </p>
              <p>
                Ship the sequence, not the feature list. Which data your
                product unlocks first determines which insight you can act on
                next. Order matters.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Cross-link to fintech case study */}
      <section className="mt-14">
        <Reveal>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-espresso/40 p-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50">
                next case study
              </div>
              <div className="mt-1 font-serif text-2xl text-espresso">
                fintech · vantedge ai (yc w22)
              </div>
              <p className="text-espresso/70 text-sm mt-1">
                Different users (hedge funds instead of students), same product
                DNA — a North Star, a KPI tree, and a metric worth defending.
              </p>
            </div>
            <Link href="/vantedge" className="btn-chunk shrink-0">
              read fintech <span>→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
