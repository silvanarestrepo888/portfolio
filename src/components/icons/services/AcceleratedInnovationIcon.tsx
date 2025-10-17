'use client';

import { motion } from 'framer-motion';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const AcceleratedInnovationIcon = ({ 
  size = 32, 
  color = '#ff6663', 
  className = '',
  animated = true 
}: IconProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ overflow: 'visible' }}
      whileHover={animated ? { scale: 1.05 } : {}}
    >
      {/* PHASE 1: Central Innovation Node - Materializes First */}
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={animated ? {
          scale: [0, 1.3, 1, 1.1, 1],
          opacity: [0, 1, 0.9, 1, 0.8]
        } : { scale: 1, opacity: 0.8 }}
        transition={{
          duration: 1,
          ease: "backOut",
          repeat: Infinity,
          repeatDelay: 4,
          repeatType: "loop"
        }}
      />
      
      {/* PHASE 2: Acceleration Lines - Draw Progressively */}
      {[0, 60, 120, 180, 240, 300].map((angle, index) => (
        <motion.path
          key={angle}
          d={`M 12 12 Q ${12 + Math.cos(angle * Math.PI / 180) * 6} ${12 + Math.sin(angle * Math.PI / 180) * 6} ${12 + Math.cos(angle * Math.PI / 180) * 9} ${12 + Math.sin(angle * Math.PI / 180) * 9}`}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animated ? {
            pathLength: [0, 1, 0.9, 1],
            opacity: [0, 0.8, 0.6, 0.7]
          } : { pathLength: 1, opacity: 0.6 }}
          transition={{
            duration: 1.5,
            delay: 1 + index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
            repeat: Infinity,
            repeatDelay: 3.5,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* PHASE 3: Milestone Dots - Appear Along Lines Progressively */}
      {[0, 72, 144, 216, 288].map((angle, index) => (
        <motion.circle
          key={`dot-${angle}`}
          cx={12 + Math.cos(angle * Math.PI / 180) * 7}
          cy={12 + Math.sin(angle * Math.PI / 180) * 7}
          r="1.5"
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={animated ? {
            scale: [0, 1.6, 1, 1.2, 0.9],
            opacity: [0, 1, 0.8, 1, 0.7]
          } : { scale: 1, opacity: 0.8 }}
          transition={{
            duration: 0.8,
            delay: 2.8 + index * 0.2,
            ease: "backOut",
            repeat: Infinity,
            repeatDelay: 4.2,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* PHASE 4: Acceleration Pulse - Innovation Energy */}
      <motion.circle
        cx="12"
        cy="12"
        r="12"
        stroke={color}
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={animated ? {
          scale: [0.2, 2.2, 0.2],
          opacity: [0, 0.5, 0]
        } : {}}
        transition={{
          duration: 2.5,
          delay: 4.2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 2.5,
          repeatType: "loop"
        }}
      />
      
      {/* CONTINUOUS: Breathing Effect on Central Node */}
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        stroke={color}
        strokeWidth="0.5"
        fill="none"
        animate={animated ? {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        } : {}}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </motion.svg>
  );
};