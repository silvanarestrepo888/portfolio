'use client';

import { motion } from 'framer-motion';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const StrategyConsultingIcon = ({ 
  size = 32, 
  color = '#ff6663', 
  className = '',
  animated = true 
}: IconProps) => {
  const pathways = [
    { d: "M 12 12 Q 8 8 4 8", endpoint: { x: 4, y: 8 }, delay: 0 },
    { d: "M 12 12 Q 16 6 20 4", endpoint: { x: 20, y: 4 }, delay: 0.3 },
    { d: "M 12 12 Q 18 10 22 12", endpoint: { x: 22, y: 12 }, delay: 0.6 },
    { d: "M 12 12 Q 16 18 20 20", endpoint: { x: 20, y: 20 }, delay: 0.9 },
    { d: "M 12 12 Q 8 16 4 16", endpoint: { x: 4, y: 16 }, delay: 1.2 },
    { d: "M 12 12 Q 6 14 2 12", endpoint: { x: 2, y: 12 }, delay: 1.5 }
  ];

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
      {/* PHASE 1: Central Strategic Node - Establishes First */}
      <motion.circle
        cx="12"
        cy="12"
        r="2.5"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={animated ? {
          scale: [0, 1.3, 1, 1.1, 1],
          opacity: [0, 1, 0.9, 1, 0.8]
        } : { scale: 1, opacity: 0.8 }}
        transition={{
          duration: 0.8,
          ease: "backOut",
          repeat: Infinity,
          repeatDelay: 6.5,
          repeatType: "loop"
        }}
      />
      
      {/* PHASE 2: Complexity Pathways - Draw Outward Organically */}
      {pathways.map((pathway, index) => (
        <motion.path
          key={`pathway-${index}`}
          d={pathway.d}
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
            duration: 1.2,
            delay: 1 + pathway.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
            repeat: Infinity,
            repeatDelay: 5.2,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* PHASE 3: Convergence Points - Appear at Path Ends */}
      {pathways.map((pathway, index) => (
        <motion.circle
          key={`convergence-${index}`}
          cx={pathway.endpoint.x}
          cy={pathway.endpoint.y}
          r="1.5"
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={animated ? {
            scale: [0, 1.4, 1, 1.2, 1],
            opacity: [0, 1, 0.8, 0.9, 0.7]
          } : { scale: 1, opacity: 0.7 }}
          transition={{
            duration: 0.6,
            delay: 3.5 + index * 0.15,
            ease: "backOut",
            repeat: Infinity,
            repeatDelay: 5.4,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* PHASE 4: Strategic Alignment - Paths Illuminate and Converge */}
      <motion.circle
        cx="12"
        cy="12"
        r="12"
        stroke={color}
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={animated ? {
          scale: [0.3, 1.5, 0.3],
          opacity: [0, 0.5, 0]
        } : {}}
        transition={{
          duration: 2,
          delay: 5.5,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 3.5,
          repeatType: "loop"
        }}
      />
      
      {/* CONTINUOUS: Strategy Navigation Pulse */}
      <motion.circle
        cx="12"
        cy="12"
        r="6"
        stroke={color}
        strokeWidth="0.5"
        fill="none"
        animate={animated ? {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 120, 240, 360]
        } : {}}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </motion.svg>
  );
};