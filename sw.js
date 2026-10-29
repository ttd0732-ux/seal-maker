/* 도장 메이커 서비스 워커: 캐시를 저장하지 않고 항상 최신 페이지를 가져옵니다. */
self.addEventListener('install', function (event) { self.skipWaiting(); });
self.addEventListener('activate', function (event) { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (event) { event.respondWith(fetch(event.request)); });
