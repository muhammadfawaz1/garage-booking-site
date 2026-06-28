"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const chips = [
  "Same-Day Fitting",
  "Walk-ins Welcome",
  "Mobile Tyre Van",
  "New Tyres Only",
  "No Levers",
  "No Scratches",
];

const stats = [
  { value: 20, suffix: "-min", label: "average fitting time" },
  { value: 100, suffix: "%", label: "leverless, rim-safe fitting" },
  { value: 7, suffix: " days", label: "walk-ins welcome, no booking needed" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = Math.round(latest) + suffix;
        }
      },
    });
    return controls.stop;
  }, [inView, motionValue, value, suffix]);

  return (
    <span ref={ref} className="text-4xl font-black text-volt">
      0{suffix}
    </span>
  );
}

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`;

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden">

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
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/88 to-graphite/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />
      <div className="tread-grid absolute inset-0 opacity-25" />

      <Container className="relative z-10 w-full py-32">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <p className="text-xs font-black uppercase tracking-[0.24em] text-volt">
            {site.name} · Norwich tyre garage
          </p>

          {/* H1 */}
          <h1 className="mt-4 text-balance text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Tyres fitted<br />
            <span className="text-volt">the modern way</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-chrome sm:text-lg">
            New tyres, same-day fitting, walk-ins and appointments — leverless
            equipment means a rim-safe finish, every time.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-volt px-7 py-3 text-sm font-black tracking-wide text-graphite transition hover:brightness-110 active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.523 5.853L.057 23.215a.75.75 0 0 0 .908.908l5.42-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.236-1.385l-.374-.217-3.876 1.046 1.052-3.826-.234-.386A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Get a quote
            </a>

            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full bg-black/30 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
          </div>

          {/* Feature chips — 3 per row */}
          <div className="mt-8 grid grid-cols-3 gap-2 max-w-lg">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-black/30 px-5 py-2.5 text-sm font-bold text-white backdrop-blur text-center"
                style={{ border: "1px solid rgba(190,255,0,0.4)" }}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Address */}
          <Link
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-chrome transition hover:text-white"
          >
            <MapPin className="h-4 w-4 text-volt" aria-hidden="true" />
            {site.addressLine}, {site.city} {site.postcode}
          </Link>

          {/* Stats with count-up */}
          <div className="mt-6 flex gap-10 border-t border-white/10 pt-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.45, ease: "easeOut" }}
              >
                <CountUp value={stat.value} suffix={stat.suffix} />
                <p className="mt-0.5 text-xs leading-snug text-chrome/60 max-w-[90px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </Container>
    </section>
  );
}