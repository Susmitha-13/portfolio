"use client";

import { motion } from "framer-motion";

/** One vignette per journey chapter — pixel-scale SVGs, all sit in a 120×80 box. */

export function VITArt() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full pixelated">
      {/* notebook */}
      <motion.g
        animate={{ rotate: [-1, 1, -1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 45px" }}
      >
        <rect x="30" y="18" width="60" height="42" fill="#f7ecd8" stroke="#2a1f1a" strokeWidth="2" />
        <rect x="30" y="18" width="8" height="42" fill="#D97757" />
        {[24, 30, 36, 42, 48, 54].map((y, i) => (
          <motion.rect
            key={i}
            x="44"
            y={y}
            width={40 - i * 3}
            height="2"
            fill="#2a1f1a"
            opacity="0.4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15, repeat: Infinity, repeatDelay: 3 }}
            style={{ transformOrigin: `44px ${y}px` }}
          />
        ))}
      </motion.g>
      {/* pencil */}
      <motion.g
        animate={{ y: [0, -2, 0], rotate: [10, 14, 10] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        style={{ transformOrigin: "95px 30px" }}
      >
        <rect x="88" y="6" width="4" height="26" fill="#E8B84A" />
        <rect x="88" y="4" width="4" height="2" fill="#e8a5a5" />
        <rect x="88" y="32" width="4" height="3" fill="#2a1f1a" />
      </motion.g>
    </svg>
  );
}

export function ScholarPlanetArt() {
  const nodes = [
    { x: 30, y: 40 },
    { x: 60, y: 22 },
    { x: 90, y: 40 },
    { x: 60, y: 58 },
    { x: 45, y: 30 },
    { x: 75, y: 50 },
  ];
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full pixelated">
      {/* connecting lines */}
      {nodes.map((n, i) =>
        nodes.slice(i + 1).map((m, j) => (
          <motion.line
            key={`${i}-${j}`}
            x1={n.x + 2}
            y1={n.y + 2}
            x2={m.x + 2}
            y2={m.y + 2}
            stroke="#6FA69A"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0.6] }}
            transition={{
              duration: 0.6,
              delay: 0.2 + (i + j) * 0.15,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        )),
      )}
      {nodes.map((n, i) => (
        <motion.rect
          key={i}
          x={n.x}
          y={n.y}
          width="5"
          height="5"
          fill={i === 1 ? "#D97757" : "#6FA69A"}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
          style={{ transformOrigin: `${n.x + 2.5}px ${n.y + 2.5}px` }}
        />
      ))}
    </svg>
  );
}

export function XlenzArt() {
  // chain of pixel links
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full pixelated">
      {[0, 1, 2, 3].map((i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2, duration: 0.4, repeat: Infinity, repeatDelay: 3 }}
        >
          <rect x={12 + i * 26} y="30" width="20" height="20" fill="#4A5FC1" />
          <rect x={14 + i * 26} y="32" width="16" height="16" fill="#f7ecd8" />
          <rect x={18 + i * 26} y="36" width="8" height="2" fill="#2a1f1a" />
          <rect x={18 + i * 26} y="40" width="6" height="2" fill="#2a1f1a" opacity="0.5" />
          {i < 3 && (
            <motion.rect
              x={32 + i * 26}
              y="39"
              width="6"
              height="2"
              fill="#2a1f1a"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.2 + 0.3, duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
              style={{ transformOrigin: `${32 + i * 26}px 40px` }}
            />
          )}
        </motion.g>
      ))}
    </svg>
  );
}

export function KVPilotArt() {
  // little school buildings
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full pixelated">
      {[
        { x: 10, h: 30, c: "#E8B84A" },
        { x: 32, h: 40, c: "#D97757" },
        { x: 55, h: 34, c: "#6FA69A" },
        { x: 78, h: 44, c: "#E8A5A5" },
        { x: 100, h: 32, c: "#4A5FC1" },
      ].map((b, i) => (
        <motion.g
          key={i}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.8, delay: i * 0.15, repeat: Infinity }}
        >
          <rect x={b.x} y={70 - b.h} width={18} height={b.h} fill={b.c} />
          {/* roof */}
          <rect x={b.x - 2} y={70 - b.h - 3} width={22} height={3} fill="#2a1f1a" />
          {/* windows */}
          <rect x={b.x + 3} y={70 - b.h + 4} width={4} height={4} fill="#f7ecd8" />
          <rect x={b.x + 11} y={70 - b.h + 4} width={4} height={4} fill="#f7ecd8" />
        </motion.g>
      ))}
      {/* pin flag */}
      <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 1, repeat: Infinity }}>
        <rect x="60" y="8" width="1" height="14" fill="#2a1f1a" />
        <rect x="61" y="8" width="8" height="6" fill="#D97757" />
      </motion.g>
    </svg>
  );
}

export function VantedgeChapterArt() {
  // orbiting agents around a center
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full pixelated">
      {/* center */}
      <motion.g animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ transformOrigin: "60px 40px" }}>
        <rect x="55" y="35" width="10" height="10" fill="#2a1f1a" />
        <rect x="57" y="37" width="6" height="6" fill="#E8B84A" />
      </motion.g>
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        const r = 26;
        const cx = 60 + Math.cos(angle) * r;
        const cy = 40 + Math.sin(angle) * r;
        return (
          <motion.g
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "60px 40px" }}
          >
            <rect x={cx - 3} y={cy - 3} width="6" height="6" fill={["#D97757", "#6FA69A", "#4A5FC1", "#E8A5A5", "#B85C3E"][i]} />
            <line x1="60" y1="40" x2={cx} y2={cy} stroke="#2a1f1a" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.5" />
          </motion.g>
        );
      })}
    </svg>
  );
}
