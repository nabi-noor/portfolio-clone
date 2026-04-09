"use client";

import { motion } from "framer-motion";

const headlineWords = [
  "I",
  "build",
  "backend",
  "systems",
  "and",
  "cloud",
  "infrastructure",
  "that",
  "teams",
  "trust",
  "in",
  "production.",
];

const lineBreaks = new Set([3, 6]); // After "systems" and "infrastructure"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center hero-grid overflow-hidden"
    >
      {/* Gradient orb */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-content mx-auto px-6 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6"
            >
              Cloud Engineer &middot; Backend Developer
            </motion.p>

            {/* Headline with staggered word reveal */}
            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.1] mb-8">
              {headlineWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.05,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                  {lineBreaks.has(i) ? (
                    <>
                      <br className="hidden sm:block" />{" "}
                    </>
                  ) : (
                    " "
                  )}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-text-muted text-lg max-w-xl mb-10"
            >
              Node.js &middot; AWS &middot; Python &middot; Serverless —
              shipping reliable systems for 4+ years.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-syne font-semibold text-sm rounded-md hover:bg-accent/90 transition-colors"
              >
                View My Work
                <span aria-hidden="true">&darr;</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-syne font-semibold text-sm rounded-md hover:border-text-muted transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Terminal element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="hidden lg:block w-[340px] terminal"
          >
            <div className="terminal-header">
              <span className="terminal-dot bg-[#ff5f57]" />
              <span className="terminal-dot bg-[#febc2e]" />
              <span className="terminal-dot bg-[#28c840]" />
              <span className="ml-3 text-xs text-text-muted">terminal</span>
            </div>
            <div className="p-4 space-y-2">
              <div>
                <span className="text-accent">$</span>{" "}
                <span className="text-text-muted">
                  aws lambda invoke --function-name api-prod
                </span>
              </div>
              <div className="text-text-primary">
                {"{"} &quot;StatusCode&quot;: 200 {"}"}
              </div>
              <div className="mt-3">
                <span className="text-accent">$</span>{" "}
                <span className="text-text-muted">
                  curl -s https://api.noornabi.pro/health
                </span>
              </div>
              <div className="text-green-400">
                {"{"} &quot;status&quot;: &quot;ok&quot;, &quot;uptime&quot;:
                &quot;99.95%&quot; {"}"}
              </div>
              <div className="mt-1">
                <span className="text-accent">$</span>{" "}
                <span className="inline-block w-2 h-4 bg-text-primary animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
