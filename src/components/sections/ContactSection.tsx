import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`;

  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Visit or message"
              title="GOGO TYRE on Page Road, Norwich."
              text="Walk-ins are welcome, appointments are available, and mobile tyre fitting can be arranged around Norwich where suitable."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={whatsappUrl} external icon="send">WhatsApp Quote</CTAButton>
              <CTAButton href={site.mapsUrl} external variant="secondary">Get Directions</CTAButton>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-glow">
            <div className="grid gap-5">
              <ContactRow icon={MapPin} title="Address" text={`${site.addressLine}, ${site.city} ${site.postcode}`} href={site.mapsUrl} />
              <ContactRow icon={Phone} title="Phone" text={site.phone} href={site.phoneHref} />
              <ContactRow icon={Mail} title="Email" text={site.email} href={`mailto:${site.email}`} />
              <ContactRow icon={Clock} title="Opening hours" text={`${site.hours.weekdays}. ${site.hours.sunday}.`} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type ContactRowProps = {
  icon: typeof MapPin;
  title: string;
  text: string;
  href?: string;
};

function ContactRow({ icon: Icon, title, text, href }: ContactRowProps) {
  const content = (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-electric/25 bg-electric/10 text-volt">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-sm font-black uppercase tracking-[0.16em] text-white">{title}</span>
        <span className="mt-1 block leading-7 text-chrome">{text}</span>
      </span>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="transition hover:opacity-85">
      {content}
    </a>
  );
}
