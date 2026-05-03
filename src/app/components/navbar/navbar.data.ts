export interface NavTab {
  id: string;
  labelKey: string;
}

export const NAV_TABS: NavTab[] = [
  { id: 'hero',       labelKey: 'nav.home'       },
  { id: 'experience', labelKey: 'nav.experience'  },
  { id: 'skills',     labelKey: 'nav.skills'      },
  { id: 'projects',   labelKey: 'nav.projects'    },
  { id: 'about',      labelKey: 'nav.about'       },
  { id: 'contact',    labelKey: 'nav.contact'     },
];
