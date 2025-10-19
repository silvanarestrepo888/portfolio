'use client';
import { useState, useEffect } from 'react';

interface InteractiveBackgroundProps {
  section?: 'hero' | 'about' | 'projects' | 'experience' | 'services' | 'default';
  intensity?: number;
}

export const InteractiveBackground = ({ 
  section = 'default',
  intensity = 1 
}: InteractiveBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      setMousePosition({ x, y });
      setIsActive(true);
      
      // Reset active state after no mouse movement
      const timeout = setTimeout(() => setIsActive(false), 3000);
      return () => clearTimeout(timeout);
    };
    
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
    
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  const getInteractiveGradient = () => {
    const baseIntensity = intensity * 0.1;
    const x = mousePosition.x;
    const y = mousePosition.y;
    
    switch(section) {
      case 'hero':
        return `
          radial-gradient(600px circle at ${x}% ${y}%, 
            rgba(255,102,99,${0.12 * intensity}) 0%, 
            rgba(255,122,119,${0.06 * intensity}) 30%, 
            transparent 60%),
          radial-gradient(400px circle at ${100-x}% ${100-y}%, 
            rgba(255,142,139,${0.04 * intensity}) 0%, 
            transparent 70%)
        `;
      case 'about':
        return `
          radial-gradient(400px circle at ${x}% ${y}%, 
            rgba(255,102,99,${0.08 * intensity}) 0%, 
            rgba(255,142,139,${0.04 * intensity}) 40%, 
            transparent 70%)
        `;
      case 'projects':
        return `
          radial-gradient(500px circle at ${x}% ${y}%, 
            rgba(255,122,119,${0.06 * intensity}) 0%, 
            rgba(255,174,159,${0.03 * intensity}) 50%, 
            transparent 75%)
        `;
      case 'experience':
        return `
          radial-gradient(450px ellipse at ${x}% ${y}%, 
            rgba(255,142,139,${0.05 * intensity}) 0%, 
            rgba(255,160,175,${0.025 * intensity}) 60%, 
            transparent 80%)
        `;
      case 'services':
        return `
          radial-gradient(350px circle at ${x}% ${y}%, 
            rgba(255,102,99,${0.04 * intensity}) 0%, 
            rgba(255,174,159,${0.02 * intensity}) 50%, 
            transparent 70%)
        `;
      default:
        return `
          radial-gradient(500px circle at ${x}% ${y}%, 
            rgba(255,102,99,${0.06 * intensity}) 0%, 
            transparent 50%)
        `;
    }
  };
  
  return (
    <div 
      className={`interactive-bg-overlay ${isActive ? 'active' : ''}`}
      style={{
        position: 'absolute',
        inset: 0,
        background: getInteractiveGradient(),
        pointerEvents: 'none',
        zIndex: 5,
        transition: 'all 0.3s ease',
        mixBlendMode: 'soft-light'
      }}
    />
  );
};