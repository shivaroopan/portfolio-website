export type Skill = {
  name: string;
  level?: number;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type Experience = {
  company: string;
  location: string;
  title: string;
  duration: string;
  achievements: string[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  demoLink?: string;
  githubLink?: string;
  image?: string;
};

export type Achievement = {
  title: string;
};

export type Certification = {
  name: string;
  issuer: string;
  description: string;
  date?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company?: string;
};