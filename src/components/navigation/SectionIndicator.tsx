'use client';

import { motion } from 'framer-motion';
import { useSectionDetection, scrollToSection } from '../../hooks/useSectionDetection';

interface SectionIndicatorProps {
  className?: string;
}

export function SectionIndicator({ className = '' }: SectionIndicatorProps) {
  const { currentSection, sections, scrollProgress } = useSectionDetection();

  const sectionList = [
    { id: 'hero', label: 'Home', icon: '○' },
    { id: 'about', label: 'About', icon: '◊' },
    { id: 'projects', label: 'Projects', icon: '□' },
    { id: 'services', label: 'Services', icon: '◇' },
    { id: 'experience', label: 'Experience', icon: '△' }
  ];

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId, 80);
  };

  return (
    <div className={`section-indicator ${className}`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="section-progress-bar"
        style={{
          position: 'absolute',
          right: '-8px',
          top: 0,
          width: '2px',
          height: '100%',
          background: 'rgba(255, 248, 240, 0.2)',
          borderRadius: '1px'
        }}
      >
        <motion.div
          style={{
            width: '100%',
            background: 'var(--coral-primary)',
            borderRadius: '1px',
            transformOrigin: 'top'
          }}
          animate={{
            scaleY: scrollProgress / 100
          }}
          transition={{
            duration: 0.1,
            ease: 'linear'
          }}
        />
      </motion.div>

      {/* Section Dots */}
      {sectionList.map((section) => {
        const isActive = currentSection === section.id;
        const sectionInfo = sections.find(s => s.id === section.id);
        const isVisible = sectionInfo?.isVisible || false;

        return (
          <motion.div
            key={section.id}
            className="section-indicator-item"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => handleSectionClick(section.id)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Section Dot */}
            <motion.div
              className={`section-indicator-dot ${isActive ? 'active' : ''}`}
              animate={{
                scale: isActive ? 1.3 : isVisible ? 1.1 : 1,
                opacity: isVisible ? 1 : 0.5
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut'
              }}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: isActive 
                  ? 'var(--coral-primary)' 
                  : isVisible 
                    ? 'rgba(255, 248, 240, 0.6)' 
                    : 'rgba(255, 248, 240, 0.3)',
                boxShadow: isActive ? '0 0 20px rgba(255, 102, 99, 0.5)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            />

            {/* Section Label (appears on hover) */}
            <motion.div
              className="section-indicator-label"
              style={{
                position: 'absolute',
                right: '24px',
                background: 'rgba(26, 26, 26, 0.9)',
                color: 'var(--cream-primary)',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 248, 240, 0.1)',
                pointerEvents: 'none'
              }}
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              whileHover={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {section.label}
              
              {/* Arrow pointing to dot */}
              <div
                style={{
                  position: 'absolute',
                  right: '-4px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '4px solid rgba(26, 26, 26, 0.9)',
                  borderTop: '4px solid transparent',
                  borderBottom: '4px solid transparent'
                }}
              />
            </motion.div>

            {/* Active Section Indicator Ring */}
            {isActive && (
              <motion.div
                style={{
                  position: 'absolute',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: '1px solid var(--coral-primary)',
                  pointerEvents: 'none'
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0.4, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            )}
          </motion.div>
        );
      })}

      {/* Current Section Name */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-40px',
          right: 0,
          fontSize: '10px',
          fontWeight: '600',
          color: 'var(--coral-primary)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          opacity: 0.8
        }}
        key={currentSection}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.8, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {currentSection}
      </motion.div>
    </div>
  );
}

export default SectionIndicator;