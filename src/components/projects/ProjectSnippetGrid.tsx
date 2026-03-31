'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ProjectSnippetCard } from './ProjectSnippetCard';

interface SnippetProject {
  id: string;
  client: string;
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const SCROLL_STEP = 440;

  useEffect(() => {
    const gridElement = gridRef.current;
    if (!gridElement) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = gridElement;
      const maxScroll = scrollWidth - clientWidth;
      setScrollProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
      setIsScrolled(scrollLeft > 10);
      setIsAtEnd(scrollLeft >= maxScroll - 10);
    };

    gridElement.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => gridElement.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.classList.toggle('scrolled', isScrolled);
    container.classList.toggle('at-end', isAtEnd);
  }, [isScrolled, isAtEnd]);

  const scrollLeft = () => {
    gridRef.current?.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' });
  };

  const scrollRight = () => {
    gridRef.current?.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="snippet-carousel-container">
      {/* Nav arrows */}
      <div className="snippet-nav-arrows">
        <motion.button
          className={`snippet-nav-arrow snippet-nav-prev${isScrolled ? ' visible' : ''}`}
          onClick={scrollLeft}
          aria-label="Scroll left"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          ‹
        </motion.button>
        <motion.button
          className={`snippet-nav-arrow snippet-nav-next${!isAtEnd ? ' visible' : ''}`}
          onClick={scrollRight}
          aria-label="Scroll right"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          ›
        </motion.button>
      </div>

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

      {/* Progress bar */}
      <motion.div
        className="snippet-progress-minimal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="snippet-progress-line">
          <div
            className="snippet-progress-fill"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.div>
    </div>
  );
};
