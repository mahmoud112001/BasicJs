const form        = document.querySelector('#form');
const todoInput   = document.querySelector('#todo');
const list        = document.querySelector('#list');
const errMsg      = document.querySelector('#err');
const totalPill   = document.querySelector('#totalPill');
const donePill    = document.querySelector('#donePill');
const empty       = document.querySelector('#empty');
const clearDoneBtn = document.querySelector('#clearDoneBtn');
const toast       = document.querySelector('#toast');

let todoCount = 0;

// ── Event: Submit form ────────────────────
form.addEventListener('submit', handleFormSubmit);

// ── Event: Click on list (delegation) ────
list.addEventListener('click', handleListClick);

// ── Event: Filter buttons ─────────────────
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});

// ── Event: Clear done ─────────────────────
clearDoneBtn.addEventListener('click', () => {
  const doneItems = list.querySelectorAll('li.done');
  if (!doneItems.length) return;
  doneItems.forEach(li => li.remove());
  updateStats();
  showToast(`🧹 Cleared ${doneItems.length} done item${doneItems.length > 1 ? 's' : ''}!`);
});

// ── Handle form submit ────────────────────
function handleFormSubmit(event) {
  event.preventDefault();

  const text = todoInput.value.trim();

  // Validation
  if (text === '') {
    showError('Todo cannot be empty.');
    return;
  }

  if (!isNaN(Number(text))) {
    showError('Todo must be text, not a number.');
    return;
  }

  clearError();

  todoCount++;
  const li = createItem(todoCount, text);
  list.insertAdjacentElement('beforeend', li);
  todoInput.value = '';
  updateStats();
  showToast('✅ Todo added!');
}

// ── Create list item ──────────────────────
function createItem(num, text) {
  const li = document.createElement('li');
  li.dataset.id = num;

  const check = document.createElement('div');
  check.className = 'check';

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.textContent = 'Delete';
  delBtn.dataset.action = 'delete'; // for event delegation

  li.append(check, span, delBtn);
  return li;
}

// ── Handle list click (event delegation) ──
function handleListClick(event) {
  const li = event.target.closest('li');
  if (!li) return;

  // Delete button clicked
  if (event.target.dataset.action === 'delete') {
    li.style.opacity = '0';
    li.style.transform = 'translateX(20px)';
    li.style.transition = 'all 0.2s';
    setTimeout(() => {
      li.remove();
      updateStats();
      showToast('🗑️ Todo deleted!');
    }, 200);
    return;
  }

  // Toggle done
  li.classList.toggle('done');
  const check = li.querySelector('.check');
  check.textContent = li.classList.contains('done') ? '✓' : '';
  updateStats();
}

// ── Filter ────────────────────────────────
function applyFilter(filter) {
  const items = list.querySelectorAll('li');
  items.forEach(li => {
    const isDone = li.classList.contains('done');
    if (filter === 'all')    li.style.display = '';
    if (filter === 'active') li.style.display = isDone ? 'none' : '';
    if (filter === 'done')   li.style.display = isDone ? '' : 'none';
  });
}

// ── Update stats ──────────────────────────
function updateStats() {
  const all  = list.querySelectorAll('li').length;
  const done = list.querySelectorAll('li.done').length;

  totalPill.textContent = `Total: ${all}`;
  donePill.textContent  = `Done: ${done}`;
  donePill.classList.toggle('active', done > 0);
  empty.classList.toggle('show', all === 0);

  // Re-apply current filter
  const activeFilter = document.querySelector('.filter.active');
  if (activeFilter) applyFilter(activeFilter.dataset.filter);
}

// ── Validation helpers ────────────────────
function showError(msg) {
  todoInput.classList.add('error');
  errMsg.textContent = msg;
}

function clearError() {
  todoInput.classList.remove('error');
  errMsg.textContent = '';
}

// ── Toast ─────────────────────────────────
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ── Enter key ─────────────────────────────
todoInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') form.requestSubmit();
});