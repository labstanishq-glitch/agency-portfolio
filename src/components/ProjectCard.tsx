"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const reduced = useReducedMotion();
  const isLink = Boolean(project.href);

  const inner = (
    <motion.article
      className="group relative flex min-h-full flex-col justify-between gap-10 border border-border bg-surface/20 p-6 transition-[border-color,background-color,transform] duration-200 hover:border-light-cream/22 hover:bg-surface/45 sm:p-7"
      whileHover={reduced ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="eyebrow text-[0.625rem]">{project.number}</span>
        <ArrowUpRight
          className={`h-[1.125rem] w-[1.125rem] transition-[color,transform] duration-200 ${
            isLink
              ? "text-muted group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              : "text-muted/35"
          }`}
          aria-hidden
        />
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-light-cream sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-muted">
          <span>{project.category}</span>
          {project.concept ? (
            <>
              <span className="text-border" aria-hidden>·</span>
              <span className="text-cream/80">Concept project</span>
            </>
          ) : null}
        </p>
        <p className="mt-4 text-[0.875rem] leading-relaxed text-muted sm:text-[0.9375rem]">
          {project.description}
        </p>
      </div>
    </motion.article>
  );

  const focusRing =
    "block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent";

  if (isLink && project.href) {
    if (project.external) {
      return (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={focusRing}
        >
          <span className="sr-only">Open {project.name} in a new tab</span>
          {inner}
        </a>
      );
    }
    return (
      <Link href={project.href} className={focusRing}>
        {inner}
      </Link>
    );
  }

  return inner;
}
