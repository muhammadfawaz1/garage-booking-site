"use client";

import { motion } from "framer-motion";

type HeroTitleProps = {
  /** Use {word or phrase} to mark the segment that gets the faded volt-green glow highlight */
  title: string;
};

export function HeroTitle({ title }: HeroTitleProps) {
  const match = title.match(/^(.*?)\{(.+?)\}(.*)$/);

  if (!match) {
    return (
      <motion.span
        className="inline-block"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.span>
    );
  }

  const [, before, highlight, after] = match;

  return (
    <>
      {before && (
        <motion.span
          className="inline-block mr-[0.28em] text-white/90 drop-shadow-[0_0_28px_rgba(255,255,255,0.35)]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {before.trim()}
        </motion.span>
      )}

      <motion.span
        className="inline-block mr-[0.28em]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.22, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
          transition={{ delay: 0.9, duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          {highlight.trim()}
        </motion.span>
      </motion.span>

      {after && (
        <motion.span
          className="inline-block text-white/90 drop-shadow-[0_0_28px_rgba(255,255,255,0.35)]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.32, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {after.trim()}
        </motion.span>
      )}
    </>
  );
}