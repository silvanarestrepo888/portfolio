'use client';

import { motion } from 'framer-motion';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const ServiceDesignIcon = ({ 
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
      {/* Service Blueprint Framework */}
      <motion.rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.7]
        } : { pathLength: 1, opacity: 0.7 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 4,
          repeatType: "loop"
        }}
      />
      
      {/* Service Layer Lines */}
      {[10, 12, 14].map((y, index) => (
        <motion.line
          key={`layer-${index}`}
          x1="6"
          y1={y}
          x2="18"
          y2={y}
          stroke={color}
          strokeWidth="1"
          strokeDasharray="3 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animated ? {
            pathLength: [0, 1],
            opacity: [0, 0.6]
          } : { pathLength: 1, opacity: 0.6 }}
          transition={{
            duration: 1,
            delay: 0.5 + (index * 0.3),
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 4,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* Service Touchpoint Nodes */}
      {[
        { x: 8, y: 10 },
        { x: 12, y: 12 },
        { x: 16, y: 14 }
      ].map((node, index) => (
        <motion.circle
          key={`node-${index}`}
          cx={node.x}
          cy={node.y}
          r="2"
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={animated ? {
            scale: [0, 1.3, 1],
            opacity: [0, 1, 0.8]
          } : { scale: 1, opacity: 0.8 }}
          transition={{
            duration: 0.8,
            delay: 1 + (index * 0.4),
            ease: "backOut",
            repeat: Infinity,
            repeatDelay: 4,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* Service Flow Connections */}
      <motion.path
        d="M 8 10 L 12 12 L 16 14"
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
          duration: 1.5,
          delay: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 4,
          repeatType: "loop"
        }}
      />
      
      {/* Service Orchestration Pulse */}
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="0.5"
        fill="none"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={animated ? {
          scale: [0.5, 1.5, 0.5],
          opacity: [0, 0.3, 0]
        } : {}}
        transition={{
          duration: 3,
          delay: 3,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 3,
          repeatType: "loop"
        }}
      />
    </motion.svg>
  );
};