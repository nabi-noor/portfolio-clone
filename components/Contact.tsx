import CopyEmail from "./CopyEmail";
import { contactInfo } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-24 mt-24">
      <h3 className="section-label mb-8">Contact</h3>
      <p className="max-w-md leading-relaxed">
        I&apos;m available for remote backend and cloud engineering roles —
        full-time, contract, or project-based. The fastest way to reach me:
      </p>
      <div className="mt-6">
        <CopyEmail />
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-8">
        <a
          href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2.5 font-mono text-xs text-faint hover:text-accent transition-colors duration-300"
        >
          <FiPhone className="h-4 w-4" aria-hidden="true" />
          {contactInfo.phone}
        </a>
        <a
          href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 font-mono text-xs text-faint hover:text-accent transition-colors duration-300"
        >
          <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </section>
  );
}
