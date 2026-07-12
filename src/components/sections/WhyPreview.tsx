import { valuePoints } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyPreview() {
  return (
    <section className="bg-white/[0.025] py-20">
      <Container>
        <SectionHeading
          eyebrow="Why drivers choose GOGO TYRE"
          title="Fast when you need it. Careful where it matters."
          text="The difference is a practical mix of good equipment, clear advice, convenient fitting options and a wheel-conscious fitting process."
          align="center"
          titleClassName="font-industrial uppercase font-normal leading-[0.95]"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valuePoints.map((point) => {
            const Icon = point.icon;
            return (
              <GlowCard key={point.title} className="group">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors duration-200 group-hover:border-volt/40 group-hover:bg-volt/10 group-hover:text-volt">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-black text-white">{point.title}</h3>
              </GlowCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}