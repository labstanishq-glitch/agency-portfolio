import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-pad scroll-mt-24 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.55fr)] lg:gap-16 lg:items-end">
            <div>
              <p className="eyebrow mb-4">About</p>
              <h2
                className="font-display text-[clamp(1.875rem,3.8vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-light-cream"
              >
                Small team.
                <br />
                Big execution.
              </h2>
            </div>
            <div className="border-l border-border pl-6 lg:pl-8">
              <p className="reading-width text-[0.9375rem] leading-[1.65] text-muted sm:text-base">
                We work with ambitious businesses to turn ideas into polished
                digital products, websites and automation systems — with direct
                access to the people doing the work.
              </p>
              <Link
                href="#book"
                className="mt-6 inline-flex text-[0.8125rem] font-medium text-light-cream transition-colors duration-200 hover:text-accent"
              >
                Start a conversation →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
