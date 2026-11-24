'use client';

import { useState } from 'react';
import { experiences, measuredIn } from '@/data/content';
import { SectionHeader } from './SectionHeader';
import { useReveal } from './hooks';

export function Experience() {
  const [active, setActive] = useState<number | null>(null);
  const headRef = useReveal<HTMLDivElement>();
  const lineRef = useReveal<HTMLOListElement>();
  const last = experiences.length - 1;

  return (
    <section id="experience" className="ea-section ea-surface-paper ea-exp" aria-labelledby="experience-heading">
      <div className="ea-container ea-grid">
        <div ref={headRef} className="ea-exp__head ea-reveal">
          <SectionHeader id="experience-heading" title="experience" />
          <p className="ea-t-title-2 ea-t-italic ea-exp__caption">Each role was fieldwork.</p>
        </div>

        <ol ref={lineRef} className="ea-exp__line ea-reveal">
          {experiences.map((e, i) => (
            <li
              key={e.company}
              className={`ea-exp__item${i === last ? ' is-current' : ''}${active === i ? ' is-active' : ''}`}
              tabIndex={0}
              aria-describedby="exp-reveal"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
            >
              <span className="ea-exp__dot" aria-hidden="true" />
              <span className="ea-t-label ea-exp__company">{e.company}</span>
              <span className="ea-t-small ea-exp__label">{e.label}</span>
              <span className="ea-sr-only">{e.reveal}</span>
            </li>
          ))}
        </ol>

        <p id="exp-reveal" className="ea-t-small ea-exp__reveal" aria-hidden="true">
          {active !== null ? experiences[active].reveal : ' '}
        </p>

        <p className="ea-t-lead ea-exp__measured">{measuredIn}</p>
      </div>
    </section>
  );
}
