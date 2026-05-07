# 🌐 My Portfolio

A modern **Single Page Application (SPA)** built with Angular + TypeScript that serves as the personal portfolio of Rafael Bañón Martín, a frontend software developer based in Valencia, Spain.

[![Built with Angular](https://img.shields.io/badge/built%20with-Angular%2021-DD0031?style=flat-square&logo=angular)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)]()
[![SCSS](https://img.shields.io/badge/Styles-SCSS-CC6699?style=flat-square&logo=sass)]()
[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000?style=flat-square&logo=vercel)]()

## ✨ Features

### 👤 About Me
- Hero section with animated background
- Bio and certifications
- Work history timeline

### 💡 Skills
- Skills grid organized by category
- Visual skill-level indicators

### 🗂️ Projects
- Project cards with skeleton loading states
- Links to live demos and repositories

### 📬 Contact
- Contact details and social links
- Direct link to GitHub and LinkedIn

### 🌐 Internationalization (i18n)
- **English and Spanish** versions
- Built with Angular's `@angular/localize`
- Language switching with localStorage persistence

### 🎨 Light/Dark Theme
- **Dark mode** by default (GitHub/Discord style)
- **Light mode** with clean colors
- Auto-detection of system theme
- Header toggle with SVG icons

## 🛠️ Tech Stack

| Component | Technology | Why |
|-----------|-----------|-----|
| **Framework** | Angular 21 + TypeScript | Structured, production-ready |
| **Styles** | SCSS + CSS custom properties | Flexible theming |
| **Animations** | CSS transitions + keyframes | Smooth, performant |
| **i18n** | Angular @angular/localize | Built-in multi-language support |
| **Deployment** | Vercel | Zero-config CI/CD |

## 📦 Installation

### Requirements
- Node.js 18+
- npm 9+

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/rbanon/portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start development server (English)
npm start

# Open in browser
# http://localhost:4200
```

## 🚀 Usage

```bash
# Development — English
npm start

# Development — Spanish
npm run start:es

# Build — English
npm run build:en

# Build — Spanish
npm run build:es

# Build — both versions
npm run build:all
```

### Extracting Translations

After adding new `i18n` attributes to templates:

```bash
npm run extract-i18n
```

This updates `src/i18n/messages.xlf`. Then translate new strings in `src/i18n/messages.es.xlf`.

## 📁 Project Structure

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
│   │   ├── theme.service.ts     # Theme management
│   │   └── language.service.ts  # Language management
│   ├── app.ts
│   ├── app.html
│   └── app.scss
├── i18n/
│   ├── messages.xlf       # Extracted English strings
│   └── messages.es.xlf    # Spanish translations
└── styles/
    └── main.scss           # Global styles and theme variables
```

## 🎨 Themes

### Dark Mode (Default)
```scss
--bg-primary:     #0d1117
--bg-secondary:   #161b22
--text-primary:   #e6edf3
--accent:         #58a6ff
```

### Light Mode
```scss
--bg-primary:     #ffffff
--bg-secondary:   #f6f8fa
--text-primary:   #1f2328
--accent:         #0969da
```

## 🌍 Deployment

### Vercel (Recommended)

The project is configured for Vercel deployment via `vercel.json`:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration
3. Deploy on push to main branch

Or deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 License

This project is under the MIT license. See [LICENSE](./LICENSE) for details.

## 👨‍💻 Author

Created by Rafael Bañón - Logo crateaad by Vecteezy

## 🐛 Issues & Support

Found a bug? [Open an issue](../../issues/new)

## 🙏 Acknowledgments

- [Angular](https://angular.dev/)
- [Vercel](https://vercel.com/)

---

**⭐ If you like the project, don't forget to leave a star!**

[Back to top ⬆️](#-my-portfolio)
