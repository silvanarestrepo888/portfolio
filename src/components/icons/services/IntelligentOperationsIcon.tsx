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
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Operations Grid Foundation */}
      {[0, 1, 2, 3].map(row => (
        [0, 1, 2, 3].map(col => (
          <rect
            key={`grid-${row}-${col}`}
            x={5 + col * 3.5}
            y={5 + row * 3.5}
            width="2"
            height="2"
            fill={color}
            opacity="0.4"
          />
        ))
      )).flat()}
      
      {/* AI Augmentation Lines */}
      <path
        d="M 6 6 Q 12 2 18 6 Q 22 12 18 18 Q 12 22 6 18 Q 2 12 6 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      
      {/* Human Intelligence Overlay - Organic */}
      <path
        d="M 8 8 Q 12 6 16 8 Q 18 12 16 16 Q 12 18 8 16 Q 6 12 8 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      
      {/* Intelligence Node */}
      <circle
        cx="12"
        cy="12"
        r="1.5"
        fill={color}
        opacity="0.9"
      />
    </svg>
  );
};