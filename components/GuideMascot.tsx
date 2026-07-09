"use client";

import { motion } from "framer-motion";
import { Mascot } from "./Mascot";

/**
 * Landing sequence:
 *
 *  t=0 → 1.4   idle inside the box (waving)
 *  t=1.4 → 2.0 box lid rotates open
 *  t=2.0 → 3.4 she hops out and slides down alongside the box (right column)
 *  t=3.4 →     box fades away, speech bubble appears above her head
 *
 * The wrapper should be `position: relative` and span the full hero width;
 * the mascot stays inside the right ~360px column so it never overlaps
 * the hero copy or CTAs on the left.
 */
export function GuideMascot() {
  const MASCOT_SIZE = 200;
  const BOX_SIZE = 260;

  return (
    <>
      {/* THE BOX she starts in — top-right of hero (fades out after she leaves) */}
      <motion.div
        className="absolute top-0 right-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0.55, 0] }}
        transition={{ duration: 4.2, times: [0, 0.6, 0.75, 1] }}
      >
        <div className="relative">
          <div
            className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl"
            style={{ background: "#e8b84a", opacity: 0.35, filter: "blur(20px)" }}
          />
          <div
            className="rounded-3xl border-2 border-espresso bg-parchment/60 backdrop-blur-sm shadow-chunklg relative overflow-visible"
            style={{ width: BOX_SIZE, height: BOX_SIZE }}
          >
            {/* box lid — hinges up */}
            <motion.div
              className="absolute -top-3 left-6 right-6 h-4 rounded-t-lg border-2 border-espresso bg-terra origin-bottom"
              initial={{ rotateX: 0, y: 0 }}
              animate={{ rotateX: [0, 0, -110, -110], y: [0, 0, -2, -2] }}
              transition={{
                duration: 3.6,
                times: [0, 0.38, 0.55, 1],
                ease: "easeOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "50% 100%",
              }}
            />

            {/* label */}
            <div className="absolute inset-x-0 bottom-3 text-center font-pixel text-[8px] tracking-widest text-espresso/70">
              ♥ your friendly guide
            </div>

            {/* pixel confetti when she leaves */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute h-1.5 w-1.5"
                style={{
                  background: ["#D97757", "#6FA69A", "#E8B84A", "#E8A5A5", "#4A5FC1"][
                    i
                  ],
                  top: 30,
                  left: 40 + i * 40,
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 0, 1, 1, 0],
                  y: [0, 0, -24, -50, -100],
                  rotate: [0, 0, 90, 200, 360],
                }}
                transition={{
                  duration: 4,
                  times: [0, 0.55, 0.6, 0.75, 1],
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* THE MASCOT — starts inside the box, slides DOWN staying in the right column */}
      <motion.div
        className="absolute pointer-events-none"
        // Anchor: box is at right:16 with 260px width. Mascot 200px wide.
        // Start inside the box centered horizontally: right = 16 + (260-200)/2 = 46.
        // Start vertically about 30px inside the box top.
        style={{ top: 30, right: 46 }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          // Slide out arc, then float straight down along the right edge.
          x: [0, 0, 8, -30, -20, 0, 0, 0],
          y: [0, 0, -16, -6, 60, 160, 240, 280],
          opacity: [0, 1, 1, 1, 1, 1, 1, 1],
          rotate: [0, 0, -8, 5, -3, 2, 0, 0],
          scale: [1, 1, 1.04, 1, 0.98, 0.96, 0.95, 0.95],
        }}
        transition={{
          duration: 3.6,
          times: [0, 0.32, 0.44, 0.55, 0.68, 0.8, 0.92, 1],
          ease: "easeInOut",
        }}
      >
        <Mascot size={MASCOT_SIZE} />
      </motion.div>

      {/* SPEECH BUBBLE — appears above her head after she lands */}
      <motion.div
        className="absolute z-[4]"
        // Above mascot: bubble roughly centered horizontally over mascot (200px sprite),
        // and 30px above the mascot's top when landed (top: 30 + 280 = 310 → bubble at 260).
        style={{ top: 260, right: 34 }}
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        animate={{
          opacity: [0, 0, 1],
          y: [12, 12, 0],
          scale: [0.9, 0.9, 1],
        }}
        transition={{
          duration: 4.2,
          times: [0, 0.86, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="relative rounded-2xl border-2 border-espresso bg-parchment px-4 py-2 shadow-chunk inline-block"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <div className="font-serif text-base text-espresso whitespace-nowrap">
            click a door to know me{" "}
            <motion.span
              className="inline-block text-terra"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 4.4 }}
            >
              ↓
            </motion.span>
          </div>
          {/* tail — down + slightly right of center to point at the mascot */}
          <div
            className="absolute -bottom-2.5 h-4 w-4 rotate-45 border-b-2 border-r-2 border-espresso bg-parchment"
            style={{ left: "50%", marginLeft: -8 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
