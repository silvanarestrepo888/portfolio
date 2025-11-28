'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

// ============================================
// GLASS MORPHISM MODAL SYSTEM
// ============================================

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function GlassModal({ isOpen, onClose, children, title }: GlassModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div 
        className={`modal-glass-backdrop ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div 
        className={`modal-glass-content ${isOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Close Button */}
        <button 
          className="modal-glass-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path 
              d="M15 5L5 15M5 5L15 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Inner Content */}
        <div className="modal-glass-inner">
          {title && (
            <h2 id="modal-title" className="text-3xl font-serif mb-6">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </>,
    document.body
  );
}

// ============================================
// CHROMATIC INTELLIGENCE SYSTEM
// ============================================

export function ChromaticIntelligence() {
  useEffect(() => {
    const updateChromatic = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const month = now.getMonth();
      
      // Calculate time factor (0 = dawn/6am, 0.5 = noon, 1 = dusk/6pm)
      const totalMinutes = hours * 60 + minutes;
      const dayMinutes = totalMinutes - 360; // 6am = 0
      const timeFactor = Math.max(0, Math.min(1, dayMinutes / 720)); // 12 hours = 720 minutes
      
      // Calculate season factor (0 = winter, 0.5 = summer)
      const seasonFactor = Math.abs(month - 6) / 6;
      
      // Apply to CSS variables
      document.documentElement.style.setProperty('--time-factor', timeFactor.toString());
      document.documentElement.style.setProperty('--season-factor', seasonFactor.toString());
    };

    // Initial update
    updateChromatic();

    // Update every minute
    const interval = setInterval(updateChromatic, 60000);

    return () => clearInterval(interval);
  }, []);

  return <div className="section-chromatic-field" aria-hidden="true" />;
}

// ============================================
// QUANTUM MICRO-INTERACTIONS
// ============================================

interface QuantumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function QuantumButton({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: QuantumButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [magneticActive, setMagneticActive] = useState(false);
  const [magneticX, setMagneticX] = useState(0);
  const [magneticY, setMagneticY] = useState(0);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    // Activate magnetic effect within 100px
    if (distance < 100) {
      setMagneticActive(true);
      setMagneticX(distanceX);
      setMagneticY(distanceY);
      
      // Update CSS variables for gradient position
      buttonRef.current.style.setProperty('--mouse-x', `${(e.clientX - rect.left) / rect.width * 100}%`);
      buttonRef.current.style.setProperty('--mouse-y', `${(e.clientY - rect.top) / rect.height * 100}%`);
    } else {
      setMagneticActive(false);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMagneticActive(false);
    setMagneticX(0);
    setMagneticY(0);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rippleId = Date.now();
    setRipples(prev => [...prev, { x, y, id: rippleId }]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== rippleId));
    }, 1200);

    // Create particles
    createParticles(e.clientX, e.clientY);
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`quantum-button quantum-hover-glow ${className}`}
      data-magnetic-active={magneticActive}
      style={{
        '--magnetic-x': `${magneticX}px`,
        '--magnetic-y': `${magneticY}px`,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {children}
      
      {/* Ripple Container */}
      <div className="quantum-ripple-container">
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="quantum-ripple active"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}
      </div>
    </button>
  );
}

// ============================================
// QUANTUM CURSOR SYSTEM
// ============================================

export function QuantumCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Create trail
      if (Math.random() > 0.9) { // Only 10% of movements create trails
        createTrail(e.clientX, e.clientY);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .quantum-button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .quantum-button')) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const createTrail = (x: number, y: number) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
      trail.classList.add('fading');
      setTimeout(() => {
        trail.remove();
      }, 1000);
    }, 10);
  };

  return (
    <div 
      ref={cursorRef}
      className={`quantum-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      aria-hidden="true"
    />
  );
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function createParticles(x: number, y: number) {
  const particleCount = 8;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'interaction-particle';
    
    // Random direction
    const angle = (Math.PI * 2 * i) / particleCount;
    const velocity = 50 + Math.random() * 50;
    const randomX = Math.cos(angle) * velocity / 100;
    const randomY = Math.sin(angle) * velocity / 100;
    
    particle.style.setProperty('--random-x', randomX.toString());
    particle.style.setProperty('--random-y', randomY.toString());
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.classList.add('floating');
      setTimeout(() => {
        particle.remove();
      }, 2000);
    }, 10);
  }
}

// ============================================
// HOOK FOR CHROMATIC MOUSE TRACKING
// ============================================

export function useChromaticMouse(elementRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      element.style.setProperty('--mouse-x', `${x}%`);
      element.style.setProperty('--mouse-y', `${y}%`);
    };

    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [elementRef]);
}