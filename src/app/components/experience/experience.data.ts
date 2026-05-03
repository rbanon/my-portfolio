export interface Experience {
  role: string;
  company: string;
  period: string;
  badge: { label: string; muted?: boolean };
  summary: string;
  tasks: string[];
  primary?: boolean;
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Capgemini S.L.',
    period: 'Sep 2022 – Present',
    badge: { label: 'Current' },
    summary: 'Building and maintaining production frontend applications at scale — owning feature delivery, API integrations and performance optimization across multiple client projects.',
    tasks: [
      'Architected REST API integration layers connecting SPAs to multiple backend services and third-party providers',
      'Drove frontend performance improvements across production applications, targeting load speed, render efficiency and Core Web Vitals',
      'Delivered complete features from technical specification to production release on client-facing products',
      'Diagnosed and resolved production defects across complex legacy and modern codebases under real delivery constraints',
      'Built automated unit and functional test coverage across critical user flows, reducing regression risk on each release',
      'Led corrective and evolutionary maintenance of large-scale frontend systems, balancing short-term fixes with long-term code health',
    ],
    primary: true,
  },
  {
    role: 'Web Developer',
    company: 'Sagitaz Valencia',
    period: 'Feb 2022 – May 2022',
    badge: { label: 'Earlier role', muted: true },
    summary: 'Built full-stack web products in a Zoho-based environment, delivering automation tools and customer-facing features across frontend, backend and data layers.',
    tasks: [
      'Developed and shipped custom web applications on Zoho Suite, integrating UI, business logic and backend workflows end-to-end',
      'Designed and built chatbot flows covering both internal business automation and client-facing interaction scenarios',
      'Maintained and optimized MySQL and MongoDB databases, improving query structure and data integrity',
    ],
  },
  {
    role: 'Audiovisual Technician',
    company: 'Various employers',
    period: 'Jan 2018 – Dec 2021',
    badge: { label: 'Previous stage', muted: true },
    summary: 'Operated in high-pressure live production environments requiring technical precision, fast problem-solving and close cross-team coordination.',
    tasks: [
      'Managed live video and audio signal chains for broadcast streaming, ensuring delivery continuity in time-critical environments',
      'Ran end-to-end post-production workflows from raw capture to final output, maintaining technical quality across deliverables',
    ],
  },
];
