import { projects } from "@/lib/data";

const featured = projects.filter((project) => project.featured);
const other = projects.filter((project) => !project.featured);

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="scroll-mt-24 mt-24">
      <h3 className="section-label mb-8">Selected Work</h3>
      <ul className="group/list space-y-2">
        {featured.map((project) => (
          <li
            key={project.title}
            className="rounded-lg p-4 -mx-4 transition-all duration-300 lg:group-hover/list:opacity-50 lg:hover:!opacity-100 lg:hover:bg-white/[0.03] lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.08)]"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h4 className="font-medium text-heading">{project.title}</h4>
              <p className="font-mono text-[11px] text-faint text-right shrink-0">
                {project.meta}
              </p>
            </div>
            <p className="mt-2 text-sm leading-relaxed">{project.blurb}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h3 className="section-label mt-14 mb-6">Also Built</h3>
      <ul className="space-y-4">
        {other.map((project) => (
          <li key={project.title} className="text-sm leading-relaxed">
            <span className="font-medium text-heading">{project.title}</span>
            <span className="text-faint"> — </span>
            {project.blurb}
          </li>
        ))}
      </ul>
    </section>
  );
}
