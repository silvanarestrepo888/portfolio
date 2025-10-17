'use client';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const EntertainmentIcon = ({ 
  size = 24, 
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
      {/* Entertainment Stage */}
      <path
        d="M 4 16 Q 12 12 20 16 L 20 20 L 4 20 Z"
        fill={color}
        opacity="0.3"
      />
      
      {/* Theme Park Elements */}
      <circle cx="8" cy="8" r="2.5" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="16" cy="8" r="2.5" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" />
      
      {/* Connection Paths */}
      <path d="M 8 10.5 Q 12 14 16 10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      
      {/* Experience Points */}
      <circle cx="6" cy="6" r="1" fill={color} opacity="0.8" />
      <circle cx="12" cy="4" r="1" fill={color} opacity="0.8" />
      <circle cx="18" cy="6" r="1" fill={color} opacity="0.8" />
      <circle cx="12" cy="14" r="1" fill={color} opacity="0.8" />
      
      {/* Guest Flow */}
      <path d="M 2 18 Q 6 17 8 18 Q 12 19 16 18 Q 18 17 22 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
};