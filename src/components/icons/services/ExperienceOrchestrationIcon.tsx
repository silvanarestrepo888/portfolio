'use client';

import { motion } from 'framer-motion';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const ExperienceOrchestrationIcon = ({ 
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
      whileHover={animated ? { scale: 1.04 } : {}}
    >
      {/* PHASE 1: Touchpoint Nodes - Appear One by One */}
      {[
        { x: 5, y: 6 },
        { x: 12, y: 4 },
        { x: 19, y: 7 },
        { x: 7, y: 12 },
        { x: 17, y: 14 },
        { x: 12, y: 18 }
      ].map((node, index) => (
        <motion.circle
          key={`node-${index}`}
          cx={node.x}
          cy={node.y}
          r="2"
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={animated ? {
            scale: [0, 1.4, 1, 1.1, 1],
            opacity: [0, 1, 0.8, 0.9, 0.8]
          } : { scale: 1, opacity: 0.8 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
            ease: "backOut",
            repeat: Infinity,
            repeatDelay: 6,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* PHASE 2: Orchestration Flow Lines - Draw Organically */}
      <motion.path
        d="M 5 6 Q 8 4 12 4 Q 16 5 19 7 Q 18 10 17 14 Q 14 16 12 18 Q 9 16 7 12 Q 6 9 5 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1, 0.95, 1],
          opacity: [0, 0.9, 0.7, 0.8]
        } : { pathLength: 1, opacity: 0.7 }}
        transition={{
          duration: 2.5,
          delay: 1.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          repeat: Infinity,
          repeatDelay: 4.5,
          repeatType: "loop"
        }}
      />
      
      {/* PHASE 3: Harmonizing Waves - Flow Through Connections */}
      <motion.path
        d="M 2 12 Q 6 9 12 12 Q 18 15 22 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1, 0.8, 1],
          opacity: [0, 0.7, 0.5, 0.6]
        } : { pathLength: 1, opacity: 0.5 }}
        transition={{
          duration: 2,
          delay: 4.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 4,
          repeatType: "loop"
        }}
      />
      
      {/* PHASE 4: Orchestration Pulse - All Elements Sync */}
      <motion.circle
        cx="12"
        cy="12"
        r="15"
        stroke={color}
        strokeWidth="0.8"
        fill="none"
        initial={{ scale: 0.1, opacity: 0 }}
        animate={animated ? {
          scale: [0.1, 1.8, 0.1],
          opacity: [0, 0.4, 0]
        } : {}}
        transition={{
          duration: 2,
          delay: 6,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 4,
          repeatType: "loop"
        }}
      />
      
      {/* CONTINUOUS: Connection Pulse Between Nodes */}
      <motion.circle
        cx="12"
        cy="10"
        r="8"
        stroke={color}
        strokeWidth="0.5"
        fill="none"
        animate={animated ? {
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 360]
        } : {}}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </motion.svg>
  );
};