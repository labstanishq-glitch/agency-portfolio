import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/motion/Reveal";

export function BookCallSection() {
  return (
    <section
      id="book"
      className="section-pad scroll-mt-24 border-t border-border bg-surface/15"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="eyebrow mb-4">Book a call</p>
            <h2
              className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-light-cream"
            >
              Let&apos;s build something worth talking about.
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              Tell us what you&apos;re building, what you&apos;re trying to
              improve, or where your business is getting stuck.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
