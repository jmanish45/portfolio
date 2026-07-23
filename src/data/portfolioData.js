// Centralized content configuration for Manish Jaiswal's portfolio.

export const personalInfo = {
  name: "Manish Jaiswal",
  firstName: "Manish",
  brandName: "Manish",
  title: "AI & Data Science Student | Full-Stack Developer",
  location: "Pimpri, Pune, India",
  phone: "+91 9284564134",
  emails: {
    primary: "jmanish2406@gmail.com",
    secondary: "jmanish2406@gmail.com",
  },
  summary:
    "AI and Data Science student and full-stack developer building intelligent, dependable applications with modern web, cloud, and generative-AI technologies.",
  resumeUrl: "/Manish_Jaiswal_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/jmanish45",
  linkedin: "https://www.linkedin.com/in/manish-jaiswal-b282a9245/",
  leetcode: "https://leetcode.com/u/jmanish45/",
};

export const heroContent = {
  greeting: "Hi, I'm Manish Jaiswal",
  titleHighlight: "AI & Data Science Student",
  subtitle:
    "I build intelligent full-stack products with Python, React, cloud technologies, and generative AI.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:jmanish2406@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Manish%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards%2C",
  },
  ctaResume: { text: "Download Resume", href: "/Manish_Jaiswal_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Manish Jaiswal</span>, an AI and Data Science student based in Pimpri, Pune. I enjoy combining full-stack engineering, cloud services, and generative AI to create useful, scalable products.`,
  techStack: ["Python", "React", "Generative AI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into intelligent products",
  description:
    "I combine problem discovery, thoughtful design, full-stack engineering, and reliable deployment to build useful software.",
  cards: [
    {
      number: "01",
      title: "Discover",
      text: "I clarify the user problem, success criteria, and the technical constraints before choosing an implementation path.",
    },
    {
      number: "02",
      title: "Design",
      text: "I shape simple user flows, clear data models, and an architecture that can grow with the product.",
    },
    {
      number: "03",
      title: "Build",
      text: "I deliver responsive interfaces, secure APIs, and AI-assisted features with clean, maintainable code.",
    },
    {
      number: "04",
      title: "Improve",
      text: "I test, refine, and optimize the experience so the result is dependable for real users.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 82 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 88 },
        { name: "HTML5", level: 92 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Leaflet.js", level: 72 },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js & Express", level: 85 },
        { name: "Flask", level: 88 },
        { name: "REST APIs", level: 88 },
        { name: "Socket.io", level: 75 },
        { name: "JWT Authentication", level: 82 },
      ],
    },
    {
      title: "Data & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "AWS S3", level: 80 },
        { name: "Docker", level: 75 },
        { name: "MongoDB Atlas", level: 80 },
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "Generative AI", level: 85 },
        { name: "LLMs & RAG", level: 82 },
        { name: "LangGraph", level: 75 },
        { name: "Prompt Engineering", level: 88 },
        { name: "Gemini API", level: 82 },
      ],
    },
    {
      title: "Core Foundations",
      skills: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "Object-Oriented Programming", level: 88 },
        { name: "DBMS", level: 85 },
        { name: "Operating Systems", level: 80 },
        { name: "Git & GitHub", level: 88 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "Engineering Focus",
  heading: "AI, Cloud & Product Engineering",
  description:
    "I combine applied AI, full-stack development, cloud services, and disciplined problem solving to build practical products.",
  categories: [
    {
      title: "Generative AI",
      description: "Building smarter experiences with LLMs, RAG, prompt engineering, and agentic AI workflows.",
      stats: "LLMs & RAG",
      icon: "AI",
    },
    {
      title: "Cloud Systems",
      description: "Designing secure storage and delivery workflows with AWS S3, Docker, databases, and REST APIs.",
      stats: "AWS & Docker",
      icon: "☁",
    },
    {
      title: "Full-Stack Products",
      description: "Creating responsive applications from polished React interfaces to reliable Node.js and Flask backends.",
      stats: "React · Flask",
      icon: "</>",
    },
    {
      title: "Problem Solving",
      description: "Strengthening engineering judgment through data structures, algorithms, and consistent competitive coding.",
      stats: "1600+ Rating",
      icon: "↗",
    },
  ],
};

export const leadershipList = [
  {
    title: "1600+ LeetCode Rating",
    description: "Solved more than 500 data structures and algorithms problems while building strong analytical and problem-solving foundations.",
    role: "Competitive Programming",
    badge: "Achievement",
  },
  {
    title: "3rd Prize — Denoise-X Hackathon",
    description: "Earned third place at a college-level hackathon for an AI-powered medical X-ray enhancement system.",
    role: "Hackathon Recognition",
    badge: "Achievement",
  },
  {
    title: "CGPA 8.91 / 10",
    description: "Maintaining a strong academic record while pursuing a B.E. in Artificial Intelligence and Data Science.",
    role: "Academic Achievement",
    badge: "Education",
  },
];

export const internshipsList = [
  {
    organization: "AWS Cloud Club",
    role: "Technical Head",
    duration: "Position of Responsibility",
    skills: [
      "Workshop & technical-session coordination",
      "Hands-on cloud-computing events",
      "Member mentoring and project guidance",
      "Technical problem solving",
    ],
    tech: ["AWS Services", "Cloud Computing", "Project Development", "Technical Leadership"],
  },
];

export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Leading technical initiatives, workshops, and hands-on learning events at the AWS Cloud Club." },
  { name: "Problem Solving", icon: "🧩", desc: "Building strong analytical skills through 500+ data structures and algorithms problems." },
  { name: "Mentorship", icon: "🤝", desc: "Helping peers explore AWS services, project development, and technical problem-solving approaches." },
  { name: "Communication", icon: "💬", desc: "Explaining technical ideas clearly in workshops, sessions, and collaborative projects." },
  { name: "Adaptability", icon: "🌟", desc: "Learning across full-stack engineering, cloud technology, and rapidly evolving AI workflows." },
  { name: "Product Thinking", icon: "💡", desc: "Focusing on practical user experiences from problem discovery through deployment." },
  { name: "Collaboration", icon: "🫱🏻‍🫲🏽", desc: "Creating inclusive, hands-on environments for peers to learn and build together." },
  { name: "Discipline", icon: "🎯", desc: "Balancing a strong academic record with consistent practice and real product development." },
];

export const projects = [
  {
    id: "denoise-x",
    number: "01",
    badge: "Flagship Project",
    title: "Denoise-X",
    description:
      "An AI-powered medical X-ray enhancement system for chest X-rays. It applies image denoising and contrast-enhancement pipelines to improve image quality while preserving clinically significant anatomical features, with side-by-side original and enhanced-image viewing in an interactive web application.",
    techTags: ["Deep Learning", "Medical Imaging", "Image Enhancement", "Web Application", "AI/ML"],
    links: {
      github: null,
      demo: "https://denoise-x.vercel.app",
    },
    isFlagship: true,
  },
  {
    id: "personal-cloud",
    number: "02",
    badge: null,
    title: "AI-Powered Personal Cloud Storage",
    description:
      "A secure cloud file-management platform built with Python and Flask. Google Gemini powers automatic file categorization, semantic search, and tag generation, while PostgreSQL, SQLAlchemy, Flask-Login, and AWS S3 provide reliable data, authentication, and scalable storage.",
    techTags: ["Python", "Flask", "Gemini API", "PostgreSQL", "AWS S3", "SQLAlchemy"],
    links: {
      github: "https://github.com/jmanish45/personal-cloud-flask",
    },
    isFlagship: false,
  },
  {
    id: "food-delivery",
    number: "03",
    badge: null,
    title: "Full Stack Food Delivery App",
    description:
      "A full-stack food-ordering platform with a customer experience, admin dashboard, and backend services. It provides JWT-secured REST APIs for authentication, product management, cart operations, payments, and the end-to-end order lifecycle.",
    techTags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
    links: {
      github: "https://github.com/jmanish45/zwiggy",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "1600+ LeetCode Rating",
      issuer: "LeetCode",
      icon: "↗",
    },
    {
      name: "500+ DSA Problems Solved",
      issuer: "Competitive Programming",
      icon: "🧩",
    },
    {
      name: "3rd Prize — Denoise-X",
      issuer: "College-level Hackathon",
      icon: "🏆",
    },
    {
      name: "CGPA 8.91 / 10",
      issuer: "Dr. D. Y. Patil Institute of Technology",
      icon: "🎓",
    },
  ],
  viewAllUrl: "https://leetcode.com/u/jmanish45/",
};

export const education = {
  degree: "B.E. in Artificial Intelligence & Data Science",
  institution: "Dr. D. Y. Patil Institute of Technology, Pimpri",
  location: "Pune, Maharashtra",
  duration: "2023 – 2027",
  cgpa: "8.91 / 10",
  schools: [
    {
      qualification: "HSC (CBSE Board)",
      institution: "Mane's International School, Ratnagiri",
      yearLabel: "12th Score",
      result: "87%",
    },
    {
      qualification: "SSC (State Board)",
      institution: "Saint Thomas School, Ratnagiri",
      yearLabel: "10th Score",
      result: "93.40%",
    },
  ],
};

export const footerContent = {
  taglines: [
    "AI & Data Science",
    "Full-Stack · Cloud · Generative AI",
    "Intelligent Product Engineering",
  ],
  credential: "B.E. AI & DS · CGPA 8.91 / 10",
  copyright: `© ${new Date().getFullYear()} Manish Jaiswal | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
