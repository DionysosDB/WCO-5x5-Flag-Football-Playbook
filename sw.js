var CACHE = 'wco-playbook-v19';
var INDEX = '/WCO-5x5-Flag-Football-Playbook/index.html';
var FILES = [
  '/WCO-5x5-Flag-Football-Playbook/index.html',
  '/WCO-5x5-Flag-Football-Playbook/manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return Promise.all(FILES.map(function(url) {
        return fetch(url, {cache: 'reload'}).then(function(res) {
          if (!res.ok) throw new Error('Bad response for ' + url);
          return cache.put(url, res);
        }).catch(function(err) {
          console.warn('[SW] Failed to cache:', url, err);
        });
      }));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  if (e.request.mode === 'navigate') {
    e.respondWith(
      caches.match(INDEX).then(function(cached) {
        return cached || fetch(e.request).catch(function() { return cached; });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(res) {
        return caches.open(CACHE).then(function(cache) {
          cache.put(e.request, res.clone());
          return res;
        });
      }).catch(function() {
        if (url.indexOf('/WCO-5x5-Flag-Football-Playbook/') !== -1) {
          return caches.match(INDEX);
        }
      });
    })
  );
});
