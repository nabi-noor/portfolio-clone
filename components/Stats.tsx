"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;

        const isDecimal = value % 1 !== 0;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            setDisplay(isDecimal ? obj.val.toFixed(2) : Math.round(obj.val).toString());
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".stat-item"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-[120px] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[200px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div ref={sectionRef} className="max-w-content mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center" style={{ opacity: 0 }}>
              <p className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] gradient-text leading-none mb-2 sm:mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
