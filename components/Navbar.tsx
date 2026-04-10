"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-deep/80 backdrop-blur-2xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-syne font-extrabold text-xl tracking-tight text-text-primary"
        >
          Noor<span className="gradient-text">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="nav-link text-[13px]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: socials + resume */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/nabi-noor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/nabi-noor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href="/noor_nabi_resume.pdf"
            download
            className="ml-1 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-mono font-medium border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
          >
            <FiDownload className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-6 h-5 flex flex-col justify-between"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`block h-px w-full bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
          <span className={`block h-px w-full bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-full bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-[72px] bg-bg-deep/95 backdrop-blur-2xl md:hidden z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-syne text-3xl font-bold text-text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com/nabi-noor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent transition-all"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/nabi-noor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent transition-all"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="/noor_nabi_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
