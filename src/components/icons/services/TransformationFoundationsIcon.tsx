'use client';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const TransformationFoundationsIcon = ({ 
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
      {/* Foundation Blocks */}
      <rect x="4" y="18" width="4" height="2" fill={color} opacity="0.7" rx="0.5" />
      <rect x="10" y="18" width="4" height="2" fill={color} opacity="0.7" rx="0.5" />
      <rect x="16" y="18" width="4" height="2" fill={color} opacity="0.7" rx="0.5" />
      <rect x="7" y="14" width="4" height="2" fill={color} opacity="0.7" rx="0.5" />
      <rect x="13" y="14" width="4" height="2" fill={color} opacity="0.7" rx="0.5" />
      <rect x="10" y="10" width="4" height="2" fill={color} opacity="0.7" rx="0.5" />
      
      {/* Growth Lines */}
      <line x1="8" y1="20" x2="8" y2="4" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <line x1="12" y1="20" x2="12" y2="4" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <line x1="16" y1="20" x2="16" y2="4" stroke={color} strokeWidth="1.5" opacity="0.5" />
      
      {/* Framework Dots */}
      <circle cx="6" cy="8" r="1" fill={color} opacity="0.8" />
      <circle cx="12" cy="6" r="1" fill={color} opacity="0.8" />
      <circle cx="18" cy="9" r="1" fill={color} opacity="0.8" />
      
      {/* Scaling Indicator */}
      <path d="M 12 8 L 14 6 M 12 8 L 10 6 M 12 8 L 12 6" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
};