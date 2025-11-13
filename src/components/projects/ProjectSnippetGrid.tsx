'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ProjectSnippetCard } from './ProjectSnippetCard';

interface SnippetProject {
  id: string;
  title: string;
  industry: string;
  serviceType: string;
  website: string;
  image: string;
  emailSubject: string;
}

interface ProjectSnippetGridProps {
  projects: SnippetProject[];
}

export const ProjectSnippetGrid: React.FC<ProjectSnippetGridProps> = ({ projects }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentProject, setCurrentProject] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gridElement = gridRef.current;
    if (!gridElement) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = gridElement;
      const maxScroll = scrollWidth - clientWidth;
      
      // Calculate scroll progress (0-100)
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
      
      // Update scroll state for fade indicators
      setIsScrolled(scrollLeft > 10);
      setIsAtEnd(scrollLeft >= maxScroll - 10);
      
      // Calculate current project based on scroll position
      const projectWidth = 400 + 56; // card width + gap
      const currentIndex = Math.floor(scrollLeft / projectWidth) + 1;
      setCurrentProject(Math.min(currentIndex, projects.length));
    };

    gridElement.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();
    
    return () => gridElement.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Update container classes for CSS styling
    container.classList.toggle('scrolled', isScrolled);
    container.classList.toggle('at-end', isAtEnd);
  }, [isScrolled, isAtEnd]);

  const visibleProjects = Math.ceil(projects.length * 0.6); // Show about 60% initially
  const remainingProjects = projects.length - visibleProjects;

  return (
    <div ref={containerRef} className="snippet-carousel-container">
      <motion.div 
        ref={gridRef}
        className="snippet-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectSnippetCard 
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </motion.div>
      
      {/* More Content Indicator */}
      {!isAtEnd && remainingProjects > 0 && (
        <motion.div 
          className="snippet-more-indicator"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="snippet-more-count">
            +{remainingProjects} more
          </div>
          <div className="snippet-more-dots"></div>
        </motion.div>
      )}
      
      {/* Enhanced Scroll Progress System */}
      <motion.div 
        className="snippet-scroll-progress"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="snippet-progress-track">
          <div 
            className="snippet-progress-bar"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        
        <div className="snippet-progress-counter">
          <span className="snippet-current-project">{currentProject}</span>
          <span>/</span>
          <span>{projects.length}</span>
          <span>projects</span>
        </div>
      </motion.div>
      
      {/* Enhanced Scroll Hint */}
      <motion.div 
        className="snippet-scroll-hint"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
        onClick={() => {
          if (gridRef.current) {
            gridRef.current.scrollBy({ left: 400, behavior: 'smooth' });
          }
        }}
      >
        <span className="snippet-scroll-text">Scroll to explore</span>
        <div className="snippet-scroll-arrow"></div>
      </motion.div>
    </div>
  );
};