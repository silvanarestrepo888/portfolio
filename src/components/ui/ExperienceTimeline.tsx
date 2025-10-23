'use client';

import { motion } from 'framer-motion';

const experiences = [
  { 
    year: "2020–2025", 
    role: "Business Partner & Experience Architect", 
    company: "Globant",
    description: "Enterprise digital transformation for global brands"
  },
  { 
    year: "2019–2020", 
    role: "Ecosystem Engagement Leader", 
    company: "Centre for Fourth Industrial Revolution-WEF",
    description: "Technology governance frameworks for industry"
  },
  { 
    year: "2018–2019", 
    role: "Strategic Design Director", 
    company: "Designit a WIPRO Company",
    description: "Regional operations scaling and design solutions"
  },
  { 
    year: "2016–2018", 
    role: "Marketing Director", 
    company: "Grupo Éxito",
    description: "Retail experience innovation and partnerships"
  },
  { 
    year: "2013–2016", 
    role: "Business Intelligence Manager", 
    company: "Industrias HACEB",
    description: "Market segmentation transformation strategy"
  },
  { 
    year: "2012–2016", 
    role: "Independent Advisor", 
    company: "Independent",
    description: "Consumer behavior analysis and innovation"
  },
  { 
    year: "2002–2011", 
    role: "Senior Marketing Analyst", 
    company: "TIGO-Millicom",
    description: "Corporate expansion and M&A strategy"
  }
];

export function ExperienceTimeline() {

  return (
    <section 
      id="experience"
      className="experience-timeline-section luxury-background-texture section-about-sophisticated section-transition-sophisticated"
    >
      {/* Background interference elements removed for clean design */}
      <div className="projects-container-award-winning">
        {/* Consistent Section Header - Matching Other Sections */}
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
          >
            Some of the <span className="highlight-word" style={{ color: 'var(--coral-primary)', fontWeight: '600' }}>hats</span> I have worn over more than <span className="highlight-word" style={{ color: 'var(--coral-primary)', fontWeight: '600' }}>20 years</span> of non-stop, continuous <span className="highlight-word" style={{ color: 'var(--coral-primary)', fontWeight: '600' }}>upscaling, reinventing, evolving,</span> and <span className="highlight-word" style={{ color: 'var(--coral-primary)', fontWeight: '600' }}>reimagining</span> business, brands, and teams.
          </motion.p>
        </motion.div>

        {/* Vertical Alternating Timeline Experience Layout */}
        <div className="experience-vertical-timeline">
          {/* Central Timeline Line */}
          <div className="experience-central-line"></div>
          
          {experiences.map((experience, index) => (
            <motion.div 
              key={index} 
              className={`experience-timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  delay: index * 0.1, // Staggered animation
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <motion.div 
                className="experience-timeline-dot"
                initial={{ scale: 0 }}
                whileInView={{ 
                  scale: 1,
                  transition: { 
                    duration: 0.4,
                    delay: 0.2 + (index * 0.1),
                    type: "spring",
                    bounce: 0.4
                  }
                }}
                viewport={{ once: true }}
              />
              
              {/* Content Card */}
              <div className="experience-card">
                <div className="experience-card-content">
                  <span className="experience-year">{experience.year}</span>
                  <h3 className="experience-role">{experience.role}</h3>
                  <p className="experience-company">{experience.company}</p>
                  <p className="experience-description">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

