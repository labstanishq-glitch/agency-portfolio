import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-light-cream sm:text-4xl">
            SMALL TEAM. BIG EXECUTION.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            We work with ambitious businesses to turn ideas into polished
            digital products, websites and automation systems.
          </p>
          <Link
            href="#book"
            className="mt-8 inline-flex text-sm font-semibold text-light-cream transition-colors hover:text-accent"
          >
            Get to know us →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
