// ── Elements ──────────────────────────────
const loadBtn     = document.querySelector('#loadBtn');
const clearBtn    = document.querySelector('#clearBtn');
const searchInput = document.querySelector('#searchInput');
const usersGrid   = document.querySelector('#usersGrid');
const statusBar   = document.querySelector('#statusBar');
const statusMsg   = document.querySelector('#statusMsg');
const totalPill   = document.querySelector('#totalPill');
const activePill  = document.querySelector('#activePill');
const inactivePill = document.querySelector('#inactivePill');
const skeleton    = document.querySelector('#skeleton');
const empty       = document.querySelector('#empty');
const errorState  = document.querySelector('#errorState');
const errorMsg    = document.querySelector('#errorMsg');
const filters     = document.querySelector('#filters');

let allUsers    = [];
let searchQuery = '';
let activeFilter = 'all';

// ── Load users ────────────────────────────
loadBtn.addEventListener('click', loadUsers);

async function loadUsers() {
  // Reset UI
  usersGrid.innerHTML = '';
  errorState.classList.remove('show');
  empty.classList.remove('show');
  statusBar.style.display = 'none';
  skeleton.style.display = 'block';
  loadBtn.disabled = true;
  loadBtn.textContent = '⏳ Loading...';

  try {
    const res = await fetch('./users.json');

    if (!res.ok) {
      throw new Error(`Request failed — status ${res.status} (${res.statusText})`);
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('No users found in the JSON file.');
    }

    allUsers = data;

    skeleton.style.display = 'none';
    statusBar.style.display = 'flex';
    filters.style.display = 'flex';
    searchInput.disabled = false;
    clearBtn.disabled = false;
    loadBtn.textContent = '🔄 Reload';
    loadBtn.disabled = false;

    render();

  } catch (err) {
    skeleton.style.display = 'none';
    errorMsg.textContent = err.message;
    errorState.classList.add('show');
    loadBtn.textContent = '⬇ Load Users';
    loadBtn.disabled = false;
  }
}

// ── Render ────────────────────────────────
function render() {
  usersGrid.innerHTML = '';

  let filtered = allUsers.filter(u => {
    const matchSearch =
      u.name.toLowerCase().includes(searchQuery) ||
      u.role.toLowerCase().includes(searchQuery) ||
      u.department.toLowerCase().includes(searchQuery) ||
      u.email.toLowerCase().includes(searchQuery);

    const matchFilter =
      activeFilter === 'all' ||
      u.status === activeFilter;

    return matchSearch && matchFilter;
  });

  empty.classList.toggle('show', filtered.length === 0);

  filtered.forEach((user, i) => {
    const card = createCard(user, i);
    usersGrid.appendChild(card);
  });

  updateStats(filtered.length);
}

// ── Create card ───────────────────────────
function createCard(user, index) {
  const card = document.createElement('div');
  card.className = 'user-card';
  card.style.animationDelay = `${index * 0.05}s`;

  const initials = user.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const joinedFormatted = new Date(user.joined).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });

  card.innerHTML = `
    <div class="card-top">
      <div class="user-avatar">${initials}</div>
      <span class="status-badge ${user.status}">${user.status}</span>
    </div>
    <div>
      <div class="user-name">${user.name}</div>
      <div class="user-role">${user.role}</div>
      <div class="user-email">${user.email}</div>
    </div>
    <div class="card-meta">
      <span class="meta-pill">🏢 ${user.department}</span>
      <span class="meta-pill">📍 ${user.location}</span>
      <span class="meta-pill">📅 ${joinedFormatted}</span>
    </div>
  `;

  return card;
}

// ── Update stats ──────────────────────────
function updateStats(shownCount) {
  const activeCount   = allUsers.filter(u => u.status === 'active').length;
  const inactiveCount = allUsers.filter(u => u.status === 'inactive').length;

  statusMsg.textContent = `✅ Loaded ${allUsers.length} users successfully`;
  totalPill.textContent    = `Total: ${shownCount}`;
  activePill.textContent   = `Active: ${activeCount}`;
  inactivePill.textContent = `Inactive: ${inactiveCount}`;
}

// ── Search ────────────────────────────────
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  render();
});

// ── Filters ───────────────────────────────
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    render();
  });
});

// ── Clear ─────────────────────────────────
clearBtn.addEventListener('click', () => {
  allUsers = [];
  usersGrid.innerHTML = '';
  statusBar.style.display = 'none';
  filters.style.display = 'none';
  searchInput.value = '';
  searchInput.disabled = true;
  clearBtn.disabled = true;
  loadBtn.textContent = '⬇ Load Users';
  empty.classList.remove('show');
  activeFilter = 'all';
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter[data-filter="all"]').classList.add('active');
});