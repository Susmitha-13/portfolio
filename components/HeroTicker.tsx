"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * The Ledger — a rotating KPI ticker for the landing hero right column.
 * Big serif number morphs every ~3.6s; live status strip at top; dot-ledger below.
 */

type Entry = {
  value: string;
  label: string;
  context: string;
  from: string;
  color: string;
};

const entries: Entry[] = [
  {
    value: "20 → 5 min",
    label: "research latency",
    context: "Broke a single-workflow LLM into a specialised-agent orchestration.",
    from: "Research Agent",
    color: "#4A5FC1",
  },
  {
    value: "58%",
    label: "underwriting time cut",
    context: "QLoRA-fine-tuned domain LLM for MCA · US + EU.",
    from: "MCA Agent",
    color: "#D97757",
  },
  {
    value: "3w → 3d",
    label: "client TTV",
    context: "Forward-deployed with a Tier-1 fund · on-site from day one.",
    from: "AI CRM · FDE",
    color: "#6FA69A",
  },
  {
    value: "3×",
    label: "D30 retention",
    context: "Diagnosed the drop as a peer-connection gap · shipped community.",
    from: "Scholar Planet",
    color: "#E8A5A5",
  },
  {
    value: "78 → 98%",
    label: "extraction accuracy",
    context: "Prompts v1 → v4 · schema-forced · sectioned retrieval · few-shot.",
    from: "Research Agent",
    color: "#B85C3E",
  },
  {
    value: "11+",
    label: "FundOS modules",
    context: "One AI-native OS for hedge funds, PE, private credit & VC.",
    from: "FundOS",
    color: "#E8B84A",
  },
];

export function HeroTicker() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % entries.length), 3600);
    return () => clearInterval(t);
  }, []);

  const active = entries[i];

  return (
    <div className="scene w-full">
      <motion.div
        className="relative rounded-3xl border-2 border-espresso bg-parchment shadow-chunklg overflow-hidden"
        style={{ perspective: 1200 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Accent bar that shifts color per entry */}
        <motion.div
          className="absolute top-0 left-0 h-1.5 w-full"
          animate={{ background: active.color }}
          transition={{ duration: 0.6 }}
        />

        {/* Live status strip */}
        <div className="px-6 pt-6 pb-3 flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terra opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-terra" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/60">
            currently · shipping{" "}
            <span className="text-espresso">AI Copilot</span> · Vantedge AI
          </span>
        </div>

        {/* The big rotating number */}
        <div className="px-6 pt-2 pb-2 min-h-[240px] flex flex-col justify-center relative">
          {/* watermark from-badge */}
          <div className="absolute top-3 right-6">
            <motion.div
              key={`badge-${i}`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-espresso/40"
            >
              from · {active.from}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="font-serif text-espresso leading-[0.9] tracking-tight tabular-nums"
                style={{ fontSize: "clamp(56px, 8vw, 92px)" }}
              >
                {active.value}
                <span style={{ color: active.color }}>.</span>
              </div>

              <div className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-espresso/70">
                {active.label}
              </div>

              <div className="mt-3 text-espresso/75 leading-relaxed max-w-md text-sm">
                {active.context}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot-ledger — showing there's more */}
        <div className="px-6 pb-6 pt-3 border-t border-espresso/15 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            {entries.map((e, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`show ${e.label}`}
                className="relative h-2 rounded-full transition-all"
                style={{
                  width: idx === i ? 22 : 8,
                  background: idx === i ? e.color : "#2A1F1A22",
                }}
              />
            ))}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-espresso/45 tabular-nums">
            {String(i + 1).padStart(2, "0")}
            <span className="text-espresso/25"> / </span>
            {String(entries.length).padStart(2, "0")}
          </div>
        </div>
      </motion.div>

      {/* Sub-caption tying the panel to the page */}
      <motion.div
        className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/45 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        the ledger · numbers from the case studies below
      </motion.div>
    </div>
  );
}
