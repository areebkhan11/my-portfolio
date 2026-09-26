export type ProjectCategory =
  | "AI & Automation"
  | "Healthtech"
  | "Fintech & Compliance"
  | "E-commerce"
  | "Enterprise SaaS"
  | "Recruitment & Talent"
  | "Media & Branding"
  | "POS & Retail";

export const allCategories: ProjectCategory[] = [
  "AI & Automation",
  "Healthtech",
  "Fintech & Compliance",
  "E-commerce",
  "Enterprise SaaS",
  "Recruitment & Talent",
  "Media & Branding",
  "POS & Retail",
];

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  categories: ProjectCategory[];
  role: string;
  year: string;
  cover: string | null;
  gallery: string[];
  liveUrl?: string;
  overview: string;
  challenge?: string;
  solution?: string;
  highlights: string[];
  stack: string[];
  featured: boolean;
  /** Temporarily hide from the site without deleting the project data. */
  hidden?: boolean;
}

const allProjects: Project[] = [
  {
    slug: "synko",
    title: "Synko",
    tagline: "AI-powered POS & business management platform",
    categories: ["AI & Automation", "POS & Retail", "Enterprise SaaS"],
    role: "Team Lead",
    year: "2024",
    cover: "/images/synko-1.jpg",
    gallery: ["/images/synko-1.jpg", "/images/synko-2.jpg", "/images/synko-3.jpg"],
    liveUrl: "https://synko.tech",
    overview:
      "A complete cloud-based POS and business management platform built for restaurants, retail stores, franchises, and multi-store businesses. Synko centralizes billing, inventory, online ordering, table management, employee tracking, and payment processing into a single dashboard, backed by real-time analytics and AI-driven sales insights.",
    challenge:
      "Multi-store, multi-format businesses (restaurants, retail, franchises) needed one platform that could handle high concurrent transaction volume across locations without fragmenting data or slowing down checkout.",
    solution:
      "As team lead, I directed the architecture of a microservices backend capable of handling high concurrent traffic, built the core payment integrations, and shipped a system now used across multiple live business operations — from kiosk and QR table ordering to kitchen display systems and live delivery-driver tracking.",
    highlights: [
      "Led development of the multi-store POS platform end-to-end, from architecture to delivery",
      "Built scalable backend systems and payment integrations handling real transaction volume",
      "Shipped kiosk ordering, QR table ordering, and kitchen display systems for restaurant operations",
      "Delivered real-time delivery management with live driver tracking",
      "Added AI-driven sales insights and real-time analytics dashboards for operators",
    ],
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS ECS",
      "WebSockets",
      "Stripe",
    ],
    featured: true,
  },
  {
    slug: "goodpathai",
    title: "GoodPathAI",
    tagline: "AI-driven therapist discovery & patient session platform",
    categories: ["AI & Automation", "Healthtech"],
    role: "Senior Full Stack Engineer",
    year: "2024",
    cover: "/images/goodpathai-1.jpg",
    gallery: ["/images/goodpathai-1.jpg", "/images/goodpathai-2.jpg", "/images/goodpathai-3.jpg"],
    liveUrl: "https://www.goodpathai.com",
    overview:
      "An AI-powered therapist discovery and session management platform that helps patients find the most suitable therapist through intelligent recommendations, then manages the full journey — verification, booking, secure video sessions, and payments.",
    challenge:
      "Matching patients with the right therapist, verifying therapist credentials at scale, and giving both sides a secure, real-time way to meet — while keeping sensitive medical documentation processing accurate and fast.",
    solution:
      "I built OCR pipelines to extract and validate therapist credentials and medical documents, developed a RAG-based recommendation system to intelligently match patients with therapists, and integrated the Zoom API for real-time consultation sessions — all on top of scalable backend services built for real-time communication.",
    highlights: [
      "Built OCR pipelines to extract and process medical and credentialing documents",
      "Developed a RAG-based AI system for intelligent therapist recommendations",
      "Integrated Zoom APIs to power secure, real-time consultation sessions",
      "Designed automatic patient-to-therapist matching based on needs and preferences",
      "Built scalable backend services supporting bookings, payments, and AI-generated session transcriptions",
    ],
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "Python",
      "MongoDB",
      "Zoom API",
      "OCR / RAG pipelines",
      "WebSockets",
      "AWS",
    ],
    featured: true,
  },
  {
    slug: "launchmystore",
    title: "LaunchMyStore",
    tagline: "No-code eCommerce store builder platform",
    categories: ["E-commerce", "Enterprise SaaS"],
    role: "Full Stack Engineer",
    year: "2023",
    cover: "/images/launchmystore-1.jpg",
    gallery: ["/images/launchmystore-1.jpg"],
    liveUrl: "https://launchmystore.io",
    overview:
      "A multipurpose eCommerce platform, similar in spirit to Shopify, that lets businesses create, manage, and scale online stores without writing code — customizable storefronts, drag-and-drop store builders, multi-payment gateway support, inventory and order management, and global selling capabilities.",
    solution:
      "I developed the platform on NestJS and PostgreSQL with a modular, scalable backend architecture, and implemented WebSockets to power real-time features across the storefront and merchant dashboard — from live order updates to inventory sync.",
    highlights: [
      "Developed a scalable platform architecture using NestJS and PostgreSQL",
      "Implemented WebSockets for real-time storefront and dashboard features",
      "Designed a modular backend that supports drag-and-drop store building and multi-payment gateways",
      "Supported multilingual storefronts and global selling capabilities",
    ],
    stack: ["NestJS", "PostgreSQL", "WebSockets", "React.js", "Docker", "AWS"],
    featured: true,
  },
  {
    slug: "studiox-ai",
    title: "StudioX AI",
    tagline: "No-code AI for business — build your own AI workforce",
    categories: ["AI & Automation", "Enterprise SaaS"],
    role: "Full Stack Engineer",
    year: "2024",
    cover: null,
    gallery: [],
    liveUrl: "https://www.studiox-ai.com",
    overview:
      "An enterprise-focused, no-code AI platform that lets companies build and manage their own AI agents — turning operational data like manuals, technical specs, and troubleshooting guides into agents that provide instant, contextual assistance across a business.",
    challenge:
      "Enterprises wanted AI agents that could be trained on their own operational data and deployed across the channels teams already use, without requiring engineering resources for every new use case — while still keeping a human in the loop.",
    solution:
      "Built on generative AI, LLMs, and computer vision, the platform lets non-technical teams stand up agents that ingest knowledge and automate workflows through natural language, deployable via SMS, web, phone, email, and WhatsApp, with both cloud and on-premise options for IT and data-privacy requirements.",
    highlights: [
      "No-code agent builder — agents ingest knowledge and automate workflows without engineering resources",
      "Multi-channel deployment across SMS, web, phone, email, and WhatsApp",
      "Real-time operational data ingestion from equipment like factory-floor machinery",
      "Human-in-the-loop design so teams review AI output rather than hand over full control",
      "Flexible cloud and on-premise deployment with multi-language support",
    ],
    stack: ["Next.js", "Node.js", "Python", "LLM integrations", "Vector database", "AWS"],
    featured: false,
    hidden: true,
  },
  {
    slug: "reskue",
    title: "Reskue",
    tagline: "AI-powered job search & professional networking platform",
    categories: ["AI & Automation", "Recruitment & Talent"],
    role: "Full Stack Engineer",
    year: "2023",
    cover: "/images/reskue-1.jpg",
    gallery: ["/images/reskue-1.jpg"],
    liveUrl: "https://www.reskue.tech/en",
    overview:
      "A professional networking and job search platform, similar in spirit to LinkedIn, that connects job seekers with employers through AI-powered job recommendations and smart matching — professional profiles, applications, recruiter connections, and real-time messaging in one place.",
    solution:
      "I built the platform's core networking and search experience, wiring AI-driven recommendations into the job-matching flow and building real-time messaging so candidates and recruiters could communicate without leaving the platform.",
    highlights: [
      "Built AI-powered job recommendation and smart-matching logic",
      "Enabled professional profile creation, applications, and recruiter connections",
      "Implemented real-time messaging and networking features",
      "Built application management tooling for both job seekers and recruiters",
    ],
    stack: ["React.js", "Next.js", "Node.js", "MongoDB", "WebSockets", "AWS"],
    featured: false,
  },
  {
    slug: "fpw-media",
    title: "FPW Media",
    tagline: "Creative media & brand management platform",
    categories: ["Media & Branding", "Enterprise SaaS"],
    role: "Full Stack Engineer",
    year: "2023",
    cover: "/images/fpwmedia-1.jpg",
    gallery: ["/images/fpwmedia-1.jpg", "/images/fpwmedia-2.jpg", "/images/fpwmedia-3.jpg"],
    liveUrl: "https://fpwmedia.com",
    overview:
      "A modern media management and creative branding platform for businesses scaling their digital presence through high-quality content, branding, and production services — streamlining brand management, video production, web development, merchandise design, and marketing workflows.",
    solution:
      "I built the centralized creative-operations layer that ties brand management, production workflows, and asset management together so distributed creative teams could collaborate without losing track of assets or approvals.",
    highlights: [
      "Centralized brand management, video production, and merchandise design workflows",
      "Built asset management tooling for distributed creative teams",
      "Streamlined marketing and production request pipelines",
      "Delivered a platform serving clients across manufacturing, healthcare, and retail industries",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "REST APIs"],
    featured: false,
  },
  {
    slug: "comply",
    title: "Comply",
    tagline: "AI-powered regulatory compliance platform for financial firms",
    categories: ["Fintech & Compliance", "Enterprise SaaS", "AI & Automation"],
    role: "Full Stack Engineer",
    year: "2023",
    cover: "/images/comply-1.jpg",
    gallery: ["/images/comply-1.jpg", "/images/comply-2.jpg"],
    liveUrl: "https://www.comply.com",
    overview:
      "A compliance management platform for financial firms and enterprises that automates regulatory workflows, monitors employee activity, manages certifications and disclosures, tracks risk and conflicts of interest, and reports through centralized dashboards.",
    challenge:
      "Financial firms needed to replace manual, spreadsheet-driven compliance processes with something that could monitor activity continuously, flag risk in real time, and produce a defensible audit trail.",
    solution:
      "I worked on the automated regulatory workflow engine and reporting layer, building the case management and disclosure-tracking features that let compliance teams move from reactive checklists to real-time monitoring.",
    highlights: [
      "Automated regulatory workflows including trade monitoring and code-of-ethics tracking",
      "Built certification, disclosure, and conflicts-of-interest management tooling",
      "Delivered real-time reporting dashboards for compliance teams",
      "Maintained secure, auditable records on scalable cloud infrastructure",
    ],
    stack: ["React.js", "Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    featured: false,
  },
  {
    slug: "panacea",
    title: "Panacea",
    tagline: "HIPAA-compliant blood bank & transfusion management system",
    categories: ["Healthtech", "Fintech & Compliance"],
    role: "MERN Stack Developer",
    year: "2022",
    cover: "/images/panacea-1.jpg",
    gallery: ["/images/panacea-1.jpg", "/images/panacea-2.jpg"],
    liveUrl: "https://zaavia.net/products/blood-bank-software",
    overview:
      "A HIPAA-compliant blood bank and transfusion management system for hospitals, laboratories, and healthcare organizations to securely manage the complete blood lifecycle — from donor registration and collection to testing, inventory tracking, compatibility verification, and transfusion management.",
    challenge:
      "Blood banking involves protected health information at every step, so the system had to guarantee PHI security and full auditability while still being fast enough for real clinical workflows.",
    solution:
      "Built as part of Zaavia's product suite using the MERN stack, with encrypted data handling, role-based access control, and audit logs baked into the architecture so hospitals could stay compliant without slowing down day-to-day operations.",
    highlights: [
      "Built donor registration, blood collection, and inventory-tracking workflows",
      "Implemented compatibility verification and transfusion management features",
      "Secured protected health information with encrypted data handling and RBAC",
      "Built audit logging to support compliance monitoring and hospital integrations",
    ],
    stack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Docker", "Nginx"],
    featured: false,
  },
];

export const projects: Project[] = allProjects.filter((project) => !project.hidden);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
