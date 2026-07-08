import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { overviewServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesGrid() {
  return (
    <section className="relative isolate overflow-hidden py-20">

      {/* Section base — #121214 instead of pure black to break hero stacking */}
      <div className="absolute inset-0 bg-[#121214]" />

      {/* Background image — subtle texture, not a photo */}
      <img
        src="/images/services-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.06]"
      />

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-graphite/[0.88]" />

      {/* Subtle right-edge fade */}
      <div className="absolute inset-0 bg-gradient-to-l from-graphite/50 via-transparent to-transparent" />

      {/* Top/bottom fades to blend with adjacent sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/70 via-transparent to-graphite/70" />

      {/* Content */}
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Core services"
          title="Everything you expect from a modern tyre garage."
          text="From new tyres and puncture repairs to TPMS support and mobile fitting, GOGO TYRE is set up for fast, clean, professional tyre work in Norwich."
          titleClassName="font-industrial uppercase font-normal leading-[0.95]"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {overviewServices.map((service) => {
            const Icon = service.icon;
            const href = `/${service.slug}`;
            return (
              <Link
                key={service.navLabel}
                href={href}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt rounded-xl"
              >
                <GlowCard className="h-full transition-all duration-200 group-hover:border-volt/30 group-hover:-translate-y-0.5">

                  {/* Icon box — subtle neutral by default, green only appears on hover */}
                  <span className="grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors duration-200 group-hover:border-volt/40 group-hover:bg-volt/10 group-hover:text-volt">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 min-h-[5.25rem] leading-7 text-chrome">{service.heroText}</p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/80">
                    Explore service
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
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