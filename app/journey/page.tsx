"use client";

import { Reveal } from "@/components/Reveal";
import {
  KVPilotArt,
  ScholarPlanetArt,
  VantedgeChapterArt,
  VITArt,
} from "@/components/JourneyArt";
import { motion } from "framer-motion";

const chapters = [
  {
    year: "2021",
    place: "Vellore Institute of Technology",
    title: "Started noticing product",
    body: (
      <>
        B.Tech in CSE with a blockchain specialisation. What surprised me most
        wasn't the code — it was noticing which apps I opened again the next
        day, and asking why. Which button was tapped, which onboarding screen
        got skipped. That question hasn't gone away — it's{" "}
        <span className="hl">what turned me toward product</span>.
      </>
    ),
    Art: VITArt,
    accent: "#E8B84A",
  },
  {
    year: "Feb 2023",
    place: "Scholar Planet · Freelance APM",
    title: "Took a basic quiz app and rebuilt it into a platform",
    body: (
      <>
        My first PM role. When I joined, Scholar Planet was a{" "}
        <span className="hl">basic quiz app with fewer than 100 users</span>. I
        did the market research and competitor teardowns, redesigned the UI end
        to end, added new modules, and{" "}
        <span className="hl-sage">built the teacher side and student side from
        scratch</span>. I ideated the features — community loops, plan-gated
        content, engagement ops, hierarchical admin dashboards — that turned it
        into a real two-sided platform. The KPIs (3× D30, 2.5× DAU, 50 school
        pilots) came out of that transformation, not out of retention tricks.
      </>
    ),
    Art: ScholarPlanetArt,
    accent: "#6FA69A",
  },
  {
    year: "2024",
    place: "50 Kendriya Vidyalayas",
    title: "A messy, wonderful last mile",
    body: (
      <>
        Co-led B2B GTM with the CEO. Gathered requirements from state officials,
        designed hierarchical admin dashboards, and pitched to school leadership.
        Ran pilot delivery on-site with{" "}
        <span className="hl">100+ students and 10+ teachers per school</span>. I
        learned that a good product only matters if it survives contact with
        reality — and that reality is often a Wi-Fi outage in a KV computer lab.
      </>
    ),
    Art: KVPilotArt,
    accent: "#D97757",
  },
  {
    year: "Nov 2024 — now",
    place: "Vantedge AI (YC W22) · Mumbai",
    title: "AI Product Manager × Forward-Deployed",
    body: (
      <>
        My real work isn't writing PRDs. It's{" "}
        <span className="hl-terra">talking to users first</span>, sitting with
        the problem statements and requirements until they're honest, sketching
        prototypes / designs, and ideating solutions at the product level with
        the team.{" "}
        <em>Then</em> the PRD gets written. That process ran across every
        module in FundOS and every agent in the suite.
        <br />
        <br />
        Being YC, we pivoted fast:{" "}
        <span className="hl-sage">
          agents-only → MCA underwriting → FundOS + agent suite
        </span>
        . I shipped through those pivots, embedded with hedge funds / PE /
        private credit / VC clients end-to-end, and built the billing
        infrastructure — pricing model, Stripe self-serve, usage-based credit
        metering, dunning ladder — because zero-to-one means everything.
      </>
    ),
    Art: VantedgeChapterArt,
    accent: "#B85C3E",
  },
];

export default function JourneyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      {/* header */}
      <section className="pt-8 md:pt-14">
        <Reveal>
          <div className="chip mb-6">01 · the long way here</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-5xl md:text-7xl text-espresso leading-[0.95]">
            grew up here<span className="text-terra">,</span> still growing
            <span className="text-terra">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-espresso/75 text-lg leading-relaxed">
            I try to write these entries the way I'd tell them to a friend over
            coffee — a bit of context, a bit of what I learned, one moment that
            still makes me smile. Scroll gently.
          </p>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="mt-16 md:mt-24 relative">
        {/* spine */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-espresso/20 border-l-2 border-dashed border-espresso/25" />

        <div className="space-y-16 md:space-y-24">
          {chapters.map((c, i) => {
            const flip = i % 2 === 1;
            const Art = c.Art;
            return (
              <div key={i} className="relative">
                {/* dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 -translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div
                    className="h-5 w-5 rounded-full border-2 border-espresso"
                    style={{ background: c.accent }}
                  />
                </motion.div>

                <div
                  className={`grid md:grid-cols-2 gap-6 md:gap-14 items-start pl-12 md:pl-0 ${
                    flip ? "md:[&>*:first-child]:col-start-2" : ""
                  }`}
                >
                  {/* Text */}
                  <Reveal className={flip ? "md:pl-8" : "md:pr-8 md:text-right"}>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-espresso/50">
                      {c.year}
                    </div>
                    <div
                      className="mt-1 font-mono text-sm"
                      style={{ color: c.accent }}
                    >
                      {c.place}
                    </div>
                    <h3 className="mt-3 font-serif text-3xl md:text-4xl text-espresso leading-tight">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-espresso/80 leading-relaxed">
                      {c.body}
                    </p>
                  </Reveal>

                  {/* Art */}
                  <Reveal
                    delay={0.1}
                    className={flip ? "md:pr-8 md:order-first" : "md:pl-8"}
                  >
                    <div
                      className="rounded-2xl border-2 border-espresso p-4 shadow-chunk"
                      style={{ background: `${c.accent}22` }}
                    >
                      <div className="h-40 md:h-44">
                        <Art />
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cap */}
      <section className="mt-24">
        <Reveal>
          <div className="rounded-2xl border-2 border-espresso bg-parchment paper p-8 shadow-chunk">
            <h3 className="font-serif text-2xl md:text-3xl text-espresso">
              what i'm chasing next
            </h3>
            <p className="mt-3 text-espresso/80 leading-relaxed max-w-2xl">
              A team where AI product and AI engineering are the same job. Where
              I can keep embedding with users, keep owning both the model and
              the metric, and keep making things that are just a little
              friendlier than they need to be.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["APM", "Associate AI PM", "AI Product Manager", "Forward-Deployed PM", "0→1", "0→1 growth"].map(
                (t) => (
                  <span key={t} className="chip">{t}</span>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
