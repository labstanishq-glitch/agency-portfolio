import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/motion/Reveal";

export function Services() {
  return (
    <section
      id="services"
      className="section-pad scroll-mt-24 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            title="What we build"
            className="mb-10 sm:mb-14"
          />
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-2 sm:gap-px sm:border sm:border-border lg:grid-cols-3">
          {services.map((service, i) => (
            <li key={service.number} className="sm:bg-background">
              <Reveal delay={i * 0.04}>
                <ServiceCard service={service} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
