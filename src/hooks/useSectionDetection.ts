'use client';

import { useState, useEffect, useCallback } from 'react';

interface SectionInfo {
  id: string;
  name: string;
  isVisible: boolean;
  progress: number;
}

interface UseSectionDetectionResult {
  currentSection: string;
  sections: SectionInfo[];
  scrollProgress: number;
  isTransitioning: boolean;
}

export function useSectionDetection(): UseSectionDetectionResult {
  const [currentSection, setCurrentSection] = useState('hero');
  const [sections, setSections] = useState<SectionInfo[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const updateSectionVisibility = useCallback(() => {
    const sectionIds = ['hero', 'about', 'projects', 'experience', 'services'];
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset;

    // Calculate overall scroll progress
    const progress = Math.min(100, Math.max(0, (scrollTop / documentHeight) * 100));
    setScrollProgress(progress);

    const sectionInfos: SectionInfo[] = [];
    let activeSection = 'hero';
    let maxVisibility = 0;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;

      // Calculate visibility percentage
      const visibleTop = Math.max(0, Math.min(windowHeight, windowHeight - elementTop));
      const visibleBottom = Math.max(0, Math.min(windowHeight, elementBottom));
      const visibleHeight = Math.max(0, visibleBottom - Math.max(0, windowHeight - visibleTop));
      const visibilityPercentage = (visibleHeight / elementHeight) * 100;

      const isVisible = visibilityPercentage > 10; // Section is considered visible if 10% is shown
      
      // Calculate section progress (0-100% through the section)
      const sectionProgress = Math.max(0, Math.min(100, 
        ((windowHeight / 2 - elementTop) / elementHeight) * 100
      ));

      sectionInfos.push({
        id,
        name: id.charAt(0).toUpperCase() + id.slice(1),
        isVisible,
        progress: sectionProgress
      });

      // Determine active section (most visible one)
      if (visibilityPercentage > maxVisibility) {
        maxVisibility = visibilityPercentage;
        activeSection = id;
      }
    });

    setSections(sectionInfos);
    
    // Only update current section if it's different and visibility is significant
    if (activeSection !== currentSection && maxVisibility > 25) {
      setIsTransitioning(true);
      setCurrentSection(activeSection);
      
      // Reset transition state after animation
      setTimeout(() => setIsTransitioning(false), 1200);
    }
  }, [currentSection]);

  useEffect(() => {
    // Throttled scroll handler for performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateSectionVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call
    updateSectionVisibility();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSectionVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSectionVisibility);
    };
  }, [updateSectionVisibility]);

  return {
    currentSection,
    sections,
    scrollProgress,
    isTransitioning
  };
}

// Utility function to get section color theme
export function getSectionColorTheme(sectionId: string): string {
  const themes = {
    hero: 'section-hero-sophisticated',
    about: 'section-about-sophisticated', 
    projects: 'section-projects-sophisticated',
    experience: 'section-experience-sophisticated',
    services: 'section-services-sophisticated'
  };
  
  return themes[sectionId as keyof typeof themes] || themes.hero;
}

// Utility function to smooth scroll to section
export function scrollToSection(sectionId: string, offset: number = 0): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

export default useSectionDetection;