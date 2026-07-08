import type { Metadata } from "next";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicePages } from "@/data/services";
import { createMetadata, faqSchema, serviceSchema } from "@/lib/seo";

const service = servicePages["tyres-norwich"];

export const metadata: Metadata = createMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`
});

export default function TyresNorwichPage() {
  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <ServiceHero
        title={service.title}
        eyebrow={service.eyebrow}
        heroTitle={service.heroTitle}
        heroText={service.heroText}
        heroImage="/images/tyres.png"
      />
      <ServiceContent service={service} />
    </>
  );
}