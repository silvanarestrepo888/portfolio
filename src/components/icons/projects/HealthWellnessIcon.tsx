'use client';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const HealthWellnessIcon = ({ 
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
      {/* Wellness Circle */}
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      
      {/* Health Cross */}
      <path
        d="M 12 8 L 12 16 M 8 12 L 16 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      
      {/* Wellness Dots */}
      <circle cx="8" cy="8" r="1" fill={color} opacity="0.7" />
      <circle cx="16" cy="8" r="1" fill={color} opacity="0.7" />
      <circle cx="8" cy="16" r="1" fill={color} opacity="0.7" />
      <circle cx="16" cy="16" r="1" fill={color} opacity="0.7" />
    </svg>
  );
};