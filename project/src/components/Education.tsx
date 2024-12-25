import React from 'react';
import { education } from '../data/education';

export default function Education() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-nebula-bg to-nebula-card" id="education">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-light text-white mb-16 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div 
              key={edu.school} 
              className="bg-nebula-card/50 backdrop-blur rounded-lg p-8 border border-nebula-purple/10 hover:border-nebula-purple/30 transition-all duration-300"
            >
              <h3 className="text-xl font-light text-white">{edu.school}</h3>
              <div className="text-nebula-cyan mb-2">{edu.degree}</div>
              <div className="text-nebula-text text-sm mb-2">{edu.year}</div>
              <div className="text-nebula-lavender">GPA: {edu.gpa}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}