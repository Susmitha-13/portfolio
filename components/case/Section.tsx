import { Reveal } from "@/components/Reveal";
import { PropsWithChildren } from "react";

/** Numbered section header used inside a case study. */
export function Section({
  n,
  kicker,
  title,
  children,
  tone = "default",
}: PropsWithChildren<{
  n: string;
  kicker: string;
  title: React.ReactNode;
  tone?: "default" | "dark" | "accent";
}>) {
  const wrap =
    tone === "dark"
      ? "rounded-3xl border-2 border-espresso bg-espresso text-cream p-6 md:p-10 shadow-chunklg"
      : tone === "accent"
      ? "rounded-3xl border-2 border-espresso bg-terra/20 p-6 md:p-10 shadow-chunk"
      : "";

  const kickerColor = tone === "dark" ? "text-mustard" : "text-espresso/50";
  const titleColor = tone === "dark" ? "text-cream" : "text-espresso";

  return (
    <section className="mt-16 md:mt-20">
      <Reveal>
        <div className={wrap || ""}>
          <div
            className={`font-mono text-[10px] uppercase tracking-[0.2em] ${kickerColor} mb-3`}
          >
            {n} · {kicker}
          </div>
          <h2
            className={`font-serif text-3xl md:text-[42px] leading-tight ${titleColor}`}
          >
            {title}
          </h2>
          <div
            className={`mt-5 ${tone === "dark" ? "text-cream/85" : "text-espresso/80"} leading-relaxed max-w-3xl`}
          >
            {children}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
