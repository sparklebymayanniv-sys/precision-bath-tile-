"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LogoMark from "./components/LogoMark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/builders", label: "Builders" },
  { href: "/request", label: "Request" },
  { href: "/blog", label: "Journal" },
];

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F12]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-10">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <LogoMark />
            <span className="hidden sm:block text-[0.92rem] font-medium uppercase tracking-[0.14em] text-[#ECE7DE] transition group-hover:text-white">
              Precision Bath &amp; Tile Group
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition hover:text-white ${
                  pathname === item.href ? "text-white" : "text-neutral-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/request"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-medium text-white transition hover:border-white/25 hover:bg-white/10 sm:px-4 sm:text-sm"
            >
              <span className="sm:hidden">Request</span>
              <span className="hidden sm:inline">Request a Bid</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/25 hover:bg-white/10 md:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] md:hidden transition duration-300 ease-out ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`absolute right-4 top-16 w-[88%] max-w-[360px] rounded-[1.5rem] border border-white/10 bg-[#0B0F12]/95 p-5 shadow-2xl transition duration-300 ease-out ${
    open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
  }`}
>
  {/* TOP BAR */}
  <div className="flex items-center justify-between mb-4">
    <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
      Menu
    </span>

    <button
      onClick={() => setOpen(false)}
      className="text-xl text-white/60 hover:text-white"
    >
      ✕
    </button>
  </div>

  {/* NAV LINKS */}
  <div className="flex flex-col gap-4">
    {navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setOpen(false)}
        className={`text-base transition ${
          pathname === item.href
            ? "text-[#d7bf86]"
            : "text-white/80 hover:text-white"
        }`}
      >
        {item.label}
      </Link>
    ))}
  </div>

  {/* CTA */}
  <Link
    href="/request"
    onClick={() => setOpen(false)}
    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#C6A56B] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
  >
    Request a Bid
          </Link>
        </div>
      </div>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-600 md:text-neutral-500">
                Precision Bath &amp; Tile Group
              </span>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-400">
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

          <div className="mt-8 border-t border-white/5 pt-6">
            <p className="text-xs text-neutral-600">
              © {new Date().getFullYear()} Precision Bath &amp; Tile Group. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}