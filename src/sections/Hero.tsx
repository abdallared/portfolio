import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TerminalCanvas from './TerminalCanvas';

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const heading = headingRef.current;
    const sub = subRef.current;
    const cta = ctaRef.current;
    if (!heading || !sub || !cta) return;

    // Split heading into characters grouped by word
    const lines = ['Software Engineer.', 'Full Stack AI Engineer.'];
    heading.innerHTML = '';

    lines.forEach((line, lineIdx) => {
      const lineSpan = document.createElement('span');
      lineSpan.style.display = 'block';
      lineSpan.style.overflow = 'hidden';

      const inner = document.createElement('span');
      inner.style.display = 'block';

      const words = line.split(' ');
      words.forEach((word, wIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';

        for (const char of word) {
          const charSpan = document.createElement('span');
          charSpan.textContent = char;
          charSpan.style.display = 'inline-block';
          charSpan.style.willChange = 'transform';
          wordSpan.appendChild(charSpan);
        }

        inner.appendChild(wordSpan);
        if (wIdx < words.length - 1) {
          inner.appendChild(document.createTextNode(' '));
        }
      });

      lineSpan.appendChild(inner);
      heading.appendChild(lineSpan);

      // Animate characters
      const chars = inner.querySelectorAll('span > span');
      gsap.from(chars, {
        yPercent: 120,
        stagger: 0.02,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3 + lineIdx * 0.15,
      });
    });

    // Subheading fade in
    gsap.from(sub, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.9,
    });

    // CTA fade in
    gsap.from(cta.children, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1,
      delay: 1.1,
    });
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <TerminalCanvas />

      {/* Content overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end pointer-events-none"
        style={{ zIndex: 1, padding: '0 clamp(1.5rem, 5vw, 4rem) 6rem' }}
      >
        <h1
          ref={headingRef}
          className="font-['Space_Grotesk'] font-bold"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: '#e8e4df',
            textShadow: '0 2px 40px rgba(10, 10, 10, 0.8)',
          }}
        >
          Software Engineer.<br />Full Stack AI Engineer.
        </h1>

        <p
          ref={subRef}
          className="font-['Inter']"
          style={{
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            color: '#9e9e9e',
            maxWidth: '36rem',
            marginTop: '1.5rem',
          }}
        >
          Architecting end-to-end Generative AI pipelines, intelligent NLP systems, full-stack microservices, and production ML models deployed on AWS, Docker, & SageMaker.
        </p>

        <div ref={ctaRef} className="flex items-center pointer-events-auto" style={{ gap: '1rem', marginTop: '2rem' }}>
          <button
            onClick={scrollToWork}
            className="transition-all duration-300"
            style={{
              padding: '0.875rem 2rem',
              borderRadius: '2px',
              background: 'linear-gradient(135deg, #c47d5b 0%, #d4a07a 100%)',
              color: '#0a0a0a',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '0.875rem',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-2px)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 24px rgba(196, 125, 91, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          >
            View My Work
          </button>
          <button
            className="transition-all duration-300"
            style={{
              padding: '0.875rem 2rem',
              borderRadius: '2px',
              background: 'transparent',
              color: '#e8e4df',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '0.875rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor = '#c47d5b';
              (e.target as HTMLElement).style.color = '#c47d5b';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)';
              (e.target as HTMLElement).style.color = '#e8e4df';
            }}
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Social links - bottom right */}
      <div
        className="absolute flex flex-row items-center pointer-events-auto"
        style={{
          zIndex: 1,
          left: 'clamp(1.5rem, 5vw, 4rem)',
          bottom: 'clamp(1.5rem, 5vw, 4rem)',
          gap: '0.75rem',
        }}
      >
        {[
          { label: 'LinkedIn', href: 'https://linkedin.com/in/abdallahreda42' },
          { label: 'GitHub', href: '#' },
          { label: 'Email', href: 'mailto:abdreada4444@gmail.com' },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="transition-all duration-300"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: 'rgba(158, 158, 158, 0.72)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              padding: '0.5rem 0.75rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '999px',
              backgroundColor: 'rgba(10, 10, 10, 0.35)',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#e8e4df'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(158, 158, 158, 0.5)'; }}
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ zIndex: 1, bottom: '2rem' }}
      >
        <div style={{ position: 'relative', width: '1px', height: '48px', backgroundColor: 'rgba(158, 158, 158, 0.4)' }}>
          <div
            className="absolute"
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: '#e8e4df',
              left: '-2px',
              top: '0',
              animation: 'scrollDot 2.5s ease-in-out infinite',
            }}
          />
        </div>
        <style>{`
          @keyframes scrollDot {
            0% { transform: translateY(0); opacity: 1; }
            80% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
}
