# 🌐 Basic Web Development — Course Labs

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad
> **GitHub:** [github.com/mahmoud112001/BasicJs](https://github.com/mahmoud112001/BasicJs)

---

## 📁 Project Structure

```
BasicJs/
├── index.html          ← Course landing page (you are here)
├── README.md
│
├── lab1/
│   ├── iamges/         ← Lab 1 image assets
│   ├── welcome.html    ← Intro page with YouTube embed + countdown
│   ├── home.html       ← Personal profile page
│   ├── bouns.html      ← Image map with clickable zones
│   └── README.md
│
├── lab2/
│   ├── images/         ← Lab 2 image assets
│   ├── index.html      ← Multi-section layout (Navbar, Cards, Dropdown)
│   ├── bonus.html      ← Space-themed navbar page
│   └── README.md
│
├── lab3/
│   ├── JS-day-one/     ← Day one JS exercises folder
│   ├── index.html      ← JS Exercises UI (Calculator, Game, Arrays...)
│   ├── script.js       ← JavaScript logic
│   ├── style.css       ← Stylesheet
│   └── readme.md
│
├── lab4/
│   ├── Screenshots/    ← Exercise output screenshots
│   ├── JS-day-two/     ← Day two JS exercises folder
│   ├── index.html      ← JS Exercises UI (Arrays, Library, Dates, Strings, Todo)
│   ├── script.js       ← JavaScript logic
│   └── README.md
│
└── lab5/
    ├── lec notes/      ← Lecture notes and agenda
    ├── screenshots-answer-before/ ← Original exercise screenshots
    ├── task01-profile-card/  ← Profile Card (html + css + js)
    ├── task02-task-list/     ← Task List (html + css + js)
    ├── task03-theme-switcher/ ← Theme Switcher (html + css + js)
    ├── task04-image-gallery/ ← Image Gallery (html + css + js)
    ├── index.html      ← Lab landing page
    ├── index-style.css
    └── README.md
```

---

## 🗂️ Labs Overview

### 🔴 Lab 01 — HTML Fundamentals

**Focus:** HTML structure, multimedia, image maps, navigation

| File | Description |
|---|---|
| `welcome.html` | Intro page — YouTube embed, 10s auto-redirect countdown, Skip button |
| `home.html` | Personal profile — info cards, bio section, FontAwesome social icons |
| `bouns.html` | Image map — 5 clickable zones linking to external sites |

**Key Concepts:**
- `<iframe>` for YouTube embed
- `<map>` and `<area>` for image maps with `coords`
- `<meta http-equiv="refresh">` for auto-redirect
- FontAwesome icons via CDN
- Multi-page navigation with `<a href>`

---

### 🔵 Lab 02 — CSS Styling & Layout

**Focus:** CSS layout techniques, sticky navbar, responsive design

| File | Description |
|---|---|
| `index.html` | Multi-section page — Navbar, Hero text, Image overlay, Card grid, Dropdown, Footer |
| `bonus.html` | Space-themed page — Glass morphism navbar, Hero card, Animated CTA button |

**Key Concepts:**
- `position: sticky` for navbar
- `backdrop-filter: blur()` for glass morphism
- CSS Grid (`auto-fill`, `minmax`) for responsive card layout
- `object-fit: cover` for consistent image sizing
- `-webkit-line-clamp` for text truncation
- CSS Variables (`--accent`, `--bg`, `--text`)
- `@keyframes` animations
- `appearance: none` for custom styled `<select>`
- JavaScript `classList.toggle()` for Read More / Read Less

**Bugs Fixed from Original:**

| Bug | Fix |
|---|---|
| `@import` after CSS reset — invalid | Moved to first line |
| `::before/::after` arrows — broken position | Replaced with real `<button>` elements |
| `greenyellow` hover — unprofessional | Replaced with proper accent color |
| `document.write()` for output | Replaced with `innerHTML` |

---

### 🟡 Lab 03 — JavaScript Fundamentals

**Focus:** Switch, loops, arrays, DOM manipulation, validation

| File | Description |
|---|---|
| `index.html` | Full UI for all 5 exercises |
| `script.js` | JavaScript logic |
| `style.css` | Dark GitHub-inspired theme |
| `JS-day-one/` | Additional day-one JS exercises |

**Exercises:**

| # | Exercise | Key Concepts |
|---|---|---|
| 01 | Simple Calculator | `switch`, `parseFloat`, input validation, divide-by-zero |
| 02 | Number Guessing Game | `Math.floor`, `Math.random`, event-driven logic, game state |
| 03 | Array Processing | `for` loop, `Array.push()`, `split()`, positive/negative separation |
| 04 | Multiplication Table | Nested `for` loops, dynamic HTML `<table>` generation |
| 05 | Pattern Printing (Bonus) | Nested loops, string repetition, `innerHTML` rendering |

**Bugs Fixed from Original:**

| Bug | Fix |
|---|---|
| `num1/0 != Infinity` — wrong validation | `isNaN(Number(val))` — correct method |
| `Math.round(Math.random()*10)` — produces 0 | `Math.floor(Math.random()*10) + 1` — correct 1–10 range |
| `prompt()` / `alert()` — blocking UX | Replaced with HTML input fields + inline output |
| `document.write()` — overwrites entire page | Replaced with `innerHTML` into target element |
| `console.log()` — invisible to user | All output rendered on screen |
| `var` — function-scoped, error-prone | Replaced with `let` / `const` |

---

### 🟠 Lab 04 — JavaScript Day Two

**Focus:** Arrays, Objects, Dates, Strings, DOM CRUD operations

| File | Description |
|---|---|
| `index.html` | Full UI for all 5 exercises + bonus |
| `script.js` | JavaScript logic |
| `Screenshots/` | Exercise output screenshots |
| `JS-day-two/` | Additional day-two JS exercises |

**Exercises:**

| # | Exercise | Key Concepts |
|---|---|---|
| 01 | Array Operations | `Math.max/min`, `reduce`, `Set`, spread operator |
| 02 | Book Library | Objects, arrays, search with `filter`, `includes` |
| 03 | Date Utilities | `Date`, `getDay`, `padStart`, leap year logic |
| 04 | String Utilities | Reverse, vowel count (regex), title case, palindrome |
| 05 | Todo List | CRUD, priority filter, toggle complete, `Date.now()` IDs |
| Bonus | Deep Copy / Clone | Shallow vs deep copy, `JSON.parse/stringify` |

**Bugs Fixed from Original:**

| Bug | Fix |
|---|---|
| `.sort()` to find max/min — mutates array | `Math.max(...arr)` / `Math.min(...arr)` — no mutation |
| Manual `splice` loop to remove duplicates — skips elements | `[...new Set(arr)]` — clean one-liner |
| `getMonth()` without `+1` — off by one | `getMonth() + 1` with `padStart(2,'0')` |
| `for` loop to find day name by index — unnecessary | Direct `days[getDay()]` lookup |
| `split(" ").join("")` — misses multiple spaces | `replace(/\s+/g, '')` — removes all whitespace |
| `completed = true` only — no undo | `completed = !completed` toggle |
| `console.log()` for all output | All results rendered on screen |

---

### 🟣 Lab 05 — DOM Manipulation

**Focus:** DOM interaction, dynamic rendering, event handling, CSS class manipulation

| File | Description |
|---|---|
| `index.html` | Lab landing page — links to all 4 tasks |
| `task01-profile-card/` | Update profile name & bio dynamically |
| `task02-task-list/` | Full CRUD task manager with filters |
| `task03-theme-switcher/` | 5 color themes using CSS Variables |
| `task04-image-gallery/` | Dynamic gallery with lightbox |

**Tasks:**

| # | Task | Key Concepts |
|---|---|---|
| 01 | Profile Card | `getElementById`, `textContent`, `trim()`, `classList`, `keydown` |
| 02 | Task List | `createElement`, `appendChild`, `filter()`, `Date.now()` IDs |
| 03 | Theme Switcher | `classList.add/remove`, CSS Variables, smooth transitions |
| 04 | Image Gallery | `innerHTML`, `querySelectorAll`, data attributes, event delegation |

**Improvements from Original:**

| Improvement | Details |
|---|---|
| Separated files | Each task split into `.html` + `.css` + `.js` |
| Validation | Every input validated with inline error messages |
| Toast feedback | Non-blocking success notifications |
| Enter key support | All inputs submit on Enter |
| `var` → `const`/`let` | Modern block-scoped variables |
| `split(" ").join("")` → `.trim()` | Correct whitespace validation |

---

## 🚀 How to Run

**Locally:**
```bash
git clone https://github.com/mahmoud112001/BasicJs.git
cd BasicJs
# Open index.html in your browser
```

**Or open directly from GitHub Pages:**
> `https://mahmoud112001.github.io/BasicJs/`

---

## 🛠️ Technologies Used

| Technology | Usage |
|---|---|
| HTML5 | Page structure, semantic elements, forms, image maps |
| CSS3 | Layout (Flexbox, Grid), animations, custom properties |
| JavaScript (ES6+) | DOM manipulation, validation, game logic, array & object processing |
| Google Fonts | `Outfit` + `Space Mono` typography |
| FontAwesome | Social media icons in Lab 1 |

---

## 📊 Labs Comparison

| | Lab 01 | Lab 02 | Lab 03 | Lab 04 | Lab 05 |
|---|---|---|---|---|---|
| **Technology** | HTML | CSS | JavaScript | JavaScript | JavaScript |
| **Focus** | Structure & Multimedia | Layout & Styling | Logic & Loops | Objects & Arrays | DOM Manipulation |
| **Pages / Files** | 3 pages | 2 pages | 1 + folder | 1 + folder | 4 tasks + index |
| **Main concept** | HTML elements | CSS layout | Switch, loops, DOM | Objects, dates, strings | DOM, events, classes |
| **Bonus** | Image map | Space navbar | Pattern printing | Deep copy / Clone | Image gallery |
| **README** | ✅ | ✅ | ✅ | ✅ | ✅ |

---

*Basic Web Development Labs — ITI ICC Program · Full-Stack MEARN Track · 2026*