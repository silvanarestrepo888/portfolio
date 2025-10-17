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
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Touchpoint Nodes */}
      {[
        { x: 5, y: 6 },
        { x: 12, y: 4 },
        { x: 19, y: 7 },
        { x: 7, y: 12 },
        { x: 17, y: 14 },
        { x: 12, y: 18 }
      ].map((node, index) => (
        <circle
          key={`node-${index}`}
          cx={node.x}
          cy={node.y}
          r="2"
          fill={color}
          opacity="0.8"
        />
      ))}
      
      {/* Orchestration Flow Lines */}
      <path
        d="M 5 6 Q 8 4 12 4 Q 16 5 19 7 Q 18 10 17 14 Q 14 16 12 18 Q 9 16 7 12 Q 6 9 5 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      
      {/* Harmonizing Waves */}
      <path
        d="M 2 12 Q 6 9 12 12 Q 18 15 22 12"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
};