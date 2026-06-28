"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { site } from "@/data/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";

const chips = ["Same-Day Fitting", "Walk-ins Welcome", "Mobile Tyre Van", "New Tyres Only", "No Levers, No Scratches"];

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`;

  return (
    <section className="relative isolate min-h-[720px] overflow-hidden pt-28 sm:min-h-[760px] lg:min-h-[820px]">

      {/* ── Background video replaces hero image ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays ── */}
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
          {/* Logo — plain img avoids Next.js optimizer error; mix-blend-mode removes white bg */}
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={whatsappUrl} external icon="send">WhatsApp Quote</CTAButton>
            <CTAButton href={site.phoneHref} variant="secondary" icon="phone">Call Now</CTAButton>
            <CTAButton href={site.mapsUrl} external variant="ghost">Get Directions</CTAButton>
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