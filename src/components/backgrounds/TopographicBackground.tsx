'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

// ============================================
// TOPOGRAPHIC BACKGROUND SYSTEM
// ============================================

export function TopographicBackground() {
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
      // Update CSS variable for parallax elements
      document.documentElement.style.setProperty('--scroll-y', scrollPercentage.toString());
    });
  }, []);

  // Force immediate visibility for testing
  useEffect(() => {
    // TEMPORARILY FORCE ALL SECTIONS TO BE VISIBLE IMMEDIATELY
    const sections = document.querySelectorAll('.topographic-luxury');
    console.log('🔍 DEBUG: Found topographic sections:', sections.length);
    
    sections.forEach((section, index) => {
      const htmlSection = section as HTMLElement;
      htmlSection.classList.add('in-view');
      htmlSection.classList.add('debug-mode'); // Add debug class
      htmlSection.classList.add('test-pattern'); // Add test pattern class
      htmlSection.classList.add('topographic-test-override'); // Add override class
      
      // Comprehensive debug logging
      const styles = window.getComputedStyle(htmlSection);
      const afterStyles = window.getComputedStyle(htmlSection, '::after');
      const beforeStyles = window.getComputedStyle(htmlSection, '::before');
      
      console.log(`📍 Section ${index + 1} Debug Info:`, {
        element: htmlSection,
        id: htmlSection.id,
        classList: htmlSection.classList.toString(),
        dataset: htmlSection.dataset,
        position: styles.position,
        background: styles.background,
        border: styles.border,
        zIndex: styles.zIndex,
        '::after': {
          content: afterStyles.content,
          display: afterStyles.display,
          opacity: afterStyles.opacity,
          zIndex: afterStyles.zIndex,
          position: afterStyles.position,
          background: afterStyles.background?.substring(0, 100) + '...'
        },
        '::before': {
          content: beforeStyles.content,
          display: beforeStyles.display,
          opacity: beforeStyles.opacity,
          background: beforeStyles.background?.substring(0, 100) + '...'
        }
      });
    });
    
    // Check if CSS files are loaded
    const styleSheets = Array.from(document.styleSheets);
    console.log('📄 Total stylesheets loaded:', styleSheets.length);
    
    // Look for topographic CSS
    let topographicFound = false;
    styleSheets.forEach(sheet => {
      try {
        if (sheet.href?.includes('topographic') || sheet.href?.includes('_next')) {
          console.log('📋 Stylesheet:', sheet.href);
        }
        const rules = Array.from(sheet.cssRules || []);
        const topographicRules = rules.filter((rule) => {
          const cssRule = rule as CSSStyleRule;
          return cssRule.selectorText?.includes('topographic');
        });
        if (topographicRules.length > 0) {
          topographicFound = true;
          console.log('✅ Found topographic rules:', topographicRules.length);
        }
      } catch {
        // Cross-origin stylesheets will throw - this is expected
      }
    });
    
    if (!topographicFound) {
      console.log('⚠️ WARNING: No topographic CSS rules found!');
      console.log('This means the CSS file is not loading properly.');
    }
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    // Create intersection observer for texture reveal (disabled for testing)
    // observerRef.current = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add('in-view');
    //       }
    //     });
    //   },
    //   {
    //     threshold: 0.1,
    //     rootMargin: '0px 0px -10% 0px'
    //   }
    // );

    // Observe all topographic sections (disabled for testing)
    // sections.forEach(section => {
    //   observerRef.current?.observe(section);
    // });

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

function debounce<T extends (...args: unknown[]) => unknown>(
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