"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/lib/data";

const CASES_PER_PAGE = 2;
const totalPages = Math.ceil(projects.length / CASES_PER_PAGE);

export default function Projects() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentCases = useMemo(() => {
    const start = page * CASES_PER_PAGE;
    return projects.slice(start, start + CASES_PER_PAGE);
  }, [page]);

  const paginate = (newDir: number) => {
    const next = page + newDir;
    if (next < 0 || next >= totalPages) return;
    setDirection(newDir);
    setPage(next);
  };

  const goToPage = (index: number) => {
    setDirection(index > page ? 1 : -1);
    setPage(index);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-[160px] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[300px] sm:h-[400px] bg-accent-purple/[0.04] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-content mx-auto px-5 sm:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-10 sm:mb-16">
            <div>
              <span className="section-label mb-4 sm:mb-5">Projects</span>
              <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] leading-tight">
                Things I&apos;ve built<span className="gradient-text">.</span>
              </h2>
            </div>
            <p className="font-mono text-sm text-text-muted">
              <span className="text-accent">{page + 1}</span>
              <span className="mx-1">/</span>
              {totalPages}
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 sm:space-y-5"
            >
              {currentCases.map((item) => (
                <article
                  key={item.id}
                  className="glass-card gradient-border p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest gradient-text font-bold">
                      {item.id}
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] text-text-muted text-right">
                      {item.role}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-lg sm:text-xl lg:text-2xl text-text-primary mt-3 sm:mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-2xl mb-5 sm:mb-6">
                    {item.summary}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 sm:mb-3">
                        Impact
                      </p>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {item.impact.map((point, i) => (
                          <li key={i} className="flex gap-2.5 sm:gap-3 text-text-secondary text-xs sm:text-sm leading-relaxed">
                            <span className="shrink-0 w-1 h-1 mt-1.5 sm:mt-2 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 sm:mb-3">
                        What I built
                      </p>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5 sm:gap-3 text-text-secondary text-xs sm:text-sm leading-relaxed">
                            <span className="shrink-0 w-1 h-1 mt-1.5 sm:mt-2 rounded-full bg-accent-purple" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.stack.map((tech) => (
                      <span key={tech} className="tag-pill text-[10px] sm:text-[11px] px-3 sm:px-4">{tech}</span>
                    ))}
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-8 sm:mt-10">
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => paginate(-1)}
              disabled={page === 0}
              aria-label="Previous page"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => paginate(1)}
              disabled={page === totalPages - 1}
              aria-label="Next page"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full text-[10px] sm:text-xs font-mono font-medium transition-all duration-300 ${
                  i === page
                    ? "bg-gradient-to-r from-accent to-accent-cyan text-white shadow-[0_4px_20px_rgba(6,147,227,0.3)]"
                    : "border border-border text-text-muted hover:text-text-primary hover:border-border-hover"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
