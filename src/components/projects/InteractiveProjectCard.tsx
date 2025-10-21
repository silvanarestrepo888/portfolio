'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  category: string;
  year: string;
  client: string;
  location: string;
  website?: string;
  image: string;
  secondaryImage: string;
  galleryImages: string[];
}

interface InteractiveProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
  className?: string;
}

export function InteractiveProjectCard({
  project,
  index,
  isActive,
  onSelect,
  className = ''
}: InteractiveProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse position (limited to ±15 degrees)
    const maxRotation = 15;
    const rotateX = Math.max(-maxRotation, Math.min(maxRotation, (e.clientY - centerY) / 10));
    const rotateY = Math.max(-maxRotation, Math.min(maxRotation, (centerX - e.clientX) / 10));

    setRotationX(rotateX);
    setRotationY(rotateY);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotationX(0);
    setRotationY(0);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleClick = useCallback(() => {
    onSelect(index);
  }, [index, onSelect]);

  // Calculate shadow intensity based on rotation
  const shadowIntensity = Math.max(0.15, Math.min(0.4, (Math.abs(rotationX) + Math.abs(rotationY)) / 30));

  return (
    <motion.div
      ref={cardRef}
      className={`project-card-3d enhanced-hover gpu-accelerated ${className}`}
      style={{
        '--rotation-x': `${rotationX}deg`,
        '--rotation-y': `${rotationY}deg`,
        '--shadow-intensity': shadowIntensity,
        transform: `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(${isHovered ? '20px' : '0px'})`,
        transformStyle: 'preserve-3d'
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: isActive ? 1.02 : 1
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      <div className="balanced-project-card luxury-hover-elevation project-card-shadow-3d">
        {/* Clean Balanced Layout: 60% Image / 40% Content */}
        <div className="balanced-layout-grid">
          
          {/* Image Section - 60% (Perfect Balance) */}
          <div className="balanced-image-section">
            <div className="balanced-image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="balanced-image-perfect gpu-accelerated"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  transform: `translateZ(10px)` // Subtle parallax effect
                }}
                quality={100}
                priority={index < 2}
                loading="eager"
              />
              
              {/* Enhanced Tags with 3D effect */}
              <div className="balanced-overlay-tags" style={{ transform: 'translateZ(15px)' }}>
                <motion.span 
                  className="balanced-year-tag"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {project.year}
                </motion.span>
                <motion.span 
                  className="balanced-category-tag"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {project.category}
                </motion.span>
              </div>
            </div>
          </div>
          
          {/* Content Section - 40% (Perfect Balance) */}
          <div className="balanced-content-section" style={{ transform: 'translateZ(5px)' }}>
            <div className="balanced-content-inner">
              
              {/* Clean Project Header */}
              <header className="balanced-header">
                <motion.h3 
                  className="balanced-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="balanced-client"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {project.client}
                </motion.p>
                
                <motion.div 
                  className="balanced-meta"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <span>{project.year}</span>
                  <span className="balanced-divider">•</span>
                  <span>{project.location}</span>
                </motion.div>
              </header>
              
              {/* Clean Description */}
              <motion.div 
                className="balanced-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <p className="balanced-subtitle">
                  {project.subtitle}
                </p>
                
                <p className="balanced-description-text">
                  {project.description}
                </p>
              </motion.div>
              
              {/* Clean Capability Tags */}
              <motion.div 
                className="balanced-capabilities"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                <div className="balanced-tags">
                  {project.tech.slice(0, 3).map((capability, tagIndex) => (
                    <motion.span 
                      key={capability} 
                      className="balanced-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.7 + tagIndex * 0.1 }}
                    >
                      {capability}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              {/* Clean Action Buttons */}
              <motion.div 
                className="balanced-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(index);
                  }}
                  className="balanced-btn primary magnetic-button touch-friendly enhanced-focus gpu-accelerated"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  View Full Case Study
                </button>
                
                {project.website && (
                  <a 
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="balanced-btn secondary magnetic-button touch-friendly enhanced-focus gpu-accelerated"
                    style={{ transform: 'translateZ(20px)' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Website
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default InteractiveProjectCard;