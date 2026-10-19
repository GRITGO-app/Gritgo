const CACHE_NAME = 'jarvis-v1';

// ইনস্টল হওয়ার সময় ক্যাশ করবে
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// অ্যাক্টিভেট হওয়ার সময়
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// নেটওয়ার্ক থেকে ডাটা আনবে
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
