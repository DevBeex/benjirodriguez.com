import { Experience } from '../../shared/models/experience.model';
import { Project } from '../../shared/models/project.model';
import { SkillCategoryId } from '../../shared/models/technology.model';

export type LanguageCode = 'es' | 'en';

export interface AboutStat {
  value: string;
  label: string;
  emoji?: string;
}

export interface SpokenLanguage {
  name: string;
  level: string;
}

export interface LinkedCourse {
  name: string;
  url: string;
}

export interface Translations {
  brand: string;
  role: string;
  heroGreeting: string;
  heroFirstName: string;
  heroLastName: string;
  heroHeadline: string;
  heroLead: string;
  viewExperience: string;
  viewProjects: string;
  downloadCv: string;
  contactMe: string;
  connect: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  aboutStats: AboutStat[];
  experienceTitle: string;
  experiences: Experience[];
  referencesTitle: string;
  referencesLead: string;
  viewOnGithub: string;
  viewAllGithub: string;
  references: Project[];
  skillsTitle: string;
  skillCategories: Record<SkillCategoryId, string>;
  educationTitle: string;
  educationDegree: string;
  educationInstitution: string;
  educationPeriod: string;
  certificationsTitle: string;
  oracleCertificationName: string;
  oracleCertificationCredential: string;
  oracleCertificationIssuer: string;
  oracleCertificationUrl: string;
  coursesTitle: string;
  platziCourses: LinkedCourse[];
  languagesTitle: string;
  spokenLanguages: SpokenLanguage[];
  contactTitle: string;
  contactLead: string;
  currentBadge: string;
  demo: string;
  code: string;
  navigation: string;
  madeWith: string;
  rights: string;
  navHome: string;
  navAbout: string;
  navExperience: string;
  navReferences: string;
  navSkills: string;
  navEducation: string;
  navContact: string;
  openMenu: string;
  closeMenu: string;
}

export const SUPPORTED_LANGUAGES: LanguageCode[] = ['es', 'en'];
