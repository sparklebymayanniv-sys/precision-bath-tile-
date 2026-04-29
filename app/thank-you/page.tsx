export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#161a1f] text-white">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
          Thank you
        </p>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
          Your request has been received.
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-300">
          We’ll review the details and reach out shortly to discuss your tile
          project.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Back to home
          </a>

          <a
            href="/services"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View services
          </a>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (window.gtag) {
              window.gtag('event', 'conversion', {
                'send_to': 'AW-7592282622/z13sCP6TpKQcEOXzmJZD'
              });
            }
          `,
        }}
      />
    </main>
  );
}