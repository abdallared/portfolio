import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFocusDrift, useSequentialCharacterReveal, useScrollReveal } from '../hooks/useScrollReveal';
import { skillIcons, type SkillIconKey } from '../components/portfolio-icons';

gsap.registerPlugin(ScrollTrigger);

const tabs = ['Programming', 'Frameworks', 'Tools', 'Fundamentals'] as const;

const skillsData: Record<typeof tabs[number], { name: string; level: string; icon: SkillIconKey }[]> = {
  Programming: [
    { name: 'Python', level: 'Proficient', icon: 'python' },
    { name: 'C#', level: 'Intermediate', icon: 'csharp' },
    { name: 'Java', level: 'Intermediate', icon: 'java' },
    { name: 'C', level: 'Basic', icon: 'c' },
    { name: 'HTML/CSS', level: 'Proficient', icon: 'htmlcss' },
    { name: 'SQL', level: 'Proficient', icon: 'sql' },
  ],
  Frameworks: [
    { name: 'FastAPI', level: '', icon: 'fastapi' },
    { name: 'Flask', level: '', icon: 'flask' },
    { name: 'Django', level: '', icon: 'django' },
    { name: 'SQLAlchemy', level: '', icon: 'sqlalchemy' },
    { name: 'Docker', level: '', icon: 'docker' },
    { name: 'TensorFlow', level: '', icon: 'tensorflow' },
    { name: 'Keras', level: '', icon: 'keras' },
    { name: 'PyTorch', level: '', icon: 'pytorch' },
    { name: 'Scikit-learn', level: '', icon: 'scikitlearn' },
    { name: 'OpenCV', level: '', icon: 'opencv' },
    { name: 'Pandas', level: '', icon: 'pandas' },
    { name: 'NumPy', level: '', icon: 'numpy' },
    { name: 'Matplotlib', level: '', icon: 'matplotlib' },
  ],
  Tools: [
    { name: 'Git', level: '', icon: 'git' },
    { name: 'GitHub', level: '', icon: 'github' },
    { name: 'VS Code', level: '', icon: 'vscode' },
    { name: 'Visual Studio', level: '', icon: 'visualstudio' },
    { name: 'IntelliJ IDEA', level: '', icon: 'intellij' },
    { name: 'AWS & SageMaker', level: '', icon: 'aws' },
    { name: 'Postman', level: '', icon: 'postman' },
    { name: 'CI/CD Pipelines', level: '', icon: 'cicd' },
    { name: 'Linux / Ubuntu', level: '', icon: 'linux' },
    { name: 'Jupyter Notebooks', level: '', icon: 'jupyter' },
    { name: 'Google Colab', level: '', icon: 'colab' },
    { name: 'Hugging Face', level: '', icon: 'huggingface' },
    { name: 'Streamlit', level: '', icon: 'streamlit' },
  ],
  Fundamentals: [
    { name: 'OOP', level: '', icon: 'oop' },
    { name: 'Data Structures', level: '', icon: 'dataStructures' },
    { name: 'Algorithms', level: '', icon: 'algorithms' },
    { name: 'Operating Systems', level: '', icon: 'operatingSystems' },
    { name: 'Networks', level: '', icon: 'networks' },
    { name: 'SQL/NoSQL Databases', level: '', icon: 'databases' },
    { name: 'REST API Design', level: '', icon: 'apis' },
    { name: 'Containerization', level: '', icon: 'containerization' },
    { name: 'MLOps', level: '', icon: 'mlops' },
    { name: 'Big Data (Spark/Kafka)', level: '', icon: 'spark' },
  ],
};

const coursework = [
  'Data Structures',
  'Software Engineering',
  'Generative AI',
  'Neural Networks',
  'Data Mining',
  'ML Algorithms',
  'Databases',
  'Operating Systems',
  'NLP',
  'Image Processing',
  'TensorFlow',
  'Cutting-edge AI',
];

export default function EducationSkills() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('Programming');
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useScrollReveal({ y: 40, duration: 0.7 });
  const labelRef = useSequentialCharacterReveal();
  const educationRef = useFocusDrift();

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const items = grid.children;
    gsap.from(items, {
      opacity: 0,
      y: 15,
      duration: 0.3,
      stagger: 0.03,
      ease: 'power2.out',
    });
  }, [activeTab]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        backgroundColor: '#0a0a0a',
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
          02 — Expertise
        </span>

        {/* Education Card */}
        <div
          ref={educationRef}
          style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '4px',
            padding: '2.5rem',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ marginBottom: '0.5rem' }}>
            <h2
              className="focus-title font-['Space_Grotesk'] font-semibold"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#e8e4df',
              }}
            >
              BSc Software Engineering
            </h2>
            <span className="font-['JetBrains_Mono']" style={{ fontSize: '0.8125rem', color: '#9e9e9e' }}>
              2022 — 2027
            </span>
          </div>

          <h3
            className="focus-child font-['Space_Grotesk'] font-semibold"
            style={{ fontSize: '1.25rem', color: '#c47d5b', marginBottom: '0.25rem' }}
          >
            Egyptian Chinese University
          </h3>

          <p
            className="focus-child font-['Inter']"
            style={{ fontSize: '0.9375rem', color: '#9e9e9e', marginBottom: '1.5rem' }}
          >
            Cairo, Egypt
          </p>

          <div className="focus-child flex flex-wrap" style={{ gap: '0.5rem' }}>
            {coursework.map((tag) => (
              <span
                key={tag}
                className="font-['JetBrains_Mono'] uppercase transition-all duration-300"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  color: '#9e9e9e',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '100px',
                  padding: '0.4rem 1rem',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = '#c47d5b';
                  (e.target as HTMLElement).style.color = '#e8e4df';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  (e.target as HTMLElement).style.color = '#9e9e9e';
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Tabs */}
        <div style={{ marginTop: '3rem' }}>
          {/* Tab buttons */}
          <div
            className="flex flex-wrap"
            style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              gap: 0,
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="font-['JetBrains_Mono'] uppercase transition-all duration-300"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  padding: '0.75rem 1.5rem',
                  color: activeTab === tab ? '#e8e4df' : '#9e9e9e',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === tab ? '2px solid #c47d5b' : '2px solid transparent',
                  cursor: 'pointer',
                  marginBottom: '-1px',
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab) (e.target as HTMLElement).style.color = 'rgba(232, 228, 223, 0.6)';
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab) (e.target as HTMLElement).style.color = '#9e9e9e';
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div
            ref={gridRef}
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.5rem',
            }}
          >
            {skillsData[activeTab].map((skill) => (
              <div
                key={skill.name}
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '4px',
                  padding: '1.25rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196, 125, 91, 0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.06)';
                }}
              >
                <div className="mb-2 h-5 w-5 text-copper">
                  {skillIcons[skill.icon]({ className: 'h-full w-full' })}
                </div>
                <div
                  className="font-['Inter']"
                  style={{ fontSize: '0.9375rem', color: '#e8e4df', marginBottom: '0.25rem' }}
                >
                  {skill.name}
                </div>
                {skill.level && (
                  <div
                    className="font-['JetBrains_Mono']"
                    style={{ fontSize: '0.8125rem', color: 'rgba(158, 158, 158, 0.6)' }}
                  >
                    {skill.level}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
