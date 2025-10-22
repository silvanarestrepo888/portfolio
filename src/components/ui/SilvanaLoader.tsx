'use client';

import { motion } from 'framer-motion';

export function SilvanaLoader() {
  return (
    <motion.div 
      className="silvana-loader-architectural"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.svg 
        viewBox="0 0 120 120" 
        className="silvana-s-signature"
        width="80"
        height="80"
      >
        {/* Silvana "S" with architectural precision */}
        <motion.path
          d="M30,35 Q60,15 90,35 Q60,55 90,75 Q60,95 30,75 Q60,55 30,35"
          stroke="var(--grapefruit-intelligence)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            duration: 1.8, 
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        
        {/* Architectural accent dot */}
        <motion.circle
          cx="60"
          cy="55"
          r="2"
          fill="var(--grapefruit-intelligence)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6,
            delay: 2.1,
            type: "spring",
            bounce: 0.6
          }}
        />
      </motion.svg>
      
      {/* Loading text with sophistication */}
      <motion.p 
        className="silvana-loading-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        Loading architectural precision...
      </motion.p>
    </motion.div>
  );
}

export default SilvanaLoader;