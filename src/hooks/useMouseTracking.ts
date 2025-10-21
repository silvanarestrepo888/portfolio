'use client';

import { useState, useCallback, RefObject } from 'react';

interface MouseTrackingOptions {
  maxRotation?: number;
  sensitivity?: number;
  dampening?: number;
}

interface MouseTrackingResult {
  rotationX: number;
  rotationY: number;
  isTracking: boolean;
  handleMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  reset: () => void;
}

export function useMouseTracking(
  elementRef: RefObject<HTMLElement>,
  options: MouseTrackingOptions = {}
): MouseTrackingResult {
  const {
    maxRotation = 15,
    sensitivity = 10,
    dampening = 0.1
  } = options;

  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [isTracking, setIsTracking] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!elementRef.current || !isTracking) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse position relative to element center
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Apply sensitivity and limit to max rotation
    const newRotationX = Math.max(
      -maxRotation, 
      Math.min(maxRotation, -deltaY / sensitivity)
    );
    const newRotationY = Math.max(
      -maxRotation, 
      Math.min(maxRotation, deltaX / sensitivity)
    );

    // Apply dampening for smoother movement
    setRotationX(prev => prev + (newRotationX - prev) * (1 - dampening));
    setRotationY(prev => prev + (newRotationY - prev) * (1 - dampening));
  }, [elementRef, isTracking, maxRotation, sensitivity, dampening]);

  const handleMouseEnter = useCallback(() => {
    setIsTracking(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsTracking(false);
    // Smooth return to center
    const resetAnimation = () => {
      setRotationX(prev => {
        const newVal = prev * 0.9;
        return Math.abs(newVal) < 0.1 ? 0 : newVal;
      });
      setRotationY(prev => {
        const newVal = prev * 0.9;
        return Math.abs(newVal) < 0.1 ? 0 : newVal;
      });
    };

    const animate = () => {
      resetAnimation();
      if (Math.abs(rotationX) > 0.1 || Math.abs(rotationY) > 0.1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [rotationX, rotationY]);

  const reset = useCallback(() => {
    setRotationX(0);
    setRotationY(0);
    setIsTracking(false);
  }, []);

  return {
    rotationX,
    rotationY,
    isTracking,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    reset
  };
}

// Utility function to calculate 3D transform string
export function calculateTransform3D(
  rotationX: number,
  rotationY: number,
  translateZ: number = 0,
  scale: number = 1
): string {
  return `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(${translateZ}px) scale(${scale})`;
}

// Utility function to calculate shadow intensity based on rotation
export function calculateShadowIntensity(
  rotationX: number,
  rotationY: number,
  minIntensity: number = 0.15,
  maxIntensity: number = 0.4
): number {
  const totalRotation = Math.abs(rotationX) + Math.abs(rotationY);
  const normalizedRotation = Math.min(totalRotation / 30, 1);
  return minIntensity + (maxIntensity - minIntensity) * normalizedRotation;
}

export default useMouseTracking;