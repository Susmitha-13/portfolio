/** User → Job → Pain → Constraints → Success — the framing block. */
export function Framing({
  user,
  job,
  pain,
  constraints,
  success,
}: {
  user: string;
  job: string;
  pain: string;
  constraints: string;
  success: string;
}) {
  const rows = [
    { k: "user", v: user, c: "#4A5FC1" },
    { k: "job", v: job, c: "#6FA69A" },
    { k: "pain", v: pain, c: "#D97757" },
    { k: "constraints", v: constraints, c: "#B85C3E" },
    { k: "success", v: success, c: "#E8B84A" },
  ];
  return (
    <div className="rounded-2xl border-2 border-espresso bg-parchment paper p-5 md:p-6 shadow-chunk">
      <div className="grid gap-3">
        {rows.map((r, i) => (
          <div key={i} className="flex items-start gap-4">
            <div
              className="mt-1 h-2 w-2 shrink-0 rounded-full"
              style={{ background: r.c }}
            />
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-espresso/60">
                {r.k}
              </div>
              <div className="mt-0.5 text-espresso leading-relaxed">{r.v}</div>
            </div>
            {i < rows.length - 1 && (
              <div className="hidden md:block font-mono text-xs text-espresso/30 pt-1">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
