import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-8 mt-auto bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <p className="text-text font-medium">© 2025 — Márcio Maker</p>
        <p className="text-muted text-sm mt-2">Transformando ideias em experiências digitais excepcionais.</p>
        
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="text-muted hover:text-accent transition-colors text-sm font-medium">LinkedIn</a>
          <a href="#" className="text-muted hover:text-accent transition-colors text-sm font-medium">GitHub</a>
          <a href="#" className="text-muted hover:text-accent transition-colors text-sm font-medium">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;