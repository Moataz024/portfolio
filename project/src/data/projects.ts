import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Tournament Management System',
    description: 'Real-time score updates, role-based access control, and chat functionality.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/Next-Generation-Coders/backend-pi'
  },
  {
    title: 'Django Quiz Generator',
    description: 'AI-driven dynamic quiz generation with a scoring system.',
    techStack: ['Django', 'Python', 'PostgreSQL', 'Gemini API'],
    githubUrl: 'https://github.com/DjangoEducation/DjangoEducation'
  },
  {
    title: 'Insurance App',
    description: 'ERP and CRM integration for insurance agencies.',
    techStack: ['Flutter', 'Firebase', 'Cloud Functions'],
    githubUrl: 'https://github.com/Moataz024/insurances'
  },
  {
    title: 'Microservices Architecture Project',
    description: 'Design and development of an application using microservices architecture. Each core service is built with Spring Boot, with an integrated ExpressJS microservice. The Angular frontend interacts through a Spring Cloud API Gateway for routing. Services register dynamically via Eureka Server for easy discovery. Data management uses MySQL for structured data and MongoDB for unstructured data (ExpressJS Module), all containerized with Docker and orchestrated using Docker Compose.',
    techStack: ['Angular', 'Spring Boot', 'Express.js', 'MySQL', 'MongoDB', 'Docker'],
    githubUrl: 'https://github.com/Elite-Coders-ESPRIT/app-web-distibue-ms'
  }
];