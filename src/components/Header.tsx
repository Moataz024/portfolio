import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from './ui/SocialLink';

export default function Header() {
  return (
    <header className="bg-transparent text-white py-32 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-6xl font-light tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-nebula-purple to-nebula-blue">
          Moataz Foudhaili
        </h1>
        <h2 className="text-2xl text-gray-400 font-light">Software Engineer</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I am a passionate Software Engineer with expertise in MERN and Angular Spring Boot stacks, 
          specializing in building scalable and robust applications.
        </p>
        <div className="flex justify-center gap-8">
          <SocialLink href="https://github.com/Moataz024" icon={<Github size={24} />} label="GitHub" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} label="LinkedIn" />
          <SocialLink href="mailto:moataz.foudhaili@esprit.tn" icon={<Mail size={24} />} label="Email" />
        </div>
      </div>
    </header>
  );
}