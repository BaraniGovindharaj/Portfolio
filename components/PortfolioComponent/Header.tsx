'use client';

import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

type HeaderProps = {
  name?: string;
};

export default function Header({ name }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0b1326]/90 backdrop-blur-md">
      <div className="w-full max-w-6xl mx-auto px-6 h-14 flex items-center justify-between text-lg">
        <p className="font-bold tracking-wide text-lg bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
          {name}
        </p>

        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
        </button>

        <div className="hidden md:flex items-center gap-8 text-white/80">
          <button onClick={() => handleSectionScroll('about')} className="hover:text-white transition-colors text-lg">About</button>
          <button onClick={() => handleSectionScroll('skills')} className="hover:text-white transition-colors text-lg">Skills</button>
          <button onClick={() => handleSectionScroll('projects')} className="hover:text-white transition-colors text-lg">Projects</button>
          <button onClick={() => handleSectionScroll('experience')} className="hover:text-white transition-colors text-lg">Experience</button>
          <button onClick={() => handleSectionScroll('contact')} className="hover:text-white transition-colors text-lg">Contact</button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1326] px-6 py-4">
          <nav className="flex flex-col gap-3 text-white/85 text-sm">
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSectionScroll(item.id)}
                className="text-left hover:text-white transition-colors text-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}