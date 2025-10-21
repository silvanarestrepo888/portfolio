'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#fffbee'}}>
      <motion.div 
        className="text-center px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl font-light mb-6"
          style={{ color: '#2C2C2C' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-2xl font-medium mb-4"
          style={{ color: '#2C2C2C' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          className="text-lg mb-8"
          style={{ color: '#8B8B8B' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            href="/"
            className="inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#FF6663', 
              color: 'white',
              boxShadow: '0 4px 15px rgba(255, 102, 99, 0.3)'
            }}
          >
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}