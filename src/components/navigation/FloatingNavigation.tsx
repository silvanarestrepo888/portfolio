'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSectionDetection } from '../../hooks/useSectionDetection';

interface NavigationItem {
  name: string;
  number: string;
  href: string;
  sectionId: string;
}

const navigationItems: NavigationItem[] = [
  { name: 'about',      number: '01', href: '#about',      sectionId: 'about' },
  { name: 'projects',   number: '02', href: '#projects',   sectionId: 'projects' },
  { name: 'services',   number: '03', href: '#services',   sectionId: 'services' },
  { name: 'experience', number: '04', href: '#experience', sectionId: 'experience' },
];

// Map any section that should highlight a nav item
const sectionToNavItem: Record<string, string> = {
  about:            'about',
  projects:         'projects',
  'project-snippets': 'projects',
  services:         'services',
  experience:       'experience',
};

// Framer Motion easing — mirrors var(--ease-natural)
const easeNatural = [0.23, 1, 0.32, 1] as const;
const easeLandor  = [0.25, 0.46, 0.45, 0.94] as const;

export function FloatingNavigation() {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isHidden, setIsHidden]               = useState(false);
  const [lastScrollY, setLastScrollY]         = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile]               = useState(false);
  const { scrollY } = useScroll();
  const { currentSection } = useSectionDetection();

  const activeNavItem = sectionToNavItem[currentSection] ?? null;

  // Mobile detection
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hide-on-scroll-down
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = lastScrollY;
    const direction = latest > previous ? 'down' : 'up';

    if (latest > 100) {
      setIsScrolled(true);
      if (direction === 'down' && latest > previous + 10) setIsHidden(true);
      else if (direction === 'up' && latest < previous - 10) setIsHidden(false);
    } else {
      setIsScrolled(false);
      setIsHidden(false);
    }
    setLastScrollY(latest);
  });

  const handleNavClick = (href: string) => {
    if (typeof window === 'undefined') return;
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(href);
    }
  };

  // Close mobile menu on Escape
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
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
      transition={{ duration: 1, delay: 0.5, ease: easeNatural }}
      aria-label="Main navigation"
      role="navigation"
    >
      {/* Brand */}
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
          {navigationItems.map((item, index) => {
            const isActive = activeNavItem === item.sectionId;

            return (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                className={`nav-item-enhanced luxury-navigation luxury-hover-scale luxury-hover-glow ${isActive ? 'nav-item-active' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  ease: easeNatural,
                }}
                whileHover={{ scale: 1.05 }}
                tabIndex={0}
                aria-label={`Navigate to ${item.name} section`}
                aria-current={isActive ? 'location' : undefined}
              >
                {/* Section number */}
                <motion.span
                  className="nav-section-number"
                  animate={{
                    color: isActive ? 'var(--coral)' : 'var(--charcoal-light)',
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.382, ease: easeLandor }}
                >
                  {item.number}
                </motion.span>

                {/* Section name */}
                <motion.span
                  className="nav-section-name"
                  animate={{
                    color: isActive ? 'var(--charcoal-mid)' : 'var(--charcoal-light)',
                    fontWeight: isActive ? 600 : 400,
                  }}
                  transition={{ duration: 0.382, ease: easeLandor }}
                >
                  {item.name.toUpperCase()}
                </motion.span>

                {/* Active underline */}
                <motion.span
                  className="nav-active-line"
                  style={{
                    position: 'absolute',
                    bottom: '-3px',
                    left: 0,
                    right: 0,
                    height: '1.5px',
                    background: 'var(--coral)',
                    borderRadius: '1px',
                    transformOrigin: 'left',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.382, ease: easeLandor }}
                />
              </motion.button>
            );
          })}
        </div>
      )}

      {/* Mobile toggle */}
      {isMobile && (
        <>
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-toggle"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'line-1-open' : ''}`} />
            <span className={`hamburger-line ${isMobileMenuOpen ? 'line-2-open' : ''}`} />
            <span className={`hamburger-line ${isMobileMenuOpen ? 'line-3-open' : ''}`} />
          </motion.button>

          {/* Mobile overlay — wrapped in AnimatePresence for exit animation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="mobile-menu-overlay"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: easeLandor }}
              >
                <div className="mobile-menu-content">
                  {navigationItems.map((item, index) => {
                    const isActive = activeNavItem === item.sectionId;

                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        onKeyDown={(e) => handleKeyDown(e, item.href)}
                        className={`mobile-nav-item luxury-navigation ${isActive ? 'nav-item-active' : ''}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.07, ease: easeNatural }}
                        tabIndex={0}
                        aria-label={`Navigate to ${item.name} section`}
                        aria-current={isActive ? 'location' : undefined}
                      >
                        <motion.span
                          className="mobile-nav-number"
                          animate={{ color: isActive ? 'var(--coral)' : 'var(--charcoal-light)' }}
                          transition={{ duration: 0.382 }}
                        >
                          {item.number}
                        </motion.span>
                        <motion.span
                          className="mobile-nav-name"
                          animate={{ color: isActive ? 'var(--charcoal-mid)' : 'var(--charcoal-light)' }}
                          transition={{ duration: 0.382 }}
                        >
                          {item.name}
                        </motion.span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.nav>
  );
}
