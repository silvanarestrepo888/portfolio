'use client';

import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active link: the section crossing the upper third of the viewport.
  useEffect(() => {
    const ids = ['about', 'projects', 'project-snippets', 'services', 'experience', 'contact'];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const id = e.target.id === 'project-snippets' ? 'projects' : e.target.id;
            setActive(id);
          }
        }
      },
      { rootMargin: '-30% 0px -65% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Sheet: lock scroll, trap focus, Esc closes, focus returns to the button.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const sheet = sheetRef.current;
    const focusables = () => Array.from(sheet?.querySelectorAll<HTMLElement>('a, button') ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    const btn = menuBtnRef.current;
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      btn?.focus();
    };
  }, [open]);

  return (
    <>
      <nav className={`ea-nav${scrolled ? ' scrolled' : ''}`} aria-label="Primary">
        <a href="#hero" className="ea-nav__logo">
          silvana.
        </a>
        <ul className="ea-nav__links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`ea-nav__link ea-t-label${active === l.id ? ' is-active' : ''}`}
                aria-current={active === l.id ? 'true' : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          ref={menuBtnRef}
          className="ea-nav__menu"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="ea-sheet"
          onClick={() => setOpen(true)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      <div
        id="ea-sheet"
        ref={sheetRef}
        className={`ea-sheet${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
      >
        <button className="ea-sheet__close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <ul className="ea-sheet__links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="ea-t-display ea-sheet__link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
