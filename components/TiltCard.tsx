"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

/**
 * 3D tilt card — tracks mouse relative to card center and rotates in X/Y.
 * Adds a soft light-glare that follows the cursor. Reduces motion for touch.
 */
export function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  glare = true,
}: PropsWithChildren<{ className?: string; maxTilt?: number; glare?: boolean }>) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const rotX = useTransform(sy, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const glareX = useTransform(sx, [-0.5, 0.5], ["20%", "80%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["20%", "80%"]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(400px circle at ${gx} ${gy}, rgba(255,255,255,0.35), transparent 60%)`,
            ),
            mixBlendMode: "overlay",
          }}
        />
      )}
    </motion.div>
  );
}
