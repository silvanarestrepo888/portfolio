'use client';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const AISoftwareIcon = ({ 
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
      {/* AI Neural Network */}
      <circle cx="8" cy="6" r="1.5" fill={color} opacity="0.8" />
      <circle cx="16" cy="6" r="1.5" fill={color} opacity="0.8" />
      <circle cx="12" cy="12" r="1.5" fill={color} opacity="0.8" />
      <circle cx="6" cy="18" r="1.5" fill={color} opacity="0.8" />
      <circle cx="18" cy="18" r="1.5" fill={color} opacity="0.8" />
      
      {/* Connection Lines */}
      <path d="M 8 6 L 12 12 L 16 6" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <path d="M 12 12 L 6 18" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <path d="M 12 12 L 18 18" stroke={color} strokeWidth="1.5" opacity="0.6" />
      
      {/* Software Grid */}
      <rect x="10" y="2" width="4" height="1" fill={color} opacity="0.5" rx="0.5" />
      <rect x="2" y="10" width="1" height="4" fill={color} opacity="0.5" rx="0.5" />
      <rect x="21" y="10" width="1" height="4" fill={color} opacity="0.5" rx="0.5" />
      <rect x="10" y="21" width="4" height="1" fill={color} opacity="0.5" rx="0.5" />
    </svg>
  );
};