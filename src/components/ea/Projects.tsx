'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { categoryToTag, projectCategories, projects, type Project } from '@/data/content';
import { Chevron, SectionHeader } from './SectionHeader';
import { useInView, useMotionAllowed, useReveal } from './hooks';

const MOTION_KEY = 'ea-motion-paused';

function readPaused() {
  try {
    return sessionStorage.getItem(MOTION_KEY) === '1';
  } catch {
    return false;
  }
}

function writePaused(v: boolean) {
  try {
    sessionStorage.setItem(MOTION_KEY, v ? '1' : '0');
  } catch {
    /* storage unavailable — the choice lasts for this page view */
  }
}

/** Media frame: still (poster/art) with an optional muted loop on top (§5.6). */
function ProjectMedia({ project, paused, onOpen }: { project: Project; paused: boolean; onOpen: () => void }) {
  const { ref, inView } = useInView<HTMLButtonElement>(0.5);
  const motionAllowed = useMotionAllowed();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const still = project.cardPoster ?? project.art;
  const shouldPlay = Boolean(project.cardVideo) && inView && motionAllowed && !paused;

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !project.cardVideo) return;
    if (shouldPlay) {
      if (!v.getAttribute('src')) v.setAttribute('src', project.cardVideo);
      v.play().catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [shouldPlay, project.cardVideo]);

  return (
    <button ref={ref} type="button" className="ea-proj__media" onClick={onOpen} aria-label={`Open case study: ${project.title}`}>
      <Image
        src={still}
        alt=""
        fill
        quality={85}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="ea-proj__img"
      />
      {project.cardVideo && (
        <video
          ref={videoRef}
          className={`ea-proj__video${playing ? ' is-playing' : ''}`}
          muted
          playsInline
          loop
          preload="none"
          poster={still}
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          onError={() => setPlaying(false)}
        />
      )}
    </button>
  );
}

export function Projects({ onOpen }: { onOpen: (projectIndex: number) => void }) {
  const [category, setCategory] = useState<string>('ALL WORK');
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const headerRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();

  useEffect(() => setPaused(readPaused()), []);

  const list = useMemo(() => {
    if (category === 'ALL WORK') return projects;
    const tag = categoryToTag[category].toLowerCase();
    return projects.filter((p) => p.tech.some((t) => t.toLowerCase() === tag));
  }, [category]);

  const safe = Math.min(index, Math.max(0, list.length - 1));
  const project = list[safe];
  const go = useCallback((i: number) => setIndex((i + list.length) % list.length), [list.length]);
  const open = () => onOpen(projects.indexOf(project));

  const onKeyDown = (e: React.KeyboardEvent) => {
    const t = e.target as HTMLElement;
    if (t.closest('.ea-proj__tabs')) return; // tabs keep native arrow behaviour
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(safe - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(safe + 1);
    }
  };

  const togglePaused = () => {
    const next = !paused;
    setPaused(next);
    writePaused(next);
  };

  const counter = `${String(safe + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}`;

  return (
    <section
      id="projects"
      className="ea-section ea-surface-ink ea-on-dark ea-proj"
      aria-labelledby="projects-heading"
      onKeyDown={onKeyDown}
    >
      <div className="ea-container ea-grid">
        <div ref={headerRef} className="ea-proj__head ea-reveal">
          <SectionHeader id="projects-heading" title="projects" />
          <div className="ea-proj__tabs ea-bleed" role="group" aria-label="Filter projects">
            {projectCategories.map((c) => (
              <button
                key={c}
                type="button"
                className={`ea-t-label ea-proj__tab${category === c ? ' is-active' : ''}`}
                aria-pressed={category === c}
                onClick={() => {
                  setCategory(c);
                  setIndex(0);
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div ref={bodyRef} className="ea-proj__body ea-reveal">
          <ol className="ea-proj__index" aria-label="Project index">
            {list.map((p, i) => (
              <li key={p.title}>
                <button
                  type="button"
                  className={`ea-t-small ea-proj__index-item${i === safe ? ' is-active' : ''}`}
                  aria-current={i === safe ? 'true' : undefined}
                  onClick={() => setIndex(i)}
                >
                  {p.title}
                </button>
              </li>
            ))}
          </ol>

          <div className="ea-proj__stage ea-bleed" key={project.title}>
            <ProjectMedia project={project} paused={paused} onOpen={open} />
          </div>

          {/* All texts share one grid cell, so the block is always as tall as the
              tallest project: switching never changes the layout height. */}
          <div className="ea-proj__texts" aria-live="polite">
            {list.map((p, i) => {
              const active = i === safe;
              const m = [p.category, p.location, p.year].filter(Boolean).join(' · ');
              return (
                <div key={p.title} className={`ea-proj__text${active ? ' is-active' : ''}`} aria-hidden={!active} inert={!active}>
                  <p className="ea-t-label ea-proj__client">{p.client}</p>
                  <h3 className="ea-t-title-1 ea-proj__title">{p.title}</h3>
                  <p className="ea-t-small ea-tnum ea-proj__meta">{m}</p>
                  <p className="ea-t-body ea-proj__subtitle">{p.subtitle}</p>
                  <p className="ea-t-label ea-proj__caps">{p.tech.join(' · ')}</p>
                  <button type="button" className="ea-t-label ea-link ea-proj__cta" onClick={() => onOpen(projects.indexOf(p))}>
                    View case study <span aria-hidden="true">→</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="ea-proj__controls">
            <button type="button" className="ea-ctrl" aria-label="Previous project" onClick={() => go(safe - 1)} disabled={list.length < 2}>
              <Chevron dir="left" />
            </button>
            <span className="ea-t-label ea-tnum ea-proj__counter" aria-live="polite">
              {counter}
            </span>
            <button type="button" className="ea-ctrl" aria-label="Next project" onClick={() => go(safe + 1)} disabled={list.length < 2}>
              <Chevron dir="right" />
            </button>
            <button
              type="button"
              className={`ea-t-label ea-proj__motion${project.cardVideo ? '' : ' is-empty'}`}
              aria-pressed={paused}
              onClick={togglePaused}
              tabIndex={project.cardVideo ? 0 : -1}
              aria-hidden={!project.cardVideo}
            >
              {paused ? 'Play motion' : 'Pause motion'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
