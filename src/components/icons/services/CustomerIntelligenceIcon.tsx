'use client';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const CustomerIntelligenceIcon = ({ 
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
      {/* Data Flow Lines */}
      <path d="M 2 8 Q 6 6 12 8 Q 18 10 22 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 2 12 Q 8 10 12 12 Q 16 14 22 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 2 16 Q 6 18 12 16 Q 18 14 22 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      
      {/* Intelligence Learning Nodes */}
      <circle cx="6" cy="8" r="2" fill={color} opacity="0.8" />
      <circle cx="12" cy="12" r="2" fill={color} opacity="0.8" />
      <circle cx="18" cy="16" r="2" fill={color} opacity="0.8" />
      
      {/* Predictive Curves */}
      <path d="M 12 12 Q 16 8 20 6 Q 22 8 20 10" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      
      {/* Learning Pulse Ring */}
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
};