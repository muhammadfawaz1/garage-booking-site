import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/sections/FAQ";
import { QuoteCTA } from "@/components/sections/QuoteCTA";

type ServiceContentProps = {
  service: Service;
};

export function ServiceContent({ service }: ServiceContentProps) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <>
      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Benefits"
                title={`Why book ${service.title.toLowerCase()} with GOGO TYRE?`}
                text={`Local Norwich support for ${service.keywords.slice(0, 3).join(", ")} and related tyre services, written around practical driver needs rather than jargon.`}
              />
              <div className="mt-8 grid gap-4">
                {service.benefits.map((benefit) => (
                  <p key={benefit} className="flex gap-3 leading-7 text-chrome">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-volt" aria-hidden="true" />
                    {benefit}
                  </p>
                ))}
              </div>
            </div>
            <GlowCard>
              <h2 className="text-2xl font-black text-white">How it works</h2>
              <div className="mt-7 grid gap-3">
                {service.process.map((step, index) => (
                  <div
                    key={step}
                    className="group flex min-h-[84px] items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition duration-200 hover:border-volt/40 hover:bg-volt/[0.06]"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-volt/40 bg-graphite text-sm font-black text-volt transition duration-200 group-hover:bg-volt group-hover:text-graphite group-hover:shadow-[0_0_16px_-2px_rgba(190,255,60,0.8)]">
                      {index + 1}
                    </span>
                    <p className="leading-7 text-chrome transition group-hover:text-white">{step}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.025] py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Why us"
              title="Modern tyre service without the old hassle."
              text="Walk-ins, appointments and mobile fitting options make it easier to solve tyre problems quickly around Norwich."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {service.why.map((item) => (
                <GlowCard key={item}>
                  <CheckCircle2 className="h-6 w-6 text-volt" aria-hidden="true" />
                  <p className="mt-4 font-bold leading-7 text-white">{item}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Related services" title="Useful next steps" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="group rounded-lg border border-white/10 bg-white/[0.055] p-5 transition hover:border-electric/50">
                <h3 className="font-black text-white">{item.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-volt">
                  View service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <FAQ items={service.faqs} />
      </Container>
      <QuoteCTA />
    </>
  );
}