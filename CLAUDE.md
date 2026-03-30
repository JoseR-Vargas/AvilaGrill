# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static restaurant website for **Avila Grill Miami** — no build process, no package manager, no dependencies beyond CDN-hosted libraries.

## Development

Since there's no build step, open `index.html` directly in a browser or serve with any static file server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

## Architecture

- **`index.html`** — Landing page with carousels, promotions, hours, contact, and location
- **`pages/`** — One HTML file per menu category (Appetizers, Burgers, Grilled items, Sides, Hot dogs, Arepas, Cachapas, Kids, Desserts, Drinks, Pepitos, Choripanes)
- **`css/style.css`** — All styles; responsive breakpoint at 550px; uses Bootstrap 5.3.3 via CDN
- **`main.js`** — Only JS in the project: mobile nav open/close toggle
- **`img/`** — Local assets (logos, social icons, promo photos); menu item images are hosted on Cloudinary

## Key Conventions

- **Bootstrap 5.3.3** and **Bootstrap Icons 1.11.3** are loaded from CDN — do not add npm or local copies
- **Custom fonts** (`BAIKAL.ttf`, `UPCLI.TTF`) are in `fonts/` and referenced in `style.css` via `@font-face`
- Every menu page shares the same header/nav/footer structure as `index.html`; when changing nav or footer, update all pages
- Menu item images use Cloudinary URLs; local images live in `img/`
- Content is primarily in Spanish
