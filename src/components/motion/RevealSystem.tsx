'use client';

/**
 * RevealSystem.tsx — Reusable scroll-triggered reveal components
 * experiencearchitect.design
 *
 * Usage:
 *   <RevealHeading>Section Title</RevealHeading>
 *   <RevealBody delay={0.15}>Paragraph text</RevealBody>
 *
 *   <RevealGroup stagger={0.08}>
 *     <RevealItem>Card 1</RevealItem>
 *     <RevealItem>Card 2</RevealItem>
 *   </RevealGroup>
 */

import { motion, MotionProps } from 'framer-motion';
import {
  headingVariants,
  subheadingVariants,
  bodyVariants,
  accentVariants,
  imageVariants,
  slideLeftVariants,
  slideRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
  lineRevealVariants,
  viewport,
  viewportEager,
  duration,
  ease,
} from '../../utils/motionVariants';

type Tag = 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'section' | 'article' | 'li' | 'ul' | 'header' | 'footer' | 'nav' | 'main';

interface RevealProps extends Omit<MotionProps, 'variants' | 'initial' | 'whileInView' | 'viewport'> {
  children: React.ReactNode;
  delay?: number;
  as?: Tag;
  className?: string;
  eager?: boolean;
  id?: string;
  role?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  onClick?: React.MouseEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean | 'true' | 'false';
  'aria-controls'?: string;
  'data-cursor'?: string;
  'data-topographic'?: string;
}

interface RevealGroupProps extends Omit<MotionProps, 'variants' | 'initial' | 'whileInView' | 'viewport'> {
  children: React.ReactNode;
  stagger?: number;
  delayChildren?: number;
  as?: Tag;
  className?: string;
  eager?: boolean;
}

// Helper: apply a delay override to any variant set
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withDelay(variants: Record<string, any>, delay: number) {
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible?.transition ?? {}),
        delay,
      },
    },
  };
}

// ─── Primitives ───────────────────────────────────────────────────────────────

/**
 * Heading reveal — for h1, h2, h3 display text
 * Slow, cinematic, authoritative
 */
export function RevealHeading({ children, delay = 0, as = 'div', className, eager, ...rest }: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={delay ? withDelay(headingVariants, delay) : headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={eager ? viewportEager : viewport}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Subheading reveal — for labels, subtitles, eyebrows
 */
export function RevealSubheading({ children, delay = 0, as = 'div', className, eager, ...rest }: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={delay ? withDelay(subheadingVariants, delay) : subheadingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={eager ? viewportEager : viewport}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Body reveal — for paragraphs and descriptive text
 * Natural, readable pace
 */
export function RevealBody({ children, delay = 0, as = 'div', className, eager, ...rest }: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={delay ? withDelay(bodyVariants, delay) : bodyVariants}
      initial="hidden"
      whileInView="visible"
      viewport={eager ? viewportEager : viewport}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Accent reveal — for numbers, tags, icons, labels
 * Quick, precise, scale-based
 */
export function RevealAccent({ children, delay = 0, as = 'div', className, eager, ...rest }: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={delay ? withDelay(accentVariants, delay) : accentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={eager ? viewportEager : viewport}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Image reveal — scale-based for visual blocks
 * No y-shift to avoid layout jank
 */
export function RevealImage({ children, delay = 0, as = 'div', className, eager, ...rest }: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={delay ? withDelay(imageVariants, delay) : imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={eager ? viewportEager : viewport}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Slide from left
 */
export function RevealFromLeft({ children, delay = 0, as = 'div', className, eager, ...rest }: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={delay ? withDelay(slideLeftVariants, delay) : slideLeftVariants}
      initial="hidden"
      whileInView="visible"
      viewport={eager ? viewportEager : viewport}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Slide from right
 */
export function RevealFromRight({ children, delay = 0, as = 'div', className, eager, ...rest }: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={delay ? withDelay(slideRightVariants, delay) : slideRightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={eager ? viewportEager : viewport}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Line reveal — for decorative dividers
 */
export function RevealLine({ delay = 0, className, eager, ...rest }: Omit<RevealProps, 'children' | 'as'>) {
  return (
    <motion.div
      className={className}
      variants={delay ? withDelay(lineRevealVariants, delay) : lineRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={eager ? viewportEager : viewport}
      {...rest}
    />
  );
}


// ─── Stagger Group ────────────────────────────────────────────────────────────

/**
 * RevealGroup — stagger container
 * Wraps children and staggers their entrance.
 * Children should be RevealItem components (or any motion.* with variants).
 */
export function RevealGroup({
  children,
  stagger = 0.1,
  delayChildren = 0,
  as = 'div',
  className,
  eager,
  ...rest
}: RevealGroupProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={staggerContainerVariants(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={eager ? viewportEager : viewport}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * RevealItem — child of RevealGroup
 * Uses staggerItemVariants, inherits timing from parent.
 */
export function RevealItem({ children, as = 'div', className, ...rest }: Omit<RevealProps, 'delay' | 'eager'>) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={staggerItemVariants}
      {...rest}
    >
      {children}
    </Tag>
  );
}


// ─── Section Orchestrator ─────────────────────────────────────────────────────

/**
 * SectionReveal — wraps an entire section with a coordinated entrance
 *
 * Sequence:
 *   0ms    — section container becomes visible
 *   100ms  — first child (typically heading) starts animating
 *   +stagger per subsequent child
 *
 * Use this as the outermost wrapper for each page section.
 */
export function SectionReveal({
  children,
  stagger = 0.12,
  delayChildren = 0.1,
  as = 'div',
  className,
  ...rest
}: RevealGroupProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={staggerContainerVariants(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-6% 0px' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}


// ─── Utility: raw motion props for inline use ─────────────────────────────────
// When you can't use a wrapper component (e.g., existing motion.div in page.tsx),
// spread these onto the element directly.

export const revealProps = {
  heading: {
    variants: headingVariants,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport,
  },
  subheading: {
    variants: subheadingVariants,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport,
  },
  body: {
    variants: bodyVariants,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport,
  },
  accent: {
    variants: accentVariants,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport,
  },
  image: {
    variants: imageVariants,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport,
  },
};

// Named re-exports for convenience
export { duration, ease, viewport, viewportEager };
