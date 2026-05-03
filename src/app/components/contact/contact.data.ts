export interface ContactItem {
  key: string;
  href?: string;
  external?: boolean;
  isStatic?: boolean;
  icon: 'email' | 'linkedin' | 'github' | 'location';
}

export const CONTACT_DATA: ContactItem[] = [
  { key: 'email',    href: 'mailto:banonrafael@gmail.com',        icon: 'email'    },
  { key: 'linkedin', href: 'https://linkedin.com/in/banonrafael', icon: 'linkedin', external: true },
  { key: 'github',   href: 'https://github.com/rbanon',           icon: 'github',   external: true },
  { key: 'location',                                               icon: 'location', isStatic: true },
];
