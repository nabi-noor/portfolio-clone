export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}

export interface ProjectEntry {
  title: string;
  meta: string;
  blurb: string;
  stack: string[];
  featured: boolean;
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroTagline =
  "I build serverless systems on AWS that stay fast, observable, and online.";

export const aboutParagraphs = [
  "I'm a cloud and backend engineer based in Karachi, Pakistan. For the past four-plus years I've designed serverless APIs, automated infrastructure, and wired AI into production systems for teams in fintech, health, logistics, and enterprise SaaS.",
  "Most of my work lives in AWS — Lambda, CDK, API Gateway, ECS, Cognito, Amazon Connect — built with Node.js and Python. I care about infrastructure that's automated, observable, and doesn't wake anyone up at 3am: I've cut deployment times by 75%, reduced cloud costs by 25%, and kept platforms at 99.95% uptime for enterprise clients.",
  "I work remotely with distributed teams across time zones, and I'm comfortable owning a system end to end — from architecture and IaC through CI/CD, monitoring, and the on-call runbook.",
];

export const experience: ExperienceEntry[] = [
  {
    role: "Cloud Engineer",
    company: "Rulrr",
    location: "Miami, FL (Remote)",
    period: "2025 — Present",
    description:
      "Designing AWS CDK infrastructure across dev, staging, and production, and building Node.js services for data ingestion, analytics, and OpenAI-powered content workflows. Shipping secure REST APIs with Lambda, API Gateway, and Cognito, delivered through GitHub Actions pipelines.",
    tags: ["AWS CDK", "Node.js", "Lambda", "OpenAI", "GitHub Actions"],
  },
  {
    role: "Backend Engineer",
    company: "Odea Integrations",
    location: "Remote",
    period: "2025",
    description:
      "Built backend microservices with Node.js, Lambda, and PostgreSQL, cutting API response times by 40%. Automated CI/CD with Bitbucket Pipelines, taking deployments from 20 minutes to under 5, and applied Cognito-based RBAC across production services.",
    tags: ["Node.js", "Lambda", "PostgreSQL", "Bitbucket Pipelines", "Cognito"],
  },
  {
    role: "Backend Engineer",
    company: "WeUno Technologies",
    location: "Karachi, Pakistan",
    period: "2024 — 2025",
    description:
      "Led backend development of logistics and client-facing platforms on NestJS, designing event-driven APIs over SQS and Kinesis. Automated provisioning with CloudFormation for 70%+ faster environment setup, with IAM policies and VPC scoping throughout.",
    tags: ["NestJS", "SQS", "Kinesis", "CloudFormation", "Route53"],
  },
  {
    role: "Software Engineer",
    company: "Icommunix",
    location: "Lahore, Pakistan",
    period: "2022 — 2024",
    description:
      "Sole backend owner of Omni Dashboard, a real-time analytics platform for contact centers built on Lambda, DynamoDB, and Amazon Connect. Cut infrastructure costs by 25% and delivered 99.95% uptime to two enterprise clients.",
    tags: ["Node.js", "Lambda", "DynamoDB", "Amazon Connect"],
  },
  {
    role: "Jr. Software Engineer",
    company: "PhpLift",
    location: "Karachi, Pakistan",
    period: "2020 — 2022",
    description:
      "Built internal dashboards, APIs, and automation tools with Node.js and PHP, modernized legacy systems, and supported QA and DevOps with testing, debugging, and build automation.",
    tags: ["Node.js", "PHP", "REST APIs"],
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "WineFi",
    meta: "Backend & Cloud Engineer",
    blurb:
      "Fine-wine investment platform for a London fintech — Fastify APIs with realtime portfolio tracking and risk indicators behind a trading-style Next.js investor experience.",
    stack: ["Fastify", "Node.js", "Next.js", "PostgreSQL", "AWS"],
    featured: true,
  },
  {
    title: "DocuMind AI",
    meta: "Principal Backend Engineer",
    blurb:
      "Enterprise RAG platform that summarizes, searches, and extracts insights from large document sets — FastAPI and LangChain services with hybrid vector search, deployed multi-cloud for data residency.",
    stack: ["FastAPI", "LangChain", "PostgreSQL", "Vector DBs", "AWS", "Azure"],
    featured: true,
  },
  {
    title: "AutoSupport AI",
    meta: "AI Platform Engineer",
    blurb:
      "GenAI support automation that resolves customer queries autonomously — LangChain agents over retrieval pipelines, task execution through MCP, and workflows orchestrated with n8n on Lambda.",
    stack: ["LangChain", "MCP", "n8n", "AWS Lambda", "Node.js"],
    featured: true,
  },
  {
    title: "Libraro",
    meta: "Lead Platform Engineer",
    blurb:
      "Community publishing platform connecting writers, readers, and publishers — NestJS microservices for manuscript ingestion and matching, with blockchain-backed IP protection on AWS ECS.",
    stack: ["NestJS", "React", "PostgreSQL", "Blockchain", "AWS ECS"],
    featured: true,
  },
  {
    title: "EngageFlow",
    meta: "Cloud Solutions Engineer",
    blurb:
      "Cloud contact center built on Amazon Connect — Lambda workflows orchestrating call flows and CRM actions, Azure AD single sign-on, and repeatable rollouts via CloudFormation and CodePipeline.",
    stack: ["Amazon Connect", "AWS Lambda", "Azure AD", "CloudFormation"],
    featured: true,
  },
  {
    title: "Promptabl.ai",
    meta: "Principal Backend Engineer",
    blurb:
      "Prompt management platform for teams building LLM automations — FastAPI services for cataloging, evaluating, and deploying prompts, with a React workspace for templates and approvals.",
    stack: ["FastAPI", "Python", "React", "PostgreSQL", "AWS ECS"],
    featured: true,
  },
  {
    title: "Sicuro",
    meta: "Cloud Engineer",
    blurb:
      "Automated security scanning and compliance reporting across AWS and Azure estates.",
    stack: ["Node.js", "Python", "AWS", "Azure"],
    featured: false,
  },
  {
    title: "Vigtec",
    meta: "Fullstack Engineer",
    blurb:
      "Real-time stock analytics with live market data, algorithmic signals, and low-latency .NET APIs on Azure.",
    stack: ["Angular", ".NET Core", "SQL Server", "Azure"],
    featured: false,
  },
  {
    title: "CycleSense",
    meta: "Lead Mobile Engineer",
    blurb:
      "Privacy-first cycle-tracking app with AI-driven predictions, built in React Native on Firebase with HIPAA-ready data design.",
    stack: ["React Native", "Firebase", "Firestore"],
    featured: false,
  },
  {
    title: "CampaignIQ",
    meta: "Senior Fullstack Engineer",
    blurb:
      "Large-scale campaign management system with realtime analytics, automated outreach, and Datadog-instrumented monitoring.",
    stack: ["React", "Node.js", "AWS Lambda", "Datadog"],
    featured: false,
  },
  {
    title: "CYGOV",
    meta: "Platform Engineer",
    blurb:
      "Cybersecurity compliance SaaS with always-on assessments and realtime data flows over AWS Amplify and AppSync.",
    stack: ["Node.js", "AWS Amplify", "AppSync", "Angular"],
    featured: false,
  },
];

export const contactInfo = {
  email: "panhwarnabinoor@gmail.com",
  phone: "+92 336 0080304",
  whatsapp: "+13025561466",
  github: "https://github.com/nabi-noor",
  linkedin: "https://linkedin.com/in/nabi-noor",
  website: "https://noornabi.pro",
};
