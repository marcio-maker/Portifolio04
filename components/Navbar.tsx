import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from '../types';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const navLinks: NavLink[] = [
  { path: '/home', label: 'Home' },
  { path: '/projetos', label: 'Projetos' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/ruta-art', label: 'Art & IA' },
  { path: '/contato', label: 'Contato' },
];

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4 bg-bg/80 backdrop-blur-md border-b border-white/5 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent/20">
          MM
        </div>
        <div className="hidden sm:block">
          <h1 className="text-base font-bold text-text leading-tight">Márcio Maker</h1>
          <small className="text-xs text-muted block">Full Stack • PWA • IA</small>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              location.pathname === link.path 
                ? 'bg-accent/10 text-accent' 
                : 'text-text hover:bg-white/5 hover:text-accent'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          className="ml-2 flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm text-text"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* Mobile Toggle */}
      <div className="flex items-center gap-2 md:hidden">
         <button
          onClick={toggleTheme}
          className="p-2 rounded-lg border border-white/10 text-text"
        >
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 p-2 rounded-lg border border-white/10"
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 bg-text transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-text transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-text transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-3 right-3 bg-card border border-white/10 p-4 rounded-xl shadow-2xl flex flex-col gap-2 md:hidden animate-fade-in z-50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`p-3 rounded-lg text-base font-medium transition-colors ${
                 location.pathname === link.path 
                ? 'bg-accent/10 text-accent' 
                : 'text-text hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;