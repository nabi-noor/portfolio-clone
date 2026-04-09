export default function FooterNew() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-content mx-auto px-6">
        <p className="text-center text-text-muted text-sm font-mono">
          &copy; {new Date().getFullYear()} Noor Nabi — Built with Next.js
        </p>
      </div>
    </footer>
  );
}
