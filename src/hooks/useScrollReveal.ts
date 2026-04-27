import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(
  options?: {
    y?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    start?: string;
  }
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const children = el.children.length > 0 ? Array.from(el.children) : [el];

    gsap.set(children, { opacity: 0, y: options?.y ?? 40 });

    const tween = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.7,
      delay: options?.delay ?? 0,
      stagger: options?.stagger ?? 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: options?.start ?? 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [options?.y, options?.duration, options?.delay, options?.stagger, options?.start]);

  return ref;
}

export function useCascadingTextReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const splitIntoLines = () => {
      const text = el.innerText;
      el.innerHTML = '';

      const words = text.split(' ');
      let currentLine = '';
      const lines: string[] = [];

      const testSpan = document.createElement('span');
      testSpan.style.visibility = 'hidden';
      testSpan.style.position = 'absolute';
      testSpan.style.whiteSpace = 'nowrap';
      testSpan.style.font = window.getComputedStyle(el).font;
      document.body.appendChild(testSpan);

      const maxWidth = el.clientWidth || el.getBoundingClientRect().width;

      for (const word of words) {
        testSpan.textContent = currentLine + (currentLine ? ' ' : '') + word;
        if (testSpan.offsetWidth > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = currentLine ? currentLine + ' ' + word : word;
        }
      }
      if (currentLine) lines.push(currentLine);

      document.body.removeChild(testSpan);

      el.innerHTML = '';
      lines.forEach(line => {
        const wrapper = document.createElement('span');
        wrapper.style.display = 'block';
        wrapper.style.overflow = 'hidden';

        const inner = document.createElement('span');
        inner.className = 'line-inner';
        inner.textContent = line;
        inner.style.display = 'block';
        inner.style.willChange = 'transform';

        wrapper.appendChild(inner);
        el.appendChild(wrapper);
      });

      const inners = el.querySelectorAll('.line-inner');
      gsap.from(inners, {
        yPercent: 120,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    };

    // Wait for fonts to load before splitting
    document.fonts.ready.then(() => {
      splitIntoLines();
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return ref;
}

export function useFocusDrift() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const title = el.querySelector('.focus-title');
    const children = el.querySelectorAll('.focus-child');

    if (title) {
      gsap.set(title, { filter: 'blur(10px)', opacity: 0 });
    }
    if (children.length) {
      gsap.set(children, { yPercent: 60, opacity: 0 });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    if (title) {
      tl.to(title, { filter: 'blur(0px)', opacity: 1, duration: 1, ease: 'power2.out' });
    }
    if (children.length) {
      tl.to(children, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.6');
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return ref;
}

export function useSequentialCharacterReveal() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const text = el.textContent || '';
    el.innerHTML = '';

    const charSpans: HTMLSpanElement[] = [];
    for (const char of text) {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.willChange = 'opacity';
      el.appendChild(span);
      charSpans.push(span);
    }

    gsap.set(charSpans, { opacity: 0 });

    gsap.to(charSpans, {
      opacity: 1,
      stagger: { each: 0.03, from: 'random' },
      duration: 0.4,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return ref;
}
