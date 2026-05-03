export interface SkillTag {
  label: string;
  featured?: boolean;
}

export interface SkillCategory {
  key: string;
  hasBadge?: boolean;
  badgeMuted?: boolean;
  tags: SkillTag[];
  primary?: boolean;
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    key: 'frontend', primary: true, hasBadge: true,
    tags: [
      { label: 'Vue 3', featured: true },
      { label: 'Angular', featured: true },
      { label: 'TypeScript', featured: true },
      { label: 'JavaScript' },
      { label: 'React' },
      { label: 'RxJS' },
      { label: 'Pinia' },
      { label: 'Vite' },
      { label: 'Responsive Design' },
      { label: 'Accessibility (a11y)' },
      { label: 'Performance Optimization' },
    ],
  },
  {
    key: 'architecture',
    tags: [
      { label: 'Component Architecture', featured: true },
      { label: 'Design Systems' },
      { label: 'Scalable Frontend Architecture' },
      { label: 'CSS Architecture' },
      { label: 'Clean Code' },
      { label: 'Internationalization (i18n)' },
      { label: 'UI / UX Principles' },
    ],
  },
  {
    key: 'backend', hasBadge: true, badgeMuted: true,
    tags: [
      { label: 'Node.js' },
      { label: 'Python' },
      { label: 'REST APIs', featured: true },
      { label: 'Express.js' },
      { label: 'Supabase' },
      { label: 'MySQL' },
      { label: 'MongoDB' },
      { label: 'SQL' },
    ],
  },
  {
    key: 'testing',
    tags: [
      { label: 'Unit Testing', featured: true },
      { label: 'Jest' },
      { label: 'Vitest' },
      { label: 'Testing Library' },
      { label: 'Playwright' },
      { label: 'Cypress' },
    ],
  },
  {
    key: 'tooling',
    tags: [
      { label: 'Git', featured: true },
      { label: 'GitHub' },
      { label: 'Jira' },
      { label: 'Confluence' },
      { label: 'Postman' },
      { label: 'ESLint' },
      { label: 'Prettier' },
      { label: 'SCSS / SASS' },
      { label: 'Tailwind CSS' },
      { label: 'HTML5' },
      { label: 'CSS3' },
    ],
  },
  {
    key: 'devops', hasBadge: true, badgeMuted: true,
    tags: [
      { label: 'Docker (basic)' },
      { label: 'CI / CD', featured: true },
      { label: 'GitHub Actions' },
      { label: 'Vercel' },
      { label: 'ArgoCD' },
      { label: 'Grafana' },
      { label: 'Prometheus' },
      { label: 'Linux' },
      { label: 'YAML' },
    ],
  },
  {
    key: 'cloud', hasBadge: true, badgeMuted: true,
    tags: [
      { label: 'Google Cloud' },
      { label: 'Microsoft Azure' },
      { label: 'Generative AI tools' },
      { label: 'Prompt Engineering' },
      { label: 'LLM Integration (basic)' },
      { label: 'Claude Code' },
      { label: 'AI-assisted Development', featured: true },
    ],
  },
  {
    key: 'collaboration',
    tags: [
      { label: 'Effective communication' },
      { label: 'Critical thinking' },
      { label: 'Problem-solving' },
      { label: 'Team collaboration' },
      { label: 'Adaptability' },
      { label: 'Innovation mindset' },
    ],
  },
];
