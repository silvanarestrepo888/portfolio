'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

/**
 * THE PLATE — project card
 *
 * One panel, media-led. The media spans the plate edge to edge and type
 * alone builds the hierarchy beneath it. There is no second container, so
 * there is no symmetry to maintain and no column that can hang in space.
 *
 * Every class is namespaced .plate*, which nothing in globals.css targets,
 * so src/styles/project-card.css owns this component outright.
 */

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
  objectPosition?: string;
  /** 'contain' for screen recordings, where a crop would destroy content */
  mediaFit?: 'cover' | 'contain';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const videoPlaying = Boolean(project.video) && (isHovered || isActive);

  // Video plays when the card is the active slide, or on hover
  useEffect(() => {
    const el = videoRef.current;
    if (!project.video || !el) return;

    if (videoPlaying) {
      // Let the slide-in settle before starting an auto-play
      const delay = isActive && !isHovered ? 400 : 0;
      const timer = setTimeout(() => {
        el.play().catch(() => {/* autoplay blocked — poster stays */});
      }, delay);
      return () => clearTimeout(timer);
    }

    el.pause();
    el.currentTime = 0;
  }, [videoPlaying, isActive, isHovered, project.video]);

  const handleClick = useCallback(() => onSelect(index), [index, onSelect]);

  const capabilities = (project.tech || []).slice(0, 3);
  const meta = [project.year, project.location].filter(Boolean).join(' · ');

  return (
    <div
      className={`plate-shell ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      role="button"
      tabIndex={0}
      data-cursor="image"
      aria-label={`${project.title} — ${project.client}. Open case study.`}
    >
      <article className="plate">

        <div className={`plate-media${project.mediaFit === 'contain' ? ' plate-media--contain' : ''}`}>
          <Image
            src={project.image}
            alt={`${project.title} — ${project.client}`}
            fill
            className={imageLoaded ? '' : 'is-loading'}
            style={{ objectPosition: project.objectPosition ?? 'center' }}
            quality={90}
            unoptimized
            priority={index < 2}
            sizes="(max-width: 640px) 100vw, 60vw"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />

          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              className={videoPlaying ? 'is-playing' : ''}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="plate-body">
          <div className="plate-row">
            <h3 className="plate-title">{project.title}</h3>
            {meta && <span className="plate-meta">{meta}</span>}
          </div>

          {project.website ? (
            <a
              className="plate-client"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {project.client} ↗
            </a>
          ) : (
            <span className="plate-client">{project.client}</span>
          )}

          {project.subtitle && <p className="plate-sub">{project.subtitle}</p>}

          <hr className="plate-rule" />

          <div className="plate-foot">
            <p className="plate-caps">
              {capabilities.map((cap, i) => (
                <span key={cap}>
                  {i > 0 && <i>·</i>}
                  {cap}
                </span>
              ))}
            </p>
            <span className="plate-cta">
              View case study <span className="plate-arrow" aria-hidden="true">→</span>
            </span>
          </div>
        </div>

      </article>
    </div>
  );
}

export default InteractiveProjectCard;
