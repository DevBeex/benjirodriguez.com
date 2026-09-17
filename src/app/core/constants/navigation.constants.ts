import { Translations } from '../i18n/translations.model';

export interface NavItem {
  labelKey: keyof Pick<
    Translations,
    | 'navHome'
    | 'navAbout'
    | 'navExperience'
    | 'navReferences'
    | 'navSkills'
    | 'navEducation'
    | 'navContact'
  >;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'navHome', href: '#inicio' },
  { labelKey: 'navAbout', href: '#sobre-mi' },
  { labelKey: 'navExperience', href: '#experiencia' },
  { labelKey: 'navReferences', href: '#referencias' },
  { labelKey: 'navSkills', href: '#skills' },
  { labelKey: 'navEducation', href: '#educacion' },
  { labelKey: 'navContact', href: '#contacto' },
];

export const CV_PATH = '/assets/documents/benjamin-rodriguez-cv.pdf';
export const CV_FILENAME = 'benjamin-rodriguez-cv.pdf';
