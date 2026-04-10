"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const tagRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.4 });

    tl.fromTo(
      tagRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        h1Ref.current?.querySelectorAll(".word") ?? [],
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.04, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        termRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
  }, []);

  const headline = "I build backend systems and cloud infrastructure that teams trust in production.";
  const accentWords = new Set(["backend", "cloud", "infrastructure", "production."]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-gradient-radial from-accent/[0.07] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-gradient-radial from-accent-purple/[0.05] via-transparent to-transparent" />
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-6 w-full pt-24 sm:pt-28 pb-16 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div ref={tagRef} style={{ opacity: 0 }}>
              <span className="inline-flex items-center rounded-full border border-border px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-text-muted">
                Backend &middot; Cloud &middot; Platform
              </span>
            </div>

            <h1
              ref={h1Ref}
              className="font-syne font-extrabold text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] leading-[1.1] mt-6 sm:mt-8 mb-6 sm:mb-8"
            >
              {headline.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] sm:mr-[0.3em]">
                  <span
                    className={`word inline-block ${
                      accentWords.has(word) ? "gradient-text" : ""
                    }`}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            <p
              ref={subRef}
              style={{ opacity: 0 }}
              className="text-text-secondary text-sm sm:text-base lg:text-lg max-w-lg mb-8 sm:mb-10 leading-relaxed"
            >
              Node.js &middot; AWS &middot; Python &middot; Serverless —
              shipping reliable systems for 4+ years.
            </p>

            <div ref={ctaRef} style={{ opacity: 0 }} className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary text-xs sm:text-sm"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline text-xs sm:text-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Terminal */}
          <div ref={termRef} style={{ opacity: 0 }} className="hidden lg:block">
            <div className="glass-card rounded-2xl overflow-hidden border border-border">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[11px] font-mono text-text-muted">~/cloud-ops</span>
              </div>
              <div className="p-5 font-mono text-[13px] space-y-3">
                <div>
                  <span className="text-accent">$</span>{" "}
                  <span className="text-text-secondary">aws lambda invoke --function-name api-prod</span>
                </div>
                <div className="text-text-primary pl-2">
                  {"{"} &quot;StatusCode&quot;: <span className="text-accent">200</span> {"}"}
                </div>
                <div className="pt-2">
                  <span className="text-accent">$</span>{" "}
                  <span className="text-text-secondary">curl -s https://api.noornabi.pro/health</span>
                </div>
                <div className="text-[#28c840] pl-2">
                  {"{"} &quot;status&quot;: &quot;ok&quot;, &quot;uptime&quot;: &quot;99.95%&quot; {"}"}
                </div>
                <div className="pt-2">
                  <span className="text-accent">$</span>{" "}
                  <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
