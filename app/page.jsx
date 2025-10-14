'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const focusAreas = [
  "Fintech & RegTech platforms",
  "Multi-cloud infrastructure",
  "AI automation & data products",
];

const impactHighlights = [
  {
    title: "Cloud Platforms",
    description:
      "Designed AWS + Azure landing zones, container platforms, and CI/CD rails that ship weekly without downtime.",
  },
  {
    title: "AI Systems",
    description:
      "Built RAG, LangChain, and prompt management workflows that plug GenAI into support, document, and analytics stacks.",
  },
  {
    title: "Compliance Ready",
    description:
      "Delivered HIPAA, PCI, and SOC-aligned automation that keeps fintech and health products audit-ready by default.",
  },
];

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="grid items-center gap-12 xl:grid-cols-[1.1fr_minmax(0,0.9fr)] xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="w-full max-w-[560px] justify-self-center text-center xl:justify-self-start xl:text-left">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
              Backend · Cloud · Platform
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Noor Nabi builds resilient platforms for data-driven teams that can&apos;t afford downtime.
            </h1>
            <p className="mt-5 text-base text-white/70">
              Backend and cloud engineer delivering investor platforms, AI products, and compliance automation from idea to secure production. Fractional platform leadership and hands-on build support available worldwide.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 xl:justify-start">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-5 rounded-3xl border border-white/5 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Recent Impact
              </p>
              <div className="grid gap-6">
                {impactHighlights.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* buttons and socials */}
            <div className="mt-10 flex flex-col items-center gap-6 xl:flex-row xl:items-center">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-black hover:bg-accent/80"
                  asChild
                >
                  <Link href="/work">
                    View Work
                    <FiArrowUpRight className="text-xl" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 rounded-full border-white/30 bg-black/20 px-6 py-3 uppercase text-white transition hover:border-accent hover:bg-accent hover:text-black"
                  asChild
                >
                  <Link href="/contact">Partner With Me</Link>
                </Button>
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  window.open("/noor_nabi_resume.pdf");
                }}
                className="flex items-center gap-2 px-0 text-white/70 hover:text-accent"
              >
                <FiDownload className="text-xl" />
                Download CV
              </Button>
            </div>

            <div className="mt-8 flex justify-center xl:justify-start">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>

          {/* photo */}
          <div className="flex w-full justify-center xl:justify-end">
            <div className="relative inline-flex items-center justify-center rounded-[48px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-[0_40px_120px_rgba(14,165,233,0.15)] backdrop-blur">
              <div className="pointer-events-none absolute -top-8 right-12 h-24 w-24 rounded-full border border-accent/40 opacity-70 blur-sm"></div>
              <div className="pointer-events-none absolute -bottom-10 left-10 h-28 w-28 rounded-full border border-white/10 opacity-40"></div>
              <div className="max-w-[480px]">
                <Photo />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
