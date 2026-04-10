export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-xs font-mono">
          &copy; {new Date().getFullYear()} Noor Nabi
        </p>
        <p className="text-text-muted text-xs font-mono">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
