import Link from "next/link";

/** Small "next case" cross-link at the bottom of a case study. */
export function CrossLink({
  eyebrow = "next case study",
  title,
  detail,
  href,
}: {
  eyebrow?: string;
  title: string;
  detail: string;
  href: string;
}) {
  return (
    <section className="mt-14">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-espresso/40 p-6">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/50">
            {eyebrow}
          </div>
          <div className="mt-1 font-serif text-2xl text-espresso">{title}</div>
          <p className="text-espresso/70 text-sm mt-1 max-w-lg">{detail}</p>
        </div>
        <Link href={href} className="btn-chunk shrink-0">
          read next <span>→</span>
        </Link>
      </div>
    </section>
  );
}
