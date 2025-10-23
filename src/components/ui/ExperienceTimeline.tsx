'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  { year: "2020–2025", role: "Business Partner & Experience Strategist", company: "Globant" },
  { year: "2019–2020", role: "Ecosystem Engagement Leader", company: "Centre for Fourth Industrial Revolution-WEF" },
  { year: "2018–2019", role: "Strategic Design Director", company: "Designit (Wipro)" },
  { year: "2016–2018", role: "Marketing Director", company: "Real Estate Grupo Éxito" },
  { year: "2013–2016", role: "Business Intelligence Manager", company: "Industrias HACEB" },
  { year: "2012–2016", role: "Independent Advisor", company: "Independent" },
  { year: "2002–2011", role: "Senior Marketing Analyst", company: "TIGO-Millicom" }
];

export function ExperienceTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const scrollSpeed = 1.2; // Faster speed (pixels per frame)
    let scrollPosition = 0;
    let animationId: number;

    // Calculate total width of one set of experiences
    const cardWidth = 220; // Smaller card width
    const gap = 40; // 2.5rem gap
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
      className="experience-timeline-section-elevated luxury-background-texture section-experience-sophisticated"
    >
      {/* Sophisticated Background Overlay */}
      <div className="experience-overlay-system" />
      <div className="experience-texture-overlay" />
      <div className="experience-vignette" />
      
      <div className="experience-timeline-container">
        {/* Elevated Section Header with Cinematic Entrance */}
        <motion.div 
          className="experience-timeline-header-elevated text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          {/* Large Decorative Section Number */}
          <motion.div
            className="experience-section-number-large"
            initial={{ opacity: 0, scale: 0.5, y: -30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1.0,
              delay: 0.2,
              type: "spring",
              bounce: 0.4
            }}
            viewport={{ once: true }}
          >
            04
          </motion.div>
          
          {/* Decorative Underline */}
          <motion.div
            className="experience-number-underline"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          />
          
          {/* Section Title with Gradient */}
          <motion.h2 
            className="experience-title-elevated"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          
          {/* Refined Description */}
          <motion.p 
            className="experience-description-elevated"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="quote-mark">&ldquo;</span>
            Some of the <span className="highlight-grapefruit">hats</span> I have worn over more than <span className="highlight-grapefruit">20 years</span> of non-stop, continuous <span className="highlight-grapefruit">upscaling, reinventing, evolving,</span> and <span className="highlight-grapefruit">reimagining</span> business, brands, and teams.
            <span className="quote-mark">&rdquo;</span>
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Timeline with Cinematic Entrance */}
        <motion.div 
          className="experience-horizontal-scroll"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated Timeline Line with Shimmer */}
          <motion.div 
            className="timeline-line-horizontal"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.0, ease: [0.65, 0, 0.35, 1] }}
            viewport={{ once: true }}
          />
          
          <div className="timeline-track" ref={trackRef}>
            {infiniteExperiences.map((exp, i) => (
              <motion.div 
                key={i} 
                className="timeline-item-horizontal"
                initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: -10 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  rotateX: 0,
                  transition: {
                    duration: 0.8,
                    delay: 1.2 + (i % experiences.length) * 0.08,
                    ease: [0.34, 1.56, 0.64, 1]
                  }
                }}
                viewport={{ once: true }}
              >
                {/* Animated Timeline Dot with Pulse */}
                <motion.div 
                  className="timeline-dot-horizontal timeline-dot-animated"
                  initial={{ scale: 0 }}
                  whileInView={{ 
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: 1.3 + (i % experiences.length) * 0.08,
                      type: "spring",
                      bounce: 0.6
                    }
                  }}
                  viewport={{ once: true }}
                />
                
                {/* Enhanced Card with Hover Effects */}
                <div className="experience-card-compact experience-card-elevated">
                  <div className="experience-year-compact">{exp.year}</div>
                  <div className="experience-company-compact">{exp.company}</div>
                  <div className="experience-role-compact">{exp.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Luxury Progress Indicator */}
        <motion.div 
          className="timeline-progress-container-elevated"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <div className="progress-label-elevated">Journey Progress</div>
          <div className="timeline-progress-bar-elevated">
            <div 
              className="timeline-progress-fill-elevated"
              style={{ width: `${progress}%` }}
            />
            <div className="progress-shimmer" />
          </div>
          <div className="progress-percentage-elevated">{Math.round(progress)}%</div>
        </motion.div>
      </div>
      
      {/* Visual Bridge to Footer */}
      <div className="experience-footer-bridge" />
    </section>
  );
}

