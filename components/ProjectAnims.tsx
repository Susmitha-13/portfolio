"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ==== 1. AnxietySense — federated CNN-LSTM nodes converging on aggregator ==== */
export function FederatedAnim() {
  const nodes = [
    { x: 60, y: 50, label: "watch" },
    { x: 300, y: 40, label: "watch" },
    { x: 540, y: 55, label: "watch" },
    { x: 80, y: 250, label: "watch" },
    { x: 280, y: 270, label: "watch" },
    { x: 520, y: 260, label: "watch" },
  ];
  const center = { x: 300, y: 155 };
  return (
    <svg viewBox="0 0 600 320" className="w-full h-auto pixelated">
      {/* dashed connections */}
      {nodes.map((n, i) => (
        <motion.line
          key={`l-${i}`}
          x1={n.x + 20}
          y1={n.y + 20}
          x2={center.x}
          y2={center.y}
          stroke="#6FA69A"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0.6] }}
          transition={{ duration: 1.4, delay: i * 0.15, repeat: Infinity, repeatDelay: 2 }}
        />
      ))}

      {/* moving gradient packets */}
      {nodes.map((n, i) => (
        <motion.circle
          key={`p-${i}`}
          r={4}
          fill="#E8B84A"
          initial={{ cx: n.x + 20, cy: n.y + 20, opacity: 0 }}
          animate={{
            cx: [n.x + 20, center.x],
            cy: [n.y + 20, center.y],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 1.5, delay: i * 0.2 + 0.4, repeat: Infinity, repeatDelay: 2 }}
        />
      ))}

      {/* device nodes (watches) */}
      {nodes.map((n, i) => (
        <motion.g
          key={`n-${i}`}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.8, delay: i * 0.15, repeat: Infinity }}
        >
          <rect x={n.x} y={n.y} width="40" height="40" fill="#2a1f1a" />
          <rect x={n.x + 4} y={n.y + 4} width="32" height="32" fill="#F7ECD8" />
          {/* watch strap */}
          <rect x={n.x + 8} y={n.y - 4} width="24" height="4" fill="#2a1f1a" />
          <rect x={n.x + 8} y={n.y + 40} width="24" height="4" fill="#2a1f1a" />
          {/* heart signal */}
          <motion.polyline
            points={`${n.x + 8},${n.y + 20} ${n.x + 14},${n.y + 20} ${n.x + 16},${n.y + 14} ${n.x + 20},${n.y + 26} ${n.x + 24},${n.y + 20} ${n.x + 32},${n.y + 20}`}
            stroke="#D97757"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </motion.g>
      ))}

      {/* central aggregator */}
      <motion.g
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: `${center.x}px ${center.y}px` }}
      >
        <rect x={center.x - 40} y={center.y - 30} width="80" height="60" fill="#2a1f1a" />
        <rect x={center.x - 36} y={center.y - 26} width="72" height="52" fill="#6FA69A" />
        <text x={center.x} y={center.y - 6} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#F7ECD8" fontWeight="700">
          global model
        </text>
        <text x={center.x} y={center.y + 8} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="#F7ECD8" opacity="0.85">
          non-IID · Flower
        </text>
        <text x={center.x} y={center.y + 20} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="#F7ECD8" opacity="0.6">
          weighted agg.
        </text>
      </motion.g>

      {/* label */}
      <text x={center.x} y={310} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#2a1f1a" opacity="0.5">
        no raw data leaves the device
      </text>
    </svg>
  );
}

/* ==== 2. TruthLens — text + image branches → progressive fusion ==== */
export function FusionAnim() {
  return (
    <svg viewBox="0 0 600 320" className="w-full h-auto pixelated">
      {/* Text branch */}
      <text x="60" y="30" fontFamily="var(--font-mono)" fontSize="11" fill="#2a1f1a" fontWeight="700">
        BERT · text
      </text>
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={`t-${i}`}
          x={40}
          y={60 + i * 40}
          width={140}
          height={28}
          fill="#4A5FC1"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <text
          key={`tl-${i}`}
          x={110}
          y={78 + i * 40}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="#F7ECD8"
        >
          layer {i + 1}
        </text>
      ))}

      {/* Image branch */}
      <text x="480" y="30" textAnchor="end" fontFamily="var(--font-mono)" fontSize="11" fill="#2a1f1a" fontWeight="700">
        ResNet50 · image
      </text>
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={`i-${i}`}
          x={420}
          y={60 + i * 40}
          width={140}
          height={28}
          fill="#D97757"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, delay: i * 0.15 + 0.5, repeat: Infinity }}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <text
          key={`il-${i}`}
          x={490}
          y={78 + i * 40}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="#F7ECD8"
        >
          block {i + 1}
        </text>
      ))}

      {/* Fusion in the middle at each level */}
      {[0, 1, 2, 3].map((i) => (
        <motion.g
          key={`f-${i}`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, delay: i * 0.15 + 0.25, repeat: Infinity }}
          style={{ transformOrigin: `300px ${74 + i * 40}px` }}
        >
          <line x1="180" y1={74 + i * 40} x2="240" y2={74 + i * 40} stroke="#2a1f1a" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="360" y1={74 + i * 40} x2="420" y2={74 + i * 40} stroke="#2a1f1a" strokeWidth="1.5" strokeDasharray="3 2" />
          <rect x="255" y={62 + i * 40} width="90" height="24" fill="#E8B84A" stroke="#2a1f1a" strokeWidth="2" />
          <text x="300" y={78 + i * 40} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#2a1f1a" fontWeight="700">
            fuse · w{i + 1}
          </text>
        </motion.g>
      ))}

      {/* label */}
      <text x="300" y="240" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#2a1f1a" opacity="0.6">
        learnable weights at every layer → adaptive per-input prioritization
      </text>

      {/* Final output */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <rect x="220" y="270" width="160" height="40" fill="#2a1f1a" />
        <rect x="224" y="274" width="152" height="32" fill="#6FA69A" />
        <text x="300" y="296" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#F7ECD8" fontWeight="700">
          real · fake
        </text>
      </motion.g>
    </svg>
  );
}

/* ==== 3. AI Regression Agent — cursor navigating mock browser ==== */
export function AgentBrowserAnim() {
  return (
    <svg viewBox="0 0 600 320" className="w-full h-auto pixelated">
      {/* browser chrome */}
      <rect x="30" y="20" width="540" height="280" fill="#2a1f1a" />
      <rect x="34" y="24" width="532" height="24" fill="#F7ECD8" />
      <circle cx="46" cy="36" r="4" fill="#D97757" />
      <circle cx="58" cy="36" r="4" fill="#E8B84A" />
      <circle cx="70" cy="36" r="4" fill="#6FA69A" />
      <rect x="90" y="30" width="470" height="12" fill="#F7ECD8" stroke="#2a1f1a" strokeWidth="1" />
      <text x="100" y="39" fontFamily="var(--font-mono)" fontSize="9" fill="#2a1f1a" opacity="0.6">
        https://app.vantedge.ai/deals
      </text>

      {/* page content */}
      <rect x="34" y="52" width="532" height="244" fill="#FBF3E1" />
      {/* sidebar */}
      <rect x="34" y="52" width="100" height="244" fill="#F7ECD8" />
      {["Deals", "LP CRM", "VDR", "Portfolio", "Billing"].map((s, i) => (
        <text
          key={s}
          x={44}
          y={80 + i * 32}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="#2a1f1a"
          opacity={i === 0 ? 1 : 0.5}
        >
          {s}
        </text>
      ))}

      {/* main content — cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={150} y={72 + i * 70} width={400} height={54} fill="#F7ECD8" stroke="#2a1f1a" strokeWidth="1.5" />
          <rect x={160} y={82 + i * 70} width={80} height={8} fill="#2a1f1a" />
          <rect x={160} y={96 + i * 70} width={200} height={6} fill="#2a1f1a" opacity="0.35" />
          <rect x={160} y={106 + i * 70} width={160} height={6} fill="#2a1f1a" opacity="0.35" />
          <motion.rect
            x={490}
            y={90 + i * 70}
            width={40}
            height={18}
            fill="#D97757"
            animate={{ scale: [1, 0.92, 1] }}
            transition={{ duration: 0.4, delay: 1 + i * 0.6, repeat: Infinity, repeatDelay: 3 }}
            style={{ transformOrigin: `510px ${99 + i * 70}px` }}
          />
          <text x={510} y={102 + i * 70} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="#F7ECD8" fontWeight="700">
            OPEN
          </text>
        </g>
      ))}

      {/* animated cursor */}
      <motion.g
        animate={{
          x: [40, 60, 60, 480, 480, 480, 60, 60],
          y: [280, 76, 76, 96, 96, 96, 200, 280],
        }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.15, 0.25, 0.4, 0.5, 0.6, 0.85, 1], ease: "easeInOut" }}
      >
        <polygon points="0,0 0,14 4,10 8,18 11,17 7,9 12,9" fill="#2a1f1a" stroke="#F7ECD8" strokeWidth="1" />
      </motion.g>

      {/* pass/fail badge */}
      <motion.g
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1.05, 1, 1] }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.35, 0.42, 0.7, 1] }}
      >
        <rect x="380" y="266" width="120" height="24" fill="#6FA69A" stroke="#2a1f1a" strokeWidth="1.5" />
        <text x="440" y="282" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#F7ECD8" fontWeight="700">
          ✓ flow ok
        </text>
      </motion.g>
    </svg>
  );
}

/* ==== 4. Deploy Console — build bars filling ==== */
export function DeployConsoleAnim() {
  const rows = [
    { name: "web-app", branch: "main", color: "#6FA69A", delay: 0, dur: 2 },
    { name: "api", branch: "release/v42", color: "#4A5FC1", delay: 0.4, dur: 2.4 },
    { name: "worker", branch: "main", color: "#D97757", delay: 0.8, dur: 1.8 },
    { name: "docs", branch: "main", color: "#E8B84A", delay: 1.2, dur: 1.6 },
  ];
  return (
    <svg viewBox="0 0 600 320" className="w-full h-auto pixelated">
      {/* console frame */}
      <rect x="30" y="20" width="540" height="280" fill="#2a1f1a" />
      <rect x="34" y="24" width="532" height="20" fill="#F7ECD8" />
      <text x="46" y="38" fontFamily="var(--font-mono)" fontSize="11" fill="#2a1f1a" fontWeight="700">
        deploy console
      </text>
      <text x="560" y="38" textAnchor="end" fontFamily="var(--font-mono)" fontSize="10" fill="#2a1f1a" opacity="0.6">
        internal · vantedge
      </text>
      <rect x="34" y="48" width="532" height="248" fill="#FBF3E1" />

      {rows.map((r, i) => (
        <g key={i}>
          <text x={50} y={80 + i * 60} fontFamily="var(--font-mono)" fontSize="11" fill="#2a1f1a" fontWeight="700">
            {r.name}
          </text>
          <text x={50} y={92 + i * 60} fontFamily="var(--font-mono)" fontSize="9" fill="#2a1f1a" opacity="0.6">
            {r.branch}
          </text>
          <rect x={180} y={72 + i * 60} width={340} height={16} fill="#F7ECD8" stroke="#2a1f1a" strokeWidth="1.5" />
          <motion.rect
            x={180}
            y={72 + i * 60}
            height={16}
            fill={r.color}
            initial={{ width: 0 }}
            animate={{ width: [0, 340] }}
            transition={{ duration: r.dur, delay: r.delay, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
          />
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            transition={{ duration: r.dur + 0.3, delay: r.delay, repeat: Infinity, repeatDelay: 1.5 }}
          >
            <rect x={528} y={72 + i * 60} width={30} height={16} fill="#2a1f1a" />
            <text x={543} y={84 + i * 60} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="#6FA69A" fontWeight="700">
              ✓
            </text>
          </motion.g>
        </g>
      ))}

      <text x={300} y={310} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#2a1f1a" opacity="0.5">
        one click · rollback · env switch · build status
      </text>
    </svg>
  );
}
