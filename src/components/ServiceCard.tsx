"use client";

import { motion } from "framer-motion";
import type { Service } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="group rounded-2xl border border-border bg-transparent p-6 transition-colors hover:border-light-cream/20 hover:bg-surface/40 sm:p-8"
      whileHover={reduced ? undefined : { y: -3 }}
      transition={{ duration: 0.25 }}
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-muted">
        {service.number}
      </p>
      <h3 className="mt-4 font-display text-xl font-bold text-light-cream sm:text-2xl">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        {service.description}
      </p>
      <div
        className="mt-6 h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-accent/80"
        aria-hidden
      />
    </motion.article>
  );
}
