# ⚡ Lab 03 — JavaScript Fundamentals

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad

---

## 📑 Table of Contents

1. [Overview](#1-overview)
2. [Exercise 1 — Simple Calculator](#2-exercise-1--simple-calculator)
3. [Exercise 2 — Number Guessing Game](#3-exercise-2--number-guessing-game)
4. [Exercise 3 — Array Processing](#4-exercise-3--array-processing)
5. [Exercise 4 — Multiplication Table](#5-exercise-4--multiplication-table)
6. [Exercise 5 — Pattern Printing (Bonus)](#6-exercise-5--pattern-printing-bonus)
7. [Global Improvements](#7-global-improvements)
8. [Concepts Used](#8-concepts-used)

---

## 1. Overview

This lab covers JavaScript fundamentals through 5 exercises.
The original version used `prompt()` / `alert()` / `document.write()` for I/O.
The improved version replaces all of these with a **full HTML/CSS UI** with proper **validation**, **error messages**, and **interactive feedback**.

| | Old Version | New Version |
|---|---|---|
| **I/O method** | `prompt()` / `alert()` | HTML input fields + output boxes |
| **Validation** | Incomplete / incorrect | Full validation with clear error messages |
| **UI** | Browser dialogs only | Dark-themed UI with cards per exercise |
| **Reset** | ❌ Not available | ✅ Reset button on every exercise |
| **UX** | Blocking popups | Inline, non-blocking feedback |
| **Pattern output** | `document.write()` | Rendered in a styled HTML box |
| **File structure** | `.js` only | Single `.html` file (HTML + CSS + JS) |

---

## 2. Exercise 1 — Simple Calculator

### 📌 Description
Prompts for two numbers and an operation (`+`, `-`, `*`, `/`) then displays the result using a `switch` statement.

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Input** | `prompt()` — blocking dialog | Two `<input type="number">` fields |
| **Operation** | `prompt()` for operator string | Styled `<select>` dropdown |
| **Validation** | `num1/0 != Infinity` — incorrect logic | `isNaN(Number(val))` — correct method |
| **Divide by zero** | ❌ Not handled — returns `Infinity` | ✅ Caught before calculation with error message |
| **Output** | `alert("The result is: " + result)` | Inline result box with color feedback |
| **Error display** | Single generic alert | Per-field error messages under each input |

### 🐛 Bug Fixed
```js
// ❌ OLD — wrong validation logic
if (num1/0 != Infinity || num2/0 != Infinity) {
  alert("Invalid input");
}
// This fails for many valid/invalid cases — e.g. "abc"/0 = NaN, not Infinity

// ✅ NEW — correct validation
if (val === '' || isNaN(Number(val))) {
  // show error
}
```

### ✨ New Features
- Red border on invalid input field
- Green border on valid input field
- Specific error: `"Cannot divide by zero."` when `b === 0`
- Result formatted as: `10 ÷ 4 = 2.5`
- Enter key submits the form

---

## 3. Exercise 2 — Number Guessing Game

### 📌 Description
Generates a random number between 1–10 and lets the user guess using a `while` loop, telling them if their guess is too high or too low and counting attempts.

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Loop** | `while` loop with `prompt()` — blocks browser | Event-driven — no blocking loop |
| **Input** | `prompt()` inside loop | `<input>` field + Guess button |
| **Start/Reset** | ❌ No way to restart | ✅ Start / Play Again / Reset buttons |
| **Attempts display** | Shown only at the end | Live counter updating each guess |
| **Validation** | Partial — checks `isNaN` but wrong method | Validates: empty, non-numeric, out of range (1–10) |
| **Feedback** | `alert("Too low!")` | Inline colored output box |
| **Game state** | No state management | Active / Game Over status pill |
| **UX** | Can't cancel without closing tab | Reset button available anytime |

### 🐛 Bug Fixed
```js
// ❌ OLD — wrong random number (can produce 0)
var randomNumber = Math.random() * 10;
randomNumber = Math.round(randomNumber); // produces 0–10, not 1–10

// ✅ NEW — correct range 1–10
const secretNumber = Math.floor(Math.random() * 10) + 1;
```

### ✨ New Features
- **Enter key** submits the guess
- Input disabled until game starts
- Visual state pills: `Not Started` → `Game Active` → `Game Over`
- Emoji feedback: 📉 Too Low / 📈 Too High / 🎉 Correct

---

## 4. Exercise 3 — Array Processing

### 📌 Description
Loops through `[12, -5, 8, 0, -3, 15, 22, -8, 6]`, separates positive and negative numbers, calculates the sum of positives and counts the negatives.

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Array** | Hardcoded in JS | Editable `<input>` field — user can change numbers |
| **Output** | `console.log()` only — invisible to user | Colored badges + stats box on screen |
| **Zeros** | Counted as positive | Shown separately as a neutral zero count |
| **Validation** | ❌ None | ✅ Each element validated — rejects non-numeric values |
| **Visual** | Text in browser console | Color-coded badges: 🟢 positive / 🔴 negative / ⚪ zero |
| **Stats** | 4 `console.log` lines | Sum, count of negatives, total elements |

### ✨ New Features
- User can type any comma-separated numbers
- Each number rendered as a colored badge
- Stats section shows all results at once
- Validation catches: empty input, letters, special characters

---

## 5. Exercise 4 — Multiplication Table

### 📌 Description
Uses nested loops to create a 10×10 multiplication table with readable formatting.

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Output** | `console.log()` — plain text with spaces | HTML `<table>` rendered on screen |
| **Size** | Hardcoded `10×10` | User-controlled — any size from 2 to 15 |
| **Header** | ❌ No row/column headers | ✅ Header row and column with accent color |
| **Diagonal** | Not highlighted | ✅ Diagonal cells (n×n) highlighted |
| **Formatting** | Manual spaces in string | CSS table styling with borders |
| **Validation** | ❌ None | ✅ Min 2 / Max 15 with error message |

### 🐛 Old Code Issue
```js
// ❌ OLD — output only visible in DevTools console
console.log("---// the answer of fourth exercise ---");
for (var i = 1; i <= 10; i++) {
    var res = " ";
    for (var j = 1; j <= 10; j++) {
        res += (i * j) + " ";
    }
    console.log(res);
}

// ✅ NEW — renders a proper HTML table the user can see
```

---

## 6. Exercise 5 — Pattern Printing (Bonus)

### 📌 Description
Uses loops to print two star patterns — a left triangle and a centered pyramid.

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Output method** | `document.write("*")` — overwrites the entire page | Renders inside a styled `<div>` |
| **Rows** | Hardcoded `5` | User-controlled — 1 to 20 rows |
| **Pattern choice** | Two separate `for` loops, both run | Dropdown to choose Pattern A or B |
| **Character** | `*` plain asterisk | `★` star emoji — more visual |
| **Spacing (Pattern B)** | `&nbsp;&nbsp;` HTML entities | `\u00A0` non-breaking space in JS |
| **Validation** | ❌ None | ✅ Min 1 / Max 20 with error message |

### 🐛 Critical Bug Fixed
```js
// ❌ OLD — document.write() after DOM load ERASES the whole page
document.write("*");

// ✅ NEW — inject into a target element safely
document.getElementById('p-result').innerHTML = lines
  .map(l => `<div>${l}</div>`)
  .join('');
```

---

## 7. Global Improvements

| Improvement | Details |
|---|---|
| **No more `prompt()` / `alert()`** | Replaced with inline HTML I/O — better UX, not browser-blocking |
| **No more `document.write()`** | Replaced with `innerHTML` injection into target elements |
| **No more `console.log()` for output** | All output now visible on-screen to the user |
| **Per-field validation** | Each input has its own error message below it |
| **Visual state feedback** | Green border = valid, Red border = invalid |
| **Reset buttons** | Every exercise can be cleared and re-run |
| **Keyboard support** | Enter key submits Calculator and Guessing Game |
| **Single file** | All HTML + CSS + JS in one `.html` file — easy to open |
| **Dark theme UI** | GitHub-inspired dark theme with yellow JS accent |
| **`var` → `let` / `const`** | Modern JS — block-scoped variables |

---

## 8. Concepts Used

| Concept | Where Used |
|---|---|
| `switch` statement | Exercise 1 — Calculator operations |
| `while` loop (logic) | Exercise 2 — Guessing Game (event-driven rewrite) |
| `Math.floor()` + `Math.random()` | Exercise 2 — Random number generation |
| `for` loop | Exercise 3, 4, 5 — Array, Table, Patterns |
| Nested `for` loops | Exercise 4 — Table rows & columns, Exercise 5 — Patterns |
| `Array.push()` | Exercise 3 — Separating positive/negative |
| `isNaN()` + `Number()` | All exercises — proper numeric validation |
| `parseInt()` / `parseFloat()` | Exercise 1, 2 — Type conversion |
| `split(',')` + `.map()` | Exercise 3 — Parsing user array input |
| `innerHTML` | Exercise 3, 4, 5 — Dynamic DOM rendering |
| `classList.add/remove/toggle` | All exercises — input state (error/ok) |
| `addEventListener` | Exercise 2 — Enter key for guessing |
| `const` / `let` | All exercises — modern variable declarations |
| Template literals | All exercises — string formatting |

---

*Lab 03 — ITI ICC Program · Full-Stack MEARN Track · 2026*