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
* `gatsby-browser.js` imports the global stylesheet once for all Gatsby browser-rendered pages.
* `src/pages/index.js` renders the landing page with a hero, intro copy, upcoming dates preview, and social links.
* `src/pages/band.js` renders the band portrait page with story, member cards, and gallery placeholders.
* `src/pages/dates.js` renders the upcoming shows page with a static event list.
* `src/components/layout.js` provides the shared page shell, masthead, navigation slot, main content, and footer.
* `src/components/navigation.js` provides reusable internal navigation based on the README site structure.
* `src/components/section.js` provides a reusable content-section wrapper for consistent spacing and headings.
* `src/components/event-list.js` provides the reusable event-list presentation used by the landing and dates pages.
* `src/styles/global.css` contains mobile-first global styling, including the dark `#0f0401` background, warm light text, and ocher accents.

## Component documentation convention

Each exported page or reusable component includes a short JSDoc block that documents:

* Description: what the function renders or configures.
* Dependencies: imported libraries, Gatsby APIs, or local components it relies on.
* Code-customers: which pages or Gatsby runtime features consume it.
* Variables/origin: where important props, constants, or generated values come from.

## Future removal candidates

* The event arrays in `src/pages/index.js` and `src/pages/dates.js` are seed content only. Move them into a JSON content file later so dates can be updated without editing page code.
* The member and gallery placeholders in `src/pages/band.js` should be replaced when final member names, instruments, bios, and photos are available.
* The placeholder contact and social URLs in `src/pages/index.js` should be replaced with official White Creek links before launch.

## Local development

```bash
npm install
npm run develop
```

## Production build

```bash
npm run build
```
