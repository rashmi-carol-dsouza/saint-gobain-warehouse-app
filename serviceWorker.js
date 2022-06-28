const staticDevWarehouse = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/landing-page.html",
  "/loginsg.html",
  "/scan.html",
  "/sg_landing2.html",
  "/view-scans.html",
  "/css/main.css",
  "/css/style2.css",
  "/fonts/Aristotelica Display DemiBold Trial.ttf",
  "/fonts/Aristotelica Display ExtraLight Trial.ttf",
  "/fonts/Aristotelica-SmallCaps-Regular-trail.ttf",
  "/fonts/AristotelicaSmallCaps-Regular.ttf",
  "/js/jquery-1.9.0.min.js",
  "/js/main.js",
  "/js/quagga.min.js",
  "/images/app Name for landing page.png",
  "/images/landing.gif",
  "/images/logo_datatrack.png",
  "/images/machine-icon.png",
  "/images/product-icon.png",
  "/images/SG-logo.png",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })