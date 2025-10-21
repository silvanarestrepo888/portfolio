'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // Return custom fallback or default error UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div 
          className="flex items-center justify-center min-h-[200px] p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: '#fffbee' }}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FF6663', color: 'white' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              
              <h3 
                className="text-lg font-medium mb-2"
                style={{ color: '#2C2C2C' }}
              >
                Something went wrong
              </h3>
              
              <p 
                className="text-sm mb-4"
                style={{ color: '#8B8B8B' }}
              >
                We&apos;re working to fix this issue. Please refresh the page.
              </p>
              
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#FF6663', 
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(255, 102, 99, 0.3)'
                }}
              >
                Refresh Page
              </button>
            </motion.div>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;