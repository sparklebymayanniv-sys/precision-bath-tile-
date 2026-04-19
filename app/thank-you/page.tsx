import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#070B0F] text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-24">
        <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 md:p-14">
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#A8A39A]">
            Request Received
          </p>

          <h1 className="mt-5 max-w-[12ch] text-[2.8rem] leading-[0.95] tracking-[-0.05em] text-[#ECE7DE] md:text-[4rem]">
            Thanks. We’ll review your project and follow up.
          </h1>

          <p className="mt-6 max-w-[55ch] text-[16px] leading-[1.9] text-[#CFC7BD]">
            We review each request based on scope, timeline, and project fit. 
Qualified projects receive a response within 24–48 hours.

If your timeline is tight or the project is already underway, include that clearly in your request so we can prioritize accordingly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="rounded-full bg-[#ECE7DE] px-6 py-3 text-sm font-medium text-[#070B0F] transition hover:bg-white"
            >
              Read the Journal
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-[#ECE7DE] transition hover:bg-white/5"
            >
              Review Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}