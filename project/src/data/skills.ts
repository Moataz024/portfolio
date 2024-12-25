import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      'Angular', 'React.js', 'Next.js',
      'TailwindCSS', 'Material UI', 'Bootstrap',
      'TypeScript', 'Redux'
    ]
  },
  {
    title: 'Backend',
    skills: [
      'Node.js', 'Express.js', 'Spring Boot',
      'Django', 'Laravel', 'Symfony',
      'REST APIs', 'Microservices', 'WebSockets'
    ]
  },
  {
    title: 'Databases',
    skills: [
      'MongoDB', 'MySQL', 'PostgreSQL',
      'Firebase', 'Mongoose'
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      'Docker', 'CI/CD', 'Git',
      'Github Actions', 'SonarCloud', 'Firebase',
      'Jenkins', 'JIRA', 'Swagger', 'Postman'
    ]
  }
];