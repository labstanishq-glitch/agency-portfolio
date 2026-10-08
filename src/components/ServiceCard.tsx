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
      className="group flex h-full flex-col border border-border/80 bg-transparent p-6 transition-[border-color,background-color,transform] duration-200 hover:border-light-cream/20 hover:bg-surface/35 sm:p-7"
      whileHover={reduced ? undefined : { y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <p className="eyebrow text-[0.625rem]">{service.number}</p>
      <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-light-cream sm:text-xl">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-muted sm:text-[0.9375rem]">
        {service.description}
      </p>
      <div
        className="mt-6 h-px w-10 bg-border transition-[width,background-color] duration-300 group-hover:w-14 group-hover:bg-accent/50"
        aria-hidden
      />
    </motion.article>
  );
}
