# Spacing System — experiencearchitect.design

**Token file:** `src/styles/tokens.css`

---

## Philosophy

The spacing system is built on two mathematical series: **Fibonacci** for atomic values, and **Golden Ratio (φ = 1.618)** for section-level rhythm. The goal is that every gap on the page feels intentional — neither cramped nor wasteful — because the numbers relate to each other the way proportions in nature do.

---

## Tier 1 — Atomic Scale

Primitive tokens. Used for spacing *within* components: gaps between elements, padding inside cards, margins between text blocks.

```css
--space-xs:   4px    →  Icon-to-icon gaps, border offsets, fine detail
--space-sm:   8px    →  Text-to-icon, inline label gaps
--space-md:   16px   →  Paragraph margins, button padding, chip gaps
--space-lg:   24px   →  Card internal padding, form field gaps
--space-xl:   40px   →  Component-to-component gaps within a section
--space-2xl:  64px   →  Section vertical padding, major block separation
--space-3xl:  104px  →  Hero breathing room, maximum dramatic whitespace
```

The sequence is 4 → 8 → 16 → 24 → 40 → 64 → 104.
Ratios between consecutive steps approximate φ (converging toward 1.618 as values grow).

**Rule:** never use a raw pixel or `rem` value where one of these tokens applies.

---

## Tier 2 — Layout Tokens

Composed from Tier 1 values. Govern full-page structure — containers and section rhythm.

```css
/* Horizontal edge padding — fluid, luxury-appropriate */
--container-px:       max(var(--space-xl), 5vw)
                      = max(40px, 5vw)
                      → 40px at ≤ 800px viewport
                      → 60px at 1200px viewport
                      → 70px at 1400px viewport

/* Max-width constraints */
--container-max:      1200px   →  Text-heavy sections (about, services, project detail)
--container-max-wide: 1400px   →  Gallery, project cards, full-bleed grids

/* Vertical section padding */
--section-py:         var(--space-2xl) = 64px
                      →  Top and bottom padding for every main section
```

**`--container-px` is the single horizontal edge token.**
Every container on the site uses this exact value. This is what keeps content vertically aligned as you scroll. When individual sections used different values — `2rem` here, `max(1rem, 3vw)` there, `4rem` somewhere else — content shifted left and right between sections, reading as unprofessional.

**`--section-py` is the vertical breathing token.**
Every section uses `padding-top: var(--section-py); padding-bottom: var(--section-py)`. The gap between the last element of one section and the first element of the next is `64 + 64 = 128px` — the "breath" between major chapters of the page.

---

## How they combine in practice

```
Page edge
│
│ ←── var(--container-px) ──→ │
│                               │
│  Section (padding-top: 64px)  │
│  │                            │
│  │  Heading                   │
│  │  ↕ --space-md (16px)       │
│  │  Subheading                │
│  │  ↕ --space-xl (40px)       │
│  │  Content grid              │
│  │    ↕ --space-lg gaps       │
│  │                            │
│  Section (padding-bottom: 64px)
│
│  ↕ 128px total between sections
│
│  Next section (padding-top: 64px)
```

---

## Responsive behavior

`--container-px` is the only fluid token — it scales with the viewport. Everything else is fixed.

| Viewport | `--container-px` resolves to |
|----------|------------------------------|
| ≤ 800px  | 40px (minimum kicks in) |
| 1000px   | 50px |
| 1200px   | 60px |
| 1400px   | 70px |

`--section-py` stays at 64px at all sizes. A future refinement would be:
```css
--section-py: clamp(var(--space-xl), 8vw, var(--space-2xl));
```
This would bring it down to 40px on small screens for better mobile rhythm.

---

## Decision tree

```
Spacing INSIDE a component? (label ↔ value, icon ↔ text, lines between paragraphs)
  → --space-xs through --space-lg

Spacing BETWEEN components within a section? (below a heading, between cards)
  → --space-xl or --space-2xl

HORIZONTAL EDGE of any page section or container?
  → --container-px (always, no exceptions)

TOP or BOTTOM PADDING of a full page section?
  → --section-py

MAX-WIDTH constraint on a container?
  → --container-max (1200px) for text-heavy content
  → --container-max-wide (1400px) for image grids and galleries
```

---

## Legacy tokens in globals.css

These exist in a `:root` block inside `globals.css` — they pre-date the token cleanup and are still in use by some older component classes.

```css
--section-padding:  var(--space-2xl) = 64px   →  mirrors --section-py
--section-gap:      var(--space-xl)  = 40px   →  component-to-component
--content-gap:      var(--space-lg)  = 24px   →  text block separation
--element-gap:      var(--space-md)  = 16px   →  inline element spacing
--micro-spacing:    var(--space-sm)  = 8px    →  fine-grain detail
```

Long-term: consolidate into Tier 1/2. `--section-padding` becomes `--section-py`, the others become direct `--space-*` references.
