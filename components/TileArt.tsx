"use client";

import { motion } from "framer-motion";

/** Tiny pixel-art vignettes used inside HubTiles — one per subpage theme. */

export function JourneyArt() {
  // path with waypoints — a little journey
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full pixelated" xmlns="http://www.w3.org/2000/svg">
      {/* trail dots */}
      {[...Array(10)].map((_, i) => (
        <motion.circle
          key={i}
          cx={12 + i * 10}
          cy={60 - Math.sin(i * 0.7) * 18}
          r={1.6}
          fill="#2a1f1a"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 1], scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4, delay: i * 0.08, repeat: Infinity, repeatDelay: 2, repeatType: "reverse" }}
        />
      ))}
      {/* waypoints */}
      <motion.rect x="10" y="52" width="5" height="5" fill="#D97757" animate={{ y: [52, 50, 52] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.rect x="56" y="30" width="5" height="5" fill="#6FA69A" animate={{ y: [30, 28, 30] }} transition={{ duration: 2, delay: 0.4, repeat: Infinity }} />
      <motion.rect x="104" y="48" width="5" height="5" fill="#E8B84A" animate={{ y: [48, 46, 48] }} transition={{ duration: 2, delay: 0.8, repeat: Infinity }} />
      {/* pin */}
      <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
        <rect x="103" y="38" width="7" height="7" fill="#2a1f1a" />
        <rect x="105" y="40" width="3" height="3" fill="#f7ecd8" />
      </motion.g>
    </svg>
  );
}

export function VantedgeArt() {
  // stacked pixel agent boxes
  return (
    <svg viewBox="0 0 140 80" className="w-full h-full pixelated">
      {/* orchestrator */}
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <rect x="60" y="10" width="20" height="14" fill="#2a1f1a" />
        <rect x="62" y="12" width="16" height="2" fill="#E8B84A" />
        <rect x="62" y="16" width="10" height="2" fill="#f7ecd8" />
      </motion.g>
      {/* lines */}
      <line x1="70" y1="24" x2="20" y2="48" stroke="#2a1f1a" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="70" y1="24" x2="70" y2="48" stroke="#2a1f1a" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="70" y1="24" x2="120" y2="48" stroke="#2a1f1a" strokeWidth="1" strokeDasharray="2 2" />
      {/* agents */}
      {[
        { x: 10, c: "#D97757" },
        { x: 60, c: "#6FA69A" },
        { x: 110, c: "#4A5FC1" },
      ].map((a, i) => (
        <motion.g
          key={i}
          animate={{ y: [0, -1.5, 0] }}
          transition={{ duration: 1.8, delay: i * 0.2, repeat: Infinity }}
        >
          <rect x={a.x} y="48" width="20" height="14" fill={a.c} />
          <rect x={a.x + 2} y="50" width="16" height="2" fill="#f7ecd8" opacity="0.7" />
          <rect x={a.x + 2} y="54" width="10" height="2" fill="#2a1f1a" opacity="0.4" />
        </motion.g>
      ))}
    </svg>
  );
}

export function ProjectsArt() {
  return (
    <svg viewBox="0 0 140 80" className="w-full h-full pixelated">
      {/* three floating pixel cards */}
      {[
        { x: 10, y: 40, c: "#6FA69A", d: 0 },
        { x: 55, y: 20, c: "#E8B84A", d: 0.2 },
        { x: 100, y: 40, c: "#D97757", d: 0.4 },
      ].map((c, i) => (
        <motion.g
          key={i}
          animate={{ y: [0, -3, 0], rotate: [-1, 2, -1] }}
          transition={{ duration: 2.4, delay: c.d, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: `${c.x + 15}px ${c.y + 10}px` }}
        >
          <rect x={c.x} y={c.y} width="30" height="24" fill="#2a1f1a" />
          <rect x={c.x + 2} y={c.y + 2} width="26" height="20" fill={c.c} />
          <rect x={c.x + 4} y={c.y + 4} width="22" height="2" fill="#2a1f1a" opacity="0.35" />
          <rect x={c.x + 4} y={c.y + 8} width="14" height="2" fill="#2a1f1a" opacity="0.25" />
        </motion.g>
      ))}
    </svg>
  );
}

export function ContactArt() {
  return (
    <svg viewBox="0 0 140 80" className="w-full h-full pixelated">
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* envelope */}
        <rect x="45" y="24" width="50" height="32" fill="#f7ecd8" stroke="#2a1f1a" strokeWidth="2" />
        <path d="M45 24 L70 44 L95 24" stroke="#2a1f1a" strokeWidth="2" fill="none" />
        {/* heart stamp */}
        <rect x="82" y="27" width="8" height="6" fill="#E8A5A5" />
        <rect x="83" y="26" width="2" height="1" fill="#E8A5A5" />
        <rect x="86" y="26" width="2" height="1" fill="#E8A5A5" />
      </motion.g>
      {/* sparkles */}
      <motion.rect x="20" y="20" width="2" height="2" fill="#E8B84A"
        animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <motion.rect x="115" y="55" width="2" height="2" fill="#E8B84A"
        animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
    </svg>
  );
}
