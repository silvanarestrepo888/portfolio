'use client';

import { motion } from 'framer-motion';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const ExperienceDesignIcon = ({ 
  size = 40, 
  color = '#E55555', // WCAG AA compliant coral
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
      {/* User Journey Path */}
      <motion.path
        d="M 3 12 Q 8 6 12 12 Q 16 18 21 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.8]
        } : { pathLength: 1, opacity: 0.8 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3,
          repeatType: "loop"
        }}
      />
      
      {/* User Experience Touchpoints */}
      {[
        { x: 6, y: 9, delay: 0.5 },
        { x: 12, y: 12, delay: 1 },
        { x: 18, y: 15, delay: 1.5 }
      ].map((point, index) => (
        <motion.circle
          key={`touchpoint-${index}`}
          cx={point.x}
          cy={point.y}
          r="3"
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={animated ? {
            scale: [0, 1.2, 1],
            opacity: [0, 1, 0.9]
          } : { scale: 1, opacity: 0.9 }}
          transition={{
            duration: 0.8,
            delay: point.delay,
            ease: "backOut",
            repeat: Infinity,
            repeatDelay: 4,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* Design Thinking Process - Concentric Circles */}
      <motion.circle
        cx="12"
        cy="12"
        r="8"
        stroke={color}
        strokeWidth="1"
        fill="none"
        strokeDasharray="2 2"
        animate={animated ? {
          rotate: [0, 360],
          opacity: [0.3, 0.6, 0.3]
        } : {}}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      
      {/* Central Experience Core */}
      <motion.circle
        cx="12"
        cy="12"
        r="2"
        fill={color}
        animate={animated ? {
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8]
        } : {}}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </motion.svg>
  );
};