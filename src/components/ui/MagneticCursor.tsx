'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add magnetic effect to interactive elements
    const magneticElements = document.querySelectorAll('.magnetic-element');
    magneticElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      magneticElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="magnetic-cursor"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: isActive ? '40px' : '20px',
        height: isActive ? '40px' : '20px',
        borderRadius: '50%',
        background: isActive 
          ? 'radial-gradient(circle, rgba(255, 102, 99, 0.8) 0%, rgba(255, 102, 99, 0.2) 50%, transparent 70%)'
          : 'radial-gradient(circle, #ff6663 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transform: `translate(${mousePosition.x - (isActive ? 20 : 10)}px, ${mousePosition.y - (isActive ? 20 : 10)}px)`
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  );
}