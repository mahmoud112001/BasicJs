const input       = document.querySelector('#text');
const keyBadge    = document.querySelector('#keyBadge');
const keyInfo     = document.querySelector('#keyInfo');
const log         = document.querySelector('#log');
const charCount   = document.querySelector('#charCount');
const wordCount   = document.querySelector('#wordCount');
const clearBtn    = document.querySelector('#clearBtn');
const clearLogBtn = document.querySelector('#clearLogBtn');

// Special keys to highlight
const SPECIAL_KEYS = new Set([
  'Enter', 'Backspace', 'Delete', 'Tab', 'Escape',
  'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
  'Shift', 'Control', 'Alt', 'CapsLock', 'Space'
]);

// ── Handle keydown ────────────────────────
input.addEventListener('keydown', handleKey);

function handleKey(event) {
  const key   = event.key;
  const code  = event.code;
  const value = input.value;

  // Update key badge with animation
  updateKeyBadge(key, code, event);

  // Update stats
  updateStats(value);

  // Add to log
  addLogEntry(key, code, value);
}

// ── Update key badge ──────────────────────
function updateKeyBadge(key, code, event) {
  // Display readable key name
  keyBadge.textContent = key === ' ' ? 'Space' : key;

  // Flash animation
  keyBadge.classList.remove('pressed');
  void keyBadge.offsetWidth; // reflow to restart animation
  keyBadge.classList.add('pressed');
  setTimeout(() => keyBadge.classList.remove('pressed'), 150);

  // Info pills
  const pills = [];

  if (SPECIAL_KEYS.has(key) || SPECIAL_KEYS.has(key === ' ' ? 'Space' : key)) {
    pills.push(`<span class="info-pill special">Special Key</span>`);
  }

  pills.push(`<span class="info-pill code">code: ${code}</span>`);

  if (event.shiftKey && key !== 'Shift')   pills.push(`<span class="info-pill special">+ Shift</span>`);
  if (event.ctrlKey  && key !== 'Control') pills.push(`<span class="info-pill special">+ Ctrl</span>`);
  if (event.altKey   && key !== 'Alt')     pills.push(`<span class="info-pill special">+ Alt</span>`);

  keyInfo.innerHTML = pills.join('');
}

// ── Update char/word count ────────────────
function updateStats(value) {
  const chars = value.length;
  const words = value.trim() === '' ? 0 : value.trim().split(/\s+/).length;

  charCount.textContent = `${chars} character${chars !== 1 ? 's' : ''}`;
  wordCount.textContent = `${words} word${words !== 1 ? 's' : ''}`;

  charCount.classList.toggle('active', chars > 0);
  wordCount.classList.toggle('active', words > 0);
}

// ── Add log entry ─────────────────────────
function addLogEntry(key, code, value) {
  // Remove empty placeholder
  const empty = log.querySelector('.log-empty');
  if (empty) empty.remove();

  const time = new Date().toLocaleTimeString('en-US', { hour12: false });

  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.innerHTML = `
    <span class="log-time">${time}</span>
    <span class="log-key">${key === ' ' ? '·Space·' : key}</span>
    <span class="log-value">"${value}"</span>
    <span class="log-code">${code}</span>
  `;

  // Prepend so newest is at top
  log.insertAdjacentElement('afterbegin', entry);

  // Keep max 50 entries
  const entries = log.querySelectorAll('.log-entry');
  if (entries.length > 50) entries[entries.length - 1].remove();
}

// ── Clear input ───────────────────────────
clearBtn.addEventListener('click', () => {
  input.value = '';
  updateStats('');
  input.focus();
});

// ── Clear log ─────────────────────────────
clearLogBtn.addEventListener('click', () => {
  log.innerHTML = '<span class="log-empty">No events yet — start typing above.</span>';
  keyBadge.textContent = '—';
  keyInfo.innerHTML = '';
});