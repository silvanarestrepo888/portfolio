'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ImageLightbox } from '../ui/ImageLightbox';

interface SnippetProject {
  id: string;
  title: string;
  industry: string;
  serviceType: string;
  website: string;
  image: string;
  emailSubject: string;
}

interface ProjectSnippetCardProps {
  project: SnippetProject;
  index: number;
}

export const ProjectSnippetCard: React.FC<ProjectSnippetCardProps> = ({ project, index }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering image lightbox
    const subject = `Inquiry about ${project.title} - ${project.industry} Project`;
    const body = `Hi Silvana, I noticed your work on "${project.title}" in the ${project.industry} sector. I'd like to discuss how your ${project.serviceType} expertise might apply to my project. Could we schedule a conversation?`;
    window.location.href = `mailto:silvanarestrepo888@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Image clicked for lightbox:', project.title); // Debug logging
    setLightboxOpen(true);
  };

  return (
    <motion.div 
      className="snippet-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.015 }}
    >
      <div 
        className="snippet-image-container"
        onClick={(e) => handleImageClick(e)}
        style={{ cursor: 'zoom-in', position: 'relative', zIndex: 1 }}
        data-cursor="image"
      >
        <Image
          src={project.image}
          alt={`${project.title} - ${project.industry} project by Silvana Restrepo`}
          width={240}
          height={200}
          className="snippet-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center'
          }}
          quality={90}
        />
        
        {/* Hover overlay with expand hint */}
        <div 
          className="snippet-expand-hint"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(45, 55, 72, 0.8)', /* Charcoal from design system */
            backdropFilter: 'blur(10px)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '500',
            opacity: 0,
            transition: 'opacity var(--duration-fast) var(--ease-landor)',
            pointerEvents: 'none',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          Click to expand
        </div>
        <div className="snippet-overlay">
          <motion.button 
            className="snippet-cta-bottom-right"
            onClick={(e) => handleEmailClick(e)}
            whileHover={{ scale: 1.05, backgroundColor: '#E55A5A' }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Contact about ${project.title} project`}
            data-cursor="button"
          >
            Ask Me
          </motion.button>
        </div>
      </div>
      {/* Project Title - Now outside image for better visibility */}
      <div className="snippet-title-section">
        <h3 className="snippet-title-text">{project.title}</h3>
      </div>
      <div className="snippet-info">
        <span className="snippet-industry">{project.industry}</span>
        <span className="snippet-separator">•</span>
        <span className="snippet-service">{project.serviceType}</span>
      </div>
      
      {/* Image Lightbox */}
      <ImageLightbox
        image={project.image}
        alt={`${project.title} - ${project.industry} project by Silvana Restrepo`}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        projectTitle={project.title}
        projectIndustry={project.industry}
      />
    </motion.div>
  );
};