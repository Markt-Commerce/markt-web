(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-hiw-carousel]').forEach(function (root) {
      var steps = Array.prototype.slice.call(root.querySelectorAll('.hiw-step'));
      var indicators = Array.prototype.slice.call(root.querySelectorAll('[data-hiw-indicator]'));
      var nextBtns = Array.prototype.slice.call(root.querySelectorAll('[data-hiw-next]'));
      var total = steps.length;
      var active = 0;
      var timer = null;

      function render() {
        steps.forEach(function (step, i) {
          step.classList.remove('active', 'prev');
          if (i === active) {
            step.classList.add('active');
          } else if (i === (active + 1) % total) {
            step.classList.add('prev');
          }
        });
        indicators.forEach(function (ind, i) {
          var isActive = i === active;
          ind.classList.toggle('w-16', isActive);
          ind.classList.toggle('bg-primary', isActive);
          ind.classList.toggle('w-6', !isActive);
          ind.classList.toggle('bg-outline', !isActive);
          ind.classList.toggle('dark:bg-zinc-800', !isActive);
        });
      }

      function goTo(i) {
        active = ((i % total) + total) % total;
        render();
      }

      indicators.forEach(function (ind, i) {
        ind.addEventListener('click', function () {
          goTo(i);
          restartAutoplay();
        });
      });
      nextBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          goTo(active + 1);
          restartAutoplay();
        });
      });

      function restartAutoplay() {
        if (!timer) return;
        clearInterval(timer);
        timer = setInterval(function () { goTo(active + 1); }, 5000);
      }

      if (root.getAttribute('data-hiw-autoplay') === 'true') {
        timer = setInterval(function () { goTo(active + 1); }, 5000);
      }

      render();
    });
  });
})();
