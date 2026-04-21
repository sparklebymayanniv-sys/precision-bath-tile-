"use client";

import Image from "next/image";
import Link from "next/link";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.34em] text-[#A8A39A]">
      {children}
    </p>
  );
}

export default function BuildersPage() {
  return (
    <main className="overflow-x-hidden bg-[#070B0F] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/builders/hero.jpg"
            alt="Tile installation for builders and remodelers"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,11,15,0.90)_0%,rgba(7,11,15,0.80)_34%,rgba(7,11,15,0.42)_62%,rgba(7,11,15,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,15,0.18)_0%,rgba(7,11,15,0.34)_58%,rgba(7,11,15,0.84)_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex min-h-[calc(100svh-84px)] items-center py-8 md:py-10">
            <div className="w-full max-w-[760px]">
              <Eyebrow>For Builders</Eyebrow>

              <h1 className="mt-5 max-w-[11ch] text-[3rem] leading-[0.92] tracking-[-0.055em] text-[#F2EDE4] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.4rem]">
                You shouldn’t have to worry about the tile phase.
              </h1>

              <p className="mt-6 max-w-[58ch] text-[15px] leading-[1.85] text-[#D0C9BF] md:text-[16px]">
                There’s already enough to manage. We handle layout, execution,
                and finish details with consistency and care  so the project
                moves forward without added stress or rework.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/request"
                  className="rounded-full border border-[#D7D1C7] bg-[#D2AE6D] px-6 py-3 text-sm font-medium text-[#070B0F] transition hover:brightness-105"
                >
                  Request a Bid
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[#ECE7DE] transition hover:bg-white/5"
                >
                  Review Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-white/10 bg-[#0A0F17]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-6 py-6">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#9B958B]">
                What matters
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#E7E1D8]">
                Clean layout, controlled execution, and finish quality that
                holds up.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-6 py-6">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#9B958B]">
                How we work
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#E7E1D8]">
                Clear communication, steady progress, and a jobsite that stays
                organized.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-6 py-6">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#9B958B]">
                Best fit
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#E7E1D8]">
                Builders and remodelers who want reliable tile work without more
                to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEXT + DETAIL IMAGE */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <Eyebrow>Why it feels easier</Eyebrow>

            <h2 className="mt-4 max-w-[12ch] text-[2.2rem] leading-[1.03] tracking-[-0.04em] text-[#ECE7DE] md:text-[3.2rem]">
              When the finish phase is handled right, everything feels calmer.
            </h2>

            <p className="mt-6 max-w-[56ch] text-[16px] leading-[1.95] text-[#D5CFC6]">
              Tile work tends to show every mistake, which is why it needs to be
              steady from the start.
            </p>

            <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.95] text-[#BDB7AE]">
              We focus on clean layout, controlled execution, and clear
              communication, so you’re not chasing fixes or adjusting around
              problems later.
            </p>

            <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.95] text-[#BDB7AE]">
              The goal is simple: clean work, less friction, and a final result
              that feels resolved.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <div className="relative aspect-[1/1] w-full">
              <Image
                src="/images/builders/detail.jpg"
                alt="Tile detail close-up"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/10 bg-[#0A0F17]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Eyebrow>How we work</Eyebrow>

              <h2 className="mt-4 max-w-[13ch] text-[2.2rem] leading-[1.03] tracking-[-0.04em] text-[#ECE7DE] md:text-[3rem]">
                A cleaner process leads to a cleaner result.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Prepared from the start",
                  text: "We step into projects with layout thinking, finish alignment, and installation flow already in mind.",
                },
                {
                  title: "Clear communication",
                  text: "Questions and transition details are addressed early so the tile phase does not create confusion later.",
                },
                {
                  title: "Controlled execution",
                  text: "We focus on straight lines, disciplined installation, and finish details that look intentional rather than corrected.",
                },
                {
                  title: "Respect for the jobsite",
                  text: "A clean workspace and steady process make coordination easier for everyone involved.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-[1rem] tracking-[-0.02em] text-[#ECE7DE]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.85] text-[#BDB7AE]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING BLOCK */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Eyebrow>What builders need</Eyebrow>

            <h2 className="mt-4 max-w-[12ch] text-[2.3rem] leading-[1.02] tracking-[-0.04em] text-[#ECE7DE] md:text-[3.3rem]">
              Good tile work should not create more to manage.
            </h2>
          </div>

          <div className="max-w-[58ch]">
            <p className="text-[16px] leading-[1.95] text-[#D5CFC6]">
              The finish is where the eye rests — and where quality is judged.
              But for the builder, it also needs to stay predictable.
            </p>

            <p className="mt-6 text-[16px] leading-[1.95] text-[#BDB7AE]">
              We approach tile work with the understanding that clean execution
              protects the schedule, reduces rework, and makes closeout feel
              smoother for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#070B0F]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 py-10 md:px-10 md:py-12">
            <Eyebrow>Next step</Eyebrow>

            <h2 className="mt-4 max-w-[15ch] text-[2.3rem] leading-[1.04] tracking-[-0.04em] text-[#ECE7DE] md:text-[3.4rem]">
              If the scope is clear, the process stays simple.
            </h2>

            <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.9] text-[#BDB7AE]">
              Send your project type, location, timeline, and any plans or site
              photos. Clear information helps us give you accurate pricing and a
              smoother start.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request"
                className="rounded-full border border-[#D7D1C7] bg-[#D2AE6D] px-6 py-3 text-sm font-medium text-[#070B0F] transition hover:brightness-105"
              >
                Request a Bid
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[#ECE7DE] transition hover:bg-white/5"
              >
                Review Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
<section className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 text-center">

    <h2 className="text-2xl md:text-3xl text-white">
      Need a tile subcontractor for your project?
    </h2>

    <p className="mt-4 text-[#BDB7AE] max-w-[55ch] mx-auto leading-8">
      Send your plans or project scope. We focus on residential tile installations
      where layout, finish quality, and clean execution matter.
    </p>

    <div className="mt-8 flex justify-center gap-4 flex-wrap">
      <a
        href="/request"
        className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 transition"
      >
        Get Free Estimate
      </a>

      <a
        href="tel:617XXXXXXX"
        className="rounded-full border border-white/20 px-6 py-3 text-sm text-white hover:bg-white/10 transition"
      >
        Call Now
      </a>
    </div>

  </div>
</section>