"use client";

import AnimatedSection from "./AnimatedSection";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { aboutParagraphs, aboutDetails } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-[160px]">
      <div className="max-w-content mx-auto px-5 sm:px-6">
        <AnimatedSection>
          <span className="section-label mb-4 sm:mb-5">About</span>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] leading-tight mb-10 sm:mb-16">
            A bit about me<span className="gradient-text">.</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-10 lg:gap-16 xl:gap-20">
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 sm:space-y-6">
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-text-secondary leading-[1.8] text-sm sm:text-[15px]">
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.08} className="space-y-3">
            {aboutDetails.map((detail) => (
              <StaggerItem key={detail.label}>
                <div className="glass-card flex flex-col gap-1.5 p-4 sm:p-5 rounded-xl sm:rounded-2xl">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
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
