"use client";

import { motion } from "framer-motion";

/** Little pixel schoolhouse + a rising retention curve — for the Scholar Planet tile */
export function EdtechArt() {
  return (
    <svg viewBox="0 0 140 80" className="w-full h-full pixelated">
      {/* backdrop grid */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="10"
          y1={20 + i * 15}
          x2="130"
          y2={20 + i * 15}
          stroke="#2a1f1a"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          opacity="0.15"
        />
      ))}

      {/* Retention curve — rises then plateaus (community effect) */}
      <motion.path
        d="M 12 65 C 20 63, 30 60, 40 55 C 50 48, 60 30, 78 24 C 92 22, 108 22, 128 22"
        stroke="#6FA69A"
        strokeWidth="2.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
      />

      {/* Data dots */}
      {[
        { x: 40, y: 55 },
        { x: 78, y: 24 },
        { x: 108, y: 22 },
      ].map((d, i) => (
        <motion.rect
          key={i}
          x={d.x - 2}
          y={d.y - 2}
          width="4"
          height="4"
          fill="#D97757"
          animate={{ scale: [0.6, 1.2, 0.6] }}
          transition={{ duration: 1.6, delay: i * 0.2, repeat: Infinity }}
          style={{ transformOrigin: `${d.x}px ${d.y}px` }}
        />
      ))}

      {/* Schoolhouses across the bottom (KV pilots) */}
      {[8, 44, 80, 116].map((x, i) => (
        <motion.g
          key={i}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
        >
          {/* roof */}
          <polygon
            points={`${x + 6},64 ${x},70 ${x + 12},70`}
            fill="#B85C3E"
          />
          {/* walls */}
          <rect x={x} y="70" width="12" height="8" fill="#E8B84A" />
          {/* window */}
          <rect x={x + 4} y="72" width="4" height="4" fill="#F7ECD8" />
          <rect x={x + 5} y="73" width="2" height="2" fill="#4A5FC1" />
        </motion.g>
      ))}

      {/* 3× badge */}
      <motion.g
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{ transformOrigin: "116px 12px" }}
      >
        <rect x="104" y="4" width="24" height="14" fill="#2a1f1a" />
        <rect x="106" y="6" width="20" height="10" fill="#E8B84A" />
        <text
          x="116"
          y="14"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="#2a1f1a"
          fontWeight="700"
        >
          3× D30
        </text>
      </motion.g>
    </svg>
  );
}
