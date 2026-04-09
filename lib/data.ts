export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  role: string;
  summary: string;
  impact: string[];
  highlights: string[];
  stack: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface DetailItem {
  label: string;
  value: string;
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutParagraphs = [
  "I'm Noor — a cloud engineer and backend developer based in Karachi, Pakistan. I design serverless APIs, automate infrastructure, and integrate AI into production systems.",
  "Most of my work lives in AWS — Lambda, CDK, API Gateway, CloudFormation, ECS, Cognito, Connect. I build primarily with Node.js and Python, and I care about infrastructure that's automated, observable, and doesn't wake anyone up at 3am.",
  "I've cut deployment times by 75%, reduced cloud costs by 25%, and delivered platforms with 99.95% uptime to enterprise clients. I work with distributed teams and I don't need hand-holding.",
];

export const aboutDetails: DetailItem[] = [
  { label: "Name", value: "Noor Nabi" },
  { label: "Location", value: "Karachi, Pakistan" },
  { label: "Timezone", value: "UTC+5 (flexible)" },
  { label: "Experience", value: "4+ Years" },
  { label: "Education", value: "B.Sc. Computer Science — UET (2018–2022)" },
  { label: "Status", value: "Available for remote work" },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Cloud Engineer",
    company: "Rulrr",
    location: "Miami, Florida (Remote)",
    period: "July 2025 – Present",
    bullets: [
      "Designed scalable cloud infrastructure using AWS CDK across dev, staging, and production",
      "Built Node.js backend services for data ingestion, analytics, and automated content workflows",
      "Integrated OpenAI into client-facing systems for personalized marketing content",
      "Created secure RESTful APIs with Lambda, API Gateway, and Cognito",
      "Developed CI/CD pipelines with GitHub Actions",
    ],
    tags: ["AWS CDK", "Node.js", "Lambda", "OpenAI", "GitHub Actions", "Cognito"],
  },
  {
    role: "Backend Engineer",
    company: "Odea Integrations",
    location: "Remote",
    period: "Apr 2025 – Jun 2025",
    bullets: [
      "Developed backend microservices with Node.js, Lambda, API Gateway, and PostgreSQL — 40% faster API response times",
      "Implemented modular Lambda Layers and secure credential management with Secrets Manager",
      "Automated CI/CD with Bitbucket Pipelines — deployment time from 20 min to under 5",
      "Applied Cognito-based RBAC to production services",
    ],
    tags: ["Node.js", "AWS Lambda", "PostgreSQL", "Bitbucket Pipelines", "Cognito"],
  },
  {
    role: "Backend Engineer",
    company: "WeUno Technologies",
    location: "Karachi, Pakistan",
    period: "Feb 2024 – Mar 2025",
    bullets: [
      "Led backend development of logistics and client-facing platforms using NestJS",
      "Designed event-driven and RESTful APIs with SQS, Kinesis, and third-party integrations",
      "Automated infrastructure provisioning with CloudFormation — 70%+ faster environment setup",
      "Implemented IAM policies, VPC scoping, and secure deployment workflows",
      "Managed frontend hosting via CloudFront + S3, DNS via Route53",
    ],
    tags: ["NestJS", "Node.js", "SQS", "Kinesis", "CloudFormation", "Route53"],
  },
  {
    role: "Software Engineer",
    company: "Icommunix PVT. LTD",
    location: "Lahore, Pakistan",
    period: "May 2022 – Feb 2024",
    bullets: [
      "Sole backend owner of Omni Dashboard — real-time analytics for contact centers",
      "Built serverless APIs with Node.js, Lambda, API Gateway, DynamoDB, and RDS",
      "Reduced infrastructure costs by 25% by replacing Step Functions with optimized logic",
      "Designed real-time data streaming with Amazon Connect",
      "Delivered to 2 enterprise clients with 99.95% uptime",
    ],
    tags: ["Node.js", "Lambda", "DynamoDB", "Amazon Connect", "Serverless"],
  },
  {
    role: "Jr. Software Engineer",
    company: "PhpLift",
    location: "Karachi, Pakistan",
    period: "Jun 2020 – May 2022",
    bullets: [
      "Developed internal dashboards, APIs, and automation tools with Node.js and PHP",
      "Enhanced legacy systems for performance and readability",
      "Supported QA and DevOps with testing, debugging, and build automation",
    ],
    tags: ["Node.js", "PHP", "REST APIs"],
  },
];

export const projects: ProjectEntry[] = [
  {
    id: "01",
    title: "WineFi \u00b7 Fintech Wine Investment Platform",
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
    title: "Libraro \u00b7 Community Publishing Platform",
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
    title: "Promptabl.ai \u00b7 AI Prompt Management",
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
    title: "Vigtec \u00b7 Real-Time Stock Analytics",
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
    title: "Sicuro \u00b7 Cloud Compliance Platform",
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
    title: "CycleSense \u00b7 Health & Cycle Tracking App",
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
    title: "AutoSupport AI \u00b7 Customer Support Automation",
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
    title: "DocuMind AI \u00b7 Document Intelligence",
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
    title: "EngageFlow \u00b7 Cloud Contact Center",
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
    title: "CampaignIQ \u00b7 Campaign Management Platform",
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
    title: "CYGOV \u00b7 Cybersecurity Compliance Platform",
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

export const skills: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Fastify",
      "Python",
      "FastAPI",
      "Django",
      "PHP",
      "TypeScript",
    ],
  },
  {
    category: "AWS",
    items: [
      "Lambda",
      "API Gateway",
      "CDK",
      "CloudFormation",
      "Cognito",
      "RDS",
      "S3",
      "ECS",
      "EC2",
      "VPC",
      "CloudWatch",
      "Secrets Manager",
      "SQS",
      "Kinesis",
      "Amazon Connect",
      "CloudFront",
      "Route53",
    ],
  },
  {
    category: "GCP",
    items: ["Cloud Functions", "Firestore", "Compute Engine"],
  },
  {
    category: "DevOps & Automation",
    items: [
      "Docker",
      "GitHub Actions",
      "Bitbucket Pipelines",
      "AWS CDK",
      "CloudFormation",
      "Bash",
    ],
  },
  {
    category: "AI & Integrations",
    items: [
      "OpenAI",
      "11Labs",
      "Deepgram",
      "RAG",
      "LangChain",
      "Prompt Engineering",
      "Twilio",
      "Pipecat",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
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
