"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute right-[-10%] top-[15%] h-[420px] w-[420px] rounded-full border border-border opacity-60" />
        <div className="absolute right-[8%] top-[28%] h-px w-[min(40vw,320px)] bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        <div className="absolute right-[12%] top-[32%] h-[180px] w-[1px] bg-border" />
        <div className="absolute right-[18%] top-[22%] h-[1px] w-[120px] bg-border" />
        <motion.div
          className="absolute right-[6%] top-[18%] h-24 w-24 border border-border/80"
          animate={reduced ? undefined : { rotate: [0, 2, 0], y: [0, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-[5%] bottom-[10%] h-32 w-32 border-l border-t border-border opacity-50" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={item}
            className="mb-6 text-xs font-semibold tracking-[0.35em] text-muted"
          >
            INDEPENDENT DIGITAL STUDIO
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.25rem,6vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-light-cream"
          >
            WE BUILD{" "}
            <span className="text-cream">DIGITAL SYSTEMS</span>
            <br />
            THAT MOVE BUSINESSES
            <br />
            <span className="text-accent">FORWARD.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Websites, apps, AI automation and digital solutions built around
            how your business actually works.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="#book">Book a Call →</Button>
            <Link
              href="#work"
              className="inline-flex items-center justify-center text-sm font-semibold text-light-cream transition-colors hover:text-accent"
            >
              View Our Work ↓
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
