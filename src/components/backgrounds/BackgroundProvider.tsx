'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { VideoBackground } from './VideoBackground';
import { InteractiveBackground } from './InteractiveBackground';
import { TopographicSection } from './TopographicBackground';

// ============================================
// BACKGROUND SYSTEM TYPES
// ============================================

type SectionType = 'hero' | 'about' | 'projects' | 'experience' | 'services';

interface BackgroundConfig {
  video?: boolean;
  interactive?: boolean;
  topographic?: boolean;
  intensity?: number;
  fallbackGradient?: string;
}

interface BackgroundContextType {
  currentSection: SectionType | null;
  setCurrentSection: (section: SectionType | null) => void;
  isReducedMotion: boolean;
  isMobile: boolean;
  backgroundConfigs: Record<SectionType, BackgroundConfig>;
}

// ============================================
// BACKGROUND CONFIGURATIONS
// ============================================

const defaultBackgroundConfigs: Record<SectionType, BackgroundConfig> = {
  hero: {
    video: true,
    interactive: true,
    topographic: true,
    intensity: 1,
    fallbackGradient: `linear-gradient(135deg, 
      rgba(255,251,238,0.95) 0%, 
      rgba(255,102,99,0.05) 50%, 
      rgba(254,249,240,0.98) 100%)`
  },
  about: {
    video: false,
    interactive: true,
    topographic: true,
    intensity: 0.8,
    fallbackGradient: `linear-gradient(45deg, 
      rgba(255,251,238,0.97) 0%, 
      rgba(253,247,235,0.95) 100%)`
  },
  projects: {
    video: true,
    interactive: true,
    topographic: true,
    intensity: 0.9,
    fallbackGradient: `linear-gradient(180deg, 
      rgba(254,249,240,0.96) 0%, 
      rgba(255,251,238,0.98) 100%)`
  },
  experience: {
    video: false,
    interactive: true,
    topographic: true,
    intensity: 0.7,
    fallbackGradient: `linear-gradient(225deg, 
      rgba(253,247,235,0.97) 0%, 
      rgba(255,251,238,0.95) 100%)`
  },
  services: {
    video: false,
    interactive: true,
    topographic: true,
    intensity: 0.85,
    fallbackGradient: `linear-gradient(-45deg, 
      rgba(255,251,238,0.96) 0%, 
      rgba(254,249,240,0.98) 100%)`
  }
};

// ============================================
// CONTEXT & PROVIDER
// ============================================

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within BackgroundProvider');
  }
  return context;
};

interface BackgroundProviderProps {
  children: React.ReactNode;
}

export function BackgroundProvider({ children }: BackgroundProviderProps) {
  const [currentSection, setCurrentSection] = useState<SectionType | null>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [backgroundConfigs] = useState(defaultBackgroundConfigs);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer for automatic section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const section = entry.target.getAttribute('data-section') as SectionType;
            if (section) {
              setCurrentSection(section);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    // Observe all sections with data-section attribute
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const value: BackgroundContextType = {
    currentSection,
    setCurrentSection,
    isReducedMotion,
    isMobile,
    backgroundConfigs
  };

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
}

// ============================================
// BACKGROUND LAYER COMPONENT
// ============================================

interface BackgroundLayerProps {
  section: SectionType;
  children: React.ReactNode;
  className?: string;
  enableVideo?: boolean;
  enableInteractive?: boolean;
  enableTopographic?: boolean;
}

export function BackgroundLayer({
  section,
  children,
  className = '',
  enableVideo = true,
  enableInteractive = true,
  enableTopographic = true
}: BackgroundLayerProps) {
  const { isReducedMotion, isMobile, backgroundConfigs } = useBackground();
  const config = backgroundConfigs[section];
  
  const shouldShowVideo = enableVideo && config.video && !isMobile && !isReducedMotion;
  const shouldShowInteractive = enableInteractive && config.interactive && !isReducedMotion;
  const shouldShowTopographic = enableTopographic && config.topographic;

  if (shouldShowTopographic) {
    // Use TopographicSection as the base wrapper
    return (
      <TopographicSection section={section} className={className}>
        <div className="background-layer-container" style={{ position: 'relative' }}>
          {shouldShowVideo && (
            <div className="video-background-layer" style={{ 
              position: 'absolute', 
              inset: 0, 
              zIndex: 0 
            }}>
              <VideoBackground
                section={section}
                fallbackGradient={config.fallbackGradient}
                intensity={config.intensity}
                overlay={false}
              />
            </div>
          )}
          
          {shouldShowInteractive && (
            <div className="interactive-background-layer" style={{ 
              position: 'absolute', 
              inset: 0, 
              zIndex: 1,
              pointerEvents: 'none'
            }}>
              <InteractiveBackground
                section={section}
                intensity={config.intensity}
              />
            </div>
          )}
          
          <div className="content-layer" style={{ 
            position: 'relative', 
            zIndex: 10 
          }}>
            {children}
          </div>
        </div>
      </TopographicSection>
    );
  }

  // Fallback to regular section if topographic is disabled
  return (
    <section 
      className={`background-section ${className}`} 
      data-section={section}
      style={{ position: 'relative' }}
    >
      {shouldShowVideo && (
        <div className="video-background-layer" style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0 
        }}>
          <VideoBackground
            section={section}
            fallbackGradient={config.fallbackGradient}
            intensity={config.intensity}
            overlay={true}
          />
        </div>
      )}
      
      {shouldShowInteractive && (
        <div className="interactive-background-layer" style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 1,
          pointerEvents: 'none'
        }}>
          <InteractiveBackground
            section={section}
            intensity={config.intensity}
          />
        </div>
      )}
      
      {!shouldShowVideo && config.fallbackGradient && (
        <div 
          className="fallback-gradient-layer"
          style={{ 
            position: 'absolute',
            inset: 0,
            background: config.fallbackGradient,
            zIndex: 0
          }}
        />
      )}
      
      <div className="content-layer" style={{ 
        position: 'relative', 
        zIndex: 10 
      }}>
        {children}
      </div>
    </section>
  );
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

export function useBackgroundPerformance() {
  const [fps, setFps] = useState(60);
  const [isPerformant, setIsPerformant] = useState(true);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let rafId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const currentFps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setFps(currentFps);
        setIsPerformant(currentFps >= 30);
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      rafId = requestAnimationFrame(measureFPS);
    };

    rafId = requestAnimationFrame(measureFPS);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return { fps, isPerformant };
}