"use client";

import { useRef, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { contactInfo } from "@/lib/data";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      ok = true;
    } catch {
      // Clipboard API unavailable or blocked — fall back to execCommand.
      const textarea = document.createElement("textarea");
      textarea.value = contactInfo.email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        ok = document.execCommand("copy");
      } finally {
        textarea.remove();
      }
    }
    if (ok) {
      setCopied(true);
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${contactInfo.email}`}
        className="text-xl sm:text-2xl font-medium tracking-tight text-heading hover:text-accent transition-colors duration-300 break-all"
      >
        {contactInfo.email}
      </a>
      <button
        onClick={copy}
        aria-label={copied ? "Email copied" : "Copy email address"}
        className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-faint hover:text-accent hover:border-accent/40 transition-colors duration-300"
      >
        {copied ? (
          <>
            <FiCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Copied
          </>
        ) : (
          <>
            <FiCopy className="h-3.5 w-3.5" aria-hidden="true" />
            Copy
          </>
        )}
      </button>
    </div>
  );
}
