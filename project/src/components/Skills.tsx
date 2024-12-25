import React from 'react';
import { skillCategories } from '../data/skills';
import SkillCategory from './ui/SkillCategory';

export default function Skills() {
  return (
    <section className="py-24 px-4" id="skills">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-light text-white mb-16 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}