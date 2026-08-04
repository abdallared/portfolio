import { useCascadingTextReveal, useSequentialCharacterReveal, useScrollReveal } from '../hooks/useScrollReveal';
import { achievementIcons, contactIcons, type AchievementIconKey, type ContactIconKey } from '../components/portfolio-icons';

const achievements = [
  {
    icon: 'trophy',
    title: 'Top 1% on DataCamp',
    description: 'Ranked in top 1% among millions of learners worldwide on DataCamp global leaderboard.',
    year: '2024',
  },
  {
    icon: 'code',
    title: 'ICPC Regional Competitor',
    description: 'Competed in ICPC regional contests, solving complex algorithms & DP challenges in top 10%.',
    year: 'Regional Contests',
  },
  {
    icon: 'award',
    title: 'IEEExtreme 17.0',
    description: 'Participated in IEEE premier global 24-hour competitive programming challenge.',
    year: 'June 2024',
  },
  {
    icon: 'users',
    title: 'HR & Technical Director',
    description: 'Managed 25+ students and led technical curriculum at ICPC ECU with 30% improvement in engagement.',
    year: 'Oct 2022 — Oct 2023',
  },
  {
    icon: 'target',
    title: 'Technical Director',
    description: 'Led technical initiatives, competitive programming prep, and workshops at Microsoft Student Clubs ECU.',
    year: 'Sep 2023 — Sep 2024',
  },
] as const satisfies ReadonlyArray<{ icon: AchievementIconKey; title: string; description: string; year: string }>;

const contactMethods = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'abdreada4444@gmail.com',
    href: 'mailto:abdreada4444@gmail.com',
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+20 101 957 1158',
    href: 'tel:+201019571158',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdallahreda42',
    href: 'https://linkedin.com/in/abdallahreda42',
  },
] as const satisfies ReadonlyArray<{ icon: ContactIconKey; label: string; value: string; href: string }>;

export default function AchievementsContact() {
  const achievementsRef = useScrollReveal({ y: 20, duration: 0.6, stagger: 0.08 });
  const labelRef = useSequentialCharacterReveal();
  const headingRef = useCascadingTextReveal();
  const contactRef = useScrollReveal({ y: 30, duration: 0.7, stagger: 0.1 });

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#141414',
        padding: 'clamp(6rem, 12vh, 10rem) 0 0',
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
          05 — Recognition
        </span>

        {/* Achievements grid */}
        <div
          ref={achievementsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
          style={{ gap: '1.5rem' }}
        >
          {achievements.map((ach) => (
            <div
              key={ach.title}
              className="text-center"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '4px',
                padding: '1.5rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196, 125, 91, 0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.06)';
              }}
            >
              <div className="mx-auto mb-4 h-8 w-8 text-copper">
                {achievementIcons[ach.icon]({ className: 'h-full w-full' })}
              </div>
              <h3
                className="font-['Space_Grotesk'] font-semibold"
                style={{ fontSize: '1.25rem', color: '#e8e4df', marginBottom: '0.5rem', lineHeight: 1.3 }}
              >
                {ach.title}
              </h3>
              <p
                className="font-['Inter']"
                style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: '#9e9e9e', marginBottom: '0.5rem' }}
              >
                {ach.description}
              </p>
              <span
                className="font-['JetBrains_Mono']"
                style={{ fontSize: '0.8125rem', color: 'rgba(158, 158, 158, 0.5)' }}
              >
                {ach.year}
              </span>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div style={{ marginTop: '6rem', paddingBottom: 'clamp(6rem, 12vh, 10rem)' }}>
          <div
            ref={headingRef}
            className="font-['Space_Grotesk'] font-semibold"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: '#e8e4df',
              marginBottom: '2rem',
            }}
          >
            Let's Build Something Intelligent.
          </div>

          {/* Contact cards */}
          <div
            ref={contactRef}
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '1.5rem', marginBottom: '2rem' }}
          >
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '4px',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196, 125, 91, 0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.06)';
                }}
              >
                <div className="mb-3 h-6 w-6 text-copper">
                  {contactIcons[method.icon]({ className: 'h-full w-full' })}
                </div>
                <div
                  className="font-['JetBrains_Mono'] uppercase"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.04em', color: '#9e9e9e', marginBottom: '0.5rem' }}
                >
                  {method.label}
                </div>
                <div
                  className="font-['Inter']"
                  style={{ fontSize: '1rem', color: '#e8e4df' }}
                >
                  {method.value}
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div style={{ maxWidth: '36rem', margin: '0 auto' }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Your message has been sent.');
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full font-['Inter']"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '2px',
                  padding: '1rem',
                  fontSize: '1rem',
                  color: '#e8e4df',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#c47d5b'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)'; }}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full font-['Inter']"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '2px',
                  padding: '1rem',
                  fontSize: '1rem',
                  color: '#e8e4df',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#c47d5b'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)'; }}
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                className="w-full font-['Inter']"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '2px',
                  padding: '1rem',
                  fontSize: '1rem',
                  color: '#e8e4df',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#c47d5b'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)'; }}
              />
              <button
                type="submit"
                className="w-full font-['Inter'] font-medium transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #c47d5b 0%, #d4a07a 100%)',
                  color: '#0a0a0a',
                  borderRadius: '2px',
                  padding: '1rem',
                  fontSize: '0.9375rem',
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
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '1.5rem clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{ maxWidth: '75rem', margin: '0 auto', gap: '1rem' }}
        >
          <span
            className="font-['JetBrains_Mono']"
            style={{ fontSize: '0.75rem', letterSpacing: '0.04em', color: '#9e9e9e' }}
          >
            © 2025 Abdallah Ghamry
          </span>
          <span
            className="font-['JetBrains_Mono']"
            style={{ fontSize: '0.75rem', letterSpacing: '0.04em', color: 'rgba(158, 158, 158, 0.5)' }}
          >
            Built with intelligence.
          </span>
        </div>
      </footer>
    </section>
  );
}
