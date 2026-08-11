export default function Footer() {
  return (
    <footer className="mt-24 pb-4">
      <p className="font-mono text-[11px] leading-relaxed text-faint">
        © {new Date().getFullYear()} Noor Nabi. Designed and built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-body hover:text-accent transition-colors duration-300"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-body hover:text-accent transition-colors duration-300"
        >
          Tailwind CSS
        </a>
        , typeset in Geist.
      </p>
    </footer>
  );
}
