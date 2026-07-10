"use client";

import { motion } from "framer-motion";

type HeroEyebrowProps = {
  children: React.ReactNode;
};

export function HeroEyebrow({ children }: HeroEyebrowProps) {
  return (
    <motion.p
      initial={{ opacity: 0, letterSpacing: "0.05em" }}
      animate={{ opacity: 1, letterSpacing: "0.24em" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-chrome"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-volt" />
      {children}
    </motion.p>
  );
}