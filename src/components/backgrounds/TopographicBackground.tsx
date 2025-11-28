'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

// ============================================
// TOPOGRAPHIC BACKGROUND SYSTEM
// ============================================

interface TopographicBackgroundProps {
  className?: string;
}

export function TopographicBackground({ className = '' }: TopographicBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const rafRef = useRef<number | null>(null);

  // Handle scroll for micro-parallax (5% max)
  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      
      // Apply micro-parallax (5% maximum movement)
      setScrollY(scrollPercentage);
      
      // Update CSS variable for parallax elements
      document.documentElement.style.setProperty('--scroll-y', scrollPercentage.toString());
    });
  }, []);

  // Intersection Observer for reveal animation
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // If reduced motion is preferred, reveal all textures immediately
      const sections = document.querySelectorAll('.topographic-luxury');
      sections.forEach(section => {
        section.classList.add('in-view');
      });
      return;
    }

    // Create intersection observer for texture reveal
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Observe all topographic sections
    const sections = document.querySelectorAll('.topographic-luxury');
    sections.forEach(section => {
      observerRef.current?.observe(section);
    });

    // Add scroll listener for parallax
    const debouncedScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedScroll, { passive: true });

    return () => {
      // Cleanup
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', debouncedScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  // Add accent elements to sections
  useEffect(() => {
    const sections = document.querySelectorAll('.topographic-luxury');
    
    sections.forEach(section => {
      // Check if accent already exists
      if (!section.querySelector('.topographic-accent')) {
        const accent = document.createElement('div');
        accent.className = 'topographic-accent';
        section.appendChild(accent);
      }
      
      // Add parallax class to sections that should have it
      const sectionType = section.getAttribute('data-topographic');
      if (sectionType && ['hero', 'projects'].includes(sectionType)) {
        section.classList.add('topographic-parallax');
      }
    });
  }, []);

  return null; // This component doesn't render anything visible
}

// ============================================
// TOPOGRAPHIC SECTION WRAPPER
// ============================================

interface TopographicSectionProps {
  children: React.ReactNode;
  section: 'hero' | 'about' | 'projects' | 'experience' | 'services';
  className?: string;
}

export function TopographicSection({ 
  children, 
  section, 
  className = '' 
}: TopographicSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Add loading state initially
    element.classList.add('topographic-loading');

    // Remove loading state after a short delay
    const timer = setTimeout(() => {
      element.classList.remove('topographic-loading');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`topographic-luxury ${className}`}
      data-topographic={section}
    >
      {children}
    </section>
  );
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// ============================================
// HOOKS
// ============================================

export function useTopographicEffect() {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref: elementRef, isInView };
}