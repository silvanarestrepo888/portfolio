'use client';

/**
 * 3D Transform Utilities for Interactive Project Cards
 * Provides optimized calculations for 3D effects
 */

// Types for 3D transform calculations
export interface Point3D {
  x: number;
  y: number;
  z: number;
}

export interface RotationLimits {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export interface Transform3DOptions {
  rotationX: number;
  rotationY: number;
  translateZ: number;
  scale: number;
  perspective: number;
}

/**
 * Calculate optimized 3D transform string
 */
export function createTransform3D(options: Partial<Transform3DOptions>): string {
  const {
    rotationX = 0,
    rotationY = 0,
    translateZ = 0,
    scale = 1,
    perspective = 1000
  } = options;

  return `perspective(${perspective}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(${translateZ}px) scale(${scale})`;
}

/**
 * Calculate mouse position relative to element center
 */
export function getRelativeMousePosition(
  mouseX: number,
  mouseY: number,
  elementRect: DOMRect
): Point3D {
  const centerX = elementRect.left + elementRect.width / 2;
  const centerY = elementRect.top + elementRect.height / 2;
  
  return {
    x: mouseX - centerX,
    y: mouseY - centerY,
    z: 0
  };
}

/**
 * Convert mouse position to rotation angles with limits
 */
export function mouseToRotation(
  relativePosition: Point3D,
  sensitivity: number = 10,
  limits: RotationLimits = { minX: -15, maxX: 15, minY: -15, maxY: 15 }
): Point3D {
  const rotationX = Math.max(
    limits.minX,
    Math.min(limits.maxX, -relativePosition.y / sensitivity)
  );
  
  const rotationY = Math.max(
    limits.minY,
    Math.min(limits.maxY, relativePosition.x / sensitivity)
  );

  return {
    x: rotationX,
    y: rotationY,
    z: 0
  };
}

/**
 * Calculate shadow intensity based on rotation magnitude
 */
export function calculateShadowIntensity(
  rotationX: number,
  rotationY: number,
  baseIntensity: number = 0.15,
  maxIntensity: number = 0.4
): number {
  const totalRotation = Math.abs(rotationX) + Math.abs(rotationY);
  const normalizedRotation = Math.min(totalRotation / 30, 1);
  
  return baseIntensity + (maxIntensity - baseIntensity) * normalizedRotation;
}

/**
 * Smoothly interpolate between two values
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Apply easing to a value between 0 and 1
 */
export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Create smooth reset animation values
 */
export function createResetAnimation(
  currentRotationX: number,
  currentRotationY: number,
  dampening: number = 0.9
): Point3D {
  return {
    x: Math.abs(currentRotationX) < 0.1 ? 0 : currentRotationX * dampening,
    y: Math.abs(currentRotationY) < 0.1 ? 0 : currentRotationY * dampening,
    z: 0
  };
}

/**
 * Check if device supports 3D transforms
 */
export function supports3D(): boolean {
  if (typeof window === 'undefined') return false;
  
  const testElement = document.createElement('div');
  testElement.style.transform = 'perspective(1px) rotateX(1deg)';
  
  return testElement.style.transform !== '';
}

/**
 * Get optimal performance settings based on device capabilities
 */
export function getPerformanceSettings(): {
  perspective: number;
  maxRotation: number;
  animationDuration: number;
  reducedMotion: boolean;
} {
  if (typeof window === 'undefined') {
    return {
      perspective: 1000,
      maxRotation: 15,
      animationDuration: 600,
      reducedMotion: false
    };
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth <= 768;

  return {
    perspective: isMobile ? 800 : 1000,
    maxRotation: isMobile ? 10 : 15,
    animationDuration: prefersReducedMotion ? 200 : (isMobile ? 400 : 600),
    reducedMotion: prefersReducedMotion
  };
}

const transform3DUtils = {
  createTransform3D,
  getRelativeMousePosition,
  mouseToRotation,
  calculateShadowIntensity,
  lerp,
  easeOutCubic,
  createResetAnimation,
  supports3D,
  getPerformanceSettings
};

export default transform3DUtils;