export interface Project {
  key: string;
  name: string;
  tech: string[];
  github?: string;
  live?: string;
  demo?: string;
  isComingSoon?: boolean;
  featured?: boolean;
  year?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    key: 'githubDashboard', name: 'GitHub Dashboard',
    tech: ['Vue 3', 'TypeScript', 'Axios', 'Chart.js', 'SCSS', 'GitHub REST API'],
    github: 'https://github.com/rbanon/github-dashboard',
    live:   'https://github-dashboard-rb.vercel.app/',
    featured: true, year: '2026',
  },
  {
    key: 'evidenceAnonymizer', name: 'Evidence Anonymizer',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'SCSS', 'vue-i18n', 'date-fns'],
    github: 'https://github.com/rbanon/evidence-anonymizer',
    live:  'https://evidence-anonymizer.vercel.app/',
    year: '2026',
  },
  {
    key: 'devCommandPlaybook', name: 'Dev Command Playbook',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'SCSS', 'vue-i18n', 'TanStack Query', 'Vue Router', 'lucide-vue-next'],
    github: 'https://github.com/rbanon/dev-command-playground',
    live:  'https://dev-command-playbook.vercel.app/',
    year: '2026',
  },
  {
    key: 'portfolio', name: 'Personal Portfolio',
    tech: ['Angular', 'TypeScript', 'SCSS', '@angular/localize'],
    github: 'https://github.com/rbanon/my-portfolio',
    live:   typeof window !== 'undefined' ? window.location.href : '',
    year: '2026',
  },
  {
    key: 'grimoire', name: 'Grimoire — DnD Creator',
    tech: ['Vue 3', 'TypeScript', 'Pinia', 'TanStack Query', 'Supabase', 'Zod', 'UnoCSS', 'Vite'],
    github: 'https://github.com/rbanon/grimoire-dnd',
    live:   'https://grimoirednd.vercel.app/',
    year: '2026',
  },
  {
    key: 'linkedinAssistant', name: 'LinkedIn Assistant',
    tech: ['React 19', 'TypeScript', 'Supabase', 'Anthropic API', 'TanStack Query', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/rbanon/linkedin-assistant',
    year: '2026',
  },
  {
    key: 'comingSoon', name: 'Coming soon',
    tech: [], isComingSoon: true,
  },
];
