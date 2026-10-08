import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function ProcessSection() {
  return (
    <section className="border-t border-border bg-surface/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            title="FROM IDEA TO LAUNCH."
            className="mb-12 sm:mb-16"
          />
        </Reveal>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} as="li">
              <div className="h-full border-l border-border pl-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-light-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
