import Image from "next/image";
import { tyreBrands } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const brandLogos: Record<string, string> = {
  Pirelli: "pirelli.webp",
  Bridgestone: "bridgestone.webp",
  Continental: "continental.webp",
  Goodyear: "goodyear.webp",
  Dunlop: "dunlop.webp",
  Michelin: "michelin.webp",
  Uniroyal: "uniroyal.webp",
  Firestone: "firestone.webp",
  Avon: "avon.webp",
  Falken: "falken.webp",
  Toyo: "toyotires.webp",
  Kumho: "kumho.webp",
  Nexen: "nexen.webp",
  Yokohama: "yokohama.webp",
  Hankook: "hankook.webp",
};

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
          titleClassName="font-industrial uppercase font-normal leading-[0.95]"
        />
      </Container>

      {/* Track / road strip */}
      <div className="brand-marquee relative mt-24 overflow-hidden border-y border-white/10 bg-[#0a0a0a] py-10">
        {/* constant dashed white center line, like a road */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #ffffff 0, #ffffff 30px, transparent 30px, transparent 60px)",
          }}
        />

        {/* fade edges so logos ease in/out like a real belt */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        <div className="relative z-20 flex min-w-full animate-[marquee_24s_linear_infinite] items-center gap-10 px-2">
          {brands.map((brand, index) => {
            const logo = brandLogos[brand];
            return (
              <div
                key={`${brand}-${index}`}
                className="group relative flex h-[80px] w-[160px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(255,255,255,0.15)]"
              >
                {logo ? (
                  <div className="relative flex h-full w-full items-center justify-center p-5">
                    <Image
                      src={`/images/logosForBrands/${logo}`}
                      alt={`${brand} logo`}
                      fill
                      sizes="120px"
                      className="object-contain p-3"
                    />
                  </div>
                ) : (
                  <span className="text-sm font-black uppercase tracking-[0.14em] text-black">
                    {brand}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}