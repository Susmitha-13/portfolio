import { HubTile } from "@/components/HubTile";
import {
  ContactArt,
  JourneyArt,
  ProjectsArt,
  VantedgeArt,
} from "@/components/TileArt";
import { GuideMascot } from "@/components/GuideMascot";
import { EdtechArt } from "@/components/EdtechArt";
import { Sparkle } from "@/components/Mascot";
import { Reveal } from "@/components/Reveal";
import { nowSection } from "@/lib/data";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      {/* HERO — has enough vertical room for the guide mascot animation */}
      <section className="relative pt-8 md:pt-14 md:min-h-[560px] scene">
        {/* floating sparkles */}
        <div className="pointer-events-none absolute -top-2 right-8 hidden md:block">
          <Sparkle size={22} />
        </div>
        <div className="pointer-events-none absolute top-32 left-10 hidden md:block">
          <Sparkle size={18} delay={0.4} />
        </div>
        <div className="pointer-events-none absolute top-2 left-1/3 hidden md:block">
          <Sparkle size={14} delay={1.2} />
        </div>

        {/* Copy on the left; mascot animation is an overlay on the whole hero */}
        <div className="max-w-2xl relative z-[2]">
          <Reveal>
            <div className="chip mb-6">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-terra animate-pulseSoft" />
              open to APM · associate ai pm · ai product roles
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-serif text-[3.2rem] md:text-[5.6rem] leading-[0.95] text-espresso">
              hi, i'm{" "}
              <span className="hl-terra">susmitha</span>
              <span className="text-terra">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-espresso/80 leading-relaxed">
              I'm an <span className="hl-sage">AI Product Manager</span> who ships
              products that survive contact with real users — and I obsess over
              the KPIs that prove it.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-4 max-w-xl text-espresso/60">
              Currently at{" "}
              <a
                href="https://vantedge.ai"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-2 underline-offset-4 hover:text-terra"
              >
                Vantedge AI (YC W22)
              </a>{" "}
              — writing PRDs, owning KPIs, and embedding with hedge fund, PE, and
              VC clients to make sure the AI actually lands. Before that,{" "}
              <a
                href="/scholar-planet"
                className="underline decoration-2 underline-offset-4 hover:text-terra"
              >
                Scholar Planet
              </a>{" "}
              — edtech, 3× D30, 50-school B2B pilot.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/vantedge" className="btn-chunk">
                fintech case study <span>→</span>
              </a>
              <a href="/scholar-planet" className="btn-outline">
                edtech case study
              </a>
            </div>
          </Reveal>
        </div>

        {/* Mascot overlay — full-hero, absolute; hidden on mobile */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <GuideMascot />
        </div>
      </section>

      {/* WHAT'S INSIDE — subpage tiles */}
      <section className="mt-4 md:mt-6 relative">
        <Reveal>
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">
              pick a door
              <span className="text-terra">.</span>
            </h2>
            <div className="hidden md:block font-mono text-xs text-espresso/50 max-w-xs text-right">
              a hub, not a one-pager — subpages are more fun to wander through
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <Reveal>
            <HubTile
              href="/journey"
              kicker="01 · the long way here"
              title="my journey"
              body="From my first for-loop at VIT to 50 school pilots to shipping LLM products for enterprise funds. The story, in vignettes."
              accent="#D97757"
            >
              <JourneyArt />
            </HubTile>
          </Reveal>

          <Reveal delay={0.08}>
            <HubTile
              href="/vantedge"
              kicker="02 · case study · fintech"
              title="vantedge ai (yc w22)"
              body="PRDs across FundOS, embedded delivery with hedge funds & PE, and the trust-first eval harness that ships alongside the AI."
              accent="#4A5FC1"
            >
              <VantedgeArt />
            </HubTile>
          </Reveal>

          <Reveal delay={0.16}>
            <HubTile
              href="/scholar-planet"
              kicker="03 · case study · edtech"
              title="scholar planet"
              body="Defined WAL as North Star, diagnosed a peer-connection gap, and 3×'d D30 retention. Also co-led B2B GTM at 50 schools."
              accent="#6FA69A"
            >
              <EdtechArt />
            </HubTile>
          </Reveal>

          <Reveal delay={0.24}>
            <HubTile
              href="/projects"
              kicker="04 · things i've shipped"
              title="projects & experiments"
              body="An internal AI QA product I proposed & shipped, a deploy console adopted in 3 weeks, and two product-thinking exercises."
              accent="#E8B84A"
            >
              <ProjectsArt />
            </HubTile>
          </Reveal>
        </div>

        {/* Contact — friendly CTA */}
        <Reveal delay={0.3}>
          <a
            href="/contact"
            className="mt-6 group block scene"
          >
            <div className="rounded-2xl border-2 border-espresso bg-rose/40 p-6 md:p-8 shadow-chunk relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-[#E8A5A5]" />
              <div className="flex items-center justify-between gap-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50">
                    05 · say hi
                  </div>
                  <h3 className="mt-2 font-serif text-3xl md:text-4xl text-espresso">
                    building something ambitious?
                  </h3>
                  <p className="mt-3 text-espresso/75 max-w-lg">
                    I write back fast — and I'd love to hear about it.
                  </p>
                </div>
                <div className="font-serif text-4xl md:text-5xl text-espresso group-hover:translate-x-1 group-hover:text-terra transition">
                  ✿
                </div>
              </div>
            </div>
          </a>
        </Reveal>
      </section>

      {/* NOW */}
      <section className="mt-16">
        <Reveal>
          <div className="rounded-2xl border-2 border-espresso bg-parchment paper p-6 md:p-8 shadow-chunk">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terra opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terra" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-espresso/60">
                now · july 2026
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-espresso mb-4">
              what's on my desk this week
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {nowSection.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-espresso/80 leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terra" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
