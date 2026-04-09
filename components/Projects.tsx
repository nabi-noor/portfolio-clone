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
    <section id="projects" className="py-[120px] lg:py-[160px]">
      <div className="max-w-content mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
                Projects
              </p>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl">
                Things I&apos;ve built.
              </h2>
            </div>
            <p className="font-mono text-sm text-text-muted">
              {page + 1} / {totalPages}
            </p>
          </div>
        </AnimatedSection>

        {/* Paginated cards */}
        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
              className="space-y-6"
            >
              {currentCases.map((item) => (
                <article
                  key={item.id}
                  className="group p-6 sm:p-8 bg-surface rounded-xl border border-border hover:border-accent/30 transition-all duration-300"
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
                      {item.id}
                    </span>
                    <span className="font-mono text-[11px] text-text-muted text-right">
                      {item.role}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-xl lg:text-2xl text-text-primary mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed max-w-2xl mb-6">
                    {item.summary}
                  </p>

                  {/* Impact & Highlights columns */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-text-muted mb-3">
                        Impact
                      </p>
                      <ul className="space-y-2">
                        {item.impact.map((point, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-text-muted text-sm leading-relaxed"
                          >
                            <span className="shrink-0 w-1 h-1 mt-1.5 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-text-muted mb-3">
                        What I built
                      </p>
                      <ul className="space-y-2">
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-text-muted text-sm leading-relaxed"
                          >
                            <span className="shrink-0 w-1 h-1 mt-1.5 rounded-full bg-accent" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-bg border border-border text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Prev / Next arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => paginate(-1)}
              disabled={page === 0}
              aria-label="Previous page"
              className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-text-muted"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => paginate(1)}
              disabled={page === totalPages - 1}
              aria-label="Next page"
              className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-text-muted"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Numbered page indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-8 h-8 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${
                  i === page
                    ? "bg-accent text-bg border border-accent"
                    : "border border-border text-text-muted hover:border-accent/30 hover:text-text-primary"
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
