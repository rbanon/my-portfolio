export interface SkillTag {
  label: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  badge?: { label: string; muted?: boolean };
  description: string;
  tags: SkillTag[];
  primary?: boolean;
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    badge: { label: 'Core' },
    description: 'Building modern SPAs, reusable UI systems and maintainable frontend architectures.',
    primary: true,
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
      title: 'Architecture',
      description: 'Structuring scalable applications with strong attention to maintainability and UX quality.',
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
      title: 'Backend & APIs',
      badge: { label: 'Supporting stack', muted: true },
      description: 'Working comfortably with backend integrations, data handling and API-based product development.',
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
      title: 'Testing',
      description: 'Improving delivery confidence with automated testing and quality-focused workflows.',
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
      title: 'Tooling & Workflow',
      description: 'Daily tools for collaboration, code quality, debugging and developer productivity.',
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
      title: 'DevOps & Observability',
      badge: { label: 'Growing', muted: true },
      description: 'Expanding into deployment pipelines, monitoring and operational visibility.',
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
      title: 'Cloud & AI',
      badge: { label: 'Learning', muted: true },
      description: 'Exploring cloud platforms and AI-assisted development to extend product capabilities.',
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
      title: 'Collaboration',
      description: 'Clear communication, ownership and adaptability when working with teams and product goals.',
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