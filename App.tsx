import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ArtStudio from './pages/ArtStudio';
import ProjectDetail from './pages/ProjectDetail';
import FAB from './components/FAB';
import { Toaster } from 'react-hot-toast';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'light') {
      html.classList.remove('dark');
      html.classList.add('light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'var(--card)',
              color: 'var(--text)',
              border: '1px solid var(--accent)',
            },
          }}
        />
        <ScrollToTop />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-grow pt-24 pb-12 px-4 container mx-auto max-w-6xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/ruta-art" element={<ArtStudio />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <FAB />
      </div>
    </HashRouter>
  );
};

export default App;