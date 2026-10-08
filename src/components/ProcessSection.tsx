import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function ProcessSection() {
  return (
    <section className="section-pad border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            title="From idea to launch"
            className="mb-10 sm:mb-14"
          />
        </Reveal>
        <ol className="grid gap-0 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06} as="li">
              <div
                className={`h-full border-b border-border px-0 py-8 sm:border-b-0 sm:py-0 sm:pl-6 sm:pr-4 ${
                  i > 0 ? "sm:border-l sm:border-border" : ""
                } lg:pr-6`}
              >
                <span className="eyebrow text-[0.625rem] text-accent/90">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold tracking-wide text-light-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
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
