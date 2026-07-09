import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Susmitha Mukkamala — AI Product Manager",
  description:
    "AI Product Manager. Currently shipping FundOS at Vantedge AI (YC W22) — PRDs, KPIs, embedded delivery, and 0→1 AI products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} ${mono.variable} ${pixel.variable} grain antialiased`}
      >
        <Nav />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
