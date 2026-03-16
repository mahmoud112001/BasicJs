# 🌐 Fetch Users — Fetch API Exercise

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad

---

## 📁 File Structure

```
task/
├── index.html   ← Page structure
├── style.css    ← All styles
├── script.js    ← All JavaScript logic
├── users.json   ← User data (10 users)
└── README.md
```

---

## 📌 Description

Fetches a list of users from a local `users.json` file using the **Fetch API** with `async/await`. Renders users as cards with avatar initials, status badge, role, department, location and join date. Includes live search, status filter, skeleton loading, and error handling with retry.

---

## 📊 users.json — Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Users count** | 4 users | ✅ 10 users |
| **Fields per user** | `id`, `name`, `email` | ✅ + `role`, `department`, `location`, `status`, `joined` |
| **Status** | ❌ Not available | ✅ `active` / `inactive` per user |
| **Location** | ❌ Not available | ✅ City, Egypt |
| **Join date** | ❌ Not available | ✅ ISO date format `YYYY-MM-DD` |

---

## ⚖️ Old vs New — HTML/JS

| Aspect | Old Version | New Version |
|---|---|---|
| **Loading state** | Plain text `"Loading..."` | ✅ Animated skeleton cards |
| **Success message** | `"successfly we loaded the users "` (typo) | ✅ `✅ Loaded 10 users successfully` |
| **Error message** | Generic `"Failed to load users."` | ✅ Shows actual error + status code |
| **Error recovery** | ❌ No retry | ✅ Retry button in error state |
| **Error in status** | `throw new Error("Request failed with status ")` — incomplete message | ✅ `Request failed — status 404 (Not Found)` |
| **User card** | Name + Email only | ✅ Avatar, role, department, location, joined date, status badge |
| **Avatar** | ❌ None | ✅ Initials auto-generated from name |
| **Search** | ❌ Not available | ✅ Live search by name, role, department, email |
| **Filter** | ❌ Not available | ✅ All / Active / Inactive tabs |
| **Stats** | ❌ None | ✅ Total shown + Active count + Inactive count |
| **Clear** | ❌ Not available | ✅ Clear button resets everything |
| **Empty state** | ❌ None | ✅ `👤 No users match your search.` |
| **`var`** | Used | ✅ `const` / `let` |
| **Files** | Inline CSS + JS | ✅ 3 separate files |

---

## 🐛 Bugs Fixed

### 1. Incomplete error message
```js
// ❌ OLD — message string cut off
throw new Error("Request failed with status ");
// shows: "Request failed with status " — no actual status code!

// ✅ NEW — includes status code and text
throw new Error(`Request failed — status ${res.status} (${res.statusText})`);
// shows: "Request failed — status 404 (Not Found)"
```

### 2. No Array validation
```js
// ❌ OLD — assumes data is always valid array
const data = await res.json();
renderUsers(data); // crashes if data is null or not an array

// ✅ NEW — validate before rendering
if (!Array.isArray(data) || data.length === 0) {
  throw new Error('No users found in the JSON file.');
}
```

### 3. Typo in success message
```js
// ❌ OLD
statusEl.textContent = 'successfly we loaded the users '; // typo + trailing space

// ✅ NEW
statusMsg.textContent = `✅ Loaded ${allUsers.length} users successfully`;
```

### 4. No loading UI feedback
```js
// ❌ OLD — just changes text
statusEl.textContent = 'Loading...';

// ✅ NEW — skeleton animation while fetching
skeleton.style.display = 'block';  // shows 3 animated skeleton cards
loadBtn.disabled = true;
loadBtn.textContent = '⏳ Loading...';
```

---

## 🧠 Concepts Used

| Concept | Where Used |
|---|---|
| `fetch()` | Load `users.json` from server |
| `async / await` | Handle asynchronous fetch |
| `try / catch` | Error handling |
| `res.ok` | Check HTTP response status |
| `res.json()` | Parse JSON response body |
| `Array.isArray()` | Validate response is an array |
| `array.filter()` | Search + status filter |
| `element.innerHTML` | Render card content |
| `animationDelay` | Staggered card entrance |
| `new Date().toLocaleDateString()` | Format join date |
| `str.split(' ').map(w => w[0])` | Generate initials from name |
| `input.addEventListener('input')` | Live search |
| `data-filter` attribute | Filter button identification |
| `const` / `let` | Modern variable declarations |

---

*Lab 06 — ITI ICC Program · Full-Stack MEARN Track · 2026*