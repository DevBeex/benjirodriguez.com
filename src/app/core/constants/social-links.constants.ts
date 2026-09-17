export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/DevBeex',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/devbeex/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:benjarod272@gmail.com',
    icon: 'email',
  },
];

export const CONTACT_LINKS = [
  {
    label: 'benjarod272@gmail.com',
    href: 'mailto:benjarod272@gmail.com',
    icon: 'email' as const,
  },
  {
    label: 'linkedin.com/in/devbeex',
    href: 'https://www.linkedin.com/in/devbeex/',
    icon: 'linkedin' as const,
  },
  {
    label: 'github.com/DevBeex',
    href: 'https://github.com/DevBeex',
    icon: 'github' as const,
  },
];
