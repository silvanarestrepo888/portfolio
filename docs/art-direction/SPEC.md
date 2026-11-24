# experiencearchitect.design: Art-Direction & Implementation Spec v1.0

**Owner:** Silvana Restrepo (art direction, final approval)
**Implementer:** Hermes (overnight, unattended)
**Written:** 2026-11-23
**Deadline:** preview URL ready by **05:30 local time**, production live by **06:00** *only if every acceptance gate in §11 passes*.

Read this whole document before touching code. When this spec and your own judgment disagree, **this spec wins**. When this spec is silent, choose the **more restrained** option (fewer effects, fewer sizes, fewer colors) and log the decision in the report (§13).

---

## 0. Mission

Rebuild the visual layer of the site so that every system (typography, hierarchy, images, rhythm, spacing, layout, color) reads as the work of a head of creative and art direction at Landor level.

Do **not** add features or rewrite copy. Change how the site looks and composes, not what it says.

### What "perfect" means here (the bar)

1. **One system, zero exceptions.** Every font size, space, color, ratio and duration comes from a token in §3. No magic numbers in components.
2. **Images fill their frames edge to edge.** No letterboxing, no empty bars, no `object-fit: contain` on editorial images. Every crop is chosen on purpose (§5).
3. **Flat, confident surfaces.** No glassmorphism, no glows, no radial "atmosphere", no shimmer, no blur reveals, no parallax, no custom cursor.
4. **Typography carries the hierarchy.** At most 2 typefaces, 8 type roles and 2 weights per face.
5. **Rhythm you can measure.** All vertical spacing sits on a 4px grid. Every section uses the same padding token and the same header-to-content gap.
6. **AA contrast everywhere.** Minimum text size is 12px, minimum tap target is 44px.

---

## 1. Ground truth: repo, tools, rules

| Item | Value |
|---|---|
| Repo (deploys to production) | `silvanarestrepo888/portfolio` |
| Local path | `/Users/silvanarestrepo/experience-architect-portfolio/live-site` |
| Base branch | `main` (Vercel auto-deploys `main` to production) |
| Spec branch | `docs/art-direction-spec` (= `main` + this folder) |
| Work branch | `feature/art-direction-v1`: **create it from `origin/docs/art-direction-spec`**, which contains this spec and `crops.json`. That branch is `main` plus docs only. |
| Stack | Next.js 15.5 (App Router) · React 19 · TypeScript · Tailwind v4 · framer-motion 12 · sharp (available via Next) · Playwright (devDependency) |
| Fonts (already loaded in `src/app/layout.tsx`) | Cormorant Garamond → `--font-cormorant-display`; Inter → `--font-inter` |
| Build | `npm run build` (must pass before every commit) |
| Dev | `npm run dev -- --port 3002` |

### Hard rules (from `CLAUDE.md`, non-negotiable)

1. Never commit directly to `main`. Work on the feature branch and merge through a PR.
2. Never hardcode hex values in components. All color comes from `src/styles/tokens.css`.
3. Never introduce a 4th palette color (coral, vanilla and charcoal families only, plus the defined surface tokens).
4. `npm run build` must pass before every commit.
5. **Never delete files.** Archive by renaming (`*.legacy.css`, `*.legacy.tsx`) or by no longer importing them.

### Local checkout gotcha (read this or images will 404 locally)

This clone uses **sparse checkout**. `public/projects/**` is *not* checked out, and **switching branches removes any copies you made**. After every `git checkout`/`switch`, restore the source images (videos excluded):

```bash
git ls-files public/projects | grep -viE '\.(mp4|mov)$' | while IFS= read -r p; do mkdir -p "$(dirname "$p")"; git show "HEAD:$p" > "$p"; done
```

New files you create under `public/art/**` sit outside the sparse definition. Add them with:

```bash
git add --sparse public/art
```

Videos: the source `*.mp4` files under `public/projects/**` are excluded from deploys by `.vercelignore` (they are 5–40 MB each), so **no video has ever played in production**; every request 404s. The fix is not to drop them. Re-encode web-size copies into `public/art/video/` (not matched by `.vercelignore`) and play those. See §5.6. Restore the sources for encoding with:

```bash
git ls-files public/projects | grep -iE '\.(mp4|mov)$' | while IFS= read -r p; do mkdir -p "$(dirname "$p")"; git show "HEAD:$p" > "$p"; done
```

---

## 2. Architecture decision: clean slate, not more patches

`src/app/globals.css` is about 27,000 lines of layered patches, with `!important` used about 2,000 times. Overriding it further is how the site became inconsistent. So:

1. **Stop importing the legacy CSS.** In `src/app/layout.tsx`, replace the three imports (`./globals.css`, `./layout-fix.css`, `./enhanced-scroll-append.css`) with one new entry file, `./site.css`.
   - Rename `globals.css` → `globals.legacy.css`, `layout-fix.css` → `layout-fix.legacy.css` and `enhanced-scroll-append.css` → `enhanced-scroll-append.legacy.css`.
   - Rename every file in `src/styles/` **except `tokens.css`** to `*.legacy.css`.
   - Keep them all in the repo, unimported.
2. **New CSS lives in `src/styles/ea/`**, one file per concern:

   ```
   src/app/site.css            ← entry: imports below, in this order
   src/styles/tokens.css       ← existing; extend per §3 (do not rename)
   src/styles/ea/base.css      ← reset, html/body, focus, selection, reduced motion
   src/styles/ea/type.css      ← type roles (§4)
   src/styles/ea/layout.css    ← container, grid, section shell, section header
   src/styles/ea/nav.css
   src/styles/ea/hero.css
   src/styles/ea/about.css
   src/styles/ea/projects.css
   src/styles/ea/case-study.css
   src/styles/ea/engagements.css
   src/styles/ea/services.css
   src/styles/ea/experience.css
   src/styles/ea/footer.css
   ```

   `site.css` starts with:

   ```css
   @import "../styles/tokens.css";
   @import "tailwindcss";
   ```

   …followed by the `ea/*.css` imports.
3. **Class naming:** every new class is prefixed `ea-` and written BEM-style (`ea-card`, `ea-card__media`, `ea-card--active`). Rewrite the JSX `className`s of each section to the new classes. Remove Tailwind utility classes from migrated markup. Tailwind stays installed but is not used for section styling.
4. **Zero `!important`** in the new CSS. Nothing competes with it anymore, so it isn't needed. The only exception is the reduced-motion block in `base.css`.
5. **Class names the JavaScript depends on must be kept** (add the `ea-` class next to them):
   - `.project-details-overlay`: `page.tsx` queries it 5×.
   - The nav `scrolled` class toggle and the snippet grid `at-end` class toggle. Keep or re-implement these.
6. **Components to stop rendering** (keep the files, remove the imports and usage):

   | Remove | Where | Why |
   |---|---|---|
   | `<QuantumCursor />`, `<ChromaticIntelligence />` | `src/app/layout.tsx` | Custom cursor artifact in the top-left corner, plus a fixed full-screen color field |
   | `<TopographicBackground />` | `src/app/layout.tsx` | Decorative texture that fights flat surfaces |
   | `<CustomCursor />` | `src/app/page.tsx:721` | Custom cursor |
   | `<SectionIndicator />` | `src/app/page.tsx:727` | Collides with content at every width |
   | Topographic JS hooks (`topographic-*` classList code, `.topographic-luxury` queries) | `src/app/page.tsx` | Dead once the background is removed |
   | Hero parallax (`parallax-element`, `gpu-accelerated`) | hero `<Image>` | No parallax (§8) |

---

## 3. Tokens: extend `src/styles/tokens.css`

Keep every existing token (legacy aliases may still be referenced). **Add** the blocks below at the end of `:root`. Use only these in the new CSS.

### 3.1 Color roles

The palette doesn't change. What's new is that each color now has a defined job.

```css
  /* ── EA · surfaces (one per section, flat — no gradients except --ea-surface-coral) ── */
  --ea-surface-light:     var(--vanilla);            /* about, case-study overlay */
  --ea-surface-paper:     var(--surface-parchment);  /* experience */
  --ea-surface-ink:       var(--surface-ink);        /* projects + engagements (one continuous dark band) */
  --ea-surface-noir:      var(--surface-noir);       /* footer */
  --ea-surface-coral:     linear-gradient(145deg, var(--coral-text) 0%, var(--coral-surface-deep) 55%, var(--coral-text) 100%); /* services (as shipped, ≥4.7:1 with --ea-on-coral) */

  /* ── EA · text on light surfaces (vanilla / parchment) ── */
  --ea-ink-strong:        var(--charcoal-ink);       /* #2D3748 — titles, display    ~12:1 */
  --ea-ink:               var(--charcoal-mid);       /* #4A5568 — body              ~7.4:1 */
  --ea-ink-soft:          var(--charcoal-muted);     /* #667080 — meta, captions    ~4.9:1 */
  /* --charcoal-light (#718096) is BANNED for text < 18px (3.9:1). */

  /* ── EA · text on dark surfaces (ink / noir) ── */
  --ea-on-dark:           var(--vanilla);                         /* titles, body */
  --ea-on-dark-soft:      rgba(255, 254, 248, 0.72);              /* meta  (~9:1 on ink) */
  --ea-on-dark-faint:     rgba(255, 254, 248, 0.56);              /* captions, counters — floor; never lower (~6:1) */
  --ea-rule-dark:         rgba(255, 254, 248, 0.14);              /* 1px dividers on dark */

  /* ── EA · text on coral ── */
  --ea-on-coral:          var(--vanilla-pure);       /* full opacity only */
  --ea-rule-coral:        rgba(255, 254, 249, 0.28);

  /* ── EA · accent ── */
  --ea-accent:            var(--coral);              /* on dark surfaces: links, active states, rules (6:1 on ink) */
  --ea-accent-on-light:   var(--coral-text);         /* coral text on light surfaces (5.3:1) */
  --ea-rule-light:        rgba(45, 55, 72, 0.14);    /* 1px dividers on light */
```

Coral is used **only** for: interactive text (links, CTAs), the active state of nav, filters and carousel, the 32px rule under section titles, focus rings and the services surface. It is never used as a decorative fill.

### 3.2 Type scale (fluid; see §4 for roles)

```css
  --ea-fs-hero:      clamp(2.75rem, 4.9vw, 5.5rem);                   /* 44 → 88  (one line ≥1024) */
  --ea-fs-display:   clamp(2.5rem, 1.9rem + 2.6vw, 4.25rem);          /* 40 → 68  section titles */
  --ea-fs-title-1:   clamp(1.625rem, 1.35rem + 1.1vw, 2.25rem);       /* 26 → 36 */
  --ea-fs-title-2:   clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem);        /* 22 → 28 */
  --ea-fs-lead:      clamp(1.125rem, 1.05rem + 0.35vw, 1.375rem);     /* 18 → 22 */
  --ea-fs-body:      clamp(1rem, 0.97rem + 0.15vw, 1.0625rem);        /* 16 → 17 */
  --ea-fs-small:     0.875rem;                                         /* 14 */
  --ea-fs-label:     0.75rem;                                          /* 12 — absolute floor */

  --ea-lh-tight:     1.0;
  --ea-lh-title:     1.15;
  --ea-lh-lead:      1.45;
  --ea-lh-body:      1.65;
  --ea-lh-label:     1.3;

  --ea-track-display: -0.015em;
  --ea-track-title:   -0.005em;
  --ea-track-label:    0.14em;
  --ea-measure-body:   62ch;
  --ea-measure-lead:   52ch;
```

### 3.3 Space, grid, section rhythm

```css
  /* 4px base. Use ONLY these. */
  --ea-s-1: 4px;   --ea-s-2: 8px;   --ea-s-3: 12px;  --ea-s-4: 16px;
  --ea-s-5: 24px;  --ea-s-6: 32px;  --ea-s-7: 48px;  --ea-s-8: 64px;
  --ea-s-9: 96px;  --ea-s-10: 128px; --ea-s-11: 160px;

  --ea-grid-max:     1360px;                          /* content width */
  --ea-grid-margin:  clamp(20px, 5.2vw, 96px);        /* outer page margin */
  --ea-grid-gutter:  clamp(16px, 2vw, 32px);
  --ea-grid-cols:    4;                               /* 8 at ≥768, 12 at ≥1024 (set in layout.css) */

  --ea-section-pad:  clamp(96px, 11vw, 160px);        /* top AND bottom of every section */
  --ea-header-gap:   clamp(48px, 6vw, 96px);          /* section header → content */
```

### 3.4 Shape, ratio, motion

```css
  --ea-radius-media:  0;                 /* images are square-cornered, editorial */
  --ea-radius-ui:     var(--radius-sharp);  /* 2px — rare: inputs, small UI */
  --ea-radius-pill:   var(--radius-pill);   /* nav pill only */

  --ea-ratio-project: 16 / 10;
  --ea-ratio-snippet: 4 / 3;
  --ea-ratio-portrait: 4 / 5;

  --ea-dur-1: var(--duration-fast);      /* 0.2s   hovers, color */
  --ea-dur-2: var(--duration-base);      /* 0.382s crossfades, accordions */
  --ea-dur-3: var(--duration-normal);    /* 0.618s section reveal */
  --ea-ease:  var(--ease-landor);
```

### 3.5 Breakpoints (mobile-first, `min-width` only)

| Name | Min width | Grid columns | Test widths (§11) |
|---|---|---|---|
| base | 0 | 4 | 375 |
| md | 768px | 8 | 768 |
| lg | 1024px | 12 | 1024, 1280 |
| xl | 1440px | 12 | 1440, 1920 |

---

## 4. Typography system

**Cormorant Garamond** is the voice: display and titles, weights 300 and 400, plus italic 300 for emphasis only. **Inter** is the structure: body, labels and UI, weights 400 and 500 only. Inter 300 and Cormorant 500+ are banned.

| Role (`ea-t-*` class) | Face / weight | Size token | Line height | Tracking | Case | Max width | Use |
|---|---|---|---|---|---|---|---|
| `ea-t-hero` | Cormorant 300 | `--ea-fs-hero` | 1.0 | display | Title case as written | n/a | Hero H1 only |
| `ea-t-display` | Cormorant 300 | `--ea-fs-display` | 1.0 | display | **lowercase** (signature: "about", "projects") | n/a | Section titles (H2), footer statement |
| `ea-t-title-1` | Cormorant 400 | `--ea-fs-title-1` | 1.15 | title | Sentence | 24ch | Project title, about hook, case-study H1 subtitle |
| `ea-t-title-2` | Cormorant 400 | `--ea-fs-title-2` | 1.15 | title | Sentence | 32ch | Service titles, snippet titles, timeline descriptors |
| `ea-t-lead` | Inter 400 | `--ea-fs-lead` | 1.45 | 0 | Sentence | 52ch | Intro paragraphs, case-study standfirst |
| `ea-t-body` | Inter 400 | `--ea-fs-body` | 1.65 | 0 | Sentence | 62ch | All running text |
| `ea-t-small` | Inter 400 | `--ea-fs-small` | 1.5 | 0 | Sentence | 52ch | Meta lines, domain links |
| `ea-t-label` | Inter 500 | `--ea-fs-label` | 1.3 | label | **UPPERCASE** | n/a | Eyebrows, client names, filter tabs, nav, tags |

Rules:
- Use `font-variant-numeric: tabular-nums` for years, counters and metrics.
- Set `text-wrap: balance` on `ea-t-hero`, `ea-t-display`, `ea-t-title-*` and `text-wrap: pretty` on body.
- Only `strong` (Inter 500, not 600+) and `em` (Cormorant italic, *only* inside title roles) are allowed inside text. No colored inline emphasis except links.
- **Hierarchy test:** on any screen, a reader can rank every text block by importance at a glance, and no two adjacent blocks share a role unless they are siblings.

---

## 5. Image system (art direction)

### 5.1 Rules

1. **Images fill their frames.** Every editorial image renders with `object-fit: cover` inside a frame of fixed `aspect-ratio`. `contain` is banned everywhere except the case-study gallery (§7.5).
2. **Pre-crop, don't hope.** Source files are mostly website screenshots with navigation bars, UI and logos. Cropping them at runtime with `object-position` can't remove that chrome. So every card image comes from a **pre-cropped derivative** generated from `docs/art-direction/crops.json` (validated visually; see `crops-final-preview.jpg`).
3. **No filters, overlays or color treatments on images.** Remove every `filter:` (contrast, saturate, brightness), tint and grain. The one exception is the hero's bottom scrim, which is already shipped.
4. **Square corners** (`--ea-radius-media: 0`), no borders, no shadows on images.
5. **Nothing sits on top of card images**: no year/category chips, expand buttons or "Inquire" pills. Metadata goes in the text block.
6. Use **`next/image` everywhere**, never `unoptimized`, `quality={85}`, with correct `sizes` (§5.4). Set `priority` only on the hero image.

### 5.2 Generate the derivatives

Create `scripts/art-direct.mjs` (Node, uses `sharp` from `node_modules`):

- Read `docs/art-direction/crops.json`.
- For each item, convert the fractional `crop` `[left, top, width, height]` to pixels: `left = round(l*W)`, `top = round(t*H)`, `height = round(h*H)`, `width = round(height * ratio)`. Clamp so `left + width ≤ W`, then assert the result is within ±0.5% of the target ratio.
- `extract`, then resize to `min(cropWidth, 2400)` wide. **Never upscale.**
- Write **JPEG quality 86, mozjpeg, progressive, sRGB, metadata stripped** to:
  - `public/art/projects/<slug>.jpg` (16:10)
  - `public/art/snippets/<slug>.jpg` (4:3)
- Write a QA contact sheet of all outputs to `docs/art-direction/crops-rendered.jpg`.
- Log each output's pixel size, plus any item that has a `flag`.

Run it with `node scripts/art-direct.mjs` and commit the outputs with `git add --sparse public/art`.

### 5.3 Image mapping (data changes in `src/app/page.tsx`)

Add an `art` field to each project and snippet object. **Keep `image` untouched**, because the case study still uses it.

| Project (title in data) | New card image `art` | Chosen because |
|---|---|---|
| Kayanee | `/art/projects/kayanee.jpg` | Hero cropped past the site navigation bar |
| Augoor | `/art/projects/augoor.jpg` | Key art ("Introducing Augoor") replaces the feature slide |
| Chime Care J&J | `/art/projects/chime-care.jpg` | Editorial crop: headline + portrait, left nav UI removed |
| Nomade Tulum | `/art/projects/nomade.jpg` | Clean photograph, centered mark |
| Flagship Entertainment Destination, KSA | `/art/projects/qiddiya.jpg` | **Aerial photograph** replaces the website screenshot |
| GCC Telecom Leader — Customer Experience Center | `/art/projects/gcc-telecom.jpg` | Scene image replaces the version with baked-in headline text |

Snippets: `art: '/art/snippets/<id>.jpg'`. The ids match the slugs (`dzrt-badel`, `parques-reunidos`, `danone`, `c4ir-colombia`, `wef-designit`, `viva-malls`, `grupo-exito`, `tigo-millicom`). (Verified: all 8 ids in `snippetProjects` match these slugs.)

### 5.4 `sizes` attributes

| Context | `sizes` |
|---|---|
| Project card media | `(min-width: 1024px) 50vw, 100vw` |
| Snippet card | `(min-width: 1440px) 25vw, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, 85vw` |
| About portrait | `(min-width: 1024px) 40vw, 100vw` |
| Case-study hero | `100vw` |
| Case-study gallery | `(min-width: 1024px) 66vw, 100vw` |

### 5.5 Assets to flag in the morning report (ship anyway)

- `gcc-telecom` (1387px source), `qiddiya` (1606px), `dzrt-badel` (1057px): request ≥2400px originals.
- `tigo-millicom`: no 4:3 crop keeps both the Tigo-UNE and Millicom lockups whole. Request a replacement image.
- GCC Telecom / stc: no video file in the repo. Request the CX Center film so the card can loop like Kayanee and Qiddiya.
- About portrait `public/silvana-about.jpg` is 1024×1024. It's soft at desktop size; request a ≥2000px original.

### 5.6 Video system (motion is part of the work, keep it)

Kayanee, Qiddiya and Augoor have real video. It is the strongest material on the site and must play, **but only as web-encoded derivatives**: never the raw sources, never in production as 404s again.

**Source inventory (in git, absent from production):**

| Source | Size | Use |
|---|---|---|
| `public/projects/kayanee/kayanee-story.mp4` | 29.9 MB | Kayanee **card loop** + case-study hero film |
| `public/projects/kayanee/beat-concept-v2.mp4` | 5.5 MB | Kayanee case-study gallery film ("Process Documentation", keep `playbackRate = 1.75`) |
| `public/projects/qiddiya/qiddiya-city.mp4` | 12.9 MB | Qiddiya **card loop** + case-study hero film |
| `public/projects/augoor/product-demo.mp4` | 39.9 MB | Augoor case-study film only (screen recording; the card keeps the key art) |
| `public/projects/kayanee/beat-concept.mp4` | 9.9 MB | Superseded by v2. Do not use, do not delete |
| GCC Telecom / stc | none in repo | No video file exists. Ship the still. Add a `cardVideo` slot that stays empty, and list "stc CX Center film needed" in the report |

**Encode** with `scripts/encode-video.mjs`, using `ffmpeg-static` (`npm i -D ffmpeg-static`; there is no system ffmpeg on this machine). Pick segments by extracting one frame per second to `docs/art-direction/qa/video-frames/<slug>/` and looking at them: the loop must be the most cinematic stretch with no title cards, UI chrome, logos-only frames or black frames.

| Output | Spec |
|---|---|
| `public/art/video/<slug>-loop.mp4` (card) | 8–12 s, cropped to **16:10** (center crop unless the frames show the subject off-center), 1600 px wide, H.264 High, `-crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart`, **audio stripped** (`-an`), ≤ **3.5 MB**. Last frame should cut cleanly back to the first (pick a segment that loops, or add a 0.4 s crossfade with `xfade`) |
| `public/art/video/<slug>-film.mp4` (case study) | Full length, native ratio, max 1920 px wide, `-crf 24`, AAC 128k audio kept if the source has it, faststart, ≤ **12 MB** (raise CRF until it fits) |
| `public/art/video/<slug>-poster.jpg` | The loop's first frame at 1600 px, JPEG q86, so the swap from still to video is invisible. For the card, this replaces `project.art` as the still layer |

Slugs: `kayanee`, `qiddiya`, `augoor`, `kayanee-beat`. Commit with `git add --sparse public/art/video`.

**Data:** add `cardVideo`, `cardPoster`, `filmVideo` to the project objects. Keep the existing `video`/`galleryVideo` fields untouched but stop reading them. Point `galleryVideo` usage at `/art/video/kayanee-beat-film.mp4`.

**Card playback (`InteractiveProjectCard.tsx`):**
- Still layer: `next/image` of `cardPoster` (or `art` if no video), `object-fit: cover`, as in §7.4.
- Video layer on top, same frame, `object-fit: cover`: `<video muted playsInline loop preload="none" poster={cardPoster} aria-hidden="true">`. Set `src` and call `play()` **only when the project is the active one and the frame is ≥ 50% in the viewport** (IntersectionObserver). Pause and reset when it leaves or the project changes.
- Fade the video in (opacity, `--ea-dur-2`) on `playing`, not on `loadeddata`. On `error` keep the still. This keeps the existing `videoReady` idea, rewritten cleanly.
- **Do not play** when `prefers-reduced-motion: reduce` or `navigator.connection?.saveData` is true. Show the still.
- No overlay on the video. Instead, WCAG 2.2.2: add a text control **in the controls row** (next to the counter, not on the image): "Pause motion" / "Play motion", `ea-t-label`, 44 px tall, shown only for projects with `cardVideo`. The choice persists for the session.
- Mobile plays too (muted inline video is allowed on iOS), with the same viewport/active rules.

**Case study (§7.5):** if `filmVideo` exists, the hero is that film instead of the still: `<video controls playsInline preload="metadata" poster={cardPoster}>`, 16:10 frame, `object-fit: cover`, `max-height: 78svh`. Kayanee's beat film stays last in the gallery at native ratio with native controls and `playbackRate = 1.75`.

**Performance:** the poster is the LCP candidate, never the video. `preload="none"` on cards means no video bytes load until the project is active and visible. Lighthouse budgets (§9) still apply.

---

## 6. Layout system

- `.ea-container`: `max-width: calc(var(--ea-grid-max) + 2 * var(--ea-grid-margin))`, `padding-inline: var(--ea-grid-margin)`, `margin-inline: auto`.
- `.ea-grid`: `display: grid; grid-template-columns: repeat(var(--ea-grid-cols), minmax(0, 1fr)); column-gap: var(--ea-grid-gutter);`. Set `--ea-grid-cols` to 8 at md and 12 at lg.
- `.ea-section`: `padding-block: var(--ea-section-pad)`. One surface per section. **No section sets its own padding or min-height**, except the hero (`100svh`).
- `.ea-bleed`: breaks an element out to the viewport edges on mobile with `margin-inline: calc(-1 * var(--ea-grid-margin))`.
- **Section header** (`.ea-section-header`, reused by about, projects, engagements, services and experience):
  - Above the title, an eyebrow index in `ea-t-label`: `01 — About`, `02 — Projects`, `03 — Selected engagements`, `04 — Services`, `05 — Experience`. Color is the soft text color for the surface.
  - Title in `ea-t-display` (lowercase, as now).
  - A 32×1px rule in the accent color, `--ea-s-5` below the title.
  - The header is left-aligned on grid columns 1–8. **No centered section headers.** That's a deliberate editorial choice.
  - `margin-bottom: var(--ea-header-gap)`.
- **Vertical rhythm inside sections:**
  - Related items: `--ea-s-4` or `--ea-s-5`.
  - Groups: `--ea-s-7`.
  - Major blocks: `--ea-s-8` or `--ea-s-9`.
  - Nothing else.

---

## 7. Section blueprints

Copy stays exactly as it is in `page.tsx` unless a line below says otherwise.

### 7.1 Navigation (`src/components/navigation/FloatingNavigation.tsx`, `ea/nav.css`)

- **Desktop (≥1024):**
  - Floating pill, **horizontally centered at every width**: `left: 50%; transform: translateX(-50%)`, top `--ea-s-5`, height 56px.
  - Background `--vanilla-pure` at 92% with `backdrop-filter: saturate(1.2) blur(12px)`. This is the only blur allowed on the site.
  - Shadow: none. Border: 1px `--ea-rule-light`.
  - Contents: logo "silvana." (Cormorant 400, 20px, `--ea-accent-on-light`), then links ABOUT · PROJECTS · SERVICES · EXPERIENCE · **CONTACT** (new; scrolls to `#footer`) in `ea-t-label`, `--ea-ink`.
  - Active link: `--ea-ink-strong` with a 1px accent underline 6px below the text.
- **Mobile (<1024):**
  - Same centered pill, containing logo + a 44×44 menu button.
  - The menu opens a **full-screen sheet** on `--ea-surface-light`: links stacked in `ea-t-display`, `--ea-s-5` apart, CONTACT included, a close button top-right (44×44).
  - Focus is trapped while open, body scroll is locked, Esc closes it.
- The `scrolled` state only adjusts the background opacity. No size jump.

### 7.2 Hero (`#hero`, `ea/hero.css`)

Keep what shipped on 2026-11-23: full-bleed portrait (`/silvana-hero.jpg`, object-position `center 12%`), the bottom-up scrim, and the title anchored lower-left.

- Frame: `100svh`. Content in a container, aligned bottom-left, padding-bottom `clamp(48px, 9svh, 96px)`.
- **New eyebrow** above the H1: `SILVANA RESTREPO` in `ea-t-label`, `--ea-on-dark-soft`, `--ea-s-4` above the title.
- H1 text: `Experience Architect-Venture Designer` in `ea-t-hero`, `--ea-on-dark`.
  - ≥1024: one line (`white-space: nowrap`).
  - <1024: break after the hyphen, keeping the existing `<span className="hero-title-line2">` pattern (rename it to `ea-hero__line2`, `display: block` below lg).
- No scroll indicator and no animation beyond §8.
- Port the scrim gradients **exactly** from the legacy file (`globals.legacy.css` after phase 1). There are two, both on `.hero-photo-layer-unified::after`:
  - Desktop: the `@media (min-width: 769px)` block under the comment "Desktop: the mobile hero grammar".
  - Mobile: the block under "VISUAL AUDIT — critical fixes".
  - Contrast measured 5.7–10:1.

### 7.3 About (`#about`, `ea/about.css`, surface `--ea-surface-light`)

- **lg:** text on columns 1–6, portrait on columns 8–12, both top-aligned.
  - Portrait: frame `aspect-ratio: 4/5`, `object-fit: cover`, `object-position: 62% 30%`. Use `/silvana-about.jpg` with `next/image`, kept black-and-white as supplied.
- **<lg:** portrait first, full-bleed (`ea-bleed`) at 4:5, then text.
- Text hierarchy, in the existing order:
  1. Hook ("Seven industries. Three continents. Underneath all of it…"): `ea-t-title-1`, `--ea-ink-strong`.
  2. Narrative paragraphs: `ea-t-body`, `--ea-ink`.
  3. The three-line ladder (Anthropology / Design / technology): `ea-t-lead`, each on its own line, key word in `strong`, with a 1px accent rule on the left (`--ea-s-5` padding-left).
  4. Thesis paragraphs: `ea-t-body`.
  5. Closing line ("Welcome to my world…"): `ea-t-title-2` italic, `--ea-ink-soft`.
- Spacing: `--ea-s-7` between blocks, `--ea-s-5` between paragraphs.

### 7.4 Projects (`#projects`, `ea/projects.css`, `InteractiveProjectCard.tsx`, surface `--ea-surface-ink`)

**This section matters most.**

- **Header:** the standard section header, then the **filter row**:
  - Filters are text tabs, not pills: `ea-t-label`, `--ea-on-dark-soft`, separated by `--ea-s-6`.
  - Active tab: `--ea-on-dark` with a 1px accent underline.
  - On mobile the row scrolls horizontally with scroll-snap. The first tab aligns to the grid margin. No fade masks, no clipped text.
- **Layout ≥lg** (12 columns):
  - **Index**, columns 1–3: a vertical list of the 6 project titles in `ea-t-small`. Inactive titles are `--ea-on-dark-faint`; the active one is `--ea-on-dark` with a 1px × 16px accent tick on its left. Clicking a title selects that project.
  - **Media**, columns 4–9: the frame is `aspect-ratio: 16/10`, fills the column edge to edge and shows `project.art`. No padding, background, border, radius or overlay.
  - **Text**, columns 10–12, top-aligned with the media, in this order:
    1. Client: `ea-t-label`, `--ea-accent`.
    2. Title: `ea-t-title-1`, `--ea-on-dark`.
    3. Meta line `{category} · {location} · {year}`: `ea-t-small`, `--ea-on-dark-soft`, tabular numbers.
    4. Subtitle: `ea-t-body`, `--ea-on-dark-soft`.
    5. Capabilities `{tech.join(' · ')}`: `ea-t-label`, `--ea-on-dark-faint`.
    6. CTA "View case study →": `ea-t-label`, `--ea-accent`, pinned to the bottom of the column so it aligns with the bottom of the media.
- **Layout <lg:**
  - Media full-bleed (`ea-bleed`) at 16:10, then the text block with `--ea-s-5` above it.
  - Index hidden.
  - Controls below the text: ‹ and › buttons (44×44, 1px `--ea-rule-dark` border, square corners) and the counter `02 / 06` (`ea-t-label`, tabular numbers).
- **Controls ≥lg:** the same prev/next buttons and counter, under the text column. **Remove the dot pagination everywhere.**
- **Behavior:**
  - **No autoplay.** Remove any rotation timer.
  - Switching projects is a **crossfade only**: opacity, `--ea-dur-2`, `--ea-ease`. No x-slide, blur or 3D.
  - Keyboard ← → works when the section is focused.
- **Video:** projects with `cardVideo` (Kayanee, Qiddiya) play a muted loop in the media frame. Follow §5.6 exactly.
- **Remove from the card component:**
  - The old `<motion.video>` block that reads `project.video` (raw source path). Replace it with the §5.6 implementation.
  - The overlay tags (year/category chips).
  - The expand button and lightbox trigger. Clicking the media opens the case study instead.
  - Shimmer skeletons, all inline `style={{…}}` objects (move them to CSS), and `getAspectRatio`.
- Hover (pointer devices only): media `transform: scale(1.02)` over `--ea-dur-2`, clipped by `overflow: hidden` on the frame. Nothing else.

### 7.5 Case-study overlay (`.project-details-overlay` + `ea-case`, `ea/case-study.css`)

- Full-screen overlay on `--ea-surface-light`, scrolling internally. Keep the body scroll lock code. Opening and closing is a 0.382s opacity fade.
- **Top bar** (sticky, 64px, `--ea-surface-light` at 94%):
  - "← All projects" (`ea-t-label`, `--ea-ink`) on the left.
  - Project title (`ea-t-small`, `--ea-ink-soft`) in the center, ≥lg only.
  - Close × (44×44) on the right.
- **Hero:** `project.art` (16:10), full-bleed, `max-height: 78svh`, `object-fit: cover`. If the project has `filmVideo` (Kayanee, Qiddiya, Augoor), the hero is the film with native controls instead (§5.6).
- **Title block** (container, columns 1–9):
  - Client: `ea-t-label`, accent-on-light.
  - Title: `ea-t-display`, but **not** lowercased. Use `text-transform: none` because project names are proper nouns.
  - Subtitle: `ea-t-lead`.
- **Facts row:** a 4-column grid (2×2 below md) of Client / Year / Location / Industry. Each has a label (`ea-t-label`, `--ea-ink-soft`) over a value (`ea-t-body`, `--ea-ink-strong`). 1px `--ea-rule-light` rules above and below, `--ea-s-6` padding.
- **Narrative sections** (Context, Scope, Impact):
  - ≥lg: the label sits on columns 1–3 (`ea-t-label`, accent-on-light) and the text on columns 4–10 (`ea-t-body`, 62ch).
  - <lg: label stacked above text.
  - `--ea-s-8` between sections.
- **Impact metrics** (`impactMetrics`): 3 columns. Value in `ea-t-title-1` with tabular numbers, key as `ea-t-label` below it.
- **Gallery:** Kayanee's beat film is the last item (§5.6). Columns 2–11, one image per row at its **native ratio** (`object-fit` not needed; width 100%, height auto), `--ea-s-7` apart, no frames or captions. This is the only place images aren't cropped, because they are documentation.
- **Footer of the overlay:** "Next project →" (`ea-t-title-2`, accent-on-light) linking to the next project. Remove the duplicated `footer-editorial` inside the overlay.

### 7.6 Selected engagements (`#project-snippets`, `ProjectSnippetGrid.tsx` / `ProjectSnippetCard.tsx`, `ea/engagements.css`, surface `--ea-surface-ink`)

- Same dark band as Projects, so no visible seam. Use the standard section header (`03 — Selected engagements`).
- **Rail:** a horizontal scroll-snap track. The first card aligns to the grid margin and the last card ends at the grid margin.
  - Card width: 85vw (base), 45vw (md), 30vw (lg), 25vw (xl). Gap `--ea-grid-gutter`.
  - Desktop has prev/next buttons (same style as §7.4) right-aligned in the section header row. No arrows over the cards.
- **Card,** top to bottom:
  1. Image frame `aspect-ratio: 4/3` showing `art`, edge to edge across the card width. Nothing on top of it.
  2. Client: `ea-t-label`, `--ea-accent`, `--ea-s-5` above.
  3. Title: `ea-t-title-2`, `--ea-on-dark`.
  4. Meta line, **always in the same order**: `{industry} · {location} · {year}` in `ea-t-small`, `--ea-on-dark-soft`. If a field is missing, drop it together with its separator. No rotating or alternating values.
  5. Website link (`{domain} ↗`): `ea-t-small`, `--ea-on-dark-faint`, hover turns it accent.
  6. "Inquire →": `ea-t-label`, `--ea-accent`, `--ea-s-5` above.
- Remove the industry pill on the image, the diamond/overlay effects, the bottom-right CTA button and any card background, radius or shadow.

### 7.7 Services (`#services`, `ea/services.css`, surface `--ea-surface-coral`)

- Standard section header in `--ea-on-coral`. The rule under the title is `--ea-on-coral` at 60% (coral on coral would vanish).
- **Accordion list** across columns 1–12. Each row is separated by a 1px `--ea-rule-coral` line, with one at the top and one at the bottom.
- **Row header** (the whole row is a `<button>`, min-height 88px, `aria-expanded`):
  - Title (`ea-t-title-2`) on columns 1–5.
  - Tagline (`ea-t-body`) on columns 6–11.
  - A "+" icon (1px stroke, 20px) on column 12, right-aligned, which rotates 45° when open.
  - <lg: the title stacks above the tagline and the icon stays top-right.
- **Expanded body** (columns 6–11 ≥lg, full width below), height transition `--ea-dur-2`:
  - Description: `ea-t-lead`.
  - Demand line: `ea-t-title-2` italic.
  - Tags as `ea-t-label` joined by ` · `. Not pills.
  - CTA "Ask about this service →": `ea-t-label` with a 1px underline.
  - All text `--ea-on-coral` at full opacity. **Opacity on text is banned in this section.**

### 7.8 Experience (`#experience`, `ExperienceTimeline.tsx`, `ea/experience.css`, surface `--ea-surface-paper`)

- Standard section header (`05 — Experience`). Directly under the rule, the line **"Each role was fieldwork."** in `ea-t-title-2` italic, `--ea-ink-soft`. It is no longer 11px faded text.
- **Timeline ≥lg:** **replace the curved SVG line** with a horizontal 7-column row on the 12-column grid. Use `grid-template-columns: repeat(7, 1fr)` inside columns 1–12.
  - A 1px `--ea-rule-light` line runs across the top. Each role has a 7px dot on the line: ink color, or accent for the current role "Experience Architect".
  - Under each dot: company (`ea-t-label`, `--ea-ink-strong`), then descriptor (`ea-t-small`, Inter 400, `--ea-ink-soft`).
  - The current role's text is `--ea-accent-on-light`.
- **Timeline <lg:** a vertical list with a 1px rule on the left and dots on the rule. Each entry has `--ea-s-5` between items. Same text styles as desktop.
- The `reveal` text (hover detail) appears below the row as one `ea-t-small` line on focus or hover of an item. Show nothing on touch devices.
- **"Measured in:" summary:** `ea-t-lead`, `--ea-ink`, columns 1–8, left-aligned, `--ea-s-9` above.

### 7.9 Footer (`#footer`, `ea/footer.css`, surface `--ea-surface-noir`)

- Statement "Let's build something / worth remembering." in **`ea-t-display` Cormorant 300**, `--ea-on-dark`. This replaces the italic sans-serif. Keep the line break, and leave the copy as is (no lowercase transform).
- Then, `--ea-s-7` below: "My design voice ↗" (`ea-t-title-2` italic, `--ea-accent`).
- Then the contact row: MAIL · LINKEDIN in `ea-t-label`, `--ea-on-dark-soft`, hover turns them `--ea-on-dark`.
- Credit "© 2026 Silvana Restrepo": `ea-t-label`, `--ea-on-dark-faint`, `--ea-s-9` above.
- Left-aligned on the grid (columns 1–10). Section padding is the standard token.

---

## 8. Motion

- **Section reveal** (the only scroll animation): the section's direct content blocks animate opacity 0→1 and translateY 16px→0 over `--ea-dur-3` with `--ea-ease`. It runs once, at 15% in view, with a stagger of 60ms capped at 4 children. Use `RevealSystem` or a single small IntersectionObserver hook, but not both.
- **Banned:** blur reveals, scale-in, parallax, 3D transforms, magnetic or custom cursors, autoplaying carousels, shimmer, infinite animations.
- **Hover:** color and opacity transitions over `--ea-dur-1`. Media zoom is 1.02 (projects only).
- Under `prefers-reduced-motion: reduce`, all durations are 0.01ms and nothing moves.

---

## 9. Accessibility & performance

- **Contrast:** every text/surface pair is AA. The pairs in §3.1 are pre-measured, so don't invent new ones.
- **Focus:** `:focus-visible` gets `outline: 2px solid var(--ea-accent); outline-offset: 3px` on dark and coral surfaces, and `var(--ea-accent-on-light)` on light surfaces. Never `outline: none` without a replacement.
- **Tap targets:** at least 44×44.
- **Minimum text size:** 12px.
- **Landmarks:** one `h1` (hero). One `h2` per section header. Card titles are `h3`.
- **Budgets** (Lighthouse mobile, production build `npm run build && npm run start`):
  - Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95.
  - CLS < 0.02, LCP < 2.5s.
- No `unoptimized` on any `next/image` (grep must return 0).

---

## 10. Execution plan (overnight)

| # | Phase | Timebox | Commit message prefix |
|---|---|---|---|
| 0 | `git fetch origin && git switch -c feature/art-direction-v1 origin/docs/art-direction-spec`, restore images (§1), `npm ci`, baseline screenshots of production at the 6 widths into `docs/art-direction/qa/before/` | 30 min | `chore:` |
| 1 | Foundation: tokens (§3), `site.css` + `ea/base`, `type`, `layout`; archive legacy CSS (§2); remove the components in §2.6. The site will look unstyled, which is expected. | 60 min | `feat(system):` |
| 2 | Images: `scripts/art-direct.mjs`, generate `public/art/**`, check `crops-rendered.jpg` against `crops-final-preview.jpg`, add `art` fields. Video: `scripts/encode-video.mjs`, pick segments from frames, encode loops/films/posters (§5.6), add video fields | 75 min | `feat(art):` |
| 3 | Sections in order: nav → hero → about → projects → case study → engagements → services → experience → footer. **Build and screenshot after each section, one commit per section.** | 4 h 30 min | `feat(<section>):` |
| 4 | QA pass (§11), fix every failure | 60 min | `fix(qa):` |
| 5 | Open PR → wait for the Vercel preview → run §11 against the **preview URL** → merge gate (§12) | 30 min | none |

If you fall behind, **never skip QA (phase 4)**. Ship fewer sections to the same standard instead: stop at the last fully passing section, and in the remaining sections keep the existing markup working (see the fallback in §12).

---

## 11. Acceptance gates (all must pass)

Write `scripts/qa/shoot.mjs` (Playwright, Chromium). For each width in **375, 768, 1024, 1280, 1440, 1920** (height 900), save a full-page screenshot plus per-section screenshots to `docs/art-direction/qa/after/<width>/`.

Then check, and record the result in the report:

**System**
- [ ] `grep -c '!important' src/styles/ea/*.css` → 0 (only the reduced-motion block is allowed).
- [ ] `grep -rnE '#[0-9a-fA-F]{3,8}\b' src/styles/ea src/components src/app/page.tsx` → 0 matches, except inside `tokens.css`.
- [ ] Every `font-size`, `line-height`, `gap`, `margin`, `padding` value in `ea/*.css` is a `var(--ea-…)` token, `0`, or a value explicitly given in this spec.
- [ ] Only Cormorant 300/400 (plus italic 300) and Inter 400/500 render. Check computed styles of all text nodes with Playwright.
- [ ] No text node has a computed `font-size` < 12px.

**Images**
- [ ] Every image in `#projects` and `#project-snippets`: `naturalWidth > 0`, computed `object-fit: cover`, and the rendered frame ratio is within ±1% of 16:10 or 4:3.
- [ ] No image frame shows background color at any width. Sample the 4 corner pixels of each frame in the screenshot; they must not equal the section surface color.
- [ ] Each served image is ≥ 1.5× its rendered CSS width (`currentSrc` width ÷ rendered width) at 1440 and 375. Log the flagged low-res sources instead of failing on them.
- [ ] `grep -rn 'unoptimized' src` → 0.

**Layout & rhythm**
- [ ] `document.documentElement.scrollWidth === innerWidth` at all 6 widths. No horizontal overflow.
- [ ] Every `.ea-section` has an identical computed `padding-top`/`padding-bottom` at a given width (hero excepted).
- [ ] Every section header's left edge equals the container content edge (±1px) at all widths.
- [ ] Nothing overlaps: nav vs. content at load, buttons vs. text, any `position: absolute` children inside cards. Check with bounding boxes.
- [ ] The nav pill is centered at every width (|left gap − right gap| ≤ 1px).

**Contrast & a11y**
- [ ] Run axe-core (inject from `node_modules` or a CDN in Playwright): 0 serious or critical violations.
- [ ] Lighthouse budgets in §9 (mobile).
- [ ] Keyboard: Tab reaches every interactive element in visual order, the focus ring is visible, Esc closes the menu and the case study.

**Behavior**
- [ ] All 6 projects open the case study, and "Next project" cycles through them.
- [ ] The filters filter. The counter and prev/next work. No autoplay (the project shown stays the same for 10s).
- [ ] Services accordion: open, close, `aria-expanded` toggles.
- [ ] No console errors. Network: zero 404s. Nothing under `/projects/**/*.mp4` is requested; only `/art/video/*`.
- [ ] Kayanee and Qiddiya cards play their loop when active and visible, on desktop **and** at 375 px (check `video.paused === false` and `currentTime` advancing). The still-to-video swap shows no jump.
- [ ] With `prefers-reduced-motion: reduce` emulated, no video plays and the stills show. "Pause motion" stops the loop.
- [ ] Kayanee, Qiddiya and Augoor case studies open on a playable film; the Kayanee beat film plays at 1.75×.
- [ ] Every `public/art/video/*-loop.mp4` ≤ 3.5 MB and every `*-film.mp4` ≤ 12 MB (`ls -l`).

**Visual review (art direction): look at every screenshot yourself**
- [ ] Each image's subject sits where `crops-final-preview.jpg` shows it.
- [ ] No orphans (single words alone on the last line) in display or title text at any width. Fix with `text-wrap: balance` or copy-safe `&nbsp;`.
- [ ] No two adjacent blocks compete for attention. The hierarchy reads hero → section title → item title → body → meta.

---

## 12. Ship protocol

1. Push `feature/art-direction-v1` and open a PR to `main` titled **"Art direction v1: unified design system"**. In the body, link this spec, list every acceptance gate with ✅/❌, and attach 375 and 1440 screenshots of each section (before → after).
2. Wait for the Vercel preview check to pass. Run §11 against the **preview URL**.
3. **Merge gate:** merge to `main` (merge commit, not squash) **only if every gate is ✅ and the time is before 05:45.** Production deploys automatically. Then confirm on `https://experiencearchitect.design` that the production build serves the new design: check that `.ea-section` exists in the HTML and that none of the old `.balanced-*` classes do.
4. **If any gate is ❌:** do **not** merge. Leave the PR open with the preview URL, so Silvana reviews the preview at 06:00 instead of production.
5. **Rollback** (if production breaks after merge): `git revert -m 1 <merge-sha>` on a branch `revert/art-direction-v1`, open a PR, merge it, and confirm production is restored.

---

## 13. Morning report (write to `docs/art-direction/REPORT.md` and put it in the PR body)

1. **Status:** merged to production / preview only (and why).
2. **Links:** preview URL, production URL, PR URL.
3. **Gate table** (§11) with ✅/❌ and notes.
4. **Before/after** screenshot pairs (375 + 1440) for each section.
5. **Decisions made where the spec was silent:** one line each.
6. **Asset requests** (§5.5) plus any new ones.
7. **Open questions for Silvana:** max 5, each answerable with yes/no.

---

## 14. Defaults chosen on Silvana's behalf (she may override after review)

These are deliberate art-direction calls made to finish overnight. Implement them as specified.

1. Section headers are **left-aligned** with numbered eyebrows (`01 — About` …). They are no longer centered.
2. The hero gains a `SILVANA RESTREPO` eyebrow above the H1.
3. Filter chips become **text tabs**. Carousel dots become a **counter** with prev/next. **Autoplay is removed.**
4. **All image overlays are removed** from cards (year/category chips, expand button, industry pills).
5. The **section indicator, custom cursors, chromatic field and topographic texture are removed**.
6. Projects and Selected engagements share **one continuous ink band**.
7. The experience **curve is replaced** by a straight 7-step timeline.
8. The footer statement moves to **Cormorant display** (from italic sans-serif).
9. Nav gains **CONTACT**. The mobile menu becomes a full-screen sheet.
10. Card images use **new hero choices**: Augoor key art, Qiddiya aerial, GCC scene. The case-study `image` fields are unchanged.
11. **Video returns.** Kayanee and Qiddiya cards play a muted 8–12 s loop; Kayanee, Qiddiya and Augoor case studies open on the full film. GCC/stc has no video file in the repo, so it ships as a still until Silvana supplies one.

---

## Appendix A: files in this folder

| File | Purpose |
|---|---|
| `SPEC.md` | This document |
| `crops.json` | Validated crop boxes (fractions of source) for 6 project and 8 snippet images |
| `crops-final-preview.jpg` | What each crop must look like. Use it as the visual reference for §11 |
| `source-contact-sheet-1.jpg`, `source-contact-sheet-2.jpg` | Uncropped sources, for context |

## Appendix B: current-state facts (measured 2026-11-23, production)

- Section `h2` sizes vary between 51.2px and 56px today. Project-card meta was 10px `#4A5568` on ink (2.3:1). "Each role was fieldwork." is 11px at 45% opacity (~2:1). All of these are resolved by §4 and §3.1.
- The project card media frame on desktop is about 400×333 and uses `object-contain` with 2.1:1 sources, which caused the empty space Silvana flagged. §7.4 fixes it.
- Global `img { image-rendering: … }` overrides were set to `auto` on 2026-11-23. Keep `auto`; never reintroduce `crisp-edges` or `-webkit-optimize-contrast`.
- The services coral (`--coral-text` → `--coral-surface-deep`) and full-opacity text-on-coral shipped on 2026-11-23 and measure ≥ 4.7:1.
