export interface ContactItem {
  label: string;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  isStatic?: boolean;
  icon: 'email' | 'linkedin' | 'github' | 'location';
}

export const CONTACT_DATA: ContactItem[] = [
  {
    label: 'Email',
    title: 'banonrafael@gmail.com',
    description: 'Best for job opportunities, collaborations and longer conversations.',
    href: 'mailto:banonrafael@gmail.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    title: 'banonrafael',
    description: 'Useful for professional networking and keeping in touch.',
    href: 'https://linkedin.com/in/banonrafael',
    external: true,
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    title: 'github.com/rbanon',
    description: 'For code, projects and side work I’m building publicly.',
    href: 'https://github.com/rbanon',
    external: true,
    icon: 'github',
  },
  {
    label: 'Location',
    title: 'Valencia, Spain',
    description: 'Based in Valencia and available for remote-friendly opportunities.',
    isStatic: true,
    icon: 'location',
  },
];