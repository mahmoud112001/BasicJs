# ⌨️ Keyboard Events — DOM Exercise

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad

---

## 📁 File Structure

```
task/
├── index.html    ← Page structure
├── style.css     ← All styles
├── script.js     ← All JavaScript logic
└── README.md
```

---

## 📌 Description

A live keyboard event tracker — type in the input to see the pressed key, key code, modifier keys (Shift, Ctrl, Alt), character count, word count, and a scrollable event log with timestamps.

---

## ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Output** | Single `<pre>` tag showing Key + Value | ✅ Key badge + info pills + event log |
| **Event type** | `keyup` — fires after key release | ✅ `keydown` — fires immediately on press |
| **Key display** | Plain text `"Key: Enter"` | ✅ Large animated badge with flash effect |
| **Key code** | ❌ Not shown | ✅ `code` property shown (e.g. `KeyA`, `Enter`) |
| **Modifier keys** | ❌ Not detected | ✅ Detects Shift, Ctrl, Alt combinations |
| **Special keys** | ❌ Not distinguished | ✅ Special key pill for Enter, Backspace, Arrows... |
| **Char count** | ❌ Not available | ✅ Live `5 characters` counter |
| **Word count** | ❌ Not available | ✅ Live `2 words` counter |
| **Event log** | ❌ Only shows last key | ✅ Scrollable log with timestamp per keystroke |
| **Clear input** | ❌ Not available | ✅ Clear button resets input + stats |
| **Clear log** | ❌ Not available | ✅ Clear Log button empties the log |
| **`var`** | Used throughout | ✅ Replaced with `const` |
| **Files** | Mixed in one HTML file | ✅ Separated: `index.html` + `style.css` + `script.js` |

---

## 🐛 Issues Fixed

### 1. `keyup` vs `keydown`
```js
// ❌ OLD — keyup fires AFTER the key is released
// feels slightly delayed
input.addEventListener('keyup', handleKeyUp);

// ✅ NEW — keydown fires immediately on press
// more responsive and accurate
input.addEventListener('keydown', handleKey);
```

### 2. Missing key properties
```js
// ❌ OLD — only shows key character
var pressedKey = event.key;
out.textContent = "Key: " + pressedKey + "\nValue: " + input.value;

// ✅ NEW — shows key, code, and modifiers
const key  = event.key;    // "A", "Enter", "ArrowUp"
const code = event.code;   // "KeyA", "Enter", "ArrowUp"
const shiftHeld = event.shiftKey;
const ctrlHeld  = event.ctrlKey;
const altHeld   = event.altKey;
```

### 3. No word/char count
```js
// ❌ OLD — no text analysis

// ✅ NEW — live stats
const chars = value.length;
const words = value.trim() === '' ? 0 : value.trim().split(/\s+/).length;
```

### 4. Single output vs event log
```js
// ❌ OLD — only keeps last keystroke
out.textContent = "Key: " + pressedKey + "\nValue: " + currentValue;

// ✅ NEW — prepends new entry, keeps last 50
log.insertAdjacentElement('afterbegin', entry); // newest at top
if (entries.length > 50) entries[entries.length - 1].remove();
```

---

## 🧠 Concepts Used

| Concept | Where Used |
|---|---|
| `addEventListener('keydown')` | Main event listener |
| `event.key` | Get pressed key character |
| `event.code` | Get physical key code |
| `event.shiftKey` / `event.ctrlKey` / `event.altKey` | Detect modifier keys |
| `Set` | Store special key names for O(1) lookup |
| `element.classList.add/remove` | Badge animation, active stats |
| `void element.offsetWidth` | Force reflow to restart CSS animation |
| `insertAdjacentElement('afterbegin')` | Prepend log entries |
| `querySelectorAll` + `.length` | Count and limit log entries |
| `new Date().toLocaleTimeString()` | Timestamp per log entry |
| `str.trim().split(/\s+/)` | Word count using regex |
| `const` / `let` | Modern variable declarations |

---

*Lab 06 — ITI ICC Program · Full-Stack MEARN Track · 2026*