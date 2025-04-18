import { SkillCategory, Experience, Project, Achievement, Certification, Testimonial } from '../types';

export const personalInfo = {
  name: "Shiva Roopan",
  title: "Senior Full Stack Developer",
  tagline: "Building seamless web & mobile experiences using modern tech",
  intro: "Passionate full-stack developer with expertise in building scalable applications using modern JavaScript frameworks. I specialize in creating efficient, user-friendly solutions that solve real-world problems.",
  photo: "/images/profile.jpg", // Add your photo to the public directory
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Redux" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Kafka" },
      { name: "REST APIs" },
      { name: "Microservices" },
    ],
  },
  {
    name: "Cloud/DevOps",
    skills: [
      { name: "AWS (Lambda, EC2, S3)" },
      { name: "Serverless" },
      { name: "CI/CD" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Figma" },
      { name: "VSCode" },
      { name: "Postman" },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "System Design" },
      { name: "Agile" },
      { name: "Graph APIs" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Anko",
    location: "Bengaluru, India",
    title: "Engineer - Full Stack",
    duration: "Oct 2021 - Present",
    achievements: [
      "Proficient in developing scalable Node.js applications with a strong focus on microservices architecture and REST APIs",
      "Skilled in building scalable, responsive, and component-driven web applications using React.js and modern frontend best practices.",
      "Improved frontend performance by implementing code splitting and lazy loading techniques",
      "Experienced with AWS services including Systems Manager (SSM), Secrets Manager, EC2, Lambda, S3, and serverless computing",
      "Well-versed in integrating Microsoft services using Microsoft Graph APIs to enable seamless enterprise solutions",
    ],
  },
  {
    company: "Verticurl",
    location: "Coimbatore, India",
    title: "Marketing Technology Engineer",
    duration: "Dec 2020 - Sep 2021",
    achievements: [
      "Created and managed marketing campaigns for multinational clients. ",
      "Handled end-to-end campaign workflows and execution.",
      "Delivered tailored marketing solutions to meet client objectives.",
      "Designed and implemented EDMs (Electronic Direct Mailers) for various campaigns. ",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "E-commerce Platform",
    description: "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redis", "AWS"],
    demoLink: "https://example-ecommerce.com",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    image: "/images/projects/ecommerce.jpg",
  },
  {
    name: "Task Management System",
    description: "A collaborative task management application with real-time updates and team workspaces",
    stack: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
    demoLink: "https://task-manager-demo.com",
    githubLink: "https://github.com/yourusername/task-manager",
    image: "/images/projects/task-manager.jpg",
  },
  {
    name: "Fitness Tracking App",
    description: "Mobile-responsive fitness tracking application with workout plans, progress tracking, and social features",
    stack: ["React Native", "Redux", "Node.js", "MongoDB", "AWS Lambda"],
    demoLink: "https://fitness-app-demo.com",
    githubLink: "https://github.com/yourusername/fitness-app",
    image: "/images/projects/fitness-app.jpg",
  },
  {
    name: "Financial Dashboard",
    description: "Interactive dashboard for financial data visualization with real-time updates and customizable widgets",
    stack: ["React", "D3.js", "Express", "GraphQL", "PostgreSQL"],
    demoLink: "https://finance-dashboard-demo.com",
    githubLink: "https://github.com/yourusername/finance-dashboard",
    image: "/images/projects/finance-dashboard.jpg",
  },
];

export const achievements: Achievement[] = [
  { title: "Got selected by Nike as SDE-2" },
  { title: "Mentored junior developers in my organization" },
  { title: "Resolved critical security issues using Snyk" },
  { title: "Built UI from scratch using Figma + React for Packman" },
];

export const certifications: Certification[] = [
  {
    name: "Node.js - The Complete Guide",
    issuer: "Udemy",
    description: "Covered server, authentication, and MongoDB integration",
    date: "2022",
  },
  {
    name: "AWS Essentials",
    issuer: "Amazon Web Services",
    description: "Lambda, EC2, IAM, S3 hands-on training",
    date: "2021",
  },
  {
    name: "React - Advanced Patterns",
    issuer: "Frontend Masters",
    description: "Advanced React patterns, performance optimization, and custom hooks",
    date: "2022",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "One of the most dedicated developers I've worked with. Their attention to detail and problem-solving skills are exceptional.",
    name: "Jane Smith",
    title: "Engineering Manager",
    company: "Tech Company A",
  },
  {
    quote: "A true team player who consistently delivers high-quality code and innovative solutions to complex problems.",
    name: "John Doe",
    title: "CTO",
    company: "Tech Startup C",
  },
  {
    quote: "Their technical expertise and ability to mentor junior team members made a significant impact on our project's success.",
    name: "Emily Johnson",
    title: "Product Manager",
    company: "Tech Company B",
  },
];