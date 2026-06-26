import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/35 pb-24 pt-14 sm:pb-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr_.85fr]">
          <div>
            <p className="text-2xl font-black text-white">{site.name}</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-chrome">
              Modern tyre fitting in Norwich with new tyres, same-day fitting, puncture repairs, wheel balancing, TPMS support and mobile tyre fitting.
            </p>
            <p className="mt-4 text-sm font-bold text-volt">{site.secondarySlogan}</p>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Pages</h2>
            <div className="mt-4 grid gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-chrome transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Contact</h2>
            <div className="mt-4 grid gap-3 text-sm text-chrome">
              <a href={site.phoneHref} className="flex gap-3 hover:text-white">
                <Phone className="h-4 w-4 text-volt" aria-hidden="true" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-volt" aria-hidden="true" />
                {site.email}
              </a>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-white">
                <MapPin className="h-4 w-4 text-volt" aria-hidden="true" />
                {site.addressLine}, {site.city} {site.postcode}
              </a>
              <span>{site.hours.weekdays}</span>
              <span>{site.hours.sunday}</span>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-chrome">
          <p>© {new Date().getFullYear()} {site.name}. New tyres only. Mock contact details are ready to replace with live details.</p>
        </div>
      </Container>
    </footer>
  );
}
