'use client';

import { motion } from 'framer-motion';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const IntelligentOperationsIcon = ({ 
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
      whileHover={animated ? { scale: 1.03 } : {}}
    >
      {/* PHASE 1: Operations Grid Foundation - Builds Row by Row */}
      {[0, 1, 2, 3].map(row => (
        [0, 1, 2, 3].map(col => (
          <motion.rect
            key={`grid-${row}-${col}`}
            x={5 + col * 3.5}
            y={5 + row * 3.5}
            width="2"
            height="2"
            fill={color}
            rx="0.3"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={animated ? {
              scaleY: [0, 1.2, 1],
              opacity: [0, 0.7, 0.5]
            } : { scaleY: 1, opacity: 0.4 }}
            transition={{
              duration: 0.4,
              delay: row * 0.2 + col * 0.1,
              ease: "backOut",
              repeat: Infinity,
              repeatDelay: 7,
              repeatType: "loop"
            }}
            style={{ transformOrigin: 'bottom' }}
          />
        ))
      )).flat()}
      
      {/* PHASE 2: AI Augmentation Lines - Draw Around System */}
      <motion.path
        d="M 6 6 Q 12 2 18 6 Q 22 12 18 18 Q 12 22 6 18 Q 2 12 6 6"
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
          duration: 2,
          delay: 1.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          repeat: Infinity,
          repeatDelay: 5.2,
          repeatType: "loop"
        }}
      />
      
      {/* PHASE 3: Human Intelligence Overlay - Organic Growth */}
      <motion.path
        d="M 8 8 Q 12 6 16 8 Q 18 12 16 16 Q 12 18 8 16 Q 6 12 8 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.9, 0.8]
        } : { pathLength: 1, opacity: 0.8 }}
        transition={{
          duration: 1.8,
          delay: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3.2,
          repeatType: "loop"
        }}
      />
      
      {/* PHASE 4: Intelligence Nodes - Pulse at Intersections */}
      <motion.circle
        cx="12"
        cy="12"
        r="1.5"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={animated ? {
          scale: [0, 1.8, 1.2, 1.5, 1],
          opacity: [0, 1, 0.9, 1, 0.8]
        } : { scale: 1, opacity: 0.9 }}
        transition={{
          duration: 1,
          delay: 6,
          ease: "backOut",
          repeat: Infinity,
          repeatDelay: 6,
          repeatType: "loop"
        }}
      />
      
      {/* CONTINUOUS: Grid Transformation Pulse */}
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="0.5"
        fill="none"
        animate={animated ? {
          scale: [0.9, 1.1, 0.9],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360]
        } : {}}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </motion.svg>
  );
};