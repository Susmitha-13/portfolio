import { Reveal } from "@/components/Reveal";
import { MetricGrid, type Metric } from "./MetricGrid";

/** Header bar for a case study — kicker, title, subtitle, headline metrics. */
export function CaseStudyHeader({
  kicker,
  title,
  subtitle,
  intro,
  tags,
  headline,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle: string;
  intro: React.ReactNode;
  tags: string[];
  headline: Metric[];
}) {
  return (
    <section className="pt-8 md:pt-14">
      <Reveal>
        <div className="chip mb-6">{kicker}</div>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-serif text-4xl md:text-6xl text-espresso leading-[0.98]">
          {title}
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-2 font-mono text-sm text-terra">{subtitle}</div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-5 text-espresso/80 text-lg leading-relaxed max-w-3xl">
          {intro}
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </Reveal>
      <MetricGrid metrics={headline} />
    </section>
  );
}
