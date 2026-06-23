// 2026-06-23; 日本觀光列車｜旅印帖 v59 PWA
const CACHE_NAME = 'jp-tourist-train-tabijirushi-v59-targeted-fixes-cache';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './tourist-train-rabbit-icon-v59-180.png',
  './tourist-train-rabbit-icon-v59-192.png',
  './tourist-train-rabbit-icon-v59-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      });
    })
  );
});
