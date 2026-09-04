(function () {
  function fire(eventName, payload) {
    const data = {
      event: eventName,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...(payload || {})
    };

    try {
      window.localStorage.setItem('markt_analytics', JSON.stringify(data));
    } catch (error) {
      // localStorage may be unavailable; silently ignore.
    }

    if (window.dataLayer) {
      window.dataLayer.push(data);
    }
  }

  document.addEventListener('click', function (event) {
    const target = event.target.closest('a');
    if (!target) return;

    const href = target.getAttribute('href') || '';
    const storeType = target.getAttribute('data-store-link');
    const downloadType = target.getAttribute('data-download-link');

    if (storeType) {
      fire('store_click', { storeType, href });
      return;
    }

    if (downloadType) {
      fire('download_click', { href });
      return;
    }

    if (href.startsWith('/discover/') || href.startsWith('/live-selling/') || href.startsWith('/faqs/') || href.startsWith('/features/')) {
      fire('product_discovery_click', { href });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    fire('page_view', { title: document.title });
  });
})();
