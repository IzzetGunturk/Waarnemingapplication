self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./css/style.css", "./src/logos/logo192.svg"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWidth(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});