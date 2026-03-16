# 🃏 Card Builder — DOM Manipulation Exercise

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad

---

## 📁 File Structure

```
task/
├── card-builder.html    ← Improved single-file version
├── index.html           ← Original version
├── script.js            ← Original JS logic
├── style.css            ← Original styles
└── README.md
```

---

## 📌 Description

A dynamic card builder where users can type a title and message to create cards on the page. Cards can be deleted individually or all at once.

---

## ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Validation feedback** | Silent `return` + `console.log()` only | ✅ Inline error messages under each input |
| **Input state** | No visual feedback | ✅ Red border on error / Green border on valid |
| **Add feedback** | `console.log('Add button clicked')` | ✅ Toast notification `✅ Card added!` |
| **Delete feedback** | `console.log('Card deleted')` | ✅ Toast `🗑️ Card deleted!` + fade-out animation |
| **Card counter** | ❌ Not available | ✅ Live pill `3 cards` updates on add/delete |
| **Empty state** | ❌ Blank section | ✅ `🃏 No cards yet — add one above!` |
| **Clear All** | ❌ Not available | ✅ Clear All button removes all cards at once |
| **Card numbering** | ❌ No identifier | ✅ `CARD_01`, `CARD_02`... auto-numbered |
| **Delete animation** | Instant removal | ✅ Fade + scale out before removal |
| **Keyboard support** | ❌ Not supported | ✅ Enter in Title → focus Message → Enter adds card |
| **CSS layout** | Basic `border: 1px solid #ddd` | ✅ Dark theme with CSS Variables + grid layout |
| **Font** | `system-ui, Arial` | ✅ `Outfit` + `Space Mono` from Google Fonts |
| **Console logs** | 5 `console.log()` calls | ✅ Removed — all feedback is visual |

---

## 🐛 Bugs / Issues Fixed

### 1. Validation — no visual feedback
```js
// ❌ OLD — user has no idea what went wrong
if (titleText === '' || messageText === '') {
  console.log('Inputs are empty — card not created');
  return;
}

// ✅ NEW — per-field error messages
if (!titleText) {
  setErr('title', 'title-err', 'Title is required.');
  valid = false;
}
if (!messageText) {
  setErr('message', 'message-err', 'Message is required.');
  valid = false;
}
```

### 2. No feedback on actions
```js
// ❌ OLD — only visible in DevTools
console.log('Add button clicked');
console.log('Card deleted:', title);
console.log('Inputs cleared');

// ✅ NEW — visible toast notifications
showToast('✅ Card added!');
showToast('🗑️ Card deleted!');
```

### 3. Delete — instant removal, no animation
```js
// ❌ OLD — abrupt removal
deleteBtn.addEventListener('click', () => {
  card.remove();
});

// ✅ NEW — smooth fade out then remove
deleteBtn.addEventListener('click', () => {
  card.style.opacity = '0';
  card.style.transform = 'scale(0.95)';
  card.style.transition = 'all 0.2s';
  setTimeout(() => {
    card.remove();
    updateStats();
  }, 200);
});
```

### 4. No Enter key support
```js
// ❌ OLD — had to click button every time

// ✅ NEW — keyboard flow
titleInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') messageInput.focus(); // Tab to next field
});
messageInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') handleAddCard();      // Submit
});
```

---

## 🧠 Concepts Used

| Concept | Where Used |
|---|---|
| `document.querySelector()` | Select all DOM elements |
| `document.createElement()` | Create card, title, message, button elements |
| `element.classList.add/remove/toggle` | Error/ok states, empty state, toast |
| `insertAdjacentElement('beforeend')` | Append card to container |
| `card.remove()` | Delete card from DOM |
| `querySelectorAll('.card').length` | Count cards for stats |
| `addEventListener('click')` | Add button, delete button, clear all |
| `addEventListener('keydown')` | Enter key support |
| `setTimeout()` | Delay removal after fade animation |
| `padStart(2, '0')` | Format card numbers `CARD_01` |
| CSS Variables | Consistent dark theme colors |
| CSS Grid `auto-fill` | Responsive card layout |
| `@keyframes slideIn` | Card entrance animation |

---

*Lab 06 — ITI ICC Program · Full-Stack MEARN Track · 2026*