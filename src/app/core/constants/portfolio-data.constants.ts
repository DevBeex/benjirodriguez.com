import { TechnologyCategory } from '../../shared/models/technology.model';

export const HERO_TECHS = [
  'TypeScript',
  'Angular',
  'React',
  'NestJS',
  'Java',
  'AWS',
] as const;

export const FEATURED_SKILLS = [
  'TypeScript',
  'Angular',
  'React',
  'NestJS',
  'PostgreSQL',
  'AWS',
] as const;

export const SKILL_CATEGORIES: TechnologyCategory[] = [
  {
    id: 'languages',
    icon: 'languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Go', 'Ruby', 'SQL'],
  },
  {
    id: 'frontend',
    icon: 'frontend',
    items: [
      'Angular',
      'React',
      'Next.js',
      'Vue',
      'RxJS',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 'backend',
    icon: 'backend',
    items: [
      'NestJS',
      'Express.js',
      'Spring Boot',
      'Ruby on Rails',
      'Gin',
      'GORM',
      'REST APIs',
    ],
  },
  {
    id: 'database',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'devops',
    icon: 'devops',
    items: [
      'AWS',
      'EC2',
      'S3',
      'RDS',
      'SES',
      'Docker',
      'Linux',
      'Nginx',
      'Bash',
    ],
  },
  {
    id: 'tools',
    icon: 'tools',
    items: ['Git', 'GitHub', 'Postman', 'Figma', 'Jest'],
  },
];
