import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCascadingTextReveal, useSequentialCharacterReveal, useScrollReveal } from '../hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

function CounterRoll({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState('0');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplayed(value);
      return;
    }

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => setStarted(true),
    });

    return () => { st.kill(); };
  }, [value]);

  useEffect(() => {
    if (!started) return;

    let count = 0;
    const interval = setInterval(() => {
      setDisplayed(Math.floor(Math.random() * 10).toString());
      count++;
      if (count > 20) {
        clearInterval(interval);
        setDisplayed(value);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [started, value]);

  return (
    <span ref={ref}>
      {displayed}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useScrollReveal({ y: 50, duration: 0.8 });
  const headingRef = useCascadingTextReveal();
  const labelRef = useSequentialCharacterReveal();
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.to(el, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: '#141414',
        padding: 'clamp(6rem, 12vh, 10rem) 0',
      }}
    >
      <div style={{ maxWidth: '75rem', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
        <span
          ref={labelRef}
          className="font-['JetBrains_Mono'] uppercase"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.04em',
            color: '#c47d5b',
            display: 'block',
            marginBottom: '3rem',
          }}
        >
          01 — About
        </span>

        <div className="grid grid-cols-1 md:grid-cols-5" style={{ gap: '3rem' }}>
          {/* Left column - 60% */}
          <div className="md:col-span-3">
            <div
              ref={headingRef}
              className="font-['Space_Grotesk'] font-semibold"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: '#e8e4df',
              }}
            >
              Turning data into decisions, and models into impact.
            </div>

            <div style={{ marginTop: '2rem' }} className="space-y-6">
              <p className="font-['Inter']" style={{ fontSize: '1rem', lineHeight: 1.65, color: '#9e9e9e' }}>
                I'm Abdallah Ghamry, an AI Engineer and Data Scientist passionate about building innovative solutions that make a real impact. Currently pursuing my Bachelor's in Software Engineering at Egyptian Chinese University, I specialize in machine learning, deep learning, and natural language processing.
              </p>
              <p className="font-['Inter']" style={{ fontSize: '1rem', lineHeight: 1.65, color: '#9e9e9e' }}>
                With hands-on experience developing scalable AI pipelines, optimizing ML models, and deploying solutions on cloud platforms, I bring both technical expertise and strong problem-solving skills to every project. I'm known for my adaptability, leadership, and ability to deliver results under pressure.
              </p>
            </div>
          </div>

          {/* Right column - 40% */}
          <div className="md:col-span-2">
            <div
              ref={imageRef}
              style={{
                borderRadius: '9999px',
                border: '1px solid rgba(196, 125, 91, 0.2)',
                overflow: 'hidden',
                aspectRatio: '1 / 1',
                maxWidth: '28rem',
                margin: '0 auto',
              }}
            >
              <img
                src="/images/me-portofolio.jpeg"
                alt="Abdallah Ghamry"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3" style={{ marginTop: '1.5rem', gap: '1rem' }}>
              {[
                { value: '15', suffix: '+', label: 'Projects' },
                { value: '5', suffix: '+', label: 'Internships' },
                { value: '94', suffix: '%', label: 'Best Accuracy' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-['Space_Grotesk'] font-bold"
                    style={{
                      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      color: '#c47d5b',
                    }}
                  >
                    <CounterRoll value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div
                    className="font-['JetBrains_Mono'] uppercase"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.04em', color: '#9e9e9e', marginTop: '0.5rem' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
