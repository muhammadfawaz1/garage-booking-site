import type { Metadata } from "next";
import { site } from "@/data/site";
import type { Service } from "@/data/services";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: MetadataInput): Metadata {
  const url = new URL(path, site.domain).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: new URL(site.heroImage, site.domain).toString(),
          width: 1200,
          height: 675,
          alt: "Modern tyre fitting bay at GOGO TYRE in Norwich"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TireShop",
    name: site.name,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    image: new URL(site.heroImage, site.domain).toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: site.city,
      postalCode: site.postcode,
      addressCountry: "GB"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    areaServed: "Norwich and nearby areas around Norwich",
    priceRange: "$$"
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "TireShop",
      name: site.name,
      url: site.domain,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.addressLine,
        addressLocality: site.city,
        postalCode: site.postcode,
        addressCountry: "GB"
      }
    },
    areaServed: {
      "@type": "City",
      name: "Norwich"
    },
    url: new URL(`/${service.slug}`, site.domain).toString()
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
