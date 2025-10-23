'use client';

import { motion } from 'framer-motion';

export function SilvanaLoader() {
  return (
    <motion.div 
      className="loader-overlay"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -100, scale: 1.05 }}
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      <motion.svg 
        viewBox="0 0 100 100" 
        className="s-signature"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {/* Elegant Serif "S" - Signature Mark */}
        <motion.path
          d="M 35,25 Q 60,15 75,30 Q 85,45 70,55 Q 55,60 55,65 Q 55,70 65,75 Q 75,80 70,90 Q 60,100 35,90"
          stroke="var(--vanilla-whisper)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            fill: ["transparent", "transparent", "var(--vanilla-whisper)"]
          }}
          transition={{ 
            pathLength: {
              duration: 1.5, 
              ease: [0.65, 0, 0.35, 1],
              delay: 0.3
            },
            opacity: {
              duration: 0.3,
              delay: 0.3
            },
            fill: {
              duration: 0.5,
              delay: 1.8
            }
          }}
        />
        
        {/* Subtle pulse after drawing completes */}
        <motion.path
          d="M 35,25 Q 60,15 75,30 Q 85,45 70,55 Q 55,60 55,65 Q 55,70 65,75 Q 75,80 70,90 Q 60,100 35,90"
          stroke="none"
          fill="var(--vanilla-whisper)"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0, 1, 1]
          }}
          transition={{ 
            duration: 0.5,
            delay: 1.8,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
    </motion.div>
  );
}

export default SilvanaLoader;