'use client';

import { useState } from 'react';
import { CONTACT_EMAIL, services } from '@/data/content';
import { SectionHeader } from './SectionHeader';
import { useReveal } from './hooks';

export function Services() {
  const [open, setOpen] = useState<number | null>(null);
  const headRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLUListElement>();

  return (
    <section id="services" className="ea-section ea-surface-coral ea-on-coral ea-svc" aria-labelledby="services-heading">
      <div className="ea-container ea-grid">
        <div ref={headRef} className="ea-svc__head ea-reveal">
          <SectionHeader id="services-heading" title="services" />
        </div>

        <ul ref={listRef} className="ea-svc__list ea-reveal">
          {services.map((s, i) => {
            const isOpen = open === i;
            const subject = `Inquiry — ${s.title}`;
            const body = `Hi Silvana, I'm interested in learning more about "${s.title}". Could we schedule a conversation?`;
            return (
              <li key={s.title} className={`ea-svc__row${isOpen ? ' is-open' : ''}`}>
                <h3 className="ea-svc__h">
                  <button
                    type="button"
                    className="ea-svc__header"
                    aria-expanded={isOpen}
                    aria-controls={`svc-body-${i}`}
                    id={`svc-head-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="ea-t-title-2 ea-svc__title">{s.title}</span>
                    <span className="ea-t-body ea-svc__tagline">{s.subtitle}</span>
                    <span className="ea-svc__icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
                        <line x1="10" y1="2" x2="10" y2="18" />
                        <line x1="2" y1="10" x2="18" y2="10" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div id={`svc-body-${i}`} role="region" aria-labelledby={`svc-head-${i}`} className="ea-svc__body" hidden={!isOpen}>
                  <div className="ea-svc__inner">
                    <p className="ea-t-lead">{s.description}</p>
                    <p className="ea-t-title-2 ea-t-italic">{s.demand}</p>
                    <p className="ea-t-label">{s.tags.join(' · ')}</p>
                    <a
                      className="ea-t-label ea-svc__cta"
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                    >
                      Ask about this service <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
