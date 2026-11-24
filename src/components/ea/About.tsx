'use client';

import Image from 'next/image';
import { SectionHeader } from './SectionHeader';
import { useReveal } from './hooks';

export function About() {
  const textRef = useReveal<HTMLDivElement>();
  const photoRef = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="ea-section ea-surface-light" aria-labelledby="about-heading">
      <div className="ea-container ea-grid">
        <SectionHeader id="about-heading" title="about" />

        <div ref={photoRef} className="ea-about__photo ea-reveal">
          <div className="ea-about__frame ea-bleed">
            <Image
              src="/silvana-about.jpg"
              alt="Silvana Restrepo working at her desk, black and white professional photo showing her workspace and thoughtful expression"
              fill
              quality={85}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="ea-about__img"
            />
          </div>
        </div>

        <div ref={textRef} className="ea-about__text ea-reveal">
          <p className="ea-t-title-1 ea-about__hook">
            Seven industries. Three continents.
            <br />
            Underneath all of it, one stubborn question: what makes people say yes?
          </p>

          <p className="ea-t-body">
            I chased it through banking halls and retail corridors, wellness ecosystems and entertainment destinations — and every industry answered differently. That&apos;s why the pattern only shows itself to <em>someone who&apos;s seen them all</em>.
          </p>

          <ul className="ea-about__ladder">
            <li className="ea-t-lead">
              <strong>Anthropology</strong> gave the question a discipline.
            </li>
            <li className="ea-t-lead">
              <strong>Design</strong> gave it a language.
            </li>
            <li className="ea-t-lead">
              And <strong>technology</strong>, finally, gave it hands.
            </li>
          </ul>

          <div className="ea-about__thesis">
            <p className="ea-t-body">
              Today those hands work across the whole system — the business case, the human behavior, the operations, the AI. But no piece was ever the point.
            </p>
            <p className="ea-t-body">
              The point is <em>the connective tissue</em>: how the pieces hold each other up, what order they compose in, where the whole breaks under pressure. That doesn&apos;t come from mastering a tool. It comes from <em>having run the system</em>.
            </p>
          </div>

          <p className="ea-t-title-2 ea-t-italic ea-about__welcome">
            Welcome to my world — where strategy meets soul, and design becomes the one language humans and machines both speak.
          </p>
        </div>
      </div>
    </section>
  );
}
