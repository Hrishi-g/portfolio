export interface Project {
  id: string;
  title: string;
  period?: string;
  description: string;
  bulletPoints?: string[];
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'Mobile';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  projectTitle?: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  details?: string;
}

export const personalData = {
  name: "Hrishikesh Gupta",
  title: "Backend & Full Stack Software Engineer",
  tagline: "Software Engineer experienced in building full-stack applications using Java, Spring Boot, React.js, and PostgreSQL.",
  bio: "Software Engineer with hands-on experience building high-scale digital banking platforms and full-stack personal applications. Currently at TCS working on SBI YONO 2.0, developing backend microservices for deposit journeys serving 100M+ users. Strong expertise in Java, Spring Boot, React.js, PostgreSQL, Redis, Kafka, and Docker.",
  status: "Backend Engineer @ TCS | SBI YONO 2.0",
  location: "Mumbai, India",
  phone: "7021268154",
  email: "hrishikeshrgupta@gmail.com",
  socials: {
    github: "https://github.com/Hrishi-g",
    linkedin: "https://linkedin.com/in/",
    email: "mailto:hrishikeshrgupta@gmail.com"
  }
};

export const projectsData: Project[] = [
  {
    id: "Het-Chat",
    title: "Het-Chat - Real Time Chat Application",
    period: "05/2026 – 07/2026",
    description: "Real-time chat platform with asynchronous event processing, Redis OTP caching, and Cloudflare R2 media storage.",
    bulletPoints: [
      "Built a real-time chat application using Java, Spring Boot, WebSocket, React.js, and Apache Kafka for asynchronous messaging and OTP email processing.",
      "Built an OTP verification flow using Redis with TTL-based temporary data management.",
      "Secured REST APIs and WebSocket connections using Spring Security and JWT authentication.",
      "Used Cloudflare R2 for media storage and Docker Compose to deploy the backend, Kafka, and Redis on AWS Lightsail."
    ],
    category: "Full Stack",
    tags: ["Java", "Spring Boot", "WebSocket", "React.js", "Apache Kafka", "Redis", "Spring Security", "JWT", "Cloudflare R2", "Docker", "AWS Lightsail"],
    githubUrl: "https://github.com/Hrishi-g/Hey-Chat-BE",
    liveUrl: "https://heyyychat.netlify.app/",
    featured: true
  },
  {
    id: "cryptx-trading",
    title: "Cryptx - Crypto Trading Platform",
    period: "03/2026 – 05/2026",
    description: "Full-stack crypto trading platform supporting INR transactions, real-time market updates, Razorpay wallet funding, and optimistic locking.",
    bulletPoints: [
      "Built a full-stack trading platform using Java, Spring Boot, React.js, and PostgreSQL with INR-based trading and real-time market updates.",
      "Implemented JWT authentication, refresh tokens, Google OAuth, and Razorpay for authentication and wallet funding.",
      "Used optimistic locking to prevent concurrent wallet transaction issues; containerized and deployed the application using Docker on Render."
    ],
    category: "Full Stack",
    tags: ["Java", "Spring Boot", "React.js", "PostgreSQL", "Spring Security", "JWT", "Google OAuth", "Razorpay", "Optimistic Locking", "Docker", "Render"],
    githubUrl: "https://github.com/Hrishi-g/Crypto-Be",
    liveUrl: "https://cryptx-trade.netlify.app/",
    featured: true
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "SQL", "JavaScript"]
  },
  {
    category: "Backend Frameworks",
    skills: ["Spring Boot", "REST APIs", "Spring Security", "Hibernate / JPA", "WebSocket", "Microservices"]
  },
  {
    category: "Frontend & Web",
    skills: ["React.js", "React Router", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    category: "Databases & Messaging",
    skills: ["PostgreSQL", "Redis", "Apache Kafka"]
  },
  {
    category: "Testing & DevOps",
    skills: ["JUnit", "Mockito", "Docker", "AWS Lightsail", "Git", "Maven", "GitHub Actions"]
  },
  {
    category: "Core Concepts",
    skills: ["Transaction Management", "Caching", "Authentication & Authorization", "Optimistic Locking", "API Optimization"]
  }
];

export const experienceData: Experience[] = [
  {
    role: "Backend Software Engineer",
    company: "Tata Consultancy Services (TCS)",
    period: "11/2024 – Present",
    projectTitle: "SBI YONO 2.0 – Digital Banking Platform",
    location: "Mumbai, India",
    description: [
      "Developed and supported backend deposit journeys (FD, RD, AD) across mobile, web, and branch channels for a platform serving 100M+ users.",
      "Developed Java/Spring Boot REST APIs for deposit creation, amendment, joint deposits, and closure.",
      "Optimized joint deposit APIs, reducing response time from 2.0s to 700ms (~65% improvement).",
      "Contributed to deposit workflows used by ~35% of active users and systems processing ₹300+ crore in daily deposits.",
      "Performed root cause analysis and resolved production issues across deposit APIs and backend workflows.",
      "Collaborated with business, QA, and architecture teams to deliver production features and enhancements."
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "Microservices", "PostgreSQL", "API Optimization", "Transaction Processing"]
  }
];

export const educationData: Education[] = [
  {
    degree: "Bachelor of Engineering (Information Technology)",
    institution: "Vasantdada Patil Pratishthan College of Engineering",
    period: "2020 – 2024",
    location: "Mumbai",
    details: "Graduated with CGPA 8.95. Strong foundation in Software Engineering, Data Structures, Database Systems, and Web Technologies."
  }
];
