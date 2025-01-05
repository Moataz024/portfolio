export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export interface Repository {
  name: string;
  description: string;
  techStack: string[];
  url: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  gpa: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}