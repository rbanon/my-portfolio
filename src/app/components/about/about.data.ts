export interface Certification {
  title: string;
  issuer: string;
}

export interface Language {
  name: string;
  level: string;
}

export const ABOUT_IMAGE = {
  src: 'assets/svg/rb-logo-white.svg',
  alt: 'Rafael Bañon',
};

export const ABOUT_CERTIFICATIONS: Certification[] = [
  { title: 'Google Cloud Digital Leader', issuer: 'Google Cloud' },
  { title: 'Microsoft Azure AZ-900',      issuer: 'Microsoft'    },
];

export const ABOUT_LANGUAGES: Language[] = [
  { name: 'Español',    level: 'native'       },
  { name: 'Valenciano', level: 'native'       },
  { name: 'English',    level: 'professional' },
];
