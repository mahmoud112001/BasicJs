# 🎨 Lab 02 — CSS Styling & Layout

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad

---

## 📑 Table of Contents

1. [Bonus Lab 2 — Space Navbar Page](#1-bonus-lab-2--space-navbar-page)
2. [Task Two — Multi-Section Layout](#2-task-two--multi-section-layout)
3. [Concepts Used](#3-concepts-used)
4. [Before vs After](#4-before-vs-after)

---

## 1. Bonus Lab 2 — Space Navbar Page

### 📌 Description

A single-page layout featuring a **sticky navigation bar** with a dropdown menu,
displayed over a **space-themed background** image with a hero content card.

### 🗂️ File
```
bonuslab2.html
```

### ✨ Features

- **Sticky Navbar** — stays at the top while scrolling with glass morphism effect
- **Navigation Links** — Home, About Us, Service, Portfolio, Blog, Contact
- **Pages Dropdown** — `<select>` styled to match the dark theme
- **Hero Card** — glassmorphism card with backdrop blur, gradient top border
- **Arrow Buttons** — `<` `>` navigation buttons replacing the old broken `::before/::after` approach
- **Space Background** — external image with dark overlay + color gradient blobs
- **Read More Button** — gradient CTA button with hover animation

### 🖼️ Design Decisions

| Decision | Reason |
|---|---|
| Dark theme (`#05060f`) | Matches the space background |
| Teal + Purple accents | Cosmic color palette |
| Glass card (`backdrop-filter: blur`) | Depth over the background image |
| `Outfit` + `Space Mono` fonts | Modern + techy feel |
| Arrow buttons instead of `::pseudo` | Pseudo-elements can't be clicked |

### ⚠️ Bugs Fixed from Original

| Bug | Fix |
|---|---|
| `@import` was after `*` reset — invalid CSS | Moved `@import` to first line |
| `::before/::after` arrows had broken `position` | Replaced with real `<button>` elements |
| `greenyellow` hover color — unprofessional | Replaced with teal `rgba` hover |
| `display: inline-block` then `display: flex` on same element | Removed duplicate property |
| No dark overlay on background image — text unreadable | Added `rgba` overlay via `body::after` |

---

## 2. Task Two — Multi-Section Layout

### 📌 Description

A multi-section webpage demonstrating different CSS layout techniques:
a sticky navbar, a text section, a full-width image with overlay,
a responsive card grid, a styled dropdown, and a footer.

### 🗂️ File
```
tasktwo.html
```

### ✨ Features

- **Sticky Navbar** — glass effect with logo and navigation links
- **Hero Text Section** — truncated text with **Read More / Read Less toggle** (JavaScript)
- **Full-Width Image** — with dark gradient overlay and bottom-left caption
- **Card Grid** — 6 cards using CSS Grid (`auto-fill`, `minmax`) — fully responsive
- **Styled Dropdown** — dark-themed `<select>` with custom arrow icon
- **Footer** — simple bottom bar

### 🖼️ Design Decisions

| Decision | Reason |
|---|---|
| Light theme (`#f8f9fc`) | Clean and professional |
| Blue accent (`#2563eb`) | Modern, trustworthy color |
| CSS Grid for cards | Better than `flex-wrap` for equal sizing |
| Text clamp (`-webkit-line-clamp: 6`) | Avoids wall-of-text problem |
| `object-fit: cover` on images | Consistent card image heights |
| Dark dropdown section | Visual contrast at page bottom |

### ⚠️ Bugs Fixed from Original

| Bug | Fix |
|---|---|
| Lorem text was one huge unreadable paragraph | Added Read More toggle with JS |
| Cards used `flex-wrap` — uneven sizes | Replaced with CSS Grid |
| `<img>` had no `height` or `object-fit` — images stretched | Added `height: 180px` + `object-fit: cover` |
| Dropdown used `salmon` background — poor UX | Replaced with dark styled dropdown |
| `.option` CSS doesn't work cross-browser | Removed — browser controls `<option>` styling |
| No footer | Added simple footer |
| Image overlay text had no contrast | Added `linear-gradient` overlay on image |

---

## 3. Concepts Used

| Concept | Where Used |
|---|---|
| `position: sticky` | Navbar in both files |
| `backdrop-filter: blur()` | Glass morphism navbar and card |
| `CSS Grid` (`auto-fill`, `minmax`) | Cards section in Task Two |
| `display: flex` | Navbar layout, card body |
| `object-fit: cover` | Image sections |
| `CSS Variables` (`--accent`, `--bg`...) | Both files — consistent theming |
| `::before` / `::after` pseudo-elements | Overlays and decorative borders |
| `transition` | Hover animations on all interactive elements |
| `z-index` | Layering navbar, overlays, content |
| `@keyframes` | Slide-down navbar, fade-up card animations |
| `appearance: none` | Custom styled `<select>` dropdowns |
| `-webkit-line-clamp` | Text truncation in Task Two |
| JavaScript `classList.toggle()` | Read More/Less button in Task Two |

---

## 4. Before vs After

### Bonus Lab 2

| Before | After |
|---|---|
| `background-color: #333` navbar | Glass morphism navbar ✅ |
| `greenyellow` hover | Teal accent hover ✅ |
| `@import` in wrong position | Moved to first line ✅ |
| Broken pseudo-element arrows | Real clickable `<button>` elements ✅ |
| No dark overlay on bg image | Gradient overlay + color blobs ✅ |

### Task Two

| Before | After |
|---|---|
| Wall of lorem text | 6-line clamp + Read More toggle ✅ |
| `flex-wrap` cards — uneven | CSS Grid — equal and responsive ✅ |
| `salmon` dropdown | Dark styled dropdown ✅ |
| No image overlay | Dark gradient + caption ✅ |
| No footer | Footer added ✅ |

---

*Lab 02 — ITI ICC Program · Full-Stack MEARN Track · 2026*