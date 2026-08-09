(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Accordion toggle for each question/answer pair
    document.querySelectorAll('.faq-item [data-faq-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        item.classList.toggle('open');
        btn.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
      });
    });

    // Category tabs
    var tabs = document.querySelectorAll('[data-faq-category-tab]');
    var panels = document.querySelectorAll('[data-faq-category-panel]');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-faq-category-tab');

        tabs.forEach(function (t) {
          var active = t === tab;
          t.classList.toggle('bg-secondary', active);
          t.classList.toggle('dark:bg-zinc-50', active);
          t.classList.toggle('text-white', active);
          t.classList.toggle('dark:text-secondary', active);
          t.classList.toggle('shadow-kinetic', active);
          t.classList.toggle('bg-white', !active);
          t.classList.toggle('dark:bg-zinc-900', !active);
          t.classList.toggle('border', !active);
          t.classList.toggle('border-outline', !active);
          t.classList.toggle('dark:border-zinc-800', !active);
          t.classList.toggle('text-tertiary', !active);
          t.classList.toggle('dark:text-zinc-400', !active);
          var dot = t.querySelector('[data-active-dot]');
          if (dot) dot.classList.toggle('hidden', !active);
        });

        panels.forEach(function (panel) {
          panel.classList.toggle('hidden', panel.getAttribute('data-faq-category-panel') !== target);
        });
      });
    });
  });
})();
