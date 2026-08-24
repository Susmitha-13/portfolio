import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

export type Metric = {
  value: string;
  label: string;
  detail?: string;
  color?: string;
};

/**
 * Visual metric cards for a case study.
 * Values are strings so we can show "20 → 5 min", "3×", "78 → 98%" as-is.
 */
export function MetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {metrics.map((m, i) => {
        const color = m.color ?? ["#D97757", "#6FA69A", "#E8B84A", "#4A5FC1", "#B85C3E", "#E8A5A5"][i % 6];
        return (
          <Reveal key={i} delay={i * 0.04}>
            <TiltCard maxTilt={6} className="h-full">
              <div
                className="relative overflow-hidden rounded-2xl border-2 border-espresso h-full p-5 shadow-chunk"
                style={{ background: `${color}18` }}
              >
                <div
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-25"
                  style={{ background: color }}
                />
                <div className="relative">
                  <div className="font-serif text-3xl md:text-4xl text-espresso leading-none tabular-nums">
                    {m.value}
                  </div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-espresso font-semibold">
                    {m.label}
                  </div>
                  {m.detail && (
                    <div className="mt-1 text-xs text-espresso/70 leading-snug">
                      {m.detail}
                    </div>
                  )}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        );
      })}
    </div>
  );
}
