/* Guarda el programa en el aparato para que abra sin internet. Lo genera herramientas/construir.js */
var CAJA = 'aprendo-escuchando-29362a896e';
var ARCHIVOS = ["./","index.html","manifest.webmanifest","icono-180.png","icono-192.png","icono-512.png"];

self.addEventListener('install', function (e) {
  // Se piden a internet sin pasar por la memoria del navegador, para no guardar una copia vieja.
  var pedidos = ARCHIVOS.map(function (ruta) { return new Request(ruta, { cache: 'reload' }); });
  e.waitUntil(caches.open(CAJA).then(function (caja) { return caja.addAll(pedidos); }).then(function () { return self.skipWaiting(); }));
});

// Al llegar una versión nueva, se borra la anterior.
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (nombres) {
    return Promise.all(nombres.filter(function (n) { return n !== CAJA; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});

// Primero se busca en lo guardado; si no está, se pide por internet.
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (guardado) {
    return guardado || fetch(e.request);
  }));
});
