"use client";

/**
 * ASCII-flow-style architecture diagram. Simple, high-signal, low chart-junk.
 * Pass an array of layers; each layer is one row (or a fan-out row).
 */
export type LayerNode = {
  label: string;
  color?: string;
  detail?: string;
};

export type Layer =
  | { kind: "row"; nodes: LayerNode[] }
  | { kind: "fanout"; label: string; children: LayerNode[]; color?: string };

export function ArchDiagram({ title, layers }: { title?: string; layers: Layer[] }) {
  return (
    <div className="rounded-2xl border-2 border-espresso bg-parchment gridlines p-5 md:p-8 shadow-chunk">
      {title && (
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50 mb-4">
          {title}
        </div>
      )}
      <div className="flex flex-col items-center gap-2">
        {layers.map((layer, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            {i > 0 && <Arrow />}
            {layer.kind === "row" ? (
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {layer.nodes.map((n, j) => (
                  <Node key={j} {...n} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Node label={layer.label} color={layer.color} />
                <Arrow />
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {layer.children.map((n, j) => (
                    <Node key={j} {...n} small />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Node({
  label,
  color = "#F7ECD8",
  detail,
  small,
}: LayerNode & { small?: boolean }) {
  return (
    <div
      className={`rounded-lg border-2 border-espresso shadow-chunk text-center ${
        small ? "px-3 py-1.5" : "px-4 py-2"
      }`}
      style={{ background: color }}
    >
      <div
        className={`font-mono ${
          small ? "text-xs" : "text-sm"
        } font-semibold text-espresso whitespace-nowrap`}
      >
        {label}
      </div>
      {detail && (
        <div className="text-[10px] text-espresso/60 mt-0.5">{detail}</div>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <div className="font-mono text-espresso/40 text-lg leading-none py-0.5">
      ↓
    </div>
  );
}
