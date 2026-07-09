"use client";

import { motion } from "framer-motion";

/**
 * Pixel-art mascot — a friendly, distinctly feminine little companion.
 * Long flowing hair, heart hair-clip, blush cheeks, amber sunglasses,
 * hoop earrings, orange sweater, cream A-line skirt, navy dotted crossbody bag.
 */
export function Mascot({
  size = 200,
  className = "",
  waving = true,
}: {
  size?: number;
  className?: string;
  waving?: boolean;
}) {
  // ---- palette ----
  const SKIN = "#F0C4A0";
  const SKIN_S = "#C8946E";
  const BLUSH = "#F09590";
  const HAIR = "#2A1610";
  const HAIR_H = "#4A2820";
  const HEART = "#E8A5A5";
  const HEART_H = "#F5C8C8";
  const FRAME = "#1A0F0A";
  const LENS = "#8A5642"; // warm amber
  const LENS_H = "#F5C9A2";
  const SW = "#E8823A";
  const SW_S = "#B85E20";
  const SW_H = "#F5A45C";
  const SKIRT = "#F0EAD8";
  const SKIRT_S = "#D0C8AF";
  const BAG = "#1E1A35";
  const DOT = "#E8B84A";
  const EAR = "#E8B84A";
  const SHOE = "#2A1610";
  const SOCK = "#F5EFE0";

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      animate={{ y: [0, -4, 0], rotate: [-0.6, 0.6, -0.6] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 32 40"
        width={size}
        height={size}
        className="pixelated"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ground shadow */}
        <ellipse cx="16" cy="39" rx="10" ry="0.9" fill="#2A1610" opacity="0.22" />

        {/* ============ HAIR (back layer — flows past shoulders) ============ */}
        {/* top mass */}
        <rect x="9" y="3" width="14" height="1" fill={HAIR} />
        <rect x="8" y="4" width="16" height="1" fill={HAIR} />
        <rect x="7" y="5" width="18" height="2" fill={HAIR} />
        {/* long side strands — left */}
        <rect x="6" y="7" width="4" height="14" fill={HAIR} />
        <rect x="5" y="9" width="1" height="10" fill={HAIR} />
        {/* long side strands — right */}
        <rect x="22" y="7" width="4" height="14" fill={HAIR} />
        <rect x="26" y="9" width="1" height="10" fill={HAIR} />
        {/* hair wisps at bottom (soft curl) */}
        <rect x="6" y="21" width="2" height="1" fill={HAIR} />
        <rect x="24" y="21" width="2" height="1" fill={HAIR} />
        {/* highlight streak */}
        <rect x="10" y="4" width="4" height="1" fill={HAIR_H} />
        <rect x="7" y="8" width="1" height="8" fill={HAIR_H} />

        {/* soft bangs on forehead */}
        <rect x="9" y="7" width="3" height="2" fill={HAIR} />
        <rect x="20" y="7" width="3" height="2" fill={HAIR} />
        <rect x="14" y="7" width="4" height="1" fill={HAIR} />

        {/* ============ HEART HAIR CLIP (right side of head) ============ */}
        <rect x="22" y="6" width="1" height="1" fill={HEART} />
        <rect x="24" y="6" width="1" height="1" fill={HEART} />
        <rect x="21" y="7" width="5" height="1" fill={HEART} />
        <rect x="22" y="8" width="3" height="1" fill={HEART} />
        <rect x="23" y="9" width="1" height="1" fill={HEART} />
        <rect x="22" y="7" width="1" height="1" fill={HEART_H} />

        {/* ============ FACE (skin) ============ */}
        <rect x="10" y="8" width="12" height="8" fill={SKIN} />
        {/* jaw taper */}
        <rect x="11" y="15" width="10" height="1" fill={SKIN} />
        <rect x="12" y="16" width="8" height="1" fill={SKIN} />
        <rect x="11" y="16" width="10" height="1" fill={SKIN_S} />

        {/* ============ EARS with hoop earrings ============ */}
        <rect x="9" y="12" width="1" height="2" fill={SKIN_S} />
        <rect x="22" y="12" width="1" height="2" fill={SKIN_S} />
        {/* hoops */}
        <rect x="9" y="14" width="1" height="1" fill={EAR} />
        <rect x="22" y="14" width="1" height="1" fill={EAR} />

        {/* ============ SUNGLASSES (round, amber) ============ */}
        {/* top frame */}
        <rect x="10" y="10" width="12" height="1" fill={FRAME} />
        {/* left lens */}
        <rect x="11" y="11" width="4" height="2" fill={LENS} />
        <rect x="11" y="11" width="1" height="2" fill={FRAME} />
        <rect x="14" y="11" width="1" height="2" fill={FRAME} />
        <rect x="11" y="13" width="4" height="1" fill={FRAME} />
        {/* bridge */}
        <rect x="15" y="11" width="2" height="1" fill={FRAME} />
        {/* right lens */}
        <rect x="17" y="11" width="4" height="2" fill={LENS} />
        <rect x="17" y="11" width="1" height="2" fill={FRAME} />
        <rect x="20" y="11" width="1" height="2" fill={FRAME} />
        <rect x="17" y="13" width="4" height="1" fill={FRAME} />
        {/* lens highlights */}
        <rect x="12" y="11" width="1" height="1" fill={LENS_H} />
        <rect x="18" y="11" width="1" height="1" fill={LENS_H} />

        {/* ============ BLUSH CHEEKS ============ */}
        <rect x="10" y="14" width="2" height="1" fill={BLUSH} opacity="0.9" />
        <rect x="20" y="14" width="2" height="1" fill={BLUSH} opacity="0.9" />

        {/* ============ NOSE + SMILE ============ */}
        <rect x="15" y="14" width="2" height="1" fill={SKIN_S} />
        <motion.g
          animate={{ scaleY: [1, 1.15, 1] }}
          transition={{ duration: 2.6, repeat: Infinity }}
          style={{ transformOrigin: "16px 16px" }}
        >
          <rect x="13" y="16" width="6" height="1" fill="#8B4A3A" />
          <rect x="14" y="17" width="4" height="1" fill="#F5D3B6" />
        </motion.g>

        {/* ============ NECK ============ */}
        <rect x="13" y="18" width="6" height="1" fill={SKIN} />
        <rect x="13" y="19" width="6" height="1" fill={SKIN_S} />

        {/* ============ SWEATER — collar + torso (slight waist taper) ============ */}
        {/* collar shadow */}
        <rect x="12" y="19" width="8" height="1" fill={SW_S} />
        {/* upper torso (chest) */}
        <rect x="7" y="20" width="18" height="4" fill={SW} />
        {/* highlight */}
        <rect x="7" y="20" width="18" height="1" fill={SW_H} />
        {/* right shade */}
        <rect x="24" y="20" width="1" height="4" fill={SW_S} />
        {/* waist taper */}
        <rect x="8" y="24" width="16" height="4" fill={SW} />
        <rect x="23" y="24" width="1" height="4" fill={SW_S} />
        {/* sweater hem */}
        <rect x="8" y="28" width="16" height="1" fill={SW_S} />

        {/* ============ SLEEVES ============ */}
        {/* left sleeve */}
        <rect x="4" y="21" width="4" height="8" fill={SW} />
        <rect x="4" y="21" width="1" height="8" fill={SW_H} />
        <rect x="7" y="21" width="1" height="8" fill={SW_S} />
        <rect x="4" y="29" width="4" height="2" fill={SKIN} />
        <rect x="4" y="31" width="4" height="1" fill={SKIN_S} />
        <rect x="4" y="29" width="4" height="1" fill={HEART} />

        {/* right sleeve — animated wave */}
        <motion.g
          animate={waving ? { rotate: [0, -22, 0, -14, 0] } : { rotate: [-2, 2, -2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            times: waving ? [0, 0.15, 0.3, 0.45, 1] : [0, 0.5, 1],
          }}
          style={{ transformOrigin: "26px 21px" }}
        >
          <rect x="24" y="21" width="4" height="8" fill={SW} />
          <rect x="24" y="21" width="1" height="8" fill={SW_H} />
          <rect x="27" y="21" width="1" height="8" fill={SW_S} />
          <rect x="24" y="29" width="4" height="2" fill={SKIN} />
          <rect x="24" y="31" width="4" height="1" fill={SKIN_S} />
          <rect x="24" y="29" width="4" height="1" fill={HEART} />
        </motion.g>

        {/* ============ CROSSBODY STRAP (diagonal) ============ */}
        <rect x="10" y="20" width="1" height="1" fill={BAG} />
        <rect x="11" y="21" width="1" height="1" fill={BAG} />
        <rect x="12" y="22" width="1" height="1" fill={BAG} />
        <rect x="13" y="23" width="1" height="1" fill={BAG} />
        <rect x="14" y="24" width="1" height="1" fill={BAG} />
        <rect x="15" y="25" width="1" height="1" fill={BAG} />

        {/* ============ BAG (on right hip) ============ */}
        <rect x="16" y="25" width="7" height="5" fill={BAG} />
        <rect x="16" y="25" width="7" height="1" fill="#2A2547" />
        <rect x="17" y="27" width="1" height="1" fill={DOT} />
        <rect x="19" y="26" width="1" height="1" fill={DOT} />
        <rect x="21" y="27" width="1" height="1" fill={DOT} />
        <rect x="18" y="29" width="1" height="1" fill={DOT} />
        <rect x="20" y="29" width="1" height="1" fill={DOT} />

        {/* ============ A-LINE SKIRT ============ */}
        {/* top of skirt (narrower) */}
        <rect x="9" y="29" width="14" height="2" fill={SKIRT} />
        {/* mid skirt */}
        <rect x="8" y="31" width="16" height="2" fill={SKIRT} />
        {/* bottom flare */}
        <rect x="7" y="33" width="18" height="2" fill={SKIRT} />
        {/* pleat shading (vertical lines) */}
        <rect x="12" y="29" width="1" height="6" fill={SKIRT_S} />
        <rect x="16" y="29" width="1" height="6" fill={SKIRT_S} />
        <rect x="19" y="29" width="1" height="6" fill={SKIRT_S} />
        {/* hem */}
        <rect x="7" y="34" width="18" height="1" fill={SKIRT_S} />

        {/* ============ LEGS / SOCKS ============ */}
        <rect x="11" y="35" width="3" height="2" fill={SKIN} />
        <rect x="18" y="35" width="3" height="2" fill={SKIN} />
        <rect x="11" y="37" width="3" height="1" fill={SOCK} />
        <rect x="18" y="37" width="3" height="1" fill={SOCK} />

        {/* ============ SHOES ============ */}
        <rect x="10" y="38" width="5" height="1" fill={SHOE} />
        <rect x="17" y="38" width="5" height="1" fill={SHOE} />

        {/* ============ BLINK (reflection flicks over lenses) ============ */}
        <motion.rect
          x="12"
          y="11"
          width="3"
          height="1"
          fill={LENS_H}
          animate={{ opacity: [0, 0, 1, 0] }}
          transition={{ duration: 4, times: [0, 0.92, 0.94, 0.98], repeat: Infinity }}
        />
        <motion.rect
          x="18"
          y="11"
          width="3"
          height="1"
          fill={LENS_H}
          animate={{ opacity: [0, 0, 1, 0] }}
          transition={{ duration: 4, times: [0, 0.92, 0.94, 0.98], repeat: Infinity }}
        />

        {/* ============ FLOATING HEART (occasional) ============ */}
        <motion.g
          animate={{ opacity: [0, 1, 1, 0], y: [0, -3, -6, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        >
          <rect x="22" y="1" width="1" height="1" fill={HEART} />
          <rect x="24" y="1" width="1" height="1" fill={HEART} />
          <rect x="21" y="2" width="5" height="1" fill={HEART} />
          <rect x="22" y="3" width="3" height="1" fill={HEART} />
          <rect x="23" y="4" width="1" height="1" fill={HEART} />
        </motion.g>
      </svg>
    </motion.div>
  );
}

/** Legacy alias (used elsewhere) */
export function PixelBunny({ size = 80 }: { size?: number }) {
  return <Mascot size={size} waving={false} />;
}

/** Tiny star sparkle */
export function Sparkle({
  size = 20,
  delay = 0,
  className = "",
}: {
  size?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.svg
      viewBox="0 0 12 12"
      width={size}
      height={size}
      className={`pixelated ${className}`}
      animate={{ scale: [0.6, 1.15, 0.6], opacity: [0.4, 1, 0.4], rotate: [0, 20, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <rect x="5" y="0" width="2" height="4" fill="#e8b84a" />
      <rect x="5" y="8" width="2" height="4" fill="#e8b84a" />
      <rect x="0" y="5" width="4" height="2" fill="#e8b84a" />
      <rect x="8" y="5" width="4" height="2" fill="#e8b84a" />
      <rect x="5" y="5" width="2" height="2" fill="#ffffff" />
    </motion.svg>
  );
}
