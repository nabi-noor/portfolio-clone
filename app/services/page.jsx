"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const serviceTracks = [
    {
        id: "01",
        title: "Platform Foundations",
        summary: "Landing zones, infrastructure as code, and paved roads that help teams ship reliably on AWS and Azure.",
        outcomes: [
            "Multi-account governance with Terraform / CloudFormation guardrails.",
            "Container platforms on ECS, EKS, or AKS with golden CI/CD pipelines.",
            "Observability standards with SLOs, alerting policy, and runbooks.",
        ],
        stack: ["AWS", "Azure", "Terraform", "Pulumi", "CloudFormation", "GitHub Actions"],
    },
    {
        id: "02",
        title: "Data & AI Products",
        summary: "Streaming architectures and LLM-powered systems that keep humans in the loop while automating the tedious parts.",
        outcomes: [
            "Event-driven services with Kafka, EventBridge, or Pub/Sub powering real-time decisions.",
            "RAG and prompt management platforms with LangChain, vector stores, and evaluation harnesses.",
            "Analytics pipelines with dbt, Snowflake, or PostgreSQL feeding actionable insight back to product surfaces.",
        ],
        stack: ["FastAPI", "LangChain", "Kafka", "PostgreSQL", "Snowflake", "dbt"],
    },
    {
        id: "03",
        title: "Compliance & Reliability",
        summary: "Automated controls, playbooks, and reporting that keep fintech and health platforms audit-ready by default.",
        outcomes: [
            "Policy-as-code libraries enforcing IAM, tagging, and encryption guardrails.",
            "Resilience testing, chaos drills, and incident response automation tied to SLOs.",
            "Audit dashboards and evidence pipelines for HIPAA, PCI, SOC2, and GDPR programs.",
        ],
        stack: ["AWS Lambda", "Azure AD", "n8n", "Datadog", "Prometheus", "Metabase"],
    },
    {
        id: "04",
        title: "Applied Engineering Leadership",
        summary: "Fractional platform ownership that blends architecture guidance with sleeves-rolled-up delivery.",
        outcomes: [
            "Technical vision translated into roadmaps, hiring plans, and delivery cadences.",
            "Pairing and coaching on infrastructure, backend patterns, and operational excellence.",
            "Executive-ready communication that keeps stakeholders aligned without the jargon.",
        ],
        stack: ["Workshops", "Architecture Reviews", "Roadmaps", "Team Enablement"],
    },
];

const Services = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" } }}
            className="min-h-[80vh] py-12"
        >
            <div className="container mx-auto">
                <div className="grid gap-12 xl:grid-cols-[minmax(0,0.85fr)_1.15fr]">
                    <div className="space-y-8">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                            Services & Engagements
                        </span>
                        <h1 className="text-4xl font-semibold text-white md:text-5xl">
                            Build, secure, and scale your platform with a partner who ships alongside your team.
                        </h1>
                        <p className="max-w-xl text-base text-white/70">
                            Whether you need a landing zone built from scratch, an AI product delivered to production, or a trusted operator owning compliance programs, I help teams turn architecture into reliable systems and outcomes.
                        </p>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur">
                            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                                Typical collaboration looks like
                            </p>
                            <ul className="mt-4 space-y-3 text-sm text-white/70">
                                <li>⚡ Discovery sprints to map architecture, risks, and the delivery path.</li>
                                <li>🧠 Hands-on build cycles with weekly demos and measurable checkpoints.</li>
                                <li>🤝 Knowledge transfer, enablement sessions, and runbooks before handoff.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="flex items-center justify-center rounded-full bg-accent px-6 py-3 text-black hover:bg-accent/80"
                                asChild
                            >
                                <Link href="/contact">Start a project</Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full border-white/30 px-6 py-3 uppercase text-white hover:border-accent hover:text-accent"
                                asChild
                            >
                                <Link href="/work">View recent outcomes</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {serviceTracks.map((service) => (
                            <div
                                key={service.id}
                                className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 transition duration-300 hover:border-accent/80 hover:shadow-[0_40px_120px_rgba(14,165,233,0.15)]"
                            >
                                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full border border-accent/30 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                                <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                                    {service.id}
                                </div>
                                <h2 className="mt-4 text-2xl font-semibold text-white">{service.title}</h2>
                                <p className="mt-3 text-sm text-white/70">{service.summary}</p>
                                <div className="mt-5 flex-1">
                                    <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                                        Outcomes
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm text-white/70">
                                        {service.outcomes.map((item) => (
                                            <li key={item} className="leading-relaxed text-white/70">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {service.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white/60"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Services;
