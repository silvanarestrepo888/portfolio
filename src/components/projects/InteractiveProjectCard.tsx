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
  onSelect,
  className = ''
}: InteractiveProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleClick = useCallback(() => {
    onSelect(index);
  }, [index, onSelect]);

  return (
    <motion.div
      ref={cardRef}
      className={`project-card-cinematic enhanced-hover gpu-accelerated ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1
      }}
      transition={{
        duration: 1.2,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] // Cinematic easing
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{
        y: -4,
        scale: 1.01,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.15 }
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
                  objectPosition: 'center'
                }}
                quality={100}
                priority={index < 2}
                loading="eager"
              />
              
              {/* Enhanced Tags */}
              <div className="balanced-overlay-tags">
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
          <div className="balanced-content-section">
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
              
              {/* Project Action Buttons */}
              <motion.div 
                className="balanced-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
              >
                <motion.button
                  className="balanced-btn primary project-case-study-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(index);
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ 
                    scale: 0.95 
                  }}
                >
                  Explore Case
                  <motion.span 
                    className="btn-arrow"
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.button>
                
                {project.website && (
                  <motion.a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="balanced-btn secondary project-website-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ 
                      scale: 0.95 
                    }}
                  >
                    Client&apos;s Website
                    <motion.span 
                      className="btn-external-icon"
                      animate={{ x: isHovered ? 2 : 0, y: isHovered ? -2 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ↗
                    </motion.span>
                  </motion.a>
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