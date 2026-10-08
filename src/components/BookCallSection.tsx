import { Button } from "@/components/ui/Button";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/motion/Reveal";

export function BookCallSection() {
  return (
    <section id="book" className="scroll-mt-28 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-light-cream sm:text-4xl md:text-[2.75rem]">
                LET&apos;S BUILD SOMETHING
                <br />
                WORTH TALKING ABOUT.
              </h2>
              <p className="mt-4 text-base text-muted sm:text-lg">
                Tell us what you&apos;re building, what you&apos;re trying to
                improve, or where your business is getting stuck.
              </p>
            </div>
            <Button href="#book" variant="primary" className="hidden sm:inline-flex">
              Book a Call →
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
