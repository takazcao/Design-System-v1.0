# Design System v1.0.0

A comprehensive frontend design system with tokens, components, and patterns for building consistent, accessible user interfaces.

Built with vanilla HTML, CSS, and JavaScript — no frameworks or dependencies required.

## Demo

[![Watch Demo on YouTube](https://img.shields.io/badge/YouTube-Watch%20Demo-red?logo=youtube
+)](https://www.youtube.com/watch?v=4iY6ut52me8)

## Live Preview

Open `index.html` directly in a browser. No build step needed.

## What's Inside

### Foundations

- **Colors** — Full primitive palette ramps (blue, purple, teal, green, amber, red, neutral × 50–900) as CSS custom properties, plus semantic tokens for primary, surface, text, border, and status colors
- **Typography** — Inter (UI) + JetBrains Mono (code), 10-step modular type scale from Display LG to Label
- **Spacing & Sizing** — 4px base-unit scale (`sp-0` through `sp-16`) as CSS variables
- **Elevation** — 4-level shadow system (`shadow-0` to `shadow-3`) with dark mode variants
- **Icons** — 24 curated SVG icons at 20px base with `currentColor` fills
- **Dark Mode** — Full dark theme with `localStorage` persistence

### Components

| Priority | Components                                            |
| -------- | ----------------------------------------------------- |
| P0       | Button, Text Input, Checkbox / Radio / Toggle, Avatar |
| P1       | Badge / Tag, Card, Modal / Dialog, Tooltip            |
| P2       | Toast / Snackbar, Tabs, Table                         |

### Patterns

- Sign In Form
- Empty State
- Dashboard Stats Cards

## File Structure

```
├── index.html   # All sections, components, and patterns (692 lines)
├── index.css    # Design token system, component styles, animations (419 lines)
├── index.js     # Interactive features — theme, modals, toasts, navigation (290 lines)
├── .gitignore
└── README.md
```

## Naming Convention

All component classes use the `ds-` prefix (e.g., `ds-btn-primary`, `ds-input`, `ds-card-elevated`).
CSS variables are namespaced: `color-*`, `sp-*`, `radius-*`, `shadow-*`, `font-*`.

## Features

- Click color swatches to copy hex values to clipboard
- Theme toggle (light / dark) persisted in localStorage
- Scroll-spy sidebar navigation with mobile hamburger menu
- Modal system with 3 size variants, overlay dismiss, and Escape key support
- Toast notifications with auto-dismiss (3.5s)
- Animated hero stat counters on scroll
