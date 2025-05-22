self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('roby-timer').then(function(cache) {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'service-worker.js',
        'audio/beep_short.ogg',
        'audio/alarm_clock.ogg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
