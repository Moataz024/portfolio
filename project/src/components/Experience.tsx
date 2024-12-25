import React from 'react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="py-24 px-4 bg-gray-900" id="experience">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-light text-white mb-16 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company + exp.period} className="bg-gray-800/50 backdrop-blur rounded-lg p-8">
              <h3 className="text-xl font-light text-white">{exp.role}</h3>
              <div className="text-blue-400 mb-2">{exp.company}</div>
              <div className="text-gray-400 text-sm mb-4">{exp.period}</div>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}