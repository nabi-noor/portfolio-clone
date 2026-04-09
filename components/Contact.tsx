"use client";

import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/lib/data";
import { FiGithub, FiLinkedin, FiGlobe, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-[120px] lg:py-[160px]">
      <div className="max-w-content mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Contact
          </p>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Let&apos;s work together.
          </h2>
          <p className="text-text-muted max-w-xl mb-12 leading-relaxed">
            I&apos;m available for remote backend and cloud engineering roles —
            full-time, contract, or project-based. Based in Karachi (UTC+5),
            flexible hours.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {/* Primary email CTA */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-block font-syne font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary hover:text-accent transition-colors mb-10"
          >
            {contactInfo.email}
          </a>

          {/* Contact details */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-12">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors text-sm"
            >
              <FiPhone className="w-4 h-4" />
              {contactInfo.phone}
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors text-sm"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp: {contactInfo.whatsapp}
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              {
                href: contactInfo.github,
                icon: FiGithub,
                label: "GitHub",
              },
              {
                href: contactInfo.linkedin,
                icon: FiLinkedin,
                label: "LinkedIn",
              },
              {
                href: contactInfo.website,
                icon: FiGlobe,
                label: "Website",
              },
              {
                href: `mailto:${contactInfo.email}`,
                icon: FiMail,
                label: "Email",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="w-11 h-11 rounded-lg border border-border bg-surface flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
