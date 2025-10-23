'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavigationItem {
  name: string;
  number: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: 'about', number: '01', href: '#about' },
  { name: 'projects', number: '02', href: '#projects' },
  { name: 'services', number: '03', href: '#services' },
  { name: 'experience', number: '04', href: '#experience' }
];

export function FloatingNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // Mobile detection with SSR guard
  useEffect(() => {
    // SSR guard - only run on client side
    if (typeof window === 'undefined') return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    // SSR guard - only run on client side
    if (typeof window === 'undefined') return;
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu when item is clicked
    setIsMobileMenuOpen(false);
  };

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(href);
    }
  };

  // Close mobile menu on escape key with SSR guard
  useEffect(() => {
    // SSR guard - only run on client side
    if (typeof window === 'undefined') return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      className={`navigation-floating navigation-responsive ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
      aria-label="Main navigation"
      role="navigation"
    >
      {/* Brand Logo - Links to Blog/Portfolio */}
      <motion.a
        href="https://silvana.mmm.page/human-perspective"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-brand-enhanced luxury-navigation luxury-hover-scale luxury-hover-glow"
        whileHover={{ scale: 1.05 }}
        tabIndex={0}
        aria-label="Visit Silvana's blog and portfolio"
      >
        silvana.
      </motion.a>

      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="nav-desktop-container">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              onKeyDown={(e) => handleKeyDown(e, item.href)}
              className="nav-item-enhanced luxury-navigation luxury-hover-scale luxury-hover-glow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{ scale: 1.05 }}
              tabIndex={0}
              aria-label={`Navigate to ${item.name} section`}
            >
              <span className="nav-section-number">
                {item.number}
              </span>
              <span className="nav-section-name">
                {item.name.toUpperCase()}
              </span>
            </motion.button>
          ))}
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <>
          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-toggle"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'line-1-open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'line-2-open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'line-3-open' : ''}`}></span>
          </motion.button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="mobile-menu-content">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    onKeyDown={(e) => handleKeyDown(e, item.href)}
                    className="mobile-nav-item luxury-navigation"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    tabIndex={0}
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    <span className="mobile-nav-number">
                      {item.number}
                    </span>
                    <span className="mobile-nav-name">
                      {item.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </>
      )}
    </motion.nav>
  );
}