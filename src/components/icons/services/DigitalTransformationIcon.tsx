'use client';

import { motion } from 'framer-motion';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const DigitalTransformationIcon = ({ 
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
      {/* Digital Network Grid */}
      <motion.path
        d="M 4 4 L 20 4 L 20 20 L 4 20 Z M 12 4 L 12 20 M 4 12 L 20 12"
        stroke={color}
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.4]
        } : { pathLength: 1, opacity: 0.4 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 4,
          repeatType: "loop"
        }}
      />
      
      {/* Transformation Core - Morphing Shape */}
      <motion.path
        d="M 8 8 L 16 8 L 16 16 L 8 16 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.8],
          scale: [0.8, 1.2, 1]
        } : { pathLength: 1, opacity: 0.8 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: "backOut",
          repeat: Infinity,
          repeatDelay: 4,
          repeatType: "loop"
        }}
      />
      
      {/* Digital Nodes - Data Points */}
      {[
        { x: 6, y: 6, delay: 1 },
        { x: 18, y: 6, delay: 1.2 },
        { x: 18, y: 18, delay: 1.4 },
        { x: 6, y: 18, delay: 1.6 }
      ].map((node, index) => (
        <motion.circle
          key={`digital-node-${index}`}
          cx={node.x}
          cy={node.y}
          r="2"
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={animated ? {
            scale: [0, 1.4, 1],
            opacity: [0, 1, 0.7]
          } : { scale: 1, opacity: 0.7 }}
          transition={{
            duration: 0.6,
            delay: node.delay,
            ease: "backOut",
            repeat: Infinity,
            repeatDelay: 4,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* Transformation Flow - Data Streams */}
      <motion.path
        d="M 6 6 Q 12 3 18 6 Q 21 12 18 18 Q 12 21 6 18 Q 3 12 6 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="4 2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.6]
        } : { pathLength: 1, opacity: 0.6 }}
        transition={{
          duration: 2.5,
          delay: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3,
          repeatType: "loop"
        }}
      />
      
      {/* Central Processing Core */}
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        fill={color}
        animate={animated ? {
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8]
        } : {}}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      
      {/* Digital Pulse Waves */}
      <motion.circle
        cx="12"
        cy="12"
        r="12"
        stroke={color}
        strokeWidth="0.5"
        fill="none"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={animated ? {
          scale: [0.3, 1.8, 0.3],
          opacity: [0, 0.4, 0]
        } : {}}
        transition={{
          duration: 3,
          delay: 4,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: "loop"
        }}
      />
    </motion.svg>
  );
};