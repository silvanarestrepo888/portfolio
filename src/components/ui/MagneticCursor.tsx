'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

type CursorState = 'default' | 'hover' | 'project';
type CursorTheme = 'light' | 'dark';

// Luxuriously slow spring — the S trails behind with weight
const SPRING = { damping: 22, stiffness: 150, mass: 0.9 };

const stateStyles: Record<CursorState, Record<CursorTheme, { opacity: number; scale: number; color: string }>> = {
  default: {
    light: { opacity: 0.40, scale: 1,    color: 'rgba(74, 85, 104, 1)'       },
    dark:  { opacity: 0.55, scale: 1,    color: 'rgba(245, 245, 220, 0.85)'  },
  },
  hover: {
    light: { opacity: 0.85, scale: 1.22, color: 'rgba(74, 85, 104, 1)'       },
    dark:  { opacity: 0.95, scale: 1.22, color: 'rgba(245, 245, 220, 1)'     },
  },
  project: {
    light: { opacity: 1.0,  scale: 1.6,  color: 'rgba(255, 102, 99, 0.95)'  },
    dark:  { opacity: 1.0,  scale: 1.6,  color: 'rgba(255, 102, 99, 0.95)'  },
  },
};

// Sections with dark backgrounds — S becomes vanilla
const DARK_SELECTORS = [
  '#projects',
  '.projects-section',
  '.section-projects-sophisticated',
  '.projects-carousel-core',
  '.project-card-wrapper',
  '[class*="snippet-card"]',
  '.balanced-content-section',
].join(', ');

export function MagneticCursor() {
  // Raw position — no lag, used for the precise dot
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);

  // Spring position — luxurious lag, used for the S
  const springX = useSpring(rawX, SPRING);
  const springY = useSpring(rawY, SPRING);

  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [theme, setTheme] = useState<CursorTheme>('light');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as Element;

      // State detection
      if (target.closest(
        '.project-card-wrapper, [class*="snippet-card"], .balanced-content-section, .projects-carousel-core'
      )) {
        setCursorState('project');
      } else if (target.closest('a, button, .svc-row-header, .exp-entry')) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }

      // Theme detection — dark vs light background section
      setTheme(target.closest(DARK_SELECTORS) ? 'dark' : 'light');
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [rawX, rawY, visible]);

  const style = stateStyles[cursorState][theme];
  const dotColor = theme === 'dark' ? 'rgba(245, 245, 220, 0.7)' : 'rgba(74, 85, 104, 0.55)';

  return (
    <>
      {/* Precise tracking dot — no spring, snaps instantly */}
      <motion.div
        aria-hidden="true"
        style={{
          position:      'fixed',
          left:          0,
          top:           0,
          x:             rawX,
          y:             rawY,
          translateX:    '-50%',
          translateY:    '-50%',
          width:         '4px',
          height:        '4px',
          borderRadius:  '50%',
          pointerEvents: 'none',
          zIndex:        100000,
          background:    dotColor,
        }}
        animate={{ opacity: visible ? 1 : 0, scale: cursorState === 'project' ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* The S — luxurious spring lag */}
      <motion.div
        aria-hidden="true"
        style={{
          position:      'fixed',
          left:          0,
          top:           0,
          x:             springX,
          y:             springY,
          translateX:    '-50%',
          translateY:    '-50%',
          pointerEvents: 'none',
          zIndex:        99999,
          fontFamily:    '"Cormorant Garamond", "Cormorant", serif',
          fontSize:      '28px',
          fontWeight:    300,
          fontStyle:     'italic',
          lineHeight:    1,
          userSelect:    'none',
          letterSpacing: '-0.02em',
        }}
        animate={{
          opacity: visible ? style.opacity : 0,
          scale:   style.scale,
          color:   style.color,
        }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      >
        S
      </motion.div>
    </>
  );
}
