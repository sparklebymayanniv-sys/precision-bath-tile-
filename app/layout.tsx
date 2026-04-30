import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteShell from "./SiteShell";

const googleAdsId = "AW-18031720933";

export const metadata: Metadata = {
  title: {
    default: "Precision Bath & Tile Group",
    template: "%s | Precision Bath & Tile Group",
  },
  description:
    "Residential tile installation for high-end bathrooms, showers, and finish-driven spaces across Greater Boston.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F12] text-white">
        {/* Google Ads base tag ONLY */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />

        <Script id="google-ads-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
          `}
        </Script>

        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}