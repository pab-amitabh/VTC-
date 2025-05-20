// Simple Service Worker for Travel Insurance App
// This version won't be aggressive with caching

const CACHE_NAME = 'travel-insurance-cache-v1';

// Install event - just register
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  
  // Claim clients
  event.waitUntil(clients.claim());
});

// Simple pass-through fetch handler
self.addEventListener('fetch', (event) => {
  // Just pass through to network
  event.respondWith(fetch(event.request));
}); 