# ⚡ Lab 04 — JavaScript Day Two

> **Course:** Basic HTML, CSS & JavaScript
> **Instructor:** Eng. Omar Mosleh
> **Program:** ITI — ICC Program | Full-Stack MEARN Track
> **Author:** Mahmoud Awad Saad

---

## 📁 File Structure

```
lab4/
├── Screenshots/            ← Exercise output screenshots
│   ├── firstq.png
│   ├── bonusQ.png
│   ├── Q2 part 1.png
│   ├── Q2 part2.png
│   ├── Q3 part 1.png
│   ├── Q3 part 2.png
│   ├── Q4.png
│   ├── Q5 part 1.png
│   └── Q5 part 2.png
├── JS-day-two/             ← Additional day two exercises
├── index.html              ← Full UI for all exercises
├── script.js               ← JavaScript logic
└── .gitignore
```

---

## 📑 Exercises Overview

| # | Exercise | Key Concepts |
|---|---|---|
| 01 | Array Operations | `Math.max`, `Math.min`, `reduce`, `Set` |
| 02 | Book Library | Objects, arrays, search, filter |
| 03 | Date Utilities | `Date`, `getDay`, leap year, formatting |
| 04 | String Utilities | Reverse, vowels, title case, palindrome |
| 05 | Todo List | CRUD, priority filter, DOM rendering |
| Bonus | Deep Copy / Clone | Shallow vs deep copy, `JSON.parse/stringify` |

---

## 1. Exercise 1 — Array Operations

### 📌 Description
Four utility functions for a numbers array: find max, find min, calculate sum, remove duplicates.

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Max/Min** | `.sort()` then take first/last — mutates original array | `Math.max(...arr)` / `Math.min(...arr)` — no mutation |
| **Sum** | `reduce()` — correct ✅ | Same logic, cleaner syntax |
| **Remove Duplicates** | Manual `for` loop with `splice` — buggy with consecutive duplicates | `[...new Set(arr)]` — clean one-liner |
| **Output** | `console.log()` only | Interactive UI with tabs per operation |
| **Validation** | ❌ None | ✅ Each element validated before processing |

### 🐛 Bug Fixed
```js
// ❌ OLD — .sort() mutates the original array
var numbers = [3, 7, 2, 9];
numbers.sort((a, b) => a - b);
var max = numbers[numbers.length - 1]; // array is now sorted — original lost

// ✅ NEW — spread operator, no mutation
const max = Math.max(...arr);
const min = Math.min(...arr);

// ❌ OLD — splice inside loop skips elements
for (var i = 0; i < arr.length - 1; i++) {
  if (arr[i] === arr[i + 1]) { arr.splice(i, 1); i--; }
}

// ✅ NEW — Set removes duplicates instantly
const unique = [...new Set(arr)].sort((a, b) => a - b);
```

---

## 2. Exercise 2 — Book Library

### 📌 Description
A book library system: add books, search by author, search by year, display all.

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Structure** | `library` object + separate `var` functions outside | All methods logically grouped |
| **Search** | Exact string match only | Case-insensitive `includes()` — partial match |
| **Output** | `console.log()` | Rendered book cards in UI |
| **Add feedback** | None | Input validation + success render |
| **Clear** | ❌ Not available | ✅ Clear Library button |
| **Count display** | ❌ None | ✅ Shows result count after search |

### 🐛 Bug Fixed
```js
// ❌ OLD — addBook() was a separate var, not inside library object
var library = { books: [] };
var addBook = function(title, author, year) { ... } // disconnected

// ✅ NEW — proper encapsulation + validation before push
function addBook() {
  if (!title || !author || !year) { /* show error */ return; }
  library.books.push({ title, author, year: parseInt(year) });
}
```

---

## 3. Exercise 3 — Date Utilities

### 📌 Description
Four date helper functions: days between two dates, leap year check, format as MM/DD/YYYY, get day name.

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Input** | Hardcoded date strings in code | `<input type="date">` — user picks any date |
| **daysBetween** | No `Math.abs()` — negative result if dates reversed | `Math.abs()` — always positive |
| **isLeapYear** | `new Date(year).getFullYear()` — unnecessary conversion | Direct `parseInt(year)` |
| **formatDate** | Missing `padStart` — month/day show as `1/5/2024` | `padStart(2,'0')` → `01/05/2024` |
| **getDayName** | `for` loop to find day name by index | Direct `days[getDay()]` lookup |
| **Output** | `console.log()` | Inline result per function |

### 🐛 Bug Fixed
```js
// ❌ OLD — month off by one AND no zero-padding
var month = chageformat.getMonth(); // returns 0-based! Jan = 0
console.log(month + "/" + days + "/" + year); // "0/5/2024" ← wrong!

// ✅ NEW — correct month + zero-padded
const mm = String(d.getMonth() + 1).padStart(2, '0'); // "01"
const dd = String(d.getDate()).padStart(2, '0');        // "05"

// ❌ OLD — for loop to find day name (unnecessary)
for (var i = 0; i < days.length; i++) {
  if (i == whichday) { whichday = days[i]; }
}

// ✅ NEW — direct index access
return days[new Date(dateStr).getDay()];
```

---

## 4. Exercise 4 — String Utilities

### 📌 Description
Four string helper functions: reverse, count vowels, title case, palindrome check.

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **reverseString** | Manual `for` loop | `split('').reverse().join('')` — one line |
| **countVowels** | Manual `for` loop with `indexOf` | `str.match(/[aeiouAEIOU]/g)` — regex |
| **titleCase** | Correct logic ✅ | Same, cleaner |
| **isPalindrome** | `split(" ").join("")` — only removes spaces | `replace(/\s+/g, '')` — removes ALL whitespace |
| **Output** | `console.log()` per function | All 4 results shown together in one output box |
| **Validation** | ❌ None | ✅ Empty input check |

### 🐛 Bug Fixed
```js
// ❌ OLD — only removes single spaces
var withoutspaces = withoutcases.split(" ").join("");
// "A man  a  plan" → still has double spaces

// ✅ NEW — removes ALL whitespace including multiple spaces/tabs
const clean = str.toLowerCase().replace(/\s+/g, '');
```

---

## 5. Exercise 5 — Todo List

### 📌 Description
A todo list system: add tasks with priority, mark complete, remove, filter by priority.

### ⚖️ Old vs New

| Aspect | Old Version | New Version |
|---|---|---|
| **Structure** | `todoList` object + separate `var` functions | Clean functions with shared `todos` array |
| **Complete** | Sets `completed: true` only — no toggle | Toggle: complete ↔ undo |
| **UI** | `console.log()` | Rendered todo items with Done / Delete buttons |
| **Filter** | `getByPriority()` returns array to console | Filter buttons: All / High / Medium / Low |
| **Stats** | ❌ None | ✅ `2/6 completed · 1 high priority pending` |
| **IDs** | No unique IDs — hard to target specific tasks | `Date.now()` as unique ID per task |
| **Validation** | ❌ None | ✅ Empty task check |

### 🐛 Bug Fixed
```js
// ❌ OLD — complete() only sets true, can't undo
todoList.todos[i].completed = true;

// ✅ NEW — toggle
t.completed = !t.completed;

// ❌ OLD — no unique ID makes delete unreliable
todoList.todos.splice(i, 1); // index-based — risky after filter

// ✅ NEW — ID-based delete
todos = todos.filter(t => t.id !== id);
```

---

## 6. Bonus — Deep Copy / Clone

### 📌 Description
Demonstrates the difference between shallow copy and deep copy of objects containing nested arrays.

### Key Findings

| Method | Syntax | Nested Arrays? | Safe? |
|---|---|---|---|
| Assignment `=` | `var b = a` | ❌ Same reference | ❌ No |
| `for...in` loop | Manual key copy | ❌ Arrays still shared | ⚠️ Partial |
| `JSON.parse/stringify` | `JSON.parse(JSON.stringify(obj))` | ✅ Fully independent | ✅ Yes* |

> *`JSON` method doesn't work with `functions`, `undefined`, or `Date` objects inside.

```js
// ❌ SHALLOW — both point to same memory
var newUser = user; // change one → changes both

// ⚠️ FOR...IN — primitive values copied, arrays still shared
for (var key in user) { newUser2[key] = user[key]; }
newUser2.courses.push("Python"); // ← also mutates user.courses!

// ✅ DEEP — fully independent copy
var newUser3 = JSON.parse(JSON.stringify(user));
newUser3.courses.push("Python"); // ← user.courses unchanged ✅
```

---

## 🛠️ Global Improvements

| Improvement | Details |
|---|---|
| **No `console.log()` for output** | All results rendered on screen |
| **Input validation** | Every exercise validates before running |
| **`var` → `let` / `const`** | Block-scoped, safer variables |
| **Tabs UI** | Sub-parts of Ex1 and Ex3 organized in tabs |
| **Reset buttons** | Every exercise can be cleared |
| **Single HTML file** | index.html contains HTML + CSS + JS |

---

## 🧠 Concepts Used

| Concept | Where Used |
|---|---|
| `Math.max()` / `Math.min()` | Ex 1 — Array max/min |
| `Array.reduce()` | Ex 1 — Sum |
| `Set` | Ex 1 — Remove duplicates |
| `Array.filter()` | Ex 2 — Search books, Ex 5 — Filter todos |
| `Array.find()` | Ex 5 — Find todo by ID |
| `Date` object | Ex 3 — All date functions |
| `padStart()` | Ex 3 — Format date MM/DD/YYYY |
| Regex `/[aeiou]/g` | Ex 4 — Count vowels |
| `split/reverse/join` | Ex 4 — Reverse string |
| `JSON.parse/stringify` | Bonus — Deep copy |
| `Date.now()` | Ex 5 — Unique task IDs |
| Template literals | All exercises |
| `const` / `let` | All exercises |

---

*Lab 04 — ITI ICC Program · Full-Stack MEARN Track · 2026*