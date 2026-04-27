import { useCascadingTextReveal, useSequentialCharacterReveal, useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Mini RAG',
    date: 'April 2026',
    description: 'Lightweight Retrieval-Augmented Generation (RAG) for local question-answering using embeddings and retrieval.',
    tags: ['RAG', 'NLP', 'Embeddings'],
    image: '/images/project-mini-rag.png',
    repo: 'https://github.com/abdallared/Mini_RAG-main',
  },
  {
    title: 'Vehicle Detection Fine-tuning',
    date: 'October 2025',
    description: 'Improved vehicle detection accuracy by 18% using YOLO and Faster R-CNN with transfer learning on pre-trained models.',
    tags: ['YOLO', 'Faster R-CNN', 'Transfer Learning'],
    image: '/images/project-vehicle.jpg',
    repo: 'https://github.com/abdallared/Vehicle_Detection-finetuning-',
  },
  {
    title: 'Image Caption Generator',
    date: 'August 2024',
    description: 'Deep learning model generating descriptive captions with 90% accuracy using CNN-LSTM architecture and attention mechanisms.',
    tags: ['CNN', 'LSTM', 'ResNet', 'NLP'],
    image: '/images/project-caption.jpg',
    repo: 'https://github.com/abdallared/Image_Caption_Generator',
  },
  {
    title: 'Care Insurance Classification',
    date: 'August 2024',
    description: 'Predictive classification model for vehicle insurance risk categorization with 94% precision and optimized feature selection.',
    tags: ['Classification', 'Risk Assessment'],
    image: '/images/project-insurance.jpg',
    repo: 'https://github.com/abdallared/car-insurance',
  },
  {
    title: 'Car Price Prediction',
    date: 'May 2025',
    description: 'Linear regression model predicting car prices with a mean absolute error of less than $500 using engineered features.',
    tags: ['Linear Regression', 'ML'],
    image: '/images/project-carprice.jpg',
    repo: 'https://github.com/abdallared/car_price_prediction',
  },
];

export default function Projects() {
  const sectionRef = useScrollReveal({ y: 30, duration: 0.7, stagger: 0.1 });
  const headingRef = useCascadingTextReveal();
  const labelRef = useSequentialCharacterReveal();

  return (
    <section
      id="projects"
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
          04 — Projects
        </span>

        <div
          ref={headingRef}
          className="font-['Space_Grotesk'] font-semibold"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: '#e8e4df',
            marginBottom: '1rem',
          }}
        >
          Featured Work
        </div>

        <p
          className="font-['Inter']"
          style={{ fontSize: '1rem', lineHeight: 1.65, color: '#9e9e9e', marginBottom: '3rem', maxWidth: '36rem' }}
        >
          A selection of projects showcasing AI, machine learning, and data science applications.
        </p>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  date,
  description,
  tags,
  image,
  repo,
}: {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  repo?: string;
}) {
  return (
    <div
      className="group"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'all 0.35s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196, 125, 91, 0.3)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.06)';
      }}
    >
      {/* Image */}
      <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: 'scale(1)' }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'scale(1.05)'; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'scale(1)'; }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', backgroundColor: '#1a1a1a' }}>
        <h3
          className="font-['Space_Grotesk'] font-semibold"
          style={{ fontSize: '1.25rem', color: '#e8e4df', marginBottom: '0.25rem' }}
        >
          {title}
        </h3>

        <span
          className="font-['JetBrains_Mono'] block"
          style={{ fontSize: '0.8125rem', color: 'rgba(158, 158, 158, 0.6)', marginBottom: '0.75rem' }}
        >
          {date}
        </span>

        <p
          className="font-['Inter']"
          style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: '#9e9e9e', marginBottom: '1rem' }}
        >
          {description}
        </p>

        <div className="flex flex-wrap" style={{ gap: '0.4rem', marginBottom: '1rem' }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-['JetBrains_Mono'] uppercase"
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.04em',
                color: '#9e9e9e',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '100px',
                padding: '0.25rem 0.75rem',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex" style={{ gap: '1.5rem' }}>
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-['JetBrains_Mono'] uppercase transition-colors duration-300"
              style={{ fontSize: '0.75rem', letterSpacing: '0.04em', color: '#c47d5b' }}
            >
              GitHub →
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
