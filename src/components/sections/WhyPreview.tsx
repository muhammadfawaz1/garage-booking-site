import { valuePoints } from "@/data/services";
import { Container } from "@/components/ui/Container";
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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valuePoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="group rounded-lg border border-white/10 bg-white/[0.055] p-5 transition duration-200 hover:-translate-y-1 hover:border-electric/60 hover:bg-white/[0.075] hover:shadow-[0_0_0_1px_rgba(56,138,221,0.35),0_0_24px_rgba(56,138,221,0.18)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors duration-200 group-hover:border-volt/40 group-hover:bg-volt/10 group-hover:text-volt">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-black text-white">{point.title}</h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}