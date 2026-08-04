import type { ComponentType, ReactNode } from 'react';
import {
  Award,
  BarChart3,
  Binary,
  Boxes,
  Brain,
  Code2,
  Cloud,
  Container,
  Cpu,
  Database,
  Github,
  LaptopMinimal,
  Layers,
  Linkedin,
  Mail,
  Network,
  Phone,
  Plug,
  Coffee,
  Server,
  Settings,
  Sparkles,
  Target,
  Trophy,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import {
  siApachekafka,
  siApachespark,
  siDjango,
  siDocker,
  siFastapi,
  siFlask,
  siGit,
  siHtml5,
  siHuggingface,
  siJupyter,
  siKaggle,
  siKeras,
  siLinux,
  siMysql,
  siNumpy,
  siOpencv,
  siPandas,
  siPostman,
  siPytorch,
  siPython,
  siScikitlearn,
  siStreamlit,
  siTensorflow,
  siUbuntu,
} from 'simple-icons';

type BrandIconData = {
  title: string;
  hex: string;
  path: string;
};

type IconRenderer = (props?: { className?: string }) => ReactNode;

const renderBrandIcon = (icon: BrandIconData): IconRenderer => ({ className } = {}) => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    viewBox="0 0 24 24"
    className={className}
    fill={`#${icon.hex}`}
  >
    <path d={icon.path} />
  </svg>
);

const renderLucideIcon = (Icon: ComponentType<{ className?: string; strokeWidth?: number }>): IconRenderer =>
  ({ className } = {}) => <Icon aria-hidden="true" className={className} strokeWidth={1.75} />;

export const skillIcons = {
  python: renderBrandIcon(siPython),
  csharp: renderLucideIcon(Code2),
  cplusplus: renderLucideIcon(Code2),
  java: renderLucideIcon(Coffee),
  c: renderLucideIcon(Code2),
  htmlcss: renderBrandIcon(siHtml5),
  sql: renderBrandIcon(siMysql),
  fastapi: renderBrandIcon(siFastapi),
  flask: renderBrandIcon(siFlask),
  django: renderBrandIcon(siDjango),
  sqlalchemy: renderLucideIcon(Database),
  docker: renderBrandIcon(siDocker),
  tensorflow: renderBrandIcon(siTensorflow),
  keras: renderBrandIcon(siKeras),
  pytorch: renderBrandIcon(siPytorch),
  scikitlearn: renderBrandIcon(siScikitlearn),
  opencv: renderBrandIcon(siOpencv),
  pandas: renderBrandIcon(siPandas),
  numpy: renderBrandIcon(siNumpy),
  matplotlib: renderLucideIcon(BarChart3),
  git: renderBrandIcon(siGit),
  github: renderLucideIcon(Github),
  vscode: renderLucideIcon(LaptopMinimal),
  visualstudio: renderLucideIcon(Code2),
  intellij: renderLucideIcon(Code2),
  aws: renderLucideIcon(Cloud),
  postman: renderBrandIcon(siPostman),
  cicd: renderLucideIcon(Settings),
  linux: renderBrandIcon(siLinux),
  ubuntu: renderBrandIcon(siUbuntu),
  jupyter: renderBrandIcon(siJupyter),
  colab: renderLucideIcon(Brain),
  kaggle: renderBrandIcon(siKaggle),
  streamlit: renderBrandIcon(siStreamlit),
  huggingface: renderBrandIcon(siHuggingface),
  spark: renderBrandIcon(siApachespark),
  kafka: renderBrandIcon(siApachekafka),
  hadoop: renderLucideIcon(Database),
  oop: renderLucideIcon(Boxes),
  dataStructures: renderLucideIcon(Binary),
  algorithms: renderLucideIcon(Workflow),
  operatingSystems: renderLucideIcon(LaptopMinimal),
  networks: renderLucideIcon(Network),
  databases: renderLucideIcon(Database),
  apis: renderLucideIcon(Plug),
  containerization: renderLucideIcon(Container),
  mlops: renderLucideIcon(Cpu),
} as const;

export type SkillIconKey = keyof typeof skillIcons;

export const achievementIcons = {
  trophy: renderLucideIcon(Trophy),
  code: renderLucideIcon(Code2),
  award: renderLucideIcon(Award),
  users: renderLucideIcon(Users),
  target: renderLucideIcon(Target),
  sparkles: renderLucideIcon(Sparkles),
  zap: renderLucideIcon(Zap),
  server: renderLucideIcon(Server),
  layers: renderLucideIcon(Layers),
} as const;

export type AchievementIconKey = keyof typeof achievementIcons;

export const contactIcons = {
  mail: renderLucideIcon(Mail),
  phone: renderLucideIcon(Phone),
  linkedin: renderLucideIcon(Linkedin),
  github: renderLucideIcon(Github),
} as const;

export type ContactIconKey = keyof typeof contactIcons;