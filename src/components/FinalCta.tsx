import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-display text-[clamp(1.75rem,3.2vw,2.375rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-light-cream"
            >
              Your next digital project starts here.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted">
              One conversation to understand the scope. No pressure, no generic
              pitch deck.
            </p>
            <div className="mt-9">
              <Button href="#book">Book a Call</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
