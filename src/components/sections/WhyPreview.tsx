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
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valuePoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
                <Icon className="h-6 w-6 text-volt" aria-hidden="true" />
                <h3 className="mt-4 font-black text-white">{point.title}</h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
