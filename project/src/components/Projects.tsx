import React from 'react';
import { projects } from '../data/projects';
import { Github } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-nebula-bg to-nebula-card" id="projects">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-white mb-16 text-center">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="bg-nebula-card/50 backdrop-blur rounded-lg p-8 border border-nebula-purple/10 hover:border-nebula-purple/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-light text-white">
                  {project.title}
                </h3>
                <a 
                  href={project.githubUrl}
                  className="text-nebula-text hover:text-nebula-cyan transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              </div>
              <p className="text-nebula-text mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-nebula-purple/10 text-nebula-lavender rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}