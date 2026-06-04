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
