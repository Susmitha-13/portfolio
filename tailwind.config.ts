import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7ECD8",
        parchment: "#FBF3E1",
        espresso: "#2A1F1A",
        cocoa: "#4A362A",
        terra: "#D97757",
        clay: "#B85C3E",
        sage: "#6FA69A",
        mustard: "#E8B84A",
        ink: "#1A1512",
        ai: "#4A5FC1",
        rose: "#E8A5A5",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        pixel: ["var(--font-pixel)", "monospace"],
      },
      boxShadow: {
        chunk: "6px 6px 0 0 #2A1F1A",
        chunklg: "10px 10px 0 0 #2A1F1A",
        soft: "0 20px 40px -20px rgba(42,31,26,0.35)",
      },
      keyframes: {
        wag: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(14deg)" },
        },
        hop: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "94%, 98%": { transform: "scaleY(0.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        drift: {
          "0%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        wag: "wag 0.6s ease-in-out infinite",
        hop: "hop 1.4s ease-in-out infinite",
        blink: "blink 3.6s infinite",
        float: "float 4s ease-in-out infinite",
        drift: "drift 3s ease-in-out infinite alternate",
        pulseSoft: "pulseSoft 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
