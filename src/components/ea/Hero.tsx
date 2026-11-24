import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="ea-hero ea-on-dark" aria-labelledby="hero-title">
      <div className="ea-hero__media">
        <Image
          src="/silvana-hero.jpg"
          alt="Silvana Restrepo, Principal Experience Architect — professional portrait"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="ea-hero__img"
        />
      </div>
      <div className="ea-container ea-hero__content">
        <p className="ea-t-label ea-hero__eyebrow">Silvana Restrepo</p>
        <h1 id="hero-title" className="ea-t-hero ea-hero__title">
          Experience Architect-<span className="ea-hero__line2">Venture Designer</span>
        </h1>
      </div>
    </section>
  );
}
