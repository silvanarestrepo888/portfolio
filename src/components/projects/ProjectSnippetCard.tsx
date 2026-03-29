'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  const [imageLoaded, setImageLoaded] = useState(false);

  // Show only the primary service (before the | separator)
  const primaryService = project.serviceType.split('|')[0].trim();

  const handleEmailClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const subject = `Inquiry about ${project.title} - ${project.industry} Project`;
    const body = `Hi Silvana, I noticed your work on "${project.title}" in the ${project.industry} sector. I'd like to discuss how your ${project.serviceType} expertise might apply to my project. Could we schedule a conversation?`;
    window.location.href = `mailto:silvanarestrepo888@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleExternalLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.website, '_blank', 'noopener noreferrer');
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
      {/* Image — fills the container, shimmer until ready */}
      <div className={`snippet-image-container${imageLoaded ? '' : ' img-loading'}`}>
        <Image
          src={project.image}
          alt={`${project.title} — ${project.industry} project by Silvana Restrepo`}
          fill
          className="snippet-image"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
          quality={90}
          unoptimized
          priority={index < 3}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />

        {/* Industry pill — top right */}
        <div className="snippet-industry-pill">{project.industry}</div>

        {/* Coral sweep line — CSS :after handles the animation */}
        <div className="snippet-sweep-line" aria-hidden="true" />

        {/* Overlay — contains action buttons */}
        <div className="snippet-overlay">
          {/* External link — bottom left, reveals on hover */}
          <motion.button
            className="snippet-external-link"
            onClick={handleExternalLink}
            aria-label={`Visit ${project.title} website`}
            whileTap={{ scale: 0.9 }}
          >
            ↗
          </motion.button>

          {/* Inquire CTA — bottom right */}
          <motion.button
            className="snippet-cta-bottom-right"
            onClick={handleEmailClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Contact about ${project.title} project`}
          >
            Inquire →
          </motion.button>
        </div>
      </div>

      {/* Title with reveal underline */}
      <div className="snippet-title-section">
        <p className="snippet-card-service-label">{primaryService}</p>
        <h3 className="snippet-title-text">{project.title}</h3>
      </div>

    </motion.div>
  );
};
