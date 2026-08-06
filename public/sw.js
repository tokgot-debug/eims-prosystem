const CACHE_NAME = 'eims-v2.4-cache';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.css',
  '/app.js',
  '/firebase-config.js',
  '/qrcode.min.js',
  '/amaco_logo.png',
  '/car_damaged.jpg',
  '/car_plate.jpg',
  '/futuristic_hero.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
