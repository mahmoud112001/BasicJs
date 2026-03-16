# JavaScript Day 4 — Lecture Notes

Topics:
- `insertAdjacentElement()` / `insertAdjacentHTML()`
- Events (types, listeners, event object, bubbling/capturing, delegation)
- JSON (`JSON.stringify`, `JSON.parse`)
- Cookies (basics)
- AJAX (XMLHttpRequest + Fetch)

---

## 1) `insertAdjacentElement()` (and friends)

### Why you use it
Adds new DOM nodes **relative to an existing element** without replacing its content.

### Syntax
```js
target.insertAdjacentElement(position, elementNode);
```

### Positions
- `beforebegin`: before the target element itself
- `afterbegin`: inside the target, as the first child
- `beforeend`: inside the target, as the last child
- `afterend`: after the target element itself

Visual idea:
```html
<!-- beforebegin -->
<div id="target">
	<!-- afterbegin -->
	...children...
	<!-- beforeend -->
</div>
<!-- afterend -->
```

### Example
```html
<ul id="list"></ul>
```

```js
const list = document.querySelector('#list');

const li = document.createElement('li');
li.textContent = 'First item';

list.insertAdjacentElement('beforeend', li);
```

### Related helpers
- `insertAdjacentHTML(position, htmlString)`
	- Fast for inserting markup strings (be careful with untrusted input).
- `insertAdjacentText(position, text)`

---

## 2) Events

### Common event types
- Mouse: `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove`, `mousedown`, `mouseup`
- Keyboard: `keydown`, `keyup` (note: `keypress` is mostly deprecated)
- Form: `submit`, `change`, `input`, `focus`, `blur`
- Window: `load`, `resize`, `scroll`, `beforeunload`

### Two ways to attach events

#### A) Inline HTML (not recommended for real projects)
```html
<button onclick="alert('hi')">Click</button>
```

Problems: mixes HTML + JS, harder to maintain, easy to duplicate logic.

#### B) `addEventListener` (recommended)
```js
const btn = document.querySelector('#myBtn');
btn.addEventListener('click', () => {
	console.log('clicked');
});
```

### The event object
When an event happens, your handler receives an object (often named `event` or `e`).

Useful properties:
- `event.type` — event name (`"click"`, `"submit"`, ...)
- `event.target` — the element that originally triggered the event
- `event.currentTarget` — the element the listener is attached to
- `event.key` — pressed key (keyboard events)

Example:
```js
document.addEventListener('click', (e) => {
	console.log('type:', e.type);
	console.log('target:', e.target);
});
```

### Preventing default behavior
Some events have a default browser action.

Example: prevent a form from reloading the page
```js
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	// now you can validate + send data manually
});
```

### Event propagation (bubbling and capturing)
When an event happens on a child element, it can “travel” through the DOM.

- Capturing phase: goes from `window` down to the target
- Target phase: event hits the target
- Bubbling phase: goes back up from target to parents

Most listeners run in bubbling by default.

To listen during capture:
```js
parent.addEventListener('click', handler, { capture: true });
```

### `stopPropagation()`
Stops the event from continuing to other ancestors.

```js
child.addEventListener('click', (e) => {
	e.stopPropagation();
});
```

### Event delegation
Instead of adding listeners to many children, add **one** listener to a parent.

Why it’s useful:
- Works for items added later (dynamic DOM)
- Fewer listeners = simpler + faster

Example: click any list item, even if added later
```html
<ul id="todoList">
	<li data-id="1">Buy milk</li>
	<li data-id="2">Study JS</li>
</ul>
```

```js
const todoList = document.querySelector('#todoList');

todoList.addEventListener('click', (e) => {
	const li = e.target.closest('li');
	if (!li) return; // clicked outside an <li>

	console.log('clicked item id:', li.dataset.id);
	li.classList.toggle('done');
});
```

---

## 3) JSON

### What is JSON?
JSON (JavaScript Object Notation) is a **text format** for data.

Important: JSON is a **string**, not an object.

JSON rules:
- Keys must be in double quotes
- Strings use double quotes
- No functions, no `undefined`, no comments

Example JSON string:
```json
{ "name": "Omar", "age": 20, "skills": ["JS", "HTML"] }
```

### `JSON.stringify()`
Converts a JS value/object into a JSON string.

```js
const user = { name: 'Omar', age: 20 };
const jsonText = JSON.stringify(user);
// "{\"name\":\"Omar\",\"age\":20}"
```

### `JSON.parse()`
Converts a JSON string into a JS object.

```js
const jsonText = '{"name":"Omar","age":20}';
const user = JSON.parse(jsonText);
console.log(user.name); // Omar
```

---

## 4) Cookies (basics)

Cookies are small pieces of text stored by the browser and sent to the server on requests.

### Read cookies
```js
console.log(document.cookie);
```

### Set a cookie
```js
document.cookie = 'theme=dark; path=/; max-age=604800'; // 7 days
```

Notes:
- Cookies are stored as a single string in `document.cookie`.
- `path=/` makes it available on all pages in the site.
- `max-age` is seconds until expiration.
- Cookies are not great for large data; prefer `localStorage` for client-only storage.

---

## 5) AJAX

AJAX means making requests (usually HTTP) from JavaScript without reloading the page.

You commonly:
1) Send request
2) Wait for response
3) Parse data (often JSON)
4) Update the DOM
5) Handle errors

### A) XMLHttpRequest (older style)
```js
const xhr = new XMLHttpRequest();

xhr.open('GET', './users.json');

xhr.onload = () => {
	if (xhr.status >= 200 && xhr.status < 300) {
		const data = JSON.parse(xhr.responseText);
		console.log('users:', data);
	} else {
		console.error('Request failed:', xhr.status);
	}
};

xhr.onerror = () => {
	console.error('Network error');
};

xhr.send();
```

