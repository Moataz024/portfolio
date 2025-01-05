import React from 'react';

export default function Navigation() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm text-white fixed w-full z-10 top-0">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="font-light text-xl">MF</a>
          <div className="hidden md:flex space-x-10">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
    >
      {children}
    </a>
  );
}