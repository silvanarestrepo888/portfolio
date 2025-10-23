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
          d="M 65,20 C 55,15 40,15 30,22 C 20,29 20,40 30,47 C 40,54 55,54 60,50 C 62,48 62,52 60,54 C 55,59 40,65 28,72 C 20,77 15,82 20,85"
          stroke="var(--vanilla-whisper)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1
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
            }
          }}
        />
      </motion.svg>
    </motion.div>
  );
}

export default SilvanaLoader;