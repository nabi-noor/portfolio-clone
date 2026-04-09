"use client";

import AnimatedSection from "./AnimatedSection";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { aboutParagraphs, aboutDetails } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-[120px] lg:py-[160px]">
      <div className="max-w-content mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            About
          </p>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl mb-16">
            A bit about me.
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-20">
          {/* Left — paragraphs */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-5">
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-text-muted leading-relaxed text-[15px]">
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — detail cards */}
          <StaggerContainer staggerDelay={0.08} className="space-y-3">
            {aboutDetails.map((detail) => (
              <StaggerItem key={detail.label}>
                <div className="flex flex-col gap-1 p-4 bg-surface rounded-lg border border-border">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                    {detail.label}
                  </span>
                  <span className="text-text-primary text-sm font-medium">
                    {detail.value}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
