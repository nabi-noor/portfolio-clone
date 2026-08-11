import { aboutParagraphs } from "@/lib/data";

export default function About() {
  return (
    <section id="about" aria-label="About" className="scroll-mt-24">
      <h3 className="section-label mb-6 lg:sr-only">About</h3>
      <div className="space-y-4">
        {aboutParagraphs.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
