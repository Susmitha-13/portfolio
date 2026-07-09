import Link from "next/link";
import { Mascot } from "@/components/Mascot";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-24 text-center">
      <div className="flex justify-center">
        <Mascot size={140} />
      </div>
      <h1 className="mt-6 font-serif text-6xl text-espresso">
        this path doesn't exist<span className="text-terra">.</span>
      </h1>
      <p className="mt-4 text-espresso/70">
        The dog sniffed around and found nothing. Head back home?
      </p>
      <Link href="/" className="btn-chunk mt-8 inline-flex">
        take me home →
      </Link>
    </div>
  );
}
