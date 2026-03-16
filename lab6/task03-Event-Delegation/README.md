# 🖱️ Event Delegation — Todo List

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
└── README.md
```

---

## 📌 Description

A todo list that demonstrates **Event Delegation** — instead of attaching a click listener to every `<li>`, one listener on the `<ul>` handles all clicks including toggle done and delete.

---

## ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Validation** | `alert()` popup — blocking UX | ✅ Inline error message under input |
| **Number check** | `value / 0 == Infinity` — wrong logic | ✅ `!isNaN(Number(text))` — correct method |
| **Empty check** | `split(" ").join("") === ''` — misses all spaces | ✅ `.trim() === ''` — correct |
| **Toggle done** | Only toggle — no visual checkbox | ✅ Checkbox circle shows `✓` when done |
| **Delete** | ❌ Not available | ✅ Delete button per item (appears on hover) |
| **Filter** | ❌ Not available | ✅ All / Active / Done filter tabs |
| **Stats** | ❌ None | ✅ Live `Total` and `Done` counters |
| **Empty state** | Blank — no feedback | ✅ `📋 No todos yet!` |
| **Clear done** | ❌ Not available | ✅ Clear Done button |
| **Delete animation** | ❌ None | ✅ Slide out before removal |
| **Null check** | `closest('li')` — crashes if no `<li>` found | ✅ `if (!li) return` guard added |
| **`var`** | Used throughout | ✅ Replaced with `const` |
| **Files** | Inline CSS + JS in one HTML | ✅ 3 separate files |

---

## 🐛 Bugs Fixed

### 1. Wrong validation logic
```js
// ❌ OLD — wrong number check
var todoNumVal = todoInput.value / 0;
if (todoNumVal == Infinity) { return alert('input is a number'); }
// "abc" / 0 = NaN (not Infinity) — misses letters!

// ❌ OLD — wrong empty check
var todoTextVal = todoInput.value.split(" ").join("");
if (todoTextVal === '') { ... }
// "   " → "" ✅ but misleading and verbose

// ✅ NEW — correct checks
if (text === '') { showError('Todo cannot be empty.'); return; }
if (!isNaN(Number(text))) { showError('Todo must be text, not a number.'); return; }
```

### 2. `alert()` — blocking UX
```js
// ❌ OLD — blocks the browser, bad UX
return alert('the input is empty please enter a todo');

// ✅ NEW — inline error, non-blocking
function showError(msg) {
  todoInput.classList.add('error'); // red border
  errMsg.textContent = msg;         // message under input
}
```

### 3. `closest('li')` crash — no null check
```js
// ❌ OLD — crashes if user clicks outside any <li>
function handleListClick(event) {
  var clickedItem = event.target.closest('li');
  clickedItem.classList.toggle('done'); // TypeError if null!
}

// ✅ NEW — safe with null guard
function handleListClick(event) {
  const li = event.target.closest('li');
  if (!li) return; // guard — exits if no <li> found
  // ...
}
```

### 4. Event Delegation — delete button
```js
// ✅ Using data-action attribute for delegation
// No need for separate addEventListener per button

// In HTML: <button data-action="delete">Delete</button>

// In the single list listener:
if (event.target.dataset.action === 'delete') {
  li.remove();
  return;
}
// Toggle done otherwise
li.classList.toggle('done');
```

---

## 🧠 Concepts Used

| Concept | Where Used |
|---|---|
| **Event Delegation** | One `click` listener on `<ul>` handles all `<li>` clicks + delete buttons |
| `event.target.closest('li')` | Find the clicked list item from any child element |
| `dataset.action` | Distinguish delete click from toggle click |
| `dataset.filter` | Identify which filter button was clicked |
| `form.addEventListener('submit')` | Handle form submission properly |
| `event.preventDefault()` | Prevent page reload on form submit |
| `isNaN(Number(text))` | Correct numeric validation |
| `.trim()` | Correct whitespace validation |
| `querySelectorAll` + `.forEach` | Select and loop filter buttons |
| `element.style.display` | Show/hide items based on filter |
| `insertAdjacentElement` | Append new todo to list |
| `setTimeout` | Delay removal after fade animation |
| `const` | Modern variable declarations |

---

## 💡 What is Event Delegation?

Instead of attaching a listener to **every item**, attach **one listener to the parent**:

```js
// ❌ Without delegation — a listener per item (expensive)
items.forEach(item => {
  item.addEventListener('click', handler); // N listeners
});

// ✅ With delegation — one listener on parent (efficient)
list.addEventListener('click', (event) => {
  const item = event.target.closest('li'); // find which li was clicked
  if (!item) return;
  // handle click
});
```

**Why it's better:**
- Works for dynamically added items ✅
- Only one listener in memory ✅
- Cleaner, more scalable code ✅

---

*Lab 06 — ITI ICC Program · Full-Stack MEARN Track · 2026*