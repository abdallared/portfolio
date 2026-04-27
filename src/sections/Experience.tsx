import { useFocusDrift, useSequentialCharacterReveal, useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Artificial Intelligence',
    company: 'Hive Tech.ai',
    date: 'Sep 2025 — Present',
    location: 'Cairo, Egypt',
    bullets: [
      'Improved machine learning model accuracy by 15% by implementing advanced algorithms and performing targeted feature engineering.',
      'Applied dimensionality reduction techniques (PCA, t-SNE) to high-dimensional datasets (50+ features), reducing model training time by 30% while improving generalization performance.',
    ],
  },
  {
    role: 'Artificial Intelligence Intern',
    company: 'National Telecommunication Institute (NTI)',
    date: 'July 2024 — August 2024',
    location: 'Cairo, Egypt',
    bullets: [
      'Engineered end-to-end Generative AI pipelines using GANs and Attention Models, leading to a 40% increase in content generation efficiency',
      'Developed and optimized Deep Learning models and NLP systems, improving prediction accuracy by 15% and reducing model training time by 30%',
      'Orchestrated MLOps strategies with MLflow and Hugging Face, accelerating deployment cycles by 50%',
    ],
  },
  {
    role: 'NLP Intern',
    company: 'National Telecommunication Institute (NTI)',
    date: 'July 2024 — August 2024',
    location: 'Cairo, Egypt',
    bullets: [
      'Cleaned and preprocessed a dataset of 100,000+ documents using NLTK, spaCy, and Transformers, reducing noise by 60%',
      'Built and fine-tuned NLP models for sentiment analysis, text classification, and named entity recognition, achieving an average F1-score of 92%',
      'Evaluated models with precision, recall, and F1-score, reducing error rates by 20%',
    ],
  },
  {
    role: 'Cloud & AWS Intern',
    company: 'National Telecommunication Institute (NTI)',
    date: 'July 2024 — August 2024',
    location: 'Cairo, Egypt',
    bullets: [
      'Designed and architected scalable ML workflows on AWS, reducing infrastructure costs by 30% and improving data processing speed by 40%',
      'Built and deployed NLP/ML models on SageMaker, increasing inference speed by 50% and handling 1,000+ requests/minute',
      'Automated model training with AWS Lambda, CloudWatch, and Step Functions, improving training efficiency by 75%',
    ],
  },
  {
    role: 'Big Data Intern',
    company: 'National Telecommunication Institute (NTI)',
    date: 'July 2024 — August 2024',
    location: 'Cairo, Egypt',
    bullets: [
      'Architected data pipelines using Hadoop, Spark, and Kafka to process terabytes daily, increasing data availability by 99%',
      'Optimized ETL workflows, reducing processing time by 60% and improving data quality by 35%',
      'Performed big data analysis with HDFS, Hive, and SQL on 100M+ records, providing insights that drove a 15% revenue increase',
    ],
  },
  {
    role: 'AI Intern',
    company: 'Epsilon AI',
    date: 'March 2024',
    location: 'Cairo, Egypt',
    bullets: [
      'Enhanced machine learning model accuracy by 15% through implementation of advanced algorithms and targeted feature engineering techniques',
      'Applied dimensionality reduction techniques (PCA, t-SNE) on datasets with 50+ features, reducing training time by 30% and improving generalization',
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
