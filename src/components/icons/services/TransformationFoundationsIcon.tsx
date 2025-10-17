'use client';

import { motion } from 'framer-motion';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const TransformationFoundationsIcon = ({ 
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
      whileHover={animated ? { scale: 1.02 } : {}}
    >
      {/* PHASE 1: Foundation Blocks - Build from Bottom Up */}
      {[
        { x: 4, y: 18, width: 4, height: 2, level: 0 },
        { x: 10, y: 18, width: 4, height: 2, level: 0 },
        { x: 16, y: 18, width: 4, height: 2, level: 0 },
        { x: 7, y: 14, width: 4, height: 2, level: 1 },
        { x: 13, y: 14, width: 4, height: 2, level: 1 },
        { x: 10, y: 10, width: 4, height: 2, level: 2 }
      ].map((block, index) => (
        <motion.rect
          key={`block-${index}`}
          x={block.x}
          y={block.y}
          width={block.width}
          height={block.height}
          fill={color}
          rx="0.5"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={animated ? {
            scaleY: [0, 1.2, 1],
            opacity: [0, 0.9, 0.8]
          } : { scaleY: 1, opacity: 0.7 }}
          transition={{
            duration: 0.6,
            delay: (2 - block.level) * 0.3 + (index % 3) * 0.2,
            ease: "backOut",
            repeat: Infinity,
            repeatDelay: 6,
            repeatType: "loop"
          }}
          style={{ transformOrigin: 'bottom' }}
        />
      ))}
      
      {/* PHASE 2: Growth Lines - Extend Upward Progressively */}
      {[8, 12, 16].map((x, index) => (
        <motion.line
          key={`growth-${x}`}
          x1={x}
          y1="20"
          x2={x}
          y2="4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animated ? {
            pathLength: [0, 1, 0.95],
            opacity: [0, 0.8, 0.6]
          } : { pathLength: 1, opacity: 0.5 }}
          transition={{
            duration: 2,
            delay: 2.5 + index * 0.3,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 4.5,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* PHASE 3: Framework Dots - Connect Along Growth Paths */}
      {[
        { x: 6, y: 8 },
        { x: 12, y: 6 },
        { x: 18, y: 9 }
      ].map((dot, index) => (
        <motion.circle
          key={`framework-${index}`}
          cx={dot.x}
          cy={dot.y}
          r="1.2"
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={animated ? {
            scale: [0, 1.5, 1, 1.2, 1],
            opacity: [0, 1, 0.8, 0.9, 0.8]
          } : { scale: 1, opacity: 0.8 }}
          transition={{
            duration: 0.8,
            delay: 5 + index * 0.3,
            ease: "backOut",
            repeat: Infinity,
            repeatDelay: 4.7,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* PHASE 4: Scaling Indicators - Show Expansion */}
      <motion.path
        d="M 12 8 L 14 6 M 12 8 L 10 6 M 12 8 L 12 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0, y: 2 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.9, 0.7],
          y: [2, 0, -1, 0]
        } : { pathLength: 1, opacity: 0.7 }}
        transition={{
          duration: 1.5,
          delay: 6.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3.5,
          repeatType: "loop"
        }}
      />
      
      {/* CONTINUOUS: Foundation Breathing */}
      <motion.rect
        x="9"
        y="9"
        width="6"
        height="12"
        stroke={color}
        strokeWidth="0.5"
        fill="none"
        rx="1"
        animate={animated ? {
          scaleY: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2]
        } : {}}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        style={{ transformOrigin: 'bottom' }}
      />
    </motion.svg>
  );
};