'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function StoryConnections() {
  const [activeConnection, setActiveConnection] = useState<string | null>('test'); // Start with test value

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Simple scroll-based detection
      const scrollRatio = scrollY / windowHeight;
      
      if (scrollRatio > 0.5 && scrollRatio < 1.2) {
        setActiveConnection('hero-to-about');
      } else if (scrollRatio > 1.5 && scrollRatio < 2.2) {
        setActiveConnection('about-to-projects');
      } else if (scrollRatio > 2.5 && scrollRatio < 3.2) {
        setActiveConnection('projects-to-services');
      } else if (scrollRatio > 3.5 && scrollRatio < 4.2) {
        setActiveConnection('services-to-experience');
      } else {
        setActiveConnection(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 50, // Higher z-index to ensure visibility
        overflow: 'hidden'
      }}
    >
      {/* Always visible test element to verify component is rendering */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px',
          background: 'rgba(255, 102, 99, 0.9)',
          color: 'white',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: 'bold',
          zIndex: 100
        }}
      >
        DEBUG: {activeConnection || 'No Connection'}
      </div>

      {/* Simple visible connection line that should definitely appear */}
      {activeConnection && (
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '3px',
            background: 'linear-gradient(to right, #4A5568, transparent, #4A5568)',
            transformOrigin: 'center',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.8 }}
          exit={{ scaleX: 0, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      )}
      
      {/* Connection text overlay */}
      {activeConnection && (
        <motion.div
          style={{
            position: 'absolute',
            top: '48%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#4A5568',
            fontSize: '0.875rem',
            fontStyle: 'italic',
            fontFamily: 'var(--font-architectural-body)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '4px 12px',
            borderRadius: '20px',
            border: '1px solid rgba(74, 85, 104, 0.2)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {activeConnection === 'hero-to-about' && 'The spark of curiosity becomes...'}
          {activeConnection === 'about-to-projects' && '...strategic expertise across...'}
          {activeConnection === 'projects-to-services' && '...crystallized into...'}
          {activeConnection === 'services-to-experience' && '...two decades of...'}
        </motion.div>
      )}
    </div>
  );
}

export default StoryConnections;