'use client';

import { motion } from 'framer-motion';

export function SilvanaLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#374151', /* Charcoal background */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000
      }}
    >
      {/* Stella's Exact "S" - 30% Viewport */}
      <motion.svg
        viewBox="0 0 100 100"
        style={{ 
          width: '30vw', 
          height: '30vw',
          maxWidth: '300px',
          maxHeight: '300px',
          minWidth: '200px',
          minHeight: '200px'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Stroke-by-stroke S drawing - SUPER FAST */}
        <motion.path
          d="M 25,20 C 35,15 50,15 65,20 C 75,25 75,35 65,40 L 35,55 C 25,60 25,70 35,75 C 50,80 65,80 75,75"
          stroke="#FDFCF8" /* Vanilla whisper on charcoal */
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.8, /* Super fast - not making users wait */
            ease: "easeInOut"
          }}
        />

        {/* Stella's Burst Lines - ALL APPEAR AT ONCE (NOT ANIMATED INDIVIDUALLY) */}
        {Array.from({ length: 24 }, (_, i) => {
          // Mathematical burst pattern exactly like Stella
          const angle = (i * 15) * (Math.PI / 180);
          const centerX = 50;
          const centerY = 50;
          const innerRadius = 20;
          const outerRadius = 40;
          
          return (
            <motion.line
              key={i}
              x1={centerX + Math.cos(angle) * innerRadius}
              y1={centerY + Math.sin(angle) * innerRadius}
              x2={centerX + Math.cos(angle) * outerRadius}
              y2={centerY + Math.sin(angle) * outerRadius}
              stroke="#FDFCF8" /* Vanilla whisper on charcoal */
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2, /* ALL appear instantly together */
                delay: 0.8 /* Right after S completes */
              }}
            />
          );
        })}
      </motion.svg>
    </motion.div>
  );
}

export default SilvanaLoader;