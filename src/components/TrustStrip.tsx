import { Reveal } from "@/components/motion/Reveal";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface/40 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-xl font-bold tracking-tight text-light-cream sm:text-2xl">
            WE DON&apos;T JUST BUILD WEBSITES.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            We design and build digital experiences, software and automation
            systems that help businesses operate and grow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
