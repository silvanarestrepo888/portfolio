'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useSectionDetection, scrollToSection } from '../../hooks/useSectionDetection';

interface SectionIndicatorProps {
  className?: string;
}

const easeLandor = [0.25, 0.46, 0.45, 0.94] as const;

export function SectionIndicator({ className = '' }: SectionIndicatorProps) {
  const { currentSection, sections, scrollProgress } = useSectionDetection();

  const sectionList = [
    { id: 'hero',             label: 'home'       },
    { id: 'about',            label: 'about'      },
    { id: 'projects',         label: 'projects'   },
    { id: 'project-snippets', label: 'snippets'   },
    { id: 'services',         label: 'services'   },
    { id: 'experience',       label: 'experience' },
  ];

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId, 80);
  };

  return (
    <div className={`section-indicator ${className}`}>

      {/* Scroll progress track */}
      <div
        style={{
          position: 'absolute',
          right: '-8px',
          top: 0,
          width: '2px',
          height: '100%',
          background: 'rgba(255, 251, 240, 0.15)',
          borderRadius: '1px',
        }}
      >
        <motion.div
          style={{
            width: '100%',
            background: 'var(--coral)',
            borderRadius: '1px',
            transformOrigin: 'top',
          }}
          animate={{ scaleY: scrollProgress / 100 }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>

      {/* Section dots */}
      {sectionList.map((section) => {
        const isActive  = currentSection === section.id;
        const sectionInfo = sections.find(s => s.id === section.id);
        const isVisible = sectionInfo?.isVisible || false;

        return (
          <motion.div
            key={section.id}
            className="section-indicator-item"
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            onClick={() => handleSectionClick(section.id)}
            whileHover="hovered"
            whileTap={{ scale: 0.9 }}
          >
            {/* Dot */}
            <motion.div
              className={`section-indicator-dot ${isActive ? 'active' : ''}`}
              animate={{
                scale:   isActive ? 1.3 : isVisible ? 1.1 : 1,
                opacity: isVisible ? 1 : 0.4,
                background: isActive
                  ? 'var(--coral)'
                  : isVisible
                  ? 'rgba(255, 251, 240, 0.6)'
                  : 'rgba(255, 251, 240, 0.25)',
                boxShadow: isActive ? '0 0 16px rgba(255, 102, 99, 0.5)' : '0 0 0px rgba(0,0,0,0)',
              }}
              transition={{ duration: 0.382, ease: easeLandor }}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
              }}
            />

            {/* Hover label — triggered by parent whileHover="hovered" */}
            <motion.div
              className="section-indicator-label"
              variants={{
                hovered: { opacity: 1, x: 0,  scale: 1,    transition: { duration: 0.2, ease: easeLandor } },
              }}
              initial={{ opacity: 0, x: 8, scale: 0.9 }}
              style={{
                position: 'absolute',
                right: '22px',
                background: 'rgba(28, 28, 28, 0.88)',
                color: 'var(--vanilla-pure)',
                padding: '5px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 251, 240, 0.08)',
                pointerEvents: 'none',
              }}
            >
              {section.label}
              {/* Arrow */}
              <div
                style={{
                  position: 'absolute',
                  right: '-4px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '4px solid rgba(28, 28, 28, 0.88)',
                  borderTop: '4px solid transparent',
                  borderBottom: '4px solid transparent',
                }}
              />
            </motion.div>

            {/* Active pulse ring */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key="ring"
                  style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '1px solid var(--coral)',
                    pointerEvents: 'none',
                  }}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.2, 0.7] }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {/* Current section label below dots */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          style={{
            position: 'absolute',
            bottom: '-36px',
            right: 0,
            fontSize: '9px',
            fontWeight: 600,
            color: 'var(--coral)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 0.75, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.382, ease: easeLandor }}
        >
          {currentSection}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SectionIndicator;
