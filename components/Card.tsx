import React from 'react';
import { useTilt } from '../hooks/useTilt';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  const tiltRef = useTilt();

  return (
    <div 
      ref={tiltRef}
      onClick={onClick}
      className={`bg-card p-4 rounded-xl shadow-xl border border-white/10 transition-transform hover:-translate-y-1 hover:shadow-2xl hover:border-accent/30 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;