// Bumping this name is what evicts the old cache: the activate handler below
// deletes every cache whose key differs. The previous worker kept a fixed name
// AND served cache-first without revalidating, so any browser that had loaded
// the site was pinned to that build's index.css / app.js forever.
const CACHE_NAME = 'eims-v3-cache';

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
    // Individually, so one bad URL cannot fail the whole install the way
    // cache.addAll does.
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        ASSETS_TO_CACHE.map((url) =>
          cache.add(url).catch((err) => console.warn('SW precache skipped', url, err))
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : null)))
    )
  );
  self.clients.claim();
});

// Network-first, cache as offline fallback. The old worker was cache-first,
// which meant a deploy never reached anyone who had already visited.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((hit) => hit || caches.match('/index.html'))
      )
  );
});
