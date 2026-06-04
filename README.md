# White Creek Website

## Project Overview

This repository contains the official website for **White Creek**, a classic rock cover band from the Allgäu region of southern Germany.

The site should be:

* Fast
* Static
* Mobile-first
* Easy to maintain
* Easy to deploy via GitHub Actions
* Built with Gatsby
* No backend required

The website will be deployed as static files to a Plesk-hosted web server.

---

# Design Direction

## Visual Style

The overall style should feel like:

* Classic rock
* Slightly vintage
* Inspired by old concert posters
* Minimalist and clean
* Modern usability
* Not flashy
* No bright saturated colors
* No "corporate" design language

The site should feel authentic and handcrafted.

## Color Palette

### Background

Primary background:

```css
#0f0401
```

Very dark brown-red, almost black.

### Text Colors

Muted warm whites:

```css
#f3eee7
#ddd5c8
```

Warm ocher accents:

```css
#b98b3a
#8f6b2c
#caa56a
```

Use accent colors sparingly.

### General Rule

The site should mostly consist of:

* Dark background
* Light typography
* Occasional ocher highlights

Avoid introducing additional colors unless absolutely necessary.

---

# Typography

Suggested style:

* Headings: elegant serif
* Body: clean sans-serif

Examples:

Headings:

* Cormorant Garamond
* Cinzel
* Libre Baskerville

Body:

* Inter
* Source Sans Pro
* Open Sans

Typography should be highly readable on mobile devices.

---

# Layout Philosophy

Use generous spacing.

Prefer:

* Large imagery
* Strong typography
* Simple navigation

Avoid:

* Carousels
* Autoplay animations
* Excessive effects
* Heavy JavaScript

Subtle fade-ins and hover effects are acceptable.

---

# Site Structure

## Landing Page

Purpose:

Immediately communicate:

* Who White Creek is
* Musical style
* Upcoming shows

Suggested sections:

### Hero

Large band image or atmospheric background.

Content:

* White Creek logo
* Short tagline
* Call-to-action button:

  * Upcoming Shows

### Intro

Short text:

* Who the band is
* Origin in the Allgäu region
* Classic rock focus

### Upcoming Dates Preview

Show next 3 upcoming events.

Button:

* View all dates

### Social Links

Simple icon row.

---

## Band Portrait

Purpose:

Present the band.

Suggested content:

### Band Story

Short history and identity.

### Members

One section per member:

* Photo
* Name
* Instrument
* Short description

### Gallery

A small collection of live photos.

---

## Dates

Purpose:

Display all upcoming shows.

Structure:

```text
Date
Location
Venue
City
```

Future enhancement:

Allow loading dates from a JSON file so updates can be made without editing page code.

---

## Merch

Purpose:

Link visitors to merchandise.

For now:

* Product image
* Product title
* Short description
* External shop link

The page should support future expansion.

---

## Socials

Purpose:

Provide all external links.

Include:

* Twitch
* YouTube
* Instagram
* Facebook
* Spotify (if available)

Use recognizable icons and clear calls to action.

---

# Technical Requirements

## Performance

Target:

* Lighthouse score > 90
* Fast mobile loading
* Minimal dependencies

## Accessibility

* Proper heading hierarchy
* Alt texts for images
* Sufficient contrast ratios

## SEO

Every page should include:

* Title
* Meta description
* Open Graph image support

---

# Content Management

Band members should be able to update:

* Show dates
* Merch links
* Social links

without touching page components.

Prefer storing editable content in:

```text
/content
```

Examples:

```text
/content/dates.json
/content/socials.json
/content/merch.json
```

Pages should consume those files during build time.

---

# Future Ideas

Potential future additions:

* Song repertoire page
* Downloadable press kit
* Contact page
* Embedded live videos
* Band gallery
* Mailing list signup
* "Book White Creek" section

These are optional and should not influence the initial implementation.

---

# Overall Goal

Create a website that feels like a small, authentic rock band rather than a corporate brand.

Prioritize:

1. Readability
2. Simplicity
3. Atmosphere
4. Mobile usability
5. Easy maintenance

---

# Initial Gatsby Structure

The repository root now contains a minimal Gatsby application scaffold that follows the design direction above while keeping JavaScript light and content easy to edit.

## Files and responsibilities

* `package.json` defines the Gatsby project metadata, scripts, Node engine, and the runtime dependencies: Gatsby, React, and React DOM.
* `gatsby-config.js` stores basic White Creek site metadata. The exported configuration object is intentionally small; its values originate from this README project overview and can be reused by future SEO helpers.
* `gatsby-browser.js` imports `src/styles/global.css` once through Gatsby's browser setup so every browser-rendered page receives the same base styles.
* `src/pages/index.js` renders the landing page with a hero, intro copy, upcoming dates preview, and social links.
* `src/pages/band.js` renders the band portrait page with story, member cards, and gallery placeholders.
* `src/pages/dates.js` renders the upcoming shows page with the shared event list and structured event data.
* `src/components/layout.js` provides the shared page shell, masthead, navigation slot, main content, and footer.
* `src/components/navigation.js` provides reusable internal navigation based on the README site structure.
* `src/components/section.js` provides a reusable content-section wrapper for consistent spacing and headings.
* `src/components/event-list.js` provides the reusable event-list presentation used by the landing and dates pages.
* `src/styles/global.css` is the central styling entry point. It defines the design-token custom properties for colors, font stacks, and a mobile-first spacing scale before applying global layout/component classes.

## Component documentation convention

Each exported page or reusable component includes a short JSDoc block that documents:

* Description: what the function renders or configures.
* Dependencies: imported libraries, Gatsby APIs, or local components it relies on.
* Code-customers: which pages or Gatsby runtime features consume it.
* Variables/origin: where important props, constants, or generated values come from.

## Global styling entry point

`src/styles/global.css` is imported by `gatsby-browser.js`, making it the single browser-side entry point for shared styling.

The stylesheet currently defines these custom property groups:

* Colors: `--color-background` (`#0f0401`), primary/secondary text aliases (`--color-text-primary`, `--color-text-secondary`), and three ocher accents (`--color-accent-primary`, `--color-accent-secondary`, `--color-accent-tertiary`). Compatibility aliases such as `--color-text`, `--color-muted`, `--color-accent`, `--color-accent-dark`, and `--color-accent-soft` remain available for existing selectors.
* Typography: `--font-heading` for serif display headings and `--font-body` for readable sans-serif body text.
* Mobile-first spacing: `--space-0` through `--space-24` provide reusable spacing increments, while `--space-page-inline` starts compact on mobile and increases at the tablet breakpoint.
* Layout: `--max-width` controls the readable page width used by the header, footer, hero, and content sections.

When adding new styling, prefer these tokens over hard-coded repeated values so the visual system remains centralized.

## Future removal candidates

* The member and gallery placeholders in `src/pages/band.js` and placeholder records in `src/data/members.json` should be replaced when final member names, instruments, bios, and photos are available.
* The generic social URLs in `src/data/social-links.json` should be replaced with official White Creek links before launch.
* No unused JavaScript modules were identified while adding the global style entry point. Keep reviewing placeholder CSS classes as final imagery and content arrive.

## Local development

```bash
npm install
npm run develop
```

## Production build

```bash
npm run build
```

---

# Content Data

Structured editorial content now lives in `src/data/` so routine updates can be made without changing page component code.

## `src/data/events.json`

Used by the landing page preview and the full dates page. Each event object supports:

* `date`: ISO date (`YYYY-MM-DD`) used for sorting-ready content, the `<time>` element, and formatted display.
* `venue`: venue or event title.
* `city`: city/region display text.
* `location`: short context line, such as the show format or room description.
* `ticketUrl`: optional booking or ticket link.

## `src/data/members.json`

Used by the band portrait member cards. Each member object supports:

* `name`: displayed member name or placeholder role name.
* `instrument`: instrument/role eyebrow text.
* `photo`: optional image path or URL. Empty values intentionally render a styled placeholder until final photos are available.
* `description`: short member bio.

## `src/data/social-links.json`

Used by shared social link components. Each link object supports:

* `label`: visible link text.
* `url`: profile, contact, or mail URL.

## Maintenance Notes

* Future removal candidate: replace placeholder member names/photos in `src/data/members.json` once final band details are supplied.
* Future removal candidate: replace generic Instagram/Facebook URLs in `src/data/social-links.json` with White Creek's production profiles.
* Future removal candidate: replace gallery placeholders in `src/pages/band.js` with a structured gallery data file when final live photos are available.
