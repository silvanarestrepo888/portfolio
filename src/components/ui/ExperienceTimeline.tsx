'use client';

import { motion } from 'framer-motion';

// Sophisticated company names - elegant normal case
const companies = [
  "Globant",
  "Centre for Fourth Industrial Revolution-WEF", 
  "Designit a Wipro Company",
  "Grupo Éxito a Casino Company",
  "Industrias HACEB",
  "TIGO-Millicom"
];

// Sophisticated role titles - elegant normal case
const roles = [
  "Business Partner & Experience Architect",
  "Ecosystem Engagement Leader", 
  "Strategic Design Director",
  "Tech Manager, Product Direction",
  "Marketing Director",
  "Business Intelligence Manager"
];

export function ExperienceTimeline() {
  // Duplicate arrays for seamless infinite loop
  const infiniteCompanies = [...companies, ...companies, ...companies];
  const infiniteRoles = [...roles, ...roles, ...roles];

  return (
    <section 
      id="experience"
      className="experience-infinite-section luxury-background-texture section-about-sophisticated section-transition-sophisticated topographic-luxury"
      data-topographic="experience"
      style={{
        padding: '6rem 0',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {/* Section Header - Consistent with other sections */}
      <motion.div 
        className="projects-header-award-winning"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.618, ease: [0.236, 0.618, 0.382, 1.0] }}
        viewport={{ once: true }}
      >
        <div className="projects-header-content-award">
          <motion.h2 
            className="projects-title-award-winning typography-h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.618, delay: 0.236 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
        </div>
        
        <motion.p 
          className="projects-description-award-winning typography-body text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.618, delay: 0.382 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          Some of the <span className="highlight-word" style={{ color: 'var(--coral-primary)', fontWeight: '600' }}>hats</span> I have worn over more than <span className="highlight-word" style={{ color: 'var(--coral-primary)', fontWeight: '600' }}>20 years</span> of non-stop, continuous <span className="highlight-word" style={{ color: 'var(--coral-primary)', fontWeight: '600' }}>upscaling, reinventing, evolving,</span> and <span className="highlight-word" style={{ color: 'var(--coral-primary)', fontWeight: '600' }}>reimagining</span> business, brands, and teams.
        </motion.p>
      </motion.div>

      {/* Sophisticated Container Frame - Integrated Design */}
      <div className="experience-integrated-frame">
        
        {/* Infinite Loop Typography - Stella's Inspiration */}
        <div className="experience-infinite-container">
          
          {/* Top Row - Companies (Right to Left) */}
        <div className="experience-loop-track" style={{ marginBottom: '0.75rem' }}>
          <motion.div
            className="experience-loop-content"
            animate={{
              x: ["0%", "-100%"]
            }}
            transition={{
              duration: 70, /* Medium-fast tempo - Danish sophistication */
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', /* Integrated, balanced sizing */
              fontFamily: 'var(--font-architectural-display)',
              fontWeight: '400', /* More substantial, Danish sophistication */
              color: 'var(--grapefruit-intelligence)',
              letterSpacing: '0.02em' /* Less edgy, more refined */
            }}
          >
            {infiniteCompanies.map((company, index) => (
              <span key={index} style={{ display: 'flex', alignItems: 'center' }}>
                {company}
                <span 
                  style={{ 
                    margin: '0 1rem', /* Closer spacing like Stella */
                    color: 'var(--grapefruit-intelligence)',
                    fontSize: '0.3em' /* Subtle elegance */
                  }}
                >
                  ◆
                </span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Roles (Left to Right) */}
        <div className="experience-loop-track">
          <motion.div
            className="experience-loop-content"
            animate={{
              x: ["-100%", "0%"]
            }}
            transition={{
              duration: 75, /* Slightly different speed for visual interest */
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', /* Integrated, balanced sizing */
              fontFamily: 'var(--font-architectural-display)',
              fontWeight: '400', /* More substantial, Danish sophistication */
              color: 'var(--grapefruit-intelligence)',
              letterSpacing: '0.02em' /* Less edgy, more refined */
            }}
          >
            {infiniteRoles.map((role, index) => (
              <span key={index} style={{ display: 'flex', alignItems: 'center' }}>
                {role}
                <span 
                  style={{ 
                    margin: '0 1rem', /* Closer spacing like Stella */
                    color: 'var(--grapefruit-intelligence)',
                    fontSize: '0.3em' /* Subtle elegance */
                  }}
                >
                  ◇
                </span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      </div>

      {/* Sophisticated Integration Accent */}
      <motion.div 
        className="experience-organic-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          marginTop: '3rem',
          fontSize: '0.875rem'
        }}
      >
        Two decades of continuous evolution
      </motion.div>
    </section>
  );
}