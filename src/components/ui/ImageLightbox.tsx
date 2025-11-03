'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

interface ImageLightboxProps {
  image: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectIndustry: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  image, alt, isOpen, onClose, projectTitle, projectIndustry
}) => {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyboard);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleKeyboard);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(45, 55, 72, 0.95)', /* Charcoal from design system */
          backdropFilter: 'blur(20px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'zoom-out'
        }}
      >
        <motion.div
          className="lightbox-content"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94] // Landor easing
          }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'default'
          }}
        >
          {/* Image Container */}
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '80vh',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(45, 55, 72, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)' /* Charcoal shadow */
          }}>
            <Image
              src={image}
              alt={alt}
              width={1200}
              height={800}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '80vh',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              quality={100}
              priority
            />
            
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="lightbox-close"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '44px',
                height: '44px',
                background: 'rgba(45, 55, 72, 0.8)', /* Charcoal from design system */
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                color: 'white',
                fontSize: '20px',
                fontWeight: '300',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
              whileHover={{ 
                scale: 1.1,
                background: 'rgba(255, 102, 99, 0.9)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              ×
            </motion.button>
          </div>
          
          {/* Project Info */}
          <motion.div
            style={{
              marginTop: '24px',
              textAlign: 'center',
              color: 'white',
              maxWidth: '600px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <h3 style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              fontFamily: 'var(--font-architectural-display)',
              fontWeight: '400',
              marginBottom: '8px',
              color: 'rgba(255, 255, 255, 0.95)'
            }}>
              {projectTitle}
            </h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              fontFamily: 'var(--font-architectural-body)',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
            }}>
              {projectIndustry}
            </p>
            
            {/* Instruction */}
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.5)',
              marginTop: '16px',
              fontFamily: 'var(--font-architectural-body)'
            }}>
              Press ESC or click outside to close
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};