# JavaScript Day 4 — Lab 


Rules:
- Use `addEventListener` (no inline `onclick`).
- Use `console.log` while debugging.
- Keep code readable (functions + clear variable names).

---

## Exercise 1 — `insertAdjacentElement` Card Builder

Build a small UI that adds “cards” into a container using `insertAdjacentElement('beforeend', ...)`.

**Requirements**
- Button adds a new card.
- Card contains: title, message, and a delete button.
- New cards should appear at the bottom.

**HTML-ready starter** (save as `ex1.html` if you want)
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ex1 - Card Builder</title>
    <style>
      body { font-family: system-ui, Arial; padding: 16px; }
      #cards { display: grid; gap: 12px; margin-top: 12px; }
      .card { border: 1px solid #ddd; border-radius: 10px; padding: 12px; }
      .row { display: flex; gap: 8px; flex-wrap: wrap; }
      button { cursor: pointer; }
    </style>
  </head>
  <body>
    <h1>Card Builder</h1>

    <div class="row">
      <input id="title" placeholder="Title" />
      <input id="message" placeholder="Message" />
      <button id="addBtn">Add Card</button>
    </div>

    <section id="cards"></section>

    <script>
      const titleInput = document.querySelector('#title');
      const messageInput = document.querySelector('#message');
      const addBtn = document.querySelector('#addBtn');
      const cards = document.querySelector('#cards');

      addBtn.addEventListener('click', () => {
        // TODO: create elements (div.card, h3, p, button)
        // TODO: add text from inputs
        // TODO: insert using cards.insertAdjacentElement('beforeend', card)
        // TODO: clear inputs
      });

      // Bonus: make the delete button remove its own card
    </script>
  </body>
</html>
```

---

## Exercise 2 — Event Object + Keyboard

Make an input that shows:
- what key was pressed (`event.key`)
- the current value of the input

**Requirements**
- Use `keydown` or `keyup`.
- Display results in a `<pre>` element.

**HTML-ready starter**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ex2 - Keyboard Events</title>
    <style>
      body { font-family: system-ui, Arial; padding: 16px; }
      pre { background: #f6f6f6; padding: 12px; border-radius: 10px; }
    </style>
  </head>
  <body>
    <h1>Keyboard Events</h1>
    <input id="text" placeholder="Type here..." />
    <pre id="out">Start typing...</pre>

    <script>
      const input = document.querySelector('#text');
      const out = document.querySelector('#out');

      input.addEventListener('keyup', (e) => {
        // TODO: update the <pre>
        // Suggested output:
        // Key: X
        // Value: ...
      });
    </script>
  </body>
</html>
```

---

## Exercise 3 — Bubbling vs Delegation (Todo List)

Build a todo list where clicking a list item toggles a `done` class.

**Requirements**
- You must use **event delegation**: one listener on the `<ul>`.
- Add new items via a form.
- Use `preventDefault()` on submit.

**HTML-ready starter**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ex3 - Event Delegation</title>
    <style>
      body { font-family: system-ui, Arial; padding: 16px; }
      li { cursor: pointer; padding: 6px 10px; }
      .done { text-decoration: line-through; opacity: 0.6; }
    </style>
  </head>
  <body>
    <h1>Todo</h1>

    <form id="form">
      <input id="todo" placeholder="New todo" required />
      <button>Add</button>
    </form>

    <ul id="list"></ul>

    <script>
      const form = document.querySelector('#form');
      const todoInput = document.querySelector('#todo');
      const list = document.querySelector('#list');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // TODO: create <li>, set text, insert into list
        // Hint: list.insertAdjacentElement('beforeend', li)
      });

      list.addEventListener('click', (e) => {
        // TODO: delegation: find the closest <li>
        // TODO: toggle class 'done'
      });
    </script>
  </body>
</html>
```

---

## Exercise 4 — JSON stringify/parse + Render

Create an array of user objects in JS, convert it to JSON, then parse it back and render the result to the page.

**Requirements**
- Start with an array like:
  - `{ id, name, email }`
- Use `JSON.stringify` then `JSON.parse`.
- Render a `<table>` or `<ul>` with the parsed data.

**HTML-ready starter**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ex4 - JSON</title>
    <style>
      body { font-family: system-ui, Arial; padding: 16px; }
      table { border-collapse: collapse; width: 100%; margin-top: 12px; }
      td, th { border: 1px solid #ddd; padding: 8px; }
    </style>
  </head>
  <body>
    <h1>JSON Practice</h1>
    <button id="run">Run</button>
    <div id="app"></div>

    <script>
      const runBtn = document.querySelector('#run');
      const app = document.querySelector('#app');

      runBtn.addEventListener('click', () => {
        // TODO: make an array of users
        // TODO: stringify -> jsonText
        // TODO: parse -> usersAgain
        // TODO: render usersAgain into a table
      });
    </script>
  </body>
</html>
```

---

## Exercise 5 — AJAX: Load `users.json` and Display + Error Handling

Use `fetch` to load the existing `users.json` file in this folder and display it.

**Requirements**
- Button triggers load.
- Use `try/catch`.
- If request fails, show a friendly error message in the UI.

**HTML-ready starter**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ex5 - Fetch users.json</title>
    <style>
      body { font-family: system-ui, Arial; padding: 16px; }
      .error { color: #b00020; }
      .user { border: 1px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0; }
    </style>
  </head>
  <body>
    <h1>Fetch Users</h1>
    <button id="load">Load Users</button>
    <div id="status"></div>
    <div id="users"></div>

    <script>
      const loadBtn = document.querySelector('#load');
      const statusEl = document.querySelector('#status');
      const usersEl = document.querySelector('#users');

      loadBtn.addEventListener('click', async () => {
        statusEl.textContent = 'Loading...';
        statusEl.className = '';
        usersEl.innerHTML = '';

        try {
          // TODO: fetch './users.json'
          // TODO: if !res.ok throw Error
          // TODO: const data = await res.json()
          // TODO: render data
          statusEl.textContent = 'Done';
        } catch (err) {
          statusEl.textContent = 'Failed to load users.';
          statusEl.className = 'error';
          console.error(err);
        }
      });
    </script>
  </body>
</html>
```

---

### Bonus (Cookies)
Add a “theme toggle” (light/dark) to any exercise and save the preference in a cookie:
- On toggle, set `document.cookie = 'theme=dark; path=/; max-age=604800'`
- On load, read `document.cookie` and apply the theme
