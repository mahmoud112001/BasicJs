/* ════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════ */
function showOut(id, type = "success") {
  const el = document.getElementById(id);
  el.className = `output show ${type}`;
}
function resetOut(id) {
  document.getElementById(id).className = "output";
}
function setErr(id, msg) {
  document.getElementById(id).textContent = msg;
}
function clearErr(id) {
  document.getElementById(id).textContent = "";
}
function mark(id, isErr) {
  const el = document.getElementById(id);
  el.classList.remove("error", "ok");
  el.classList.add(isErr ? "error" : "ok");
}
function parseArr(inputId, errId) {
  const raw = document.getElementById(inputId).value.trim();
  if (!raw) {
    setErr(errId, "Please enter at least one number.");
    mark(inputId, true);
    return null;
  }
  const parts = raw.split(",").map((s) => s.trim());
  const nums = [];
  for (const p of parts) {
    if (p === "" || isNaN(Number(p))) {
      setErr(errId, `"${p}" is not a valid number.`);
      mark(inputId, true);
      return null;
    }
    nums.push(Number(p));
  }
  clearErr(errId);
  mark(inputId, false);
  return nums;
}
function switchTab(group, name, btn) {
  document.querySelectorAll(`[id^="${group}-"]`).forEach((el) => {
    if (el.classList.contains("tab-panel")) el.classList.remove("active");
  });
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  document.getElementById(`${group}-${name}`).classList.add("active");
  btn.classList.add("active");
}

/* ════════════════════════════════════════════
   EX 1 — ARRAY OPERATIONS
════════════════════════════════════════════ */
function findMax(arr) {
  return Math.max(...arr);
}
function findMin(arr) {
  return Math.min(...arr);
}
function sumArray(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
function removeDuplicates(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}

function runArrMax() {
  const nums = parseArr("arr-input", "arr-err");
  if (!nums) return;
  document.getElementById("arr-res-max").innerHTML =
    `Max = <span style="color:var(--accent);font-weight:700;">${findMax(nums)}</span>  from [ ${nums.join(", ")} ]`;
  showOut("arr-out-max", "success");
}
function runArrMin() {
  const nums = parseArr("arr-input", "arr-err");
  if (!nums) return;
  document.getElementById("arr-res-min").innerHTML =
    `Min = <span style="color:var(--blue);font-weight:700;">${findMin(nums)}</span>  from [ ${nums.join(", ")} ]`;
  showOut("arr-out-min", "success");
}
function runArrSum() {
  const nums = parseArr("arr-input", "arr-err");
  if (!nums) return;
  document.getElementById("arr-res-sum").innerHTML =
    `Sum = <span style="color:var(--green);font-weight:700;">${sumArray(nums)}</span>  (${nums.length} elements)`;
  showOut("arr-out-sum", "success");
}
function runArrDedup() {
  const nums = parseArr("arr-input", "arr-err");
  if (!nums) return;
  const unique = removeDuplicates(nums);
  const removed = nums.length - unique.length;
  document.getElementById("arr-res-dedup").innerHTML =
    `<div style="margin-bottom:8px;">Removed <strong style="color:var(--red);">${removed}</strong> duplicate${removed !== 1 ? "s" : ""}.</div>` +
    `<div class="badge-row">${unique.map((n) => `<span class="badge green">${n}</span>`).join("")}</div>` +
    `<div style="margin-top:6px;color:var(--muted);">[ ${unique.join(", ")} ]  (${unique.length} unique)</div>`;
  showOut("arr-out-dedup", "success");
}
function resetArr(id) {
  resetOut(id);
}

/* ════════════════════════════════════════════
   EX 2 — BOOK LIBRARY
════════════════════════════════════════════ */
const library = { books: [] };

function addBook() {
  const title = document.getElementById("b-title").value.trim();
  const author = document.getElementById("b-author").value.trim();
  const year = document.getElementById("b-year").value.trim();
  let valid = true;

  if (!title) {
    setErr("b-title-err", "Title is required.");
    mark("b-title", true);
    valid = false;
  } else {
    clearErr("b-title-err");
    mark("b-title", false);
  }
  if (!author) {
    setErr("b-author-err", "Author is required.");
    mark("b-author", true);
    valid = false;
  } else {
    clearErr("b-author-err");
    mark("b-author", false);
  }
  if (!year || isNaN(year) || year < 1000 || year > 2100) {
    setErr("b-year-err", "Enter a valid year.");
    mark("b-year", true);
    valid = false;
  } else {
    clearErr("b-year-err");
    mark("b-year", false);
  }

  if (!valid) return;

  library.books.push({ title, author, year: parseInt(year) });
  document.getElementById("b-title").value = "";
  document.getElementById("b-author").value = "";
  document.getElementById("b-year").value = "";
  ["b-title", "b-author", "b-year"].forEach((id) =>
    document.getElementById(id).classList.remove("ok", "error"),
  );
  displayAllBooks();
}

function renderBooks(books, label = "") {
  const container = document.getElementById("lib-books");
  const count = document.getElementById("lib-count");
  if (!books.length) {
    container.innerHTML = `<span style="color:var(--muted);font-size:0.78rem;">No books found.</span>`;
    count.textContent = "";
    return;
  }
  container.innerHTML = books
    .map(
      (b) => `
    <div class="book-item">
      <div class="book-title">📖 ${b.title}</div>
      <div class="book-meta">✍️ ${b.author}  ·  📅 ${b.year}</div>
    </div>`,
    )
    .join("");
  count.textContent = `${label ? label + " — " : ""}${books.length} book${books.length !== 1 ? "s" : ""}`;
}

function displayAllBooks() {
  renderBooks(library.books);
}

function searchBooks(type) {
  if (type === "author") {
    const q = document.getElementById("b-search-author").value.trim();
    if (!q) {
      renderBooks(library.books);
      return;
    }
    renderBooks(
      library.books.filter((b) =>
        b.author.toLowerCase().includes(q.toLowerCase()),
      ),
      `Author: "${q}"`,
    );
  } else {
    const y = parseInt(document.getElementById("b-search-year").value);
    if (isNaN(y)) {
      renderBooks(library.books);
      return;
    }
    renderBooks(
      library.books.filter((b) => b.year === y),
      `Year: ${y}`,
    );
  }
}

function clearLibrary() {
  library.books = [];
  displayAllBooks();
}

/* ════════════════════════════════════════════
   EX 3 — DATE UTILITIES
════════════════════════════════════════════ */
function daysBetween(d1, d2) {
  return Math.abs(new Date(d2) - new Date(d1)) / (1000 * 60 * 60 * 24);
}
function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}
function formatDate(dateStr) {
  const d = new Date(dateStr);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}
function getDayName(dateStr) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date(dateStr).getDay()];
}

function runDaysBetween() {
  const d1 = document.getElementById("d-date1").value;
  const d2 = document.getElementById("d-date2").value;
  let valid = true;
  if (!d1) {
    setErr("d-date1-err", "Select date 1.");
    valid = false;
  } else clearErr("d-date1-err");
  if (!d2) {
    setErr("d-date2-err", "Select date 2.");
    valid = false;
  } else clearErr("d-date2-err");
  if (!valid) return;
  const days = daysBetween(d1, d2);
  document.getElementById("d-res-between").innerHTML =
    `<span style="color:var(--accent);font-weight:700;">${days}</span> day${days !== 1 ? "s" : ""} between ${d1} and ${d2}`;
  showOut("d-out-between", "success");
}

function runLeapYear() {
  const val = document.getElementById("d-year").value.trim();
  if (!val || isNaN(val) || val < 1) {
    setErr("d-year-err", "Enter a valid year.");
    return;
  }
  clearErr("d-year-err");
  const y = parseInt(val);
  const leap = isLeapYear(y);
  document.getElementById("d-res-leap").innerHTML =
    `<span style="color:${leap ? "var(--green)" : "var(--red)"}; font-weight:700;">${y}</span> is ${leap ? "✅ a leap year" : "❌ not a leap year"}.`;
  showOut("d-out-leap", leap ? "success" : "danger");
}

function runFormatDate() {
  const val = document.getElementById("d-format-in").value;
  if (!val) {
    setErr("d-format-err", "Select a date.");
    return;
  }
  clearErr("d-format-err");
  document.getElementById("d-res-format").innerHTML =
    `Formatted: <span style="color:var(--accent);font-weight:700;">${formatDate(val)}</span>`;
  showOut("d-out-format", "success");
}

function runGetDayName() {
  const val = document.getElementById("d-dayname-in").value;
  if (!val) {
    setErr("d-dayname-err", "Select a date.");
    return;
  }
  clearErr("d-dayname-err");
  document.getElementById("d-res-dayname").innerHTML =
    `<span style="color:var(--accent);font-weight:700;">${val}</span> is a <span style="color:var(--purple);font-weight:700;">${getDayName(val)}</span>`;
  showOut("d-out-dayname", "success");
}

/* ════════════════════════════════════════════
   EX 4 — STRING UTILITIES
════════════════════════════════════════════ */
function reverseString(str) {
  return str.split("").reverse().join("");
}
function countVowels(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}
function titleCase(str) {
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/\s+/g, "");
  return clean === reverseString(clean);
}

function runAllStrings() {
  const val = document.getElementById("str-input").value;
  if (!val.trim()) {
    setErr("str-err", "Please enter a string.");
    return;
  }
  clearErr("str-err");

  const pal = isPalindrome(val);
  document.getElementById("str-results").innerHTML = `
    <div style="display:flex;flex-direction:column;gap:10px;">
      <div><span style="color:var(--muted);font-size:0.68rem;text-transform:uppercase;letter-spacing:.1em;">Reversed</span><br>
        <span style="color:var(--accent);">${reverseString(val)}</span></div>
      <div><span style="color:var(--muted);font-size:0.68rem;text-transform:uppercase;letter-spacing:.1em;">Vowel Count</span><br>
        <span style="color:var(--blue);">${countVowels(val)} vowel${countVowels(val) !== 1 ? "s" : ""}</span></div>
      <div><span style="color:var(--muted);font-size:0.68rem;text-transform:uppercase;letter-spacing:.1em;">Title Case</span><br>
        <span style="color:var(--green);">${titleCase(val)}</span></div>
      <div><span style="color:var(--muted);font-size:0.68rem;text-transform:uppercase;letter-spacing:.1em;">Palindrome?</span><br>
        <span style="color:${pal ? "var(--green)" : "var(--red)"};">${pal ? "✅ Yes — it is a palindrome" : "❌ No — not a palindrome"}</span></div>
    </div>`;
  showOut("str-out", "neutral");
}

/* ════════════════════════════════════════════
   EX 5 — TODO LIST
════════════════════════════════════════════ */
let todos = [];

function addTodo() {
  const task = document.getElementById("todo-task").value.trim();
  const priority = document.getElementById("todo-priority").value;
  if (!task) {
    setErr("todo-err", "Please enter a task.");
    return;
  }
  clearErr("todo-err");
  todos.push({ id: Date.now(), task, priority, completed: false });
  document.getElementById("todo-task").value = "";
  renderTodos("all");
}

function completeTodo(id) {
  const t = todos.find((t) => t.id === id);
  if (t) t.completed = !t.completed;
  renderTodos("all");
}

function removeTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  renderTodos("all");
}

const priorityColors = { high: "red", medium: "orange", low: "green" };
const priorityEmoji = { high: "🔴", medium: "🟡", low: "🟢" };

function filterTodo(filter) {
  renderTodos(filter);
}

function renderTodos(filter = "all") {
  const list = document.getElementById("todo-list");
  const filtered =
    filter === "all" ? todos : todos.filter((t) => t.priority === filter);

  if (!filtered.length) {
    list.innerHTML = `<div style="color:var(--muted);font-size:0.82rem;padding:12px 0;">No tasks${filter !== "all" ? ` with ${filter} priority` : ""} yet.</div>`;
  } else {
    list.innerHTML = filtered
      .map(
        (t) => `
      <div class="todo-item ${t.completed ? "done" : ""}">
        <span class="badge ${priorityColors[t.priority]}">${priorityEmoji[t.priority]} ${t.priority}</span>
        <span class="todo-task">${t.task}</span>
        <div class="todo-actions">
          <button class="done-btn" onclick="completeTodo(${t.id})">${t.completed ? "Undo" : "Done"}</button>
          <button class="del-btn" onclick="removeTodo(${t.id})">Delete</button>
        </div>
      </div>`,
      )
      .join("");
  }

  const done = todos.filter((t) => t.completed).length;
  const total = todos.length;
  document.getElementById("todo-stats").textContent = total
    ? `${done}/${total} completed  ·  ${todos.filter((t) => t.priority === "high" && !t.completed).length} high priority pending`
    : "";
}
