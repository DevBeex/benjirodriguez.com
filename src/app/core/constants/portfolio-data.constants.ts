import { Experience } from '../../shared/models/experience.model';
import { Project } from '../../shared/models/project.model';
import { TechnologyCategory } from '../../shared/models/technology.model';

export interface AboutStat {
  label: string;
  value: string;
  emoji?: string;
}

export const ABOUT_STATS: AboutStat[] = [
  { value: '2+', label: 'Años de experiencia' },
  { value: '10+', label: 'Proyectos completados' },
  { value: 'Frontend', label: '& Fullstack' },
  { value: 'Panamá', label: 'Ubicación', emoji: '🇵🇦' },
];

export const EXPERIENCES: Experience[] = [
  {
    title: 'Frontend Engineer',
    type: 'Contractor',
    period: '2024 — Presente',
    current: true,
    responsibilities: [
      'Desarrollo de interfaces Angular/TypeScript orientadas a producto.',
      'Integración con APIs NestJS y optimización de rendimiento en cliente.',
      'Colaboración cercana con diseño para pulir UX y accesibilidad.',
    ],
  },
  {
    title: 'Software Engineer',
    type: 'Part-time',
    period: '2023 — Presente',
    current: true,
    responsibilities: [
      'Construcción de features fullstack con foco en frontend.',
      'Mantenimiento de módulos críticos y mejoras de calidad de código.',
      'Soporte a despliegues y buenas prácticas en el flujo de entrega.',
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'Workforce Operations Platform',
    description:
      'Plataforma web para operaciones de equipos: paneles, flujos y seguimiento en tiempo real.',
    image: 'assets/images/projects/workforce.svg',
    technologies: ['Angular', 'TypeScript', 'NestJS'],
    repositoryUrl: 'https://github.com/benjirodriguez',
    demoUrl: 'https://github.com/benjirodriguez',
    featured: true,
  },
  {
    title: 'Portfolio & Personal Brand',
    description:
      'Sitio de presentación con SSR, diseño responsive y arquitectura modular en Angular.',
    image: 'assets/images/projects/portfolio.svg',
    technologies: ['Angular', 'Tailwind', 'SSR'],
    repositoryUrl: 'https://github.com/benjirodriguez',
    demoUrl: 'https://benjirodriguez.com',
    featured: true,
  },
  {
    title: 'API Toolkit Dashboard',
    description:
      'Dashboard para explorar endpoints, monitorear respuestas y documentar integraciones.',
    image: 'assets/images/projects/dashboard.svg',
    technologies: ['Angular', 'RxJS', 'GraphQL'],
    repositoryUrl: 'https://github.com/benjirodriguez',
    featured: true,
  },
];

export const SKILL_CATEGORIES: TechnologyCategory[] = [
  {
    name: 'Frontend',
    icon: 'frontend',
    items: ['TypeScript', 'Angular', 'HTML', 'SCSS', 'RxJS', 'Tailwind'],
  },
  {
    name: 'Backend',
    icon: 'backend',
    items: ['Node.js', 'NestJS', 'GraphQL', 'Ruby on Rails'],
  },
  {
    name: 'Bases de datos',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'],
  },
  {
    name: 'DevOps / Cloud',
    icon: 'devops',
    items: ['AWS', 'Docker', 'Git', 'Linux', 'NGINX'],
  },
  {
    name: 'Herramientas',
    icon: 'tools',
    items: ['Figma', 'Postman', 'Jest', 'ESLint', 'GitHub'],
  },
];
