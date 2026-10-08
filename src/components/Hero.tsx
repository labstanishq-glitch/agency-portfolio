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
      transition: { staggerChildren: reduced ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute right-[-5%] top-[18%] hidden h-[min(42vw,380px)] w-[min(42vw,380px)] rounded-full border border-border/80 lg:block" />
        <div className="absolute right-[10%] top-[32%] hidden h-px w-[min(28vw,240px)] bg-border lg:block" />
        <div className="absolute right-[14%] top-[26%] hidden h-[140px] w-px bg-border/70 lg:block" />
        <div className="absolute right-[8%] top-[22%] hidden h-16 w-16 border border-border/60 lg:block" />
        <div className="absolute left-[4%] bottom-[12%] h-20 w-20 border-l border-t border-border/50" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.45fr)] lg:items-center lg:gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p variants={item} className="eyebrow mb-5 sm:mb-6">
              Independent digital studio
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-light-cream"
            >
              We build digital systems that move businesses{" "}
              <span className="text-accent">forward.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="reading-width mt-6 text-[0.9375rem] leading-[1.65] text-muted sm:mt-7 sm:text-base"
            >
              Websites, apps, AI automation and digital solutions built around
              how your business actually works.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-6"
            >
              <Button href="#book">Book a Call</Button>
              <Link
                href="#work"
                className="inline-flex items-center text-[0.8125rem] font-medium text-muted transition-colors duration-200 hover:text-light-cream"
              >
                View selected work
                <span className="ml-1.5 text-light-cream/70" aria-hidden>
                  ↓
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <div
            className="relative mt-14 hidden min-h-[280px] lg:block"
            aria-hidden
          >
            <div className="absolute inset-y-8 right-0 w-full max-w-[320px] border border-border/60" />
            <div className="absolute right-8 top-0 h-24 w-24 border border-accent/40" />
            <div className="absolute bottom-4 right-16 h-px w-32 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
