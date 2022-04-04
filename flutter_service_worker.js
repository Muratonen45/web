'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c8c9f5ee994af9f708ac47b99a2e72e5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/resimler/alpella.jpeg": "08f32a8a31883f806c953d0f0105123e",
"assets/resimler/aycekirdegi.jpeg": "ab54c3e3d43d4c16315d78fc63c5ab15",
"assets/resimler/ayran.png": "14f6a70c2e1201bc923acfd69ad3310d",
"assets/resimler/bulgur.jpeg": "ce3dd5b3fec59c710b4e0f287b2ae082",
"assets/resimler/camas%25C4%25B1r_detarjani.jpg": "6e7c3db4cbd9eb072fdea24bae7e35e0",
"assets/resimler/caramio.jpeg": "cafe49280cefa4a1b6457b92644cafdb",
"assets/resimler/cikolata.jpeg": "1129aaef5bef7e1d9f9d1e9ab5a484b6",
"assets/resimler/coca-cola.jpeg": "ba03112f39c5ed79ce010498be9d4d6f",
"assets/resimler/dido.jpeg": "0c785b87230e1626bf07ec9e9ab1ec46",
"assets/resimler/domestos.jpeg": "313122732f4144ebfa34232b0eb0549e",
"assets/resimler/dondurma.jpeg": "4a0509a0382fd24560b0278d461bb309",
"assets/resimler/ezine_peniri.jpg": "08a4e4ff2fa1866bc4328f12820798a7",
"assets/resimler/f%25C4%25B1nd%25C4%25B1k.jpeg": "502f4ecc371b92613a3108b8495365d1",
"assets/resimler/fanta.png": "ffc9d9111cf24ecd415469ab048e6ed4",
"assets/resimler/fruko.jpeg": "7bb59294dd3602af7ca87ffd76548770",
"assets/resimler/gida.jpg": "8fc0452f21829bf6c739fa2dd6708eba",
"assets/resimler/hurma.jpg": "6c3ad17a5071ba7ef9da9dd6a1fc2056",
"assets/resimler/icecekler.jpg": "98db2ac69cc42b291c8176ad64f33bc1",
"assets/resimler/kag%25C4%25B1thavlu.jpeg": "4fd900e93d9d5f34ba7a8915b8b6dcf9",
"assets/resimler/kek.jpeg": "8244750fa2af5ff1e90dd6d8df8d0576",
"assets/resimler/ketcap.jpeg": "49cd1c5b4aa299e83fafed57ddb95c18",
"assets/resimler/kurukay%25C4%25B1s%25C4%25B1.jpeg": "454f55e509e1f4b470867f3b262401ff",
"assets/resimler/lays.jpeg": "bd455f3839992d019d8b2299f00dc51c",
"assets/resimler/logo.png": "af07c871d91640538dbbe8e89905804b",
"assets/resimler/mercimek.jpeg": "279d05a28b2a37de402136ce83cf67a1",
"assets/resimler/nohut.jpeg": "73778647d079055ad8f8870815985557",
"assets/resimler/nutella.jpeg": "2fd241629e51a34a8e5629d52472a141",
"assets/resimler/omo.jpeg": "e1099af27e3c3ff3ac5f57edfaf14f06",
"assets/resimler/pepsi.jpeg": "1d6b676210058de660e40d3f6adc7356",
"assets/resimler/peros.jpeg": "82916a4b84d664c1c7b5a1a20a8c4a26",
"assets/resimler/perwol.jpeg": "f12460332094b149af9d5221139b55a3",
"assets/resimler/pirinc.jpeg": "67959e6c4006ceb85a07ca27678ff92c",
"assets/resimler/sabun.jpeg": "6999c921373f1fd4dd8771e15c4a61b2",
"assets/resimler/salca.jpeg": "7ba97ded1751d417dc864dd25cf3123a",
"assets/resimler/sekerleme_kuruyemis.jpg": "09e2f46a8c9aab4e223dd0bdeb9dd02f",
"assets/resimler/sprite.jpeg": "4a5a9f17769bc910cd62fe100a472e67",
"assets/resimler/su.jpeg": "5391bf76ffaf3c43e22db398c4902827",
"assets/resimler/sucuk.jpeg": "07e3397986cf8dbd4e64ab960e776048",
"assets/resimler/sut.jpeg": "950b5e2f3d74c7f26d6616215699f2bc",
"assets/resimler/sut_kahvaltilik.jpg": "ad61cdd6aca6cfc1ad8696a071d75a1d",
"assets/resimler/temizlik.jpg": "02518b0d54a4384e1050095ca9c06ec2",
"assets/resimler/tereya%25C4%259F%25C4%25B1.jpeg": "ba22c69224f1c99af14bddc45fb83cc4",
"assets/resimler/tereyag%25C4%25B1.jpeg": "ba22c69224f1c99af14bddc45fb83cc4",
"assets/resimler/yogurt.jpeg": "18a2350e548f509db76621f8366aab20",
"assets/resimler/yumurta.jpeg": "c326725495ef72a6edd97b30dee014f4",
"assets/resimler/zeytin.jpeg": "9862d1ce2514434c9f039e74edd299ad",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99dd0bd07a657f89af95966a3be4fc2a",
"/": "99dd0bd07a657f89af95966a3be4fc2a",
"main.dart.js": "faae516ba81fe7ca29907f1ea7dee9c9",
"manifest.json": "f5f5ab1e24e2eecda7fae869d64b1153",
"version.json": "f4f699d9ef1dc67ce10d388ec3ffda8e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
