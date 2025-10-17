'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorState = 'default' | 'project' | 'service' | 'button' | 'text';

export const CustomCursor = () => {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Smooth spring animations for luxury feel
  const springX = useSpring(cursorX, { damping: 20, stiffness: 300, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 20, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    // MOBILE DETECTION - Custom cursor only for desktop devices
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 1024;
    
    // Disable custom cursor on mobile/touch devices for optimal UX
    if (isMobile || hasTouchScreen || isSmallScreen) {
      setIsVisible(false);
      return;
    }

    const updateCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    // Cursor state management for digital architect theme
    const handleCursorState = () => {
      const target = document.elementFromPoint(cursorX.get(), cursorY.get());
      if (!target) return;

      // Digital Architect Cursor States
      if (target.closest('[data-cursor="project"]')) {
        setCursorState('project');
      } else if (target.closest('[data-cursor="service"]')) {
        setCursorState('service');
      } else if (target.closest('[data-cursor="button"]')) {
        setCursorState('button');
      } else if (target.closest('p, h1, h2, h3, h4')) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', handleCursorState);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', handleCursorState);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* RESPONSIVE CURSOR HIDING - Desktop Only */}
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
        
        @media (hover: none) or (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>

      {/* CUSTOM CURSOR - Digital Architect Theme */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: springX,
          top: springY,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* DEFAULT STATE - Elegant Minimal */}
        {cursorState === 'default' && (
          <motion.div
            className="w-6 h-6 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #ff6663 0%, #ff8a80 100%)',
              boxShadow: '0 4px 12px rgba(255, 102, 99, 0.3)'
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* PROJECT STATE - Architectural Compass */}
        {cursorState === 'project' && (
          <motion.div
            className="w-10 h-10 flex items-center justify-center"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: 1,
              rotate: 360,
              opacity: [0.8, 1, 0.9]
            }}
            transition={{ 
              scale: { duration: 0.3, ease: "backOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              background: 'radial-gradient(circle, rgba(255, 102, 99, 0.2) 0%, transparent 70%)',
              border: '2px solid #ff6663',
              borderRadius: '50%'
            }}
          >
            <motion.div
              className="w-1 h-4"
              style={{ backgroundColor: '#ff6663' }}
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}

        {/* SERVICE STATE - Wireframe Grid */}
        {cursorState === 'service' && (
          <motion.div
            className="w-9 h-9"
            initial={{ scale: 0, rotateX: 0 }}
            animate={{ 
              scale: 1,
              rotateX: [0, 15, 0],
              rotateY: [0, -15, 0]
            }}
            transition={{ 
              scale: { duration: 0.3, ease: "backOut" },
              rotateX: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              {/* Digital Architecture Grid */}
              {[0, 1, 2].map(row => (
                [0, 1, 2].map(col => (
                  <motion.rect
                    key={`grid-${row}-${col}`}
                    x={6 + col * 4}
                    y={6 + row * 4}
                    width="2"
                    height="2"
                    fill="#ff6663"
                    animate={{
                      opacity: [0.5, 1, 0.7],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      delay: (row + col) * 0.1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))
              )).flat()}
              {/* Grid Connections */}
              <motion.path
                d="M 8 8 L 16 8 L 16 16 L 8 16 Z"
                stroke="#ff6663"
                strokeWidth="0.5"
                fill="none"
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
        )}

        {/* BUTTON STATE - Blueprint Arrow */}
        {cursorState === 'button' && (
          <motion.div
            className="w-8 h-8 flex items-center justify-center"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ 
              scale: 1,
              rotate: 0,
              x: [0, 3, 0],
              y: [0, -2, 0]
            }}
            transition={{ 
              scale: { duration: 0.3, ease: "backOut" },
              rotate: { duration: 0.4, ease: "backOut" },
              x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 102, 99, 0.3) 50%, transparent 70%)',
              borderRadius: '50%'
            }}
          >
            <motion.div
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#ff6663',
                position: 'relative'
              }}
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Arrow Head */}
              <div
                style={{
                  position: 'absolute',
                  right: '-3px',
                  top: '-3px',
                  width: '8px',
                  height: '8px',
                  borderTop: '2px solid #ff6663',
                  borderRight: '2px solid #ff6663',
                  transform: 'rotate(45deg)'
                }}
              />
            </motion.div>
          </motion.div>
        )}

        {/* TEXT STATE - Typographic Ruler */}
        {cursorState === 'text' && (
          <motion.div
            className="w-7 h-7 flex items-center justify-center"
            initial={{ scale: 0, rotate: 90 }}
            animate={{ 
              scale: 1,
              rotate: 0,
              opacity: [0.7, 1, 0.8]
            }}
            transition={{ 
              scale: { duration: 0.3, ease: "backOut" },
              rotate: { duration: 0.4, ease: "backOut" },
              opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              {/* Ruler Lines */}
              <motion.line x1="6" y1="12" x2="18" y2="12" stroke="#ff6663" strokeWidth="1.5" />
              <motion.line x1="8" y1="10" x2="8" y2="14" stroke="#ff6663" strokeWidth="1" />
              <motion.line x1="12" y1="9" x2="12" y2="15" stroke="#ff6663" strokeWidth="1" />
              <motion.line x1="16" y1="10" x2="16" y2="14" stroke="#ff6663" strokeWidth="1" />
              {/* Precision Dots */}
              <motion.circle 
                cx="12" 
                cy="12" 
                r="1" 
                fill="#ff6663"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
        )}

        {/* CURSOR TRAIL PARTICLES - Digital Architect Theme */}
        <motion.div
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: 'rgba(255, 102, 99, 0.4)',
            left: '-20px',
            top: '-20px'
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </motion.div>
    </>
  );
};