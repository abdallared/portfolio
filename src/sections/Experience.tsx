import { useFocusDrift, useSequentialCharacterReveal, useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Computer Vision Intern',
    company: 'Electro Pi',
    date: 'May 2026 — Jul 2026',
    location: 'Cairo, Egypt',
    bullets: [
      'Developed and optimized Computer Vision models using PyTorch, OpenCV, and YOLO for object detection, image classification, and real-time image processing tasks.',
      'Built end-to-end Computer Vision inference pipelines and exposed trained models through FastAPI REST APIs, enabling scalable deployment and integration with backend applications.',
      'Evaluated and optimized model performance through data augmentation, hyperparameter tuning, and transfer learning, improving inference accuracy, latency, and overall deployment efficiency.',
    ],
  },
  {
    role: 'AI Backend Engineer',
    company: 'Hive Tech',
    date: 'Nov 2025 — Apr 2026',
    location: 'Cairo, Egypt',
    bullets: [
      'Developed and deployed AI-powered backend services using FastAPI, designing asynchronous RESTful APIs for model inference, document processing, authentication (JWT), and workflow automation.',
      'Built and integrated Machine Learning and NLP models into production applications using PyTorch, Hugging Face, PostgreSQL, SQLAlchemy, Redis, and Docker, optimizing model performance through feature engineering and efficient data pipelines.',
      'Designed scalable AI backend architectures with Celery, RabbitMQ, Alembic, and async FastAPI, enabling background task processing, database migrations, and reliable deployment of AI services.',
    ],
  },
  {
    role: 'AI Engineer',
    company: 'Hive Tech',
    date: 'Sep 2025 — Nov 2025',
    location: 'Cairo, Egypt',
    bullets: [
      'Improved machine learning model accuracy by 15% by implementing advanced algorithms and performing targeted feature engineering.',
      'Applied dimensionality reduction techniques (PCA, t-SNE) to high-dimensional datasets (50+ features), reducing model training time by 30% while improving generalization performance.',
    ],
  },
  {
    role: 'AI, NLP, AWS Cloud & Big Data Intern',
    company: 'National Telecommunication Institute (NTI)',
    date: 'Feb 2025 — Sep 2025',
    location: 'Cairo, Egypt',
    bullets: [
      'Developed end-to-end AI/ML pipelines using FastAPI, building RESTful APIs for data preprocessing, model inference, and workflow automation while applying MLOps practices with MLflow.',
      'Built and optimized Deep Learning and NLP solutions using PyTorch, TensorFlow, Hugging Face, NLTK, and spaCy, and deployed scalable machine learning workflows on AWS SageMaker and related cloud services.',
      'Engineered large-scale data pipelines and ETL workflows with Apache Spark, Hadoop, Kafka, Hive, and SQL, enabling efficient processing and analysis of structured and unstructured datasets.',
    ],
  },
  {
    role: 'AI Intern',
    company: 'Epsilon',
    date: 'Mar 2024',
    location: 'Cairo, Egypt',
    bullets: [
      'Enhanced machine learning model accuracy by 15% through implementation of advanced algorithms and targeted feature engineering techniques.',
      'Utilized dimensionality reduction techniques (e.g., PCA, t-SNE) on datasets with 50+ features, resulting in a 30% reduction in model training time and enhanced generalization.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useScrollReveal({ y: 40, duration: 0.7 });
  const labelRef = useSequentialCharacterReveal();

  return (
    <section
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
          03 — Experience
        </span>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <ExperienceEntry key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceEntry({
  role,
  company,
  date,
  location,
  bullets,
}: {
  role: string;
  company: string;
  date: string;
  location: string;
  bullets: string[];
}) {
  const entryRef = useFocusDrift();

  return (
    <div
      ref={entryRef}
      className="grid grid-cols-1 md:grid-cols-10"
      style={{
        gap: '1.5rem',
        padding: '2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Left - 30% */}
      <div className="md:col-span-3">
        <span
          className="font-['JetBrains_Mono'] block"
          style={{ fontSize: '0.8125rem', color: '#9e9e9e', marginBottom: '0.25rem' }}
        >
          {date}
        </span>
        <h3
          className="font-['Space_Grotesk'] font-semibold"
          style={{ fontSize: '1.25rem', color: '#c47d5b' }}
        >
          {company}
        </h3>
      </div>

      {/* Right - 70% */}
      <div className="md:col-span-7">
        <h4
          className="focus-title font-['Space_Grotesk'] font-semibold"
          style={{ fontSize: '1.25rem', color: '#e8e4df', marginBottom: '0.25rem' }}
        >
          {role}
        </h4>
        <p
          className="focus-child font-['Inter']"
          style={{ fontSize: '0.9375rem', color: '#9e9e9e', marginBottom: '1rem' }}
        >
          {location}
        </p>
        <ul className="space-y-2">
          {bullets.map((bullet, j) => (
            <li
              key={j}
              className="focus-child font-['Inter']"
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: '#9e9e9e',
                paddingLeft: '1.25rem',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '0.55em',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#c47d5b',
                }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
