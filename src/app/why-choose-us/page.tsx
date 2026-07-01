import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { AreaCoverage } from "@/components/sections/AreaCoverage";
import { ContactSection } from "@/components/sections/ContactSection";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valuePoints } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Why Choose GOGO TYRE | Modern Tyre Garage Norwich",
  description:
    "Why choose GOGO TYRE in Norwich: modern tyre equipment, leverless fitting, no levers, no scratches, same-day fitting, mobile tyre van and new tyres only.",
  path: "/why-choose-us"
});

const proofPoints = [
  "Leverless tyre fitting Norwich drivers can trust for alloy-wheel care.",
  "New tyres only, with budget, mid-range and premium options.",
  "Walk-ins welcome and appointments available for planned visits.",
  "Mobile tyre fitting van available around Norwich where suitable.",
  "Same-day fitting available when tyre stock and diary space allow.",
  "Practical help for puncture repairs, wheel balancing and TPMS warnings."
];

export default function WhyChooseUsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32">
        <Image
          src="/images/whychooseus.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/88 to-graphite/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />
        <Container className="relative z-10 py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-volt">Why choose GOGO TYRE</p>
            <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-white sm:text-6xl">
              A modern tyre garage in Norwich, built around cleaner fitting.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-chrome sm:text-xl">
              We combine experienced staff, modern equipment, convenient booking options and a no levers, no scratches approach for drivers who want tyre work done properly.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="What stands out"
            title="Performance-garage polish. Practical local service."
            text="GOGO TYRE is positioned for drivers who want quick help, clear communication and equipment that respects modern wheels."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valuePoints.map((point) => {
              const Icon = point.icon;
              return (
                <GlowCard key={point.title}>
                  <Icon className="h-7 w-7 text-volt" aria-hidden="true" />
                  <h2 className="mt-4 text-xl font-black text-white">{point.title}</h2>
                </GlowCard>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.025] py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="No levers, no scratches"
              title="The fitting process matters as much as the tyre."
              text="Modern alloys can be expensive to repair. Leverless tyre fitting helps reduce the risk of contact marks and keeps the service focused on care as well as speed."
            />
            <div className="grid gap-4">
              {proofPoints.map((point) => (
                <p key={point} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-4 leading-7 text-chrome">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-volt" aria-hidden="true" />
                  {point}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <AreaCoverage />
      <QuoteCTA />
      <ContactSection />
    </>
  );
}