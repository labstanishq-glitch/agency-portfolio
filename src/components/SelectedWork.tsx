import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            title="SELECTED WORK"
            subtitle="Real businesses. Real digital systems."
            className="mb-12 sm:mb-16"
          />
        </Reveal>
        <ul className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.number}>
              <Reveal delay={i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
