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
    <span ref={ref} className="text-3xl font-black text-white/90 sm:text-4xl">
      0{suffix}
    </span>
  );
}

// Word-by-word reveal wrapper for headline lines
function RevealWords({
  text,
  className,
  baseDelay = 0,
  stagger = 0.09,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.28em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              delay: baseDelay + i * stagger,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
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
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.24em" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 text-xs font-black uppercase text-white/60"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-volt" />
            </span>
            {site.name} · Norwich tyre garage
          </motion.p>

          {/* H1 — word-by-word reveal, aggressive industrial styling */}
          <h1 className="mt-4 text-balance font-industrial uppercase text-5xl font-normal leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <RevealWords text="Tyres fitted" baseDelay={0.1} />
            <br />
            <motion.span
              className="inline-block mr-[0.28em]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white/90 drop-shadow-[0_0_28px_rgba(255,255,255,0.35)]">
                the
              </span>
            </motion.span>
            <motion.span
              className="inline-block mr-[0.28em]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.64, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className="text-volt/60"
                style={{ WebkitTextStroke: "0.4px rgba(255,255,255,0.4)" }}
                initial={{ opacity: 1, filter: "brightness(1)" }}
                animate={{
                  opacity: [0.85, 1, 0.85],
                  filter: [
                    "brightness(1.1) drop-shadow(0 0 18px rgba(217,255,91,0.35)) drop-shadow(0 0 10px rgba(255,255,255,0.25))",
                    "brightness(1.3) drop-shadow(0 0 28px rgba(217,255,91,0.5)) drop-shadow(0 0 16px rgba(255,255,255,0.35))",
                    "brightness(1.1) drop-shadow(0 0 18px rgba(217,255,91,0.35)) drop-shadow(0 0 10px rgba(255,255,255,0.25))",
                  ],
                }}
                transition={{
                  delay: 1.3,
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                modern
              </motion.span>
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.73, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white/90 drop-shadow-[0_0_28px_rgba(255,255,255,0.35)]">
                way
              </span>
            </motion.span>
          </h1>

          {/* Subheadline — fade/slide in after headline, with an animated accent underline */}
          <div className="relative mt-6 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6, ease: "easeOut" }}
              className="text-base leading-relaxed text-chrome sm:text-lg"
            >
              New tyres, same-day fitting, walk-ins and appointments — leverless
              equipment means a rim-safe finish, every time.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <CTAButton href={whatsappUrl} external icon="whatsapp" iconPosition="left" variant="quote">
              Get a quote
            </CTAButton>
            <CTAButton href={site.phoneHref} icon="phone" iconPosition="left" variant="quote">
              {site.phone}
            </CTAButton>
          </motion.div>

          {/* Feature chips — 2 per row on mobile, 3 per row from sm up */}
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 max-w-lg">
            {chips.map((chip, i) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                className="rounded-full bg-black/30 px-5 py-2.5 text-sm font-bold text-white backdrop-blur text-center"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                {chip}
              </motion.span>
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
          <div className="mt-6 flex gap-6 border-t border-white/10 pt-6 sm:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.15, duration: 0.45, ease: "easeOut" }}
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