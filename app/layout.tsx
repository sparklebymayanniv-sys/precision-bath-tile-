import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteShell from "./SiteShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://precisionbathtile.com"),
  title: {
    default: "Precision Bath & Tile Group",
    template: "%s | Precision Bath & Tile Group",
  },
  description:
    "Residential tile installation for high-end bathrooms, showers, feature walls, and finish-driven spaces across Greater Boston.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Precision Bath & Tile Group",
  url: "https://precisionbathtile.com",
  logo: "https://precisionbathtile.com/icon.svg",
  image: "https://precisionbathtile.com/images/services/bathroom-1.jpg",
  description:
    "Residential tile installation for high-end bathrooms, showers, feature walls, and finish-driven spaces across Greater Boston.",

  serviceArea: {
    "@type": "AdministrativeArea",
    name: "Greater Boston",
  },

  areaServed: [
    { "@type": "City", name: "Boston", addressRegion: "MA" },
    { "@type": "City", name: "Cambridge", addressRegion: "MA" },
    { "@type": "City", name: "Newton", addressRegion: "MA" },
    { "@type": "City", name: "Wellesley", addressRegion: "MA" },
    { "@type": "City", name: "Lexington", addressRegion: "MA" },
    { "@type": "City", name: "Needham", addressRegion: "MA" },
    { "@type": "City", name: "Belmont", addressRegion: "MA" },
    { "@type": "City", name: "Winchester", addressRegion: "MA" },
    { "@type": "City", name: "Falmouth", addressRegion: "MA" },
    { "@type": "AdministrativeArea", name: "Cape Cod" },
  ],

  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Bathroom Tile Installation",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Shower Tile Installation",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Waterproofing Systems",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Heated Floor Integration",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Kitchen Backsplashes",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Architectural Feature Walls",
      },
    },
  ],

  sameAs: ["https://www.instagram.com/precision_bathtile"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
  data-scroll-behavior="smooth"
  className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0B0F12] font-[var(--font-body)] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}