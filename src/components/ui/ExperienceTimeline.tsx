'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

// THE LENS LINE — brands above, transformation below, depth on hover.
// Read left to right, the labels tell the story without one sentence of prose.
const experiences = [
  { company: 'TIGO-MILLICOM',        label: 'Scale & Integration',            reveal: 'M&A brand integration.' },
  { company: 'Haceb',                label: 'Data → Consumer',                reveal: '+26% sales — segmentation rebuilt around the consumer.' },
  { company: 'Grupo Éxito',          label: 'Commerce → Belonging',           reveal: '3 additional shopping malls launched · 800+ brand partnerships.' },
  { company: 'Designit · Wipro',     label: 'Creativity, Scaled',             reveal: '20+ person multidisciplinary team · regional operations.' },
  { company: 'WEF · C4IR',           label: 'Technology, Governed',           reveal: 'C4IR — LATAM stakeholder architecture.' },
  { company: 'Globant',              label: 'Experience, Engineered',         reveal: 'Client Partner, Inditex · Wellness, hospitality & gaming corporate ventures (PIF).' },
  { company: 'Experience Architect', label: 'Human-AI Workflow Architecture', reveal: 'stc CX Center · DZRT market entry · venture design, LATAM finance.' },
];

// SVG viewBox: 0 0 1000 200
// Ascending trajectory through seven anchors: career rises left to right
const CURVE = 'M 0,150 C 60,140 110,132 166,128 C 230,124 280,144 333,138 C 400,130 450,112 500,104 C 560,96 610,94 666,88 C 720,82 780,68 833,60 C 890,52 950,40 1000,32';

// Pin geometry — yPct maps svgY/200 exactly
const PINS = [
  { xPct: 0,    yPct: 75, align: 'start',  svgX: 0,    svgY: 150, nodeR: 2.5, fill: 'rgba(74,85,104,0.22)' },
  { xPct: 16.6, yPct: 64, align: 'center', svgX: 166,  svgY: 128, nodeR: 3,   fill: 'rgba(74,85,104,0.26)' },
  { xPct: 33.3, yPct: 69, align: 'center', svgX: 333,  svgY: 138, nodeR: 3,   fill: 'rgba(74,85,104,0.32)' },
  { xPct: 50,   yPct: 52, align: 'center', svgX: 500,  svgY: 104, nodeR: 3.5, fill: 'rgba(74,85,104,0.38)' },
  { xPct: 66.6, yPct: 44, align: 'center', svgX: 666,  svgY: 88,  nodeR: 3.5, fill: 'rgba(74,85,104,0.44)' },
  { xPct: 83.3, yPct: 30, align: 'center', svgX: 833,  svgY: 60,  nodeR: 4,   fill: 'rgba(74,85,104,0.52)' },
  { xPct: 100,  yPct: 16, align: 'end',    svgX: 1000, svgY: 32,  nodeR: 5.5, fill: 'rgba(255,102,99,0.9)' },
];

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 55%'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  // Per-entry reveals — all 7 complete by 74% scroll progress
  const op0 = useTransform(scrollYProgress, [0.00, 0.09], [0, 1]);
  const op1 = useTransform(scrollYProgress, [0.10, 0.19], [0, 1]);
  const op2 = useTransform(scrollYProgress, [0.20, 0.29], [0, 1]);
  const op3 = useTransform(scrollYProgress, [0.30, 0.39], [0, 1]);
  const op4 = useTransform(scrollYProgress, [0.40, 0.49], [0, 1]);
  const op5 = useTransform(scrollYProgress, [0.50, 0.59], [0, 1]);
  const op6 = useTransform(scrollYProgress, [0.60, 0.74], [0, 1]);
  const opacities = [op0, op1, op2, op3, op4, op5, op6];

  const y0 = useTransform(scrollYProgress, [0.00, 0.09], [8, 0]);
  const y1 = useTransform(scrollYProgress, [0.10, 0.19], [8, 0]);
  const y2 = useTransform(scrollYProgress, [0.20, 0.29], [8, 0]);
  const y3 = useTransform(scrollYProgress, [0.30, 0.39], [8, 0]);
  const y4 = useTransform(scrollYProgress, [0.40, 0.49], [8, 0]);
  const y5 = useTransform(scrollYProgress, [0.50, 0.59], [8, 0]);
  const y6 = useTransform(scrollYProgress, [0.60, 0.74], [8, 0]);
  const ys = [y0, y1, y2, y3, y4, y5, y6];

  return (
    <section id="experience" ref={sectionRef} className="exp-section">

      <div className="exp-header">
        <motion.h2
          className="exp-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          experience
        </motion.h2>
        <motion.p
          className="exp-subheading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          Some of the hats worn over <em>more than 20 years</em>{' '}
          of non-stop upscaling, reinventing, and reimagining.
        </motion.p>
      </div>

      {/* Stage: everything inside is positioned relative to this box */}
      <div className="exp-stage">

        {/* The curve — protagonist, fills the stage absolutely */}
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          className="exp-curve-svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="expG" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(74,85,104,0.10)" />
              <stop offset="60%"  stopColor="rgba(74,85,104,0.50)" />
              <stop offset="100%" stopColor="rgba(255,102,99,0.95)" />
            </linearGradient>
            <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Ghost rail */}
          <path d={CURVE} fill="none" stroke="rgba(74,85,104,0.07)" strokeWidth="2" />

          {/* Animated draw */}
          <motion.path
            d={CURVE}
            fill="none"
            stroke="url(#expG)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength }}
          />

          {/* Entry nodes */}
          {PINS.map((pin, i) => (
            <motion.circle
              key={i}
              cx={pin.svgX}
              cy={pin.svgY}
              r={pin.nodeR}
              fill={pin.fill}
              style={{ opacity: opacities[i] }}
              filter={i === 6 ? 'url(#nodeGlow)' : undefined}
            />
          ))}
        </svg>

        {/* Text pins — wordmark above, transformation below. No job titles. */}
        {experiences.map((exp, i) => {
          const pin = PINS[i];
          const isLast = i === 6;
          const isActive = activeIndex === i;
          return (
            <motion.div
              key={exp.company}
              className={`exp-pin exp-pin--${pin.align}${isLast ? ' exp-pin--last' : ''}${isActive ? ' exp-pin--active' : ''} exp-pin--e${i}`}
              style={{
                left:    `${pin.xPct}%`,
                top:     `${pin.yPct}%`,
                opacity: opacities[i],
                y:       ys[i],
              }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(isActive ? null : i)}
              role="button"
              tabIndex={0}
              onFocus={() => setActiveIndex(i)}
              onBlur={() => setActiveIndex(null)}
              aria-label={`${exp.company}: ${exp.reveal}`}
            >
              <span className="exp-company-name">{exp.company}</span>
              <span className="exp-transformation">{exp.label}</span>
              {/* Mobile-only inline reveal */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    className="exp-reveal-inline"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {exp.reveal}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

      </div>

      {/* Desktop reveal strip — one line, centered, appears for whoever reaches for it */}
      <div className="exp-reveal-strip" aria-live="polite">
        <AnimatePresence mode="wait">
          {activeIndex !== null && (
            <motion.p
              key={activeIndex}
              className={`exp-reveal-text${activeIndex === 6 ? ' exp-reveal-text--last' : ''}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              {experiences[activeIndex].reveal}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* The one sentence the section keeps */}
      <motion.p
        className="exp-fieldwork"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        Each role was fieldwork.
      </motion.p>
    </section>
  );
}
