import { Home, MapPinned, Truck } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";

const items = [
  { title: "At home", icon: Home },
  { title: "At work", icon: Truck },
  { title: "Local support", icon: MapPinned }
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.48 1.34 5L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.08c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.12.1-1.8-.11-.42-.13-.95-.3-1.64-.6-2.88-1.24-4.76-4.16-4.9-4.35-.14-.19-1.17-1.55-1.17-2.96 0-1.4.73-2.09 1-2.38.24-.28.53-.35.71-.35.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.57.81 1.98.88 2.12.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.44.2.51.32.07.11.07.65-.17 1.33Z" />
    </svg>
  );
}

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
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-volt/50 bg-graphite/60 px-6 text-sm font-black text-volt transition duration-200 hover:bg-volt hover:text-graphite hover:shadow-[0_0_28px_rgba(180,255,0,0.55)] hover:scale-[1.03]">
                  <WhatsAppIcon className="h-5 w-5" />
                  Request Mobile Fitting
                </a>
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
