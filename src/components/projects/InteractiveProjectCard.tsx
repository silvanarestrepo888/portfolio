'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
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
  video?: string;
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Control video play/pause — auto-plays when card is active featured slide, or on hover
  useEffect(() => {
    if (!project.video || !videoRef.current) return;
    const shouldPlay = isHovered || isActive;
    if (shouldPlay) {
      // Small delay when becoming active to let slide-in animation complete
      const delay = isActive && !isHovered ? 400 : 0;
      const timer = setTimeout(() => {
        videoRef.current?.play().catch(() => {/* autoplay blocked */});
      }, delay);
      return () => clearTimeout(timer);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered, isActive, project.video]);

  // Cinematic aspect ratios for different project types
  const getAspectRatio = (projectTitle: string) => {
    const ratios: { [key: string]: string } = {
      'Kayanee': '16:10',        // Wellness - wide cinematic
      'Augoor': '4:3',           // Software - square tech
      'Chime Care J&J': '3:2',   // Healthcare - classic
      'Nomade Tulum': '16:9',    // Hospitality - cinematic wide
      'Danone Digital Transformation': '4:3', // Corporate - square
      'Parques Reunidos': '16:9', // Entertainment - wide
      'Flagship Entertainment Destination, KSA': '16:9', // Entertainment - wide
    'GCC Telecom Leader — Customer Experience Center': '16:9'  // Telecom - wide cinematic
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{
        y: -4,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
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
      <div className="balanced-project-card luxury-hover-elevation project-card-shadow-3d">
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
              {/* Static Image — shimmer skeleton until loaded */}
              <div
                className={`cinematic-main-image-static${imageLoaded ? '' : ' img-loading'}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={isMobile ? 'object-cover' : 'object-contain'}
                  style={{
                    objectPosition: 'center',
                    filter: 'contrast(1.02) saturate(1.05)',
                    opacity: imageLoaded ? (project.video && (isHovered || isActive) ? 0 : 1) : 0,
                    transition: 'opacity 0.8s ease',
                  }}
                  quality={100}
                  unoptimized
                  priority={index < 2}
                  sizes={isMobile ? '100vw' : '(max-width: 1200px) 80vw, 1200px'}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />
              </div>

              {/* Video layer — crossfades in when card is active or hovered */}
              {project.video && (
                <motion.video
                  ref={videoRef}
                  src={project.video}
                  muted
                  loop
                  playsInline
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: isMobile ? 'cover' : 'contain',
                    zIndex: 2,
                    background: 'transparent',
                  }}
                  animate={{ opacity: (isHovered || isActive) ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              )}
              

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
                <span
                  className="balanced-year-tag cinematic-tag"
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
                </span>
                <span
                  className="balanced-category-tag cinematic-tag"
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
                </span>
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
                <h3 className="balanced-title">
                  {project.title}
                </h3>

                <p className="balanced-client">
                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="balanced-client-link"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Visit ${project.client} website`}
                    >
                      {project.client}
                      <span className="balanced-client-arrow">↗</span>
                    </a>
                  ) : project.client}
                </p>

                <div className="balanced-meta">
                  <span>{project.year}</span>
                  <span className="balanced-divider">•</span>
                  <span>{project.location}</span>
                </div>
              </header>
              
              {/* Clean Description */}
              <div className="balanced-description">
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
              </div>
              
              {/* Clean Capability Tags */}
              {!isMobile && (
                <div className="balanced-capabilities">
                  <div className="balanced-tags">
                    {project.tech.slice(0, 3).map((capability) => (
                      <span key={capability} className="balanced-tag">
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Editorial CTA strip — replaces disconnected buttons */}
              <div className="card-cta-strip">
                <span className="card-cta-label">View case study</span>
                <motion.span
                  className="card-cta-arrow"
                  animate={{ x: (isHovered || isActive) ? 6 : 0 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                >
                  →
                </motion.span>
              </div>
              
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
                alt={`${project.title} — Full view`}
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
                quality={100}
                unoptimized
                priority
                sizes="90vw"
                onLoad={() => {}}
                onError={() => {}}
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