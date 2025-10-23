'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  { year: "2020—2025", role: "Business Partner & Experience Architect", company: "Globant" },
  { year: "2019—2020", role: "Ecosystem Engagement Leader", company: "Centre for Fourth Industrial Revolution-WEF" },
  { year: "2018—2019", role: "Strategic Design Director", company: "Designit a WIPRO Company" },
  { year: "2016—2018", role: "Marketing Director", company: "Grupo Éxito" },
  { year: "2013—2016", role: "Business Intelligence Manager", company: "Industrias HACEB" },
  { year: "2012—2016", role: "Independent Advisor", company: "Independent" },
  { year: "2002—2011", role: "Research & Strategy Director", company: "Napoleon Franco" }
];

export function ExperienceTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const scrollSpeed = 0.5; // Medium speed (pixels per frame)
    let scrollPosition = 0;
    let animationId: number;

    // Calculate total width of one set of experiences
    const cardWidth = 280; // Card width
    const gap = 48; // 3rem gap
    const totalWidth = experiences.length * (cardWidth + gap);

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset when first set completes (seamless loop)
      if (scrollPosition >= totalWidth) {
        scrollPosition = scrollPosition % totalWidth;
      }

      // Update transform
      if (track) {
        track.style.transform = `translateX(-${scrollPosition}px)`;
        
        // Update progress (0-100%)
        const progressValue = ((scrollPosition % totalWidth) / totalWidth) * 100;
        setProgress(progressValue);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Triple the array for seamless infinite loop
  const infiniteExperiences = [...experiences, ...experiences, ...experiences];

  return (
    <section 
      id="experience"
      className="experience-timeline-section luxury-background-texture section-about-sophisticated"
      style={{ 
        minHeight: '80vh',
        padding: '80px 0',
        background: 'var(--vanilla-whisper)'
      }}
    >
      <div className="experience-timeline-container">
        {/* Section Header */}
        <motion.div 
          className="experience-timeline-header text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span 
            className="section-number text-sm font-semibold tracking-wider uppercase block mb-4"
            style={{ color: 'var(--grapefruit-intelligence)' }}
          >
            04
          </span>
          <h2 
            className="typography-h2" 
            style={{ 
              color: '#4A5568', 
              fontSize: '68px',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1rem'
            }}
          >
            Experience
          </h2>
          <p 
            className="typography-body text-center max-w-3xl mx-auto" 
            style={{ 
              color: '#667080',
              opacity: 0.9,
              lineHeight: '1.4',
              fontSize: '20px',
              margin: '0 auto'
            }}
          >
            Some of the <span style={{ color: 'var(--grapefruit-intelligence)', fontWeight: '600' }}>hats</span> I have worn over more than <span style={{ color: 'var(--grapefruit-intelligence)', fontWeight: '600' }}>20 years</span> of non-stop, continuous <span style={{ color: 'var(--grapefruit-intelligence)', fontWeight: '600' }}>upscaling, reinventing, evolving,</span> and <span style={{ color: 'var(--grapefruit-intelligence)', fontWeight: '600' }}>reimagining</span> business, brands, and teams.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Timeline */}
        <div className="experience-horizontal-scroll">
          <div className="timeline-track" ref={trackRef}>
            {infiniteExperiences.map((exp, i) => (
              <div key={i} className="timeline-item-horizontal">
                {/* Timeline Dot */}
                <div className="timeline-dot-horizontal" />
                
                {/* Card */}
                <div className="experience-card-compact">
                  <div className="experience-year-compact">{exp.year}</div>
                  <div className="experience-company-compact">{exp.company}</div>
                  <div className="experience-role-compact">{exp.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="timeline-progress-container">
          <div className="timeline-progress-bar">
            <div 
              className="timeline-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="timeline-progress-text">{Math.round(progress)}%</span>
        </div>
      </div>
    </section>
  );
}

