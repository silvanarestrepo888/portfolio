'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SnippetProject {
  id: string;
  client: string;
  title: string;
  year: string;
  location: string;
  capabilities: string[];
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
  const [isHovered, setIsHovered] = useState(false);

  const rotatorItems = [project.year, project.location, ...project.capabilities];
  const [activeIndex, setActiveIndex] = useState(index % rotatorItems.length);
  const [visible, setVisible] = useState(true);

  // Extract clean domain for display: "https://www.badael.sa/" → "badael.sa"
  const displayDomain = (() => {
    try {
      return new URL(project.website).hostname.replace(/^www\./, '');
    } catch {
      return project.website;
    }
  })();

  useEffect(() => {
    if (isHovered) return;

    const holdTimer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    const swapTimer = setTimeout(() => {
      setActiveIndex(i => (i + 1) % rotatorItems.length);
      setVisible(true);
    }, 2900);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(swapTimer);
    };
  }, [activeIndex, isHovered, rotatorItems.length]);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const subject = `Inquiry about ${project.title} - ${project.industry} Project`;
    const body = `Hi Silvana, I noticed your work on "${project.title}" in the ${project.industry} sector. I'd like to discuss how your ${project.serviceType} expertise might apply to my project. Could we schedule a conversation?`;
    window.location.href = `mailto:silvanarestrepo888@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div
      className="snippet-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.015 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
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

        {/* Industry pill */}
        <div className="snippet-industry-pill">{project.industry}</div>

        {/* Coral sweep line */}
        <div className="snippet-sweep-line" aria-hidden="true" />

        {/* Overlay — Inquire CTA only */}
        <div className="snippet-overlay">
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

      {/* Text section */}
      <div className="snippet-title-section">
        <p className="snippet-client-name">{project.client}</p>
        <h3 className="snippet-title-text">{project.title}</h3>

        {/* Domain link — always visible, Option B */}
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="snippet-domain-link"
          onClick={e => e.stopPropagation()}
          aria-label={`Visit ${project.client} website at ${displayDomain}`}
        >
          {displayDomain} ↗
        </a>

        {/* Metadata rotator */}
        <div className="snippet-rotator" aria-label={`${project.year}, ${project.location}, ${project.capabilities.join(', ')}`}>
          {!isHovered ? (
            <span
              className="snippet-rotator-single"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {rotatorItems[activeIndex]}
            </span>
          ) : (
            <div className="snippet-rotator-expanded">
              <span className="snippet-rotator-meta">{project.year} · {project.location}</span>
              <span className="snippet-rotator-caps">{project.capabilities.join(' · ')}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
