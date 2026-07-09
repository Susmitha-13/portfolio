"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "home" },
  { href: "/journey", label: "journey" },
  { href: "/vantedge", label: "fintech" },
  { href: "/scholar-planet", label: "edtech" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="relative z-[10]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-6 pb-3">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-terra ring-2 ring-espresso" />
            <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-mustard animate-pulseSoft" />
          </div>
          <span className="font-serif text-xl text-espresso group-hover:text-terra transition">
            susmitha
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "px-3 py-1.5 text-sm font-mono tracking-wide transition-all",
                  active
                    ? "bg-espresso text-cream shadow-chunk"
                    : "text-espresso/70 hover:text-espresso hover:-translate-y-0.5",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* mobile */}
        <nav className="md:hidden flex items-center gap-2 text-xs font-mono">
          {links.slice(1).map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "px-2 py-1 rounded",
                  active ? "bg-espresso text-cream" : "text-espresso/70",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
