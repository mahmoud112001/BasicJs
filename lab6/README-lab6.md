# 🖱️ Lab 06 — Advanced DOM & Fetch API

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad

---

## 📁 File Structure

```
lab6/
├── index.html                        ← Lab landing page
│
├── Lecture-notes/                    ← Lecture notes & agenda
│
├── oldAnswerScreenshots/             ← Original exercise screenshots
│
├── task01-Card Builder/
│   ├── Q1.html
│   ├── Q1-script.js
│   ├── Q1-style.css
│   └── README.md
│
├── task02-Keyboard-Events/
│   ├── Q2.html
│   ├── Q2-script.js
│   ├── Q2-style.css
│   └── README.md
│
├── task03-Event-Delegation/
│   ├── Q3.html
│   ├── Q3-script.js
│   ├── Q3-style.css
│   └── README.md
│
├── task04-JSON-Practice/
│   ├── Q4.html
│   ├── Q4-script.js
│   ├── Q4-style.css
│   └── README.md
│
└── task05-Fetch-API/
    ├── Q5.html
    ├── Q5-script.js
    ├── Q5-style.css
    ├── users.json
    └── README.md
```

---

## 📑 Tasks Overview

| # | Task | Key Concepts |
|---|---|---|
| 01 | Card Builder | `createElement`, `appendChild`, `remove()`, `padStart` |
| 02 | Keyboard Events | `keydown`, `event.key`, `event.code`, modifier keys |
| 03 | Event Delegation | `closest()`, `data-action`, `classList.toggle` |
| 04 | JSON Practice | `JSON.stringify`, `JSON.parse`, `document.cookie`, CSS Variables |
| 05 | Fetch API | `fetch()`, `async/await`, `try/catch`, `res.json()` |

---

## 1. Task 01 — Card Builder

### 📌 Description
Dynamically create styled cards with a title and message. Cards are auto-numbered, can be deleted individually, or all cleared at once.

### ✨ Features
- Add card via button or Enter key
- Cards auto-numbered: `CARD_01`, `CARD_02`...
- Inline validation — empty fields show error messages
- Delete individual card with fade-out animation
- Clear All button removes all cards at once
- Live card counter + empty state
- Toast notifications on add/delete

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Validation** | Silent `return` — no feedback | ✅ Red border + error message per field |
| **Feedback** | `console.log()` only | ✅ Toast notification |
| **Card numbering** | ❌ None | ✅ Auto `CARD_01`, `CARD_02`... |
| **Delete animation** | Instant removal | ✅ Fade + scale before removal |
| **Clear All** | ❌ Not available | ✅ Button clears all cards |
| **Stats** | ❌ None | ✅ Live card counter |
| **Empty state** | Blank | ✅ `🃏 No cards yet!` |
| **Enter key** | ❌ Not supported | ✅ Tab between fields, Enter submits |

### 🧠 Key Concepts
```js
document.createElement()         // create card elements
element.insertAdjacentElement()   // append to container
card.remove()                     // remove from DOM
String(num).padStart(2, '0')      // format CARD_01, CARD_02
element.classList.add/remove      // error/ok visual states
setTimeout()                      // delay removal after animation
```

---

## 2. Task 02 — Keyboard Events

### 📌 Description
A live keyboard event tracker — type in the input to see the pressed key, key code, modifier keys (Shift, Ctrl, Alt), character count, word count, and a scrollable event log with timestamps.

### ✨ Features
- Large animated key badge flashes on each keypress
- Detects special keys: Enter, Backspace, Arrows...
- Detects modifier combinations: Shift+A, Ctrl+C...
- Live character and word count
- Scrollable event log (newest on top, max 50 entries)
- Clear input + Clear Log buttons

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Event type** | `keyup` — fires after release | ✅ `keydown` — fires immediately |
| **Output** | Single `<pre>` — only last key | ✅ Scrollable log with timestamp per keystroke |
| **Key code** | ❌ Not shown | ✅ `event.code` displayed |
| **Modifier keys** | ❌ Not detected | ✅ Shift, Ctrl, Alt detection |
| **Special keys** | ❌ Not distinguished | ✅ Special key pill badge |
| **Char/Word count** | ❌ None | ✅ Live counters |
| **Clear** | ❌ None | ✅ Clear input + Clear log |

### 🧠 Key Concepts
```js
addEventListener('keydown')       // immediate key detection
event.key                         // pressed key character
event.code                        // physical key code (KeyA, Enter)
event.shiftKey / ctrlKey / altKey // modifier key detection
new Set(SPECIAL_KEYS)             // O(1) lookup for special keys
new Date().toLocaleTimeString()   // timestamp per log entry
str.trim().split(/\s+/).length    // word count with regex
```

---

## 3. Task 03 — Event Delegation (Todo List)

### 📌 Description
A todo list that demonstrates Event Delegation — one click listener on the `<ul>` handles all item toggles and deletes using `event.target.closest()`.

### ✨ Features
- Add todos with validation (no empty, no numbers)
- Toggle done / undo per item
- Delete per item (appears on hover)
- Filter: All / Active / Done
- Live stats: Total + Done
- Clear Done button
- Slide-in animation on add

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Validation** | `alert()` + wrong logic | ✅ Inline errors + `isNaN()` |
| **Empty check** | `split(" ").join("") === ''` | ✅ `.trim() === ''` |
| **Number check** | `value / 0 == Infinity` — wrong | ✅ `!isNaN(Number(text))` |
| **null crash** | `closest('li')` no null check | ✅ `if (!li) return` guard |
| **Delete** | ❌ Not available | ✅ Delete per item |
| **Filters** | ❌ None | ✅ All / Active / Done |
| **Clear Done** | ❌ None | ✅ Button clears all done items |

### 💡 What is Event Delegation?
```js
// ❌ Without delegation — N listeners (one per item)
items.forEach(item => item.addEventListener('click', handler));

// ✅ With delegation — 1 listener on parent handles everything
list.addEventListener('click', e => {
  const li = e.target.closest('li'); // find clicked item
  if (!li) return;                   // guard against null
  if (e.target.dataset.action === 'delete') { li.remove(); return; }
  li.classList.toggle('done');       // toggle otherwise
});
```

---

## 4. Task 04 — JSON Practice

### 📌 Description
Stringify and parse a users array, render it in a table, add/delete users, live search by name or email, and toggle between dark/light themes saved in cookies.

### ✨ Features
- `JSON.stringify` with pretty-print (indented 2 spaces)
- Parse back and re-render table
- Copy JSON to clipboard
- Add user with name + email validation
- Delete user (event delegation on tbody)
- Live search by name, email, department
- Dark / Light theme toggle saved in `document.cookie`

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Add user** | ❌ Not available | ✅ Form with validation |
| **Delete user** | ❌ Not available | ✅ Delete per row |
| **Search** | ❌ None | ✅ Live multi-field search |
| **JSON display** | ❌ Not shown | ✅ Pretty-printed in `<pre>` + copy |
| **Email validation** | ❌ None | ✅ Checks `@` and `.` |
| **ID type** | Strings `"1"`, `"2"` | ✅ Numbers `1`, `2` |
| **Theme default** | `body.dark` — light default | ✅ `body.light` — dark default (CSS Variables) |

### 🧠 Key Concepts
```js
JSON.stringify(data, null, 2)     // pretty-print JSON
JSON.parse(jsonText)              // parse back to object
navigator.clipboard.writeText()  // copy to clipboard
document.cookie = 'theme=dark'   // save preference
// CSS Variables for theme switching:
:root { --bg: #0d1117; }
body.light { --bg: #f4f6fb; }
```

---

## 5. Task 05 — Fetch API

### 📌 Description
Fetches users from `users.json` using `async/await`. Shows skeleton loading, renders user cards with avatar initials, status badge, role, department, location and join date. Supports live search, status filter, and retry on error.

### ✨ Features
- Skeleton loading animation while fetching
- User cards with auto-generated initials avatar
- Status badge: Active / Inactive
- Live search by name, role, department, email
- Filter: All / Active / Inactive
- Stats: Total shown + Active count + Inactive count
- Error state with Retry button
- Clear button resets everything

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Loading state** | `"Loading..."` plain text | ✅ Animated skeleton cards |
| **Success message** | `"successfly we loaded"` (typo) | ✅ `✅ Loaded 10 users successfully` |
| **Error message** | Incomplete — no status code | ✅ `Request failed — status 404 (Not Found)` |
| **Retry** | ❌ None | ✅ Retry button in error state |
| **Card design** | Name + Email only | ✅ Avatar, role, department, location, date |
| **Search** | ❌ None | ✅ Live multi-field search |
| **Filter** | ❌ None | ✅ All / Active / Inactive |
| **users.json** | 4 users, 3 fields | ✅ 10 users, 8 fields each |

### 🧠 Key Concepts
```js
const res  = await fetch('./users.json');  // fetch request
if (!res.ok) throw new Error(...)          // check status
const data = await res.json();             // parse JSON body
Array.isArray(data)                        // validate response
// Skeleton loading:
skeleton.style.display = 'block';         // show while loading
skeleton.style.display = 'none';          // hide after load
// Initials avatar:
name.split(' ').map(w => w[0]).join('')   // "Mahmoud Awad" → "MA"
```

---

## 🛠️ Global Improvements (All Tasks)

| Improvement | Details |
|---|---|
| **Separated files** | Each task: `.html` + `.css` + `.js` |
| **`var` → `const`/`let`** | Modern block-scoped variables |
| **Validation** | All inputs validated before processing |
| **Toast notifications** | Non-blocking feedback on all actions |
| **Enter key** | All inputs support Enter to submit |
| **Empty states** | Every list/grid has an empty state |
| **Dark theme** | Consistent GitHub-inspired dark design |
| **Animations** | Slide-in, fade-out, skeleton shimmer |

---

*Lab 06 — ITI ICC Program · Full-Stack MEARN Track · 2026*