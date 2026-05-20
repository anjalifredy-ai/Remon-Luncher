self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('remon-launcher').then(function(cache) {
      return cache.addAll(['/Remon-Luncher/']);
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
