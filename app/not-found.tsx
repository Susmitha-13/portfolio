import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-espresso/50">
        404
      </div>
      <h1 className="mt-4 font-serif text-6xl md:text-7xl text-espresso leading-[0.95]">
        this page doesn&apos;t exist
        <span className="text-terra">.</span>
      </h1>
      <p className="mt-6 text-espresso/70 max-w-lg">
        Might be a stale link, or I moved something around. Head home and pick a
        case study from Selected Work.
      </p>
      <Link href="/" className="btn-chunk mt-8 inline-flex">
        take me home →
      </Link>
    </div>
  );
}
