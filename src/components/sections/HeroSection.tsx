



"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const chips = ["Same-Day Fitting", "Walk-ins Welcome", "Mobile Tyre Van", "New Tyres Only", "No Levers, No Scratches"];

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`;

  return (
    <section className="relative isolate min-h-[720px] overflow-hidden pt-28 sm:min-h-[760px] lg:min-h-[820px]">

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/82 to-graphite/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />
      <div className="tread-grid absolute inset-0 opacity-25" />

      <Container className="relative z-10 flex min-h-[640px] items-center pb-24 pt-16 lg:min-h-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Logo */}
          <img
            src={site.logo}
            alt="GOGO TYRE logo"
            style={{
              width: "auto",
              height: "80px",
              objectFit: "contain",
              mixBlendMode: "screen",
              marginBottom: "1.75rem",
            }}
          />

          <p className="text-sm font-black uppercase tracking-[0.24em] text-volt">{site.name} · Norwich tyre garage</p>
          <h1 className="mt-5 text-balance text-5xl font-black leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Tyres Fitted the Modern Way
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-chrome sm:text-xl">
            New tyres, same-day fitting, walk-ins, appointments and mobile tyre fitting around Norwich, with leverless equipment for a rim-safe finish.
          </p>

          {/* Blended icon bar */}
          <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-2 backdrop-blur-md">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-[#25D366]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.523 5.853L.057 23.215a.75.75 0 0 0 .908.908l5.42-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.236-1.385l-.374-.217-3.876 1.046 1.052-3.826-.234-.386A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-graphite px-2.5 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                WhatsApp
              </span>
            </a>

            <span className="h-5 w-px bg-white/15" aria-hidden="true" />

            {/* Call */}
            <a
              href={site.phoneHref}
              aria-label="Call us"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-volt"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-graphite px-2.5 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                Call us
              </span>
            </a>

            <span className="h-5 w-px bg-white/15" aria-hidden="true" />

            {/* Location */}
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Get directions"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-blue-400"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-graphite px-2.5 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                Directions
              </span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/12 bg-black/30 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                {chip}
              </span>
            ))}
          </div>

          <Link
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-chrome transition hover:text-white"
          >
            <MapPin className="h-4 w-4 text-volt" aria-hidden="true" />
            {site.addressLine}, {site.city} {site.postcode}
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}