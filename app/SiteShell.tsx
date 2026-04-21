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
          <Link
            href="/"
            className="group flex min-w-0 flex-1 items-center gap-3"
            aria-label="Precision Bath & Tile Group home"
          >
            <LogoMark />
            <span className="block text-[0.74rem] font-medium uppercase tracking-[0.12em] text-[#ECE7DE] transition group-hover:text-white sm:text-[0.84rem] md:text-[0.92rem] md:tracking-[0.14em]">
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

          <div className="flex shrink-0 items-center">
            <Link
              href="/request"
              className="hidden items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10 md:inline-flex"
            >
              Request a Bid
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="ml-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base text-white transition hover:border-white/25 hover:bg-white/10 md:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] md:hidden transition duration-300 ${
          open
            ? "visible bg-black/45 opacity-100 backdrop-blur-[2px]"
            : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0" onClick={() => setOpen(false)} />

        <div
          className={`absolute right-4 top-4 w-[min(88vw,340px)] rounded-[1.8rem] border border-white/10 bg-[#0B0F12]/96 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[#ECE7DE]">
                Precision Bath &amp; Tile Group
              </span>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition hover:border-white/25 hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-4 text-[1.15rem] tracking-[-0.02em] transition ${
                  pathname === item.href
                    ? "text-[#D2AE6D]"
                    : "text-white hover:text-[#D2AE6D]"
                } ${index !== navItems.length - 1 ? "border-b border-white/8" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6">
            <Link
              href="/request"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#D7D1C7] bg-[#D2AE6D] px-6 py-3 text-sm font-medium text-[#070B0F] transition hover:brightness-105"
            >
              Request a Bid
            </Link>
          </div>
        </div>
      </div>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-600 sm:text-xs md:text-neutral-500">
                Precision Bath &amp; Tile Group
              </span>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-400">
              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>
              <Link href="/builders" className="transition hover:text-white">
                Builders
              </Link>
              <Link href="/request" className="transition hover:text-white">
                Request
              </Link>
              <Link href="/blog" className="transition hover:text-white">
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