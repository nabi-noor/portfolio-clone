"use client";

import AnimatedSection from "./AnimatedSection";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-[160px]">
      <div className="max-w-content mx-auto px-5 sm:px-6">
        <AnimatedSection>
          <span className="section-label mb-4 sm:mb-5">Skills</span>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] leading-tight mb-10 sm:mb-16">
            Tech I work with<span className="gradient-text">.</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {skills.map((category) => (
            <StaggerItem key={category.category}>
              <div className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl h-full">
                <h3 className="font-syne font-semibold text-xs sm:text-sm text-text-primary mb-4 sm:mb-5 flex items-center gap-2 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-accent to-accent-cyan" />
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="tag-pill cursor-default text-[10px] sm:text-[11px] px-3 sm:px-4">
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
