import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { Link } from 'react-router-dom';

interface Carousel3DProps {
  items: Project[];
}

const Carousel3D: React.FC<Carousel3DProps> = ({ items }) => {
  const [currIndex, setCurrIndex] = useState(0);

  const nextSlide = () => {
    setCurrIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative w-full py-8 md:py-12 overflow-hidden perspective-1000">
      <div className="relative h-[400px] md:h-[450px] w-full max-w-4xl mx-auto flex justify-center items-center">
        {items.map((item, index) => {
          // Calculate relative position
          let pos = index - currIndex;
          
          // Logic to handle infinite-like loop visually if needed, 
          // but simpler linear logic works best for react declarative rendering 
          // with small item sets.
          // Let's stick to the visual logic provided in the reference:
          // pos = i - carouselIndex
          
          const abs = Math.abs(pos);
          
          // Only render visible items to keep DOM clean
          if (abs > 3) return null;

          // 3D Math from original
          // Desktop: itemWidth approx 300-400px. Shift ~320px
          // Mobile: logic was simpler.
          
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          const shift = isMobile ? 260 : 340;
          
          const scale = Math.max(0.78, 1 - abs * 0.12);
          const z = -abs * 120;
          const x = pos * shift;
          const opacity = abs > 2 ? 0 : 1;
          const zIndex = 10 - abs;

          const style: React.CSSProperties = {
            transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
            opacity: opacity,
            zIndex: zIndex,
          };

          return (
            <div
              key={item.id}
              className="absolute top-1/2 left-1/2 w-[260px] md:w-[320px] bg-card rounded-xl p-4 shadow-2xl border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,0.9,0.25,1)] cursor-pointer origin-center -ml-[130px] md:-ml-[160px] -mt-[160px]"
              style={style}
            >
               <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold text-accent mb-1">{item.title}</h4>
              <p className="text-sm text-text font-medium mb-3">{item.description}</p>
              <Link 
                to={`/project/${item.id}`}
                className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-semibold hover:bg-accent hover:text-white transition-colors"
              >
                Ver Detalhes
              </Link>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 z-20">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-card border border-white/10 text-text hover:bg-accent hover:text-white transition-colors shadow-lg"
        >
          ◀
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-card border border-white/10 text-text hover:bg-accent hover:text-white transition-colors shadow-lg"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Carousel3D;