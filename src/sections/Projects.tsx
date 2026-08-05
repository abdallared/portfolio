import { useCascadingTextReveal, useSequentialCharacterReveal, useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Corporate Claims Management System',
    date: 'August 2026',
    description: 'Production-grade REST API for corporate health insurance claims built with FastAPI, PostgreSQL (asyncpg + SQLAlchemy 2.0), Redis, Celery, Alembic, and Clean Architecture with JWT & RBAC.',
    tags: ['FastAPI', 'PostgreSQL', 'Clean Architecture', 'Redis', 'Celery', 'Docker'],
    image: `${import.meta.env.BASE_URL}images/project-claims.svg`,
    repo: 'https://github.com/abdallared/Claims-Management',
  },
  {
    title: 'Mini RAG — Document Q&A System',
    date: 'April 2026',
    description: 'Retrieval-Augmented Generation system with a FastAPI backend for document chunking, embedding, and semantic search backed by PostgreSQL (pgvector) and Qdrant vector store with Streamlit frontend and Docker Compose.',
    tags: ['FastAPI', 'RAG', 'Qdrant', 'pgvector', 'Docker', 'Streamlit'],
    image: `${import.meta.env.BASE_URL}images/project-mini-rag.png`,
    repo: 'https://github.com/abdallared/Mini_RAG-main',
  },
  {
    title: 'Full-Stack AI Agent',
    date: 'February 2026',
    description: 'Full-stack AI agent application featuring a Python backend, modern web frontend, RESTful APIs, modular software architecture, and LLM-powered workflows for intelligent user interactions.',
    tags: ['Python', 'LLM', 'AI Agent', 'Full-Stack', 'REST API'],
    image: `${import.meta.env.BASE_URL}images/project-ai-agent.png`,
    repo: 'https://github.com/abdallared/Full-Stack-AI-Agent',
  },
  {
    title: 'Vehicle Detection Fine-Tuning',
    date: 'October 2025',
    description: 'Improved vehicle detection accuracy by 18% by fine-tuning YOLO and Faster R-CNN models with transfer learning, hyperparameter optimization, and data augmentation for real-time detection.',
    tags: ['YOLO', 'Faster R-CNN', 'Transfer Learning', 'Computer Vision'],
    image: `${import.meta.env.BASE_URL}images/project-vehicle.jpg`,
    repo: 'https://github.com/abdallared/Vehicle_Detection-finetuning-',
  },
  {
    title: 'Car Price Prediction',
    date: 'May 2025',
    description: 'Constructed a linear regression model predicting car prices with a mean absolute error under $500, increasing prediction reliability by 30% for buyers and sellers.',
    tags: ['Linear Regression', 'Scikit-Learn', 'Feature Engineering'],
    image: `${import.meta.env.BASE_URL}images/project-carprice.jpg`,
    repo: 'https://github.com/abdallared/car_price_prediction',
  },
  {
    title: 'Image Caption Generator',
    date: 'August 2024',
    description: 'Deep learning model generating descriptive image captions with 90% accuracy combining pre-trained CNNs (ResNet, Inception) and LSTM decoders with 20% faster inference.',
    tags: ['CNN', 'ResNet', 'LSTM', 'PyTorch', 'NLP'],
    image: `${import.meta.env.BASE_URL}images/project-caption.jpg`,
    repo: 'https://github.com/abdallared/Image_Caption_Generator',
  },
  {
    title: 'Car Insurance Classification',
    date: 'August 2024',
    description: 'Predictive classification model categorizing vehicle insurance risk with 94% precision, cutting manual assessment time by 50% for insurance providers.',
    tags: ['Classification', 'Risk Assessment', 'Pandas', 'Scikit-Learn'],
    image: `${import.meta.env.BASE_URL}images/project-insurance.jpg`,
    repo: 'https://github.com/abdallared/car-insurance',
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
