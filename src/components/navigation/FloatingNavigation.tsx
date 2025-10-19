'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

interface NavigationItem {
  name: string;
  number: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: 'About', number: '01', href: '#about' },
  { name: 'Projects', number: '02', href: '#projects' },
  { name: 'Experience', number: '03', href: '#experience' },
  { name: 'Services', number: '04', href: '#services' },
  { name: 'Contact', number: '05', href: '#footer' }
];

export function FloatingNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY;
    const direction = latest > previous ? "down" : "up";
    
    // Adaptive scroll behavior
    if (latest > 100) {
      setIsScrolled(true);
      if (direction === "down" && latest > previous + 10) {
        setIsHidden(true);
      } else if (direction === "up" && latest < previous - 10) {
        setIsHidden(false);
      }
    } else {
      setIsScrolled(false);
      setIsHidden(false);
    }
    
    setLastScrollY(latest);
  });

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navigation-floating ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
      aria-label="Main navigation"
      role="navigation"
    >
      {/* Brand Logo */}
      <motion.a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="nav-item-premium"
        style={{ 
          marginRight: '2rem',
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#ff6663',
          fontFamily: 'var(--font-display)'
        }}
        whileHover={{ scale: 1.05 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (e.clientX - centerX) / (rect.width / 2);
          const deltaY = (e.clientY - centerY) / (rect.height / 2);
          
          e.currentTarget.style.transform = `
            perspective(500px) 
            rotateY(${deltaX * 8}deg) 
            rotateX(${-deltaY * 8}deg)
            translateZ(15px)
          `;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
        }}
        aria-label="Return to top of page"
      >
        silvana.
      </motion.a>

      {/* Navigation Items */}
      <div className="flex items-center gap-2">
        {navigationItems.map((item, index) => (
          <motion.button
            key={item.name}
            onClick={() => handleNavClick(item.href)}
            className="nav-item-premium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8 + index * 0.1,
              ease: [0.23, 1, 0.32, 1]
            }}
            whileHover={{ scale: 1.05 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              const deltaX = (e.clientX - centerX) / (rect.width / 2);
              const deltaY = (e.clientY - centerY) / (rect.height / 2);
              
              e.currentTarget.style.transform = `
                perspective(500px) 
                rotateY(${deltaX * 5}deg) 
                rotateX(${-deltaY * 5}deg)
                translateZ(10px)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
            }}
            aria-label={`Navigate to ${item.name} section`}
          >
            <span className="nav-section-number">
              {item.number}
            </span>
            <span style={{ 
              fontSize: '0.875rem',
              fontWeight: '500',
              letterSpacing: '0.02em'
            }}>
              {item.name.toUpperCase()}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}