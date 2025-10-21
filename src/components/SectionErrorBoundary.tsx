'use client';

import React from 'react';
import ErrorBoundary from './ErrorBoundary';

interface SectionErrorBoundaryProps {
  children: React.ReactNode;
  sectionName?: string;
}

/**
 * A lightweight error boundary specifically designed for portfolio sections
 * Provides graceful degradation without disrupting the overall page experience
 */
export function SectionErrorBoundary({ children, sectionName = 'section' }: SectionErrorBoundaryProps) {
  const fallback = (
    <div className="flex items-center justify-center py-16 px-8">
      <div className="text-center">
        <div 
          className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#f3f4f6', color: '#8B8B8B' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        
        <p 
          className="text-sm font-medium"
          style={{ color: '#8B8B8B' }}
        >
          {sectionName} temporarily unavailable
        </p>
      </div>
    </div>
  );

  return (
    <ErrorBoundary fallback={fallback}>
      {children}
    </ErrorBoundary>
  );
}

export default SectionErrorBoundary;