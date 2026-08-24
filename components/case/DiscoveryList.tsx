import { Reveal } from "@/components/Reveal";

export type DiscoveryItem = {
  channel: string;   // "Client interviews", "Workflow observation", etc.
  finding: string;   // one-line insight
  detail?: string;
};

/** Small list of discovery bullets w/ channels — used in section 02. */
export function DiscoveryList({ items }: { items: DiscoveryItem[] }) {
  return (
    <div className="mt-6 grid md:grid-cols-2 gap-3">
      {items.map((d, i) => (
        <Reveal key={i} delay={i * 0.04}>
          <div className="rounded-2xl border-2 border-espresso bg-parchment p-4 md:p-5 shadow-chunk h-full">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50">
              {d.channel}
            </div>
            <div className="mt-1.5 font-serif text-lg text-espresso leading-snug">
              {d.finding}
            </div>
            {d.detail && (
              <div className="mt-2 text-sm text-espresso/70 leading-relaxed">
                {d.detail}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
