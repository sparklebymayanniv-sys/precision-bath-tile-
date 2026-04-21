import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#0B0F12] text-white">
      
      {/* HERO */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero.png"
            alt="Residential tile shower"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-[#0B0F12]" />

        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-center px-6 py-16 md:px-10">
          <div className="max-w-4xl">

            <p className="mb-6 text-xs uppercase tracking-[0.38em] text-neutral-300 md:text-sm">
              Residential Tile Work
            </p>

            <h1 className="font-[var(--font-heading)] max-w-5xl text-[2.4rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[5rem]">
              Precision tile installation for residential projects.
            </h1>

            <p className="mt-6 max-w-[54ch] text-[15px] leading-[1.8] text-neutral-300 md:text-[16px]">
              Bathrooms, showers, waterproofing systems, heated floors, kitchen
              backsplashes, natural stone, and large-format tile, executed with
              clean layout and long-term performance in mind.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              
              <Link
                href="/request"
                className="inline-flex items-center justify-center rounded-full bg-[#C6A56B] px-7 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Request a Bid
              </Link>

              <Link
                href="/builders"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                For Builders
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="border-t border-white/10 bg-[#0F141A]">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-6 md:grid-cols-3 md:px-10 md:py-8">

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">
              Work
            </p>
            <p className="mt-3 text-sm text-neutral-200">
              Bathrooms, showers, heated floors, and interior tile work
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">
              Approach
            </p>
            <p className="mt-3 text-sm text-neutral-200">
              Clean layout, careful execution, and consistent finish quality
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">
              Clients
            </p>
            <p className="mt-3 text-sm text-neutral-200">
              Builders, remodelers, and homeowners who value well-built spaces
            </p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">

          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2">
            <Image
              src="/images/home/home-1.jpg"
              alt="Custom shower tile installation"
              width={900}
              height={1200}
              className="h-[380px] w-full rounded-[1.2rem] object-cover md:h-[420px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2">
            <Image
              src="/images/home/home-2.jpg"
              alt="Vanity feature wall tile"
              width={900}
              height={1200}
              className="h-[380px] w-full rounded-[1.2rem] object-cover md:h-[420px]"
            />
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2">
            <Image
              src="/images/home/home-3.jpg"
              alt="Custom tile bench detail"
              width={900}
              height={1200}
              className="h-[380px] w-full rounded-[1.2rem] object-cover md:h-[420px]"
            />
          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-y border-white/10 bg-[#11161c]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-10">

          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-neutral-400">
              Why it matters
            </p>

            <h2 className="font-[var(--font-heading)] mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Cheap installation is the most expensive mistake in construction.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              The finish is where the eye rests and where value is judged.
              Premium materials fail fast when installation lacks precision.
            </p>

            <p>
              Clean execution protects the project, reduces rework, and builds
              trust with builders and homeowners.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">

          <p className="text-xs uppercase tracking-[0.34em] text-neutral-400">
            Next step
          </p>

          <h2 className="font-[var(--font-heading)] mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Start with a clear scope and a clean plan.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Send your project details and plans. Clear information leads to
            better pricing and smoother execution.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            
            <Link
              href="/request"
              className="inline-flex items-center justify-center rounded-full bg-[#C6A56B] px-7 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Request a Bid
            </Link>

            <Link
              href="/builders"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              For Builders
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}