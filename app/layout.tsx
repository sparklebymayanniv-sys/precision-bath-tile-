import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Precision Bath & Tile Group",
    template: "%s | Precision Bath & Tile Group",
  },
  description:
    "Precision tile installation for high-end residential projects across Greater Boston.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/builders", label: "Builders" },
  { href: "/request", label: "Request" },
  { href: "/blog", label: "Journal" },
];

function LogoMark() {
  return (
    <span className="relative block h-9 w-9 shrink-0 rounded-[4px] border border-[#d7bf86]/70 bg-[#0f1822]">
      <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-[2px] border-[#d7bf86]" />
      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-[2px] border-[#d7bf86]" />
      <span className="absolute inset-0">
        <span className="absolute left-[3px] top-[3px] h-[2px] w-[10px] rotate-45 bg-[#d7bf86]" />
        <span className="absolute right-[3px] top-[3px] h-[2px] w-[10px] -rotate-45 bg-[#d7bf86]" />
        <span className="absolute bottom-[3px] left-[3px] h-[2px] w-[10px] -rotate-45 bg-[#d7bf86]" />
        <span className="absolute bottom-[3px] right-[3px] h-[2px] w-[10px] rotate-45 bg-[#d7bf86]" />
      </span>
    </span>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0B0F12] text-white font-[var(--font-body)]">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F12]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <Link href="/" className="flex items-center gap-3">
              <LogoMark />
              <span className="text-[0.92rem] font-medium uppercase tracking-[0.14em] text-[#ECE7DE]">
  Precision Bath & Tile Group
              </span>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/request"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Request a Bid
            </Link>
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10 bg-[#0B0F12]">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between md:px-10">
            <p>© {new Date().getFullYear()} Precision Bath &amp; Tile Group</p>

            <div className="flex gap-5">
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <Link href="/builders" className="hover:text-white">
                Builders
              </Link>
              <Link href="/request" className="hover:text-white">
                Request
              </Link>
              <Link href="/blog" className="hover:text-white">
                Journal
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
