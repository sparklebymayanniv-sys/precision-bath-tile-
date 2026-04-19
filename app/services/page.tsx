"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type Img = { src: string; alt: string };

type ServiceSectionProps = {
  eyebrow: string;
  title: string;
  intro: string;
  body: string;
  bullets: string[];
  images: Img[];
  reverse?: boolean;
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.34em] text-[#A8A39A]">
      {children}
    </p>
  );
}

function Gallery({ images }: { images: Img[] }) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);

  const prev = () =>
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));

  const next = () =>
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));

  return (
    <div
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
      onTouchStart={(e) => {
        touchStart.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStart.current === null) return;
        const diff = touchStart.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
        touchStart.current = null;
      }}
    >
      <div className="relative aspect-[4/5] w-full bg-[#0A0F14]">
        <Image
  src={images[index].src}
  alt={images[index].alt}
  fill
  className={`transition-transform duration-700 group-hover:scale-[1.02] ${
    index === 0 ? "object-contain" : "object-cover"
  }`}
  sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-lg text-white backdrop-blur transition hover:bg-black/65"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-lg text-white backdrop-blur transition hover:bg-black/65"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Go to image ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2 rounded-full transition-all ${
                  dotIndex === index
                    ? "w-6 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function BulletGrid({ bullets }: { bullets: string[] }) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {bullets.map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-[1.65] text-[#DDD7CD]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function ServiceSection({
  eyebrow,
  title,
  intro,
  body,
  bullets,
  images,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? "lg:order-2" : ""}>
          <Gallery images={images} />
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>

          <h2 className="mt-4 max-w-[13ch] text-[2rem] leading-[1.02] tracking-[-0.04em] text-[#ECE7DE] md:text-[3rem]">
            {title}
          </h2>

          <p className="mt-6 max-w-[58ch] text-[16px] font-medium leading-[1.85] text-[#DDD7CD]">
            {intro}
          </p>

          <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.9] text-[#BDB7AE]">
            {body}
          </p>

          <BulletGrid bullets={bullets} />
        </div>
      </div>
    </section>
  );
}

function TechnicalCard({
  image,
  title,
  text,
}: {
  image: Img;
  title: string;
  text: string;
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
      <div className="relative aspect-[5/4] w-full bg-[#0A0F14]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-[1.1rem] tracking-[-0.02em] text-[#ECE7DE]">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.85] text-[#BDB7AE]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden bg-[#070B0F] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/services/services-hero-1.jpg"
            alt="Residential tile installation"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,11,15,0.90)_0%,rgba(7,11,15,0.78)_28%,rgba(7,11,15,0.42)_58%,rgba(7,11,15,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,15,0.22)_0%,rgba(7,11,15,0.35)_55%,rgba(7,11,15,0.82)_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex min-h-[calc(100svh-84px)] items-center py-8 md:py-10">
            <div className="w-full max-w-[820px]">
              <Eyebrow>Services</Eyebrow>

              <h1 className="mt-5 max-w-[13ch] text-[2.5rem] leading-[0.94] tracking-[-0.05em] text-[#F2EDE4] sm:text-[3.2rem] md:text-[4.1rem] lg:text-[4.7rem]">
                Residential tile installation shaped by layout, detail, and finish quality.
              </h1>

              <p className="mt-6 max-w-[54ch] text-[15px] leading-[1.8] text-[#D0C9BF] md:text-[16px]">
                We deliver residential tile work for builders and remodelers, with
                attention to waterproofing, alignment, material transitions, and the
                final finish.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/request"
                  className="rounded-full border border-[#D7D1C7] bg-[#ECE7DE] px-6 py-3 text-sm font-medium text-[#070B0F] transition hover:bg-white"
                >
                  Request a Bid
                </Link>

                <Link
                  href="/builders"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[#ECE7DE] transition hover:bg-white/5"
                >
                  For Builders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <ServiceSection
          eyebrow="Signature Bathrooms"
          title="Bathrooms & Steam Shower Systems"
          intro="Full bathroom tile installations executed with careful attention to drainage, waterproofing, layout balance, and visual continuity."
          body="This scope is ideal for custom showers, wet-area walls, bathroom floors, integrated benches, and niche conditions where proportion and alignment need to feel intentional from every angle."
          bullets={[
            "Steam-compatible shower assemblies",
            "Integrated benches, niches, and curbs",
            "Linear drain and slope coordination",
            "Balanced wall and floor layout planning",
          ]}
          images={[
            { src: "/images/services/bathroom-1.jpg", alt: "Bathroom tile installation 1" },
            { src: "/images/services/bathroom-2.jpg", alt: "Bathroom tile installation 2" },
            { src: "/images/services/bathroom-3.jpg", alt: "Bathroom tile installation 3" },
            { src: "/images/services/bathroom-4.jpg", alt: "Bathroom tile installation 4" },
            { src: "/images/services/bathroom-5.jpg", alt: "Bathroom tile installation 5" },
            { src: "/images/services/bathroom-6.jpg", alt: "Bathroom tile installation 6" },
            { src: "/images/services/bathroom-7.jpg", alt: "Bathroom tile installation 7" },
          ]}
        />

        <div className="border-t border-white/10" />

        <ServiceSection
          eyebrow="Statement Surfaces"
          title="Architectural Feature Walls"
          intro="Feature walls where alignment, scale, and clean termination details become part of the architecture."
          body="These installations are suited to fireplaces, vertical focal walls, and other surfaces where material composition needs to feel deliberate, centered, and visually calm."
          bullets={[
            "Fireplace and focal wall applications",
            "Centered layouts and visual symmetry",
            "Controlled transitions and edge terminations",
            "Material-forward presentation",
          ]}
          images={[
            { src: "/images/services/feature-wall-1.jpg", alt: "Feature wall 1" },
            { src: "/images/services/feature-wall-2.jpg", alt: "Feature wall 2" },
            { src: "/images/services/feature-wall-3.jpeg", alt: "Feature wall 3" },
            { src: "/images/services/feature-wall-4.jpeg", alt: "Feature wall 4" },
          ]}
          reverse
        />

        <div className="border-t border-white/10" />

        <ServiceSection
          eyebrow="Decorative Floors"
          title="Pattern Floors & Layout-Driven Surfaces"
          intro="Floor installations that depend on disciplined geometry, straight lines, and consistent spacing."
          body="From entry conditions to patterned bathroom floors, this work focuses on accurate layout development, border control, and transitions that feel resolved rather than improvised."
          bullets={[
            "Decorative entry and bathroom floors",
            "Pattern and border layout execution",
            "Clean transition planning",
            "Modular and centered floor alignment",
          ]}
          images={[
            { src: "/images/services/pattern-tile-1.jpg", alt: "Pattern tile floor 1" },
            { src: "/images/services/pattern-tile-2.jpg", alt: "Pattern tile floor 2" },
            { src: "/images/services/stone-floor-1.jpg", alt: "Stone floor 1" },
            { src: "/images/services/stone-floor-2.jpg", alt: "Stone floor 2" },
          ]}
        />

        <div className="border-t border-white/10" />

        <ServiceSection
          eyebrow="Kitchen"
          title="Kitchen Backsplashes"
          intro="Backsplash installations built for visual consistency, clean outlet cutting, and refined integration under cabinets and finish trims."
          body="Whether the design calls for understated field tile or a more expressive material, the goal is the same: straight lines, clean cuts, and a finished look that supports the cabinetry and surrounding millwork."
          bullets={[
            "Precise outlet and switch cutouts",
            "Full-height and standard splash layouts",
            "Clean perimeter and termination details",
            "Cabinet and counter alignment awareness",
          ]}
          images={[
            { src: "/images/services/backsplash-1.jpg", alt: "Kitchen backsplash 1" },
            { src: "/images/services/backsplash-2.jpg", alt: "Kitchen backsplash 2" },
          ]}
          reverse
        />

        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Gallery
              images={[
                { src: "/images/services/concealed-system-1.jpg", alt: "Concealed system 1" },
                { src: "/images/services/concealed-system-2.jpg", alt: "Concealed system 2" },
                { src: "/images/services/concealed-system-3.jpg", alt: "Concealed system 3" },
              ]}
            />

            <div>
              <Eyebrow>Concealed Integration</Eyebrow>

              <h2 className="mt-4 max-w-[14ch] text-[2rem] leading-[1.02] tracking-[-0.04em] text-[#ECE7DE] md:text-[3rem]">
                Flush systems integrated into tile
              </h2>

              <p className="mt-6 max-w-[58ch] text-[16px] font-medium leading-[1.85] text-[#DDD7CD]">
                Specialized tile installation coordinated around concealed
                flush systems and tile-integrated access points.
              </p>

              <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.9] text-[#BDB7AE]">
                This work requires an existing in-wall carrier or compatible
                concealed assembly. The finish result depends on accurate
                tile-aligned cutting, clean control placement, and preserved
                service access without compromising the visual surface.
              </p>

              <BulletGrid
                bullets={[
                  "Flush-mounted plate integration",
                  "Tile-aligned access cutouts",
                  "Carrier system compatibility awareness",
                  "Clean service-access preservation",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="mb-10 max-w-[760px]">
            <Eyebrow>Technical Work</Eyebrow>
            <h2 className="mt-4 max-w-[13ch] text-[2rem] leading-[1.02] tracking-[-0.04em] text-[#ECE7DE] md:text-[3rem]">
              Behind-the-finish systems that support long-term performance
            </h2>
            <p className="mt-5 text-[15px] leading-[1.9] text-[#BDB7AE]">
              Good tile work is not only about what is visible. These scopes
              support durability, comfort, and proper substrate preparation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <TechnicalCard
              image={{
                src: "/images/services/waterproofing-1.jpg",
                alt: "Waterproofing system",
              }}
              title="Waterproofing Systems"
              text="Preparation and waterproofing details that support wet-area durability and proper protection beneath the tile surface."
            />

            <TechnicalCard
              image={{
                src: "/images/services/heated-floor-1.jpg",
                alt: "Heated floor system",
              }}
              title="Heated Floor Integration"
              text="Tile-ready floor preparation coordinated around radiant heating systems, with attention to flatness, finish transitions, and sequencing."
            />
          </div>
        </section>

        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <Eyebrow>Project Fit</Eyebrow>

                <h2 className="mt-4 max-w-[14ch] text-[2rem] leading-[1.02] tracking-[-0.04em] text-[#ECE7DE] md:text-[3rem]">
                  Built for clean execution and dependable tile work.
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-[1.9] text-[#BDB7AE]">
                  We are best aligned with bathroom remodels, custom showers,
                  backsplashes, and finish-driven projects where installation
                  quality matters.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/request"
                  className="rounded-full border border-[#D7D1C7] bg-[#ECE7DE] px-6 py-3 text-sm font-medium text-[#070B0F] transition hover:bg-white"
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
      </div>
    </main>
  );
}