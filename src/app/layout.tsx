import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { FloatingActions } from "@/components/FloatingActions";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { localBusinessSchema } from "@/lib/seo";
import "./globals.css";

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
    <html lang="en-GB">
      <body>
        <JsonLd data={localBusinessSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
        <FloatingActions />
      </body>
    </html>
  );
}