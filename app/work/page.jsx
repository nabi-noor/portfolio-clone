"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const caseStudies = [
    {
        id: "01",
        title: "WineFi · Fintech Wine Investment Platform",
        role: "Backend & Cloud Engineer",
        summary:
            "London-based platform delivering curated fine wine portfolios with realtime tracking and a modern, trading-style investor experience.",
        impact: [
            "Opened fine wine investing to everyday users with transparent portfolio insights and automation.",
            "Scaled investor onboarding and monitoring through Fastify APIs and AWS-native services.",
        ],
        highlights: [
            "Architected Fastify (Node.js) backend services with realtime portfolio tracking and risk indicators.",
            "Built investor dashboards in Next.js with responsive, app-like interactions.",
            "Modeled structured investment data in PostgreSQL and automated AWS infrastructure pipelines.",
        ],
        stack: ["Fastify", "Node.js", "Next.js", "PostgreSQL", "AWS"],
    },
    {
        id: "02",
        title: "Libraro · Community Publishing Platform",
        role: "Lead Platform Engineer",
        summary:
            "Community-driven ecosystem connecting writers, readers, and publishers with blockchain-backed IP protection and smart manuscript matching.",
        impact: [
            "Empowered authors with verifiable ownership and analytics around readership and pitching.",
            "Enabled publishers to surface new voices quickly with automated manuscript evaluation workflows.",
        ],
        highlights: [
            "Built NestJS microservices orchestrating manuscript ingestion, matching, and analytics.",
            "Designed React front-end experiences for authors, reviewers, and publishers.",
            "Containerized services with Docker and deployed scalable workloads on AWS ECS.",
        ],
        stack: ["NestJS", "Node.js", "React", "PostgreSQL", "Blockchain", "Docker", "AWS ECS"],
    },
    {
        id: "03",
        title: "Promptabl.ai · AI Prompt Management",
        role: "Principal Backend Engineer",
        summary:
            "AI-powered platform that organizes, evaluates, and deploys LLM prompts for teams building intelligent automations.",
        impact: [
            "Centralized prompt version control and evaluation, improving collaboration between product and ML stakeholders.",
            "Streamlined deployment of prompts into business workflows through reusable APIs and packaging.",
        ],
        highlights: [
            "Developed FastAPI services handling prompt cataloging, testing pipelines, and governance.",
            "Implemented React-based workspace for reusable templates, analytics, and approvals.",
            "Provisioned AWS ECS infrastructure with automated CI/CD and Postgres-backed storage.",
        ],
        stack: ["FastAPI", "Python", "React", "PostgreSQL", "AWS ECS"],
    },
    {
        id: "04",
        title: "Vigtec · Real-Time Stock Analytics",
        role: "Fullstack Engineer",
        summary:
            "Real-time investment analytics platform delivering live market insights, algorithmic signals, and personalized trading dashboards.",
        impact: [
            "Equipped traders with streaming market data and configurable alerts to act faster.",
            "Reduced manual research effort by centralizing dashboards and algorithmic signal monitoring.",
        ],
        highlights: [
            "Created Angular 9 front-end dashboards with live data visualizations and alerting.",
            "Built .NET Core APIs optimized with SQL Server stored procedures for low-latency reads.",
            "Deployed services on Azure with autoscaling and secure data access patterns.",
        ],
        stack: ["Angular 9", ".NET Core", "SQL Server", "Azure"],
    },
    {
        id: "05",
        title: "Sicuro · Cloud Compliance Platform",
        role: "Cloud Engineer",
        summary:
            "Automated security scan and compliance reporting platform for AWS and Azure environments.",
        impact: [
            "Eliminated repetitive manual audits with scheduled compliance assessments and reporting.",
            "Provided continuous visibility into drift and posture across multi-cloud estates.",
        ],
        highlights: [
            "Engineered Node.js and Python services orchestrating assessment workflows and remediation guidance.",
            "Integrated IAM and Azure AD for secure authentication and least-privilege controls.",
            "Automated reporting pipelines covering evidence collection, scoring, and stakeholder dashboards.",
        ],
        stack: ["Node.js", "Python", "AWS", "Azure", "IAM", "Azure AD"],
    },
    {
        id: "06",
        title: "CycleSense · Health & Cycle Tracking App",
        role: "Lead Mobile Engineer",
        summary:
            "Cloud-based reproductive health application predicting menstrual cycles and fertility windows using AI-driven analytics.",
        impact: [
            "Delivered precise, privacy-first health insights accessible across iOS and Android.",
            "Met HIPAA-ready data design requirements with secure data flows and consent management.",
        ],
        highlights: [
            "Built cross-platform mobile experience in React Native with offline-first data handling.",
            "Developed Firebase Cloud Functions powering AI prediction pipelines and notifications.",
            "Implemented Firestore data models with encrypted storage and access controls.",
        ],
        stack: ["React Native", "Firebase Cloud Functions", "Firestore", "AI/ML"],
    },
    {
        id: "07",
        title: "AutoSupport AI · Customer Support Automation",
        role: "AI Platform Engineer",
        summary:
            "GenAI-driven support automation system leveraging LangChain and MCP to resolve customer queries autonomously.",
        impact: [
            "Cut support resolution times with automated triage, enrichment, and task execution.",
            "Enabled 24/7 intelligent support coverage without linear headcount growth.",
        ],
        highlights: [
            "Composed conversational flows with LangChain agents backed by retrieval pipelines.",
            "Connected backend task execution through MCP and orchestrated workflows with n8n.",
            "Integrated AWS Lambda for elastic scaling and secure hand-offs to human agents.",
        ],
        stack: ["LangChain", "MCP", "n8n", "AWS Lambda", "Node.js"],
    },
    {
        id: "08",
        title: "DocuMind AI · Document Intelligence",
        role: "Principal Backend Engineer",
        summary:
            "Enterprise-grade document analysis platform using Retrieval-Augmented Generation to summarize, search, and extract insights.",
        impact: [
            "Accelerated legal, finance, and compliance reviews by surfacing critical findings automatically.",
            "Unified search and summarization across large document sets with auditable context.",
        ],
        highlights: [
            "Implemented FastAPI and LangChain services for ingestion, vectorization, and query orchestration.",
            "Integrated PostgreSQL with vector databases for hybrid search and metadata management.",
            "Deployed multi-cloud on Azure and AWS to meet enterprise residency requirements.",
        ],
        stack: ["FastAPI", "LangChain", "PostgreSQL", "Vector DBs", "Azure", "AWS"],
    },
    {
        id: "09",
        title: "EngageFlow · Cloud Contact Center",
        role: "Cloud Solutions Engineer",
        summary:
            "Cloud-based contact center platform built on Amazon Connect with automation and Microsoft Teams integration.",
        impact: [
            "Improved agent efficiency with intelligent routing, automation, and knowledge surfacing.",
            "Delivered a scalable communication backbone with unified identity and deployment automation.",
        ],
        highlights: [
            "Developed AWS Lambda workflows orchestrating Amazon Connect call flows and CRM actions.",
            "Integrated Azure AD for enterprise-grade single sign-on and user lifecycle management.",
            "Automated infrastructure using AWS CloudFormation and CodePipeline for repeatable rollouts.",
        ],
        stack: ["Amazon Connect", "AWS Lambda", "Azure AD", "CloudFormation", "CodePipeline"],
    },
    {
        id: "10",
        title: "CampaignIQ · Campaign Management Platform",
        role: "Senior Fullstack Engineer",
        summary:
            "Large-scale campaign management system delivering realtime analytics, automated outreach, and engagement tracking.",
        impact: [
            "Equipped campaign teams with dashboards that track engagement and optimize outreach in realtime.",
            "Automated pipeline workflows, reducing manual coordination across marketing and field teams.",
        ],
        highlights: [
            "Built ReactJS front-end with modular analytics widgets and live collaboration.",
            "Implemented Node.js services and AWS Lambda automations for outreach and data sync.",
            "Instrumented performance monitoring and alerting with Datadog.",
        ],
        stack: ["React", "Node.js", "AWS Lambda", "Datadog", "AWS"],
    },
    {
        id: "11",
        title: "CYGOV · Cybersecurity Compliance Platform",
        role: "Platform Engineer",
        summary:
            "SaaS platform automating cybersecurity assessments and governance tracking across AWS and Azure estates.",
        impact: [
            "Helped enterprises maintain regulatory compliance with always-on assessments and evidence collection.",
            "Improved visibility for security teams with dashboards covering standards, remediation, and ownership.",
        ],
        highlights: [
            "Developed Node.js backend using AWS Amplify and AppSync for realtime compliance data flows.",
            "Delivered Angular front-end experiences tailored for security, governance, and executive stakeholders.",
            "Integrated Azure AD for single sign-on and cross-cloud entitlement management.",
        ],
        stack: ["Node.js", "AWS Amplify", "AppSync", "Angular", "Azure AD", "AWS"],
    },
];

const focusAreas = [
    {
        title: "Platform Reliability",
        description: "Design SLOs, observability, and automated remediation for financial, health, and SaaS workloads that cannot fail.",
    },
    {
        title: "Multi-Cloud Infrastructure",
        description: "Ship reusable landing zones, container platforms, and pipelines across AWS and Azure without slowing product teams.",
    },
    {
        title: "Intelligent Automation",
        description: "Blend AI, event-driven workflows, and secure integrations so operations scale faster than headcount growth.",
    },
];

const toolbelt = [
    "AWS",
    "Azure",
    "Fastify",
    "NestJS",
    "FastAPI",
    "Node.js",
    "Python",
    ".NET Core",
    "React",
    "Next.js",
    "Angular",
    "React Native",
    "LangChain",
    "MCP",
    "n8n",
    "AWS Lambda",
    "Amazon Connect",
    "AWS ECS",
    "Docker",
    "PostgreSQL",
    "SQL Server",
    "Firestore",
    "Datadog",
    "CloudFormation",
    "CodePipeline",
    "AppSync",
    "Azure AD",
];

const CASES_PER_PAGE = 2;

const Work = () => {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(caseStudies.length / CASES_PER_PAGE);

    const paginatedCaseStudies = useMemo(() => {
        const start = (page - 1) * CASES_PER_PAGE;
        return caseStudies.slice(start, start + CASES_PER_PAGE);
    }, [page]);

    const goToPrevious = () => setPage((prev) => Math.max(1, prev - 1));
    const goToNext = () => setPage((prev) => Math.min(totalPages, prev + 1));

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_1.1fr]">
                    <div className="space-y-12">
                        <div className="space-y-5">
                            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                                Backend · Cloud · Platform
                            </span>
                            <h1 className="text-4xl font-semibold text-white md:text-5xl">
                                Deploying resilient services and cloud platforms that teams trust to run critical workloads.
                            </h1>
                            <p className="max-w-xl text-base text-white/70">
                                I help product teams go faster by owning everything between commit and production: infrastructure, runtime tooling, automation, and the observability layer that keeps it all measurable. Here is a snapshot of recent engagements.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {focusAreas.map((area) => (
                                <div key={area.title} className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur">
                                    <p className="text-sm uppercase tracking-[0.2em] text-accent">{area.title}</p>
                                    <p className="mt-3 text-white/70">{area.description}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-white/40">Toolbelt</p>
                            <div className="mt-4 flex flex-wrap gap-3">
                                {toolbelt.map((tool) => (
                                    <span
                                        key={tool}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {paginatedCaseStudies.map((item) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 transition duration-300 hover:border-accent/80 hover:shadow-[0_40px_120px_rgba(14,165,233,0.15)]"
                            >
                                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-accent/30 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                                    <span>{item.id}</span>
                                    <span className="text-right text-white/60">{item.role}</span>
                                </div>
                                <h2 className="mt-6 text-2xl font-semibold text-white md:text-3xl">{item.title}</h2>
                                <p className="mt-3 text-base text-white/70">{item.summary}</p>

                                <div className="mt-6 grid gap-6 md:grid-cols-2">
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.2em] text-white/40">Impact</p>
                                        <ul className="mt-3 space-y-2 text-sm text-white/70">
                                            {item.impact.map((point) => (
                                                <li key={point} className="leading-relaxed text-white/70">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.2em] text-white/40">What I built</p>
                                        <ul className="mt-3 space-y-2 text-sm text-white/70">
                                            {item.highlights.map((highlight) => (
                                                <li key={highlight} className="leading-relaxed text-white/70">
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {item.stack.map((tech) => (
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
                        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur">
                            <button
                                onClick={goToPrevious}
                                disabled={page === 1}
                                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/70 transition hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/30"
                            >
                                Previous
                            </button>
                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }).map((_, index) => {
                                    const pageNumber = index + 1;
                                    const isActive = pageNumber === page;

                                    return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => setPage(pageNumber)}
                                            className={`h-9 w-9 rounded-full border text-sm font-medium transition ${
                                                isActive
                                                    ? "border-accent bg-accent text-black shadow-lg shadow-accent/30"
                                                    : "border-white/15 text-white/60 hover:border-accent/40 hover:text-accent"
                                            }`}
                                        >
                                            {pageNumber}
                                        </button>
                                    );
                                })}
                            </div>
                            <button
                                onClick={goToNext}
                                disabled={page === totalPages}
                                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/70 transition hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/30"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
