var CACHE = 'wco-playbook-v19';
var INDEX = 'https://dionysosdb.github.io/WCO-5x5-Flag-Football-Playbook/index.html';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return fetch(INDEX, {cache: 'reload'}).then(function(res) {
        return cache.put(INDEX, res);
      });
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
  if (e.request.url.indexOf('dionysosdb.github.io/WCO-5x5-Flag-Football-Playbook/') === -1) return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(res) {
        var clone = res.clone();
        caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); });
        return res;
      }).catch(function() {
        return caches.match(INDEX);
      });
    })
  );
});
