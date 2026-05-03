export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  demo?: string;
  isComingSoon?: boolean;
  type?: string;
  featured?: boolean;
  year?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    name: 'GitHub Dashboard',
    description: 'Real-time GitHub analytics dashboard built with Vue 3 + TypeScript. Search any username to see repositories, languages (donut chart), recent activity and stats.',
    tech: ['Vue 3', 'TypeScript', 'Axios', 'Chart.js', 'SCSS', 'GitHub REST API'],
    github: 'https://github.com/rbanon/github-dashboard',
    live: 'https://github-dashboard-rbm.vercel.app/',
    type: 'Open Source',
    year: '2026',
    featured: true,
  },
  {
    name: 'Personal Portfolio',
    description: 'This portfolio you\'re viewing. Angular + TypeScript with dark/light mode, EN/ES i18n, smooth scroll, responsive design and modern animations.',
    tech: ['Angular', 'TypeScript', 'SCSS', '@angular/localize'],
    github: 'https://github.com/rbanon/portfolio',
    live: typeof window !== 'undefined' ? window.location.href : '',
    type: 'Personal',
    year: '2026',
  },
  {
    name: 'LinkedIn Assistant',
    description: 'AI-powered LinkedIn content generator built with React + TypeScript. Three-step flow: input topic and tone, pick from AI-generated hooks, then choose the final post variant. Drafts are stored in Supabase.',
    tech: ['React 19', 'TypeScript', 'Supabase', 'Anthropic API', 'TanStack Query', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/rbanon/linkedin-assistant',
    type: 'Personal',
    year: '2026',
  },
  {
    name: 'Grimoire — DnD Creator',
    description: 'Full-featured D&D 5e character creator. Step-by-step wizard (identity, class, ability scores, proficiencies, equipment, spells), live character sheet, spell browser, item browser, and campaign tracker. Auth + cloud save via Supabase.',
    tech: ['Vue 3', 'TypeScript', 'Pinia', 'TanStack Query', 'Supabase', 'Zod', 'UnoCSS', 'Vite'],
    github: 'https://github.com/rbanon/grimoire-dnd',
    live: 'https://grimoirednd.vercel.app/',
    type: 'Personal',
    year: '2026',
  },
  {
    name: 'Coming soon',
    description: '',
    tech: [],
    isComingSoon: true,
    type: 'In progress',
  },
];