"use client";

import AnimatedSection from "./AnimatedSection";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-[120px] lg:py-[160px]">
      <div className="max-w-content mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Experience
          </p>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl mb-16">
            Where I&apos;ve worked.
          </h2>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.12} className="space-y-6">
          {experience.map((entry) => (
            <StaggerItem key={`${entry.company}-${entry.period}`}>
              <article className="group relative p-6 sm:p-8 bg-surface rounded-xl border border-border hover:border-accent/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="font-syne font-bold text-xl text-text-primary">
                      {entry.role}
                    </h3>
                    <p className="text-accent text-sm mt-1">{entry.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-xs text-text-muted">
                      {entry.period}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      {entry.location}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-text-muted text-sm leading-relaxed"
                    >
                      <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-bg border border-border text-text-muted"
                    >
                      {tag}
                    </span>
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
