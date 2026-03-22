var CACHE = 'wco-playbook-v19';
var FILES = [
  '/WCO-5x5-Flag-Football-Playbook/',
  '/WCO-5x5-Flag-Football-Playbook/index.html',
  '/WCO-5x5-Flag-Football-Playbook/manifest.json'
];
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(FILES); }));
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
  }));
  self.clients.claim();
});
self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(cached) {
    return cached || fetch(e.request).then(function(res) {
      return caches.open(CACHE).then(function(c) { c.put(e.request, res.clone()); return res; });
    }).catch(function() { return cached; });
  }));
});
