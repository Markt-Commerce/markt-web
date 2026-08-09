(function () {
  function applyIcon(dark) {
    document.querySelectorAll('[data-dark-toggle]').forEach(function (btn) {
      var sun = btn.querySelector('[data-icon-sun]');
      var moon = btn.querySelector('[data-icon-moon]');
      if (!sun || !moon) return;
      sun.classList.toggle('hidden', !dark);
      moon.classList.toggle('hidden', dark);
    });
  }

  function setDarkMode(dark) {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('darkMode', String(dark));
    applyIcon(dark);
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyIcon(document.documentElement.classList.contains('dark'));
    document.querySelectorAll('[data-dark-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setDarkMode(!document.documentElement.classList.contains('dark'));
      });
    });
  });
})();
