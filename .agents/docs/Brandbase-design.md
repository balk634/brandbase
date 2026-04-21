---
description: BrandBase Design Philosophy & Systems Guide
---

# 🏛️ BrandBase Design Philosophy

This document serves as the absolute "Source of Truth" for the BrandBase aesthetic. If you are a new designer or developer, follow these rules strictly to ensure visual consistency across the platform.

## 1. Core Vibe: "The Editorial Machine"
BrandBase avoids the "bubbly" SaaS aesthetic. We prioritize **Journalistic Authority**, **Brutalist Precision**, and **Premium Tactility**.

- **Strictly Rectangular**: Zero rounded corners (`borderRadius: 0px`) everywhere.
- **Paper & Ink**: We use a "bone" off-white background and an "ink" slate-dark text to reduce strain and feel authoritative.
- **Editorial Typography**: Mix of high-contrast serifs (Redaction) and functional primitives (Geist).

---

## 2. Color System
| Token | HEX | Usage |
| :--- | :--- | :--- |
| **Paper** | `#f8f8f0ff` | Global background. |
| **Ink** | `#111827` | Primary text and dark elements. |
| **Primary** | `#3436c6` | Brand Indigo. Used for CTAs and highlights. |
| **Grid** | `#3A3A38` | Structural lines (usually @ 15% opacity). |
| **Muted** | `#4B5563` | Secondary text. |

---

## 3. Typography Rules
- **Headlines**: `Redaction` family.
    - **The Italic Rule**: Always italicize the *last word* of a major headline using the `serif-20` (pixelated) variant.
    - **Heading Scale**: H1: `leading-[0.9]`, `tracking-tighter`.
- **Body & Labels**: `Geist Sans`.
- **Measurement/Metadata**: `Geist Mono`.
    - **Kickers**: Uppercase, `tracking-[0.35em]`, `text-[10px]`.

---

## 4. Interaction & Motion
Premium feel comes from subtle, high-quality transitions.

- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)`
- **Duration**: Fast (260ms) | Base (380ms) | Slow (620ms)
- **Hover Effects**:
    - **Cards**: `2px` vertical lift (`--mi-card-hover-lift`) + `4%` icon scale.
    - **Buttons**: `1px` vertical lift + `scale(0.995)` on click.
    - **Links**: Arrow slides `2px` to the right on hover.

---

## 5. Visual Signature Features
- **Mosaic Texture**: A fixed `mosaic.svg` overlay at `10%` opacity that "drifts" (animates) over 40 seconds.
- **Dither**: Hero images use an SVG-based dither overlay (`mix-blend-mode: overlay`) at `15%` opacity.
- **Sharp Grid**: All sections are divided by thin `border-grid/15` lines.
- **Custom Cursor**: A hollow circle border (`#16A34A`) that appears on interactive elements.

---

## 6. Layout Containers
- **Vertical Spacing**: Standard section padding is `py-20` (80px) on desktop.
- **Horizontal Container**: `max-w-7xl` (1280px).
- **Gaps**: Use large breathing room between text and imagery (typically `gap-12` or `gap-24`).

---

> [!IMPORTANT]
> **Never use border-radius.** If a component feels "too sharp," add more padding or adjust the color, but do not round the corners. Consistency is our differentiator.
