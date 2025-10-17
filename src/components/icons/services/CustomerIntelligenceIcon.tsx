'use client';

import { motion } from 'framer-motion';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const CustomerIntelligenceIcon = ({ 
  size = 32, 
  color = '#ff6663', 
  className = '',
  animated = true 
}: IconProps) => {
  const dataFlows = [
    { d: "M 2 8 Q 6 6 12 8 Q 18 10 22 8", delay: 0 },
    { d: "M 2 12 Q 8 10 12 12 Q 16 14 22 12", delay: 0.5 },
    { d: "M 2 16 Q 6 18 12 16 Q 18 14 22 16", delay: 1 }
  ];

  const intelligenceNodes = [
    { x: 6, y: 8 },
    { x: 12, y: 12 },
    { x: 18, y: 16 }
  ];

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
      {/* PHASE 1: Data Flow Lines - Trace Customer Behavior */}
      {dataFlows.map((flow, index) => (
        <motion.path
          key={`dataflow-${index}`}
          d={flow.d}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animated ? {
            pathLength: [0, 1, 0.8, 1],
            opacity: [0, 0.8, 0.6, 0.7]
          } : { pathLength: 1, opacity: 0.6 }}
          transition={{
            duration: 2,
            delay: flow.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
            repeat: Infinity,
            repeatDelay: 6,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* PHASE 2: Intelligence Learning Nodes - Appear and Grow */}
      {intelligenceNodes.map((node, index) => (
        <motion.circle
          key={`intelligence-${index}`}
          cx={node.x}
          cy={node.y}
          r="2"
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={animated ? {
            scale: [0, 1.5, 1.2, 1.3, 1],
            opacity: [0, 1, 0.9, 1, 0.8]
          } : { scale: 1, opacity: 0.8 }}
          transition={{
            duration: 1,
            delay: 2.5 + index * 0.4,
            ease: "backOut",
            repeat: Infinity,
            repeatDelay: 5.1,
            repeatType: "loop"
          }}
        />
      ))}
      
      {/* PHASE 3: Predictive Curves - Extend from Intelligence Nodes */}
      <motion.path
        d="M 12 12 Q 16 8 20 6 Q 22 8 20 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1, 0.9],
          opacity: [0, 0.9, 0.7]
        } : { pathLength: 1, opacity: 0.7 }}
        transition={{
          duration: 1.5,
          delay: 4.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3.5,
          repeatType: "loop"
        }}
      />
      
      {/* PHASE 4: Learning Pulse - Expands from Center */}
      <motion.circle
        cx="12"
        cy="12"
        r="8"
        stroke={color}
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={animated ? {
          scale: [0.4, 2, 0.4],
          opacity: [0, 0.6, 0]
        } : {}}
        transition={{
          duration: 2.5,
          delay: 6.2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 3.3,
          repeatType: "loop"
        }}
      />
      
      {/* CONTINUOUS: Data Flow with Learning */}
      {dataFlows.map((_, index) => (
        <motion.circle
          key={`flow-pulse-${index}`}
          cx="12"
          cy={8 + index * 4}
          r="4"
          stroke={color}
          strokeWidth="0.5"
          fill="none"
          animate={animated ? {
            scale: [0.8, 1.3, 0.8],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 4, -4, 0]
          } : {}}
          transition={{
            duration: 4,
            delay: index * 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      ))}
    </motion.svg>
  );
};