"use client";

import AnimatedSection from "./AnimatedSection";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] lg:py-[160px]">
      <div className="max-w-content mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Skills
          </p>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl mb-16">
            Tech I work with.
          </h2>
        </AnimatedSection>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((category) => (
            <StaggerItem key={category.category}>
              <div className="p-6 bg-surface rounded-xl border border-border h-full">
                <h3 className="font-syne font-semibold text-sm text-text-primary mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[11px] px-3 py-1.5 rounded-md bg-bg border border-border text-text-muted hover:text-accent hover:border-accent/30 hover:scale-105 transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
