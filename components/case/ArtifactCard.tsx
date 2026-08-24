"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, PropsWithChildren } from "react";

/**
 * A collapsible artifact card. Shows a title + one-line description; click to expand
 * and reveal the artifact (PRD excerpt, prompt diff, wireframe, ticket, etc.).
 */
export function ArtifactCard({
  kind,
  title,
  summary,
  redacted = false,
  children,
}: PropsWithChildren<{
  kind: string;
  title: string;
  summary: string;
  redacted?: boolean;
}>) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border-2 border-espresso bg-parchment shadow-chunk overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-4 md:p-5 flex items-start justify-between gap-4 hover:bg-parchment/80 transition"
      >
        <div>
          <div className="flex items-center gap-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60">
              {kind}
            </div>
            {redacted && (
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] bg-espresso text-cream px-1.5 py-0.5 rounded-sm">
                redacted
              </span>
            )}
          </div>
          <div className="mt-1 font-serif text-lg text-espresso">{title}</div>
          <div className="mt-1 text-sm text-espresso/70">{summary}</div>
        </div>
        <div className="font-mono text-lg text-espresso/70 select-none pt-1">
          {open ? "−" : "+"}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-5 pb-5 pt-1 border-t border-espresso/20 text-sm text-espresso/85 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** A grouped block of artifact cards. */
export function ArtifactGroup({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-espresso/50 mb-3">
        {title}
      </div>
      <div className="grid gap-3">{children}</div>
    </div>
  );
}
