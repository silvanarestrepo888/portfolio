'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Chronological order — past (left) → present (right)
const experiences = [
  { company: "UNE-TIGO (EPM)",         role: "Senior Marketing Leader",       period: "2004 – 2008" },
  { company: "Haceb",                   role: "Business Intelligence Director", period: "2008 – 2012" },
  { company: "Grupo Éxito",             role: "Marketing Director",             period: "2012 – 2015" },
  { company: "Designit (Wipro)",        role: "Strategic Design Director",      period: "2015 – 2018" },
  { company: "World Economic Forum",    role: "Ecosystem Engagement Leader",    period: "2018 – 2019" },
  { company: "Globant",                 role: "Experience Tech Manager",        period: "2019 – Present" },
];

const LINE_DURATION = 2.4;
const LINE_DELAY    = 0.6;
const LINE_EASE     = [0.4, 0, 0.2, 1] as const;

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section id="experience" ref={sectionRef} className="exp-section">

      {/* ── Header ── */}
      <div className="exp-header">
        <motion.h2
          className="exp-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          experience
        </motion.h2>
        <motion.p
          className="exp-subheading"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          Some of the hats worn over <em>more than 20 years</em>{' '}
          of non-stop upscaling, reinventing, and reimagining.
        </motion.p>
      </div>

      {/* ── Timeline stage ── */}
      <div className="exp-stage">

        {/* Year labels — above the line, reveal as line reaches each */}
        <div className="exp-row exp-row--periods" aria-hidden="true">
          {experiences.map((exp, i) => {
            const fraction = i / (experiences.length - 1);
            const delay    = LINE_DELAY + fraction * LINE_DURATION * 0.9;
            return (
              <motion.span
                key={exp.period}
                className="exp-period"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay }}
              >
                {exp.period}
              </motion.span>
            );
          })}
        </div>

        {/* The moving line + coral tip */}
        <div className="exp-line-track">
          {/* Faint background rail */}
          <div className="exp-line-rail" />

          {/* Animated fill — the line moving through time */}
          <motion.div
            className="exp-line-fill"
            initial={{ width: '0%' }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ duration: LINE_DURATION, delay: LINE_DELAY, ease: LINE_EASE }}
          />

          {/* Coral tip — the present moment travelling forward */}
          <motion.div
            className="exp-line-tip"
            initial={{ left: '0%', opacity: 0 }}
            animate={isInView ? { left: '100%', opacity: 1 } : {}}
            transition={{ duration: LINE_DURATION, delay: LINE_DELAY, ease: LINE_EASE }}
          />
        </div>

        {/* Company + role — below the line, reveal as line arrives */}
        <div className="exp-row exp-row--companies">
          {experiences.map((exp, i) => {
            const fraction = i / (experiences.length - 1);
            const delay    = LINE_DELAY + fraction * LINE_DURATION * 0.9;
            return (
              <motion.div
                key={exp.company}
                className="exp-entry"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="exp-company-name">{exp.company}</span>
                <span className="exp-role-name">{exp.role}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
