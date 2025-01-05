import React from 'react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-800" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
        <div className="bg-gray-700 rounded-lg p-8">
          <p className="text-gray-300 leading-relaxed mb-6">
            As a final-year student at ESPRIT School of Engineering, I've maintained 
            a strong academic record with a GPA of 3.5/4.0. My journey in software 
            development has been driven by a deep passion for creating innovative 
            solutions and learning new technologies.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Through my academic projects and professional experiences, I've developed 
            a strong foundation in both frontend and backend development, with a 
            particular focus on scalable architecture and clean code practices.
          </p>
        </div>
      </div>
    </section>
  );
}