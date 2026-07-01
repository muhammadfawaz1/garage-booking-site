import { site } from "@/data/site";
import type { Service } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";

type ServiceHeroProps = {
  service: Service;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi GOGO TYRE, I need help with ${service.title}.`)}`;

  return (
    <section className="relative overflow-hidden pt-32">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/puncture-video.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/88 to-graphite/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />
      <div className="tread-grid absolute inset-0 opacity-20" />

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-volt">{service.eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-white sm:text-6xl">
            {service.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-chrome sm:text-xl">{service.heroText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={whatsappUrl} external icon="whatsapp" iconPosition="left" variant="quote">
              WhatsApp Quote
            </CTAButton>
            <CTAButton href={site.phoneHref} variant="quote" icon="phone" iconPosition="left">
              Call Now
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}