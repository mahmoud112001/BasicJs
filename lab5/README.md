# 🖱️ Lab 05 — DOM Manipulation

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad

---

## 📁 File Structure

```
lab5/
├── index.html                      ← Lab landing page
├── index-style.css                 ← Landing page styles
│
├── lec notes/                      ← Lecture notes & agenda
│   ├── agenda.md
│   ├── app.js
│   ├── lab.md
│   └── lecturenotes.md
│
├── screenshots-answer-before/      ← Original exercise screenshots
│   ├── Q1.png
│   ├── Q2.png
│   ├── Q3.png
│   └── Q4.png
│
├── task01-profile-card/
│   ├── task01-profile-card.html
│   ├── task01-script.js
│   └── task01-style.css
│
├── task02-task-list/
│   ├── task02-task-list.html
│   ├── task02-script.js
│   └── task02-style.css
│
├── task03-theme-switcher/
│   ├── task03-theme-switcher.html
│   ├── task03-script.js
│   └── task03-style.css
│
└── task04-image-gallery/
    ├── task04-image-gallery.html
    ├── task04-script.js
    └── task04-style.css
```

---

## 📑 Tasks Overview

| # | Task | Key Concepts |
|---|---|---|
| 01 | Profile Card | `getElementById`, `textContent`, `trim()`, `classList` |
| 02 | Task List | `createElement`, `appendChild`, `removeChild`, `filter()` |
| 03 | Theme Switcher | `classList.add/remove`, CSS Variables, transitions |
| 04 | Image Gallery | `innerHTML`, `querySelectorAll`, data attributes, event delegation |

---

## 1. Task 01 — Profile Card

### 📌 Description
A dynamic profile card where the user can update the name and bio fields in real time using DOM manipulation.

### ✨ Features
- Update name and bio via input fields
- Avatar automatically updates initials from new name
- Inline validation — empty input shows error message
- Card flashes green + border animation on successful update
- Toast notification on update
- Enter key submits the form

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Validation** | No feedback — just `return` silently | Red border + error message under input |
| **Feedback** | ❌ None | ✅ Toast `✅ Name updated!` |
| **Avatar** | ❌ None | ✅ Shows initials, updates with name |
| **Animation** | ❌ None | ✅ Card pulse + green border flash |
| **Enter key** | ❌ Not supported | ✅ Enter submits |
| **Validation logic** | `split(" ").join("") === ""` | `.trim() === ""` — correct and simpler |

### 🧠 Concepts Used
```js
document.getElementById()    // select element by ID
element.textContent           // update text content
input.value.trim()            // get and clean input value
element.classList.add()       // add CSS class
element.classList.remove()    // remove CSS class
addEventListener('keydown')   // keyboard event
```

---

## 2. Task 02 — Task List

### 📌 Description
A full CRUD task manager — add tasks, mark as done, delete, filter by status, and clear completed tasks.

### ✨ Features
- Add tasks with Enter key or button
- Click checkbox to toggle done / undone
- Delete individual tasks
- Filter tabs: All / Active / Done
- Stats counter: `Total: 5 · Done: 2`
- Clear Done button removes all completed tasks
- Empty state message when no tasks
- Slide-in animation on new task
- Toast notifications

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Validation** | Silent return — no feedback | Error message under input |
| **Done state** | ❌ Not available | ✅ Toggle complete / undo |
| **Delete** | `removeChild(li)` — index fragile | ID-based delete with `filter()` |
| **Filter** | ❌ Not available | ✅ All / Active / Done tabs |
| **Stats** | ❌ None | ✅ Live total and done count |
| **Empty state** | ❌ None | ✅ `📋 No tasks here yet!` |
| **Animation** | ❌ None | ✅ Slide-in on add |
| **Unique IDs** | ❌ None | ✅ `Date.now()` per task |

### 🧠 Concepts Used
```js
document.createElement()     // create new DOM element
element.appendChild()         // add element to DOM
element.classList.toggle()    // toggle CSS class
array.filter()                // filter tasks by status
array.find()                  // find task by ID
Date.now()                    // unique ID generation
addEventListener('keydown')   // Enter key support
```

---

## 3. Task 03 — Theme Switcher

### 📌 Description
Switch between 5 color themes using CSS Custom Properties (Variables) and `classList` toggling on the `<body>` element.

### ✨ Features
- 5 themes: Dark · Light · Ocean · Sunset · Forest
- Color swatches preview each theme
- Active theme marked with `✓` indicator
- Active theme name shown in badge
- Smooth `0.4s` transition on all color changes
- No inline styles — pure CSS Variables

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Themes** | 3 (light, dark, blue) | ✅ 5 (Dark, Light, Ocean, Sunset, Forest) |
| **Styling method** | `classList` + duplicate `style.backgroundColor` | ✅ CSS Variables only — no inline styles |
| **Active indicator** | ❌ None | ✅ `✓` badge + active border |
| **Transitions** | ❌ Instant jump | ✅ Smooth `0.4s` transition |
| **Theme badge** | ❌ None | ✅ Shows current theme name |

### 🧠 Concepts Used
```js
document.body.classList.add()       // apply theme class
document.body.classList.remove()    // remove old theme
querySelectorAll('.theme-btn')      // select all buttons
element.classList.add('active')     // mark active button

/* CSS */
:root { --bg: #0d1117; }            // CSS Variables
body.theme-light { --bg: #f4f6fb; } // theme override
transition: background 0.4s;        // smooth change
```

---

## 4. Task 04 — Image Gallery

### 📌 Description
An interactive image gallery with dynamic card rendering, category filtering, and a click-to-preview lightbox.

### ✨ Features
- Images rendered dynamically from a JS array
- Filter by category
- Click image to open fullscreen lightbox
- Keyboard support: `Escape` closes lightbox
- Hover overlay with image title

### 🧠 Concepts Used
```js
array.map()                         // render image cards
element.innerHTML                   // inject HTML dynamically
querySelectorAll()                  // select multiple elements
data-* attributes                   // store category per image
event delegation                    // single listener for all cards
addEventListener('keydown')         // Escape to close lightbox
```

---

## 🛠️ Global Improvements (All Tasks)

| Improvement | Details |
|---|---|
| **Separated files** | Each task split into `.html` + `.css` + `.js` |
| **No inline styles** | All styles in external `.css` files |
| **`var` → `const`/`let`** | Modern block-scoped variables |
| **Validation** | Every input validated before processing |
| **Toast feedback** | Non-blocking success messages |
| **Enter key** | All inputs support Enter to submit |
| **Dark theme UI** | Consistent GitHub-inspired dark design |

---

*Lab 05 — ITI ICC Program · Full-Stack MEARN Track · 2026*