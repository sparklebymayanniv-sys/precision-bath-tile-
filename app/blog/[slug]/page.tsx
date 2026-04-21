import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const articles = [
  {
   slug: "cheap-installation-is-not-cheaper",
    category: "Waterproofing failure",
    title: "Cheap installation is not cheaper. It just delays the real cost.",
    excerpt:
      "This bathroom did not fail over time. It failed at the system level. By the time damage became visible, the repair was no longer tile work. It was demolition.",
  },
  {
    slug: "layout-mistakes-show-up-every-day",
    category: "Layout mistakes",
    title: "Layout mistakes that ruin the entire installation.",
    excerpt:
      "Crooked alignment, weak centering, awkward cuts, and unresolved transitions are not material problems. They come from planning and installation decisions that affect how the finished space reads.",
  },
  {
    slug: "installation-mistakes-that-damage-the-home-and-reduce-property-value",
    category: "System failures",
    title: "Installation mistakes that damage the home and reduce property value.",
    excerpt:
      "Some installation mistakes are visible immediately. Others quietly damage surrounding materials, reduce perceived quality, and lower the value of the entire project.",
  },
  {
    slug: "why-shower-waterproofing-matters-before-tile-installation",
    category: "System work",
    title: "Why shower waterproofing matters before tile installation.",
    excerpt:
      "Tile is the finish. The system behind it is what protects the structure. Proper waterproofing decides whether the installation performs or fails.",
  },
  {
    slug: "installation-failures-that-start-behind-the-tile",
    category: "System failures",
    title: "Installation failures that start behind the tile.",
    excerpt:
      "Most tile failures do not begin at the surface. They begin behind it — in missing waterproofing, weak transitions, and failed system execution.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#A8A39A] md:text-[11px]">
      {children}
    </p>
  );
}

function ArticleHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <Image
          src="/images/journal/hero-combined.jpg"
          alt="Frustrated contractor and project failure"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24">
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>

          <h1 className="mt-5 max-w-[12ch] text-[3rem] leading-[0.95] tracking-[-0.05em] text-[#ECE7DE] md:text-[4.5rem]">
            {title}
          </h1>

          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.9] text-[#CFC7BD]">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}

function ImageTextSection({
  image,
  alt,
  title,
  paragraphs,
  caption,
  reverse = false,
}: {
  image: string;
  alt: string;
  title: string;
  paragraphs: string[];
  caption: string;
  reverse?: boolean;
}) {
  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className={reverse ? "order-2 md:order-1" : ""}>
            <h2 className="max-w-[14ch] text-[2rem] leading-[1.08] tracking-[-0.03em] text-[#ECE7DE] md:text-[2.5rem]">
              {title}
            </h2>

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-[15px] leading-[1.9] text-[#BDB7AE] ${
                  i === 0 ? "mt-6" : "mt-4"
                }`}
              >
                {p}
              </p>
            ))}

            <p className="mt-4 text-[13px] leading-[1.7] text-[#9F978C]">
              {caption}
            </p>
          </div>

          <div className={reverse ? "order-1 md:order-2" : ""}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FullWidthImageSection({
  image,
  alt,
  text,
}: {
  image: string;
  alt: string;
  text: string;
}) {
  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.9] text-[#BDB7AE]">
          {text}
        </p>
      </div>
    </section>
  );
}

function ProofSection({
  image,
  alt,
  title,
  paragraphs,
}: {
  image: string;
  alt: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="max-w-[14ch] text-[2rem] leading-[1.08] tracking-[-0.03em] text-[#ECE7DE] md:text-[2.5rem]">
              {title}
            </h2>

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-[15px] leading-[1.9] text-[#BDB7AE] ${
                  i === 0 ? "mt-6" : "mt-4"
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomeSection({
  image,
  alt,
  title,
  paragraphs,
}: {
  image: string;
  alt: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-[16ch] text-[2.3rem] leading-[1.05] tracking-[-0.04em] text-[#ECE7DE]">
          {title}
        </h2>

        <div className="relative mt-8 aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0A0F14]">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="100vw"
            className="object-contain bg-[#0A0F14]"
          />
        </div>

        <div className="mt-8 max-w-[62ch]">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`leading-[1.9] ${
                i === 0
                  ? "mt-0 text-[16px] text-[#CFC7BD]"
                  : "mt-4 text-[15px] text-[#BDB7AE]"
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingSection({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-[18ch] text-[2.4rem] leading-[1.05] tracking-[-0.04em] text-[#ECE7DE]">
          {title}
        </h2>

        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`max-w-[60ch] leading-[1.9] ${
              i === 0
                ? "mt-6 text-[16px] text-[#CFC7BD]"
                : "mt-4 text-[15px] text-[#BDB7AE]"
            }`}
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function ArticleCta({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 md:p-12">
          <h2 className="max-w-[14ch] text-[2rem] leading-[1.1] tracking-[-0.03em] text-[#ECE7DE] md:text-[2.6rem]">
            {title}
          </h2>

          <p className="mt-5 max-w-[50ch] text-[15px] leading-[1.9] text-[#BDB7AE]">
            {text}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/request"
              className="rounded-full bg-[#ECE7DE] px-6 py-3 text-sm font-medium text-[#070B0F] transition hover:bg-white"
            >
              Request a Bid
            </Link>

            <Link
              href="/blog"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-[#ECE7DE] transition hover:bg-white/5"
            >
              Back to Journal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  if (article.slug === "cheap-installation-is-not-cheaper") {
    return (
      <main className="overflow-x-hidden bg-[#070B0F] text-white">
        <ArticleHero
          eyebrow="Waterproofing failure"
          title="Cheap installation is not cheaper. It just delays the real cost."
          text="What you are seeing is not surface damage. This is system failure behind the tile. By the time it becomes visible, repair is no longer tile work. It is full demolition."
        />

        <ImageTextSection
          image="/images/journal/failure-1.jpg"
          alt="Water damage behind tile at bathroom corner"
          title="Water moved behind the surface long before this appeared"
          paragraphs={[
            "Tile and grout are not waterproof. Without a proper waterproofing system behind them, water enters the assembly and travels into framing, trim, and surrounding materials.",
            "This is not a surface-level issue. It is a system failure that started long before the damage became visible.",
          ]}
          caption="The visible damage is late-stage. The failure started behind the tile."
        />

        <ImageTextSection
          image="/images/journal/failure-2.jpg"
          alt="Rust and moisture damage at bathroom trim and wall corner"
          title="Rust, swelling, and breakdown are signs of prolonged saturation"
          paragraphs={[
            "Metal corner beads corrode. Trim absorbs moisture and expands. These are not cosmetic issues. They indicate continuous water exposure behind the finished surface.",
            "This is not a material issue. It is a planning and waterproofing decision that failed before the tile ever had a chance to perform.",
          ]}
          caption="At this stage, materials are already compromised and cannot be restored."
          reverse
        />

        <ProofSection
          image="/images/journal/proof-niche.jpg"
          alt="Cleanly aligned marble shower niche detail"
          title="Control is visible in the details."
          paragraphs={[
            "When layout and finish are resolved before installation begins, interruptions like niches, edges, and transitions align with the surrounding system instead of disrupting it.",
            "This level of control is not corrected during installation. It is planned from the start.",
          ]}
        />

        <ImageTextSection
          image="/images/journal/failure-3.jpg"
          alt="Shower floor pebble tile failure around drain"
          title="The tile is not the failure. The system underneath is."
          paragraphs={[
            "When water reaches the substrate, adhesion breaks. Tiles loosen, detach, and expose the assembly below. This is typically caused by missing or improperly installed waterproofing and poor drain integration.",
            "This is not a tile problem. It is what happens when the full wet-area system was never executed correctly.",
          ]}
          caption="Once this happens, repairs are no longer surface-level."
        />

        <FullWidthImageSection
          image="/images/journal/failure-4.jpg"
          alt="Full shower floor system failure"
          text="At full scale, the failure is clear. The surface is separating, the substrate is exposed, and water has already compromised the structure below."
        />

        <ClosingSection
          title="Cheap installation is not cheaper. It just delays the real cost."
          paragraphs={[
            "Most failures are not caused by materials. They are caused by poor system execution, improper waterproofing, incorrect slope, and lack of planning.",
            "By the time visible damage appears, the cost is no longer tile replacement. It becomes demolition, reconstruction, and extended downtime.",
            "The difference between a surface that survives and a system that fails is decided before the first tile is set.",
          ]}
        />

        <OutcomeSection
          image="/images/journal/proof-shower.jpg"
          alt="Completed marble shower showing controlled installation"
          title="Good installation is planned, not adjusted."
          paragraphs={[
            "Most installation failures are not caused by materials. They come from decisions that were never fully resolved before the first tile was set.",
            "We approach waterproofing, layout, and finish as one system so the result is controlled from the start instead of corrected at the end.",
          ]}
        />

        <ArticleCta
          title="Build it once. Build it correctly."
          text="We focus on clean execution, proper waterproofing, and finish integrity so the result performs as well as it looks."
        />
      </main>
    );
  }

  if (article.slug === "layout-mistakes-show-up-every-day") {
    return (
      <main className="overflow-x-hidden bg-[#070B0F] text-white">
        <ArticleHero
          eyebrow="Layout mistakes"
          title="Layout mistakes that ruin the entire installation."
          text="The examples below reflect real conditions we are asked to evaluate and, in many cases, correct. These are not material failures. They are layout, alignment, and finish decisions made before or during installation that affect how the entire space reads."
        />

        <ImageTextSection
          image="/images/journal/layout-1.jpg"
          alt="Common layout issue around shower floor drain and perimeter"
          title="The drain layout decides how the entire shower feels."
          paragraphs={[
            "At first glance, everything can look acceptable. But layout is not about looking fine from a distance. It is about balance, proportion, and how the geometry feels once the room is complete.",
            "Around drains and perimeter cuts, weak planning becomes visible. If the layout is not resolved before installation begins, the floor can feel slightly off even when the material itself is good.",
            "This is not a material issue. It is a planning decision.",
          ]}
          caption="Common layout issue: the surface reads clean at first, but the drain relationship and surrounding cuts do not feel fully resolved."
        />

        <ImageTextSection
          image="/images/journal/layout-2.jpg"
          alt="Corner alignment inconsistency in subway tile installation"
          title="Alignment is what makes tile feel right or wrong."
          paragraphs={[
            "Corners tell the truth about alignment. When grout lines do not carry through cleanly, continuity breaks and the wall loses the visual control that good installation depends on.",
            "This is not a tile issue. It is a planning issue that should have been resolved before the first tile was set.",
            "This is not a material issue. It is a planning decision.",
          ]}
          caption="Alignment inconsistency: the corner interrupts the pattern instead of carrying it cleanly through the turn."
          reverse
        />

        <ProofSection
          image="/images/journal/proof-niche.jpg"
          alt="Cleanly aligned marble niche detail"
          title="Control is decided before the first tile is set."
          paragraphs={[
            "When layout is resolved before installation begins, interruptions like niches, edges, and transitions align cleanly with the surrounding system.",
            "That level of control is not improvised during installation. It comes from reference lines, balanced cuts, and decisions made early.",
          ]}
        />

        <ImageTextSection
          image="/images/journal/layout-3.jpg"
          alt="Inconsistent finish detail at wall base"
          title="Finish details reveal the installer, not the material."
          paragraphs={[
            "Perimeter joints, edge conditions, and finish transitions are where rushed work becomes visible. These are small decisions, but they affect the quality of the whole installation.",
            "High-end materials do not hide weak detailing. If the finish work is not controlled, the room loses refinement immediately.",
            "This is not a material issue. It is a planning decision.",
          ]}
          caption="Finish quality issue: perimeter detailing was installed, but not resolved with consistency."
        />

        <ImageTextSection
          image="/images/journal/layout-5.jpg"
          alt="Unresolved transition between tile and adjacent flooring"
          title="A project is not finished when tile is installed."
          paragraphs={[
            "It is finished when the tile connects cleanly to the rest of the room. Transitions are part of the installation, not an afterthought.",
            "When those conditions are improvised instead of planned, the result feels unfinished even if the tile itself is already set.",
            "This is not a material issue. It is a planning decision.",
          ]}
          caption="Unresolved transition detail: the tile was installed, but the connection to the adjacent flooring was never properly finished."
          reverse
        />

        <ClosingSection
          title="Most layout mistakes are not material failures. They are planning failures you live with every day."
          paragraphs={[
            "Good materials cannot correct weak layout planning, poor centering, or unresolved finish details. Once the tile is set, those decisions become permanent.",
            "This is why layout should be treated as a critical part of the installation, not something figured out during the job.",
            "The difference between average work and refined installation is not the material. It is the level of control before the first tile is placed.",
          ]}
        />

        <OutcomeSection
          image="/images/journal/proof-shower.jpg"
          alt="Completed marble shower showing resolved layout and finish"
          title="Good layout does not draw attention to itself. It feels resolved."
          paragraphs={[
            "The difference between average work and refined installation is not the material alone. It is the level of control behind every line, edge, and interruption.",
            "When layout is planned from the start, the room reads clearly, finishes cleanly, and holds together as a complete system.",
          ]}
        />

        <ArticleCta
          title="If the layout matters, it has to be planned before installation begins."
          text="We focus on balance, alignment, clean finish details, and full installation control so the room feels resolved from every angle."
        />
      </main>
    );
  }

  if (
    article.slug ===
    "installation-mistakes-that-damage-the-home-and-reduce-property-value"
  ) {
    return (
      <main className="overflow-x-hidden bg-[#070B0F] text-white">
        <ArticleHero
          eyebrow="System failures"
          title="Installation mistakes that damage the home and reduce property value."
          text="Some installation mistakes are visible immediately. Others silently affect moisture control, durability, and how the entire property is perceived. The issue is not the tile. It is the level of control behind it."
        />

        <ImageTextSection
          image="/images/journal/value-3.jpg"
          alt="Pattern tile floor layout running through a narrow space"
          title="The pattern is installed, but the space was never considered."
          paragraphs={[
            "Tile layout must respond to the room, not just fill it. When patterns drift or fail to align with the geometry of the space, the entire installation feels off even if the material itself is expensive.",
            "These are the kinds of decisions that reduce perceived quality immediately. They do not need years to show up. They are visible the day the project is finished.",
            "This is not a material issue. It is a planning decision.",
          ]}
          caption="Layout failure: the pattern exists, but the space was never fully considered."
        />

        <ImageTextSection
          image="/images/journal/value-2.jpg"
          alt="Hex tile backsplash with poorly planned outlet placement and cuts"
          title="Every focal point exposes the installer."
          paragraphs={[
            "Outlets, fixtures, and visible interruptions require planning before installation begins. When cuts are improvised around them, the result looks unfinished and unintentional.",
            "This is where homeowners and builders start questioning the entire installation, because the focal point reveals whether the work was actually controlled.",
            "This is not a material issue. It is a planning decision.",
          ]}
          caption="Focal-point failure: the outlet cut and pattern relationship were not resolved cleanly."
          reverse
        />

        <ProofSection
          image="/images/journal/proof-niche.jpg"
          alt="Clean marble niche showing controlled installation"
          title="Control is what protects the value of the finished space."
          paragraphs={[
            "When tile is planned as a complete system, focal points, interruptions, and finish lines align with the room instead of weakening it.",
            "That kind of control improves not only appearance, but also the long-term perception of quality throughout the home.",
          ]}
        />

        <ImageTextSection
          image="/images/journal/value-1.jpg"
          alt="Crooked wall tile termination near ceiling"
          title="Edges are where control is either proven or lost."
          paragraphs={[
            "The way tile meets ceilings, trims, and boundaries defines the level of execution. Poor terminations leave visible inconsistencies that cannot be corrected later without removal.",
            "These are not small cosmetic misses. They lower the perceived standard of the whole space.",
            "This is not a material issue. It is a planning decision.",
          ]}
          caption="Termination failure: the edge condition makes the installation feel unresolved."
        />

        <ImageTextSection
          image="/images/journal/value-4.jpg"
          alt="Marble hex tile floor with inconsistent material selection and markings"
          title="Material control is part of the installation."
          paragraphs={[
            "Installation is not only placing tile. It includes selection, consistency, and attention during the process. When this is ignored, even good materials look careless.",
            "Visible markings, weak sorting, and inconsistent material control immediately reduce how finished and valuable the room feels.",
            "This is not a material issue. It is a planning and quality-control decision.",
          ]}
          caption="Quality-control issue: the material was placed, but not managed with finish-level discipline."
          reverse
        />

        <ClosingSection
          title="These mistakes do not just look bad. They change how the property is valued."
          paragraphs={[
            "Some installation mistakes are visible immediately. Others create weak points that affect maintenance, durability, and long-term perception.",
            "The difference between acceptable and refined work is decided before the first tile is placed. Once installed, these mistakes usually remain until the work is removed and redone.",
            "Poor execution lowers confidence in the space. Good execution protects both performance and perceived value.",
          ]}
        />

        <OutcomeSection
          image="/images/journal/proof-shower.jpg"
          alt="Completed marble shower showing high-end controlled finish"
          title="Good installation protects more than the finish."
          paragraphs={[
            "Poor decisions reduce confidence in the room immediately. Good installation does the opposite. It makes the space feel stable, intentional, and valuable.",
            "We treat layout, edges, transitions, and system execution as value-defining parts of the project, not details left to solve at the end.",
          ]}
        />

        <ArticleCta
          title="Good installation protects more than the finish."
          text="We treat layout, transitions, edges, and system execution as value-defining parts of the project, not details to solve at the end."
        />
      </main>
    );
  }
  if (article.slug === "why-shower-waterproofing-matters-before-tile-installation") {
    return (
      <main className="overflow-x-hidden bg-[#070B0F] text-white">
        <ArticleHero
          eyebrow="System work"
          title="Why shower waterproofing matters before tile installation."
          text="Tile is the visible finish. Waterproofing is the part that protects the structure behind it. When the system is not resolved correctly, the damage starts long before it becomes visible."
        />

        <ImageTextSection
          image="/images/journal/bathroom-damage-1.jpg"
          alt="Opened lower wall showing moisture damage behind shower tile"
          title="The visible damage is only the late-stage symptom."
          paragraphs={[
            "By the time moisture damage becomes visible at the lower wall, the problem is already beyond the surface. Water has moved behind the tile assembly and begun affecting surrounding materials.",
            "This is why waterproofing cannot be treated as an accessory to the installation. It is part of the system that determines whether the project performs long-term.",
          ]}
          caption="What appears at the surface is often the result of a much deeper system failure."
        />

        <ImageTextSection
          image="/images/journal/bathroom-demo-1.jpg"
          alt="Shower opened at base to expose damaged lower wall and framing"
          title="When the system fails, repair becomes demolition."
          paragraphs={[
            "At this stage, the work is no longer tile correction. The assembly has to be opened so damaged material can be evaluated and the base condition can be rebuilt correctly.",
            "This is the real cost of poor waterproofing decisions: removal, repair, reconstruction, and delay.",
          ]}
          caption="Once water reaches the structure, the project moves from repair to reconstruction."
          reverse
        />

        <ImageTextSection
          image="/images/journal/kerdi-system.jpg"
          alt="System-compatible sealant used at critical shower transitions"
          title="Waterproofing is not one product. It is a complete assembly."
          paragraphs={[
            "A reliable shower is built through correct transitions, proper bonding, compatible materials, and full integration at change-of-plane conditions.",
            "Sealants, membranes, edges, corners, and floor-to-wall junctions all have to work together. If one part is ignored, the system is weakened.",
          ]}
          caption="Critical transitions should be treated as system points, not finish details."
        />

        <ImageTextSection
          image="/images/journal/waterproofing-layer.jpg"
          alt="Waterproofing layer integrated at the base of the shower before final finish"
          title="The protection happens before the final finish goes in."
          paragraphs={[
            "What makes a shower durable is not only the tile selection or grout color. It is the waterproofed assembly beneath the finish layer.",
            "When those layers are installed with discipline, the final surface is not just clean visually — it is supported by a complete system behind it.",
          ]}
          caption="The finish should sit on top of a resolved waterproof assembly."
          reverse
        />

        <OutcomeSection
          image="/images/journal/finished-shower.jpg"
          alt="Completed shower installation with clean finish and protected assembly"
          title="Good shower work looks clean because the system was resolved first."
          paragraphs={[
            "A refined result does not come from adjusting problems at the end. It comes from treating waterproofing, transitions, and finish installation as one connected process.",
            "Tile is the visible finish. The system behind it is what protects the project.",
          ]}
        />

        <ArticleCta
          title="Waterproofing is not optional. It is what protects the installation."
          text="We approach shower work as a complete assembly so the result performs over time instead of failing behind the surface."
        />
      </main>
    );
  }

  if (article.slug === "installation-failures-that-start-behind-the-tile") {
    return (
      <main className="overflow-x-hidden bg-[#070B0F] text-white">
        <ArticleHero
          eyebrow="System failures"
          title="Installation failures that start behind the tile."
          text="Most tile failures do not begin at the surface. They begin behind it — in missing waterproofing, weak transitions, and failed system execution."
        />

        <ImageTextSection
          image="/images/journal/failure-1.jpg"
          alt="Visible failure and deterioration at lower wall condition"
          title="The surface is where the failure becomes visible — not where it began."
          paragraphs={[
            "When deterioration shows at the edge of the installation, the underlying problem has usually been active for a long time. Moisture has already moved through the system and affected adjacent materials.",
            "This is why surface appearance alone is not enough to judge a wet-area installation.",
          ]}
          caption="Visible damage is often the last stage of the problem, not the first."
        />

        <ImageTextSection
          image="/images/journal/failure-2.jpg"
          alt="Tile installation showing system breakdown and visible moisture-related failure"
          title="Weak system execution always shows up somewhere."
          paragraphs={[
            "Some failures appear in corners, some at transitions, and some at the base of the assembly. The location changes, but the cause is the same: the system was never properly resolved.",
            "Poor sealing, incompatible layers, and missing waterproofing all lead to the same outcome — failure behind the finished surface.",
          ]}
          caption="The exact location changes. The system failure does not."
          reverse
        />

        <ImageTextSection
          image="/images/journal/failure-3.jpg"
          alt="Additional example of tile failure caused by compromised underlying conditions"
          title="By the time the failure is obvious, the cost has already grown."
          paragraphs={[
            "Once the problem becomes undeniable, the repair is rarely a small correction. Surrounding materials, structure, and installation time are all affected.",
            "This is why poor installation is never truly cheaper. It simply delays when the real cost appears.",
          ]}
          caption="What begins behind the tile eventually becomes a much larger repair."
        />

        <FullWidthImageSection
          image="/images/journal/failure-4.jpg"
          alt="Broader view of failed installation condition"
          text="System failure changes the scope of the work completely. Instead of a finished installation performing as intended, the space has to be opened, corrected, and rebuilt."
        />

        <ArticleCta
          title="Most failures are system failures."
          text="We focus on waterproofing, transitions, and full assembly control so the installation performs as more than a surface finish."
        />
      </main>
    );
  }
  return notFound();
}