import { tyreBrands } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandSlider() {
  const brands = [...tyreBrands, ...tyreBrands];

  return (
    <section className="overflow-hidden py-20">
      <Container>
        <SectionHeading
          eyebrow="Brands and sizes"
          title="Budget, mid-range and premium tyres available."
          text="We can help source tyres across trusted names and practical price points for cars, 4x4s, vans, sport vehicles and caravans."
          align="center"
        />
      </Container>
      <div className="brand-marquee mt-10 flex overflow-hidden border-y border-white/10 bg-white/[0.035] py-5">
        <div className="flex min-w-full animate-[marquee_35s_linear_infinite] gap-4 px-2">
          {brands.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-chrome"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
