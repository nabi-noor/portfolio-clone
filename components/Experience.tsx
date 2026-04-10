"use client";

import AnimatedSection from "./AnimatedSection";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-[160px]">
      <div className="max-w-content mx-auto px-5 sm:px-6">
        <AnimatedSection>
          <span className="section-label mb-4 sm:mb-5">Experience</span>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] leading-tight mb-10 sm:mb-16">
            Where I&apos;ve worked<span className="gradient-text">.</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.12} className="space-y-4 sm:space-y-5">
          {experience.map((entry) => (
            <StaggerItem key={`${entry.company}-${entry.period}`}>
              <article className="glass-card gradient-border p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-4 sm:mb-5">
                  <div>
                    <h3 className="font-syne font-bold text-base sm:text-lg text-text-primary">
                      {entry.role}
                    </h3>
                    <p className="text-accent text-sm mt-0.5 sm:mt-1 font-medium">{entry.company}</p>
                  </div>
                  <div className="sm:text-right shrink-0 mt-1 sm:mt-0">
                    <p className="font-mono text-[10px] sm:text-[11px] text-text-secondary">{entry.period}</p>
                    <p className="text-[10px] sm:text-[11px] text-text-muted mt-0.5">{entry.location}</p>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5 sm:gap-3 text-text-secondary text-xs sm:text-sm leading-relaxed">
                      <span className="shrink-0 w-1 h-1 mt-1.5 sm:mt-2 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-[10px] sm:text-[11px] px-3 sm:px-4">{tag}</span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
