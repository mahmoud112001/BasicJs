
/* ═══════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════ */
function showOutput(id, type) {
  const el = document.getElementById(id);
  el.className = `output show ${type}`;
}

function setErr(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  return !!msg;
}

function clearErr(id) { document.getElementById(id).textContent = ''; }

function markInput(id, isErr) {
  const el = document.getElementById(id);
  el.classList.remove('error', 'ok');
  el.classList.add(isErr ? 'error' : 'ok');
}


/* ═══════════════════════════════════════════════════
   EX 1 — CALCULATOR
═══════════════════════════════════════════════════ */
function runCalculator() {
  let valid = true;

  const n1 = document.getElementById('c-num1').value.trim();
  const n2 = document.getElementById('c-num2').value.trim();
  const op = document.getElementById('c-op').value;

  // Validate
  if (n1 === '' || isNaN(Number(n1))) {
    setErr('c-num1-err', 'Please enter a valid number.');
    markInput('c-num1', true);
    valid = false;
  } else { clearErr('c-num1-err'); markInput('c-num1', false); }

  if (n2 === '' || isNaN(Number(n2))) {
    setErr('c-num2-err', 'Please enter a valid number.');
    markInput('c-num2', true);
    valid = false;
  } else { clearErr('c-num2-err'); markInput('c-num2', false); }

  if (!op) {
    setErr('c-op-err', 'Please choose an operation.');
    valid = false;
  } else { clearErr('c-op-err'); }

  if (!valid) return;

  const a = parseFloat(n1), b = parseFloat(n2);
  let result;

  // Division by zero
  if (op === '/' && b === 0) {
    setErr('c-num2-err', 'Cannot divide by zero.');
    markInput('c-num2', true);
    return;
  }

  switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = a / b; break;
  }

  const opSymbols = { '+': '+', '-': '−', '*': '×', '/': '÷' };
  document.getElementById('c-result').textContent =
    `${a} ${opSymbols[op]} ${b} = ${parseFloat(result.toFixed(10))}`;
  showOutput('c-out', 'success');
}

function resetCalc() {
  ['c-num1','c-num2'].forEach(id => {
    document.getElementById(id).value = '';
    document.getElementById(id).classList.remove('error','ok');
  });
  document.getElementById('c-op').value = '';
  ['c-num1-err','c-num2-err','c-op-err'].forEach(id => clearErr(id));
  document.getElementById('c-out').className = 'output';
}


/* ═══════════════════════════════════════════════════
   EX 2 — GUESSING GAME
═══════════════════════════════════════════════════ */
let secretNumber = null;
let attempts = 0;
let gameActive = false;

function startGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  gameActive = true;

  document.getElementById('g-input').disabled = false;
  document.getElementById('g-input').value = '';
  document.getElementById('g-input').classList.remove('error','ok');
  document.getElementById('g-start-btn').style.display = 'none';
  document.getElementById('g-guess-btn').style.display = 'inline-flex';

  const status = document.getElementById('g-status');
  status.textContent = 'Game Active';
  status.className = 'state-pill active';
  document.getElementById('g-attempts').textContent = 'Attempts: 0';

  document.getElementById('g-msg').textContent = 'Game started! Guess a number between 1 and 10.';
  showOutput('g-out', 'info');
  clearErr('g-err');
}

function makeGuess() {
  if (!gameActive) return;

  const val = document.getElementById('g-input').value.trim();

  // Validate
  if (val === '' || isNaN(Number(val))) {
    setErr('g-err', 'Please enter a valid number.');
    markInput('g-input', true);
    return;
  }

  const n = parseInt(val);

  if (n < 1 || n > 10) {
    setErr('g-err', 'Number must be between 1 and 10.');
    markInput('g-input', true);
    return;
  }

  clearErr('g-err');
  attempts++;
  document.getElementById('g-attempts').textContent = `Attempts: ${attempts}`;
  document.getElementById('g-input').value = '';

  if (n < secretNumber) {
    document.getElementById('g-msg').textContent = `📉 ${n} is too low! Try higher.`;
    markInput('g-input', true);
    showOutput('g-out', 'danger');
  } else if (n > secretNumber) {
    document.getElementById('g-msg').textContent = `📈 ${n} is too high! Try lower.`;
    markInput('g-input', true);
    showOutput('g-out', 'danger');
  } else {
    document.getElementById('g-msg').textContent =
      `🎉 Correct! The number was ${secretNumber}. You got it in ${attempts} attempt${attempts > 1 ? 's' : ''}!`;
    markInput('g-input', false);
    showOutput('g-out', 'success');
    endGame();
  }
}

function endGame() {
  gameActive = false;
  document.getElementById('g-input').disabled = true;
  document.getElementById('g-start-btn').style.display = 'inline-flex';
  document.getElementById('g-start-btn').textContent = 'Play Again';
  document.getElementById('g-guess-btn').style.display = 'none';
  document.getElementById('g-status').textContent = 'Game Over';
  document.getElementById('g-status').className = 'state-pill';
}

function resetGame() {
  secretNumber = null; attempts = 0; gameActive = false;
  document.getElementById('g-input').disabled = true;
  document.getElementById('g-input').value = '';
  document.getElementById('g-input').classList.remove('error','ok');
  document.getElementById('g-start-btn').style.display = 'inline-flex';
  document.getElementById('g-start-btn').textContent = 'Start Game';
  document.getElementById('g-guess-btn').style.display = 'none';
  document.getElementById('g-status').textContent = 'Not Started';
  document.getElementById('g-status').className = 'state-pill';
  document.getElementById('g-attempts').textContent = 'Attempts: 0';
  document.getElementById('g-out').className = 'output';
  clearErr('g-err');
}

// Allow Enter key to submit guess
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('g-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && gameActive) makeGuess();
  });
  document.getElementById('c-num1').addEventListener('keydown', e => {
    if (e.key === 'Enter') runCalculator();
  });
});


/* ═══════════════════════════════════════════════════
   EX 3 — ARRAY PROCESSING
═══════════════════════════════════════════════════ */
function runArray() {
  const raw = document.getElementById('arr-input').value.trim();

  if (!raw) {
    setErr('arr-err', 'Please enter at least one number.');
    markInput('arr-input', true);
    return;
  }

  const parts = raw.split(',').map(s => s.trim());
  const numbers = [];

  for (const p of parts) {
    if (p === '' || isNaN(Number(p))) {
      setErr('arr-err', `"${p}" is not a valid number. Use comma-separated numbers.`);
      markInput('arr-input', true);
      return;
    }
    numbers.push(Number(p));
  }

  clearErr('arr-err');
  markInput('arr-input', false);

  const pos = [], neg = [];
  let sumPos = 0;

  for (const n of numbers) {
    if (n > 0)      { pos.push(n); sumPos += n; }
    else if (n < 0) { neg.push(n); }
  }

  // Badges
  const badges = document.getElementById('arr-badges');
  badges.innerHTML = numbers.map(n => {
    const cls = n > 0 ? 'pos' : n < 0 ? 'neg' : 'zer';
    return `<span class="num-badge ${cls}">${n}</span>`;
  }).join('');

  // Stats
  document.getElementById('arr-stats').innerHTML = `
    <span class="out-label" style="margin-top:12px;">STATS</span>
    <span class="output-line">🟢 Positive numbers: [ ${pos.join(', ') || 'none'} ]</span>
    <span class="output-line">🔴 Negative numbers: [ ${neg.join(', ') || 'none'} ]</span>
    <span class="output-line">⚪ Zeros: ${numbers.filter(n => n === 0).length}</span>
    <span class="output-line" style="margin-top:8px;">∑ Sum of positives: <strong>${sumPos}</strong></span>
    <span class="output-line">Count of negatives: <strong>${neg.length}</strong></span>
    <span class="output-line">Total elements: <strong>${numbers.length}</strong></span>
  `;

  const out = document.getElementById('arr-out');
  out.style.display = 'block';
  out.className = 'output show neutral';
}

function resetArray() {
  document.getElementById('arr-input').value = '12, -5, 8, 0, -3, 15, 22, -8, 6';
  document.getElementById('arr-input').classList.remove('error','ok');
  document.getElementById('arr-out').style.display = 'none';
  clearErr('arr-err');
}


/* ═══════════════════════════════════════════════════
   EX 4 — MULTIPLICATION TABLE
═══════════════════════════════════════════════════ */
function runTable() {
  const val = parseInt(document.getElementById('t-size').value);

  if (isNaN(val) || val < 2 || val > 15) {
    setErr('t-err', 'Please enter a size between 2 and 15.');
    markInput('t-size', true);
    return;
  }

  clearErr('t-err');
  markInput('t-size', false);

  const table = document.getElementById('t-table');
  let html = '<tr><td class="header-cell">×</td>';

  for (let j = 1; j <= val; j++)
    html += `<td class="header-cell">${j}</td>`;
  html += '</tr>';

  for (let i = 1; i <= val; i++) {
    html += `<tr><td class="header-cell">${i}</td>`;
    for (let j = 1; j <= val; j++) {
      const cls = i === j ? 'diag' : '';
      html += `<td class="${cls}">${i * j}</td>`;
    }
    html += '</tr>';
  }

  table.innerHTML = html;
  const out = document.getElementById('t-out');
  out.style.display = 'block';
  out.className = 'output show neutral';
}

function resetTable() {
  document.getElementById('t-size').value = '10';
  document.getElementById('t-size').classList.remove('error','ok');
  document.getElementById('t-out').style.display = 'none';
  clearErr('t-err');
}


/* ═══════════════════════════════════════════════════
   EX 5 — PATTERNS
═══════════════════════════════════════════════════ */
function runPattern() {
  const rows = parseInt(document.getElementById('p-rows').value);
  const type = document.getElementById('p-type').value;

  if (isNaN(rows) || rows < 1 || rows > 20) {
    setErr('p-err', 'Please enter rows between 1 and 20.');
    markInput('p-rows', true);
    return;
  }

  clearErr('p-err');
  markInput('p-rows', false);

  let lines = [];

  if (type === 'a') {
    // Left triangle
    for (let i = 1; i <= rows; i++)
      lines.push('★'.repeat(i));
  } else {
    // Centered pyramid
    for (let i = 1; i <= rows; i++) {
      const spaces = '\u00A0\u00A0'.repeat(rows - i);
      const stars  = '★'.repeat(2 * i - 1);
      lines.push(spaces + stars);
    }
  }

  document.getElementById('p-result').innerHTML = lines
    .map(l => `<div>${l}</div>`)
    .join('');

  showOutput('p-out', 'neutral');
}

function resetPattern() {
  document.getElementById('p-rows').value = '5';
  document.getElementById('p-rows').classList.remove('error','ok');
  document.getElementById('p-out').className = 'output';
  clearErr('p-err');
}
