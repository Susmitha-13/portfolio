"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { PropsWithChildren } from "react";

type Props = {
  href: string;
  kicker: string;
  title: string;
  body: string;
  accent?: string;
  arrow?: string;
  className?: string;
};

export function HubTile({
  href,
  kicker,
  title,
  body,
  accent = "#D97757",
  arrow = "→",
  children,
  className = "",
}: PropsWithChildren<Props>) {
  return (
    <Link href={href} className={`group block scene ${className}`}>
      <TiltCard maxTilt={9} className="w-full h-full">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="relative overflow-hidden rounded-2xl border-2 border-espresso bg-parchment p-6 md:p-7 h-full shadow-chunk"
        >
          {/* accent bar */}
          <div
            className="absolute top-0 left-0 h-1.5 w-full"
            style={{ background: accent }}
          />

          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50">
                {kicker}
              </div>
              <h3 className="mt-2 font-serif text-3xl md:text-4xl text-espresso">
                {title}
              </h3>
            </div>
            <motion.div
              className="font-mono text-2xl text-espresso group-hover:text-terra"
              initial={{ x: 0 }}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              {arrow}
            </motion.div>
          </div>

          <p className="mt-4 text-espresso/75 leading-relaxed max-w-md">{body}</p>

          <div className="mt-6 h-24 md:h-28 flex items-end justify-end">{children}</div>
        </motion.div>
      </TiltCard>
    </Link>
  );
}
