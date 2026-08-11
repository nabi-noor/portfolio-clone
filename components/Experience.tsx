import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="scroll-mt-24 mt-24">
      <h3 className="section-label mb-8">Experience</h3>
      <ol className="group/list space-y-2">
        {experience.map((entry) => (
          <li
            key={`${entry.company}-${entry.period}`}
            className="rounded-lg p-4 -mx-4 transition-all duration-300 lg:group-hover/list:opacity-50 lg:hover:!opacity-100 lg:hover:bg-white/[0.03] lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.08)]"
          >
            <div className="grid sm:grid-cols-[130px_1fr] gap-1 sm:gap-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-faint pt-1">
                {entry.period}
              </p>
              <div>
                <h4 className="font-medium text-heading">
                  {entry.role}
                  <span className="text-faint"> · </span>
                  <span className="text-heading/80">{entry.company}</span>
                </h4>
                <p className="font-mono text-[11px] text-faint mt-0.5">
                  {entry.location}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed">
                  {entry.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <a
        href="/noor_nabi_resume.pdf"
        download
        className="group mt-8 inline-flex items-center gap-2 font-medium text-heading hover:text-accent transition-colors duration-300"
      >
        View full résumé
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </section>
  );
}
