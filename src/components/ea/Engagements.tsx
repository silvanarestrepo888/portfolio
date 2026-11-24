'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CONTACT_EMAIL, snippets } from '@/data/content';
import { Chevron, SectionHeader } from './SectionHeader';
import { useReveal } from './hooks';

function domainOf(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

export function Engagements() {
  const railRef = useRef<HTMLUListElement>(null);
  const headRef = useReveal<HTMLDivElement>();
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const r = railRef.current;
    if (!r) return;
    setAtStart(r.scrollLeft <= 2);
    setAtEnd(r.scrollLeft + r.clientWidth >= r.scrollWidth - 2);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const page = (dir: 1 | -1) => {
    const r = railRef.current;
    if (!r) return;
    const card = r.querySelector('li');
    const step = card ? card.getBoundingClientRect().width : r.clientWidth * 0.8;
    r.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const actions = (
    <div className="ea-eng__controls">
      <button type="button" className="ea-ctrl" aria-label="Previous engagements" onClick={() => page(-1)} disabled={atStart}>
        <Chevron dir="left" />
      </button>
      <button type="button" className="ea-ctrl" aria-label="Next engagements" onClick={() => page(1)} disabled={atEnd}>
        <Chevron dir="right" />
      </button>
    </div>
  );

  return (
    <section id="project-snippets" className="ea-section ea-surface-ink ea-on-dark ea-eng" aria-labelledby="snippets-heading">
      <div ref={headRef} className="ea-container ea-reveal">
        <SectionHeader id="snippets-heading" title="selected engagements" actions={actions} />
      </div>

      <ul ref={railRef} className={`ea-eng__rail${atEnd ? ' at-end' : ''}`} onScroll={update}>
        {snippets.map((s) => {
          const meta = [s.industry, s.location, s.year].filter(Boolean).join(' · ');
          const domain = domainOf(s.website);
          return (
            <li key={s.id} className="ea-eng__card">
              <div className="ea-eng__frame">
                <Image
                  src={s.art}
                  alt={`${s.client} — ${s.title}`}
                  fill
                  quality={85}
                  sizes="(min-width: 1440px) 25vw, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, 85vw"
                  className="ea-eng__img"
                />
              </div>
              <p className="ea-t-label ea-eng__client">{s.client}</p>
              <h3 className="ea-t-title-2 ea-eng__title">{s.title}</h3>
              <p className="ea-t-small ea-tnum ea-eng__meta">{meta}</p>
              {domain && (
                <a className="ea-t-small ea-eng__site" href={s.website} target="_blank" rel="noopener noreferrer">
                  {domain} <span aria-hidden="true">↗</span>
                </a>
              )}
              <a className="ea-t-label ea-link ea-eng__inquire" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(s.emailSubject)}`}>
                Inquire <span aria-hidden="true">→</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
