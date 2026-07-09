# susmitha · portfolio

A warm, pixel-art Next.js portfolio for **Susmitha Mukkamala** — AI Product Manager.

Live case studies for two 0→1 rides: **Vantedge AI (YC W22)** — fintech,
enterprise fund-ops — and **Scholar Planet** — edtech, took a basic quiz app
with under 100 users and rebuilt it into a two-sided platform.

## Stack

- **Next.js 14** (App Router, static export-ready)
- **TailwindCSS** for styling
- **Framer Motion** for the mascot walk-out, tile tilts, KPI counters, and
  per-project animations
- **TypeScript** everywhere
- Fonts: Instrument Serif · Inter · JetBrains Mono · Press Start 2P

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Structure

```
app/
  page.tsx               landing hub — pixel-mascot guide + tile grid
  journey/               timeline of chapters, each with its own vignette
  vantedge/              fintech case study — problem → friction → decisions → impl → learned
  scholar-planet/        edtech case study — same arc
  projects/              projects & experiments, each with a unique animation
  contact/               warm contact card
components/
  Mascot.tsx             pixel-art mascot
  GuideMascot.tsx        landing "hops out of the box" sequence + speech bubble
  KpiCounter.tsx         scroll-in counter animation
  TiltCard.tsx           3D mouse-tilt with light glare
  ...
lib/
  data.ts                copy + KPI structures
```

## Deploy

Any Next.js host works — Vercel is the natural fit. `npm run build` is clean.

---

Built with love, coffee, and one small pixel guide.
