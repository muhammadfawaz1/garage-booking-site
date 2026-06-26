import { Home, MapPinned, Truck } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { GlowCard } from "@/components/ui/GlowCard";

const items = [
  { title: "At home", icon: Home },
  { title: "At work", icon: Truck },
  { title: "Local support", icon: MapPinned }
];

export function MobileHighlight() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need mobile tyre fitting in Norwich.")}`;

  return (
    <section className="py-20">
      <Container>
        <div className="rounded-lg border border-white/10 bg-radial-grid p-6 shadow-glow sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-volt">Mobile tyre van</p>
              <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
                Tyre fitting that meets you where the car is.
              </h2>
              <p className="mt-5 text-lg leading-8 text-chrome">
                Ask about mobile tyre fitting at home, at work or a suitable local location around Norwich. Send your tyre size or vehicle registration and preferred time.
              </p>
              <div className="mt-7">
                <CTAButton href={whatsappUrl} external icon="send">Request Mobile Fitting</CTAButton>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <GlowCard key={item.title} className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-volt/10 text-volt">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-black text-white">{item.title}</h3>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
