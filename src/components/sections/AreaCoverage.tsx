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
          <div className="grid grid-cols-4 gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white/[0.06] px-4 py-2 text-center text-sm font-bold text-chrome backdrop-blur transition duration-200 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(180,255,0,0.4)]"
                style={{ border: "1.5px solid rgba(180,255,0,0.6)" }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}