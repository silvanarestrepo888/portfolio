'use client';

import { motion } from 'framer-motion';

// Pure company names - ultra-clean
const companies = [
  "GLOBANT",
  "CENTRE FOR FOURTH INDUSTRIAL REVOLUTION-WEF", 
  "DESIGNIT A WIPRO COMPANY",
  "GRUPO ÉXITO",
  "INDUSTRIAS HACEB",
  "INDEPENDENT",
  "TIGO-MILLICOM"
];

// Pure role titles - ultra-clean
const roles = [
  "BUSINESS PARTNER & EXPERIENCE ARCHITECT",
  "ECOSYSTEM ENGAGEMENT LEADER", 
  "STRATEGIC DESIGN DIRECTOR",
  "MARKETING DIRECTOR",
  "BUSINESS INTELLIGENCE MANAGER",
  "INDEPENDENT ADVISOR",
  "SENIOR MARKETING ANALYST"
];

export function ExperienceTimeline() {
  // Duplicate arrays for seamless infinite loop
  const infiniteCompanies = [...companies, ...companies, ...companies];
  const infiniteRoles = [...roles, ...roles, ...roles];

  return (
    <section 
      id="experience"
      className="experience-infinite-section"
      style={{
        background: 'var(--vanilla-foundation)', /* Vanilla Panna Cotta */
        padding: '6rem 0',
        overflow: 'hidden',
        position: 'relative'
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
          <span className="projects-section-number-award">04</span>
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
          Two decades of transforming global brands through strategic partnerships and innovative solutions.
        </motion.p>
      </motion.div>

      {/* Infinite Loop Typography - Stella's Inspiration */}
      <div className="experience-infinite-container">
        
        {/* Top Row - Companies (Right to Left) */}
        <div className="experience-loop-track" style={{ marginBottom: '1.5rem' }}>
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
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', /* More elegant, Danish sizing */
              fontFamily: 'var(--font-architectural-display)',
              fontWeight: '300',
              color: 'var(--grapefruit-intelligence)',
              letterSpacing: '0.05em'
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
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', /* More elegant, Danish sizing */
              fontFamily: 'var(--font-architectural-display)',
              fontWeight: '300',
              color: 'var(--grapefruit-intelligence)',
              letterSpacing: '0.05em'
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

      {/* Organic Element - Bottom Accent */}
      <motion.div 
        className="experience-organic-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          marginTop: '4rem',
          fontSize: '0.875rem',
          fontFamily: 'var(--font-architectural-body)',
          color: 'var(--grapefruit-intelligence)',
          opacity: 0.7,
          letterSpacing: '0.1em'
        }}
      >
        ∞ CONTINUOUS EVOLUTION ∞
      </motion.div>
    </section>
  );
}