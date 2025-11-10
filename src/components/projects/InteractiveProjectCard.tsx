'use client';

import { useState, useRef, useCallback } from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  
  // Cinematic aspect ratios for different project types
  const getAspectRatio = (projectTitle: string) => {
    const ratios: { [key: string]: string } = {
      'Kayanee': '16:10',        // Wellness - wide cinematic
      'Augoor': '4:3',           // Software - square tech
      'Chime Care J&J': '3:2',   // Healthcare - classic
      'Nomade Tulum': '16:9',    // Hospitality - cinematic wide
      'Danone Digital Transformation': '4:3', // Corporate - square
      'Parques Reunidos': '16:9', // Entertainment - wide
      'Flagship Entertainment Destination, KSA': '16:9' // Entertainment - wide
    };
    return ratios[projectTitle] || '4:3';
  };

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
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
        transition: { duration: 0.382, ease: [0.25, 0.46, 0.45, 0.94] } /* Landor easing */
      }}
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.1 } /* Instant feedback */
      }}
      data-cursor="image"
      role="article"
      aria-label={`${project.title} project by ${project.client} - Click to explore details`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div 
        className="balanced-project-card luxury-hover-elevation project-card-shadow-3d"
        style={{
          /* DEBUG: Make project card extremely visible */
          backgroundColor: '#FF00FF', /* BRIGHT PINK background */
          border: '5px solid #00FFFF', /* CYAN border */
          minHeight: '400px', /* Ensure card has height */
          padding: '20px', /* Visible padding */
          margin: '10px' /* Ensure separation from other elements */
        }}
      >
        {/* Clean Balanced Layout: 60% Image / 40% Content */}
        <div className="balanced-layout-grid" style={{ display: isMobile ? 'block' as const : undefined }}>
          
          {/* ULTRA-CLEAN IMAGE SECTION - No Frames, Pure Sophistication */}
          <div 
            className="balanced-image-section cinematic-container"
            style={{
              aspectRatio: isMobile ? undefined : getAspectRatio(project.title),
              height: isMobile ? '62vh' : undefined,
              overflow: 'hidden',
              position: 'relative',
              background: 'transparent', /* NO gray background */
              border: 'none', /* NO borders */
              boxShadow: 'none' /* NO shadows */
            }}
          >
            <div className="cinematic-image-layers">
              {/* Ultra-Luxurious Static Image - Pure Minimalism */}
              <div
                className="cinematic-main-image-static"
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  background: 'transparent'
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={isMobile ? 'object-cover' : 'object-contain'} /* Mobile: immersive */
                  style={{
                    objectPosition: 'center',
                    filter: 'contrast(1.02) saturate(1.05)', /* Subtle enhancement */
                    background: 'transparent'
                  }}
                  quality={100}
                  priority={index < 2}
                  sizes={isMobile ? '100vw' : '(max-width: 1200px) 80vw, 1200px'}
                />
              </div>

              {/* REMOVED: Gallery preview on hover - focusing on cleaner presentation */}

              {/* REMOVED: Image overlays - pure, clean presentation */}
              
              {/* Cinematic Tags - Positioned over image layers */}
              <div 
                className="balanced-overlay-tags cinematic-tags"
                style={{
                  position: 'absolute',
                  top: isMobile ? '12px' : '16px',
                  right: isMobile ? '12px' : '16px',
                  zIndex: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  alignItems: 'flex-end'
                }}
              >
                <motion.span 
                  className="balanced-year-tag cinematic-tag"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  style={{
                    background: 'rgba(45, 55, 72, 0.8)', /* Design system charcoal */
                    color: 'white',
                    padding: isMobile ? '3px 6px' : '4px 8px',
                    borderRadius: '4px',
                    fontSize: isMobile ? '0.7rem' : '0.75rem',
                    fontWeight: '500',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {project.year}
                </motion.span>
                <motion.span 
                  className="balanced-category-tag cinematic-tag"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  style={{
                    background: 'rgba(45, 55, 72, 0.8)', /* Design system charcoal */
                    color: 'white',
                    padding: isMobile ? '3px 6px' : '4px 8px',
                    borderRadius: '4px',
                    fontSize: isMobile ? '0.7rem' : '0.75rem',
                    fontWeight: '500',
                    border: '1px solid rgba(255, 102, 99, 0.6)', /* subtle brand accent */
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {project.category}
                </motion.span>
              </div>
              
              {/* Mobile: Expand Image Button */}
              <button
                className="image-expand-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsImageExpanded(true);
                }}
                aria-label={`View full size image of ${project.title} project`}
                data-cursor="button"
                style={{
                  position: 'absolute',
                  bottom: isMobile ? '12px' : '16px',
                  right: isMobile ? '12px' : '16px',
                  zIndex: 5
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Content Section - 40% (Perfect Balance) */}
          <div className="balanced-content-section" style={{ paddingTop: isMobile ? '12px' : undefined }}>
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
                <p className="balanced-subtitle" style={isMobile ? {
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                } : undefined}>
                  {project.subtitle}
                </p>
                {!isMobile && (
                  <p className="balanced-description-text">
                    {project.description}
                  </p>
                )}
              </motion.div>
              
              {/* Clean Capability Tags */}
              {!isMobile && (
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
              )}
              
              {/* Project Action Buttons */}
              <motion.div 
                className="balanced-actions"
                style={{
                  display: 'flex',
                  flexDirection: 'row', /* FORCE horizontal layout with inline styles */
                  gap: isMobile ? '1rem' : '1.5rem',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: '2rem',
                  width: '100%',
                  /* DEBUG: Make container visible to confirm it exists */
                  backgroundColor: '#FFFF00', /* BRIGHT YELLOW TEST */
                  border: '3px solid #FF0000', /* RED BORDER TEST */
                  padding: '10px', /* Padding to make visible */
                  minHeight: '60px' /* Ensure height */
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
              >
                <motion.button
                  className="balanced-btn primary project-case-study-btn"
                  style={{
                    display: 'inline-flex', /* Ensure button displays inline for horizontal layout */
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap', /* Prevent text wrapping */
                    flex: '0 0 auto' /* Don't grow or shrink, natural size */
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(index);
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] } /* Back-out easing */
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                  data-cursor="button"
                  aria-label={`Explore ${project.title} case study in detail`}
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
                    style={{
                      display: 'inline-flex', /* Ensure button displays inline for horizontal layout */
                      alignItems: 'center',
                      justifyContent: 'center',
                      whiteSpace: 'nowrap', /* Prevent text wrapping */
                      flex: '0 0 auto', /* Don't grow or shrink, natural size */
                      textDecoration: 'none' /* Ensure no underlines */
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] } /* Back-out easing */
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                    data-cursor="button"
                    aria-label={`Visit ${project.client} website for ${project.title}`}
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
      
      {/* Premium Lightbox Modal for Full Image View */}
      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            className="image-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.382, ease: [0.25, 0.46, 0.45, 0.94] }} /* Landor easing */
            onClick={() => setIsImageExpanded(false)}
          >
            <motion.button
              className="lightbox-close-btn"
              onClick={() => setIsImageExpanded(false)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
              }}
              whileTap={{ 
                scale: 0.9,
                transition: { duration: 0.1 }
              }}
              data-cursor="button"
              aria-label="Close full image view"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
            
            <motion.div
              className="lightbox-image-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.382, ease: [0.25, 0.46, 0.45, 0.94] }} /* Golden ratio timing */
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.image}
                alt={`${project.title} - Full view`}
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
                quality={100}
                priority
              />
            </motion.div>
            
            <motion.div
              className="lightbox-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <h4>{project.title}</h4>
              <p>{project.client} • {project.year}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default InteractiveProjectCard;