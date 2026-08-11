import Nav from "./Nav";
import { heroTagline, contactInfo } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";

const socials = [
  { href: contactInfo.github, icon: FiGithub, label: "GitHub" },
  { href: contactInfo.linkedin, icon: FiLinkedin, label: "LinkedIn" },
  { href: `mailto:${contactInfo.email}`, icon: FiMail, label: "Email" },
];

export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:justify-between py-12 lg:py-24">
      <div>
        <h1
          className="animate-enter text-4xl sm:text-5xl font-semibold tracking-tight text-heading"
          style={{ animationDelay: "0ms" }}
        >
          Noor Nabi
        </h1>
        <h2
          className="animate-enter mt-3 text-lg font-medium text-heading/90"
          style={{ animationDelay: "80ms" }}
        >
          Cloud &amp; Backend Engineer
        </h2>
        <p
          className="animate-enter mt-4 max-w-xs leading-relaxed"
          style={{ animationDelay: "160ms" }}
        >
          {heroTagline}
        </p>

        <p
          className="animate-enter mt-6 flex items-center gap-2.5 font-mono text-xs text-faint"
          style={{ animationDelay: "240ms" }}
        >
          <span className="status-dot h-2 w-2 shrink-0 rounded-full bg-green-400" />
          open to remote roles&ensp;·&ensp;Karachi&ensp;·&ensp;UTC+5
        </p>

        <div className="animate-enter" style={{ animationDelay: "320ms" }}>
          <Nav />
        </div>
      </div>

      <div
        className="animate-enter mt-12 lg:mt-0 flex items-center gap-5"
        style={{ animationDelay: "400ms" }}
      >
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto") ? undefined : "_blank"}
            rel={
              social.href.startsWith("mailto")
                ? undefined
                : "noopener noreferrer"
            }
            aria-label={social.label}
            className="text-faint hover:text-accent transition-colors duration-300"
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
        <a
          href="/noor_nabi_resume.pdf"
          download
          className="ml-1 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint hover:text-accent transition-colors duration-300"
        >
          <FiFileText className="h-4 w-4" />
          Résumé
        </a>
      </div>
    </header>
  );
}
