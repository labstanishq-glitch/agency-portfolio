import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="section-pad scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading title="Selected work" className="mb-10 sm:mb-14" />
        </Reveal>
        {projects.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {projects.map((project, i) => (
              <li key={project.number}>
                <Reveal delay={i * 0.05}>
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal delay={0.05}>
            <p className="text-[0.9375rem] leading-relaxed text-muted">
              More work coming soon.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
