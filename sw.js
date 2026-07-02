/* Service worker — Camping en tente (PWA hors-ligne) */
var CACHE = 'camping-tente-v2.12.0';
var CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(CORE); }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k !== CACHE) return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method !== 'GET') return;

  // Synchro du camp partagé: toujours au réseau, jamais en cache
  if(req.url.indexOf('firebaseio.com') !== -1 || req.url.indexOf('extendsclass.com') !== -1 || req.url.indexOf('jsonblob.com') !== -1) return;

  // Navigation: réseau d'abord, repli sur la page en cache (mode hors-ligne)
  if(req.mode === 'navigate'){
    e.respondWith(
      fetch(req).catch(function(){ return caches.match('./index.html'); })
    );
    return;
  }

  // Reste: cache d'abord, puis réseau (et on met en cache au passage)
  e.respondWith(
    caches.match(req).then(function(hit){
      if(hit) return hit;
      return fetch(req).then(function(res){
        try{
          if(res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')){
            var copy = res.clone();
            caches.open(CACHE).then(function(c){ c.put(req, copy); });
          }
        }catch(e){}
        return res;
      }).catch(function(){ return hit; });
    })
  );
});
