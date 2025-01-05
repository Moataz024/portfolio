import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur rounded-lg p-8">
      <h3 className="text-xl font-light text-white mb-6">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}