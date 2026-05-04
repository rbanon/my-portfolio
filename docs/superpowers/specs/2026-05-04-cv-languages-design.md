# CV + Languages Design Spec
**Date:** 2026-05-04
**Status:** Approved

## Overview

Three coordinated changes to the portfolio:

1. Add a **Languages** card to the "About" section (Español/Valenciano native, English professional).
2. Add a **Download CV** button to the navbar that triggers `window.print()`, generating a PDF from the already-dynamic `cv.component`.
3. Add a **Languages** section to `cv.component` so it appears in the printed/downloaded CV.
4. Delete the static PDF files (`public/CV_RafaelBanon-ESP.pdf`, `public/CV_RafaelBanon-ENG.pdf`), which are replaced by the dynamic CV.

No education section is added to the CV (intentionally omitted for conciseness).

---

## 1. Data Layer — `about.data.ts`

Add a `Language` interface and `ABOUT_LANGUAGES` constant:

```ts
export interface Language {
  name: string;
  level: string; // key into i18n: about.languages.levels.<level>
}

export const ABOUT_LANGUAGES: Language[] = [
  { name: 'Español',    level: 'native'       },
  { name: 'Valenciano', level: 'native'       },
  { name: 'English',    level: 'professional' },
];
```

The `level` field is an i18n key suffix, not a display string, so both language versions of the CV render correctly.

---

## 2. i18n — `en.json` and `es.json`

New keys added under `about.languages` and `nav`:

| Key | EN | ES |
|-----|----|----|
| `about.languages.title` | Languages | Idiomas |
| `about.languages.badge` | Native & Professional | Nativo y Profesional |
| `about.languages.levels.native` | Native | Nativo |
| `about.languages.levels.professional` | Professional Working Proficiency | Competencia profesional |
| `nav.downloadCv` | Download CV | Descargar CV |

---

## 3. About Component

**`about.component.ts`:** import `ABOUT_LANGUAGES` and `Language`; expose as `readonly languages`.

**`about.component.html`:** add a third `<article class="about__card">` inside `.about__grid`, matching the certifications card structure:
- Header with title + badge
- List of languages with name (bold) and translated level (secondary text)

**`about.component.scss`:** add `.about__languages`, `.about__language`, `.about__lang-name`, `.about__lang-level` — styled analogously to `.about__certification` and its children.

---

## 4. Navbar Component

**`navbar.component.ts`:** add `downloadCv(): void { window.print(); }`.

**`navbar.component.html`:** add a `<button class="navbar__download-btn">` bound to `(click)="downloadCv()"` with the `nav.downloadCv` translation. Positioned among existing nav links, styled as a distinct CTA (outline or accent variant) to signal it's an action, not a link.

**`navbar.component.scss`:** add `.navbar__download-btn` styles — differentiated from nav links but consistent with the existing design system.

---

## 5. CV Component

**`cv.component.ts`:** import and expose `ABOUT_LANGUAGES` as `readonly languages`.

**`cv.component.html`:** add a Languages section after Certifications:
```html
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

**`cv.component.scss`:** add `.cv__lang`, `.cv__lang-name`, `.cv__lang-level` — matching the existing `.cv__cert` style.

The CV section title renders in English always (it's a static string in the template) since the CV language follows the active Transloco language at print time.

---

## 6. File Cleanup

Delete:
- `public/CV_RafaelBanon-ESP.pdf`
- `public/CV_RafaelBanon-ENG.pdf`

These are replaced entirely by the dynamic `window.print()` flow. No fallback is needed.

---

## Files Affected

| File | Change |
|------|--------|
| `src/app/components/about/about.data.ts` | Add `Language` interface + `ABOUT_LANGUAGES` |
| `src/assets/i18n/en.json` | Add `about.languages.*` + `nav.downloadCv` |
| `src/assets/i18n/es.json` | Add `about.languages.*` + `nav.downloadCv` |
| `src/app/components/about/about.component.ts` | Import + expose `languages` |
| `src/app/components/about/about.component.html` | Add languages card |
| `src/app/components/about/about.component.scss` | Add language card styles |
| `src/app/components/navbar/navbar.component.ts` | Add `downloadCv()` method |
| `src/app/components/navbar/navbar.component.html` | Add download button |
| `src/app/components/navbar/navbar.component.scss` | Add button styles |
| `src/app/components/cv/cv.component.ts` | Import + expose `languages` |
| `src/app/components/cv/cv.component.html` | Add Languages section |
| `src/app/components/cv/cv.component.scss` | Add `.cv__lang` styles |
| `public/CV_RafaelBanon-ESP.pdf` | **Delete** |
| `public/CV_RafaelBanon-ENG.pdf` | **Delete** |
