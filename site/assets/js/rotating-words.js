(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelector('[data-rotating-word]');
    if (!el) return;
    var words = JSON.parse(el.getAttribute('data-words') || '[]');
    if (words.length < 2) return;
    var index = 0;

    setInterval(function () {
      el.classList.add('word-out');
      setTimeout(function () {
        index = (index + 1) % words.length;
        el.textContent = words[index];
        el.classList.remove('word-out');
        el.classList.add('word-in-start');
        // Force reflow so the browser registers the start state before transitioning back to normal.
        void el.offsetWidth;
        el.classList.remove('word-in-start');
      }, 500);
    }, 2500);
  });
})();
