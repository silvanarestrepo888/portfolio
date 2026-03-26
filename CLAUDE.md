# CLAUDE.md — experiencearchitect.design

## What this project is
Portfolio of Silvana Restrepo, Principal Experience Architect.
Single-page Next.js site. Every pixel carries professional identity stakes.
The audience makes one judgment: is this person extraordinary?

## Stack (do not change without explicit instruction)
- Next.js 15.5.5 + React 19 + TypeScript
- Tailwind v4 (utility classes, no config file — uses @import "tailwindcss")
- Framer Motion v12 — ALREADY INSTALLED, do not reinstall
- Swiper v12 — ALREADY INSTALLED
- Deployment: Vercel (main branch) + preview URLs per branch

## Design system — single source of truth
Token file: src/styles/tokens.css
ALL design values must come from this file.
NEVER hardcode hex values. NEVER define tokens outside tokens.css.

### The 3-color palette
- Coral: var(--coral) = #FF6663 — strategic impact only (CTAs, hover moments)
- Vanilla: var(--vanilla-warm) = #F5F5DC — surfaces and backgrounds
- Charcoal: var(--charcoal-mid) = #4A5568 — all text and structural elements

### Typography
- Display: var(--font-display) = Playfair Display
- Body: var(--font-body) = Inter
- Scale uses Golden Ratio — defined in tokens.css as --type-xs through --type-4xl

### Animation
- All durations: var(--duration-fast) through var(--duration-cinematic)
- All easing: var(--ease-landor), var(--ease-natural), var(--ease-silk)
- NEVER hardcode 0.3s or cubic-bezier values directly

## Protection rules (non-negotiable)
1. NEVER commit directly to main
2. ALWAYS create a feature branch: git checkout -b feature/[description]
3. NEVER hardcode hex values — use tokens.css
4. NEVER introduce a 4th color into the palette
5. Run npm run build before any commit — fix all errors before pushing
6. NEVER delete files — rename or archive only

## Known CSS architecture issue
Tailwind v4 utility classes have higher specificity than component CSS.
!important is currently required in some places as a result.
Long-term fix: configure @layer in Tailwind. Do not add more !important.
Do not remove existing !important without testing the visual result.

## Section structure
id="hero" → id="about" → id="projects" → id="project-snippets"
→ id="services" → id="experience"
Navigation: FloatingNavigation.tsx + SectionIndicator.tsx

## Commands
- Dev: npm run dev
- Build check: npm run build
- Deploy prod: npm run deploy-prod
