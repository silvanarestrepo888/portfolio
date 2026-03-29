'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Chronological order — past (left) → present (right)
const experiences = [
  { company: "UNE-TIGO (EPM)",         role: "Senior Marketing Leader",       period: "2004 – 2008" },
  { company: "Haceb",                   role: "Business Intelligence Director", period: "2008 – 2012" },
  { company: "Grupo Éxito",             role: "Marketing Director",             period: "2012 – 2015" },
  { company: "Designit (Wipro)",        role: "Strategic Design Director",      period: "2015 – 2018" },
  { company: "World Economic Forum",    role: "Ecosystem Engagement Leader",    period: "2018 – 2019" },
  { company: "Globant",                 role: "Experience Tech Manager",        period: "2019 – 2025" },
];

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven: 0 when section top hits 80% down viewport → 1 when section center hits 40%
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'center 40%'],
  });

  // Line and coral tip driven by scroll progress
  const lineWidth   = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const tipLeft     = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const tipOpacity  = useTransform(scrollYProgress, [0, 0.04], [0, 1]);

  // Each company reveals when the line reaches its position.
  // Fractions: 0, 0.2, 0.4, 0.6, 0.8, 1.0
  // Hooks must be called at the top level — no loops.
  const op0 = useTransform(scrollYProgress, [0.00, 0.10], [0, 1]);
  const op1 = useTransform(scrollYProgress, [0.16, 0.26], [0, 1]);
  const op2 = useTransform(scrollYProgress, [0.33, 0.43], [0, 1]);
  const op3 = useTransform(scrollYProgress, [0.50, 0.60], [0, 1]);
  const op4 = useTransform(scrollYProgress, [0.67, 0.77], [0, 1]);
  const op5 = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const opacities = [op0, op1, op2, op3, op4, op5];

  const y0 = useTransform(scrollYProgress, [0.00, 0.10], [12, 0]);
  const y1 = useTransform(scrollYProgress, [0.16, 0.26], [12, 0]);
  const y2 = useTransform(scrollYProgress, [0.33, 0.43], [12, 0]);
  const y3 = useTransform(scrollYProgress, [0.50, 0.60], [12, 0]);
  const y4 = useTransform(scrollYProgress, [0.67, 0.77], [12, 0]);
  const y5 = useTransform(scrollYProgress, [0.85, 0.95], [12, 0]);
  const ys = [y0, y1, y2, y3, y4, y5];

  return (
    <section id="experience" ref={sectionRef} className="exp-section">

      {/* ── Header ── */}
      <div className="exp-header">
        <motion.h2
          className="exp-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          experience
        </motion.h2>
        <motion.p
          className="exp-subheading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          Some of the hats worn over <em>more than 20 years</em>{' '}
          of non-stop upscaling, reinventing, and reimagining.
        </motion.p>
      </div>

      {/* ── Timeline stage ── */}
      <div className="exp-stage">

        {/* Year labels — above the line, each synced to scroll */}
        <div className="exp-row exp-row--periods" aria-hidden="true">
          {experiences.map((exp, i) => (
            <motion.span
              key={exp.period}
              className="exp-period"
              style={{ opacity: opacities[i] }}
            >
              {exp.period}
            </motion.span>
          ))}
        </div>

        {/* The line — grows as you scroll */}
        <div className="exp-line-track">
          <div className="exp-line-rail" />
          <motion.div
            className="exp-line-fill"
            style={{ width: lineWidth }}
          />
          {/* Coral tip — the present moment moving forward */}
          <motion.div
            className="exp-line-tip"
            style={{ left: tipLeft, opacity: tipOpacity }}
          />
        </div>

        {/* Companies + roles — each appears as the line arrives */}
        <div className="exp-row exp-row--companies">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="exp-entry"
              style={{ opacity: opacities[i], y: ys[i] }}
            >
              <span className="exp-company-name">{exp.company}</span>
              <span className="exp-role-name">{exp.role}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
