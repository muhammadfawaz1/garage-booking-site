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

export function QuoteCTA() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`;

  return (
    <section id="quote" className="py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div className="rounded-lg border border-white/10 bg-radial-grid p-7 shadow-glow">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-volt">Get a quote</p>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
              <span className="text-volt">1</span> WhatsApp first.{" "}
              <span className="text-volt">2</span> Call second.{" "}
              <span className="text-volt">3</span> Form third.
            </h2>
            <p className="mt-5 text-lg leading-8 text-chrome">
              Send your tyre size, vehicle registration or a photo. We will help with new tyres, same-day fitting, puncture repairs, wheel balancing, TPMS support and mobile fitting availability.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-volt px-6 text-sm font-black text-graphite shadow-volt transition hover:bg-white">
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Quote
              </a>
              <a href={site.phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/10 px-6 text-sm font-black text-white shadow-glow transition hover:bg-white/20">
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