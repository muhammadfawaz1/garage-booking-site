import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { FloatingActions } from "@/components/FloatingActions";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { localBusinessSchema } from "@/lib/seo";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "GOGO TYRE | Modern Tyre Fitting in Norwich",
    template: "%s"
  },
  description:
    "GOGO TYRE is a modern tyre garage in Norwich for new tyres, same-day fitting, mobile tyre fitting, puncture repairs, wheel balancing and TPMS support.",
  applicationName: site.name,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${unbounded.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        {/* Explicit stacking layer above the ambient tire background (body::before, z-index: 0) */}
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <StickyMobileCTA />
          <FloatingActions />
        </div>
      </body>
    </html>
  );
}