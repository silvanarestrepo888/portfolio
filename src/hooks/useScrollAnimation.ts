'use client';

import { useEffect, useState, useCallback } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  // Track scroll position and direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };

    const throttledUpdate = throttle(updateScrollPosition, 16); // ~60fps
    window.addEventListener('scroll', throttledUpdate, { passive: true });

    return () => window.removeEventListener('scroll', throttledUpdate);
  }, []);

  // Create intersection observer for element visibility
  const observeElement = useCallback((element: Element | null) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return {
    isVisible,
    scrollY,
    scrollDirection,
    observeElement
  };
}

// Smooth scroll utility
export function smoothScrollTo(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Parallax scroll effect
export function useParallax(speed: number = 0.5) {
  const [transform, setTransform] = useState('translateY(0px)');

  useEffect(() => {
    const updateTransform = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      setTransform(`translateY(${parallax}px)`);
    };

    const throttledUpdate = throttle(updateTransform, 16);
    window.addEventListener('scroll', throttledUpdate, { passive: true });

    return () => window.removeEventListener('scroll', throttledUpdate);
  }, [speed]);

  return transform;
}

// Throttle utility function
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let inThrottle: boolean;
  return ((...args: any[]) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
}

// Scroll progress for progress bars
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setProgress(scrolled);
    };

    const throttledUpdate = throttle(updateProgress, 16);
    window.addEventListener('scroll', throttledUpdate, { passive: true });

    return () => window.removeEventListener('scroll', throttledUpdate);
  }, []);

  return progress;
}