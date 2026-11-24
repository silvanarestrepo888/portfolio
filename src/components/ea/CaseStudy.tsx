'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { projects } from '@/data/content';

const FOCUSABLE = 'a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])';

function Paragraphs({ text }: { text: string }) {
  return (
    <div className="ea-case__paras">
      {text.split('\n\n').map((p, i) => (
        <p key={i} className="ea-t-body">
          {p}
        </p>
      ))}
    </div>
  );
}

export function CaseStudy({ index, onClose, onNavigate }: { index: number | null; onClose: () => void; onNavigate: (i: number) => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const beatRef = useRef<HTMLVideoElement>(null);
  const open = index !== null;

  // Modal semantics: scroll lock, focus trap, Esc closes, focus returns.
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const root = rootRef.current;
    const t = window.setTimeout(() => root?.querySelector<HTMLElement>('.ea-case__back')?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !root) return;
      const items = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null);
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
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      opener?.focus?.();
    };
  }, [open, onClose]);

  // New project → back to the top of the overlay.
  useEffect(() => {
    if (open) rootRef.current?.scrollTo({ top: 0 });
  }, [index, open]);

  useEffect(() => {
    if (beatRef.current) beatRef.current.playbackRate = 1.75;
  }, [index]);

  if (!open) return null;
  const p = projects[index];
  const next = (index + 1) % projects.length;
  const metrics = [p.impactMetrics.scale, p.impactMetrics.reach, p.impactMetrics.transformation];

  return (
    <div
      ref={rootRef}
      className="project-details-overlay ea-case"
      role="dialog"
      aria-modal="true"
      aria-label={`${p.title} — case study`}
    >
      <div className="ea-case__bar">
        <button type="button" className="ea-t-label ea-case__back" onClick={onClose}>
          <span aria-hidden="true">←</span> All projects
        </button>
        <span className="ea-t-small ea-case__bar-title">{p.title}</span>
        <button type="button" className="ea-case__close" onClick={onClose} aria-label="Close case study">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="ea-case__hero" key={`hero-${index}`}>
        {p.filmVideo ? (
          <div className="ea-case__film-frame" data-ratio={p.filmRatio}>
            <video
              className="ea-case__film"
              src={p.filmVideo}
              poster={p.cardPoster}
              controls
              playsInline
              preload="metadata"
              aria-label={`${p.title} — film`}
            />
          </div>
        ) : (
          <div className="ea-case__art">
            <Image src={p.art} alt={p.title} fill priority quality={85} sizes="100vw" className="ea-case__art-img" />
          </div>
        )}
      </div>

      <div className="ea-container ea-grid ea-case__body">
        <header className="ea-case__title-block">
          <p className="ea-t-label ea-case__client">{p.client}</p>
          <h1 className="ea-t-display ea-case__title">{p.title}</h1>
          <p className="ea-t-lead ea-case__subtitle">{p.subtitle}</p>
        </header>

        <dl className="ea-case__metrics" aria-label="Headline results">
          {metrics.map((m, i) => (
            <div key={i} className="ea-case__metric">
              <dt className="ea-sr-only">{['Scale', 'Reach', 'Transformation'][i]}</dt>
              <dd className="ea-t-title-1 ea-tnum">{m}</dd>
            </div>
          ))}
        </dl>

        <dl className="ea-case__facts">
          {[
            ['Client', p.client],
            ['Year', p.year],
            ['Location', p.location],
            ['Industry', p.category],
          ].map(([k, v]) => (
            <div key={k} className="ea-case__fact">
              <dt className="ea-t-label">{k}</dt>
              <dd className="ea-t-body ea-tnum">{v}</dd>
            </div>
          ))}
        </dl>

        {[
          ['Context', p.context],
          ['Scope', p.scope],
          ['Impact', p.impact],
        ].map(([label, text]) => (
          <section key={label} className="ea-case__narrative">
            <h2 className="ea-t-label ea-case__label">{label}</h2>
            <Paragraphs text={text} />
          </section>
        ))}

        {p.testimonial && (
          <figure className="ea-case__quote">
            <blockquote className="ea-t-title-2 ea-t-italic">&ldquo;{p.testimonial.quote}&rdquo;</blockquote>
            <figcaption className="ea-t-label">
              {p.testimonial.author} · {p.testimonial.role}
            </figcaption>
          </figure>
        )}

        <div className="ea-case__gallery">
          {p.galleryImages.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${p.title} — ${i + 1}`}
              width={1600}
              height={1000}
              quality={85}
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="ea-case__gallery-img"
            />
          ))}
          {p.processFilm && (
            <figure className="ea-case__process">
              <figcaption className="ea-t-label">Process documentation</figcaption>
              <video
                ref={beatRef}
                className="ea-case__gallery-img"
                src={p.processFilm}
                controls
                muted
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => {
                  e.currentTarget.playbackRate = 1.75;
                }}
              />
            </figure>
          )}
        </div>

        <nav className="ea-case__next" aria-label="Next project">
          <span className="ea-t-label">Next project</span>
          <button type="button" className="ea-t-title-2 ea-link ea-link--on-light" onClick={() => onNavigate(next)}>
            {projects[next].title} <span aria-hidden="true">→</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
