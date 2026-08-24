import { Reveal } from "@/components/Reveal";

export type Decision = {
  question: string;
  chose: string;
  why: string;
  defended?: string;
};

/** "Why X not Y" decision cards — the CEO-mindset section. */
export function DecisionList({ items }: { items: Decision[] }) {
  return (
    <div className="mt-6 space-y-4">
      {items.map((d, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <div className="rounded-2xl border-2 border-espresso bg-parchment p-5 md:p-6 shadow-chunk">
            <div className="flex items-baseline gap-3">
              <div className="font-serif text-3xl text-terra/70 tabular-nums">
                0{i + 1}
              </div>
              <div className="font-serif text-xl md:text-2xl text-espresso leading-tight">
                {d.question}
              </div>
            </div>
            <div className="mt-3 grid md:grid-cols-[auto_1fr] gap-2 md:gap-4 md:items-baseline">
              <div className="font-mono text-[10px] uppercase tracking-widest text-espresso/50 md:pt-1">
                chose
              </div>
              <div className="text-espresso font-medium">{d.chose}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-espresso/50 md:pt-1">
                why
              </div>
              <div className="text-espresso/85 leading-relaxed">{d.why}</div>
              {d.defended && (
                <>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-espresso/50 md:pt-1">
                    defended
                  </div>
                  <div className="text-espresso/70 text-sm">{d.defended}</div>
                </>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
