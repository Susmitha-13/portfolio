import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const chapters = [
  {
    year: "2021",
    place: "Vellore Institute of Technology",
    title: "Started noticing product",
    body: "B.Tech in CSE with a blockchain specialisation. What surprised me most wasn't the code — it was noticing which apps I opened again the next day, and asking why. Which button was tapped, which onboarding screen got skipped. That question hasn't gone away — it's what turned me toward product.",
    accent: "#E8B84A",
  },
  {
    year: "Feb 2023",
    place: "Scholar Planet · Freelance APM",
    title: "Took a basic quiz app and rebuilt it into a platform",
    body: "When I joined, Scholar Planet was a basic quiz app with fewer than 100 users. I did the market research and competitor teardowns, redesigned the UI end to end, added new modules, and built the teacher side and student side from scratch. I ideated the features — community loops, plan-gated content, engagement ops, hierarchical admin dashboards — that turned it into a real two-sided platform. The KPIs (3× D30, 2.5× DAU, 50 school pilots) came out of that transformation.",
    accent: "#6FA69A",
  },
  {
    year: "2024",
    place: "50 Kendriya Vidyalayas · B2B pilot",
    title: "Learned how a product survives the last mile",
    body: "Co-led B2B GTM with the CEO. Gathered requirements from state officials, designed hierarchical admin dashboards, and pitched to school leadership. Ran pilot delivery on-site with 100+ students and 10+ teachers per school. A good product only matters if it survives the messy last mile — and reality is often a Wi-Fi outage in a KV computer lab.",
    accent: "#D97757",
  },
  {
    year: "Nov 2024 — now",
    place: "Vantedge AI (YC W22) · Mumbai",
    title: "AI Product Manager × Forward-Deployed",
    body: "My real work isn't writing PRDs. It's talking to users first, sitting with the problem statements and requirements until they're honest, sketching prototypes / designs, and ideating solutions at the product level with the team. Then the PRD gets written. That process ran across every module in FundOS and every agent in the suite. Being YC, we pivoted fast: agents-only → MCA underwriting → FundOS + agent suite. I shipped through those pivots, embedded with hedge fund / PE / private credit / VC clients end-to-end, and built the billing infrastructure.",
    accent: "#B85C3E",
  },
];

export default function JourneyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24">
      <section className="pt-8 md:pt-14">
        <Reveal>
          <div className="chip mb-6">the long way here</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-5xl md:text-7xl text-espresso leading-[0.95]">
            grew up here<span className="text-terra">,</span> still growing
            <span className="text-terra">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-espresso/75 text-lg leading-relaxed">
            The short version of how I got here. For what I actually
            shipped, see{" "}
            <Link
              href="/#selected-work"
              className="underline decoration-2 underline-offset-4 hover:text-terra"
            >
              selected work
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="mt-16 relative">
        {/* spine */}
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-espresso/25" />

        <div className="space-y-12">
          {chapters.map((c, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="relative pl-14 md:pl-20">
                <div
                  className="absolute left-4 md:left-6 top-4 -translate-x-1/2 h-5 w-5 rounded-full border-2 border-espresso"
                  style={{ background: c.accent }}
                />
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-espresso/50">
                  {c.year}
                </div>
                <div
                  className="mt-1 font-mono text-sm"
                  style={{ color: c.accent }}
                >
                  {c.place}
                </div>
                <h3 className="mt-2 font-serif text-2xl md:text-3xl text-espresso leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-espresso/80 leading-relaxed max-w-3xl">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <div className="rounded-2xl border-2 border-espresso bg-parchment paper p-8 shadow-chunk">
            <h3 className="font-serif text-2xl md:text-3xl text-espresso">
              what i&apos;m chasing next
            </h3>
            <p className="mt-3 text-espresso/80 leading-relaxed max-w-2xl">
              A team where AI product and AI engineering are the same
              job. Where I can keep embedding with users, keep owning
              both the model and the metric, and keep making things
              that are just a little friendlier than they need to be.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "APM",
                "Associate AI PM",
                "AI Product Manager",
                "Forward-Deployed PM",
                "0→1",
              ].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
