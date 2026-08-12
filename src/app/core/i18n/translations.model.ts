export type LanguageCode = 'es' | 'en';

export interface Translations {
  brand: string;
  role: string;
  heroGreeting: string;
  heroFirstName: string;
  heroLastName: string;
  heroLead: string;
  viewProjects: string;
  downloadCv: string;
  connect: string;
  aboutTitle: string;
  aboutBody: string;
  experienceTitle: string;
  projectsTitle: string;
  viewAllGithub: string;
  skillsTitle: string;
  contactTitle: string;
  contactLead: string;
  currentBadge: string;
  demo: string;
  code: string;
  navigation: string;
  madeWith: string;
  rights: string;
}

export const SUPPORTED_LANGUAGES: LanguageCode[] = ['es', 'en'];
