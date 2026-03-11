# 🌐 Lab 01 — Personal Website

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad

---

## 📑 Table of Contents

1. [Overview](#overview)
2. [Pages](#pages)
3. [File Structure](#file-structure)
4. [Concepts Used](#concepts-used)
5. [Preview](#preview)

---

## Overview

A multi-page personal website built with **pure HTML** as part of Lab 01.
The project covers core HTML concepts including image maps, iframes, tables,
lists, links, and multi-page navigation — all improved with modern CSS styling.

---

## Pages

### 🟠 `welcome.html` — Intro Page
The entry point of the website.

- Animated welcome screen with a **YouTube embed** (`<iframe>`)
- **Auto-redirect** to `home.html` after 10 seconds via JavaScript
- Manual **"Skip Intro"** button

---

### 🟠 `home.html` — Main Page
The personal profile page.

- Full name, age, address, and contact info
- **Phone numbers** listed with `<ol>` ordered list
- **Hobbies** displayed as tags
- University link — [AAST Faculty of Engineering](https://aast.edu/en/)
- **Send Email** link using `mailto:`
- Personal photo using `<img>`
- About me biography section
- Social media links — Facebook, LinkedIn, Gmail, University Email
- Navigation links — Home | About | Contact

---

### 🟠 `bonus.html` — Bonus Page
An interactive image map page.

- **Clickable image map** (`<map>` + `<area>`) with 5 logo zones
- Each zone links to a different website:

| Zone | Link |
|---|---|
| Google | https://www.google.com |
| W3Schools | https://www.w3schools.com |
| YouTube | https://www.youtube.com |
| Facebook | https://www.facebook.com |
| X (Twitter) | https://www.x.com |

- Mobile fallback **Quick Links** buttons
- Back button → returns to `home.html`

---

## File Structure

```
lab1/
├── iamges/              ← images folder
│   ├── 32.jpg           ← personal photo
│   ├── google.png       ← image map source
│   └── bookmark.png     ← navigation icon
├── welcome.html         ← intro / entry page
├── home.html            ← main profile page
├── bouns.html           ← bonus image map page
├── links.txt            ← reference links
└── README.md            ← this file
```

---

## Concepts Used

| Concept | Where Used |
|---|---|
| `<iframe>` | YouTube embed in `welcome.html` |
| `<img>` | Personal photo in `home.html` |
| `<map>` + `<area>` | Clickable image map in `bonus.html` |
| `<table>` | Layout in `home.html` |
| `<ul>` / `<ol>` | Personal info lists |
| `<dl>` `<dt>` `<dd>` | Definition list for personal info |
| `<a href="mailto:">` | Email link |
| `<a href="#id">` | Internal page navigation |
| `target="_blank"` | Open links in new tab |
| CSS Variables | Consistent dark theme |
| CSS Flexbox | Modern layout |
| JS `setInterval` | Auto-redirect countdown |

---

## Preview

```
welcome.html  ──(10s / Skip)──►  home.html  ──(bookmark)──►  bonus.html
                                     ▲                              │
                                     └──────────(back button)───────┘
```

---

*Lab 01 — ITI ICC Program · Full-Stack MEARN Track · 2026*