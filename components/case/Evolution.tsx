import { Reveal } from "@/components/Reveal";

export type Step = {
  label: string;      // "v1", "v2", "attempt 1"
  what: string;       // "Single long-running workflow"
  problem: string;    // "~20 min latency, hard to debug"
  insight?: string;   // "Different research tasks need different reasoning"
  change?: string;    // "Specialized agents + orchestration"
  result?: string;    // "~5 min"
};

/** v1 → v2 → v3 evolution story. */
export function Evolution({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-6 space-y-4">
      {steps.map((s, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div className="rounded-2xl border-2 border-espresso bg-parchment p-5 md:p-6 shadow-chunk">
            <div className="flex items-center gap-3">
              <div
                className="rounded-full border-2 border-espresso bg-espresso text-cream px-3 py-0.5 font-mono text-xs uppercase tracking-widest"
              >
                {s.label}
              </div>
              <div className="font-serif text-lg text-espresso">{s.what}</div>
            </div>
            <dl className="mt-4 grid md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                  problem
                </dt>
                <dd className="mt-1 text-espresso/85 leading-relaxed">
                  {s.problem}
                </dd>
              </div>
              {s.insight && (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                    insight
                  </dt>
                  <dd className="mt-1 text-espresso/85 leading-relaxed">
                    {s.insight}
                  </dd>
                </div>
              )}
              {s.change && (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                    change
                  </dt>
                  <dd className="mt-1 text-espresso/85 leading-relaxed">
                    {s.change}
                  </dd>
                </div>
              )}
              {s.result && (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                    result
                  </dt>
                  <dd className="mt-1 font-serif text-lg text-espresso">
                    {s.result}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
