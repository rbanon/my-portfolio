export interface ExperienceItem {
  key: string;
  company: string;
  badgeMuted?: boolean;
  primary?: boolean;
  taskCount: number;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  { key: 'capgemini',   company: 'Capgemini S.L.',      primary: true,  taskCount: 6 },
  { key: 'sagitaz',     company: 'Sagitaz Valencia',    badgeMuted: true, taskCount: 3 },
  { key: 'audiovisual', company: 'Various employers',   badgeMuted: true, taskCount: 2 },
];
