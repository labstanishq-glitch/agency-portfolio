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
      className="group relative flex flex-col justify-between gap-8 rounded-2xl border border-border bg-surface/30 p-6 sm:p-8 transition-colors hover:border-light-cream/25 hover:bg-surface/60"
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-semibold tracking-[0.2em] text-muted">
          {project.number}
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-muted transition-colors group-hover:text-accent"
          aria-hidden
        />
      </div>
      <div>
        <h3 className="font-display text-2xl font-bold tracking-tight text-light-cream sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-accent">{project.category}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>
      </div>
    </motion.article>
  );

  if (isLink && project.href) {
    if (project.external) {
      return (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {inner}
        </a>
      );
    }
    return (
      <Link
        href={project.href}
        className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
