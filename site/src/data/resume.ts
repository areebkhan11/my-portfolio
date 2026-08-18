export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
}

export const resume = {
  name: "Areeb Khan",
  initials: "AK",
  title: "Senior Full Stack Engineer (MERN)",
  location: "Karachi, Pakistan",
  email: "areebkhan123123@gmail.com",
  phone: "+92 306 2306838",
  linkedin: "https://www.linkedin.com/in/areeb-khan-33808716a",
  yearsExperience: "5+",
  summary:
    "Senior Full Stack Engineer with 5+ years of experience building scalable web applications, microservices, and systems using the MERN stack. Proven expertise in React, Next.js, Node.js, and NestJS, with strong experience in system design, API development, and cloud deployments on AWS. Demonstrated leadership in managing teams, improving system performance, and delivering high-quality production systems.",
  tagline: "I build production-grade web platforms, AI-driven systems, and the teams that ship them.",

  skills: [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python"],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Redux",
        "Redux Toolkit",
        "React Query",
        "Tailwind CSS",
        "HTML5",
        "PWA",
        "Responsive Design",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "NestJS",
        "Express.js",
        "GraphQL",
        "REST APIs",
        "API Gateway",
        "WebSockets",
        "Microservices",
      ],
    },
    {
      category: "Databases",
      items: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "DynamoDB",
        "Firebase",
        "Supabase",
        "Redis",
      ],
    },
    {
      category: "DevOps",
      items: [
        "Docker",
        "AWS EC2",
        "AWS Lambda",
        "AWS ECS",
        "AWS S3",
        "AWS RDS",
        "Jenkins",
        "GitHub Actions",
        "Nginx",
        "PM2",
      ],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Elasticsearch", "Socket.io", "Mocha", "Jest"],
    },
    {
      category: "Concepts",
      items: [
        "System Design",
        "Event-Driven Architecture",
        "API Optimization",
        "Performance Tuning",
        "Scalable Systems",
      ],
    },
  ] satisfies SkillGroup[],

  experience: [
    {
      role: "Lead Full Stack Developer (MERN)",
      company: "Strugbits",
      start: "Dec 2023",
      end: "Present",
      current: true,
      bullets: [
        "Led development of scalable web applications using React.js, Next.js, and Node.js, improving performance by 30%+",
        "Architected microservices backend systems handling high concurrent traffic",
        "Implemented advanced state management using Redux Toolkit and React Query",
        "Integrated Elasticsearch with MongoDB to enable fast search functionality",
        "Built and managed CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 50%",
        "Deployed containerized applications using Docker and AWS ECS, ensuring scalability and reliability",
        "Managed cloud infrastructure on AWS (EC2, Lambda, ECS) with Nginx for optimized performance",
        "Mentored and led engineering teams, improving delivery efficiency and code quality",
      ],
    },
    {
      role: "MERN Stack Developer",
      company: "Nexomos",
      start: "Dec 2022",
      end: "Dec 2023",
      bullets: [
        "Developed full-stack applications using the MERN stack with scalable backend architecture",
        "Built optimized Node.js services, improving API response times by 25%",
        "Implemented Redux (Thunk) for complex frontend state management",
        "Designed and optimized database schemas across MongoDB and PostgreSQL",
        "Wrote unit tests using Mocha and Chai to strengthen codebase reliability",
        "Integrated CI/CD pipelines and deployed applications on AWS infrastructure",
        "Worked on Docker-based deployments and server configurations using Nginx",
      ],
    },
    {
      role: "MERN Stack Developer",
      company: "Zaavia",
      start: "Jan 2021",
      end: "Dec 2022",
      bullets: [
        "Built responsive web applications using React.js and Next.js",
        "Developed RESTful APIs using Node.js and Express.js",
        "Integrated GraphQL APIs and third-party services",
        "Developed Progressive Web Applications (PWAs)",
        "Managed containerized environments using Docker",
        "Configured Nginx for production deployments",
      ],
    },
  ] satisfies ExperienceEntry[],

  achievements: [
    "Improved system performance by 30–40% across multiple production applications",
    "Reduced deployment time by 50% through CI/CD automation",
    "Led and mentored development teams delivering scalable production systems",
    "Built systems handling thousands of concurrent users",
    "Implemented AI-driven solutions, including OCR pipelines and RAG-based systems",
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      school: "Iqra University",
      location: "Karachi, Pakistan",
      start: "2017",
      end: "2021",
    },
  ] satisfies EducationEntry[],
};
