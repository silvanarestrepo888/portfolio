'use client';

import { motion } from 'framer-motion';

export function SilvanaLoader() {
  // Generate burst lines exactly like Stella's pattern
  const burstLines = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 15) * (Math.PI / 180); // 15-degree increments
    const centerX = 50;
    const centerY = 50;
    const innerRadius = 15;
    const outerRadius = 35;
    
    return {
      x1: centerX + Math.cos(angle) * innerRadius,
      y1: centerY + Math.sin(angle) * innerRadius,
      x2: centerX + Math.cos(angle) * outerRadius,
      y2: centerY + Math.sin(angle) * outerRadius,
      delay: i * 0.03 // Staggered animation
    };
  });

  return (
    <motion.div 
      className="silvana-loader-luxury"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--vanilla-foundation)', /* Panna cotta luxury background */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      {/* Stella-Inspired S with Burst Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }}
        style={{
          position: 'relative',
          width: '120px',
          height: '120px'
        }}
      >
        <motion.svg 
          viewBox="0 0 100 100" 
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          {/* Central "S" Letter - Sophisticated Typography */}
          <motion.path
            d="M 70,25 C 65,20 50,18 35,22 C 25,25 22,32 25,38 C 28,44 40,48 50,52 C 60,56 65,60 62,66 C 59,72 50,75 40,73 C 30,71 25,65 30,62"
            stroke="#4A5568" /* Charcoal color */
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ 
              pathLength: 0,
              opacity: 0
            }}
            animate={{ 
              pathLength: 1,
              opacity: 1
            }}
            transition={{ 
              pathLength: {
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4
              },
              opacity: {
                duration: 0.3,
                delay: 0.4
              }
            }}
          />
          
          {/* Radiating Burst Lines - Exactly Like Stella */}
          {burstLines.map((line, index) => (
            <motion.line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#4A5568" /* Charcoal color */
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ 
                pathLength: 0,
                opacity: 0,
                scale: 0.5
              }}
              animate={{ 
                pathLength: 1,
                opacity: [0, 1, 0.8],
                scale: [0.5, 1, 1.1]
              }}
              transition={{
                duration: 0.8,
                delay: 0.8 + line.delay,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          ))}
        </motion.svg>

        {/* Subtle Pulse Effect */}
        <motion.div
          style={{
            position: 'absolute',
            inset: '-10px',
            border: '1px solid #4A5568',
            borderRadius: '50%',
            opacity: 0.3
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1.5],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 1.5,
            delay: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />
      </motion.div>

      {/* Sophisticated Brand Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        style={{
          fontSize: '1.125rem',
          fontFamily: 'var(--font-architectural-display)',
          fontWeight: '300',
          color: '#4A5568', /* Charcoal color */
          letterSpacing: '0.15em',
          textTransform: 'lowercase'
        }}
      >
        silvana
        <motion.span
          style={{ color: 'var(--grapefruit-intelligence)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          .
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default SilvanaLoader;