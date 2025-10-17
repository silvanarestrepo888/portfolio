'use client';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const StrategyConsultingIcon = ({ 
  size = 32, 
  color = '#ff6663', 
  className = '' 
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Central Strategic Node */}
      <circle cx="12" cy="12" r="2.5" fill={color} opacity="0.8" />
      
      {/* Complexity Pathway Options */}
      <path d="M 12 12 Q 8 8 4 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 12 12 Q 16 6 20 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 12 12 Q 18 10 22 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 12 12 Q 16 18 20 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 12 12 Q 8 16 4 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 12 12 Q 6 14 2 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      
      {/* Convergence Points */}
      <circle cx="4" cy="8" r="1.5" fill={color} opacity="0.7" />
      <circle cx="20" cy="4" r="1.5" fill={color} opacity="0.7" />
      <circle cx="22" cy="12" r="1.5" fill={color} opacity="0.7" />
      <circle cx="20" cy="20" r="1.5" fill={color} opacity="0.7" />
      <circle cx="4" cy="16" r="1.5" fill={color} opacity="0.7" />
      <circle cx="2" cy="12" r="1.5" fill={color} opacity="0.7" />
    </svg>
  );
};