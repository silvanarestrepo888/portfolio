'use client';

import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  variant?: 'card' | 'text' | 'image' | 'button';
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  width = '100%', 
  height = '20px', 
  variant = 'text',
  className = ''
}) => {
  const baseStyles = {
    width,
    height,
    background: 'linear-gradient(90deg, rgba(255,251,238,0.2) 25%, rgba(255,251,238,0.4) 50%, rgba(255,251,238,0.2) 75%)',
    backgroundSize: '200% 100%',
    borderRadius: variant === 'button' ? '20px' : 
                 variant === 'image' ? '12px' : '6px',
    overflow: 'hidden',
    position: 'relative' as const
  };

  const variantSpecificStyles = {
    card: {
      height: '240px',
      borderRadius: '12px',
      background: 'linear-gradient(90deg, rgba(255,251,238,0.1) 25%, rgba(255,251,238,0.3) 50%, rgba(255,251,238,0.1) 75%)'
    },
    text: {
      height: '20px',
      borderRadius: '4px'
    },
    image: {
      height: '200px',
      borderRadius: '12px'
    },
    button: {
      height: '40px',
      borderRadius: '20px',
      background: 'linear-gradient(90deg, rgba(255,102,99,0.1) 25%, rgba(255,102,99,0.2) 50%, rgba(255,102,99,0.1) 75%)'
    }
  };

  const finalStyles = { ...baseStyles, ...variantSpecificStyles[variant] };

  return (
    <motion.div
      className={`skeleton-loader ${className}`}
      style={finalStyles}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.4, 0.8, 0.4],
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        opacity: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        },
        backgroundPosition: {
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }
      }}
    />
  );
};

// Shimmer effect for content loading
export const ContentShimmer: React.FC<{ 
  lines?: number; 
  className?: string; 
}> = ({ lines = 3, className = '' }) => {
  return (
    <div className={`content-shimmer ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonLoader
          key={index}
          height="18px"
          width={index === lines - 1 ? '60%' : '100%'}
          variant="text"
          className="mb-2"
        />
      ))}
    </div>
  );
};