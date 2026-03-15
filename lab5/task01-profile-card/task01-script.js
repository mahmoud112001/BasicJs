
  
    const profileName = document.getElementById('profileName');
    const profileBio  = document.getElementById('profileBio');
    const profileCard = document.getElementById('profileCard');
    const avatar      = document.getElementById('avatar');
    const nameInput   = document.getElementById('nameInput');
    const bioInput    = document.getElementById('bioInput');
    const nameBtn     = document.getElementById('nameBtn');
    const bioBtn      = document.getElementById('bioBtn');
    const nameErr     = document.getElementById('nameErr');
    const bioErr      = document.getElementById('bioErr');
    const toast       = document.getElementById('toast');

    // ── Helpers ──────────────────────────────
    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    }

    function flashCard() {
      profileCard.classList.add('updated');
      setTimeout(() => profileCard.classList.remove('updated'), 600);
    }

    function getInitials(name) {
      return name.trim().split(' ')
        .map(w => w[0].toUpperCase())
        .slice(0, 2)
        .join('');
    }

    function validate(input, errEl, label) {
      if (input.value.trim() === '') {
        errEl.textContent = `${label} cannot be empty.`;
        input.classList.add('error');
        return false;
      }
      errEl.textContent = '';
      input.classList.remove('error');
      return true;
    }

    // ── Update Name ───────────────────────────
    nameBtn.onclick = function () {
      if (!validate(nameInput, nameErr, 'Name')) return;
      profileName.textContent = nameInput.value.trim();
      avatar.textContent = getInitials(nameInput.value);
      nameInput.value = '';
      flashCard();
      showToast('✅ Name updated!');
    };

    // ── Update Bio ────────────────────────────
    bioBtn.onclick = function () {
      if (!validate(bioInput, bioErr, 'Bio')) return;
      profileBio.textContent = bioInput.value.trim();
      bioInput.value = '';
      flashCard();
      showToast('✅ Bio updated!');
    };

    // ── Enter key support ─────────────────────
    nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') nameBtn.click(); });
    bioInput.addEventListener('keydown',  e => { if (e.key === 'Enter') bioBtn.click(); });

