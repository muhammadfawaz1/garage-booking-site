import { areas } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AreaCoverage() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Areas covered"
            title="Tyre fitting for Norwich and nearby areas."
            text="Visit us on Page Road or ask about mobile tyre fitting around Norwich, including nearby areas where our van can safely support you."
          />
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-chrome">
                {area}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
