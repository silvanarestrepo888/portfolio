'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-transparent rounded-full`}
        style={{
          borderTopColor: '#FF6663',
          borderRightColor: '#FF6663'
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );
}

export function SkeletonLoader({ className = '', height = '20px' }: { className?: string; height?: string }) {
  return (
    <motion.div
      className={`rounded-lg ${className}`}
      style={{
        height,
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%'
      }}
      animate={{
        backgroundPosition: ['200% 0', '-200% 0']
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear'
      }}
    />
  );
}

export function ImageSkeleton({ width, height, className = '' }: { 
  width: number | string; 
  height: number | string; 
  className?: string; 
}) {
  return (
    <motion.div
      className={`rounded-lg overflow-hidden ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          background: 'linear-gradient(90deg, #f5f5f5 25%, #eeeeee 50%, #f5f5f5 75%)',
          backgroundSize: '200% 100%'
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </motion.div>
  );
}

export default LoadingSpinner;