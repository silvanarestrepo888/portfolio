'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  { discipline: 'Business & Strategy',     company: 'TIGO-MILLICOM',       role: 'Senior Marketing Leader'     },
  { discipline: 'Data & Research',         company: 'Haceb',               role: 'BI Director'                 },
  { discipline: 'Marketing',               company: 'Grupo Éxito · Casino', role: 'Marketing Director'         },
  { discipline: 'Experience Design',       company: 'Designit · Wipro',    role: 'Strategic Design Director'   },
  { discipline: 'Technology',              company: 'WEF · C4IR',          role: 'Ecosystem Engagement Leader' },
  { discipline: 'Experience Architecture', company: 'Globant',             role: 'Experience Architect'        },
];

// SVG viewBox: 0 0 1000 200
// Ascending trajectory: career rises from lower-left to upper-right
// Each node sits exactly on the curve — no descending arc that can cross labels
const CURVE = 'M 0,144 C 80,110 120,125 200,116 C 280,107 320,150 400,136 C 480,122 510,80 600,90 C 690,100 700,52 800,64 C 880,60 920,28 1000,36';

// Pin geometry — yPct maps svgY/200 exactly
const PINS = [
  { xPct: 0,   yPct: 72, align: 'start',  svgX: 0,    svgY: 144, nodeR: 2.5, fill: 'rgba(74,85,104,0.22)' },
  { xPct: 20,  yPct: 58, align: 'center', svgX: 200,  svgY: 116, nodeR: 3,   fill: 'rgba(74,85,104,0.28)' },
  { xPct: 40,  yPct: 68, align: 'center', svgX: 400,  svgY: 136, nodeR: 3,   fill: 'rgba(74,85,104,0.34)' },
  { xPct: 60,  yPct: 45, align: 'center', svgX: 600,  svgY: 90,  nodeR: 3.5, fill: 'rgba(74,85,104,0.42)' },
  { xPct: 80,  yPct: 32, align: 'center', svgX: 800,  svgY: 64,  nodeR: 4,   fill: 'rgba(74,85,104,0.52)' },
  { xPct: 100, yPct: 18, align: 'end',    svgX: 1000, svgY: 36,  nodeR: 5.5, fill: 'rgba(255,102,99,0.9)' },
];

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 55%'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  // Per-entry reveals — all 6 complete by 70% scroll progress
  const op0 = useTransform(scrollYProgress, [0.00, 0.10], [0, 1]);
  const op1 = useTransform(scrollYProgress, [0.12, 0.22], [0, 1]);
  const op2 = useTransform(scrollYProgress, [0.24, 0.34], [0, 1]);
  const op3 = useTransform(scrollYProgress, [0.36, 0.46], [0, 1]);
  const op4 = useTransform(scrollYProgress, [0.48, 0.58], [0, 1]);
  const op5 = useTransform(scrollYProgress, [0.60, 0.72], [0, 1]);
  const opacities = [op0, op1, op2, op3, op4, op5];

  const y0 = useTransform(scrollYProgress, [0.00, 0.10], [8, 0]);
  const y1 = useTransform(scrollYProgress, [0.12, 0.22], [8, 0]);
  const y2 = useTransform(scrollYProgress, [0.24, 0.34], [8, 0]);
  const y3 = useTransform(scrollYProgress, [0.36, 0.46], [8, 0]);
  const y4 = useTransform(scrollYProgress, [0.48, 0.58], [8, 0]);
  const y5 = useTransform(scrollYProgress, [0.60, 0.72], [8, 0]);
  const ys = [y0, y1, y2, y3, y4, y5];

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

          {/* Ghost rail — full path at low opacity */}
          <path d={CURVE} fill="none" stroke="rgba(74,85,104,0.07)" strokeWidth="2" />

          {/* The draw — grows as you scroll, gradient charcoal → coral */}
          <motion.path
            d={CURVE}
            fill="none"
            stroke="url(#expG)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength }}
          />

          {/* Entry nodes — seated exactly ON the curve */}
          {PINS.map((pin, i) => (
            <motion.circle
              key={i}
              cx={pin.svgX}
              cy={pin.svgY}
              r={pin.nodeR}
              fill={pin.fill}
              style={{ opacity: opacities[i] }}
              filter={i === 5 ? 'url(#nodeGlow)' : undefined}
            />
          ))}
        </svg>

        {/* ── Text pins: all text hangs BELOW the node — zero curve-crossing risk ── */}
        {experiences.map((exp, i) => {
          const pin = PINS[i];
          const isLast = i === 5;
          return (
            <motion.div
              key={exp.company}
              className={`exp-pin exp-pin--${pin.align}${isLast ? ' exp-pin--last' : ''} exp-pin--e${i}`}
              style={{
                left:    `${pin.xPct}%`,
                top:     `${pin.yPct}%`,
                opacity: opacities[i],
                y:       ys[i],
              }}
            >
              <span className="exp-company-name">{exp.company}</span>
              <span className="exp-role-name">{exp.role}</span>
              <span className="exp-disc-label">{exp.discipline}</span>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
