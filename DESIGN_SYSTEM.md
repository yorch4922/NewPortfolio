# Design System

This document defines the UI/UX system for this portfolio and future case-study pages.

## 1. Principles

- Clarity first: content hierarchy should be obvious in 3 seconds.
- Accessible by default: keyboard, focus, contrast, and semantic structure are non-negotiable.
- Consistent but expressive: reuse tokens/components while allowing each case study a visual accent.
- Progressive enhancement: base HTML must remain understandable without animation.

## 2. Core Tokens

Use the tokens from `src/app/globals.css` as the single source of truth.

### Color

- `--color-accent`: primary action and key emphasis.
- `--color-bg`: page background.
- `--color-card-bg`: elevated containers.
- `--color-footer-bg`: footer surface.
- `--color-text-primary`: main text.
- `--color-text-secondary`: supporting text.

### Typography

- Sans (`--font-sans`): body, labels, buttons.
- Serif (`--font-serif`): headings and section titles.

### Layout

- Global container: `.container-custom` (`max-w-7xl`, horizontal padding).
- Section rhythm: `py-24` desktop baseline.
- Grid baseline:
  - 1 column mobile
  - 2 columns from `md`
  - 3 columns from `md`/`lg` depending on density

## 3. Accessibility Standards

Every new page/component must satisfy:

1. One `h1` per page.
2. Landmark structure:
   - `nav` for navigation
   - `main` with `id="main-content"`
   - `footer` for global closing content
3. Section labeling:
   - Use `aria-labelledby` on major `section` blocks.
4. Keyboard support:
   - Visible focus ring for links/buttons/inputs.
   - No hover-only functionality.
5. Semantic collections:
   - Repeated cards -> `ul/li`.
   - Metric pairs -> `dl/dt/dd`.
6. Motion safety:
   - Respect `prefers-reduced-motion`.
7. External links:
   - `target="_blank"` + `rel="noopener noreferrer"`.
   - Add accessible label when opening a new tab.

## 4. Content Quality Rules

- Avoid encoding artifacts (for example `â`, `Ã`, `Â`) in visible copy.
- Keep punctuation ASCII-safe when possible for portability.
- Headings should be action-oriented and specific.
- Replace placeholder blocks before publishing.

## 5. Shared Component Patterns

### Tokenized Surface API

Use these primitives for new sections and cards:

- `SectionSurface` from `src/components/ui/SectionSurface.tsx`
- `CardSurface` from `src/components/ui/CardSurface.tsx`
- token maps in `src/components/ui/surface-tokens.ts`

Supported props:

- `variant`: `default | muted | canvas | inverse`
- `tone`: `neutral | accent`
- `density`: `compact | comfortable | spacious`

Example:

```tsx
<SectionSurface
  id="case-study-problem"
  ariaLabelledby="case-study-problem-title"
  variant="muted"
  density="comfortable"
>
  <h2 id="case-study-problem-title">Problem</h2>
  <CardSurface as="article" variant="soft" density="comfortable">
    ...
  </CardSurface>
</SectionSurface>
```

### Navbar

- Sticky top.
- Mobile menu with:
  - `aria-expanded`
  - `aria-controls`
  - Escape-to-close
  - body scroll lock while open

### Hero

- `h1` + short value statement + primary CTA.
- Hero media must include meaningful `alt`.

### Card Collections

- Pattern:
  - section heading (`h2`)
  - optional intro paragraph
  - `ul` with cards as `li > article`

### Contact Form

- Required: name, email, message.
- Status area:
  - `role="status"`
  - `aria-live="polite"`
- Anti-spam: hidden honeypot field.
- API-first submission; mailto only as fallback.

## 6. Case Study Page Blueprint

Recommended section order:

1. Hero (problem + outcome statement)
2. Challenge / context
3. Discovery & process timeline
4. Information architecture / decisions
5. Final UI snapshots
6. Results & metrics
7. Key takeaways
8. CTA

For each section:

- Add `aria-labelledby`.
- Prefer lists for repeated content.
- Keep max line length readable (`max-w-*`).
- Build sections using `SectionSurface` and `CardSurface` instead of ad-hoc class strings.

## 7. Interaction & Motion

- Keep motion meaningful, not decorative noise.
- Default:
  - subtle reveal for section entry
  - restrained hover scale/translate on cards
- Never block comprehension when motion is disabled.

## 8. QA Checklist (Before Merge)

- `npm run lint` passes.
- Keyboard-only pass:
  - Can reach all links/buttons/inputs.
  - Focus is always visible.
- Screen-reader pass:
  - Landmarks and heading order are coherent.
- Mobile pass:
  - No horizontal overflow.
  - Nav and CTA are usable with thumb reach.
- Copy pass:
  - No placeholders.
  - No encoding artifacts.

## 9. Versioning Guidance

- Update this file whenever:
  - a token changes
  - a core component pattern changes
  - accessibility standards are tightened
- Keep updates additive and backward-compatible when possible.
