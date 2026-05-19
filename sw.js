
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("app-cache").then((cache) => {
      return cache.addAll([
        "/QR-REGISTRO/",          // index.html dentro de la carpeta
        "/QR-REGISTRO/icono.jpg", // ícono
        "/QR-REGISTRO/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});