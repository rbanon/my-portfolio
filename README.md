# Rafael Bañón — Personal Portfolio

A single-page application (SPA) built with Angular + TypeScript that serves as a personal portfolio for Rafael Bañón Martín, a frontend software developer based in Valencia, Spain.

## Features

- **Dark/Light Theme** — Toggle between dark and light modes with localStorage persistence
- **Internationalization (i18n)** — English and Spanish language support
- **Responsive Design** — Mobile-first approach with smooth scroll
- **Clean UI** — Minimal design inspired by GitHub's aesthetic
- **Skeleton Loading** — Loading states for async content
- **SPA Routing** — Client-side navigation with anchor links

## Tech Stack

| Piece         | Technology                          |
|---------------|-------------------------------------|
| Framework     | Angular 21 + TypeScript             |
| Styling       | SCSS/SASS with CSS custom properties|
| Animations    | CSS transitions + keyframes         |
| i18n          | Angular @angular/localize           |
| Deployment    | Vercel                              |

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/      # Navigation with theme/language toggles
│   │   ├── hero/        # Hero section with animated background
│   │   ├── about/       # Bio and certifications
│   │   ├── experience/  # Work history timeline
│   │   ├── skills/      # Skills grid by category
│   │   ├── projects/    # Project cards with skeleton loading
│   │   └── contact/     # Contact details and social links
│   ├── services/
│   │   ├── theme.service.ts      # Theme management
│   │   └── language.service.ts  # Language management
│   ├── app.ts
│   ├── app.html
│   └── app.scss
├── i18n/
│   ├── messages.xlf       # Extracted English strings
│   └── messages.es.xlf    # Spanish translations
├── styles/
│   └── main.scss          # Global styles and theme variables
└── main.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/rbanon/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server (English)
npm start

# Start development server (Spanish)
npm run start:es
```

The app will be available at `http://localhost:4200/`

### Building

```bash
# Build English version
npm run build:en

# Build Spanish version
npm run build:es

# Build both versions
npm run build:all
```

Build artifacts are output to `dist/my-portfolio/`

### Extracting Translations

After modifying templates with new `i18n` attributes:

```bash
npm run extract-i18n
```

This updates `src/i18n/messages.xlf` with new strings. Then translate them in `src/i18n/messages.es.xlf`.

## Deployment

### Vercel

The project is configured for Vercel deployment via `vercel.json`:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration
3. Deploy on push to main branch

The build command creates both English and Spanish versions with proper SPA routing.

### Manual Deployment

```bash
# Build the project
npm run build:all

# Deploy the contents of dist/my-portfolio/
```

## Theme System

The theme system uses CSS custom properties defined in `src/styles.scss`:

```scss
:root.dark {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --text-primary: #e6edf3;
  --accent: #58a6ff;
  /* ... */
}

:root.light {
  --bg-primary: #ffffff;
  --bg-secondary: #f6f8fa;
  --text-primary: #1f2328;
  --accent: #0969da;
  /* ... */
}
```

Theme switching is handled by `ThemeService` which:
- Detects system preference on first visit
- Persists choice in localStorage
- Toggles the `dark`/`light` class on the `<html>` element

## Internationalization

The i18n system uses Angular's built-in `@angular/localize`:

1. Add `i18n` attributes to translatable strings in templates
2. Run `npm run extract-i18n` to extract strings
3. Translate in `src/i18n/messages.es.xlf`
4. Build with `--configuration=es` for Spanish version

Language switching is handled by `LanguageService` which:
- Persists choice in localStorage
- Redirects to the appropriate locale build

## License

MIT

## Author

Rafael Bañón Martín

- GitHub: [@rbanon](https://github.com/rbanon)
- LinkedIn: [banonrafael](https://linkedin.com/in/banonrafael)
- Email: banonrafael@gmail.com
