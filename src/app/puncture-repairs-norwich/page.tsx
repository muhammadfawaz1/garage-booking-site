import type { Metadata } from "next";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicePages } from "@/data/services";
import { createMetadata, faqSchema, serviceSchema } from "@/lib/seo";

const service = servicePages["puncture-repairs-norwich"];

export const metadata: Metadata = createMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`
});

export default function PunctureRepairsNorwichPage() {
  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <ServiceHero service={service} heroVideo="/puncture-video.mp4" />
      <ServiceContent service={service} />
    </>
  );
}