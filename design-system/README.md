# Design System — experiencearchitect.design

**Single source of truth: `src/styles/tokens.css`**
All design decisions live in that file. Documentation here explains the *why* and *how to use* — not the values themselves.

---

## Documents

| File | What it covers |
|------|---------------|
| [01-spacing.md](01-spacing.md) | Atomic scale, layout tokens, container/section rhythm |
| [02-backgrounds.md](02-backgrounds.md) | Surface hierarchy, topographic texture, section gradients, overlay system |

---

## Core principle

Every visible property on this site — spacing, color, timing, texture — must trace back to a token in `tokens.css`. No hardcoded hex. No magic numbers. No one-off values.

When you need to make a design decision and there is no token for it yet, add the token to `tokens.css` first, then use it.
