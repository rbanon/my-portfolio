export interface AboutBio {
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface AboutSectionData {
  profile: AboutBio;
  certifications: {
    title: string;
    badge: string;
    items: Certification[];
  };
}

export const ABOUT_DATA: AboutSectionData = {
  profile: {
    title: 'Who I am',
    image: {
      src: 'assets/svg/rb-logo-white.svg',
      alt: 'Rafael Bañon',
    },
    paragraphs: [
      'I’m a frontend-focused developer with experience building modern, scalable and user-centered web applications. My main stack is Angular, Vue and TypeScript, and I enjoy creating interfaces that are clean, maintainable and fast.',
      'Over time, I’ve also worked across the stack with Node.js, Python, SQL and API integrations, which helps me collaborate comfortably beyond the frontend and understand products in a more complete way.',
      'I care about architecture, reusable components, accessibility, responsive design and performance. Recently, I’ve also been expanding into testing, CI/CD, cloud platforms, observability and AI-assisted development workflows.',
      'Outside of work, I enjoy exploring home automation, IoT and side projects that let me experiment with new tools, workflows and ideas in a more hands-on way.',
    ],
  },
  certifications: {
    title: 'Certifications',
    badge: 'Validated',
    items: [
      {
        title: 'Google Cloud Digital Leader',
        issuer: 'Google Cloud',
      },
      {
        title: 'Microsoft Azure AZ-900',
        issuer: 'Microsoft',
      },
    ],
  },
};