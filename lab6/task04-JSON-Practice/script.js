// ── Data ─────────────────────────────────
let users = [
  { id: 1, name: 'Alice',   email: 'alice@example.com'   },
  { id: 2, name: 'Bob',     email: 'bob@example.com'     },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 4, name: 'David',   email: 'david@example.com'   },
  { id: 5, name: 'Mahmoud', email: 'mahmoud@example.com' },
];

let nextId = 6;
let searchQuery = '';

// ── Elements ──────────────────────────────
const tbody       = document.querySelector('#tbody');
const totalPill   = document.querySelector('#totalPill');
const shownPill   = document.querySelector('#shownPill');
const empty       = document.querySelector('#empty');
const runBtn      = document.querySelector('#runBtn');
const addBtn      = document.querySelector('#addBtn');
const nameInput   = document.querySelector('#nameInput');
const emailInput  = document.querySelector('#emailInput');
const nameErr     = document.querySelector('#nameErr');
const emailErr    = document.querySelector('#emailErr');
const searchInput = document.querySelector('#searchInput');
const jsonOut     = document.querySelector('#jsonOut');
const jsonSection = document.querySelector('#jsonSection');
const copyBtn     = document.querySelector('#copyBtn');
const themeBtn    = document.querySelector('#themeToggle');
const toast       = document.querySelector('#toast');

// ── Render table ──────────────────────────
function render() {
  tbody.innerHTML = '';

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(searchQuery) ||
    u.email.toLowerCase().includes(searchQuery)
  );

  empty.classList.toggle('show', filtered.length === 0);

  filtered.forEach(user => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="id-cell">#${String(user.id).padStart(2, '0')}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td><button class="del-btn" data-id="${user.id}">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });

  // Stats
  totalPill.textContent = `Total: ${users.length}`;
  totalPill.classList.toggle('active', users.length > 0);

  if (searchQuery) {
    shownPill.textContent = `Shown: ${filtered.length}`;
    shownPill.classList.add('active');
  } else {
    shownPill.textContent = '';
    shownPill.classList.remove('active');
  }
}

// ── Run JSON (stringify → parse) ──────────
runBtn.addEventListener('click', () => {
  const jsonText   = JSON.stringify(users, null, 2);
  const parsedBack = JSON.parse(jsonText);

  jsonOut.textContent = jsonText;
  jsonSection.style.display = 'block';

  render(); // re-render from parsed data
  showToast('✅ JSON stringified & parsed!');
});

// ── Copy JSON ─────────────────────────────
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(jsonOut.textContent);
  showToast('📋 JSON copied!');
});

// ── Add user ──────────────────────────────
addBtn.addEventListener('click', addUser);
nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') emailInput.focus(); });
emailInput.addEventListener('keydown', e => { if (e.key === 'Enter') addUser(); });

function addUser() {
  const name  = nameInput.value.trim();
  const email = emailInput.value.trim();
  let valid = true;

  // Validate name
  if (!name) {
    showErr(nameInput, nameErr, 'Name is required.');
    valid = false;
  } else { clearErr(nameInput, nameErr); }

  // Validate email
  if (!email) {
    showErr(emailInput, emailErr, 'Email is required.');
    valid = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    showErr(emailInput, emailErr, 'Enter a valid email.');
    valid = false;
  } else { clearErr(emailInput, emailErr); }

  if (!valid) return;

  users.push({ id: nextId++, name, email });
  nameInput.value  = '';
  emailInput.value = '';
  clearErr(nameInput, nameErr);
  clearErr(emailInput, emailErr);
  render();
  showToast('✅ User added!');
}

// ── Delete user (event delegation) ────────
tbody.addEventListener('click', e => {
  const btn = e.target.closest('.del-btn');
  if (!btn) return;

  const id = parseInt(btn.dataset.id);
  users = users.filter(u => u.id !== id);
  render();
  showToast('🗑️ User deleted!');
});

// ── Search ────────────────────────────────
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  render();
});

// ── Theme toggle ──────────────────────────
themeBtn.addEventListener('click', toggleTheme);

function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  themeBtn.textContent = isLight ? '🌙' : '☀️';

  // Save to cookie
  document.cookie = `theme=${isLight ? 'light' : 'dark'}; path=/; max-age=604800`;
}

function applySavedTheme() {
  const cookies   = document.cookie.split('; ');
  const themeCookie = cookies.find(c => c.startsWith('theme='));
  if (!themeCookie) return;

  const value = themeCookie.split('=')[1];
  if (value === 'light') {
    document.body.classList.add('light');
    themeBtn.textContent = '🌙';
  }
}

// ── Helpers ───────────────────────────────
function showErr(input, errEl, msg) {
  input.classList.add('error');
  errEl.textContent = msg;
}

function clearErr(input, errEl) {
  input.classList.remove('error');
  errEl.textContent = '';
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ── Init ──────────────────────────────────
applySavedTheme();
render();