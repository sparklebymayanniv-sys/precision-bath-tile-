import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    slug: "cheap-installation-is-not-cheaper",
    category: "Waterproofing failure",
    title: "Cheap installation is not cheaper. It just delays the real cost.",
    excerpt:
      "This bathroom did not fail over time. It failed at the system level. By the time damage became visible, the repair was no longer tile work. It was demolition.",
    thumbnail: "/images/journal/failure-1.jpg",
    featured: true,
  },
  {
    slug: "layout-mistakes-show-up-every-day",
    category: "Layout mistakes",
    title: "Layout mistakes that ruin the entire installation.",
    excerpt:
      "Crooked alignment, weak centering, awkward cuts, and unresolved transitions are not material problems. They come from planning and installation decisions that affect how the finished space reads.",
    thumbnail: "/images/journal/layout-1.jpg",
    featured: false,
  },
  {
    slug: "installation-mistakes-that-damage-the-home-and-reduce-property-value",
    category: "System failures",
    title: "Installation mistakes that damage the home and reduce property value.",
    excerpt:
      "Some installation mistakes are visible immediately. Others quietly damage surrounding materials, reduce perceived quality, and lower the value of the entire project.",
    thumbnail: "/images/journal/value-1.jpg",
    featured: false,
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.34em] text-[#A8A39A]">
      {children}
    </p>
  );
}

export default function BlogPage() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <main className="overflow-x-hidden bg-[#070B0F] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/journal/journal-hero.png"
            alt="Tile installation planning workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,11,15,0.9)_0%,rgba(7,11,15,0.72)_35%,rgba(7,11,15,0.55)_62%,rgba(7,11,15,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,15,0.2)_0%,rgba(7,11,15,0.45)_58%,rgba(7,11,15,0.82)_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex min-h-[72vh] items-center py-16 md:py-20">
            <div className="max-w-[820px]">
              <Eyebrow>Journal</Eyebrow>

              <h1 className="mt-5 max-w-[12ch] text-[3rem] leading-[0.94] tracking-[-0.055em] text-[#F2EDE4] sm:text-[4rem] md:text-[4.8rem]">
                Failures, layout decisions, and installation standards that
                shape the final result.
              </h1>

              <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.95] text-[#D0C9BF] md:text-[16px]">
                This journal explains where tile projects go wrong, how weak
                planning becomes visible, and what separates finished tile work
                from refined installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <Link
                href={`/blog/${featured.slug}`}
                className="group relative block overflow-hidden rounded-[1.75rem] border border-white/10"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={featured.thumbnail}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />
                </div>
              </Link>

              <div>
                <Eyebrow>Featured article</Eyebrow>

                <h2 className="mt-4 max-w-[14ch] text-[2.1rem] leading-[1.05] tracking-[-0.04em] text-[#ECE7DE] md:text-[3.1rem]">
                  {featured.title}
                </h2>

                <p className="mt-5 max-w-[56ch] text-[15px] leading-[1.95] text-[#BDB7AE]">
                  {featured.excerpt}
                </p>

                <div className="mt-8">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="rounded-full border border-[#D7D1C7] bg-[#ECE7DE] px-6 py-3 text-sm font-medium text-[#070B0F] transition hover:bg-white"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mb-12 max-w-[520px]">
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#8F8A81]">
              Common installation failures
            </p>

            <h2 className="mt-4 text-[2rem] leading-[1.1] tracking-[-0.03em] text-[#ECE7DE]">
              These are the mistakes we are called to fix.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((article) => (
              <article
                key={article.slug}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.02] transition duration-500 hover:bg-white/[0.04]"
              >
                <Link href={`/blog/${article.slug}`} className="block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover brightness-[0.92] contrast-[1.05] transition duration-700 group-hover:scale-[1.04] group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-black/5 transition group-hover:bg-black/15" />
                  </div>

                  <div className="p-7">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#A8A39A]">
                      {article.category}
                    </p>

                    <h3 className="mt-4 max-w-[16ch] text-[1.6rem] leading-[1.15] tracking-[-0.03em] text-[#ECE7DE]">
                      {article.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.95] text-[#BDB7AE]">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}