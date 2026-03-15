

  // ── set initial active button ──
  document.getElementById('btn-dark').classList.add('active');

  function setTheme(theme, name, btn) {
    // Remove all theme classes
    document.body.classList.remove(
      'theme-dark', 'theme-light', 'theme-ocean', 'theme-sunset', 'theme-forest'
    );

    // Apply new theme
    document.body.classList.add(`theme-${theme}`);

    // Update badge
    document.getElementById('activeName').textContent = name;

    // Update active button
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
