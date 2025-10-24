'use client';

import { motion } from 'framer-motion';

export function StellaInspiredLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#1a1a1a', /* Dark background like Stella's */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000
      }}
    >
      {/* Stella's Exact "S" with Burst Pattern */}
      <motion.svg
        viewBox="0 0 200 200"
        style={{ width: '200px', height: '200px' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Exact recreation of Stella's "S" path */}
        <motion.path
          d="M 60,40 C 50,30 35,30 30,40 C 25,50 30,55 40,60 L 80,75 C 90,80 95,85 90,95 C 85,105 70,110 60,105 C 50,100 45,95 50,90"
          stroke="#4A5568" /* Your charcoal color */
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3
          }}
        />

        {/* Stella's Exact Burst Pattern - 24 lines radiating from S curves */}
        {Array.from({ length: 24 }, (_, i) => {
          // Mathematical precision for burst placement
          const angle = (i * 15) * (Math.PI / 180); // 15-degree intervals
          const baseX = 70; // Center point of S
          const baseY = 70;
          const innerRadius = 25;
          const outerRadius = 60;
          
          return (
            <motion.line
              key={i}
              x1={baseX + Math.cos(angle) * innerRadius}
              y1={baseY + Math.sin(angle) * innerRadius}
              x2={baseX + Math.cos(angle) * outerRadius}
              y2={baseY + Math.sin(angle) * outerRadius}
              stroke="#4A5568" /* Your charcoal color */
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1,
                opacity: [0, 1, 0.8]
              }}
              transition={{
                duration: 0.6,
                delay: 1.8 + (i * 0.02), // Staggered burst animation
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          );
        })}

        {/* Additional burst lines for upper S curve */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30) * (Math.PI / 180);
          const baseX = 50; // Upper curve of S
          const baseY = 50;
          const innerRadius = 20;
          const outerRadius = 45;
          
          return (
            <motion.line
              key={`upper-${i}`}
              x1={baseX + Math.cos(angle) * innerRadius}
              y1={baseY + Math.sin(angle) * innerRadius}
              x2={baseX + Math.cos(angle) * outerRadius}
              y2={baseY + Math.sin(angle) * outerRadius}
              stroke="#4A5568" /* Your charcoal color */
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1,
                opacity: [0, 0.8, 0.6]
              }}
              transition={{
                duration: 0.5,
                delay: 2.2 + (i * 0.03),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          );
        })}
      </motion.svg>
    </motion.div>
  );
}

export default StellaInspiredLoader;