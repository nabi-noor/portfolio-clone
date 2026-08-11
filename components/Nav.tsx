"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    // The last section may never reach the observer band, so when the page
    // is scrolled to the bottom it wins over whatever the observer saw.
    const atBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 48;

    const observer = new IntersectionObserver(
      (entries) => {
        if (atBottom()) {
          setActive(navLinks[navLinks.length - 1].href);
          return;
        }
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      if (atBottom()) setActive(navLinks[navLinks.length - 1].href);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav aria-label="Section navigation" className="hidden lg:block mt-16">
      <ul className="space-y-1">
        {navLinks.map((link) => {
          const isActive = active === link.href;
          return (
            <li key={link.href}>
              <a href={link.href} className="group flex items-center gap-4 py-2.5">
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-accent"
                      : "w-8 bg-faint/50 group-hover:w-16 group-hover:bg-heading"
                  }`}
                />
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                    isActive
                      ? "text-heading"
                      : "text-faint group-hover:text-heading"
                  }`}
                >
                  {link.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
