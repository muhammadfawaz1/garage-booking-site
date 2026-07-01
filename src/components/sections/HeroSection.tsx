"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";

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
            <CTAButton href={whatsappUrl} external icon="whatsapp" iconPosition="left" variant="quote">
              Get a quote
            </CTAButton>
            <CTAButton href={site.phoneHref} icon="phone" iconPosition="left" variant="quote">
              {site.phone}
            </CTAButton>
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