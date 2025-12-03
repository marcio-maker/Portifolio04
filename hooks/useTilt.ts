import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export const useTilt = (options = {}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, {
        max: 12,
        speed: 300,
        glare: true,
        'max-glare': 0.15,
        scale: 1.02,
        ...options
      });
    }

    return () => {
      if (node && (node as any).vanillaTilt) {
        (node as any).vanillaTilt.destroy();
      }
    };
  }, [options]);

  return tiltRef;
};