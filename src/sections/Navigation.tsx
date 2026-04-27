import { useEffect, useState, useCallback } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'contact'];
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: '4rem',
          backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div
          className="flex items-center justify-between h-full"
          style={{ maxWidth: '75rem', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}
        >
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-['Space_Grotesk'] text-xs font-semibold tracking-widest"
            style={{ color: '#e8e4df', letterSpacing: '0.08em', fontSize: '0.75rem' }}
          >
            AG.
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="relative transition-colors duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  color: activeSection === link.href.slice(1) ? '#e8e4df' : 'rgba(232, 228, 223, 0.7)',
                  paddingBottom: '4px',
                  borderBottom: activeSection === link.href.slice(1) ? '2px solid #c47d5b' : '2px solid transparent',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#e8e4df'; }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.slice(1)) {
                    (e.target as HTMLElement).style.color = 'rgba(232, 228, 223, 0.7)';
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center"
            style={{ width: 24, height: 24, gap: 6 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block transition-transform duration-300"
              style={{
                width: 24,
                height: 2,
                backgroundColor: '#e8e4df',
                transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            <span
              className="block transition-opacity duration-300"
              style={{
                width: 24,
                height: 2,
                backgroundColor: '#e8e4df',
                opacity: menuOpen ? 0 : 1,
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="block transition-all duration-500"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 600,
                color: '#e8e4df',
                padding: '1rem 0',
                opacity: 0,
                animation: `fadeInUp 0.5s ease ${i * 0.08}s forwards`,
              }}
            >
              {link.label}
            </a>
          ))}
          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
