import { Reveal } from "@/components/motion/Reveal";

export function TrustStrip() {
  return (
    <section className="border-y border-border py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p
            className="max-w-3xl font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-light-cream sm:text-xl"
          >
            We don&apos;t just build websites.
          </p>
          <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            We design and build digital experiences, software and automation
            systems that help businesses operate and grow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
