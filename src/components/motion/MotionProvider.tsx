'use client';

import { MotionConfig } from 'framer-motion';

/**
 * MotionProvider — honours the OS "reduce motion" setting across every
 * Framer Motion animation on the site.
 *
 * globals.css already neutralises CSS animations and transitions under
 * `prefers-reduced-motion: reduce`, but CSS cannot touch animation driven
 * by JS through inline styles, which is how Framer works. Every scroll
 * reveal, card lift and overlay transition therefore kept moving for users
 * who had explicitly asked the OS for less motion.
 *
 * `reducedMotion="user"` keeps opacity fades (which do not trigger
 * vestibular symptoms) and suppresses transform and layout animation.
 *
 * Lives in its own client component because the root layout is a server
 * component; wrapping the body contents here covers the background layers
 * and the page tree alike.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
