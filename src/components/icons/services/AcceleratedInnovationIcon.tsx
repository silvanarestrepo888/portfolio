'use client';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const AcceleratedInnovationIcon = ({ 
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
      {/* Central Innovation Node */}
      <circle
        cx="12"
        cy="12"
        r="3"
        fill={color}
        opacity="0.8"
      />
      
      {/* Acceleration Lines - Static Version */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <path
          key={angle}
          d={`M 12 12 Q ${12 + Math.cos(angle * Math.PI / 180) * 6} ${12 + Math.sin(angle * Math.PI / 180) * 6} ${12 + Math.cos(angle * Math.PI / 180) * 9} ${12 + Math.sin(angle * Math.PI / 180) * 9}`}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      ))}
      
      {/* Milestone Dots */}
      {[0, 72, 144, 216, 288].map((angle) => (
        <circle
          key={`dot-${angle}`}
          cx={12 + Math.cos(angle * Math.PI / 180) * 7}
          cy={12 + Math.sin(angle * Math.PI / 180) * 7}
          r="1.5"
          fill={color}
          opacity="0.8"
        />
      ))}
    </svg>
  );
};