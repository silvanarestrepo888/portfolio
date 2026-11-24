'use client';

import { useCallback, useState } from 'react';
import { Nav } from '@/components/ea/Nav';
import { Hero } from '@/components/ea/Hero';
import { About } from '@/components/ea/About';
import { Projects } from '@/components/ea/Projects';
import { Engagements } from '@/components/ea/Engagements';
import { Services } from '@/components/ea/Services';
import { Experience } from '@/components/ea/Experience';
import { Footer } from '@/components/ea/Footer';
import { CaseStudy } from '@/components/ea/CaseStudy';

// Art Direction v1 — see docs/art-direction/SPEC.md.
// The previous page is archived at src/app/page.legacy.tsx (not routed).
export default function Home() {
  const [caseIndex, setCaseIndex] = useState<number | null>(null);
  const close = useCallback(() => setCaseIndex(null), []);

  return (
    <>
      <a href="#main-content" className="ea-skip">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Projects onOpen={setCaseIndex} />
        <Engagements />
        <Services />
        <Experience />
      </main>
      <Footer />
      <CaseStudy index={caseIndex} onClose={close} onNavigate={setCaseIndex} />
    </>
  );
}
