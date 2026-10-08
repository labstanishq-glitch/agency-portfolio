import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta() {
  return (
    <section className="border-t border-border bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-light-cream">
            YOUR NEXT DIGITAL
            <br />
            PROJECT STARTS HERE.
          </h2>
          <div className="mt-10">
            <Button href="#book">Book a Call →</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
