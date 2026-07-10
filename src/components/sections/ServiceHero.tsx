"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { HeroTitle } from "@/components/ui/HeroTitle";

type ServiceHeroProps = {
  title: string;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  heroVideo?: string;
  heroImage?: string;
};

export function ServiceHero({ title, eyebrow, heroTitle, heroText, heroVideo, heroImage }: ServiceHeroProps) {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi GOGO TYRE, I need help with ${title}.`)}`;

  return (
    <section className="relative overflow-hidden pt-32">
      {heroVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}
      {!heroVideo && heroImage && (
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      )}
      {!heroVideo && !heroImage && <div className="absolute inset-0 bg-radial-grid" />}

      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/88 to-graphite/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />
      <div className="tread-grid absolute inset-0 opacity-20" />

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.24em" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xs font-black uppercase tracking-[0.24em] text-volt"
          >
            {eyebrow}
          </motion.p>

          <h1 className="mt-5 text-balance font-industrial uppercase text-4xl font-normal leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <HeroTitle title={heroTitle} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-base leading-relaxed text-chrome sm:text-lg"
          >
            {heroText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <CTAButton href={whatsappUrl} external icon="whatsapp" iconPosition="left" variant="quote">
              WhatsApp Quote
            </CTAButton>
            <CTAButton href={site.phoneHref} variant="quote" icon="phone" iconPosition="left">
              Call Now
            </CTAButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}