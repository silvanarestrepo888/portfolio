'use client';
import { useState, useEffect } from 'react';

interface VideoBackgroundProps {
  section: 'hero' | 'about' | 'projects' | 'experience' | 'services';
  fallbackGradient?: string;
  overlay?: boolean;
  intensity?: number;
}

export const VideoBackground = ({ 
  section, 
  fallbackGradient, 
  overlay = true,
  intensity = 1
}: VideoBackgroundProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };
  
  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };
  
  const getVideoSources = () => {
    // Map sections to potential video files
    const videoMap = {
      hero: '/videos/hero-ambient',
      about: '/videos/about-elegant', 
      projects: '/videos/projects-dynamic',
      experience: '/videos/experience-flow',
      services: '/videos/services-professional'
    };
    
    return videoMap[section];
  };
  
  const getFallbackBackground = () => {
    if (fallbackGradient) {
      return fallbackGradient;
    }
    
    // Default fallbacks using brand colors
    const fallbacks = {
      hero: `linear-gradient(45deg, var(--pannocotta-primary) 0%, var(--pannocotta-warm) 100%)`,
      about: `linear-gradient(135deg, var(--pannocotta-primary) 0%, var(--pannocotta-soft) 100%)`,
      projects: `linear-gradient(180deg, var(--pannocotta-warm) 0%, var(--pannocotta-primary) 50%, var(--pannocotta-soft) 100%)`,
      experience: `linear-gradient(225deg, var(--pannocotta-soft) 0%, var(--pannocotta-primary) 100%)`,
      services: `linear-gradient(-45deg, var(--pannocotta-primary) 0%, var(--pannocotta-warm) 100%)`
    };
    
    return fallbacks[section];
  };
  
  const getOverlayBackground = () => {
    const overlayMap = {
      hero: `linear-gradient(135deg, rgba(255,251,238,0.85) 0%, rgba(254,249,240,0.90) 100%)`,
      about: `linear-gradient(45deg, rgba(255,251,238,0.90) 0%, rgba(253,247,235,0.85) 100%)`,
      projects: `linear-gradient(180deg, rgba(254,249,240,0.88) 0%, rgba(255,251,238,0.92) 100%)`,
      experience: `linear-gradient(225deg, rgba(253,247,235,0.90) 0%, rgba(255,251,238,0.85) 100%)`,
      services: `linear-gradient(-45deg, rgba(255,251,238,0.87) 0%, rgba(254,249,240,0.93) 100%)`
    };
    
    return overlayMap[section];
  };
  
  // Don't render video on mobile
  if (isMobile) {
    return (
      <div 
        className="video-bg-container"
        style={{
          background: getFallbackBackground()
        }}
      />
    );
  }
  
  return (
    <div className="video-bg-container">
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="video-bg"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <source src={`${getVideoSources()}-4k.mp4`} type="video/mp4" />
          <source src={`${getVideoSources()}-1080p.webm`} type="video/webm" />
          <source src={`${getVideoSources()}-720p.mp4`} type="video/mp4" />
        </video>
      )}
      
      {/* Fallback Background */}
      <div 
        className="video-bg-fallback"
        style={{
          position: 'absolute',
          inset: 0,
          background: getFallbackBackground(),
          opacity: (!videoLoaded || videoError) ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          zIndex: 1
        }}
      />
      
      {/* Brand Color Overlay */}
      {overlay && (
        <div 
          className="video-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: getOverlayBackground(),
            opacity: 0.85 * intensity,
            zIndex: 2,
            mixBlendMode: 'multiply'
          }}
        />
      )}
    </div>
  );
};