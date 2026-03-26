'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const experiences = [
  {
    company: "Globant",
    role: "Business Partner & Experience Architect",
    period: "2019 – Now",
    impact: "Architecting experience strategy for global enterprise clients across health, retail, and finance.",
  },
  {
    company: "WEF — C4IR",
    role: "Ecosystem Engagement Leader",
    period: "2018 – 2019",
    impact: "Bridging public-private innovation ecosystems across 40+ countries for the Fourth Industrial Revolution.",
  },
  {
    company: "Designit",
    role: "Strategic Design Director",
    period: "2015 – 2018",
    impact: "Leading strategic design and transformation programs for Fortune 500 companies. A Wipro Company.",
  },
  {
    company: "Grupo Éxito",
    role: "Tech Manager, Product Direction",
    period: "2012 – 2015",
    impact: "Directing product and technology strategy for LATAM's largest omnichannel retailer. A Casino Group company.",
  },
  {
    company: "Ind. HACEB",
    role: "Marketing Director",
    period: "2008 – 2012",
    impact: "Building brand market leadership and customer intelligence across Latin America.",
  },
  {
    company: "TIGO-Millicom",
    role: "Business Intelligence Manager",
    period: "2004 – 2008",
    impact: "Transforming raw data into competitive positioning strategy for one of LATAM's largest telecom groups.",
  },
];

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef  = useRef<HTMLDivElement>(null);
  const isInView  = useInView(sectionRef, { once: true, amount: 0.25 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="exp-section"
      aria-labelledby="exp-heading"
    >
      {/* ── Section header ── */}
      <div className="exp-header">
        <motion.h2
          id="exp-heading"
          className="exp-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
        >
          experience
        </motion.h2>
        <motion.p
          className="exp-subheading"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
        >
          Some of the hats worn over{' '}
          <em>more than 20 years</em>{' '}
          of non-stop upscaling, reinventing, and reimagining.
        </motion.p>
      </div>

      {/* ── Timeline track ── */}
      <div ref={trackRef} className="exp-track-wrapper">

        {/* Animated connecting line */}
        <div className="exp-line-rail" aria-hidden="true">
          <motion.div
            className="exp-line"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformOrigin: 'left center' }}
          />
        </div>

        {/* Node row */}
        <div className="exp-nodes" role="list">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`exp-node-col${hovered === i ? ' exp-node-col--active' : ''}`}
              role="listitem"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
            >
              {/* Year label — above the dot */}
              <motion.span
                className="exp-year"
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                {exp.period}
              </motion.span>

              {/* The node dot */}
              <motion.div
                className="exp-dot"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: 'spring', stiffness: 320, damping: 20 }}
                aria-hidden="true"
              />

              {/* Company + role — below the dot */}
              <motion.div
                className="exp-label"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="exp-company">{exp.company}</span>
                <span className="exp-role">{exp.role}</span>
              </motion.div>

              {/* Hover card — floats above */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    className="exp-card"
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                    role="tooltip"
                  >
                    <p className="exp-card-impact">{exp.impact}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer tagline ── */}
      <motion.p
        className="exp-footer-tagline"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.0, delay: 1.2, ease: 'easeOut' }}
        aria-hidden="true"
      >
        Two decades of continuous evolution
      </motion.p>
    </section>
  );
}
