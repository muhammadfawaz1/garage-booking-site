import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { overviewServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Core services"
          title="Everything you expect from a modern tyre garage."
          text="From new tyres and puncture repairs to TPMS support and mobile fitting, GOGO TYRE is set up for fast, clean, professional tyre work in Norwich."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {overviewServices.map((service) => {
            const Icon = service.icon;
            const href = `/${service.slug}`;
            return (
              <Link key={service.navLabel} href={href} className="group">
                <GlowCard className="h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-lg border border-electric/30 bg-electric/10 text-volt">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 min-h-[5.25rem] leading-7 text-chrome">{service.heroText}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-volt">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </GlowCard>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
