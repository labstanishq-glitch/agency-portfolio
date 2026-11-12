"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const reduced = useReducedMotion();
  const isLink = Boolean(project.href);
  const hasPreview = Boolean(project.image);
  const liveHref = project.external && project.href ? project.href : undefined;

  const inner = (
    <motion.article
      className={
        hasPreview
          ? "group relative grid h-full overflow-hidden border border-border bg-surface/20 transition-[border-color,background-color,transform] duration-200 hover:border-light-cream/22 hover:bg-surface/45 lg:grid-cols-2"
          : "group relative flex min-h-full flex-col justify-between gap-10 border border-border bg-surface/20 p-6 transition-[border-color,background-color,transform] duration-200 hover:border-light-cream/22 hover:bg-surface/45 sm:p-7"
      }
      whileHover={reduced ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {project.image ? (
        liveHref ? (
          <a
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} live website`}
            className="relative block aspect-[16/10] overflow-hidden border-b border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent lg:aspect-[4/3] lg:border-r lg:border-b-0"
          >
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover object-top lg:object-center"
            />
          </a>
        ) : (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border lg:aspect-[4/3] lg:border-r lg:border-b-0">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover object-top lg:object-center"
            />
          </div>
        )
      ) : null}
      <div
        className={
          hasPreview
            ? "flex h-full flex-col justify-between gap-10 p-6 sm:p-7 lg:p-8"
            : "contents"
        }
      >
        <div className="flex items-start justify-between gap-4">
          <span className="eyebrow text-[0.625rem]">{project.number}</span>
          {project.status ? (
            <span className="eyebrow text-[0.625rem] text-accent">
              {project.status}
            </span>
          ) : (
            <ArrowUpRight
              className={`h-[1.125rem] w-[1.125rem] transition-[color,transform] duration-200 ${
                isLink
                  ? "text-muted group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  : "text-muted/35"
              }`}
              aria-hidden
            />
          )}
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-light-cream sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-muted">
            <span>{project.category}</span>
            {project.type ? (
              <>
                <span className="text-border" aria-hidden>
                  ·
                </span>
                <span>{project.type}</span>
              </>
            ) : null}
            {project.concept ? (
              <>
                <span className="text-border" aria-hidden>
                  ·
                </span>
                <span className="text-cream/80">Concept project</span>
              </>
            ) : null}
          </p>
          <p className="mt-4 text-[0.875rem] leading-relaxed text-muted sm:text-[0.9375rem]">
            {project.description}
          </p>
          {liveHref ? (
            <div className="mt-7">
              <Button href={liveHref} external>
                View Live Website
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );

  const focusRing =
    "block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent";

  if (liveHref) {
    return inner;
  }

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
