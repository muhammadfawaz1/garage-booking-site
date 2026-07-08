import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/sections/ContactSection";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { createMetadata, localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact GOGO TYRE Norwich | Tyre Garage on Page Road",
  description:
    "Contact GOGO TYRE in Norwich for new tyres, tyre fitting, puncture repairs, wheel balancing, TPMS support and mobile tyre fitting. Visit 14 Page Road, NR3 2BX.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <section className="relative overflow-hidden pt-32">
        <Image
          src="/images/contact.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/88 to-graphite/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />
        <Container className="relative z-10 py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-chrome">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              GOGO TYRE · CONTACT
            </p>
            <h1 className="mt-5 text-balance font-industrial uppercase text-4xl font-normal leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tyre garage in
              <span className="block text-volt">Norwich</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-chrome sm:text-lg">
              Visit {site.addressLine}, {site.city} {site.postcode}, call {site.phone}, or send a WhatsApp quote request with your tyre size or vehicle registration.
            </p>
          </div>
        </Container>
      </section>
      <ContactSection />
      <QuoteCTA />
    </>
  );
}