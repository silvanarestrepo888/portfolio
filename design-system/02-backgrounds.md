# Background System — experiencearchitect.design

**Token file:** `src/styles/tokens.css`
**Core files:** `src/styles/topographic-luxury.css`, `src/styles/landor-luxury-elevation.css`, `src/styles/art-direction.css`

---

## Philosophy

Backgrounds here are not decoration — they are the atmosphere that makes Silvana's work feel like a place. The system operates on three principles:

1. **Invisible by default.** Every texture, gradient, and glow is subtle enough to disappear if you're not looking. The moment you notice the background, it has failed.
2. **Coral at near-zero opacity.** The brand color (#FF6663) appears throughout as texture — at 2–12% opacity — not as a color. This creates warmth without shouting.
3. **Layered, not flat.** Every section has 2–4 stacked background layers. Each layer has one job. They never fight each other.

---

## Layer Architecture

Every section on the page builds its background from these four layers, bottom to top:

```
Layer 4 — Content          z-index: 10+   Your actual content
Layer 3 — Radial accent    z-index: 3     Soft coral glow, top-right (desktop only)
Layer 2 — Topographic      z-index: 1–2   Section-specific pattern (::after)
Layer 1 — Paper texture    z-index: 1     Micro diagonal grid (::before)
Layer 0 — Base surface     z-index: 0     The vanilla gradient
```

---

## Layer 0 — Base Surface

The ground every section sits on. Always a vanilla tone or gradient.

```css
/* Root base — applied to all .topographic-luxury sections */
background: #FFFBF7;   /* ← should be var(--vanilla) */

/* About section */
background: linear-gradient(135deg, #FDFCF8 0%, var(--vanilla-warm) 100%);
/* Light vanilla-pure → warmer vanilla-warm */

/* Projects section */
background: linear-gradient(135deg, var(--vanilla-warm) 0%, #FDFCF8 100%);
/* Inverted from about — creates subtle alternating warmth rhythm */

/* Project details overlay */
background: linear-gradient(135deg, var(--vanilla-pure) 0%, var(--vanilla-warm) 100%);
/* Lightest surface to warm — clean reading environment */
```

**Pattern:** sections alternate between light-to-warm and warm-to-light gradients. This creates a gentle visual cadence as you scroll without using different colors.

**Known issue:** `#FDFCF8` is used throughout as "vanilla-whisper" but is not a defined token. The correct token is `var(--vanilla-pure)` = `#FFFEF9`. These are different values. They should be unified.

---

## Layer 1 — Paper Texture (::before)

Defined in `topographic-luxury.css`. Applied to all `.topographic-luxury` sections.

```css
.topographic-luxury::before {
  opacity: 0.02;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 1px,
    rgba(255, 102, 99, 0.03) 1px,   /* ← should be var(--coral-03) */
    rgba(255, 102, 99, 0.03) 2px
  );
  background-size: 4px 4px;
}
```

This is a 4×4px diagonal grid at effectively 0.02 × 0.03 = ~0.06% opacity. Completely invisible to casual viewing — only perceptible when the page is zoomed or against a perfectly white reference. Its job is to prevent the vanilla surface from reading as sterile white.

---

## Layer 2 — Topographic Pattern (::after)

The personality layer. Each section gets a unique geometric pattern, all using coral at ultra-low opacity. Triggered by `data-topographic` attribute on the section element.

```html
<section data-topographic="hero">
<section data-topographic="about">
<section data-topographic="projects">
<section data-topographic="services">
<section data-topographic="experience">
```

Patterns fade in when the section enters the viewport (`.in-view` class added by JS). On desktop, `background-attachment: fixed` creates a subtle parallax effect.

### Pattern Library

| Section | Pattern | Metaphor | Opacity |
|---------|---------|----------|---------|
| `hero` | 40px orthogonal grid + radial center fade | The peak — precise, structured | 0.06 |
| `about` | 50px horizontal lines + slow 60s drift animation | The journey — flowing, temporal | 0.035 |
| `projects` | 42px diagonal crosshatch + 120px radial rings | The terrain — complex, layered | 0.04 |
| `services` | Concentric radial rings at 50px + 60px horizontal lines | The depth — expanding, systematic | 0.035 |
| `experience` | 100px vertical columns + 40px horizontal lines | The timeline — measured, precise | 0.03 |

The drift animation on `about` is the only moving element in the entire background system. It runs at 60 seconds, 10px translateX — imperceptible as movement but felt as life.

---

## Layer 3 — Radial Accent Glow

```css
.topographic-accent {
  position: absolute;
  top: 30%;
  right: -5%;
  width: 40vw;
  height: 40vw;
  background: radial-gradient(
    circle at center,
    rgba(255, 102, 99, 0.08) 0%,
    rgba(255, 102, 99, 0.05) 30%,
    transparent 60%
  );
  filter: blur(60px);
  pointer-events: none;
}
```

A large diffuse coral glow, slightly off-screen to the right. Its role is to make the coral brand color present as light — a warmth in the right side of the peripheral vision — without ever reading as an element. Hidden on mobile for performance.

---

## Hero — Special Case

The hero section has 4 layers instead of 3, because it contains a full-bleed photo:

```
Layer 4 — Content text            z-index: 10
Layer 3 — Color story gradient    z-index: 3     Vanilla wash for text legibility
Layer 2 — Topographic texture     z-index: 1–2   Grid pattern
Layer 1 — Photo                   z-index: 2     opacity: 0.6, brightness(1.0) contrast(1.1)
Layer 0 — Base vanilla surface    z-index: 0
```

The color story gradient reads as:
```css
background: linear-gradient(
  135deg,
  transparent 0%,
  rgba(245, 245, 220, 0.2) 40%,    /* Vanilla wash starts */
  rgba(245, 245, 220, 0.3) 70%,    /* Peak readability zone */
  transparent 100%
);
```

This is intentionally light (max 30% vanilla) so the photo remains the primary visual. The gradient's job is only to lift the text contrast on the lower-right where the headline sits.

---

## Project Details Overlay

The overlay that opens when a project is selected gets a clean vanilla gradient — no topographic texture, no radial glow. This is intentional: the overlay is a focused reading environment. The texture would compete with the project images.

```css
.project-details-overlay {
  background: linear-gradient(135deg, var(--vanilla-pure) 0%, var(--vanilla-warm) 100%);
}
```

The overlay hero section (project image) uses `var(--vanilla-pure)` to `var(--vanilla-warm)` as background behind the image, so the photo sits in a light, airy frame.

---

## Glass Morphism (landor-luxury-elevation.css)

Used exclusively for the gallery zoom lightbox. Not applied to any section background.

```css
.modal-glass-backdrop.active {
  backdrop-filter: blur(40px) saturate(1.8);
  background: radial-gradient(
    ellipse at center,
    rgba(255, 251, 247, 0.02) 0%,
    rgba(255, 102, 99, 0.01) 40%,
    rgba(30, 30, 30, 0.4) 100%
  );
}
```

The effect: the world behind the modal desaturates and darkens at the edges while staying warm at the center — a cinematic vignette. The modal content floats on top with `backdrop-filter: blur(40px)`.

---

## Art Direction (art-direction.css)

Optional layer applied via data attributes. Currently unused in production but architected for future use.

```html
<!-- Sepia mode — slightly warmer paper tone across the whole site -->
<html data-color-mode="gallery-sepia">

<!-- Per-project accent color -->
<section data-project-accent="grapefruit">
```

---

## Accessibility

```css
/* Reduced motion — patterns shown immediately, no animation */
@media (prefers-reduced-motion: reduce) {
  [data-topographic="about"]::after { animation: none; }
}

/* High contrast — all texture removed entirely */
@media (prefers-contrast: high) {
  .topographic-luxury::before,
  .topographic-luxury::after,
  .topographic-accent { display: none; }
}

/* Print — white background, all texture removed */
@media print {
  .topographic-luxury { background: white; }
}
```

---

## Known Issues / Token Debt

| Location | Current value | Should be |
|----------|--------------|-----------|
| `.topographic-luxury` base | `#FFFBF7` (hardcoded) | `var(--vanilla)` |
| Section gradients | `#FDFCF8` (hardcoded, 4 occurrences) | `var(--vanilla-pure)` |
| `.luxury-background-texture` | References `var(--white-bones)` and `var(--stone)` — undefined tokens | Audit and delete or replace |
| All `::after` patterns | `rgba(255, 102, 99, 0.x)` hardcoded | `var(--coral-08)`, `var(--coral-15)`, etc. |
| Layer 3 radial accent | `rgba(255, 102, 99, 0.08)` | `var(--coral-08)` |
