import type { Metadata } from "next";
import { AreaCoverage } from "@/components/sections/AreaCoverage";
import { BrandSlider } from "@/components/sections/BrandSlider";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MobileHighlight } from "@/components/sections/MobileHighlight";
import { ModernEquipment } from "@/components/sections/ModernEquipment";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyPreview } from "@/components/sections/WhyPreview";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "GOGO TYRE | Same-Day Tyre Fitting in Norwich",
  description:
    "Modern tyre fitting in Norwich from GOGO TYRE. New tyres, same-day fitting, mobile tyre fitting, puncture repairs, wheel balancing, TPMS and leverless fitting.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <HeroSection />
      <ServicesGrid />
      <ModernEquipment />
      <BrandSlider />
      <MobileHighlight />
      <WhyPreview />
      <QuoteCTA />
      <AreaCoverage />
      <ContactSection />
    </>
  );
}