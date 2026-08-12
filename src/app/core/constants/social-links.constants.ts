export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/benjirodriguez',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/benjirodriguez',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:hola@benjirodriguez.com',
    icon: 'email',
  },
];

export const CONTACT_LINKS = [
  {
    label: 'hola@benjirodriguez.com',
    href: 'mailto:hola@benjirodriguez.com',
    icon: 'email' as const,
  },
  {
    label: 'linkedin.com/in/benjirodriguez',
    href: 'https://www.linkedin.com/in/benjirodriguez',
    icon: 'linkedin' as const,
  },
  {
    label: 'github.com/benjirodriguez',
    href: 'https://github.com/benjirodriguez',
    icon: 'github' as const,
  },
];
