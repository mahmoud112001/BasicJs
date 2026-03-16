
  const titleInput    = document.querySelector('#title');
  const messageInput  = document.querySelector('#message');
  const addBtn        = document.querySelector('#addBtn');
  const clearAllBtn   = document.querySelector('#clearAllBtn');
  const cardsContainer = document.querySelector('#cards');
  const countPill     = document.querySelector('#countPill');
  const emptyState    = document.querySelector('#emptyState');
  const toast         = document.querySelector('#toast');

  let cardCount = 0;

  // ── Helpers ──────────────────────────────
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }

  function updateStats() {
    const cards = cardsContainer.querySelectorAll('.card').length;
    countPill.textContent = `${cards} card${cards !== 1 ? 's' : ''}`;
    countPill.classList.toggle('has-cards', cards > 0);
    emptyState.classList.toggle('show', cards === 0);
  }

  function setErr(inputId, errId, msg) {
    document.getElementById(inputId).classList.add('error');
    document.getElementById(errId).textContent = msg;
  }

  function clearErr(inputId, errId) {
    document.getElementById(inputId).classList.remove('error');
    document.getElementById(inputId).classList.add('ok');
    document.getElementById(errId).textContent = '';
  }

  // ── Add Card ──────────────────────────────
  function handleAddCard() {
    const titleText   = titleInput.value.trim();
    const messageText = messageInput.value.trim();
    let valid = true;

    if (!titleText) {
      setErr('title', 'title-err', 'Title is required.');
      valid = false;
    } else { clearErr('title', 'title-err'); }

    if (!messageText) {
      setErr('message', 'message-err', 'Message is required.');
      valid = false;
    } else { clearErr('message', 'message-err'); }

    if (!valid) return;

    cardCount++;
    const cardElement = createCard(cardCount, titleText, messageText);
    emptyState.classList.remove('show');
    cardsContainer.insertAdjacentElement('beforeend', cardElement);

    clearInputs();
    updateStats();
    showToast('✅ Card added!');
  }

  // ── Create Card ───────────────────────────
  function createCard(num, title, message) {
    const card = document.createElement('div');
    card.className = 'card';

    const cardNum = document.createElement('span');
    cardNum.className = 'card-num';
    cardNum.textContent = `CARD_${String(num).padStart(2, '0')}`;

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;

    const cardMessage = document.createElement('p');
    cardMessage.textContent = message;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      card.style.transition = 'all 0.2s';
      setTimeout(() => {
        card.remove();
        updateStats();
        showToast('🗑️ Card deleted!');
      }, 200);
    });

    cardFooter.appendChild(deleteBtn);
    card.append(cardNum, cardTitle, cardMessage, cardFooter);
    return card;
  }

  // ── Clear Inputs ──────────────────────────
  function clearInputs() {
    titleInput.value = '';
    messageInput.value = '';
    ['title', 'message'].forEach(id => {
      document.getElementById(id).classList.remove('ok', 'error');
    });
  }

  // ── Clear All ─────────────────────────────
  clearAllBtn.addEventListener('click', () => {
    const cards = cardsContainer.querySelectorAll('.card');
    if (!cards.length) return;
    cards.forEach(c => c.remove());
    updateStats();
    showToast('🧹 All cards cleared!');
  });

  // ── Events ────────────────────────────────
  addBtn.addEventListener('click', handleAddCard);

  titleInput.addEventListener('keydown', e => { if (e.key === 'Enter') messageInput.focus(); });
  messageInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleAddCard(); });

  // Init
  updateStats();
