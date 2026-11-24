'use client';

import { useEffect, useRef, useState } from 'react';

/** Section reveal (§8): adds `.is-in` once, at 15% in view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add('is-in');
            io.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/** True while the element is at least `threshold` visible. */
export function useInView<T extends HTMLElement>(threshold = 0.5) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting && e.intersectionRatio >= threshold), {
      threshold: [0, threshold, 1],
    });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/** prefers-reduced-motion or Save-Data → no autoplaying motion. */
export function useMotionAllowed() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const update = () => setAllowed(!mq.matches && !conn?.saveData);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return allowed;
}
