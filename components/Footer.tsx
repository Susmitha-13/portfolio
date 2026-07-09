import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-[2] mt-24 border-t border-espresso/15">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-mono text-xs text-espresso/60">
          © {new Date().getFullYear()} · susmitha mukkamala · built with too much love & coffee
        </div>
        <div className="flex gap-4 font-mono text-xs">
          <a
            href="mailto:susmitha.2003m@gmail.com"
            className="text-espresso/70 hover:text-terra transition"
          >
            email
          </a>
          <a
            href="https://linkedin.com/in/susmitha-mukkamala-b3314b204"
            target="_blank"
            rel="noreferrer"
            className="text-espresso/70 hover:text-terra transition"
          >
            linkedin
          </a>
          <Link href="/contact" className="text-espresso/70 hover:text-terra transition">
            say hi →
          </Link>
        </div>
      </div>
    </footer>
  );
}
