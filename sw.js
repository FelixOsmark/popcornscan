self.addEventListener('fetch', function(event) {
  // Enkel service worker der tillader online netværkskald
  event.respondWith(fetch(event.request));
});
