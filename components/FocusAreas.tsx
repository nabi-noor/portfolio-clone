"use client";

import AnimatedSection from "./AnimatedSection";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { focusAreas } from "@/lib/data";

const icons = [
  <svg key="reliability" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  <svg key="cloud" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
  </svg>,
  <svg key="automation" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
];

export default function FocusAreas() {
  return (
    <section className="py-16 sm:py-24 lg:py-[120px]">
      <div className="max-w-content mx-auto px-5 sm:px-6">
        <AnimatedSection>
          <span className="section-label mb-4 sm:mb-5">What I Do</span>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] leading-tight mb-10 sm:mb-14">
            Focus areas<span className="gradient-text">.</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.12} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {focusAreas.map((area, i) => (
            <StaggerItem key={area.title}>
              <div className="glass-card gradient-border p-5 sm:p-7 rounded-2xl sm:rounded-3xl h-full flex flex-col">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 sm:mb-5">
                  {icons[i]}
                </div>
                <h3 className="font-syne font-bold text-sm sm:text-base text-text-primary mb-2 sm:mb-3">
                  {area.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
