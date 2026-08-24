# susmitha · portfolio

A **PM workbench**, not a prettier resume — the public evidence layer behind
what **Susmitha Mukkamala** actually does as a Product Manager building at
the intersection of AI, financial workflows, and complex products.

Every case study opens the same way: **the problem, the discovery, the
framing, the architecture, the artifacts, what didn't work, the metrics,
the product decisions, and the lesson.** Redacted where it has to be.
Direct otherwise.

## Selected work

| Case                       | Proves                                                 |
| -------------------------- | ------------------------------------------------------ |
| **AI Copilot**             | Agentic systems + product architecture + financial workflows |
| **Research Agent**         | AI evaluation + orchestration + accuracy / latency     |
| **MCA Underwriting Agent** | Unstructured data extraction + domain reasoning        |
| **AI CRM · Forward Deployment** | Customer-facing implementation + shipping         |
| **FundOS**                 | Financial product depth                                |
| **Scholar Planet**         | 0 → 1 PM + growth + customer discovery                 |

Plus an **`/inside`** section: PRDs · AI Systems · Product Experiments ·
Customer Discovery · Product Teardowns · Technical Notes.

## Stack

- **Next.js 14** (App Router, static-friendly)
- **TailwindCSS** for styling
- **Framer Motion** for scroll reveals, KPI counters, tilt cards, artifact expand
- **TypeScript** throughout
- Fonts: Instrument Serif · Inter · JetBrains Mono · Press Start 2P (via `next/font`)

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Structure

```
app/
  page.tsx                     landing — hero + Selected Work + the 7 questions
  work/[case]/page.tsx         six case studies, each with the 8-section arc
  inside/page.tsx              evidence library (PRDs / AI systems / experiments / …)
  journey/page.tsx             short personal timeline
  contact/page.tsx             email · linkedin · phone

components/
  case/                        the reusable case-study primitives
    CaseStudyHeader.tsx        kicker + title + intro + headline metrics
    Section.tsx                numbered section (01 · problem, 02 · discovery, …)
    DiscoveryList.tsx          channel + finding cards
    Framing.tsx                User → Job → Pain → Constraints → Success
    ArchDiagram.tsx            pixel-flow architecture diagram (rows + fanouts)
    ArtifactCard.tsx           expandable artifact — PRDs, prompts, eval, tickets
    Evolution.tsx              v1 → v2 → v3 story with insight + change per step
    MetricGrid.tsx             visual metric cards (KPIs, headline outcomes)
    Decisions.tsx              "why X not Y" cards — the CEO-mindset section
    CrossLink.tsx              read-next between cases

  Nav.tsx · Footer.tsx · Reveal.tsx · TiltCard.tsx · KpiCounter.tsx

lib/
  cases.ts                     the roster + next-case rotation
```

## Deploy

Vercel — `vercel.json` pins the framework preset so the build runs
`next build` and produces the `.next` output directory.

## The 7 questions this portfolio should answer

1. Can she discover problems?
2. Can she talk to customers?
3. Can she turn ambiguity into requirements?
4. Can she work with engineers?
5. Does she understand technology deeply enough?
6. Can she ship?
7. Does she think beyond what she's told to do? ← the load-bearing one.
