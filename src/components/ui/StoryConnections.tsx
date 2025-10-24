'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function StoryConnections() {
  const [activeConnection, setActiveConnection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      
      // Detect section transitions for connection lines
      const sections = ['hero', 'about', 'projects', 'services', 'experience'];
      let currentConnection = null;
      
      sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionMiddle = rect.top + rect.height / 2;
          
          // Trigger connection when section is in middle of viewport
          if (sectionMiddle > windowHeight * 0.4 && sectionMiddle < windowHeight * 0.6) {
            if (index > 0) {
              const prevSection = sections[index - 1];
              currentConnection = `${prevSection}-to-${sectionId}`;
            }
          }
        }
      });
      
      setActiveConnection(currentConnection);
    };

    // Add scroll listener with throttling for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <div 
      className="story-connections-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none', // Don't interfere with existing interactions
        zIndex: 5, // Below navigation but above content
        overflow: 'hidden'
      }}
    >
      {/* Connection: Hero → About */}
      <motion.svg
        className="connection-line hero-to-about"
        style={{
          position: 'absolute',
          top: '50%',
          left: '20%',
          width: '300px',
          height: '200px',
          opacity: activeConnection === 'hero-to-about' ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
        viewBox="0 0 300 200"
      >
        <motion.path
          d="M 50,100 Q 150,50 250,100"
          stroke="#4A5568"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: activeConnection === 'hero-to-about' ? 1 : 0 
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        
        {/* Subtle connection text */}
        <motion.text
          x="150"
          y="60"
          textAnchor="middle"
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-architectural-body)',
            color: '#4A5568',
            opacity: 0.6,
            fontStyle: 'italic'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: activeConnection === 'hero-to-about' ? 0.6 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The spark of curiosity becomes...
        </motion.text>
      </motion.svg>

      {/* Connection: About → Projects */}
      <motion.svg
        className="connection-line about-to-projects"
        style={{
          position: 'absolute',
          top: '50%',
          right: '20%',
          width: '300px',
          height: '200px',
          opacity: activeConnection === 'about-to-projects' ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
        viewBox="0 0 300 200"
      >
        <motion.path
          d="M 50,100 Q 150,150 250,100"
          stroke="#4A5568"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: activeConnection === 'about-to-projects' ? 1 : 0 
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        
        <motion.text
          x="150"
          y="140"
          textAnchor="middle"
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-architectural-body)',
            color: '#4A5568',
            opacity: 0.6,
            fontStyle: 'italic'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: activeConnection === 'about-to-projects' ? 0.6 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ...strategic expertise across...
        </motion.text>
      </motion.svg>

      {/* Connection: Projects → Services */}
      <motion.svg
        className="connection-line projects-to-services"
        style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          width: '400px',
          height: '150px',
          opacity: activeConnection === 'projects-to-services' ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
        viewBox="0 0 400 150"
      >
        <motion.path
          d="M 50,75 Q 200,25 350,75"
          stroke="#4A5568"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: activeConnection === 'projects-to-services' ? 1 : 0 
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        
        <motion.text
          x="200"
          y="40"
          textAnchor="middle"
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-architectural-body)',
            color: '#4A5568',
            opacity: 0.6,
            fontStyle: 'italic'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: activeConnection === 'projects-to-services' ? 0.6 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ...crystallized into...
        </motion.text>
      </motion.svg>

      {/* Connection: Services → Experience */}
      <motion.svg
        className="connection-line services-to-experience"
        style={{
          position: 'absolute',
          top: '50%',
          right: '25%',
          width: '350px',
          height: '180px',
          opacity: activeConnection === 'services-to-experience' ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
        viewBox="0 0 350 180"
      >
        <motion.path
          d="M 50,90 Q 175,30 300,90"
          stroke="#4A5568"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: activeConnection === 'services-to-experience' ? 1 : 0 
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        
        <motion.text
          x="175"
          y="45"
          textAnchor="middle"
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-architectural-body)',
            color: '#4A5568',
            opacity: 0.6,
            fontStyle: 'italic'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: activeConnection === 'services-to-experience' ? 0.6 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ...two decades of...
        </motion.text>
      </motion.svg>
    </div>
  );
}

export default StoryConnections;