'use client';

import { motion } from 'framer-motion';

export function SilvanaLoader() {
  // Mathematical precision - S letterform constructed from radiating lines
  const centerX = 50;
  const centerY = 50;
  
  // Precise S curve coordinates - mathematical engineering
  const sFormingLines = [
    // Top curve of S (right curve)
    { x: 35, y: 20 }, // Top curve start
    { x: 45, y: 15 }, // Top curve peak
    { x: 55, y: 18 }, // Top curve descent
    { x: 65, y: 25 }, // Top curve end
    
    // Middle transition (S waist)
    { x: 60, y: 35 }, // Middle approach
    { x: 45, y: 45 }, // S waist center
    { x: 35, y: 55 }, // Middle exit
    
    // Bottom curve of S (left curve)  
    { x: 30, y: 65 }, // Bottom curve start
    { x: 40, y: 75 }, // Bottom curve depth
    { x: 55, y: 80 }, // Bottom curve rise
    { x: 70, y: 75 }, // Bottom curve end
    
    // Additional detail lines for S definition
    { x: 40, y: 22 }, // Top curve detail
    { x: 58, y: 20 }, // Top curve detail
    { x: 52, y: 40 }, // Middle detail
    { x: 42, y: 60 }, // Middle detail
    { x: 48, y: 78 }, // Bottom curve detail
    { x: 65, y: 78 }, // Bottom curve detail
    
    // Outer S definition lines
    { x: 25, y: 25 }, // Outer top
    { x: 75, y: 30 }, // Outer top right
    { x: 25, y: 70 }, // Outer bottom left  
    { x: 75, y: 70 }, // Outer bottom
  ];

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
      {/* Mathematical S Construction - 30% Viewport */}
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
        {/* Stella's Line-Constructed S - Stroke by Stroke */}
        {sFormingLines.map((point, index) => (
          <motion.line
            key={index}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke="#FDFCF8" /* Vanilla whisper on charcoal */
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: 1
            }}
            transition={{
              duration: 0.04, /* Each line draws quickly */
              delay: index * 0.04, /* Stroke by stroke - 0.04s per line */
              ease: "easeOut"
            }}
          />
        ))}

        {/* Additional radiating lines for burst effect completeness */}
        {Array.from({ length: 8 }, (_, i) => {
          // Fill gaps with additional radiating lines for full burst
          const angle = (i * 45) * (Math.PI / 180);
          const radius = 35;
          
          return (
            <motion.line
              key={`fill-${i}`}
              x1={centerX}
              y1={centerY}
              x2={centerX + Math.cos(angle) * radius}
              y2={centerY + Math.sin(angle) * radius}
              stroke="#FDFCF8"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1,
                opacity: 0.6
              }}
              transition={{
                duration: 0.04,
                delay: 0.8 + (i * 0.02), /* After main S completes */
                ease: "easeOut"
              }}
            />
          );
        })}
      </motion.svg>
    </motion.div>
  );
}

export default SilvanaLoader;