import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { QuoteForm } from "@/components/sections/QuoteForm";

export function QuoteCTA() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`;

  return (
    <section id="quote" className="py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div className="rounded-lg border border-white/10 bg-radial-grid p-7 shadow-glow">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-volt">Get a quote</p>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
              WhatsApp first. Call second. Form third.
            </h2>
            <p className="mt-5 text-lg leading-8 text-chrome">
              Send your tyre size, vehicle registration or a photo. We will help with new tyres, same-day fitting, puncture repairs, wheel balancing, TPMS support and mobile fitting availability.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={whatsappUrl} external icon="send">WhatsApp Quote</CTAButton>
              <CTAButton href={site.phoneHref} variant="secondary" icon="phone">Call Now</CTAButton>
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
