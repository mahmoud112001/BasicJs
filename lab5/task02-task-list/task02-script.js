
  const taskInput = document.getElementById('taskInput');
  const addBtn    = document.getElementById('addBtn');
  const taskList  = document.getElementById('taskList');
  const taskErr   = document.getElementById('taskErr');
  const totalPill = document.getElementById('totalPill');
  const donePill  = document.getElementById('donePill');
  const emptyState = document.getElementById('emptyState');
  const toast     = document.getElementById('toast');

  let tasks = [];
  let currentFilter = 'all';

  // ── Helpers ──────────────────────────────
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }

  function updateStats() {
    const done = tasks.filter(t => t.done).length;
    totalPill.textContent = `Total: ${tasks.length}`;
    donePill.textContent  = `Done: ${done}`;
  }

  function setFilter(filter, btn) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  }

  // ── Render ────────────────────────────────
  function render() {
    taskList.innerHTML = '';

    const filtered = tasks.filter(t => {
      if (currentFilter === 'active') return !t.done;
      if (currentFilter === 'done')   return t.done;
      return true;
    });

    emptyState.classList.toggle('show', filtered.length === 0);

    filtered.forEach(task => {
      const li = document.createElement('li');
      li.className = `task-item${task.done ? ' done' : ''}`;

      // Checkbox
      const check = document.createElement('div');
      check.className = 'task-check';
      check.textContent = task.done ? '✓' : '';
      check.onclick = () => toggleTask(task.id);

      // Text
      const span = document.createElement('span');
      span.className = 'task-text';
      span.textContent = task.text;

      // Delete
      const del = document.createElement('button');
      del.className = 'task-del';
      del.textContent = 'Delete';
      del.onclick = () => deleteTask(task.id);

      li.append(check, span, del);
      taskList.appendChild(li);
    });

    updateStats();
  }

  // ── Add Task ──────────────────────────────
  function addTask() {
    const text = taskInput.value.trim();

    if (!text) {
      taskErr.textContent = 'Task cannot be empty.';
      taskInput.classList.add('error');
      return;
    }

    taskErr.textContent = '';
    taskInput.classList.remove('error');

    tasks.push({ id: Date.now(), text, done: false });
    taskInput.value = '';
    render();
    showToast('✅ Task added!');
  }

  // ── Toggle Done ───────────────────────────
  function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) task.done = !task.done;
    render();
  }

  // ── Delete ────────────────────────────────
  function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    render();
    showToast('🗑️ Task deleted!');
  }

  // ── Clear Done ────────────────────────────
  function clearDone() {
    const count = tasks.filter(t => t.done).length;
    if (!count) return;
    tasks = tasks.filter(t => !t.done);
    render();
    showToast(`🧹 Cleared ${count} done task${count > 1 ? 's' : ''}!`);
  }

  // ── Events ────────────────────────────────
  addBtn.onclick = addTask;
  taskInput.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });

  // Init
  render();
