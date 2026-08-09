(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('[data-mobile-menu]');
    var openBtns = document.querySelectorAll('[data-menu-open]');
    var closeBtns = document.querySelectorAll('[data-menu-close]');
    if (!menu) return;

    function setOpen(open) {
      menu.classList.toggle('open', open);
      document.body.classList.toggle('overflow-hidden', open);
      openBtns.forEach(function (btn) {
        var menuIcon = btn.querySelector('[data-icon-menu]');
        var closeIcon = btn.querySelector('[data-icon-close]');
        if (menuIcon && closeIcon) {
          menuIcon.classList.toggle('hidden', open);
          closeIcon.classList.toggle('hidden', !open);
        }
      });
    }

    openBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setOpen(!menu.classList.contains('open'));
      });
    });
    closeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () { setOpen(false); });
    });
    menu.querySelectorAll('a[href], button[data-menu-link]').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });

    // Custom cursor glow follows pointer (desktop only, matches original mobile menu effect)
    menu.addEventListener('mousemove', function (e) {
      var cursor = menu.querySelector('[data-menu-cursor]');
      if (!cursor) return;
      cursor.style.transform = 'translate(' + (e.clientX - 16) + 'px, ' + (e.clientY - 16) + 'px)';
    });
  });
})();
