'use client';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const CustomArrowIcon = ({ 
  size = 24, 
  color = '#ff6663', 
  className = '',
  direction = 'right'
}: IconProps) => {
  const rotations = {
    up: -90,
    down: 90,
    left: 180,
    right: 0
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      {/* Elegant Arrow Path */}
      <path
        d="M 8 6 L 16 12 L 8 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Arrow Accent Line */}
      <path
        d="M 6 12 L 16 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
};