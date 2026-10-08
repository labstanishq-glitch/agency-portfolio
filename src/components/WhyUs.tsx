import { principles } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-light-cream sm:text-4xl md:text-[2.75rem]">
            ONE TEAM.
            <br />
            ONE POINT OF CONTACT.
            <br />
            <span className="text-cream">NO UNNECESSARY HANDOFFS.</span>
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {principles.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} as="li">
              <article className="rounded-2xl border border-border p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-light-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
