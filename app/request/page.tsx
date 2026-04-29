export const metadata = {
  title: "Request a Tile Project Quote | Precision Bath & Tile",
  description:
    "Submit your residential tile project details for a fast quote on bathrooms, showers, kitchen backsplashes, heated floors, stone work and more.",
  openGraph: {
    title: "Request a Tile Project Quote | Precision Bath & Tile",
    description:
      "Submit your residential tile project details for a fast quote on bathrooms, showers, kitchen backsplashes, heated floors, stone work and more.",
    url: "https://precisionbathtile.com/request",
    siteName: "Precision Bath & Tile",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Tile Project Quote | Precision Bath & Tile",
    description:
      "Submit your residential tile project details for a fast quote on bathrooms, showers, kitchen backsplashes, heated floors, stone work and more.",
  },
};

const projectTypes = [
  "Custom home",
  "Primary bathroom remodel",
  "Shower-only project",
  "Kitchen backsplash",
  "Heated floor installation",
  "Stone or large-format tile",
  "Builder / contractor project",
  "Other residential tile work",
];

const timelineOptions = [
  "Ready now",
  "Within 1–3 months",
  "Within 3–6 months",
  "Planning stage",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000+",
];

const roughInOptions = [
  "Complete",
  "In progress",
  "Not started",
  "Not applicable",
  "Not sure",
];

export default function RequestPage() {
  const FORM_ACTION = "https://formspree.io/f/mlgobnqw";
  const PHONE = "+18574286123";

  return (
    <main className="min-h-screen bg-[#161a1f] text-white">
      <section className="border-b border-white/10 bg-[#12161a]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            Request a project evaluation
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            Start with the right information so the project moves faster.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Residential tile work requires clarity, coordination, and precision.
            The more accurate your information, the faster we can evaluate your
            project.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
              Intake form
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Tell us about your project.
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
              This form is designed to gather the information needed to review
              fit, timeline, and scope before pricing or scheduling.
            </p>

            <form
              action={FORM_ACTION}
              method="POST"
              className="mt-10 grid gap-8"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Project Request — Precision Bath & Tile"
              />
              <input type="hidden" name="_next" value="/thank-you" />

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                  Contact
                </p>

                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Full name"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-white/30"
                  />

                  <input
                    name="company"
                    autoComplete="organization"
                    placeholder="Company (optional)"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-white/30"
                  />

                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-white/30"
                  />

                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    placeholder="Your phone number"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-white/30"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                  Project
                </p>

                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  <select
                    name="projectType"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/30"
                  >
                    <option value="" disabled className="text-black">
                      Select project type
                    </option>
                    {projectTypes.map((item) => (
                      <option key={item} value={item} className="text-black">
                        {item}
                      </option>
                    ))}
                  </select>

                  <input
                    name="location"
                    autoComplete="address-level2"
                    required
                    placeholder="Project city / location"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-white/30"
                  />

                  <select
                    name="timeline"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/30"
                  >
                    <option value="" disabled className="text-black">
                      Timeline
                    </option>
                    {timelineOptions.map((item) => (
                      <option key={item} value={item} className="text-black">
                        {item}
                      </option>
                    ))}
                  </select>

                  <select
                    name="budget"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/30"
                  >
                    <option value="" disabled className="text-black">
                      Budget
                    </option>
                    {budgetOptions.map((item) => (
                      <option key={item} value={item} className="text-black">
                        {item}
                      </option>
                    ))}
                  </select>

                  <select
                    name="roughIn"
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/30"
                  >
                    <option value="" disabled className="text-black">
                      Rough-in status
                    </option>
                    {roughInOptions.map((item) => (
                      <option key={item} value={item} className="text-black">
                        {item}
                      </option>
                    ))}
                  </select>

                  <select
                    name="role"
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/30"
                  >
                    <option value="" disabled className="text-black">
                      You are
                    </option>
                    <option value="Homeowner" className="text-black">
                      Homeowner
                    </option>
                    <option value="Builder / Contractor" className="text-black">
                      Builder / Contractor
                    </option>
                    <option value="Designer / Architect" className="text-black">
                      Designer / Architect
                    </option>
                    <option value="Other" className="text-black">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                  Scope
                </p>

                <textarea
                  name="scope"
                  required
                  rows={5}
                  placeholder="Describe the project..."
                  className="mt-4 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-white/30"
                />

                <input
                  name="inspiration"
                  type="url"
                  placeholder="Optional link to plans, Dropbox, Google Drive, Houzz, etc."
                  className="mt-4 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-white/30"
                />
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                  Fast contact
                </p>
                <p className="mt-3 leading-8 text-neutral-300">
                  Need a faster response? Text us directly and mention the city,
                  project type, and timeline.
                </p>

                <a
                  href={`sms:${PHONE}?body=Hi, I need a quote for a tile project. Project city: `}
                  className="mt-4 inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Text Us Now
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                  Contact destination
                </p>
                <p className="mt-3 leading-8 text-neutral-300">
                  Form submissions are routed to{" "}
                  <strong>contact@precisionbathtile.com</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  type="submit"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Submit Request
                </button>

                <a
                  href="/services"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Review Services
                </a>
              </div>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                Direct contact
              </p>
              <h3 className="mt-4 text-2xl font-semibold">Reach us directly</h3>
              <p className="mt-4 text-neutral-300">
                Email: contact@precisionbathtile.com
              </p>
              <p className="mt-2 text-neutral-300">Phone: (857) 428-6123</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                Best fit
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                High-quality projects
              </h3>
              <ul className="mt-6 space-y-3 text-neutral-300">
                <li>Custom homes</li>
                <li>Bathroom and shower builds</li>
                <li>Heated floors and stone work</li>
                <li>Builder and designer projects</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                Why this matters
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                Cheap installation is the most expensive mistake in
                construction.
              </h3>
              <p className="mt-4 leading-8 text-neutral-300">
                The finish is where the eye rests and where value is judged.
                Clear project information allows us to evaluate fit quickly,
                reduce wasted time, and keep serious projects moving with fewer
                surprises.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                Before submitting
              </p>
              <ul className="mt-4 space-y-3 text-neutral-300">
                <li>Gather site photos or drawings if available</li>
                <li>Know the project location and room scope</li>
                <li>Have a rough timeline in mind</li>
                <li>Note whether rough-in work is complete</li>
                <li>Be specific about goals and materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Request a Tile Project Quote | Precision Bath & Tile",
            description:
              "Submit your residential tile project details for a fast quote on bathrooms, showers, kitchen backsplashes, heated floors, stone work and more.",
            url: "https://precisionbathtile.com/request",
            mainEntity: {
              "@type": "Service",
              name: "Residential tile installation quote",
              description:
                "Quote request page for residential tile projects including bathrooms, showers, kitchens, heated floors, and stone work.",
              provider: {
                "@type": "LocalBusiness",
                name: "Precision Bath & Tile",
                telephone: "+1-857-428-6123",
                email: "contact@precisionbathtile.com",
                url: "https://precisionbathtile.com",
              },
            },
          }),
        }}
      />
    </main>
  );
}