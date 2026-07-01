import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/sections/QuoteForm";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.48 1.34 5L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.08c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.12.1-1.8-.11-.42-.13-.95-.3-1.64-.6-2.88-1.24-4.76-4.16-4.9-4.35-.14-.19-1.17-1.55-1.17-2.96 0-1.4.73-2.09 1-2.38.24-.28.53-.35.71-.35.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.57.81 1.98.88 2.12.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.44.2.51.32.07.11.07.65-.17 1.33Z" />
    </svg>
  );
}

const steps = [
  { rank: "1", suffix: "st", label: "WhatsApp", emphasis: true },
  { rank: "2", suffix: "nd", label: "Call", emphasis: false },
  { rank: "3", suffix: "rd", label: "Form", emphasis: false }
];

export function QuoteCTA() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`;

  return (
    <section id="quote" className="py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div className="rounded-lg border border-white/10 bg-radial-grid p-7 shadow-glow">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-volt">Get a quote</p>

            <div className="mt-5 flex flex-col gap-3">
              {steps.map((step) => (
                <div key={step.rank} className="flex items-baseline gap-3">
                  <span
                    className={
                      step.emphasis
                        ? "font-black leading-none text-volt text-6xl sm:text-7xl"
                        : "font-black leading-none text-chrome/60 text-2xl sm:text-3xl"
                    }
                  >
                    {step.rank}
                    <sup
                      className={
                        step.emphasis
                          ? "align-super text-lg sm:text-xl text-volt/80"
                          : "align-super text-xs text-chrome/50"
                      }
                    >
                      {step.suffix}
                    </sup>
                  </span>
                  <span
                    className={
                      step.emphasis
                        ? "font-black text-white text-3xl sm:text-4xl"
                        : "font-bold text-chrome/80 text-base sm:text-lg"
                    }
                  >
                    {step.label}
                    {step.emphasis ? " first." : step.rank === "2" ? " second." : " third."}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-lg leading-8 text-chrome">
              Send your tyre size, vehicle registration or a photo. We will help with new tyres, same-day fitting, puncture repairs, wheel balancing, TPMS support and mobile fitting availability.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-volt px-6 text-sm font-black text-graphite shadow-volt transition hover:bg-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Quote
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-volt/50 bg-graphite px-6 text-sm font-black text-volt shadow-[0_0_25px_-4px_rgba(190,255,60,0.45)] transition hover:border-volt hover:bg-volt hover:text-graphite hover:shadow-volt"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-chrome">
              <p className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 text-volt" aria-hidden="true" />
                WhatsApp: {site.whatsappDisplay}
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-volt" aria-hidden="true" />
                Phone: {site.phone}
              </p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </Container>
    </section>
  );
}