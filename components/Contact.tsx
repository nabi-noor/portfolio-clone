"use client";

import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/lib/data";
import { FiGithub, FiLinkedin, FiGlobe, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-[160px] relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-accent/[0.05] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-content mx-auto px-5 sm:px-6 relative z-10">
        <AnimatedSection>
          <span className="section-label mb-4 sm:mb-5">Contact</span>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] leading-tight mb-4 sm:mb-6">
            Let&apos;s work together<span className="gradient-text">.</span>
          </h2>
          <p className="text-text-secondary max-w-xl mb-10 sm:mb-14 leading-relaxed text-sm sm:text-base">
            I&apos;m available for remote backend and cloud engineering roles —
            full-time, contract, or project-based. Based in Karachi (UTC+5),
            flexible hours.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-block font-syne font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-text-primary hover:text-accent transition-colors duration-300 mb-8 sm:mb-10 break-all"
          >
            {contactInfo.email}
          </a>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-10 sm:mb-14">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-300 text-xs sm:text-sm"
            >
              <FiPhone className="w-4 h-4 text-accent/50 shrink-0" />
              {contactInfo.phone}
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-300 text-xs sm:text-sm"
            >
              <FaWhatsapp className="w-4 h-4 text-accent/50 shrink-0" />
              WhatsApp: {contactInfo.whatsapp}
            </a>
          </div>

          <div className="flex gap-2.5 sm:gap-3">
            {[
              { href: contactInfo.github, icon: FiGithub, label: "GitHub" },
              { href: contactInfo.linkedin, icon: FiLinkedin, label: "LinkedIn" },
              { href: contactInfo.website, icon: FiGlobe, label: "Website" },
              { href: `mailto:${contactInfo.email}`, icon: FiMail, label: "Email" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/[0.05] transition-all duration-300"
              >
                <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
