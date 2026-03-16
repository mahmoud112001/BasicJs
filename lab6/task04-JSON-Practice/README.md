# 📦 JSON Practice

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad

---

## 📁 File Structure

```
task/
├── index.html   ← Page structure
├── style.css    ← All styles (dark + light theme)
├── script.js    ← All JavaScript logic
└── README.md
```

---

## 📌 Description

A JSON practice tool — stringify a users array, parse it back, render it in a table, add/delete users, search by name or email, copy JSON to clipboard, and toggle between dark and light themes with cookie persistence.

---

## ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Table** | Basic `<table>` with ID, Name, Email | ✅ + Action column with Delete button |
| **Add user** | ❌ Not available | ✅ Add user form with validation |
| **Delete user** | ❌ Not available | ✅ Delete button per row (event delegation) |
| **Search** | ❌ Not available | ✅ Live search by name or email |
| **JSON viewer** | ❌ Not shown | ✅ Formatted `JSON.stringify` output with copy button |
| **Email validation** | ❌ None | ✅ Checks for `@` and `.` |
| **Stats** | ❌ None | ✅ Total users + Shown (when searching) |
| **Empty state** | ❌ Blank table | ✅ `👤 No users found.` |
| **Theme toggle** | Basic dark class + cookie | ✅ Dark/Light with smooth transition + emoji button |
| **Theme — dark definition** | `body.dark` in CSS | ✅ `body.light` — dark is default, light is override |
| **`var`** | Used throughout | ✅ Replaced with `const` / `let` |
| **`id` type** | Strings (`"1"`, `"2"`) | ✅ Numbers (`1`, `2`) — consistent typing |
| **Files** | Inline CSS + JS in HTML | ✅ 3 separate files |

---

## 🐛 Issues Fixed

### 1. ID as string vs number
```js
// ❌ OLD — IDs are strings, causes comparison issues
{ "id": "1", "name": 'Alice' }

// ✅ NEW — IDs are numbers
{ id: 1, name: 'Alice' }
// Consistent with parseInt() comparisons and padStart()
```

### 2. Theme logic — dark as default
```js
// ❌ OLD — light is default, dark is added class
// Means you style everything twice — once for light, once for dark

body.dark { background: #121212; }

// ✅ NEW — dark is default (CSS Variables), light overrides
:root { --bg: #0d1117; }        /* dark default */
body.light { --bg: #f4f6fb; }   /* light override */
// Only one set of variables — cleaner and more scalable
```

### 3. No email validation
```js
// ❌ OLD — any string accepted as email

// ✅ NEW — basic format check
if (!email.includes('@') || !email.includes('.')) {
  showErr(emailInput, emailErr, 'Enter a valid email.');
}
```

### 4. JSON.stringify — no formatting
```js
// ❌ OLD — compact unreadable output
var jsonText = JSON.stringify(users);
// → [{"id":"1","name":"Alice","email":"alice@example.com"},...]

// ✅ NEW — pretty-printed with indentation
const jsonText = JSON.stringify(users, null, 2);
// → nicely formatted JSON shown in <pre> block
```

### 5. Delete — event delegation
```js
// ❌ OLD — no delete feature

// ✅ NEW — one listener on tbody handles all delete buttons
tbody.addEventListener('click', e => {
  const btn = e.target.closest('.del-btn');
  if (!btn) return;
  const id = parseInt(btn.dataset.id);
  users = users.filter(u => u.id !== id);
  render();
});
```

---

## 🧠 Concepts Used

| Concept | Where Used |
|---|---|
| `JSON.stringify(data, null, 2)` | Pretty-print users array |
| `JSON.parse(jsonText)` | Parse JSON string back to array |
| `array.filter()` | Search + delete users |
| `array.push()` | Add new user |
| `navigator.clipboard.writeText()` | Copy JSON to clipboard |
| `document.cookie` | Save theme preference |
| CSS Variables + `body.light` | Theme switching |
| `event.target.closest()` | Event delegation for delete |
| `data-id` attribute | Store user ID on delete button |
| `padStart(2, '0')` | Format IDs as `#01`, `#02` |
| `input.addEventListener('input')` | Live search on every keystroke |
| `const` / `let` | Modern variable declarations |

---

*Lab 06 — ITI ICC Program · Full-Stack MEARN Track · 2026*