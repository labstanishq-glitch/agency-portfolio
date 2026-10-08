"use client";

import { principles } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function WhyUs() {
  const reduced = useReducedMotion();

  return (
    <section className="section-pad border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2
            className="max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-light-cream"
          >
            One team. One point of contact.{" "}
            <span className="text-cream">No unnecessary handoffs.</span>
          </h2>
        </Reveal>
        <ul className="mt-12 divide-y divide-border border-y border-border sm:mt-14">
          {principles.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} as="li">
              <motion.article
                className="group grid gap-3 py-7 transition-colors duration-200 hover:bg-surface/25 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10 sm:px-2 sm:py-8"
                whileHover={reduced ? undefined : { x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-display text-[0.9375rem] font-semibold text-light-cream sm:text-base">
                  {item.title}
                </h3>
                <p className="text-[0.875rem] leading-relaxed text-muted sm:text-[0.9375rem]">
                  {item.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
