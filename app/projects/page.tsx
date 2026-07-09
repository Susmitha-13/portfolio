import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import {
  AgentBrowserAnim,
  DeployConsoleAnim,
  FederatedAnim,
  FusionAnim,
} from "@/components/ProjectAnims";
import { projects } from "@/lib/data";

const anims = {
  anxietysense: FederatedAnim,
  truthlens: FusionAnim,
  "regression-agent": AgentBrowserAnim,
  "deploy-console": DeployConsoleAnim,
} as const;

const colorMap: Record<string, string> = {
  terra: "#D97757",
  sage: "#6FA69A",
  mustard: "#E8B84A",
  ai: "#4A5FC1",
  clay: "#B85C3E",
  rose: "#E8A5A5",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      {/* header */}
      <section className="pt-8 md:pt-14">
        <Reveal>
          <div className="chip mb-6">03 · things i built</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-5xl md:text-7xl text-espresso leading-[0.95]">
            products i've{" "}
            <span className="hl-terra">shipped or shaped</span>
            <span className="text-terra">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-espresso/75 text-lg leading-relaxed">
            Two internal AI products I proposed and delivered at Vantedge, plus
            two product-thinking exercises from earlier work. Hover the cards —
            each animation is a peek at the story.
          </p>
        </Reveal>
      </section>

      {/* Project sections */}
      <div className="mt-16 space-y-16">
        {projects.map((p, i) => {
          const Anim = anims[p.slug as keyof typeof anims];
          const accent = colorMap[p.color] ?? "#D97757";
          const flip = i % 2 === 1;
          return (
            <section key={p.slug} className="scene">
              <div
                className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
                  flip ? "md:[&>*:first-child]:col-start-2" : ""
                }`}
              >
                <Reveal>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50">
                      0{i + 1} · project
                    </div>
                    <h2 className="mt-2 font-serif text-4xl md:text-5xl text-espresso leading-tight">
                      {p.title}
                    </h2>
                    <div className="mt-2 font-mono text-sm" style={{ color: accent }}>
                      {p.subtitle}
                    </div>
                    <p className="mt-4 text-espresso/80 leading-relaxed max-w-lg">
                      {p.story}
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-2">
                      {p.kpis.map((k, j) => (
                        <div
                          key={j}
                          className="rounded-xl border-2 border-espresso bg-parchment p-3 shadow-chunk"
                        >
                          <div className="font-mono text-[9px] uppercase tracking-widest text-espresso/50">
                            {k.k}
                          </div>
                          <div className="mt-1 font-serif text-lg text-espresso leading-tight">
                            {k.v}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <TiltCard maxTilt={7}>
                    <div
                      className="rounded-2xl border-2 border-espresso bg-parchment gridlines p-4 md:p-6 shadow-chunklg overflow-hidden"
                      style={{ background: `${accent}18` }}
                    >
                      <Anim />
                    </div>
                  </TiltCard>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="mt-24">
        <Reveal>
          <div className="rounded-2xl border-2 border-espresso bg-espresso text-cream p-8 md:p-10 shadow-chunklg text-center">
            <h3 className="font-serif text-3xl md:text-4xl">
              got a 0→1 ai product to ship?
            </h3>
            <p className="mt-3 text-cream/80 max-w-xl mx-auto">
              I'm most excited by AI PM roles where the product surface is
              genuinely new — where taste, guardrails, and user research all
              matter and the answer isn't in a playbook yet.
            </p>
            <a href="/contact" className="btn-chunk mt-6" style={{ background: "#D97757", boxShadow: "5px 5px 0 0 #F7ECD8" }}>
              write to me →
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
