import { Mascot, Sparkle } from "@/components/Mascot";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24">
      <section className="pt-8 md:pt-14">
        <Reveal>
          <div className="chip mb-6">04 · let's talk</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-5xl md:text-7xl text-espresso leading-[0.95]">
            hi again. <span className="hl">say hello</span>
            <span className="text-terra">?</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-espresso/75 text-lg leading-relaxed">
            The fastest way to reach me is email. I read every note and I write
            back — usually within a day, sometimes within an hour if the coffee
            is good.
          </p>
        </Reveal>
      </section>

      <section className="mt-14 scene">
        <TiltCard maxTilt={6}>
          <div className="rounded-2xl border-2 border-espresso bg-parchment p-6 md:p-10 shadow-chunklg relative overflow-hidden">
            <div className="absolute top-6 right-6"><Sparkle size={22} /></div>
            <div className="absolute bottom-6 left-6"><Sparkle size={16} delay={0.6} /></div>

            <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50">
                  the important bits
                </div>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl text-espresso">
                  susmitha mukkamala
                </h2>
                <div className="mt-1 font-mono text-sm text-espresso/70">
                  Hyderabad, India · currently in Mumbai
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href="mailto:susmitha.2003m@gmail.com"
                    className="group flex items-center gap-3 text-lg text-espresso hover:text-terra transition"
                  >
                    <span className="h-8 w-8 grid place-items-center rounded-lg border-2 border-espresso bg-parchment group-hover:bg-terra group-hover:text-cream transition">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="5" width="18" height="14" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    susmitha.2003m@gmail.com
                  </a>

                  <a
                    href="https://linkedin.com/in/susmitha-mukkamala-b3314b204"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-lg text-espresso hover:text-terra transition"
                  >
                    <span className="h-8 w-8 grid place-items-center rounded-lg border-2 border-espresso bg-parchment group-hover:bg-terra group-hover:text-cream transition">
                      <span className="font-serif text-sm font-bold">in</span>
                    </span>
                    linkedin
                  </a>

                  <div className="group flex items-center gap-3 text-lg text-espresso">
                    <span className="h-8 w-8 grid place-items-center rounded-lg border-2 border-espresso bg-parchment">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    +91-9962291322
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="chip">APM</span>
                  <span className="chip">Associate AI PM</span>
                  <span className="chip">AI Product Manager</span>
                  <span className="chip">Forward-Deployed PM</span>
                  <span className="chip">0 → 1</span>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl"
                    style={{ background: "#e8b84a", opacity: 0.35, filter: "blur(20px)" }}
                  />
                  <div className="rounded-2xl border-2 border-espresso bg-parchment p-4 shadow-chunk">
                    <Mascot size={180} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </section>

      <section className="mt-14 grid md:grid-cols-2 gap-5">
        <Reveal>
          <div className="rounded-2xl border-2 border-espresso bg-sage/25 p-6 shadow-chunk">
            <h3 className="font-serif text-2xl text-espresso">reach out if</h3>
            <ul className="mt-3 space-y-2 text-espresso/80">
              <li>· you're hiring for an <b>APM</b> or <b>Associate AI PM</b></li>
              <li>· you need a PM who can co-author PRDs with AI guardrails</li>
              <li>· you love a North Star, a KPI tree, and a good cohort curve</li>
              <li>· you're building 0→1 and want someone forward-deployed with users</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border-2 border-espresso bg-terra/20 p-6 shadow-chunk">
            <h3 className="font-serif text-2xl text-espresso">
              response promise
            </h3>
            <ul className="mt-3 space-y-2 text-espresso/80">
              <li>· email · within a day</li>
              <li>· linkedin DM · within two</li>
              <li>· thoughtful cold outreach · always replied to</li>
              <li>· rude cold outreach · politely deleted</li>
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
