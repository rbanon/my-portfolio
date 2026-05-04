# CV + Languages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Languages card to the About section, a Languages section to the printable CV, and delete the stale static PDFs.

**Architecture:** Language data lives in `about.data.ts` alongside certifications. The About component renders it as a third card. The CV component (already print-only via `@media print`) pulls the same data and adds a Languages section. The navbar download button (`window.print()`) already exists and requires no changes.

**Tech Stack:** Angular 17+ standalone components, Transloco i18n, SCSS with CSS custom properties.

---

## Pre-flight note

`navbar.component.ts` already has `downloadCV(): void { window.print(); }` and the styled `.navbar__cv-btn` button. **No navbar changes are needed.**

---

## Task 1: Data layer — `about.data.ts` + i18n

**Files:**
- Modify: `src/app/components/about/about.data.ts`
- Modify: `src/assets/i18n/en.json`
- Modify: `src/assets/i18n/es.json`

- [ ] **Step 1: Add `Language` interface and `ABOUT_LANGUAGES` to `about.data.ts`**

Replace the contents of `src/app/components/about/about.data.ts` with:

```ts
export interface Certification {
  title: string;
  issuer: string;
}

export interface Language {
  name: string;
  level: string;
}

export const ABOUT_IMAGE = {
  src: 'assets/svg/rb-logo-white.svg',
  alt: 'Rafael Bañon',
};

export const ABOUT_CERTIFICATIONS: Certification[] = [
  { title: 'Google Cloud Digital Leader', issuer: 'Google Cloud' },
  { title: 'Microsoft Azure AZ-900',      issuer: 'Microsoft'    },
];

export const ABOUT_LANGUAGES: Language[] = [
  { name: 'Español',    level: 'native'       },
  { name: 'Valenciano', level: 'native'       },
  { name: 'English',    level: 'professional' },
];
```

- [ ] **Step 2: Add i18n keys to `en.json`**

Inside the `"about"` object, add an `"languages"` key after `"certifications"`:

```json
"languages": {
  "title": "Languages",
  "badge": "Native & Professional",
  "levels": {
    "native": "Native",
    "professional": "Professional Working Proficiency"
  }
}
```

The `"about"` section in `en.json` should end up as:

```json
"about": {
  "eyebrow": "Professional profile",
  "title": "About",
  "bioTitle": "Who I am",
  "paragraphs": [...],
  "certifications": {
    "title": "Certifications",
    "badge": "Validated"
  },
  "languages": {
    "title": "Languages",
    "badge": "Native & Professional",
    "levels": {
      "native": "Native",
      "professional": "Professional Working Proficiency"
    }
  }
}
```

- [ ] **Step 3: Add i18n keys to `es.json`**

Same structure inside `"about"` in `src/assets/i18n/es.json`:

```json
"languages": {
  "title": "Idiomas",
  "badge": "Nativo y Profesional",
  "levels": {
    "native": "Nativo",
    "professional": "Competencia profesional"
  }
}
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx ng build --configuration=development
```

Expected: build succeeds with no type errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/about/about.data.ts src/assets/i18n/en.json src/assets/i18n/es.json
git commit -m "feat: add Language interface, ABOUT_LANGUAGES data and i18n keys"
```

---

## Task 2: About component — Languages card

**Files:**
- Modify: `src/app/components/about/about.component.ts`
- Modify: `src/app/components/about/about.component.html`
- Modify: `src/app/components/about/about.component.scss`

- [ ] **Step 1: Update `about.component.ts` to expose languages**

Replace the full file:

```ts
import { Component, inject, computed } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { ABOUT_CERTIFICATIONS, ABOUT_LANGUAGES, Certification, Language } from './about.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly transloco = inject(TranslocoService);
  private readonly activeLang = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang(),
  });

  readonly certifications: Certification[] = ABOUT_CERTIFICATIONS;
  readonly languages: Language[] = ABOUT_LANGUAGES;

  readonly paragraphs = computed(() => {
    void this.activeLang();
    return this.transloco.translate<string[]>('about.paragraphs');
  });
}
```

- [ ] **Step 2: Add the languages card to `about.component.html`**

Add a third `<article>` inside `.about__grid`, after the certifications card (after line 47, before `</div>`):

```html
<article class="about__card">
  <div class="about__card-header">
    <h3 class="about__card-title">{{ 'about.languages.title' | transloco }}</h3>
    <span class="about__card-badge">{{ 'about.languages.badge' | transloco }}</span>
  </div>

  <div class="about__languages">
    @for (lang of languages; track lang.name) {
      <div class="about__language">
        <span class="about__lang-name">{{ lang.name }}</span>
        <span class="about__lang-level">
          {{ 'about.languages.levels.' + lang.level | transloco }}
        </span>
      </div>
    }
  </div>
</article>
```

The full `about.component.html` should be:

```html
<section class="section about" id="about">
  <div class="container">
    <div class="section-heading">
      <span class="section-eyebrow">{{ 'about.eyebrow' | transloco }}</span>
      <h2 class="section-title">{{ 'about.title' | transloco }}</h2>
    </div>

    <div class="about__grid">
      <article class="about__card about__card--primary">
        <div class="about__profile">
          <div class="about__profile-media">
            <img class="about__profile-image" src="/foto.png" alt="Rafael Bañón" />
          </div>
        </div>

        <div class="about__bio">
          <h3 class="about__card-title">{{ 'about.bioTitle' | transloco }}</h3>
          @for (paragraph of paragraphs(); track $index) {
            <p>{{ paragraph }}</p>
          }
        </div>
      </article>

      <article class="about__card">
        <div class="about__card-header">
          <h3 class="about__card-title">{{ 'about.certifications.title' | transloco }}</h3>
          <span class="about__card-badge">{{ 'about.certifications.badge' | transloco }}</span>
        </div>

        <div class="about__certifications">
          @for (cert of certifications; track cert.title) {
            <div class="about__certification">
              <div class="about__cert-badge">
                <svg class="about__cert-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="about__cert-info">
                <h4 class="about__cert-title">{{ cert.title }}</h4>
                <p class="about__cert-issuer">{{ cert.issuer }}</p>
              </div>
            </div>
          }
        </div>
      </article>

      <article class="about__card">
        <div class="about__card-header">
          <h3 class="about__card-title">{{ 'about.languages.title' | transloco }}</h3>
          <span class="about__card-badge">{{ 'about.languages.badge' | transloco }}</span>
        </div>

        <div class="about__languages">
          @for (lang of languages; track lang.name) {
            <div class="about__language">
              <span class="about__lang-name">{{ lang.name }}</span>
              <span class="about__lang-level">
                {{ 'about.languages.levels.' + lang.level | transloco }}
              </span>
            </div>
          }
        </div>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add language card styles to `about.component.scss`**

Insert the following styles in `src/app/components/about/about.component.scss` **before** the `@media` query blocks (after the `.about__cert-issuer` closing brace, around line 150):

```scss
.about__languages {
  display: grid;
  gap: 0.75rem;
}

.about__language {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  border-radius: var(--radius-md);
  background-color: var(--color-surface-offset);
  border: 1px solid var(--color-divider);
  transition: border-color 0.2s ease;

  &:hover { border-color: rgba(201, 169, 110, 0.3); }
}

.about__lang-name {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text);
}

.about__lang-level {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-faint);
}
```

- [ ] **Step 4: Verify visually**

```bash
npx ng serve
```

Open `http://localhost:4200`, scroll to the About section. Verify:
- Three cards appear: bio, certifications, languages
- Languages card shows Español (Nativo/Native), Valenciano (Nativo/Native), English (Competencia profesional / Professional Working Proficiency)
- Switching language (EN/ES) updates the level text correctly
- Cards are responsive on mobile (stack to single column)

- [ ] **Step 5: Commit**

```bash
git add src/app/components/about/about.component.ts src/app/components/about/about.component.html src/app/components/about/about.component.scss
git commit -m "feat: add Languages card to About section"
```

---

## Task 3: CV component — Languages section

**Files:**
- Modify: `src/app/components/cv/cv.component.ts`
- Modify: `src/app/components/cv/cv.component.html`
- Modify: `src/app/components/cv/cv.component.scss`

- [ ] **Step 1: Update `cv.component.ts` to expose languages**

Replace the full file:

```ts
import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { EXPERIENCE_DATA } from '../experience/experience.data';
import { SKILLS_DATA, SkillCategory } from '../skills/skills.data';
import { PROJECTS_DATA, Project } from '../projects/projects.data';
import { ABOUT_CERTIFICATIONS, ABOUT_LANGUAGES, Certification, Language } from '../about/about.data';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  private readonly transloco = inject(TranslocoService);
  private readonly activeLang = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang(),
  });

  readonly skillCategories: SkillCategory[] = SKILLS_DATA.filter(c => c.key !== 'collaboration');
  readonly realProjects: Project[] = PROJECTS_DATA.filter(p => !p.isComingSoon);
  readonly certifications: Certification[] = ABOUT_CERTIFICATIONS;
  readonly languages: Language[] = ABOUT_LANGUAGES;

  readonly experiences = computed(() => {
    void this.activeLang();
    return EXPERIENCE_DATA.map(item => ({
      ...item,
      tasks: this.transloco.translate<string[]>(`experience.jobs.${item.key}.tasks`),
    }));
  });

  readonly profile = computed(() => {
    void this.activeLang();
    return this.transloco.translate<string[]>('about.paragraphs').slice(0, 2).join(' ');
  });

  tagList(cat: SkillCategory): string {
    return cat.tags.map(t => t.label).join(', ');
  }
}
```

- [ ] **Step 2: Add Languages section to `cv.component.html`**

Add a Languages section after the Certifications section (after `</section>` on line 87, before the closing `</article>`):

```html
<!-- Languages -->
<section class="cv__section">
  <h2 class="cv__section-title">Languages</h2>
  @for (lang of languages; track lang.name) {
    <div class="cv__lang">
      <span class="cv__lang-name">{{ lang.name }}</span>
      <span class="cv__lang-level"> · {{ 'about.languages.levels.' + lang.level | transloco }}</span>
    </div>
  }
</section>
```

The full `cv.component.html` should be:

```html
<div class="cv-wrapper">
  <article class="cv">

    <!-- Header -->
    <header class="cv__header">
      <div class="cv__header-main">
        <h1 class="cv__name">Rafael Bañón Martín</h1>
        <p class="cv__role">Software Developer — Frontend</p>
      </div>
      <div class="cv__contact">
        <a href="mailto:banonrafael@gmail.com">banonrafael&#64;gmail.com</a>
        <a href="https://linkedin.com/in/banonrafael" target="_blank">linkedin.com/in/banonrafael</a>
        <a href="https://github.com/rbanon" target="_blank">github.com/rbanon</a>
        <span>Valencia, Spain</span>
      </div>
    </header>

    <hr class="cv__divider" />

    <!-- Profile -->
    <section class="cv__section">
      <h2 class="cv__section-title">Profile</h2>
      <p class="cv__profile">{{ profile() }}</p>
    </section>

    <!-- Experience -->
    <section class="cv__section">
      <h2 class="cv__section-title">Experience</h2>
      @for (job of experiences(); track job.key) {
        <div class="cv__job">
          <div class="cv__job-header">
            <div class="cv__job-title">
              <span class="cv__job-role">{{ 'experience.jobs.' + job.key + '.role' | transloco }}</span>
              <span class="cv__job-sep"> · </span>
              <span class="cv__job-company">{{ job.company }}</span>
            </div>
            <span class="cv__job-period">{{ 'experience.jobs.' + job.key + '.period' | transloco }}</span>
          </div>
          <ul class="cv__job-tasks">
            @for (task of job.tasks; track $index) {
              <li>{{ task }}</li>
            }
          </ul>
        </div>
      }
    </section>

    <!-- Skills -->
    <section class="cv__section">
      <h2 class="cv__section-title">Skills</h2>
      <div class="cv__skills">
        @for (cat of skillCategories; track cat.key) {
          <div class="cv__skill-row">
            <span class="cv__skill-category">{{ 'skills.categories.' + cat.key + '.title' | transloco }}</span>
            <span class="cv__skill-tags">{{ tagList(cat) }}</span>
          </div>
        }
      </div>
    </section>

    <!-- Projects -->
    <section class="cv__section">
      <h2 class="cv__section-title">Projects</h2>
      @for (project of realProjects; track project.key) {
        <div class="cv__project">
          <div class="cv__project-header">
            <span class="cv__project-name">{{ project.name }}</span>
            @if (project.github) {
              <a class="cv__project-link" [href]="project.github">{{ project.github }}</a>
            }
          </div>
          <p class="cv__project-desc">{{ 'projects.items.' + project.key + '.description' | transloco }}</p>
          <p class="cv__project-tech">{{ project.tech.join(' · ') }}</p>
        </div>
      }
    </section>

    <!-- Certifications -->
    <section class="cv__section">
      <h2 class="cv__section-title">Certifications</h2>
      @for (cert of certifications; track cert.title) {
        <div class="cv__cert">
          <span class="cv__cert-title">{{ cert.title }}</span>
          <span class="cv__cert-issuer"> · {{ cert.issuer }}</span>
        </div>
      }
    </section>

    <!-- Languages -->
    <section class="cv__section">
      <h2 class="cv__section-title">Languages</h2>
      @for (lang of languages; track lang.name) {
        <div class="cv__lang">
          <span class="cv__lang-name">{{ lang.name }}</span>
          <span class="cv__lang-level"> · {{ 'about.languages.levels.' + lang.level | transloco }}</span>
        </div>
      }
    </section>

  </article>
</div>
```

- [ ] **Step 3: Add `.cv__lang` styles to `cv.component.scss`**

Append inside the `@media print` block, after the `.cv__cert-issuer` rule (after line 263):

```scss
  // ---- Languages ----

  .cv__lang {
    font-size: 9.5pt;
    margin-bottom: 0.2rem;
  }

  .cv__lang-name {
    font-weight: 600;
    color: #111;
  }

  .cv__lang-level {
    color: #555;
  }
```

- [ ] **Step 4: Verify CV print output**

With `ng serve` running, open `http://localhost:4200` and click the "CV" button in the navbar (or press Ctrl+P). Verify in the print preview:
- Languages section appears after Certifications
- Shows: Español · Native, Valenciano · Native, English · Professional Working Proficiency
- Switch language to ES before printing and confirm levels show in Spanish

- [ ] **Step 5: Commit**

```bash
git add src/app/components/cv/cv.component.ts src/app/components/cv/cv.component.html src/app/components/cv/cv.component.scss
git commit -m "feat: add Languages section to CV component"
```

---

## Task 4: Delete static PDFs

**Files:**
- Delete: `public/CV_RafaelBanon-ESP.pdf`
- Delete: `public/CV_RafaelBanon-ENG.pdf`

- [ ] **Step 1: Delete both PDF files**

```bash
git rm public/CV_RafaelBanon-ESP.pdf public/CV_RafaelBanon-ENG.pdf
```

- [ ] **Step 2: Verify no references remain**

```bash
grep -r "CV_RafaelBanon" src/
```

Expected: no output (no remaining references in the Angular source).

- [ ] **Step 3: Commit**

```bash
git commit -m "chore: remove stale static CV PDFs, replaced by dynamic print flow"
```

---

## Final verification checklist

- [ ] About section shows three cards: bio, certifications, languages
- [ ] Language levels update correctly when switching EN ↔ ES
- [ ] Navbar "CV" button triggers print dialog
- [ ] Print preview includes Languages section after Certifications
- [ ] `grep -r "CV_RafaelBanon" .` returns nothing
- [ ] `npx ng build` completes with no errors
