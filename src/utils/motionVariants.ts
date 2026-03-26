/**
 * motionVariants.ts — Canonical scroll animation patterns
 * experiencearchitect.design
 *
 * Three distinct reveal personalities:
 *   heading   → slow, cinematic, authoritative (φ duration)
 *   content   → natural, flowing, readable
 *   accent    → quick, sharp, precise (for numbers, tags, icons)
 *
 * All timing aligns with tokens.css:
 *   --duration-base    0.382s   φ⁻¹
 *   --duration-normal  0.618s   φ
 *   --duration-slow    1s
 *   --duration-cinematic 1.618s φ
 *
 * Never import tokens.css values here — Framer Motion needs JS numbers.
 * Keep in sync with tokens.css manually.
 */

// Easing mirrors — kept in sync with tokens.css
export const ease = {
  landor:    [0.25, 0.46, 0.45, 0.94] as const,
  natural:   [0.23, 1,    0.32, 1   ] as const,
  silk:      [0.445, 0.05, 0.55, 0.95] as const,
  back:      [0.34, 1.56, 0.64, 1   ] as const,
};

// Duration mirrors — φ-derived
export const duration = {
  instant:   0.1,
  fast:      0.2,
  base:      0.382,
  normal:    0.618,
  slow:      1.0,
  cinematic: 1.618,
};

// ─── Viewport config ──────────────────────────────────────────────────────────
// "once: true" — animation plays once on entrance, never replays on scroll back
// margin — trigger when element is 12% into viewport (not at the very edge)
export const viewport = {
  once: true,
  margin: '-8% 0px',
} as const;

export const viewportEager = {
  once: true,
  margin: '-4% 0px',
} as const;


// ─── Variant sets ─────────────────────────────────────────────────────────────

/**
 * HEADING — large display text
 * Slow, weighty, cinematic. Moves less distance, takes longer.
 * The authority of the page arriving.
 */
export const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.cinematic,
      ease: ease.natural,
    },
  },
};

/**
 * SUBHEADING — section labels, subtitles
 * Arrives slightly after heading, lighter touch.
 */
export const subheadingVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: ease.natural,
    },
  },
};

/**
 * BODY — paragraphs, descriptions
 * Natural, readable pace. No dramatic y-shift.
 */
export const bodyVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: ease.landor,
    },
  },
};

/**
 * ACCENT — numbers, tags, labels, icons
 * Quick and precise. Scale rather than translate.
 */
export const accentVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.base,
      ease: ease.back,
    },
  },
};

/**
 * IMAGE / CARD — visual blocks
 * Scale reveal feels premium; no y-shift to avoid layout jank on images.
 */
export const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.slow,
      ease: ease.natural,
    },
  },
};

/**
 * SLIDE FROM LEFT — for elements that arrive from the left edge
 * Used for timelines, leading content.
 */
export const slideLeftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.slow,
      ease: ease.natural,
    },
  },
};

/**
 * SLIDE FROM RIGHT — for elements that arrive from the right edge
 */
export const slideRightVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.slow,
      ease: ease.natural,
    },
  },
};

/**
 * STAGGER CONTAINER — parent that sequences children
 * Apply to a wrapping element; children use itemVariants.
 * staggerChildren controls the gap between each child's entrance.
 */
export function staggerContainerVariants(staggerChildren = 0.1, delayChildren = 0) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

/**
 * STAGGER ITEM — child of a stagger container
 * Standard reveal for items in a staggered list/grid.
 */
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: ease.natural,
    },
  },
};

/**
 * LINE REVEAL — for decorative dividers and lines
 * Scales from width 0 to full width.
 */
export const lineRevealVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: duration.slow,
      ease: ease.landor,
    },
  },
};
