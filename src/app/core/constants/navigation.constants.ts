export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contacto' },
];

export const CV_PATH = '/assets/documents/benjamin-rodriguez-cv.pdf';
export const CV_FILENAME = 'benjamin-rodriguez-cv.pdf';
