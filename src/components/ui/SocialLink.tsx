import React, { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}