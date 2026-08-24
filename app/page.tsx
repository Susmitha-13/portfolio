import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { cases } from "@/lib/cases";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      {/* HERO */}
      <section className="pt-10 md:pt-16">
        <Reveal>
          <div className="chip mb-6">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-terra animate-pulseSoft" />
            open to APM · associate ai pm · ai product roles
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-serif text-[3.4rem] md:text-[6rem] leading-[0.95] text-espresso max-w-5xl">
            susmitha<span className="text-terra">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-5 max-w-3xl text-espresso/85 text-xl md:text-2xl leading-snug font-serif">
            Product Manager building at the intersection of{" "}
            <span className="hl-terra">AI</span>,{" "}
            <span className="hl-sage">financial workflows</span>, and{" "}
            <span className="hl">complex products</span>.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 max-w-2xl text-espresso/70 leading-relaxed">
            I don&apos;t start with PRDs — I start with the user. Six case
            studies below, each with the problem, the discovery, the
            architecture, the artifacts, what didn&apos;t work, and the
            metric that landed. Redacted where I have to. Direct otherwise.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#selected-work" className="btn-chunk">
              selected work <span>↓</span>
            </a>
            <Link href="/inside" className="btn-outline">
              inside my work
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SELECTED WORK */}
      <section id="selected-work" className="mt-24 md:mt-28 scroll-mt-16">
        <Reveal>
          <div className="flex items-end justify-between mb-8 gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50 mb-2">
                selected work
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-[0.95]">
                six case studies<span className="text-terra">.</span>
              </h2>
            </div>
            <div className="hidden md:block font-mono text-xs text-espresso/50 max-w-xs text-right">
              each one proves something different — click into any of them
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                href={`/work/${c.slug}`}
                className="group block scene"
              >
                <TiltCard maxTilt={4} className="w-full">
                  <div
                    className="relative overflow-hidden rounded-2xl border-2 border-espresso bg-parchment shadow-chunk transition-transform group-hover:-translate-y-0.5"
                  >
                    <div
                      className="absolute top-0 left-0 h-1.5 w-full"
                      style={{ background: c.color }}
                    />
                    <div className="p-5 md:p-6 grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_auto] gap-4 md:gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-3">
                          <div
                            className="font-serif text-2xl text-espresso/50 tabular-nums"
                          >
                            0{i + 1}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-espresso/50">
                            {c.org}
                          </div>
                        </div>
                        <div className="mt-1 font-serif text-2xl md:text-[28px] text-espresso leading-tight">
                          {c.title}
                        </div>
                        <div
                          className="mt-0.5 font-mono text-xs"
                          style={{ color: c.color }}
                        >
                          {c.subtitle}
                        </div>
                        <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-espresso/40">
                          proves · {c.proves}
                        </div>
                      </div>
                      <div className="text-espresso/85 text-sm leading-relaxed">
                        <div>{c.outcome[0]}</div>
                        <div className="mt-1 text-espresso/70">
                          {c.outcome[1]}
                        </div>
                      </div>
                      <div className="font-serif text-3xl text-espresso group-hover:text-terra group-hover:translate-x-1 transition">
                        →
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* THE 7 QUESTIONS — quiet manifesto */}
      <section className="mt-24 md:mt-28">
        <Reveal>
          <div className="rounded-3xl border-2 border-espresso bg-espresso text-cream p-6 md:p-10 shadow-chunklg">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mustard mb-3">
              what this portfolio should answer
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-cream leading-tight max-w-3xl">
              seven questions a hiring manager wants a yes on.
            </h3>
            <ul className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-3 text-cream/85">
              {[
                "Can she discover problems?",
                "Can she talk to customers?",
                "Can she turn ambiguity into requirements?",
                "Can she work with engineers?",
                "Does she understand technology deeply enough?",
                "Can she ship?",
                "Does she think beyond what she's told to do?",
              ].map((q, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="font-mono text-mustard text-sm shrink-0 pt-1 tabular-nums">
                    0{i + 1}
                  </div>
                  <div className="leading-relaxed">{q}</div>
                </li>
              ))}
            </ul>
            <div className="mt-6 font-mono text-xs text-cream/60">
              the last one is the load-bearing one.
            </div>
          </div>
        </Reveal>
      </section>

      {/* INSIDE MY WORK — link block */}
      <section className="mt-16">
        <Reveal>
          <Link
            href="/inside"
            className="group block rounded-2xl border-2 border-espresso bg-parchment paper p-6 md:p-8 shadow-chunk"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50 mb-2">
                  and if you want to look under the hood
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-espresso">
                  inside my work
                </h3>
                <p className="mt-2 text-espresso/70 max-w-xl">
                  PRD excerpts, prompt v1→vN diffs, evaluation frameworks,
                  discovery notes, product teardowns — the evidence layer
                  behind the case studies.
                </p>
              </div>
              <div className="font-serif text-3xl text-espresso group-hover:translate-x-1 group-hover:text-terra transition">
                →
              </div>
            </div>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
